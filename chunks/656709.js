n.d(t, {
    p: function () {
        return a;
    }
});
var i = n(904245),
    l = n(957730);
function a(e) {
    let { channel: t, content: n, entry: a, whenReady: r } = e,
        o = l.ZP.parse(t, n);
    return i.Z.sendMessage(t.id, o, r, { contentInventoryEntry: { unverified_content: a } });
}
