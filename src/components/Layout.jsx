// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className=" pt-16 h-screen  bg-bg_img">
      <div className="sm:ml-14">{children}</div>
    </div>
  );
};

export default Layout;
