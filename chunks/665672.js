t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(512722),
    i = t.n(l);
function r(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class o {
    setExporter(e) {
        this.exporter = e;
    }
    export(e) {
        i()(null != this.exporter, 'DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.');
        let n = this.canvas.getCanvasForExport();
        return i()(null != n, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(n, e);
    }
    constructor(e, n) {
        r(this, 'canvas', void 0), r(this, 'exporter', void 0), (this.canvas = e), (this.exporter = n);
    }
}
