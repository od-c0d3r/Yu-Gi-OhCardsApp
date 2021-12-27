export default async function getBlueEyesCards() {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes');
    const data = await response.json();
    return data.data
}
