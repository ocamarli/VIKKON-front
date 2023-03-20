import React, { Suspense } from "react";
import LogoVikkon from "./components/LogoVikon";
import { Grid } from "@mui/material";
import { Canvas } from "react-three-fiber";
import { Model3d, NovaCanvas } from "./components/Newmodel";
import {
  Environment,
  useProgress,
  Html,
  OrbitControls,
} from "@react-three/drei";

const SvgComponent = (props) => {
  function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} %</Html>;
  }

  return (
    <Grid
      container
      padding={5}
      alignItems="center"
      justifyItems="center"
      justifyContent="center"
      sx={{ width: "95vw", height: "95vh" }}
    >
      { <Canvas>
        <Html>
          <Grid
            item
            xs={10}
            sx={{
              filter: "opacity(25%)",
              width: "95vw",
              height: "95vh",
              position: "absolute",
              top: "-50vh",
              left:"-50vw",
              zIndex: "-1"
            }}
          >
            <LogoVikkon />
          </Grid>
        </Html>
        <Suspense fallback={<Loader />}>
          <Environment preset="city" />
          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={0.3}
            enableZoom={false}
            enablePan={true}
            enableDamping={true}
          ></OrbitControls>

          <Model3d  scale={2}/>
        </Suspense>
      </Canvas> }

    </Grid>
  );
};

export default SvgComponent;
