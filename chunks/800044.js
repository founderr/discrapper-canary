"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("70102");
var l = n("103603"),
  i = n("695412"),
  a = class e {
    toDataUrl(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return e.toDataURL(t, n)
    }
    async exportCanvas(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "png",
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
      if (t === i.DiscordCanvasExporterOutputFormats.Base64) return this.toDataUrl(e, n, a);
      if (t === i.DiscordCanvasExporterOutputFormats.Blob) {
        let t = this.toDataUrl(e, n, a);
        return (0, l.dataUrlToBlob)(t)
      }
      if (t === i.DiscordCanvasExporterOutputFormats.File) {
        let t = this.toDataUrl(e, n, a);
        return await (0, l.dataUrlToFile)(t, "activityreaction.png", "image/png")
      }
      throw Error("DiscordCanvas: ".concat(t, " is not a valid export format."))
    }
  }