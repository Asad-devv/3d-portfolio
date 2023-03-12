
const SphereWithSkills = () => {
  const sphereRef = useRef();
  const htmlRef = useRef();

  const skills = [
    "MongoDB",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
  ];

  const handleFrame = (state, delta) => {
    const speed = 0.1;
    const rotationSpeed = 0.005;

    sphereRef.current.position.x = Math.cos(state.clock.getElapsedTime() * speed);
    sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime() * speed);

    sphereRef.current.rotation.y += delta * rotationSpeed;

    htmlRef.current.children.forEach((child, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      const radius = 1.5;
      child.position.x = Math.cos(angle) * radius;
      child.position.y = Math.sin(angle) * radius;
      child.rotation.x += delta * rotationSpeed;
      child.rotation.y += delta * rotationSpeed;
    });
  };

  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color("#f0f0f0"));
      }}
      onFrame={handleFrame}
    >
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.8} position={[100, 100, 100]} />
      <pointLight intensity={0.5} position={[-100, -100, -100]} />
      <OrbitControls />
      <Sphere ref={sphereRef} args={[1, 64, 64]}>
        {skills.map((skill, index) => (
          <Html key={index} ref={htmlRef} position={[0, 0, 0]}>
            <div>{skill}</div>
          </Html>
        ))}
      </Sphere>
    </Canvas>
  );
};

export default SphereWithSkills;