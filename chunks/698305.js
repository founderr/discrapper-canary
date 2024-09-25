n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(411104);
var i = n(493683),
    a = n(904245),
    o = n(541716),
    s = n(957730),
    l = n(592125),
    u = n(838440);
let c = async (e) => {
    let { userId: t, content: n, location: r, openChannel: c = !0, whenReady: d } = e,
        { valid: _, failureReason: E } = await (0, u.v)({
            type: o.I.NORMAL,
            content: n,
            channel: null
        });
    if (!_) throw Error(E);
    let f = c ? await i.Z.openPrivateChannel(t, !1, !1, r) : await i.Z.getOrEnsurePrivateChannel(t),
        h = l.Z.getChannel(f);
    if (null == h) throw Error('Failed to open private channel');
    let p = s.ZP.parse(h, n);
    return a.Z.sendMessage(h.id, p, d);
};
