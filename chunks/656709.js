n.d(t, {
    p: function () {
        return i;
    }
});
var a = n(904245),
    l = n(957730);
function i(e) {
    let { channel: t, content: n, entry: i, whenReady: r } = e,
        s = l.ZP.parse(t, n);
    return a.Z.sendMessage(t.id, s, r, { contentInventoryEntry: { unverified_content: i } });
}
