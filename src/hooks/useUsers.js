import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUsers() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return ctx;
}
