export default interface Project {
  id: number;
  name: string;
  description: string;
  topics: string[];
  fork: boolean;
  homepage: string;
  html_url: string;
}
