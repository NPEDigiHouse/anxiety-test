import { Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

export interface IHeaderNavbarMenuItems {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
  isScrolled?: boolean;
}

const HeaderNavbarMenuItems: React.FC<IHeaderNavbarMenuItems> = ({
  href,
  label,
  isActive = false,
  onClick,
  isScrolled = false
}) => {
  return (
    <Link
      to={href}
      className={`px-[10px] sm:px-4 py-1 sm:py-2 rounded-full ${
        isActive
          ? `bg-primaryDarkBlue text-white ${
              isScrolled ? "" : ""
            }`
          : "bg-transparent text-primary-text-500"
      }`}
      onClick={onClick}
    >
      <Text className="font-poppins sm:font-poppins-semibold text-md sm:text-lg sm:tracking-[0.04em] text-center">
        {label}
      </Text>
    </Link>
  );
};
export default HeaderNavbarMenuItems;
