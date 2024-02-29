import Layout from "../../components/Layout";
import { CargoGlobalNetworkReportLink } from "../../data/powerbiData";

const CargoGlobalNetworkReport = () => {
  return (
    <Layout>
      <iframe
        className="h-screen w-full border-none"
        title="Cargo Shipments Report"
        
        src={`${CargoGlobalNetworkReportLink}&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Cargo%20Global%20Network%20Report`}
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </Layout>
  );
};

export default CargoGlobalNetworkReport;
