    "use strict";
    r.r(t), r("312677");
    var n = r("504053");
    self.addEventListener("message", e => {
      let {
        data: {
          id: t,
          placeholderData: r
        }
      } = e, o = (0, n.createThumbhashImageFromPlaceholder)(r);
      self.postMessage({
        png: o,
        id: t
      })
    })