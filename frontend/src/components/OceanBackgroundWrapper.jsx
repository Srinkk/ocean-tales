// components/OceanBackgroundWrapper.jsx
import oceanBg from "../assets/ocean-bg-home.jpg";

export default function OceanBackgroundWrapper({ children }) {
  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        backgroundImage: `url(${oceanBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
