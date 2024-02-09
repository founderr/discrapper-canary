    "use strict";

    function e() {
      return r.el("225629").then(r.bind(r, "225629"))
    }
    async function o(t, n, r, o, u) {
      let i = await e();
      return i.crop_gif(t, n, r, o, u)
    }
    r.r(n), r.d(n, {
      default: function() {
        return e
      },
      wasmCropGIF: function() {
        return o
      }
    })