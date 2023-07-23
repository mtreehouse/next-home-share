import { TuyaContext } from "@tuya/tuya-connector-nodejs";
export async function GET(request) {
  const context = new TuyaContext({
    baseUrl: "https://openapi.tuyaus.com",
    accessKey: "hn7v3uwaemcjarx7nvwd",
    secretKey: "b7143a599d6741b89b926a8570b6a379",
  });

  const device_id = "eb04329be2f87ba866rdqn";
  const commands = await context.request({
    path: `/v1.0/iot-03/devices/${device_id}/commands`,
    method: "POST",
    body: { commands: [{ code: "switch", value: true }] },
  });
  if (!commands.success) {
    new Error();
  }
  console.log("Execution result:", commands);
  return new Response(JSON.stringify(commands));
}
