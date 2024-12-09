import { Text, Image } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";

export const TextSection = ({ title, subtitle, titleImage, subtitleImage, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.52}
          maxWidth={2.5}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
        >
          {title}
          <meshStandardMaterial
            color={"white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}

      {!!titleImage && (
        <Image
          url={titleImage}
          scale={[1, 1, 1]} // Adjust scale as needed
          position={[0, -0.6, 0]} // Adjust position as needed
        />
      )}

      <Text
        color="white"
        anchorX={"left"}
        anchorY="top"
        fontSize={0.2}
        maxWidth={2.5}
        font={"./fonts/Inter-Regular.ttf"}
      >
        {subtitle}
        <meshStandardMaterial
          color={"white"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>

      {!!subtitleImage && (
        <Image
          url={subtitleImage}
          scale={[0.5, 0.5, 0.5]} // Adjust scale as needed
          position={[0, -1.2, 0]} // Adjust position as needed
        />
      )}
    </group>
  );
};
