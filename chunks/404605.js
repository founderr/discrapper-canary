"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var l, i = n("627445"),
  a = n.n(i);
l = class {
  setExporter(e) {
    this.exporter = e
  }
  export (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    a(null != this.exporter, "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.");
    let l = this.canvas.getCanvasForExport();
    return a(null != l, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(l, e, t, n)
  }
  constructor(e, t) {
    this.canvas = e, this.exporter = t
  }
}