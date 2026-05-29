import * as Icons from "@tabler/icons-react";

const DynamicIconTabler = ({ name, size, stroke, color }) => {
  const Icon = Icons[name];

  if (!Icon) return null;

  return <Icon size={size} stroke={stroke} color={color}/>;
};

export default DynamicIconTabler;
