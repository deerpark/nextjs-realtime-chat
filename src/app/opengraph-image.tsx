import { ImageResponse } from "next/og";
import { default as NextImage } from "next/image";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "DX team chat";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NextImage
          src="/og.png"
          width={1200}
          height={630}
          alt={alt}
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
