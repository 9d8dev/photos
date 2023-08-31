// typings.d.ts
declare module "node" {
  interface NodeRequire {
    context: (
      directory: string,
      useSubdirectories?: boolean,
      regExp?: RegExp,
      mode?: string
    ) => any;
  }
}
