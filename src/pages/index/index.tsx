import { View, Image } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import Logo from "public/logo.jpg";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="">
      <Image src={Logo} className=" w-[1024px] h-[1024px] logo" />
    </View>
  );
}
