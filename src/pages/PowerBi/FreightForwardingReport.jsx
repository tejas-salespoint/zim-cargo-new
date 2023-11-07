import Layout from "../../components/Layout";

const FreightForwardingReport = () => {
  return (
    <Layout>
      <iframe
        className="h-screen w-full border-none"
        title="Cargo Shipments Report"
        src="https://app.powerbi.com/view?r=eyJrIjoiOTQwYTRjOGItOTM5Zi00ZjZlLWJiNjMtNjRjMTQwN2I5Mzg1IiwidCI6IjJjM2E2OTI5LTFmMDgtNDhmMi1iMDdmLTMwNzUyN2U4ZGQwYiIsImMiOjZ9&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Freight%20Forwarding%20Report"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </Layout>
  );
};

export default FreightForwardingReport;
