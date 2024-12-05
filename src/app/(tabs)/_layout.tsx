import Browse from "@/src/assets/svgs/browse";
import Message from "@/src/assets/svgs/message";
import Profile from "@/src/assets/svgs/profile";
import Space from "@/src/assets/svgs/space";
import Wishlist from "@/src/assets/svgs/wishlist";
import { TabBar } from "@/src/components/ui/TabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ tabBarActiveTintColor: "blue" }}
    >
      <Tabs.Screen
        name="browse"
        options={{
          title: "Browse",
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Spaces",
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
