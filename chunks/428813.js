s.d(t, {
    Z: function () {
        return u;
    }
});
var n = s(200651);
s(192379);
var l = s(442837),
    i = s(270394),
    a = s(388610),
    r = s(430824),
    o = s(496675),
    c = s(246946),
    d = s(981631);
function u() {
    let e = (0, l.e7)([c.Z], () => c.Z.hideInstantInvites),
        { channel: t, guild: s } = (0, l.cj)(
            [a.Z, r.Z],
            () => {
                let { channel: e } = a.Z.getProps(),
                    t = null != e ? r.Z.getGuild(e.getGuildId()) : null;
                return {
                    channel: e,
                    guild: t
                };
            },
            []
        ),
        u = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.CREATE_INSTANT_INVITE, t), [t]),
        { invites: h, loading: m } = (0, l.cj)([a.Z], () => a.Z.getInvites(), []);
    return (0, n.jsx)(i.Z, {
        invites: h,
        loading: m,
        guild: s,
        channel: t,
        canCreateInvites: u,
        hide: e
    });
}
