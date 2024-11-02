n.d(t, {
    EK: function () {
        return k;
    },
    Io: function () {
        return x;
    },
    NY: function () {
        return M;
    },
    Ox: function () {
        return O;
    },
    Vq: function () {
        return L;
    },
    Wf: function () {
        return P;
    },
    cB: function () {
        return D;
    },
    dy: function () {
        return C;
    },
    mb: function () {
        return w;
    },
    wP: function () {
        return R;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(596454),
    o = n(99690),
    l = n(607070),
    u = n(797610),
    c = n(754688),
    d = n(699450),
    f = n(303694),
    _ = n(124072),
    h = n(692629),
    p = n(763296),
    m = n(592125),
    g = n(430824),
    E = n(246946),
    v = n(594174),
    I = n(934415),
    S = n(5192),
    T = n(51144),
    b = n(377668),
    y = n(388032),
    A = n(124158),
    N = n(554034);
function C(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.Tooltip, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(s.Z, {
                src: t.src,
                emojiName: t.name,
                animated: !1,
                ...e
            })
    });
}
function R(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.Tooltip, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(s.Z, {
                emojiId: t.emojiId,
                emojiName: t.name,
                animated: t.animated,
                ...e
            })
    });
}
function O(e) {
    let { text: t, channelId: n, guildId: i } = e,
        a = g.Z.getGuild(i),
        s = m.Z.getChannel(n),
        o = (0, u.Ib)(a, s) && '@Clyde' === t ? b.jM : null;
    return (0, r.jsx)(_.Z, {
        color: o,
        children: t
    });
}
function D(e) {
    let { id: t, guildId: n, channelId: s } = e,
        l = (0, i.e7)([v.default], () => v.default.getUser(t)),
        u = (0, i.e7)([E.Z], () => E.Z.hidePersonalInformation),
        c = S.ZP.useName(n, s, l),
        d = (0, r.jsx)(_.Z, { children: null == c ? '<@'.concat(t, '>') : '@'.concat(c) });
    if (null != l) {
        let e = u || l.isPomelo() ? null : '#'.concat(l.discriminator);
        return (0, r.jsx)(a.Tooltip, {
            text: (0, r.jsxs)('div', {
                className: A.userTooltip,
                children: [
                    (0, r.jsx)(o.Z, {
                        user: l,
                        animate: !0,
                        size: a.AvatarSizes.SIZE_16,
                        className: A.avatar
                    }),
                    T.ZP.getUserTag(l, {
                        mode: 'username',
                        identifiable: u ? 'never' : 'always'
                    }),
                    (0, r.jsx)('span', {
                        className: A.discriminator,
                        children: e
                    })
                ]
            }),
            delay: 750,
            position: 'top',
            'aria-label': T.ZP.getUserTag(l, { decoration: 'never' }),
            children: (e) =>
                (0, r.jsx)(a.Clickable, {
                    tag: 'span',
                    ...e,
                    children: d
                })
        });
    }
    return d;
}
function L(e) {
    let { id: t, guildId: n } = e,
        s = (0, i.e7)([g.Z], () => (null != n ? g.Z.getRole(n, t) : void 0)),
        o = (0, i.e7)([l.Z], () => l.Z.roleStyle);
    if (null == s)
        return (0, r.jsxs)('span', {
            children: ['@', y.intl.string(y.t['YV4F/v'])]
        });
    let u = null != s.color && 0 !== s.color;
    return (0, r.jsxs)(_.Z, {
        color: 'username' === o && u ? s.color : null,
        children: [
            'dot' === o &&
                (0, r.jsx)(a.RoleDot, {
                    color: s.colorString,
                    background: !1,
                    tooltip: !1
                }),
            '@',
            s.name
        ]
    });
}
function x(e) {
    let { id: t } = e,
        n = (0, i.e7)([m.Z], () => m.Z.getChannel(t)),
        a = y.intl.string(y.t.zLZPmp).toLowerCase(),
        s = 'text',
        o = !0;
    if (null != n) {
        var l;
        (a = (0, c.YO)(n) ? n.name : y.intl.string(y.t['/YzI6+'])), (s = (0, c.YO)(n) ? (null !== (l = (0, I.wl)(n)) && void 0 !== l ? l : 'text') : 'locked'), (o = (0, d.B)(n.type));
    }
    return o
        ? (0, r.jsx)(_.Z, {
              iconType: s,
              children: a
          })
        : (0, r.jsx)('span', { children: '#' + a });
}
function w(e) {
    var t;
    let { id: n } = e,
        a = (0, i.e7)([p.Z], () => p.Z.getSoundById(n));
    return (0, r.jsx)(_.Z, { children: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : 'Sound' });
}
function M(e) {
    let { id: t, itemId: n, guildId: i } = e,
        a = (0, f.l)(t),
        s = (0, f.W)(t, n, i);
    return (0, r.jsxs)(_.Z, {
        iconType: t,
        children: [a, null != s && (0, r.jsx)(h.Z, {}), s]
    });
}
function P(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(_.Z, {
        children: [t, '(', n, ')']
    });
}
function k(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)('span', {
        className: N.timestamp,
        children: t.formatted
    });
}
