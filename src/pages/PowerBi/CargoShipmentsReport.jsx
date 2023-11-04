import Layout from "../../components/Layout";

const CargoShipmentsReport = () => {
  return (
    <Layout>
      <iframe
        className="h-screen w-full border-none"
        title="Cargo Shipments Report"
        src="https://app.powerbi.com/reportEmbed?reportId=a4eef5c8-d937-41b6-90aa-24620f8c1061&autoAuth=true&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Cargo%20Shipments%20Report"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </Layout>
  );
};

export default CargoShipmentsReport;
