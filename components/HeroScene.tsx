"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Lathe } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* -------------------------------------------------------- */
/* Wine bottle — lathe geometry from a 2D silhouette        */
/* -------------------------------------------------------- */
function WineBottle({ position = [0, 0, 0] as [number, number, number] }) {
  const points = useMemo(() => {
    const pts: THREE.Vector2[] = [];
    const profile: [number, number][] = [
      [0.0, 0.0],
      [0.32, 0.0],
      [0.34, 0.05],
      [0.34, 0.9],
      [0.33, 1.05],
      [0.27, 1.2],
      [0.14, 1.4],
      [0.1, 1.55],
      [0.1, 2.0],
      [0.12, 2.05],
      [0.13, 2.15],
      [0.0, 2.15],
    ];
    profile.forEach(([r, y]) => pts.push(new THREE.Vector2(r, y)));
    return pts;
  }, []);

  return (
    <group position={position}>
      <Lathe args={[points, 48]} castShadow>
        <meshPhysicalMaterial
          color="#1b2e1a"
          roughness={0.2}
          metalness={0.1}
          transmission={0.2}
          thickness={0.5}
          clearcoat={0.8}
          clearcoatRoughness={0.15}
        />
      </Lathe>
      {/* Foil cap */}
      <mesh position={[0, 2.05, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.22, 24]} />
        <meshStandardMaterial color="#4a1212" roughness={0.5} metalness={0.6} />
      </mesh>
      {/* Label */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.345, 0.345, 0.6, 32, 1, true]} />
        <meshStandardMaterial
          color="#f3e7cf"
          side={THREE.DoubleSide}
          roughness={0.8}
        />
      </mesh>
      <mesh position={[0, 0.6, 0.35]}>
        <planeGeometry args={[0.4, 0.15]} />
        <meshBasicMaterial color="#7a1e1e" />
      </mesh>
    </group>
  );
}

/* -------------------------------------------------------- */
/* Wine glass — bowl + stem + base via three lathes         */
/* -------------------------------------------------------- */
function WineGlass({ position = [0, 0, 0] as [number, number, number] }) {
  const bowlPts = useMemo(() => {
    const profile: [number, number][] = [
      [0.02, 0.9],
      [0.18, 0.95],
      [0.32, 1.05],
      [0.4, 1.25],
      [0.42, 1.55],
      [0.38, 1.85],
      [0.3, 2.1],
      [0.3, 2.12],
    ];
    return profile.map(([r, y]) => new THREE.Vector2(r, y));
  }, []);

  const wineRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!wineRef.current) return;
    wineRef.current.rotation.z =
      Math.sin(state.clock.getElapsedTime() * 0.4) * 0.025;
  });

  return (
    <group position={position}>
      {/* Stem */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.9, 16]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.9}
          roughness={0.05}
          thickness={0.5}
          ior={1.45}
        />
      </mesh>
      {/* Base */}
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.28, 0.3, 0.04, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.9}
          roughness={0.05}
          thickness={0.5}
          ior={1.45}
        />
      </mesh>
      {/* Bowl — transparent glass */}
      <Lathe args={[bowlPts, 48]}>
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.95}
          roughness={0.02}
          thickness={0.4}
          ior={1.45}
          side={THREE.DoubleSide}
        />
      </Lathe>
      {/* Wine inside */}
      <mesh ref={wineRef} position={[0, 1.45, 0]}>
        <cylinderGeometry args={[0.34, 0.3, 0.5, 32]} />
        <meshPhysicalMaterial
          color="#5a0a12"
          transmission={0.6}
          roughness={0.15}
          thickness={1}
          attenuationColor="#2a0408"
          attenuationDistance={0.3}
        />
      </mesh>
    </group>
  );
}

/* -------------------------------------------------------- */
/* Candle with flickering flame + point light               */
/* -------------------------------------------------------- */
function Candle({ position = [0, 0, 0] as [number, number, number] }) {
  const lightRef = useRef<THREE.PointLight>(null);
  const flameRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const flicker = 1.6 + Math.sin(t * 6) * 0.25 + Math.sin(t * 13) * 0.15 + Math.random() * 0.08;
    if (lightRef.current) lightRef.current.intensity = flicker;
    if (flameRef.current) {
      flameRef.current.scale.y = 1 + Math.sin(t * 8) * 0.08;
      flameRef.current.rotation.z = Math.sin(t * 3) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Holder */}
      <mesh position={[0, 0.04, 0]}>
        <cylinderGeometry args={[0.22, 0.24, 0.08, 24]} />
        <meshStandardMaterial color="#3a2a1f" roughness={0.5} metalness={0.6} />
      </mesh>
      {/* Candle stick */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.11, 0.12, 0.7, 24]} />
        <meshStandardMaterial color="#f2e7d1" roughness={0.9} />
      </mesh>
      {/* Wick */}
      <mesh position={[0, 0.82, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.04, 8]} />
        <meshStandardMaterial color="#2a1a10" />
      </mesh>
      {/* Flame */}
      <mesh ref={flameRef} position={[0, 0.92, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#ffb366" toneMapped={false} transparent opacity={0.95} />
      </mesh>
      <mesh position={[0, 0.92, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#ff7a2a" toneMapped={false} transparent opacity={0.35} />
      </mesh>
      {/* Light */}
      <pointLight
        ref={lightRef}
        position={[0, 0.95, 0]}
        color="#ffb26b"
        intensity={1.6}
        distance={8}
        decay={2}
      />
    </group>
  );
}

/* -------------------------------------------------------- */
/* Plate + table                                            */
/* -------------------------------------------------------- */
function Plate({ position = [0, 0, 0] as [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.85, 0.9, 0.04, 48]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.25}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </mesh>
      {/* tiny food mound */}
      <mesh position={[0, 0.08, 0]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial color="#4a2a18" roughness={0.7} />
      </mesh>
      <mesh position={[0.12, 0.13, 0.05]}>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshStandardMaterial color="#6b7a2e" roughness={0.8} />
      </mesh>
      <mesh position={[-0.15, 0.1, -0.05]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial color="#b8451f" roughness={0.8} />
      </mesh>
    </group>
  );
}

function Table() {
  return (
    <group position={[0, -0.05, 0]}>
      <mesh>
        <cylinderGeometry args={[3.2, 3.2, 0.12, 64]} />
        <meshStandardMaterial color="#2a1810" roughness={0.85} metalness={0.1} />
      </mesh>
      <mesh position={[0, -0.07, 0]}>
        <cylinderGeometry args={[3.25, 3.25, 0.02, 64]} />
        <meshStandardMaterial color="#1a0f08" roughness={0.95} />
      </mesh>
    </group>
  );
}

/* -------------------------------------------------------- */
/* Scene                                                    */
/* -------------------------------------------------------- */
function Scene({ pointer }: { pointer: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    const baseRot = t * 0.05;
    groupRef.current.rotation.y = baseRot + pointer.x * 0.2;
    groupRef.current.rotation.x = pointer.y * 0.08;
  });

  return (
    <>
      <ambientLight intensity={0.25} color="#fdd9a8" />
      <directionalLight position={[5, 6, 4]} intensity={0.35} color="#fff1d6" />
      <pointLight position={[-4, 2, -3]} intensity={0.8} color="#7a1e1e" distance={10} />

      <group ref={groupRef}>
        <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.3}>
          <Table />
          <Plate position={[0.6, 0.06, 0.8]} />
          <WineBottle position={[-1.1, 0.06, -0.4]} />
          <WineGlass position={[0.4, 0.06, -0.9]} />
          <Candle position={[-0.4, 0.06, 1.1]} />
        </Float>
      </group>

      <ContactShadows
        position={[0, -0.12, 0]}
        opacity={0.55}
        scale={10}
        blur={2.5}
        far={5}
        color="#1a0a04"
      />
      <Environment preset="warehouse" environmentIntensity={0.35} />
    </>
  );
}

/* -------------------------------------------------------- */
/* Canvas shell + pointer tracking                          */
/* -------------------------------------------------------- */
export default function HeroScene() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setPointer({ x: nx, y: ny });
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={onMove}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
      className="relative h-[420px] sm:h-[520px] lg:h-[620px] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1a0e07] via-[#2a140a] to-[#3a1a12] ring-1 ring-ink/10 shadow-soft"
    >
      <Canvas
        dpr={[1, 1.75]}
        frameloop={visible ? "always" : "demand"}
        camera={{ position: [0, 3.2, 5.2], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene pointer={pointer} />
      </Canvas>

      {/* Warm vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a0e07]/80 to-transparent" />

      {/* 50th Anniversary laurel badge */}
      <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
        <div className="relative grid h-24 w-24 sm:h-28 sm:w-28 place-items-center rounded-full bg-cream/10 ring-1 ring-cream/20 backdrop-blur-sm">
          <svg
            className="absolute inset-0 h-full w-full animate-slow-spin text-cream/60"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M20 55 Q 12 50 15 38 Q 20 30 28 32"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M80 55 Q 88 50 85 38 Q 80 30 72 32"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="currentColor"
              strokeDasharray="2 4"
              strokeWidth="0.6"
            />
          </svg>
          <div className="text-center leading-tight">
            <div className="font-serif text-2xl text-cream">50</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-cream/80">Years</div>
          </div>
        </div>
      </div>

      {/* Michelin chip */}
      <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 flex items-center gap-3 rounded-full bg-cream/10 px-4 py-2 ring-1 ring-cream/20 backdrop-blur-sm">
        <span className="text-xs font-semibold tracking-[0.25em] text-cream">MICHELIN 2026</span>
        <span className="h-4 w-px bg-cream/40" />
        <span className="script text-xl text-cream">Guide recognized</span>
      </div>
    </div>
  );
}
