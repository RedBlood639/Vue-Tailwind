import { RegisterOptions } from "./enums";

export const homeRegistrationSteps = {
  [RegisterOptions.WORKERS]: {
    label: "Drei einfache Schritte zu deinem neuen Job",
    steps: [
      {
        label: "Erstellen dein Lebenslauf",
        image: require("../../assets/images/home/steps/create-resume.svg"),
        alt: "Create Resume"
      },
      {
        label: "Erstellen dein Lebenslauf",
        image: require("../../assets/images/home/steps/select-project.svg"),
        alt: "Select Project"
      },
      {
        label: "Mit nur einem Klick bewerben",
        image: require("../../assets/images/home/steps/apply-job.svg"),
        alt: "Apply Job"
      }
    ]
  },
  [RegisterOptions.EMPLOYER]: {
    label: "Drei einfache Schritte zu deinem neuen Mitarbeiter",
    steps: [
      {
        label: "Erstellen dein Unternehmensprofil",
        image: require("../../assets/images/home/steps/create-profile.svg"),
        alt: "Create Profile"
      },
      {
        label: "Erstellen ein Jobinserat",
        image: require("../../assets/images/home/steps/create-job.svg"),
        alt: "Create Job"
      },
      {
        label: "Wähle deinen neuen Mitarbeiter aus",
        image: require("../../assets/images/home/steps/choose-employee.svg"),
        alt: "Choose Employee"
      }
    ]
  },
  [RegisterOptions.RECRUITER]: {
    label: "Drei einfache Schritte zur Vermittlung neuer Mitarbeiter",
    steps: [
      {
        label: "Erstellen dein Unternehmensprofil",
        image: require("../../assets/images/home/steps/create-profile.svg"),
        alt: "Create Resume"
      },
      {
        label: "Erhalte Vermittlungs- angebot von Arbeitgeber",
        image: require("../../assets/images/home/steps/place-offer.svg"),
        alt: "place-offer"
      },
      {
        label: "Vermittlung nach Provision oder Stundenlohn",
        image: require("../../assets/images/home/steps/mediation.svg"),
        alt: "Mediation"
      }
    ]
  }
};
