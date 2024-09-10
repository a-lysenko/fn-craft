export function ftry<T extends unknown, U extends unknown>(
  tryCallback: () => T, catchCallback: (error: any) => U, finallyCallback?: () => unknown
) {
  try {
    return tryCallback();
  } catch (error) {
    return catchCallback?.(error);
  } finally {
    finallyCallback?.();
  }
}
