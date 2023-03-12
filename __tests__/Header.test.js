import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import mockRouter from "next-router-mock";
import { useSession } from "next-auth/react";

// Mock next-router
jest.mock("next/navigation", () => require("next-router-mock"));

// Mock next-auth client module
jest.mock("next-auth/react");

describe("Header", () => {
  // LINKS TO RENDER CORRECTLY
  test("Links to render correctly", () => {
    // mock next-router
    mockRouter.push("/");
    // Mock useSession hook
    useSession.mockReturnValueOnce({
      data: {},
      status: "unauthenticated",
    });

    render(<Header />);
    // About Link
    const aboutLink = screen.getByRole("link", {
      name: /about/i,
    });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "https://about.google/");
    // Home Link
    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "https://store.google.com");
    // Gmail Link
    const gmailLink = screen.getByRole("link", {
      name: /gmail/i,
    });
    expect(gmailLink).toBeInTheDocument();
    expect(gmailLink).toHaveAttribute("href", "https://mail.google.com");
    // Images Link
    const imagesLink = screen.getByRole("link", {
      name: /gmail/i,
    });
    expect(imagesLink).toBeInTheDocument();
  });
});
