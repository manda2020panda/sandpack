import { Sandpack } from "@codesandbox/sandpack-react";
import { githubLight, sandpackDark } from "@codesandbox/sandpack-themes";

import lodash from "raw-loader!lodash";

const Home: React.FC = () => {
  return (
    <div>
      <Sandpack
        template="vanilla"
        files={{
          "/src/index.js": `import { chunk } from "lodash";
          
console.log(chunk(['a', 'b', 'c', 'd'], 2))
          `,
          "/node_modules/lodash/package.json": JSON.stringify({
            name: "lodash",
            main: "./index.js",
          }),
          "/node_modules/lodash/index.js": lodash,
        }}
      />
      <Sandpack theme="dark" />
      <Sandpack theme={githubLight} />
      <Sandpack options={{ readOnly: true }} theme={sandpackDark} />
    </div>
  );
};

export default Home;
