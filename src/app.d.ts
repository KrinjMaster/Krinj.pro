declare global {
	namespace App {
	}
}

declare module '*.svg' {
  const content: string;
  export default content;
}

interface Position {
  x: number | null;
  y: number | null;
}

export { Position };
