export enum RegisterOptions {
  WORKERS = "WORKERS",
  EMPLOYER = "EMPLOYER",
  RECRUITER = "RECRUITER"
}

export const registerOptionLabels = {
  [RegisterOptions.WORKERS]: "Arbeitnehmer",
  [RegisterOptions.EMPLOYER]: "Arbeitgeber",
  [RegisterOptions.RECRUITER]: "Temporärbüro"
};
