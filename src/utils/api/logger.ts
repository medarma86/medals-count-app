export function logError(context: string, error: unknown) {
  if (error instanceof Error) {
    console.error(`[ERROR] ${context}: ${error.name} - ${error.message}`);
  } else {
    console.error(`[ERROR] ${context}:`, error);
  }
}

//need to remove these console logs before pushing to production and we can use @sentry/react for logging these errors - but need to expore it 