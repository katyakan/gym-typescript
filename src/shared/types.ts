export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Ourclasses = "ourclasses",
  ContactUs = "conctactus",
}


export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface ClassType {
  name: string;
  description?: string;
  image: string;
}