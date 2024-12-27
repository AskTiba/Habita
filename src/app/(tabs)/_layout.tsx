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
    // tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="browse"
        options={{
          title: "Browse",
          tabBarIcon: ({ color, size }) => (
            <Browse color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color, size }) => (
            <Wishlist color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Spaces",
          tabBarIcon: ({ color, size }) => (
            <Space color={color}/>
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          // tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Message color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Profile color={color} />,
        }}
      />
    </Tabs>
  );
}
