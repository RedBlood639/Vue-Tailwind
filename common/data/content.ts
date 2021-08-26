import { UserOptions } from "./enums";

export const contentSteps = {
  [UserOptions.WORKERS]: {
    label: "Drei einfache Schritte zu deinem neuen Job",
    steps: [
      {
        label: "Erstellen dein Lebenslauf",
        image: require("../../assets/images/content/steps/create-resume.svg"),
        alt: "Create Resume"
      },
      {
        label: "Erstellen dein Lebenslauf",
        image: require("../../assets/images/content/steps/select-project.svg"),
        alt: "Select Project"
      },
      {
        label: "Mit nur einem Klick bewerben",
        image: require("../../assets/images/content/steps/apply-job.svg"),
        alt: "Apply Job"
      }
    ]
  },
  [UserOptions.EMPLOYER]: {
    label: "Drei einfache Schritte zu deinem neuen Mitarbeiter",
    steps: [
      {
        label: "Erstellen dein Unternehmensprofil",
        image: require("../../assets/images/content/steps/create-profile.svg"),
        alt: "Create Profile"
      },
      {
        label: "Erstellen ein Jobinserat",
        image: require("../../assets/images/content/steps/create-job.svg"),
        alt: "Create Job"
      },
      {
        label: "Wähle deinen neuen Mitarbeiter aus",
        image: require("../../assets/images/content/steps/choose-employee.svg"),
        alt: "Choose Employee"
      }
    ]
  },
  [UserOptions.RECRUITER]: {
    label: "Drei einfache Schritte zur Vermittlung neuer Mitarbeiter",
    steps: [
      {
        label: "Erstellen dein Unternehmensprofil",
        image: require("../../assets/images/content/steps/create-profile.svg"),
        alt: "Create Resume"
      },
      {
        label: "Erhalte Vermittlungs- angebot von Arbeitgeber",
        image: require("../../assets/images/content/steps/place-offer.svg"),
        alt: "place-offer"
      },
      {
        label: "Vermittlung nach Provision oder Stundenlohn",
        image: require("../../assets/images/content/steps/mediation.svg"),
        alt: "Mediation"
      }
    ]
  }
};
