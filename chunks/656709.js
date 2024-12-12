r.d(n, {
    p: function () {
        return s;
    }
});
var i = r(904245),
    a = r(957730);
function s(e) {
    let { channel: n, content: r, entry: s, whenReady: o, doNotNotifyOnError: l } = e,
        u = a.ZP.parse(n, r),
        c = { unverified_content: s };
    return i.Z.sendMessage(n.id, u, o, {
        contentInventoryEntry: c,
        doNotNotifyOnError: l
    });
}
