declare global {
	namespace App {
	}
}

declare module '*.svg' {
  const content: string;
  export default content;
}

export {};
