const imgs = [
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/ada5eab3-3714-4296-fb57-b52e87039f00/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/ada5eab3-3714-4296-fb57-b52e87039f00/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/f38be05e-d277-4fa3-6033-06cbbe0e4500/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/f38be05e-d277-4fa3-6033-06cbbe0e4500/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/6c90a1f1-c96a-44a8-eb59-1d1e3d0ff800/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/6c90a1f1-c96a-44a8-eb59-1d1e3d0ff800/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/16e9150b-93c3-4712-c29a-8248195b6200/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/16e9150b-93c3-4712-c29a-8248195b6200/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/fd8a4d25-2b2b-4f1e-1f2a-b4aa16826100/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/fd8a4d25-2b2b-4f1e-1f2a-b4aa16826100/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/e0664d1e-deb1-4957-eb04-5dca8d6ecf00/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/e0664d1e-deb1-4957-eb04-5dca8d6ecf00/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/62812a18-4ec6-4cc6-5479-177f62174400/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/62812a18-4ec6-4cc6-5479-177f62174400/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/015a52e7-2b10-489f-7ae5-5272d4870100/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/015a52e7-2b10-489f-7ae5-5272d4870100/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/9c327e93-9785-49fb-7aa5-16e084939800/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/9c327e93-9785-49fb-7aa5-16e084939800/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/262506a4-8c42-41a3-b792-8d9b9ce02f00/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/262506a4-8c42-41a3-b792-8d9b9ce02f00/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/1fb309de-2067-499d-7291-607d389c5f00/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/1fb309de-2067-499d-7291-607d389c5f00/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/1a23ed94-1e0f-4104-bf27-35ba73a8fb00/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/1a23ed94-1e0f-4104-bf27-35ba73a8fb00/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/2b8c24fe-3144-4b06-ae96-4f15b300bb00/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/2b8c24fe-3144-4b06-ae96-4f15b300bb00/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/965793ff-0558-4e53-6195-9fa4eaf41400/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/965793ff-0558-4e53-6195-9fa4eaf41400/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/a5a1959c-e1c5-47a7-463d-68a487153d00/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/a5a1959c-e1c5-47a7-463d-68a487153d00/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/3357d62f-086b-4757-e659-74d7fe151500/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/3357d62f-086b-4757-e659-74d7fe151500/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/fde3d272-e2e2-4449-e0ea-0d40df9eb900/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/fde3d272-e2e2-4449-e0ea-0d40df9eb900/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/105aef6c-0d77-47a6-62ae-60b3f3432d00/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/105aef6c-0d77-47a6-62ae-60b3f3432d00/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/4d655617-6d04-4e5f-7e2d-f4f35c24f500/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/4d655617-6d04-4e5f-7e2d-f4f35c24f500/ipad 600w",
    "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/ada5eab3-3714-4296-fb57-b52e87039f00/mobile 200w, https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/ada5eab3-3714-4296-fb57-b52e87039f00/ipad 600w"
]

const names = [
    "Live - Spaceman",
    "Big Bass Crash",
    "Balloon",
    "JetX",
    "Magnify Man",
    "Gift X",
    "Grau 7K",
    "Mines",
    "Penalty Shoot Out",
    "FootballX",
    "Plinko",
    "Keno",
    "Hilo",
    "Bac Bo",
    "Football studio",
    "Crazy Time",
    "Mega Ball",
    "Deal or no Deal",
    "Dragon Tiger",
    "Live - Spaceman"
]
function getRandomCardItem() {
    return `
    <div class="game-card-wrapper">
        <img
        srcset="${imgs[Math.floor(Math.random()*imgs.length)]}"
        alt="card" />
        <div class="hover-canvas">
        <div class="button">
            <svg width="12" height="12">
            <use href="#svg-play" />
            </svg>
            <span>Jogar</span>
        </div>
        </div>
        <div class="game-card-footer">
        <span>${names[Math.floor(Math.random()*imgs.length)]}</span>
        <span>PG Soft</span>
        </div>
    </div>
    `
}