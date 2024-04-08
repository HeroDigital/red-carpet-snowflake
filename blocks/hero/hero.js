export default function decorate(block) {
  console.log(block)

  const wistia = `
    <video class="wistia-vid" id="wistia_simple_video_160" crossorigin="anonymous" aria-label="Video" src="/icons/1440x1440_DataCloud_Keynote_4s_Loop.mp4" autoplay controlslist="nodownload" playsinline="" muted="muted" loop="" preload="auto" type="video/m3u8" x-webkit-airplay="allow"></video>
  `

  const wistiaEl = document.createElement('div')
  wistiaEl.innerHTML = wistia
  block.append(wistiaEl)

}