export enum UserOptions {
  WORKERS = "WORKERS",
  EMPLOYER = "EMPLOYER",
  RECRUITER = "RECRUITER"
}

export const userOptionLabels = {
  [UserOptions.WORKERS]: "Arbeitnehmer",
  [UserOptions.EMPLOYER]: "Arbeitgeber",
  [UserOptions.RECRUITER]: "Temporärbüro"
};
