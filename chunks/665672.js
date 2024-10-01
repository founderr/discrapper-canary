n.d(t, {
    Z: function () {
        return r;
    }
});
var a = n(512722),
    l = n.n(a);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class r {
    setExporter(e) {
        this.exporter = e;
    }
    export(e) {
        l()(null != this.exporter, 'DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.');
        let t = this.canvas.getCanvasForExport();
        return l()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e);
    }
    constructor(e, t) {
        i(this, 'canvas', void 0), i(this, 'exporter', void 0), (this.canvas = e), (this.exporter = t);
    }
}
