export interface LikedViennoiserie {
  title: string;
  likes: number;
}

export interface ViennoiserieQuantity {
  title: string;
  quantity: number;
}

/**
 * Répartit les viennoiseries à acheter proportionnellement aux likes.
 *
 * 1. total à prévoir = nbPersonnes × ratioVoracite
 * 2. part d'une viennoiserie = ses likes / somme de tous les likes
 * 3. quantité = arrondi supérieur (total × part)
 *
 * Si personne n'a encore liké, on répartit équitablement.
 * L'arrondi supérieur garantit qu'il n'en manque jamais (quitte à en avoir une ou deux en trop).
 */
export function computeQuantities(
  viennoiseries: LikedViennoiserie[],
  nbPersonnes: number,
  ratioVoracite: number,
): ViennoiserieQuantity[] {
  const total = nbPersonnes * ratioVoracite;
  const totalLikes = viennoiseries.reduce((sum, v) => sum + v.likes, 0);

  return viennoiseries.map((v) => {
    const part = totalLikes === 0 ? 1 / viennoiseries.length : v.likes / totalLikes;
    return { title: v.title, quantity: Math.ceil(total * part) };
  });
}
