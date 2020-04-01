export default function calculateHealth(hero) {
  const { health } = hero;
  if (health > 50) {
    return 'healthy';
  } if (health <= 50 && health >= 15) {
    return 'wounded';
  } if (health < 15) {
    return 'critical';
  }
  return 'not value';
}
