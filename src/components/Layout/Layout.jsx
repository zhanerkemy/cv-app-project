import Panel from "../Panel";

import "./Layout.scss";

const Layout = ({ children, activeSection, onNavigate }) => {
  return (
    <div className="layout">
      <aside className="layout__sidebar">
        <Panel activeSection={activeSection} onNavigate={onNavigate} />
      </aside>

      <main className="layout__content">{children}</main>
    </div>
  );
};

export default Layout;