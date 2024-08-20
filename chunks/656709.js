t.d(n, {
    p: function () {
        return i;
    }
});
var a = t(904245),
    l = t(957730);
function i(e) {
    let { channel: n, content: t, entry: i } = e,
        r = l.ZP.parse(n, t);
    return a.Z.sendMessage(n.id, r, void 0, { contentInventoryEntry: { unverified_content: i } });
}
