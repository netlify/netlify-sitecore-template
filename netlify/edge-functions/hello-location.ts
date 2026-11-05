import type { Context, Config } from "@netlify/edge-functions";

export default async (req: Request, context: Context) => {
  const response = await context.next();

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  const geo = context.geo;
  const city = geo?.city || "an unknown location";
  const country = geo?.country?.name || "";
  const location = country ? `${city}, ${country}` : city;

  const banner = `
    <div style="background-color: #4a90d9; color: white; text-align: center; padding: 12px 16px; font-family: sans-serif; font-size: 16px;">
      Hello in, ${location}
    </div>
  `;

  const html = await response.text();
  const updatedHtml = html.replace(/<body([^>]*)>/, `<body$1>${banner}`);

  return new Response(updatedHtml, {
    status: response.status,
    headers: response.headers,
  });
};

export const config: Config = {
  path: "/*",
  excludedPath: ["/api/*", "/_next/*"],
};
