t.d(n, {
    Z: function () {
        return p;
    }
});
var l = t(200651),
    i = t(442837),
    r = t(692547),
    a = t(950104),
    s = t(780384),
    o = t(481060),
    c = t(410030),
    u = t(220082),
    d = t(114487),
    h = t(686546),
    m = t(706454),
    f = t(768581),
    x = t(709054),
    g = t(997431),
    _ = t(981631),
    j = t(388032),
    v = t(950039);
function p(e) {
    let { profile: n } = e,
        t = (0, c.ZP)(),
        p = (function (e, n) {
            let t = f.ZP.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 64
            });
            return (0, u.ZP)(t, n);
        })(n, (0, o.useToken)(r.Z.colors.BG_BASE_TERTIARY).hex()),
        E = (0, i.e7)([m.default], () => m.default.locale),
        N = (function (e, n) {
            let t = e === _.BRd.DARK ? (0, a.DT)(n, 0.8) : (0, s.r5)(n, 0.8);
            return 'linear-gradient(45deg, '.concat(n, ' 0%, ').concat(t, ' 100%)');
        })(t, p),
        P = (0, g.M)(x.default.extractTimestamp(n.id), E);
    return (0, l.jsxs)('div', {
        className: v.container,
        children: [
            (0, l.jsx)('div', {
                className: v.banner,
                style: { background: N }
            }),
            (0, l.jsx)('div', {
                className: v.avatarContainer,
                children: (0, l.jsx)(h.ZP, {
                    mask: h.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, l.jsx)('div', {
                        className: v.avatarWrapper,
                        children: (0, l.jsx)(d.b, {
                            guildId: n.id,
                            guildName: n.name,
                            guildIcon: n.icon,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, l.jsxs)('div', {
                className: v.header,
                children: [
                    (0, l.jsx)(o.Heading, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: n.name
                    }),
                    (0, l.jsxs)('div', {
                        className: v.members,
                        children: [
                            (0, l.jsxs)('div', {
                                className: v.memberCount,
                                children: [
                                    (0, l.jsx)('div', { className: v.dot }),
                                    (0, l.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: j.intl.format(j.t.zRl6XV, { count: n.memberCount })
                                    })
                                ]
                            }),
                            (0, l.jsxs)('div', {
                                className: v.memberCount,
                                children: [
                                    (0, l.jsx)('div', { className: v.dotOnline }),
                                    (0, l.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: j.intl.format(j.t['LC+S+v'], { membersOnline: n.onlineCount })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: v.established,
                        children: (0, l.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: j.intl.format(j.t['zb2Q5+'], { createdAtDate: P })
                        })
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: v.body,
                children: (0, l.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: n.description
                })
            })
        ]
    });
}
