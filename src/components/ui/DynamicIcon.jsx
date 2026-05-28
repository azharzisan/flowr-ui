import * as Icons from "lucide-react";

const DynamicIcon = ({ name, size, strokeWidth, color }) => {
  const Icon = Icons[name];

  if (!Icon) return null;

  return <Icon size={size} strokeWidth={strokeWidth} color={color}/>;
};

export default DynamicIcon;
