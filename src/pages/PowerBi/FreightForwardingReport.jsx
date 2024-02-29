import Layout from "../../components/Layout";
import { FreightForwardingReportLink } from "../../data/powerbiData";

const FreightForwardingReport = () => {
  return (
    <Layout>
      <iframe
        className="h-screen w-full border-none"
        title="Cargo Shipments Report"
        src={`${FreightForwardingReportLink}&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Cargo%20Global%20Network%20Report`}
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </Layout>
  );
};

export default FreightForwardingReport;
