export default {
  title: `Christmas Letter 2015`,
  tags: ['christmas'],
  spoiler: "We're glad you got our Christmas card. Last year was so busy, we didn't end up sending any out. But this year, despite finals and the regular craziness of the holidays, we made it a priority. As a side note, however, there was a slight typo in our return address. We live at 38 G Street.  The rest of the address is correct, we just forgot the street name.",
  getContent: () => import('./document.mdx'),
}