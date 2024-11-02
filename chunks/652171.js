t.r(n),
    t.d(n, {
        default: function () {
            return p;
        }
    });
var l = t(200651);
t(192379);
var a = t(481060),
    i = t(239091),
    r = t(984933),
    u = t(904483),
    d = t(522762),
    o = t(466330),
    c = t(981631),
    s = t(388032);
function p(e) {
    let { guild: n, onSelect: t } = e,
        p = r.ZP.getDefaultChannel(n.id, !0, c.Plq.CREATE_INSTANT_INVITE),
        h = (0, d.Z)(n.id),
        I = (0, u.Z)(n),
        _ = (0, o.Z)({
            guild: n,
            source: c.t4x.GUILD_CONTEXT_MENU,
            channel: p
        });
    return (0, l.jsxs)(a.Menu, {
        navId: 'guild-context',
        'aria-label': s.intl.string(s.t.HpQykZ),
        onClose: i.Zy,
        onSelect: t,
        children: [
            (0, l.jsx)(a.MenuGroup, { children: h }),
            (0, l.jsxs)(a.MenuGroup, {
                children: [I, _]
            })
        ]
    });
}
