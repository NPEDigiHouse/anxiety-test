import React from "react";
import MainLayout from "../../layouts/MainLayout.layout";
import { Button, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/const/routes";
import { ArrowRightAltIcon } from "../../assets/icons/Fluent";

export interface INotFoundPage {}

const NotFoundPage: React.FC<INotFoundPage> = ({}) => {
  return (
    <MainLayout>
      <Stack className="mt-48">
        <Text className="text-primaryGreen self-center text-center font-poppins-bold text-[44px] md:text-[54px] tracking-4">
          Oopss...
        </Text>
        <Text className="text-primary-text-500 text-center self-center text-xl">
          Sepertinya anda salah mengetikkan link, klik tombol di bawah untuk
          kembali ke halaman beranda
        </Text>
        <Button
          className="bg-primaryDarkBlue hover:bg-primaryDarkBlue rounded-full w-fit px-8 !h-12 sm:!h-14 text-xl self-center font-normal mt-4 sm:mt-6 md:mt-8"
          rightIcon={
            <ArrowRightAltIcon
              size={26}
              className="mt-[2px]"
              color={"#FFFFFF"}
            />
          }
          component={Link}
          to={ROUTES.home}
        >
          Ke Beranda
        </Button>
      </Stack>
    </MainLayout>
  );
};
export default NotFoundPage;
