import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import User from "../components/User";
import mockRouter from "next-router-mock";
import { useSession, signIn, signOut } from "next-auth/react";

// Mock next-router
jest.mock("next/navigation", () => require("next-router-mock"));

// Mock next-auth client module
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

describe("User", () => {
  // USER IS NOT SIGNED IN
  test("is not signed in to render and behave correctly", () => {
    // mock next-router
    mockRouter.push("/");
    // Mock useSession hook
    useSession.mockReturnValueOnce({
      data: {},
      status: "unauthenticated",
    });
    render(<User />);

    const signInButton = screen.getByRole("button", {
      name: /sign in/i,
    });
    // TO BE IN THE DOCUMENT 
    expect(signInButton).toBeInTheDocument();

    // TO SIGN IN WHEN CLICKED
    fireEvent.click(signInButton);
    expect(signIn).toHaveBeenCalled();
  });

  // USER IS SIGNED IN
  test("is signed in", () => {
    // mock next-router
    mockRouter.push("/");
    // Mock useSession hook
    useSession.mockReturnValue({
      data: {
        user: {
          username: "jeffrafter",
        },
      },
      status: "authenticated",
    });

    render(<User />);

    const userImage = screen.getByRole("img", {
      name: /user image/i,
    });
    // TO BE IN THE DOCUMENT 
    expect(userImage).toBeInTheDocument();

    // TO SIGN OUT WHEN CLICKED
    fireEvent.click(userImage);
    expect(signOut).toHaveBeenCalled();
  });
});
