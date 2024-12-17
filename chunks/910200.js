t.d(n, {
    Z: function () {
        return x;
    }
});
var l = t(200651),
    i = t(692547),
    r = t(950104),
    a = t(780384),
    s = t(481060),
    o = t(410030),
    c = t(220082),
    u = t(114487),
    d = t(686546),
    h = t(768581),
    m = t(981631),
    f = t(388032),
    g = t(950039);
function x(e) {
    let { profile: n } = e,
        t = (0, o.ZP)(),
        x = (function (e, n) {
            let t = e === m.BRd.DARK ? (0, r.DT)(n, 0.8) : (0, a.r5)(n, 0.8);
            return 'linear-gradient(45deg, '.concat(n, ' 0%, ').concat(t, ' 100%)');
        })(
            t,
            (function (e, n) {
                let t = h.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 64
                });
                return (0, c.ZP)(t, n);
            })(n, (0, s.useToken)(i.Z.colors.BG_BASE_TERTIARY).hex())
        );
    return (0, l.jsxs)('div', {
        className: g.container,
        children: [
            (0, l.jsx)('div', {
                className: g.banner,
                style: { background: x }
            }),
            (0, l.jsx)('div', {
                className: g.avatarContainer,
                children: (0, l.jsx)(d.ZP, {
                    mask: d.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, l.jsx)('div', {
                        className: g.avatarWrapper,
                        children: (0, l.jsx)(u.b, {
                            guildId: n.id,
                            guildName: n.name,
                            guildIcon: n.icon,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, l.jsxs)('div', {
                className: g.header,
                children: [
                    (0, l.jsx)(s.Heading, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: n.name
                    }),
                    (0, l.jsxs)('div', {
                        className: g.members,
                        children: [
                            (0, l.jsx)('div', {
                                className: g.memberCount,
                                children: (0, l.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: f.intl.format(f.t.zRl6XV, { count: n.memberCount })
                                })
                            }),
                            (0, l.jsxs)('div', {
                                className: g.memberCount,
                                children: [
                                    (0, l.jsx)('div', { className: g.dotOnline }),
                                    (0, l.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: f.intl.format(f.t['LC+S+v'], { membersOnline: n.onlineCount })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: g.body,
                children: (0, l.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: n.description
                })
            })
        ]
    });
}
