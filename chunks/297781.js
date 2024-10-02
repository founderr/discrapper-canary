n.d(t, {
    Af: function () {
        return M;
    },
    An: function () {
        return Z;
    },
    E6: function () {
        return F;
    },
    EE: function () {
        return U;
    },
    Gk: function () {
        return W;
    },
    Gt: function () {
        return r;
    },
    OV: function () {
        return P;
    },
    PZ: function () {
        return z;
    },
    Rg: function () {
        return j;
    },
    U9: function () {
        return H;
    },
    XF: function () {
        return w;
    },
    Yl: function () {
        return Y;
    },
    ej: function () {
        return D;
    },
    f: function () {
        return B;
    },
    m7: function () {
        return b;
    },
    n8: function () {
        return V;
    },
    pQ: function () {
        return G;
    },
    v1: function () {
        return k;
    },
    wO: function () {
        return x;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(913527),
    u = n.n(l),
    c = n(876215),
    d = n(884439),
    _ = n(705512),
    E = n(442837),
    f = n(481060),
    h = n(70956),
    p = n(823379),
    m = n(709054),
    I = n(719247),
    T = n(26033),
    g = n(22211),
    S = n(561308),
    A = n(797342),
    v = n(371991),
    N = n(206583),
    O = n(689938),
    R = n(793440);
let C = {
    [c.s.TOP_ARTIST]: [Z],
    [c.s.PLAYED_GAME]: [P, U, M, H, x, B, V, k, G],
    [c.s.TOP_GAME]: [F],
    [c.s.WATCHED_MEDIA]: [Y, j],
    [c.s.LAUNCHED_ACTIVITY]: [P, U, M, H, V, G]
};
!(function (e) {
    (e[(e.CARD = 0)] = 'CARD'), (e[(e.POPOUT = 1)] = 'POPOUT'), (e[(e.STREAMING_POPOUT = 2)] = 'STREAMING_POPOUT'), (e[(e.GAME_PROFILE = 3)] = 'GAME_PROFILE'), (e[(e.USER_PROFILE = 4)] = 'USER_PROFILE'), (e[(e.EMBED = 5)] = 'EMBED'), (e[(e.LEADERBOARD_POPOUT = 6)] = 'LEADERBOARD_POPOUT');
})(r || (r = {}));
let y = a.createContext({});
function L() {
    return a.useContext(y);
}
function b(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)('div', {
        className: R.badgeContainer,
        ...n,
        children: t
    });
}
function D(e) {
    let { Icon: t, text: n, iconColor: r, tooltipText: a, showTooltip: o } = e,
        { defaultTextColor: s, defaultIconColor: l, location: u } = L();
    return (0, i.jsx)(f.Tooltip, {
        text: a,
        shouldShow: o,
        children: (e) =>
            (0, i.jsxs)(b, {
                ...e,
                children: [
                    (0, i.jsx)(t, {
                        size: 'xxs',
                        color: null != r ? r : l
                    }),
                    (0, i.jsx)(f.Text, {
                        variant: 'text-xs/normal',
                        color: s,
                        className: R.badgeLabel,
                        scaleFontToUserSetting: 5 === u,
                        children: n
                    })
                ]
            })
    });
}
function M(e) {
    let { entry: t } = e,
        { channel: n } = (0, g.Z)(t),
        { location: r } = L();
    return null == n || (0, p.Hi)(r, [1, 2, 3, 4])
        ? null
        : (0, i.jsx)(D, {
              Icon: f.VoiceNormalIcon,
              text: n.name
          });
}
function P(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: r, defaultIconColor: a, location: o } = L(),
        s = (0, S.kr)(t) && (0, p.Hi)(o, [0, 4]),
        l = s ? f.tokens.colors.TEXT_POSITIVE : a,
        u = s ? 'text-positive' : r,
        { streamPreviewUrl: c } = (0, g.Z)(t),
        d = null != c ? f.ScreenArrowIcon : (0, T.Mq)(t) ? f.AppsIcon : f.GameControllerIcon;
    return (0, i.jsxs)(b, {
        children: [
            (0, i.jsx)(d, {
                size: 'xxs',
                color: l
            }),
            (0, i.jsx)(v.ZP, {
                entry: t,
                textColor: u,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === o
            })
        ]
    });
}
function U(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: r } = L(),
        { state: a, party: o, inExperiment: s } = (0, A.n)(t);
    if (!s) return null;
    let l = (0, S.bT)(a, o);
    return null == l
        ? null
        : (0, i.jsxs)(b, {
              children: [
                  (0, i.jsx)(f.GroupIcon, {
                      size: 'xxs',
                      color: r
                  }),
                  (0, i.jsx)(f.Text, {
                      variant: 'text-xs/normal',
                      color: n,
                      lineClamp: 1,
                      children: l
                  })
              ]
          });
}
function w(e) {
    var t;
    let { entry: n, hovered: r } = e,
        { defaultTextColor: a, defaultIconColor: o, location: s } = L(),
        l = (0, E.e7)([I.Z], () => I.Z.getMatchingActivity(n));
    if ((null == l ? void 0 : l.timestamps) == null) return null;
    let u = (0, p.Hi)(s, [0, 4]),
        c = u ? f.tokens.colors.TEXT_POSITIVE : o,
        d = u ? 'text-positive' : a,
        _ = null === (t = l.timestamps) || void 0 === t ? void 0 : t.start;
    return (0, i.jsxs)('div', {
        className: R.badgeContainer,
        children: [
            (0, i.jsx)(f.RecordPlayerIcon, {
                size: 'xxs',
                color: c
            }),
            (0, i.jsx)(v.x3, {
                entry: null != _ ? { start: _ } : n,
                textColor: d,
                hovered: r,
                bold: !0
            })
        ]
    });
}
function x(e) {
    let { entry: t } = e,
        { location: n } = L(),
        r = (0, p.Hi)(n, [0, 3]) ? f.tokens.colors.STATUS_POSITIVE : void 0;
    return (0, S.Ol)(t)
        ? (0, i.jsx)(D, {
              Icon: f.NewUserSimpleIcon,
              text: O.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
              iconColor: r
          })
        : null;
}
function G(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (!(0, S.V5)(t)) return null;
    let r = (0, S.kr)(t),
        a = 0 === n && !r,
        { text: o, tooltipText: s } = (0, S.zo)(t);
    return null == o
        ? null
        : (0, i.jsx)(D, {
              Icon: f.TimerIcon,
              text: o,
              tooltipText: s,
              showTooltip: a
          });
}
function k(e) {
    let { entry: t } = e,
        { location: n } = L(),
        r = 0 !== n,
        a = (0, S.dw)(t);
    if (null == a) return null;
    let o = (0, S.GE)(a);
    return (0, i.jsx)(D, {
        Icon: f.RetryIcon,
        showTooltip: !r,
        tooltipText: o,
        text: r ? o : O.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
    });
}
function B(e) {
    let { entry: t } = e,
        { location: n } = L(),
        r = (0, S.vU)(t);
    return (0, S.q_)(t)
        ? (0, i.jsx)(D, {
              Icon: f.FlashIcon,
              showTooltip: 0 === n,
              text: O.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({ days: r }),
              tooltipText: O.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({ days: r })
          })
        : null;
}
function F(e) {
    let { entry: t } = e,
        { location: n } = L(),
        r = 0 !== n,
        a = (0, S.yA)(t);
    if (null == a) return null;
    let o = r ? ' \u2014 ' : ': ',
        s = r ? O.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : O.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
    return (0, i.jsx)(D, {
        Icon: f.TrophyIcon,
        text: (0, i.jsxs)(i.Fragment, {
            children: [O.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, o, s.format({ hours: Math.round(a / h.Z.Seconds.HOUR) })]
        })
    });
}
function Z(e) {
    var t;
    let { entry: n } = e,
        { location: r } = L(),
        a = null === (t = (0, S.PJ)(n, d.N.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
    if (null == a) return null;
    let o = (0, p.Hi)(r, [1, 2, 5]) ? O.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({ count: a }) : O.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({ count: a });
    return (0, i.jsx)(D, {
        Icon: f.TrophyIcon,
        text: o
    });
}
function V(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (3 === n) return null;
    let r = (0, S.ig)(t);
    return null == r || r === _.o.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, i.jsx)(D, {
              Icon: f.FireIcon,
              text: O.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
          });
}
function H(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (3 === n) return null;
    let r = m.default.extractTimestamp(t.extra.application_id);
    return u()().diff(u()(r), 'days') > N.G
        ? null
        : (0, i.jsx)(D, {
              Icon: f.StarShootingIcon,
              text: O.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
          });
}
function Y(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: r, defaultIconColor: a, location: o } = L(),
        s = (0, S.kr)(t) && 4 === o,
        l = s ? f.tokens.colors.TEXT_POSITIVE : a,
        u = s ? 'text-positive' : r;
    return (0, i.jsxs)('div', {
        className: R.badgeContainer,
        children: [
            (0, i.jsx)(f.TvIcon, {
                size: 'xxs',
                color: l
            }),
            (0, i.jsx)(v.ZP, {
                entry: t,
                textColor: u,
                hovered: n,
                bold: !0
            })
        ]
    });
}
function j(e) {
    let { entry: t } = e,
        n = (0, S.ap)(t.extra.media_assets_large_text);
    return null == n
        ? null
        : (0, i.jsx)(D, {
              Icon: f.TopicsIcon,
              text: n
          });
}
function W(e) {
    let t,
        { location: n, children: r, className: a } = e;
    return (
        (t = (0, p.Hi)(n, [1, 5, 6])
            ? {
                  defaultTextColor: 'content-inventory-overlay-text-secondary',
                  defaultIconColor: f.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
              }
            : 2 === n
              ? { defaultTextColor: 'interactive-normal' }
              : 3 === n
                ? { defaultTextColor: 'text-muted' }
                : { defaultTextColor: 'text-secondary' }),
        (0, i.jsx)(y.Provider, {
            value: {
                location: n,
                ...t
            },
            children: (0, i.jsx)('div', {
                className: s()(
                    R.badgesContainer,
                    {
                        [R.badgesContainerCard]: 0 === n,
                        [R.badgesContainerPopout]: (0, p.Hi)(n, [1, 2]),
                        [R.badgesContainerGameProfile]: 3 === n
                    },
                    a
                ),
                children: r
            })
        })
    );
}
function K(e) {
    switch (e.content_type) {
        case c.s.TOP_ARTIST:
            return C[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
        case c.s.PLAYED_GAME:
            return C[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
        case c.s.TOP_GAME:
            return C[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
        case c.s.WATCHED_MEDIA:
            return C[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
        case c.s.LAUNCHED_ACTIVITY:
            return C[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
        default:
            return null;
    }
}
function z(e) {
    let { entry: t, location: n, className: r } = e,
        a = K(t);
    return null == a
        ? null
        : (0, i.jsx)(W, {
              location: n,
              className: r,
              children: a
          });
}
