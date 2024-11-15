n.d(t, {
    p: function () {
        return a;
    }
});
var r = n(904245),
    i = n(957730);
function a(e) {
    let { channel: t, content: n, entry: a, whenReady: s, doNotNotifyOnError: o } = e,
        l = i.ZP.parse(t, n);
    return r.Z.sendMessage(t.id, l, s, {
        contentInventoryEntry: { unverified_content: a },
        doNotNotifyOnError: o
    });
}
