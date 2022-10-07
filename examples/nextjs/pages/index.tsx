import { SandpackLogLevel } from "@codesandbox/sandpack-client";
import { Sandpack } from "@codesandbox/sandpack-react";
import { githubLight, sandpackDark } from "@codesandbox/sandpack-themes";

const Home: React.FC = () => {
  return (
    <div>
      <Sandpack
        template="react"
        options={{
          bundlerURL: "https://lkdt8x-1234.preview.csb.app/",
          logLevel: SandpackLogLevel.Debug,
        }}
      />

      {/* <Sandpack theme="dark" />
      <Sandpack theme={githubLight} />
      <Sandpack options={{ readOnly: true }} theme={sandpackDark} /> */}
    </div>
  );
};

export default Home;
