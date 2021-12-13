import { store } from "../../store";
import { createWrapper } from "next-redux-wrapper";
import HeadContent from "../../hoc/headContent";
import AppHeader from "../../components/common/headers/loggedInHeader";
import { useEffect } from "react";
import usePermission from "../../hooks/usePermissions";

function Layout(props) {
  const { auth } = store.getState();
  const { isAllowed } = usePermission();

  useEffect(() => {
    if (!auth.token) {
      window.location.href = "/login";
    } else if (props.permission) {
      if (!isAllowed(props.permission)) {
        window.location.href = "/required-permission";
      }
    }
  }, []);

  return (
    <>
      <HeadContent
        title={props.meta.title}
        description={props.meta.description}
        route={props.meta.route}
        image_url={props.meta.image_url}
      />
      <div className="app-layout">
        <AppHeader />
        <div className="app-content">{props.children}</div>
      </div>
    </>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

// export default Layout;
export default wrapper.withRedux(Layout);
