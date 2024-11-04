n.d(e, {
    p: function () {
        return r;
    }
});
var i = n(904245),
    l = n(957730);
function r(t) {
    let { channel: e, content: n, entry: r, whenReady: o } = t,
        a = l.ZP.parse(e, n);
    return i.Z.sendMessage(e.id, a, o, { contentInventoryEntry: { unverified_content: r } });
}
