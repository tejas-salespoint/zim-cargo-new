import { PowerBIEmbed } from "powerbi-client-react";
import Layout from "../../components/Layout";
import { models } from "powerbi-client";
import { useEffect } from "react";
import { PublicClientApplication } from "@azure/msal-browser";

const config = {
  auth: {
    clientId: "e9a42754-7929-4bbc-9714-cca68273598d",
    authority:
      "https://login.microsoftonline.com/2c3a6929-1f08-48f2-b07f-307527e8dd0b",
  },
};

const msalApp = new PublicClientApplication(config);

const getResourceToken = async () => {
  const request = {
    scopes: ["https://analysis.windows.net/powerbi/api"],
    username: "kashif.mohammed@salespointinc.com", // Replace with the user's username
    password: {
      secret: "Kashif@123", // Replace with the user's password
    },
  };

  try {
    const response = await msalApp.acquireTokenByUsername(request);
    console.log("Access Token:", response.accessToken);
    // Handle the obtained token here
  } catch (error) {
    console.error("Error:", error);
    // Handle any errors
  }
};

const Test = () => {
  useEffect(() => {
    getResourceToken();
  }, []);
  return (
    <Layout>
      <div className="!h-screen">
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual and qna
            id: "c64f518d-7dbc-4cdd-84da-1e22feb2cde5",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=764913d6-9033-4b70-9e5b-627e0df8833f&groupId=3587bba0-8555-4710-8601-0ee87208c08e&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
            accessToken:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMmMzYTY5MjktMWYwOC00OGYyLWIwN2YtMzA3NTI3ZThkZDBiLyIsImlhdCI6MTY5OTM2ODgxNywibmJmIjoxNjk5MzY4ODE3LCJleHAiOjE2OTkzNzM1NjEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBYVFBVy84VkFBQUFPaEhsMnBXaHUxb0pnZGxJZUZGcGk5TnFBdlY1UFZQVGkrUWRXZE5TKy9MaWRwQ1dZL3VDYTNKeW5NQzQycFlGTVZ6dTJkVThtdzV5b1MrSjJXR2lqNGtUb1BHVktCRXBqUWY3dVllcklaUnVMZFZvRmRWV2NIcDVBZU1kbXh4NlRONDlMaXFBR1k5TlVnOTZmWE1GUmZGOUZJRU9WRVNiMCtIeDRVNHFOcEdHSW5qRlNSbmVNL1VOVmlvWXNmMTJnMHdSSHFBbkNDbnlLUlEya0hSREN3PT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiMThmYmNhMTYtMjIyNC00NWY2LTg1YjAtZjdiZjJiMzliM2YzIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNT0hBTU1FRCIsImdpdmVuX25hbWUiOiJLQVNISUYiLCJpcGFkZHIiOiIxMDMuMTYyLjE1OC41NiIsIm5hbWUiOiJLQVNISUYgTU9IQU1NRUQiLCJvaWQiOiI3NWM3ZGIzNS1hNDEzLTRjOTktOWVjNy0yZTY0NjYwZmFkNzkiLCJwdWlkIjoiMTAwMzIwMDEzRkE1QTk5MCIsInB3ZF9leHAiOiIzMDE1NzY1MzciLCJwd2RfdXJsIjoiaHR0cHM6Ly9wcm9kdWN0aXZpdHkuc2VjdXJlc2VydmVyLm5ldC9taWNyb3NvZnQ_bWFya2V0aWQ9ZW4tVVNcdTAwMjZlbWFpbD1rYXNoaWYubW9oYW1tZWQlNDBzYWxlc3BvaW50aW5jLmNvbVx1MDAyNnNvdXJjZT1WaWV3VXNlcnNcdTAwMjZhY3Rpb249UmVzZXRQYXNzd29yZCIsInJoIjoiMC5BUzRBS1drNkxBZ2Y4a2l3ZnpCMUotamRDd2tBQUFBQUFBQUF3QUFBQUFBQUFBQzVBSzguIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUGlwZWxpbmUuRGVwbG95IFBpcGVsaW5lLlJlYWQuQWxsIFBpcGVsaW5lLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlJLOFZfaXpfV1pVYVNnYXd5Y3pWT0tBQzd0NEFUM01HZkVGUHpGUkVXSVEiLCJ0aWQiOiIyYzNhNjkyOS0xZjA4LTQ4ZjItYjA3Zi0zMDc1MjdlOGRkMGIiLCJ1bmlxdWVfbmFtZSI6Imthc2hpZi5tb2hhbW1lZEBzYWxlc3BvaW50aW5jLmNvbSIsInVwbiI6Imthc2hpZi5tb2hhbW1lZEBzYWxlc3BvaW50aW5jLmNvbSIsInV0aSI6InpJOFJuR3JPLTBTU09oTENhblFfQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.x53L3HP2We3l9LBJS3wcFA8XgOvHUe5G9n8JrJBS6ob2Q1t16xY-S7jxwICsFokLqjokW9vT8ZSa_VvMo2XkHaU5OGBy2GKzHoF84SqPZdvpH-AwJpuwCqVg1njKUXjQFNjYvvYPXadxTPyVLQtQN_DwV32JNWEE6v0gmUyONUk_ldy-sfTe9v3onAtz8unU_s-Mnj9nn2WfdeXd6MoVG0YQbZ9yvCLk1tsSSO8dT0H_FSJ2XwLn903ZD5RH-zUUsxyv9DbPiRHqh4-Q3LwBWEmFknEWxHJbG9PH8fpR32X5K6uAFCz28F6pIqjAudOacpsGpoBObQNY8P8sGvZi2w",
            tokenType: models.TokenType.Embed,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true,
                },
              },
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
            ])
          }
          cssClassName={"Embed-container"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />

        <iframe
          className="!h-screen"
          title="Report Section"
          width="600"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiNzhiYWYwM2EtNzEwYi00ZGExLWFiM2QtNTgzNmJlYmVlZDc2IiwidCI6IjJjM2E2OTI5LTFmMDgtNDhmMi1iMDdmLTMwNzUyN2U4ZGQwYiIsImMiOjZ9"
          frameBorder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Test;
