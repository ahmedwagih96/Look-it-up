import { useSession, signIn, signOut } from "next-auth/react";

function User() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <img
          src={session.user.image}
          alt="user image"
          onClick={signOut}
          className="rounded-full h-10 w-10 hover:bg-gray-200 p-1 cursor-pointer"
        />
      </>
    );
  }
  return (
    <>
      <button onClick={signIn} className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:shadow-md hover:bg-blue-400">Sign In</button>
    </>
  );
}

export default User;
