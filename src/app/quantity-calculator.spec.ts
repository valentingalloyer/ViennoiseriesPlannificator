import { computeQuantities } from './quantity-calculator';

describe('computeQuantities', () => {
  it('répartit le total proportionnellement aux likes', () => {
    const result = computeQuantities(
      [
        { title: 'Croissant', likes: 3 },
        { title: 'Chocolatine', likes: 1 },
      ],
      8,
      1,
    );
    expect(result).toEqual([
      { title: 'Croissant', quantity: 6 },
      { title: 'Chocolatine', quantity: 2 },
    ]);
  });

  it('applique le ratio de voracité et arrondit au supérieur', () => {
    // total = 10 × 4/3 ≈ 13.33 ; Croissant = 13.33 × 1/2 ≈ 6.67 → 7
    const result = computeQuantities(
      [
        { title: 'Croissant', likes: 2 },
        { title: 'Chocolatine', likes: 2 },
      ],
      10,
      4 / 3,
    );
    expect(result.map((r) => r.quantity)).toEqual([7, 7]);
  });

  it("ne prévoit rien pour une viennoiserie sans like", () => {
    const result = computeQuantities(
      [
        { title: 'Croissant', likes: 5 },
        { title: 'Chouquette', likes: 0 },
      ],
      4,
      1,
    );
    expect(result.map((r) => r.quantity)).toEqual([4, 0]);
  });

  it("répartit équitablement quand personne n'a liké", () => {
    const result = computeQuantities(
      [
        { title: 'Croissant', likes: 0 },
        { title: 'Chocolatine', likes: 0 },
      ],
      4,
      1,
    );
    expect(result.map((r) => r.quantity)).toEqual([2, 2]);
  });
});
