import Layout from "../../components/Layout"


const CompetitorAnalysisReport = () => {
  return (
    <Layout>
    <iframe
      className="h-screen w-full border-none"
      title="Cargo Shipments Report"
      src="https://app.powerbi.com/reportEmbed?reportId=c69627e0-a4d3-439a-b98a-76dbe9a1085e&autoAuth=true&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Cargo%20Shipments%20Report"
      frameBorder="0"
      allowFullScreen="true"
    ></iframe>
  </Layout>
  )
}

export default CompetitorAnalysisReport