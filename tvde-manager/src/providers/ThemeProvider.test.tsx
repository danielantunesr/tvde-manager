import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { ThemeProvider, useTheme } from "./ThemeProvider";

// Minimal consumer to expose the context
function ThemeConsumer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}

function renderWithProvider(matchesDark = false) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: query === "(prefers-color-scheme: dark)" ? matchesDark : false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));

  return render(
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>
  );
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

describe("ThemeProvider", () => {
  it("defaults to light when no saved preference and system is light", () => {
    renderWithProvider(false);
    expect(screen.getByTestId("theme").textContent).toBe("light");
  });

  it("defaults to dark when system prefers dark and no saved preference", () => {
    renderWithProvider(true);
    expect(screen.getByTestId("theme").textContent).toBe("dark");
  });

  it("restores saved preference over system preference", () => {
    localStorage.setItem("tvde_theme", "dark");
    renderWithProvider(false); // system is light, but saved is dark
    expect(screen.getByTestId("theme").textContent).toBe("dark");
  });

  it("toggles from light to dark and saves to localStorage", async () => {
    renderWithProvider(false);
    await userEvent.click(screen.getByRole("button", { name: "toggle" }));
    expect(screen.getByTestId("theme").textContent).toBe("dark");
    expect(localStorage.getItem("tvde_theme")).toBe("dark");
  });

  it("toggles from dark back to light", async () => {
    localStorage.setItem("tvde_theme", "dark");
    renderWithProvider(false);
    await userEvent.click(screen.getByRole("button", { name: "toggle" }));
    expect(screen.getByTestId("theme").textContent).toBe("light");
    expect(localStorage.getItem("tvde_theme")).toBe("light");
  });

  it("sets data-theme attribute on <html> when toggling", async () => {
    renderWithProvider(false);
    await userEvent.click(screen.getByRole("button", { name: "toggle" }));
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("throws when useTheme is called outside provider", () => {
    // Suppress the expected React error boundary console noise
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<ThemeConsumer />)).toThrow(
      "useTheme must be used inside <ThemeProvider>"
    );
    consoleSpy.mockRestore();
  });
});
