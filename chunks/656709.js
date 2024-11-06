n.d(e, {
    p: function () {
        return r;
    }
});
var i = n(904245),
    l = n(957730);
function r(t) {
    let { channel: e, content: n, entry: r, whenReady: o, doNotNotifyOnError: a } = t,
        s = l.ZP.parse(e, n);
    return i.Z.sendMessage(e.id, s, o, {
        contentInventoryEntry: { unverified_content: r },
        doNotNotifyOnError: a
    });
}
