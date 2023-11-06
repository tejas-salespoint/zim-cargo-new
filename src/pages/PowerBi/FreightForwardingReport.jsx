import Layout from "../../components/Layout";

const FreightForwardingReport = () => {
  return (
    <Layout>
      <iframe
        className="h-screen w-full border-none"
        title="Cargo Shipments Report"
        src="https://app.powerbi.com/reportEmbed?reportId=3911e41e-d938-48fb-aa99-c1f169a8b1f0&autoAuth=true&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Freight%20Forwarding%20Report"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </Layout>
  );
};

export default FreightForwardingReport;
