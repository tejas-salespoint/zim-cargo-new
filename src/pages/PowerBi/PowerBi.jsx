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

        <iframe
          className="h-screen w-full border-none"
          title="Cargo Shipments Report"
          src="https://app.powerbi.com/reportEmbed?reportId=a4eef5c8-d937-41b6-90aa-24620f8c1061&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Cargo%20Shipments%20Report"
          frameBorder="0"
          allowFullScreen="true"
        ></iframe>
        <iframe
          className="h-screen w-full border-none"
          title="Cargo Shipments Report"
          src="https://app.powerbi.com/reportEmbed?reportId=a4eef5c8-d937-41b6-90aa-24620f8c1061&autoAuth=true&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Cargo%20Global%20Network%20Report"
          frameBorder="0"
          allowFullScreen="true"
        ></iframe>
        <iframe
          className="h-screen w-full border-none"
          title="Cargo Shipments Report"
          src="https://app.powerbi.com/reportEmbed?reportId=a4eef5c8-d937-41b6-90aa-24620f8c1061&autoAuth=true&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Freight%20Forwarding%20Report"
          frameBorder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
      {/* <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: "6e012317-dbb2-4b14-8bc9-755c86f11166",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
          accessToken: "H4sIAAAAAAAEACVWxa7FCnL8l7d1JPuYHWkWZmb2zszMjvLvuZnZt9Stoq7_-cdK32FOi3_--58tD-28gMHCGeXsobLflLcl9ZV-LoEIVI9OmVxFo-PXEyCDJEuE_jjsqI8jFEz0ypqb7aW44Og3xrRIjNgXd-MFS4zhZlOmbGCP3R6cPxuXSkNRdQ1oKegeAB_daq2DUohLqoYLhLvnvWdbII0dBB5DI3g0Upba_UjKiwVPoHDkLCCapRo7jcm9hij97jwevTIyTpCnfBS-3evylV-XZfpu5nwr3TjADTfZ-eqhMdOeZaHM6vrnF1UbHBhMriYmtvxuvlHuL2-ss-cMiR88uXrFk-ou1xb6hCgYXBXvX_oc5_poraSXyVywOGeLz7durJGKrvG-Hc_IFjhgp2MGWHBG1rQfigO04puyvhAmgoCNrHg2D1equ5jpcer7RG6Dj4W-COO4Ay4gV244SjDM-rG2I-NEoC3LdQadYIs8Wj2mLd_BMuHafO08BISnYshOecQKmQ8HK4AG1T0cPrW_QgdKUCcJRNu7OsNBhiIkBfOuq-xxmtFTCoa0ADZ1t7OtoGHf8pKuwh1HYLkGFNZAvJUMqFgbRGcMB8y11I6a6F1FO1bcuVEzA2cxHu8WPChrEIVTbvIDqLQMSMWFEEt42aROVqvnwO5Xg21U_3LLdZIAowU1oA4ilRTYFoAEweFTOoKhibnPheP8DY6izoIjHWGb6HnhwhhxgdxpF3CT770Uuya_hEQF4OocDjejoFNOIHHELAOpD5A8HX1IbSCkMnUan49KM4e8deBzmdk3llg-U1WvIviLSYfCVs9dwyl6y09H6V2oyXo0O5cSWcpW7ZmhLG5Mww8HT3SdFAGtzEGlVX7Dnm9MoNrHZKoMx_KsvRwVkNOrA5PWvrrOlTDlxfOYxeYPhsHmG2WTFHuY7sWgNHEoEFLPTwf5R2zQrW4Q6ERCwDgZZywwCXnGi9RwHCx8r3pSMkck87j9OS9cqcbHtjIaIgCZru6F96Grqux8CbhKJzgstlb0JQ4pPd138jvwztTDdsuVXJW4N_mjbCOL5Cl8wh06vqFNFzD5a4kSSkiZpQSYnybdHZwZOxAQm2BT-iM4YwqgR43sui0qrhoM1574PyMJpGIUk07xHaewKUci_eE8yRRmgXSznTqqXIYzcFd4rssHqDYnqiZY399WbVeBH2xqU92uCcM9noeehIviDd8lLjZhsK1qRGASgMXuJZksggDdJQYYTK23tpSAHxG68K9HdD1iRq50BdZzDsYhDWhYOXRtc8tjMG5bDtH5hsMgbAs6alVZzhSCV76oS8jlYjulYVeJpA9HxYl4WcepeD6bRQR66A0IrShgfrDyZIi_6LobzM6z1tpUeop1TWIZ4kBiDhDb_mYwWwqHXAKuH9GglrJYpx0ECjyHKbu-upHFjy_RDGxM1pHBaevguoqwIRQ55cv8QOT-Bg_rrIi8643JTijPPyFlGzSzi1EJZ9O2cpWjT-ZAg_5Ws_5jFsAhNom2kvJ87NGKvT_E3PYNq1HnhxNJ4BsKuqmjPzirbRzvDoGvexIvWu_u69DuuVhQY8MShK1RaDcDZaz6sFzEviCc6hRvJ93g0gWI4R6abcCyXkiCGkLKCQQ9pKfQ952kQ-J-JKXJiNWlptCnODQAYKIyAANVvmRf9qAvqPtnLCHFUbIegt0uSl_U0SbdkMcm7LHRYP_xrXKV7wtfO_OqGgB9p77fjo7ARts8Ln3pZ7GF4L3xmMUDrUY87XTFzAsoFHmSXUUOLWReMVnDlyY0pN34LDAILFqSuVf7ffV8ZYkn61cSmc_ZAX0Ww71t6fvdqjT0dO0_y9Bo_OL8JU5yw1Lg-fZJ4ngQucP1TPzdLEYNp4vxTYr6ZDvJZ8ic4-eGkl8zQRElyp0s-3Iykj56wcrbzvHHrsVJYhy7XCydP8I4R0i-yB1mTaY3-DWdEabQgNIyjbrKIUMG3oyIG0xF08FSCJt6XxJ1J2Hm7vt2pXDVycFKqcmD4tXE6QT8ve9PAaU8OTPcPiXcajOLB9t5KjDdksjOgaFY4cKMwidKlL9K0QviuW6eiz2JrepvnuvOfMEbT6FHbNU5OWRFwyaslxZ6pX86bfcCiAg7N3eGG3K87k3xMuNG_2c0TOMu9BT_rojEBV-Y7nTEMSXZQ1BSWAtqK-qQMYHCG8OZrEIKMmowJIXUIVCy7eljIlVdS92U_EtUxGgGvyxs7gWsgSoyRMV7yy7f8sw9IjO15bldco__vp6pYFtMHqPJYJl_wmsx5O5GUEtnEXdkvz31qOXcC1efzjA12cvM46nKfknThKqumVON6yjDpo0gLsVh7WELrj_-2C0aZZWs6ByFKYzBgtCf0TDrEXMaqOa5E-oHA_haEJgOcOS-wT43Yy8d1aufiemz0qgc71lwNSvSX-DIK7qOqiOgAyXZgHguhBSGulXoiVfMeEV7-9o9HHK_mpTZubLb61LjdNX-yB6NcC9vE3W5-8lh2HCzVpcMv59BjrEe1v_61z__9Q-7vcsxq-X7V9MmjekneUc6M2LiDVXyC48mIREP7af2VyV27S6IUMKBv4GEkUvIuigZDDGw3iJH1Ywp_BbljUd4pKmoGhXDrSqQy4q2kaS1lQxWM2D8pFao-JIn5uS89nXnphSb7nBKaco-79l7zW9NvnNgt4S2zHKxTdA0A-LuaF6hUFsmRa8rL2W4aisQOGWP9MstxM_6Wl_uGiVi7loeS9SSV1wQiVuO9yx5QarKXMr158XTwHZbDY0NQ2O62yJOrOcntmmZwQEL2dFn2NifKd3U-24A3xlEoa1mAAyF_FVidMb8nwq93jFHJSePKMRdyuaTz9exn6bkv5aCkFnOM4MEUGL-4Z2bOPd_YH6Xptzk4A_lZPSeH3k-GBky7TnzOkYUl_3vKbetp_Q4t_JvTMe1CUbxyxrnZJ6UJF0hjCJc0Jedp9P8Gu4_L1sU9wrxcaXl6Pr4yAyvO2u-1VQz2Y88PATXtw0yL7-GbYKt-JNCc2IRuj3UTnz8l6G5VjmZXiPrv_Y5hMy9-jP_aW0M2ePZxmUlbMHR_JwoYmz9hO0KzlFByngmZ4NqwzGIEJcJ85ofDid9i4hLi8x_AUS-6Tw70PCgwv541_5XIU3enuisGwJ71iwxqrLdBWkSGwcU_eM2gh2Z1W1bDoo51S0LU-MPpsEzDYCqiLF5BOiHyL6z-HkmK9YqFkF_eW2kwrQAxPFTauUFJU0En7FMxHQ9ygoW8vivbAUkwfGb1ps78skc9f-a_9__A58_QBKaDAAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJleHAiOjE2OTkxMjQ0NTksImFsbG93QWNjZXNzT3ZlclB1YmxpY0ludGVybmV0Ijp0cnVlfQ==",
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
