n.d(t, {
    EK: function () {
        return x;
    },
    Io: function () {
        return M;
    },
    NY: function () {
        return U;
    },
    Ox: function () {
        return b;
    },
    Vq: function () {
        return D;
    },
    Wf: function () {
        return w;
    },
    cB: function () {
        return L;
    },
    dy: function () {
        return C;
    },
    mb: function () {
        return P;
    },
    wP: function () {
        return y;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(596454),
    s = n(99690),
    l = n(607070),
    u = n(797610),
    c = n(754688),
    d = n(699450),
    _ = n(303694),
    E = n(124072),
    f = n(891984),
    h = n(763296),
    p = n(592125),
    m = n(430824),
    I = n(246946),
    T = n(594174),
    g = n(934415),
    S = n(5192),
    A = n(51144),
    v = n(377668),
    N = n(689938),
    O = n(124158),
    R = n(554034);
function C(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.Tooltip, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(o.Z, {
                src: t.src,
                emojiName: t.name,
                animated: !1,
                ...e
            })
    });
}
function y(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.Tooltip, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(o.Z, {
                emojiId: t.emojiId,
                emojiName: t.name,
                animated: t.animated,
                ...e
            })
    });
}
function b(e) {
    let { text: t, channelId: n, guildId: i } = e,
        a = m.Z.getGuild(i),
        o = p.Z.getChannel(n),
        s = (0, u.Ib)(a, o) && '@Clyde' === t ? v.jM : null;
    return (0, r.jsx)(E.Z, {
        color: s,
        children: t
    });
}
function L(e) {
    let { id: t, guildId: n, channelId: o } = e,
        l = (0, i.e7)([T.default], () => T.default.getUser(t)),
        u = (0, i.e7)([I.Z], () => I.Z.hidePersonalInformation),
        c = S.ZP.useName(n, o, l),
        d = (0, r.jsx)(E.Z, { children: null == c ? '<@'.concat(t, '>') : '@'.concat(c) });
    if (null != l) {
        let e = u || l.isPomelo() ? null : '#'.concat(l.discriminator);
        return (0, r.jsx)(a.Tooltip, {
            text: (0, r.jsxs)('div', {
                className: O.userTooltip,
                children: [
                    (0, r.jsx)(s.Z, {
                        user: l,
                        animate: !0,
                        size: a.AvatarSizes.SIZE_16,
                        className: O.avatar
                    }),
                    A.ZP.getUserTag(l, {
                        mode: 'username',
                        identifiable: u ? 'never' : 'always'
                    }),
                    (0, r.jsx)('span', {
                        className: O.discriminator,
                        children: e
                    })
                ]
            }),
            delay: 750,
            position: 'top',
            'aria-label': A.ZP.getUserTag(l, { decoration: 'never' }),
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
function D(e) {
    let { id: t, guildId: n } = e,
        o = (0, i.e7)([m.Z], () => (null != n ? m.Z.getRole(n, t) : void 0)),
        s = (0, i.e7)([l.Z], () => l.Z.roleStyle);
    if (null == o)
        return (0, r.jsxs)('span', {
            children: ['@', N.Z.Messages.UNKNOWN_ROLE_PLACEHOLDER]
        });
    let u = null != o.color && 0 !== o.color,
        c = 'dot' === s,
        d = 'username' === s && u;
    return (0, r.jsxs)(E.Z, {
        color: d ? o.color : null,
        children: [
            c &&
                (0, r.jsx)(a.RoleDot, {
                    color: o.colorString,
                    background: !1,
                    tooltip: !1
                }),
            '@',
            o.name
        ]
    });
}
function M(e) {
    let { id: t } = e,
        n = (0, i.e7)([p.Z], () => p.Z.getChannel(t)),
        a = N.Z.Messages.UNKNOWN_CHANNEL.toLowerCase(),
        o = 'text',
        s = !0;
    if (null != n) {
        var l;
        (a = (0, c.YO)(n) ? n.name : N.Z.Messages.NO_ACCESS), (o = (0, c.YO)(n) ? (null !== (l = (0, g.wl)(n)) && void 0 !== l ? l : 'text') : 'locked'), (s = (0, d.B)(n.type));
    }
    return s
        ? (0, r.jsx)(E.Z, {
              iconType: o,
              children: a
          })
        : (0, r.jsx)('span', { children: '#' + a });
}
function P(e) {
    var t;
    let { id: n } = e,
        a = (0, i.e7)([h.Z], () => h.Z.getSoundById(n));
    return (0, r.jsx)(E.Z, { children: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : 'Sound' });
}
function U(e) {
    let { id: t, itemId: n, guildId: i } = e,
        a = (0, _.l)(t),
        o = (0, _.W)(t, n, i);
    return (0, r.jsxs)(E.Z, {
        iconType: t,
        children: [a, null != o && (0, r.jsx)(f.Z, {}), o]
    });
}
function w(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(E.Z, {
        children: [t, '(', n, ')']
    });
}
function x(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)('span', {
        className: R.timestamp,
        children: t.formatted
    });
}
