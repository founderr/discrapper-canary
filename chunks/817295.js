"use strict";

function i() {
  return n.el("225629").then(n.bind(n, "225629"))
}
async function r(e, t, n, r, a) {
  let l = await i();
  return l.crop_gif(e, t, n, r, a)
}
n.r(t), n.d(t, {
  default: function() {
    return i
  },
  wasmCropGIF: function() {
    return r
  }
})