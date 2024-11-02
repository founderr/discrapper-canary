n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(411104);
var r = n(493683),
    i = n(904245),
    a = n(541716),
    s = n(957730),
    o = n(592125),
    l = n(838440);
let u = async (e) => {
    let { userId: t, content: n, location: u, openChannel: c = !0, whenReady: d } = e,
        { valid: f, failureReason: _ } = await (0, l.v)({
            type: a.I.NORMAL,
            content: n,
            channel: null
        });
    if (!f) throw Error(_);
    let h = c ? await r.Z.openPrivateChannel(t, !1, !1, u) : await r.Z.getOrEnsurePrivateChannel(t),
        p = o.Z.getChannel(h);
    if (null == p) throw Error('Failed to open private channel');
    let m = s.ZP.parse(p, n);
    return i.Z.sendMessage(p.id, m, d);
};
