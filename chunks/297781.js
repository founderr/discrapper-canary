n.d(t, {
    Af: function () {
        return w;
    },
    An: function () {
        return V;
    },
    E6: function () {
        return F;
    },
    EE: function () {
        return M;
    },
    Gk: function () {
        return K;
    },
    Gt: function () {
        return i;
    },
    OV: function () {
        return P;
    },
    PZ: function () {
        return z;
    },
    Rg: function () {
        return W;
    },
    U9: function () {
        return H;
    },
    XF: function () {
        return k;
    },
    Yl: function () {
        return Y;
    },
    ej: function () {
        return x;
    },
    f: function () {
        return Z;
    },
    m7: function () {
        return L;
    },
    n8: function () {
        return j;
    },
    pQ: function () {
        return B;
    },
    v1: function () {
        return G;
    },
    wO: function () {
        return U;
    }
});
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(913527),
    c = n.n(u),
    d = n(876215),
    f = n(884439),
    _ = n(705512),
    p = n(442837),
    h = n(481060),
    m = n(70956),
    g = n(823379),
    E = n(709054),
    v = n(719247),
    I = n(26033),
    T = n(22211),
    b = n(561308),
    S = n(797342),
    y = n(371991),
    A = n(206583),
    N = n(388032),
    C = n(455887);
let R = {
    [d.s.TOP_ARTIST]: [V],
    [d.s.PLAYED_GAME]: [P, M, w, H, U, Z, j, G, B],
    [d.s.TOP_GAME]: [F],
    [d.s.WATCHED_MEDIA]: [Y, W],
    [d.s.LAUNCHED_ACTIVITY]: [P, M, w, H, j, B]
};
((r = i || (i = {}))[(r.CARD = 0)] = 'CARD'), (r[(r.POPOUT = 1)] = 'POPOUT'), (r[(r.STREAMING_POPOUT = 2)] = 'STREAMING_POPOUT'), (r[(r.GAME_PROFILE = 3)] = 'GAME_PROFILE'), (r[(r.USER_PROFILE = 4)] = 'USER_PROFILE'), (r[(r.EMBED = 5)] = 'EMBED'), (r[(r.LEADERBOARD_POPOUT = 6)] = 'LEADERBOARD_POPOUT'), (r[(r.OVERLAY = 7)] = 'OVERLAY');
let O = s.createContext({});
function D() {
    return s.useContext(O);
}
function L(e) {
    let { children: t, ...n } = e;
    return (0, a.jsx)('div', {
        className: C.badgeContainer,
        ...n,
        children: t
    });
}
function x(e) {
    let { Icon: t, text: n, iconColor: r, tooltipText: i, showTooltip: s } = e,
        { defaultTextColor: o, defaultIconColor: l, location: u } = D();
    return (0, a.jsx)(h.Tooltip, {
        text: i,
        shouldShow: s,
        children: (e) =>
            (0, a.jsxs)(L, {
                ...e,
                children: [
                    (0, a.jsx)(t, {
                        size: 'xxs',
                        color: null != r ? r : l
                    }),
                    (0, a.jsx)(h.Text, {
                        variant: 'text-xs/normal',
                        color: o,
                        className: C.badgeLabel,
                        scaleFontToUserSetting: 5 === u,
                        children: n
                    })
                ]
            })
    });
}
function w(e) {
    let { entry: t } = e,
        { channel: n } = (0, T.Z)(t),
        { location: r } = D();
    return null == n || (0, g.Hi)(r, [1, 2, 3, 4])
        ? null
        : (0, a.jsx)(x, {
              Icon: h.VoiceNormalIcon,
              text: n.name
          });
}
function P(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: r, defaultIconColor: i, location: s } = D(),
        o = (0, b.Jg)(t) && (0, g.Hi)(s, [0, 4, 7]),
        l = o ? h.tokens.colors.TEXT_POSITIVE : i,
        { streamPreviewUrl: u } = (0, T.Z)(t),
        c = null != u ? h.ScreenArrowIcon : (0, I.Mq)(t) ? h.AppsIcon : h.GameControllerIcon;
    return (0, a.jsxs)(L, {
        children: [
            (0, a.jsx)(c, {
                size: 'xxs',
                color: l
            }),
            (0, a.jsx)(y.ZP, {
                entry: t,
                textColor: o ? 'text-positive' : r,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === s
            })
        ]
    });
}
function M(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: r } = D(),
        { state: i, party: s } = (0, S.n)(t),
        o = (0, b.bT)(i, s);
    return null == o
        ? null
        : (0, a.jsxs)(L, {
              children: [
                  (0, a.jsx)(h.GroupIcon, {
                      size: 'xxs',
                      color: r
                  }),
                  (0, a.jsx)(h.Text, {
                      variant: 'text-xs/normal',
                      color: n,
                      lineClamp: 1,
                      children: o
                  })
              ]
          });
}
function k(e) {
    var t;
    let { entry: n, hovered: r } = e,
        { defaultTextColor: i, defaultIconColor: s, location: o } = D(),
        l = (0, b.Jg)(n) && (0, g.Hi)(o, [0, 4]),
        u = l ? h.tokens.colors.TEXT_POSITIVE : s,
        c = l ? 'text-positive' : i,
        d = (0, p.e7)([v.Z], () => v.Z.getMatchingActivity(n)),
        f = null == d ? void 0 : null === (t = d.timestamps) || void 0 === t ? void 0 : t.start;
    return null != f
        ? (0, a.jsxs)('div', {
              className: C.badgeContainer,
              children: [
                  (0, a.jsx)(h.RecordPlayerIcon, {
                      size: 'xxs',
                      color: u
                  }),
                  (0, a.jsx)(y.x3, {
                      entry: { start: f },
                      textColor: c,
                      hovered: r,
                      bold: !0
                  })
              ]
          })
        : (0, a.jsxs)('div', {
              className: C.badgeContainer,
              children: [
                  (0, a.jsx)(h.RecordPlayerIcon, {
                      size: 'xxs',
                      color: u
                  }),
                  (0, a.jsx)(y.ZP, {
                      entry: n,
                      textColor: c,
                      hovered: r,
                      bold: !0
                  })
              ]
          });
}
function U(e) {
    let { entry: t } = e,
        { location: n } = D(),
        r = (0, g.Hi)(n, [0, 3]) ? h.tokens.colors.STATUS_POSITIVE : void 0;
    return (0, b.Ol)(t)
        ? (0, a.jsx)(x, {
              Icon: h.NewUserSimpleIcon,
              text: N.intl.string(N.t.keY6mZ),
              iconColor: r
          })
        : null;
}
function B(e) {
    let { entry: t } = e,
        { location: n } = D();
    if (!(0, b.V5)(t)) return null;
    let r = (0, b.kr)(t),
        { text: i, tooltipText: s } = (0, b.zo)(t);
    return null == i
        ? null
        : (0, a.jsx)(x, {
              Icon: h.TimerIcon,
              text: i,
              tooltipText: s,
              showTooltip: 0 === n && !r
          });
}
function G(e) {
    let { entry: t } = e,
        { location: n } = D(),
        r = 0 !== n,
        i = (0, b.dw)(t);
    if (null == i) return null;
    let s = (0, b.GE)(i);
    return (0, a.jsx)(x, {
        Icon: h.RetryIcon,
        showTooltip: !r,
        tooltipText: s,
        text: r ? s : N.intl.string(N.t.adnLsL)
    });
}
function Z(e) {
    let { entry: t } = e,
        { location: n } = D(),
        r = (0, b.vU)(t);
    return (0, b.q_)(t)
        ? (0, a.jsx)(x, {
              Icon: h.FlashIcon,
              showTooltip: 0 === n,
              text: N.intl.formatToPlainString(N.t['Klie/P'], { days: r }),
              tooltipText: N.intl.formatToPlainString(N.t.PwMe0t, { days: r })
          })
        : null;
}
function F(e) {
    let { entry: t } = e,
        { location: n } = D(),
        r = 0 !== n,
        i = (0, b.yA)(t);
    if (null == i) return null;
    let s = r ? N.t.C0Axoa : N.t.SDRHgo;
    return (0, a.jsx)(x, {
        Icon: h.TrophyIcon,
        text: (0, a.jsxs)(a.Fragment, {
            children: [N.intl.string(N.t['/50eHh']), r ? ' \u2014 ' : ': ', N.intl.format(s, { hours: Math.round(i / m.Z.Seconds.HOUR) })]
        })
    });
}
function V(e) {
    var t;
    let { entry: n } = e,
        { location: r } = D(),
        i = null === (t = (0, b.PJ)(n, f.N.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
    if (null == i) return null;
    let s = (0, g.Hi)(r, [1, 2, 5]) ? N.intl.formatToPlainString(N.t.HtifnJ, { count: i }) : N.intl.formatToPlainString(N.t['jq/Bmp'], { count: i });
    return (0, a.jsx)(x, {
        Icon: h.TrophyIcon,
        text: s
    });
}
function j(e) {
    let { entry: t } = e,
        { location: n } = D();
    if (3 === n) return null;
    let r = (0, b.ig)(t);
    return null == r || r === _.o.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, a.jsx)(x, {
              Icon: h.FireIcon,
              text: N.intl.string(N.t.kAlUs7)
          });
}
function H(e) {
    let { entry: t } = e,
        { location: n } = D();
    if (3 === n) return null;
    let r = E.default.extractTimestamp(t.extra.application_id);
    return c()().diff(c()(r), 'days') > A.G
        ? null
        : (0, a.jsx)(x, {
              Icon: h.StarShootingIcon,
              text: N.intl.string(N.t.vYuyWV)
          });
}
function Y(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: r, defaultIconColor: i, location: s } = D(),
        o = (0, b.Jg)(t) && 4 === s,
        l = o ? h.tokens.colors.TEXT_POSITIVE : i;
    return (0, a.jsxs)('div', {
        className: C.badgeContainer,
        children: [
            (0, a.jsx)(h.TvIcon, {
                size: 'xxs',
                color: l
            }),
            (0, a.jsx)(y.ZP, {
                entry: t,
                textColor: o ? 'text-positive' : r,
                hovered: n,
                bold: !0
            })
        ]
    });
}
function W(e) {
    let { entry: t } = e,
        n = (0, b.ap)(t.extra.media_assets_large_text);
    return null == n
        ? null
        : (0, a.jsx)(x, {
              Icon: h.TopicsIcon,
              text: n
          });
}
function K(e) {
    let t,
        { location: n, children: r, className: i } = e;
    return (
        (t = (0, g.Hi)(n, [1, 5, 6])
            ? {
                  defaultTextColor: 'content-inventory-overlay-text-secondary',
                  defaultIconColor: h.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
              }
            : 2 === n
              ? { defaultTextColor: 'interactive-normal' }
              : 3 === n
                ? { defaultTextColor: 'text-muted' }
                : { defaultTextColor: 'text-secondary' }),
        (0, a.jsx)(O.Provider, {
            value: {
                location: n,
                ...t
            },
            children: (0, a.jsx)('div', {
                className: l()(
                    C.badgesContainer,
                    {
                        [C.badgesContainerCard]: 0 === n,
                        [C.badgesContainerPopout]: (0, g.Hi)(n, [1, 2]),
                        [C.badgesContainerGameProfile]: 3 === n
                    },
                    i
                ),
                children: r
            })
        })
    );
}
function z(e) {
    let { entry: t, location: n, className: r } = e,
        i = (function (e) {
            switch (e.content_type) {
                case d.s.TOP_ARTIST:
                    return R[e.content_type].map((t, n) => (0, a.jsx)(t, { entry: e }, n));
                case d.s.PLAYED_GAME:
                    return R[e.content_type].map((t, n) => (0, a.jsx)(t, { entry: e }, n));
                case d.s.TOP_GAME:
                    return R[e.content_type].map((t, n) => (0, a.jsx)(t, { entry: e }, n));
                case d.s.WATCHED_MEDIA:
                    return R[e.content_type].map((t, n) => (0, a.jsx)(t, { entry: e }, n));
                case d.s.LAUNCHED_ACTIVITY:
                    return R[e.content_type].map((t, n) => (0, a.jsx)(t, { entry: e }, n));
                default:
                    return null;
            }
        })(t);
    return null == i
        ? null
        : (0, a.jsx)(K, {
              location: n,
              className: r,
              children: i
          });
}
