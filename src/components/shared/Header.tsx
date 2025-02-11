
import { getServerSession } from "next-auth";
import Navbar from "./Navbar";
import { authOptions } from "@/utils/authOptions";


const Header = async () => {
  const session = await getServerSession(authOptions)

  return (
    <>
      <Navbar session={session}/>
    </>
  );
};

export default Header;