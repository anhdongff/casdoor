// the console already sends anonymous visitors to the organization of their last sign-in with this key
const STORAGE_KEY = "lastLoginOrg";

export function getRememberedOrganization(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

export function rememberOrganization(name: string) {
  if (!name) {
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, name);
  } catch {
    // blocked storage only means the choice is not kept
  }
}