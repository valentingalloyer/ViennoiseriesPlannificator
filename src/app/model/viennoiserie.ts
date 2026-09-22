export interface Macronutriments {
  proteines: number;
  glucides: number;
  dont_sucres: number;
  lipides: number;
  dont_acides_gras_satures: number;
}

export interface Viennoiserie {
  id: string;
  nom: string;
  energie_kcal: number;
  macronutriments_g: Macronutriments;
  fibres_g: number;
  allergenes: string[];
}
