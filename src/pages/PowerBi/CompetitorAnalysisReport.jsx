import Layout from "../../components/Layout"
import { CompetitorAnalysisReportLink } from "../../data/powerbiData"


const CompetitorAnalysisReport = () => {
  return (
    <Layout>
    <iframe
      className="h-screen w-full border-none"
      title="Cargo Shipments Report"
      src={`${CompetitorAnalysisReportLink}&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Cargo%20Global%20Network%20Report`}
      frameBorder="0"
      allowFullScreen="true"
    ></iframe>
  </Layout>
  )
}

export default CompetitorAnalysisReport