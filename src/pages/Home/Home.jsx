import Layout from "../../components/Layout";
import logo from '/src/assets/secondary_logo.png'
import mainlogo from '/src/assets/primary_logo.png'

const Home = () => {
  return (
    <Layout className='overflow-y-scroll scrollbar-thumb-blue scrollbar-track-gray scrollbar-track-rounded"'>
   <div className="flex justify-center items-center h-[80vh]">
    {/* <img className="h-96 w-96" src={mainlogo} /> */}
    <img className="h-52 w-52" src={logo} />
   </div>
    </Layout>

  );
};

export default Home;
