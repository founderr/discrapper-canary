"use strict";

function i() {
  return n.el("225629").then(n.bind(n, "225629"))
}
async function r(t, e, n, r, a) {
  let s = await i();
  return s.crop_gif(t, e, n, r, a)
}
n.r(e), n.d(e, {
  default: function() {
    return i
  },
  wasmCropGIF: function() {
    return r
  }
})