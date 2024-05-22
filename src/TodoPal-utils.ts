import { jwtDecode } from "jwt-decode";

export function getJwtExpiration(token: string): number | undefined {
  try {
    return jwtDecode(token)?.exp;
  } catch (error) {
    return undefined;
  }
}

export function getUsername(token: string): string | undefined {
  try {
    return jwtDecode<{ username: string }>(token)?.username;
  } catch (error) {
    return undefined;
  }
}
