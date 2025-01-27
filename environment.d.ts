declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";

      NEXT_PUBLIC_GOOGLE_PLACES_API_KEY: string;
      NEXT_PUBLIC_GOOGLE_PLACE_ID: string;
    }
  }
}

export {};
