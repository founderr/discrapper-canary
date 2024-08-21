t.d(n, {
    p: function () {
        return i;
    }
});
var a = t(904245),
    l = t(957730);
function i(e) {
    let { channel: n, content: t, entry: i, whenReady: r } = e,
        s = l.ZP.parse(n, t);
    return a.Z.sendMessage(n.id, s, r, { contentInventoryEntry: { unverified_content: i } });
}
