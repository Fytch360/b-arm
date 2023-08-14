import { lazy, Suspense } from "react";
import { HostPage } from "ui";
import "./index.css";

const RemoteViteReactPage = lazy(() => import("remote_vite_react/page"));
const RemoteViteReactTsPage = lazy(() => import("remote_vite_react_ts/page"));
const RemoteViteReactComponent = lazy(
  () => import("remote_vite_react/component")
);

const RemoteViteReactTsComponent = lazy(
  () => import("remote_vite_react_ts/component")
);

function App() {
  return (
    <HostPage
      hostType="Vite React"
      remoteComponents={
        <Suspense>
          <RemoteViteReactComponent />
          <RemoteViteReactTsComponent />
        </Suspense>
      }
    >
      <Suspense>
        <RemoteViteReactPage withHostApp />
        <RemoteViteReactTsPage />
      </Suspense>
    </HostPage>
  );
}

export default App;
