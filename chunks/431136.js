t.d(n, {
    m: function () {
        return f;
    }
});
var a = t(200651);
t(192379);
var c = t(468194),
    s = t(399606),
    d = t(481060),
    i = t(430824),
    o = t(768581),
    l = t(272416);
function f(e) {
    let { guildId: n } = e,
        t = (0, s.e7)([i.Z], () => i.Z.getGuild(n));
    if (null == t) return null;
    let f = null;
    if (null != t.icon) {
        let e = o.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 40
        });
        f = (0, a.jsx)(d.Avatar, {
            src: e,
            'aria-label': t.name,
            size: d.AvatarSizes.SIZE_24
        });
    } else {
        let e = (0, c.Zg)(t.name).slice(0, 2);
        f = (0, a.jsx)(d.Text, {
            variant: 'text-xs/semibold',
            className: l.acronym,
            'aria-hidden': !0,
            children: e
        });
    }
    return (0, a.jsxs)('div', {
        className: l.container,
        children: [
            f,
            (0, a.jsx)(d.Text, {
                variant: 'text-md/semibold',
                className: l.text,
                children: t.name
            })
        ]
    });
}
