n.d(t, {
    m: function () {
        return d;
    }
});
var a = n(735250);
n(470079);
var i = n(468194),
    l = n(399606),
    s = n(481060),
    o = n(430824),
    r = n(768581),
    c = n(419091);
function d(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([o.Z], () => o.Z.getGuild(t));
    if (null == n) return null;
    let d = null;
    if (null != n.icon) {
        let e = r.ZP.getGuildIconURL({
            id: n.id,
            icon: n.icon,
            size: 40
        });
        d = (0, a.jsx)(s.Avatar, {
            src: e,
            'aria-label': n.name,
            size: s.AvatarSizes.SIZE_24
        });
    } else {
        let e = (0, i.Zg)(n.name).slice(0, 2);
        d = (0, a.jsx)(s.Text, {
            variant: 'text-xs/semibold',
            className: c.acronym,
            'aria-hidden': !0,
            children: e
        });
    }
    return (0, a.jsxs)('div', {
        className: c.container,
        children: [
            d,
            (0, a.jsx)(s.Text, {
                variant: 'text-md/semibold',
                className: c.text,
                children: n.name
            })
        ]
    });
}
