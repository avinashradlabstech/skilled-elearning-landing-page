export const extractPathsFromSVGUrl = async function(url: string): Promise<string> {
  const response = await fetch(url);
  const svgText = await response.text();

  // Use DOMParser to parse the SVG text and extract paths
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgText, "image/svg+xml");

  // Extract all path elements
  const paths = doc.querySelectorAll("path");

  // Map the NodeList to an array of path data (d attribute)
  const pathData = Array.from(paths).map((path) => path.getAttribute("d"));

  // Concatenate all path data into a single string and return
  return pathData.filter(Boolean).join(" ");
}