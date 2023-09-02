export function getRandomTags(): [string, string] {
  const frontendWords: string[] = [
    "HTML", "CSS", "JavaScript", "React", "Angular", "Vue", "TypeScript", "Webpack",
    "Responsive", "UI", "UX", "Framework", "Library", "API", "Component", "DOM", "AJAX", "SPA"
  ];

   const randomWord = [...frontendWords].sort(() => Math.random() - 0.5);
  return [randomWord[0], randomWord[1]];

}