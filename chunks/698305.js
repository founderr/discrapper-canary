n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(411104);
var r = n(493683),
    i = n(904245),
    a = n(541716),
    s = n(656709),
    o = n(957730),
    l = n(592125),
    u = n(838440);
let c = async (e) => {
    let { userId: t, content: n, location: c, openChannel: d = !0, whenReady: f, entry: _ } = e,
        { valid: p, failureReason: h } = await (0, u.v)({
            type: a.Ie.NORMAL,
            content: n,
            channel: null
        });
    if (!p) throw Error(h);
    let m = d ? await r.Z.openPrivateChannel(t, !1, !1, c) : await r.Z.getOrEnsurePrivateChannel(t),
        g = l.Z.getChannel(m);
    if (null == g) throw Error('Failed to open private channel');
    if (null != _)
        (0, s.p)({
            channel: g,
            content: n,
            entry: _,
            whenReady: f
        });
    else {
        let e = o.ZP.parse(g, n);
        return i.Z.sendMessage(g.id, e, f);
    }
};
