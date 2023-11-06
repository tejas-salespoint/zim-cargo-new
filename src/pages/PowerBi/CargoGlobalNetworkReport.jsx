import Layout from "../../components/Layout";

const CargoGlobalNetworkReport = () => {
  return (
    <Layout>
      <iframe
        className="h-screen w-full border-none"
        title="Cargo Shipments Report"
        // src="https://app.powerbi.com/reportEmbed?reportId=a4eef5c8-d937-41b6-90aa-24620f8c1061&autoAuth=true&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Cargo%20Global%20Network%20Report"
        src="https://app.powerbi.com/reportEmbed?reportId=8be4de4e-c2ec-43f7-8245-81ad4d8be34c&autoAuth=true&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Cargo%20Global%20Network%20Report"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </Layout>
  );
};

export default CargoGlobalNetworkReport;
