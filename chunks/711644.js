n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(47120);
var i = n(518263);
var a = n(970173);
var o = n(520712);
var s = n(268111);
var l = n(941497);
var u = n(32026);
var c = n(480839);
var d = n(744285);
var _ = n(492257);
var E = n(873817);
var f = n(512722),
    h = n.n(f),
    p = n(735630);
async function m(e) {
    let t;
    let n = p.createFile(!1),
        r = new Promise((e) => {
            n.onReady = e;
        }),
        i = await e.arrayBuffer();
    for (let e of ((i.fileStart = 0), n.appendBuffer(i), n.flush(), await r, h()(null != n.boxes, 'mp4boxInputFile.boxes should not be null after parsing'), n.boxes)) 'uuid' === e.type && (t = e.start);
    let a = e.slice(0, t, e.type),
        o = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([a, new Uint8Array([0, 0, 0, 24]), o], { type: e.type });
}
