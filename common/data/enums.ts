export enum RegisterOptions {
  Workers = "WORKERS",
  Employer = "EMPLOYER",
  Recruiter = "RECRUITER"
}

export const registerOptionLabels = {
  [RegisterOptions.Workers]: "Arbeitnehmer",
  [RegisterOptions.Employer]: "Arbeitgeber",
  [RegisterOptions.Recruiter]: "Temporärbüro"
};
