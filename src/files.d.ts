declare module "*.svg?preact" {
  import * as Preact from "preact";
  const PreactComponent: Preact.FunctionComponent<
    Preact.ComponentProps<"svg"> & { title?: string }
  >;
  export default PreactComponent;
}
