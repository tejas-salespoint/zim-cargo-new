import { models } from "powerbi-client";
import Layout from "../../components/Layout";
import { PowerBIEmbed } from "powerbi-client-react";

// https://app.powerbi.com/reportEmbed?reportId=a4eef5c8-d937-41b6-90aa-24620f8c1061&autoAuth=true&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a

{
  /* <iframe title="Cargo Shipments Report" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=a4eef5c8-d937-41b6-90aa-24620f8c1061&autoAuth=true&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a" frameborder="0" allowFullScreen="true"></iframe> */
}
const PowerBi = () => {
  return (
    <Layout>
      <div>
        {/* <iframe
          className="min-h-screen w-full"
          title="Sample Report Demo"
          src="https://playground.powerbi.com/sampleReportEmbed"
        ></iframe> */}

<iframe  className="min-h-screen w-full" title="Cargo Shipments Report"  src="https://app.powerbi.com/reportEmbed?reportId=a4eef5c8-d937-41b6-90aa-24620f8c1061&autoAuth=true&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a&" frameBorder="0" allowFullScreen="true"></iframe>
      </div>
      {/* <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: "a4eef5c8-d937-41b6-90aa-24620f8c1061",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=a4eef5c8-d937-41b6-90aa-24620f8c1061&autoAuth=true&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a",
          accessToken: "<Access Token>",
          tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
            ["visualClicked", () => console.log("visual clicked")],
            ["pageChanged", (event) => console.log(event)],
          ])
        }
        cssClassName={"reportClass"}
        getEmbeddedComponent={(embeddedReport) => {
          this.report = embeddedReport;
        }}
      /> */}

      
    </Layout>
  );
};

export default PowerBi;
