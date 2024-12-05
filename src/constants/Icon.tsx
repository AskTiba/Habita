import Browse from "@assets/svgs/browse";
import Habita from "@assets/svgs/habita";
import Message from "@assets/svgs/message";
import Profile from "@assets/svgs/profile";
import Space from "@assets/svgs/space";
import Wishlist from "@assets/svgs/wishlist";

export const icon = {
  browse: (props: any) => <Browse height={28} width={28} {...props} />,
  wishlist: (props: any) => <Wishlist height={28} width={28} {...props} />,
  index: (props: any) => <Habita height={28} width={28} {...props} />,
  chat: (props: any) => <Message height={28} width={28} {...props} />,
  profile: (props: any) => <Profile height={28} width={28} {...props} />,
};
