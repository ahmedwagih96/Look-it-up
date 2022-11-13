import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";
function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className ='flex flex-col items-center justify-center screen-height'>
            <img
              src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"
              alt="google logo"
              className="w-52 h-52  object-cover"
            />
            <p className="text-sm italic my-5">This website is created for learning purposes</p>
            <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default SignIn;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
