import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/app/components/Guest";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return <div>Hi This is new fresh Page...</div>;
}
