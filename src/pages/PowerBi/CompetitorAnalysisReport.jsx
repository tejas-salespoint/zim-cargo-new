import Layout from "../../components/Layout"


const CompetitorAnalysisReport = () => {
  return (
    <Layout>
    <iframe
      className="h-screen w-full border-none"
      title="Cargo Shipments Report"
      src="https://app.powerbi.com/view?r=eyJrIjoiMjJiYzc5NjktNGU3Yy00NDdjLThkNzctMGM3ODE2ODM2Y2I5IiwidCI6IjJjM2E2OTI5LTFmMDgtNDhmMi1iMDdmLTMwNzUyN2U4ZGQwYiIsImMiOjZ9&filterPaneEnabled=true&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Cargo%20Shipments%20Report"
      frameBorder="0"
      allowFullScreen="true"
    ></iframe>
  </Layout>
  )
}

export default CompetitorAnalysisReport