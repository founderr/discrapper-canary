t.d(n, {
    Z: function () {
        return m;
    }
});
var l = t(200651),
    i = t(950104),
    r = t(780384),
    a = t(481060),
    s = t(410030),
    c = t(114487),
    o = t(686546),
    u = t(981631),
    d = t(388032),
    h = t(950039);
function m(e) {
    let { profile: n } = e,
        t = (function (e, n) {
            var t;
            let l = null !== (t = n.brandColorPrimary) && void 0 !== t ? t : '#f8a3e4',
                a = e === u.BRd.DARK ? (0, i.DT)(l, 0.8) : (0, r.r5)(l, 0.8);
            return 'linear-gradient(0deg, '.concat(l, ' 0%, ').concat(a, ' 100%)');
        })((0, s.ZP)(), n);
    return (0, l.jsxs)('div', {
        className: h.container,
        children: [
            (0, l.jsx)('div', {
                className: h.banner,
                style: { background: t }
            }),
            (0, l.jsx)('div', {
                className: h.avatarContainer,
                children: (0, l.jsx)(o.ZP, {
                    mask: o.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, l.jsx)('div', {
                        className: h.avatarWrapper,
                        children: (0, l.jsx)(c.b, {
                            guildId: n.id,
                            guildName: n.name,
                            guildIcon: n.icon,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, l.jsxs)('div', {
                className: h.header,
                children: [
                    (0, l.jsx)(a.Heading, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: n.name
                    }),
                    (0, l.jsxs)('div', {
                        className: h.members,
                        children: [
                            (0, l.jsx)('div', {
                                className: h.memberCount,
                                children: (0, l.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: d.intl.format(d.t.zRl6XV, { count: n.memberCount })
                                })
                            }),
                            (0, l.jsxs)('div', {
                                className: h.memberCount,
                                children: [
                                    (0, l.jsx)('div', { className: h.dotOnline }),
                                    (0, l.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: d.intl.format(d.t['LC+S+v'], { membersOnline: n.onlineCount })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: h.body,
                children: (0, l.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: n.description
                })
            })
        ]
    });
}
