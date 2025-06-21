"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface FloorPlanProps {
  selectedTable: string | null;
  onTableSelect: (tableId: string) => void;
}

const FloorPlan = ({ selectedTable, onTableSelect }: FloorPlanProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const tablesRef = useRef<{ [key: string]: THREE.Mesh }>({});

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x1f2937);

    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.set(0, 20, 25);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Floor
    const indoorFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(15, 20),
      new THREE.MeshStandardMaterial({ color: 0x2d3748, roughness: 0.8 })
    );
    indoorFloor.rotation.x = -Math.PI / 2;
    indoorFloor.position.set(-7.5, 0, 0);
    scene.add(indoorFloor);

    const outdoorFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(15, 20),
      new THREE.MeshStandardMaterial({ color: 0x374151, roughness: 0.9 })
    );
    outdoorFloor.rotation.x = -Math.PI / 2;
    outdoorFloor.position.set(7.5, 0, 0);
    scene.add(outdoorFloor);

    // Trees
    const createTree = (x: number, z: number) => {
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 1.5, 8),
        new THREE.MeshStandardMaterial({ color: 0x8b4513 })
      );
      trunk.position.set(x, 0.75, z);
      scene.add(trunk);

      const leaves = new THREE.Mesh(
        new THREE.ConeGeometry(1, 2, 8),
        new THREE.MeshStandardMaterial({ color: 0x2f855a })
      );
      leaves.position.set(x, 2, z);
      scene.add(leaves);
    };

    createTree(12, -8);
    createTree(12, 8);
    createTree(3, -8);
    createTree(3, 8);

    // Tables
    const tablePositions: Record<string, [number, number, number, string]> = {
      A1: [-10, 0, -6, "indoor"],
      A2: [-6, 0, -6, "indoor"],
      B1: [-10, 0, -2, "indoor"],
      B2: [-6, 0, -2, "indoor"],
      C1: [6, 0, -6, "outdoor"],
      C2: [10, 0, -6, "outdoor"],
      D1: [6, 0, -2, "outdoor"],
      D2: [10, 0, -2, "outdoor"],
    };

    const chairGeometry = new THREE.BoxGeometry(0.8, 1, 0.8);
    const chairMaterial = new THREE.MeshStandardMaterial({ color: 0x475569 });

    Object.entries(tablePositions).forEach(([id, [x, y, z]]) => {
      const table = new THREE.Mesh(
        new THREE.BoxGeometry(3, 0.5, 2),
        new THREE.MeshStandardMaterial({
          color: selectedTable === id ? 0x14b8a6 : 0x4a5568,
        })
      );
      table.position.set(x, y + 0.25, z);
      scene.add(table);
      tablesRef.current[id] = table;

      const chairOffsets = [
        [x - 1, z - 1.2],
        [x + 1, z - 1.2],
        [x - 1, z + 1.2],
        [x + 1, z + 1.2],
      ];
      chairOffsets.forEach(([cx, cz]) => {
        const chair = new THREE.Mesh(chairGeometry, chairMaterial);
        chair.position.set(cx, 0.5, cz);
        scene.add(chair);
      });

      // Floating label
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 64;
      const context = canvas.getContext("2d");
      if (context) {
        context.fillStyle = "#ffffff";
        context.font = "bold 48px Arial";
        context.textAlign = "center";
        context.fillText(id, 64, 48);
      }

      const texture = new THREE.CanvasTexture(canvas);
      const labelMaterial = new THREE.SpriteMaterial({ map: texture });
      const label = new THREE.Sprite(labelMaterial);
      label.position.set(x, 2, z);
      label.scale.set(2, 1, 1);
      scene.add(label);
    });

    // Animation loop
    const animate = () => {
      if (!rendererRef.current || !cameraRef.current || !sceneRef.current)
        return;
      requestAnimationFrame(animate);
      const time = Date.now() * 0.0001;
      camera.position.x = 25 * Math.cos(time);
      camera.position.z = 25 * Math.sin(time);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [selectedTable]);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default FloorPlan;
