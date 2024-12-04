n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(788307),
    c = n(100527),
    d = n(906732),
    f = n(8454),
    _ = n(633302),
    p = n(314897),
    h = n(785717),
    m = n(510659),
    g = n(287954),
    E = n(810097),
    v = n(64621),
    I = n(913002),
    T = n(228168),
    b = n(388032),
    S = n(376296);
function y(e) {
    let { profileType: t, onCloseProfile: i } = e,
        { analyticsLocations: a } = (0, d.ZP)(),
        { trackUserProfileAction: o } = (0, h.KZ)(),
        u = {
            [S.biteSize]: t === T.y0.BITE_SIZE,
            [S.fullSize]: t === T.y0.FULL_SIZE,
            [S.panel]: t === T.y0.PANEL
        };
    return (0, r.jsx)(l.Clickable, {
        className: s()(S.container, S.editable, u),
        'aria-label': b.intl.string(b.t['zrpF/f']),
        onClick: () => {
            o({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == i || i(),
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: a
                        });
                });
        },
        focusProps: { ringClassName: S.ring },
        children: (0, r.jsx)('div', {
            className: s()(S.outer, u),
            children: (0, r.jsxs)('span', {
                className: s()(S.inner, S.clickable),
                children: [
                    (0, r.jsx)(l.CirclePlusIcon, {
                        size: 'xs',
                        className: S.addStatusIcon,
                        colorClass: S.addStatusIconColor
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        className: S.addStatusPrompt,
                        children: b.intl.string(b.t.evw0o6)
                    })
                ]
            })
        })
    });
}
function A(e) {
    var t, n;
    let { emoji: a, text: o, profileType: c, animate: d, className: f, toolbar: _, onShowToolbar: p } = e,
        { trackUserProfileAction: m } = (0, h.KZ)(),
        g = i.useRef(null),
        E = {
            [S.biteSize]: c === T.y0.BITE_SIZE,
            [S.fullSize]: c === T.y0.FULL_SIZE,
            [S.panel]: c === T.y0.PANEL
        },
        v = (0, r.jsx)('div', {
            className: s()(S.outer, E),
            children: (0, r.jsx)('span', {
                className: S.inner,
                children: (0, r.jsxs)('span', {
                    className: S.clamp,
                    children: [
                        null != a &&
                            (0, r.jsx)(u.Iv, {
                                emoji: a,
                                animate: d,
                                hideTooltip: !1,
                                tooltipDelay: T.vB,
                                className: S.statusEmoji
                            }),
                        null != o &&
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                className: S.statusText,
                                children: o
                            })
                    ]
                })
            })
        });
    return null == p
        ? (0, r.jsx)(l.FocusRing, {
              ringClassName: S.ring,
              children: (0, r.jsx)('div', {
                  ref: g,
                  role: 'tooltip',
                  tabIndex: 0,
                  className: s()(S.container, E, f),
                  'aria-label': b.intl.formatToPlainString(b.t.UpF5QU, {
                      emoji: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : '',
                      status: o
                  }),
                  onMouseEnter: () => m({ action: 'HOVER_CUSTOM_STATUS' }),
                  children: v
              })
          })
        : (0, r.jsx)(l.FocusRing, {
              ringClassName: S.ring,
              children: (0, r.jsxs)('div', {
                  ref: g,
                  role: 'tooltip',
                  tabIndex: 0,
                  className: s()(S.container, E, f),
                  'aria-label': b.intl.formatToPlainString(b.t.UpF5QU, {
                      emoji: null !== (n = null == a ? void 0 : a.name) && void 0 !== n ? n : '',
                      status: o
                  }),
                  onFocus: () => {
                      p(!0);
                  },
                  onBlur: (e) => {
                      var t;
                      !(null === (t = g.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && p(!1);
                  },
                  onMouseEnter: () => {
                      m({ action: 'HOVER_CUSTOM_STATUS' }), p(!0);
                  },
                  onMouseLeave: () => {
                      p(!1);
                  },
                  children: [v, _]
              })
          });
}
function N(e) {
    let { emoji: t, text: n, onCloseProfile: a, ...s } = e,
        [o, l] = i.useState(!1);
    return (0, r.jsx)(A, {
        ...s,
        emoji: t,
        text: n,
        className: S.editable,
        onShowToolbar: l,
        toolbar: (0, r.jsx)(I.Z, {
            isVisible: o,
            isExpandable: !1,
            onCloseProfile: a
        })
    });
}
function C(e) {
    let { emoji: t, text: n, user: a, guildId: s, channelId: o, profileType: l, ...u } = e,
        { interactionType: c, interactionSource: d, resetInteraction: f } = (0, m.Xo)(),
        p = d === T.n_.STATUS && c === T.P.REACT,
        h = d === T.n_.STATUS && c === T.P.REPLY,
        I = p || h,
        b = i.useRef(t),
        y = i.useRef(n);
    i.useEffect(() => {
        if (d === T.n_.STATUS) (b.current !== t || y.current !== n) && f(), (b.current = t), (y.current = n);
    }, [d, f, t, n]);
    let [N, C] = i.useState(!1),
        R = i.useCallback(
            (e) => {
                if (!!e || !I) C(e);
            },
            [I]
        );
    return (0, r.jsx)(g.Z, {
        user: a,
        guildId: s,
        channelId: o,
        profileType: l,
        sourceDetails: (() => {
            if (null == t) return n;
            let e = null != t.id ? '`' + ':'.concat(t.name, ':') + '`' : _.ZP.translateSurrogatesToInlineEmoji(t.name);
            return null == n ? e : ''.concat(e, ' ').concat(n);
        })(),
        sourceType: T.n_.STATUS,
        onClose: () => C(!1),
        children: () =>
            (0, r.jsx)(v.Z, {
                sourceType: T.n_.STATUS,
                user: a,
                children: (0, r.jsx)(A, {
                    ...u,
                    emoji: t,
                    text: n,
                    profileType: l,
                    className: I ? S.hoisted : void 0,
                    onShowToolbar: R,
                    toolbar: (0, r.jsx)(E.ZP, {
                        user: a,
                        sourceType: T.n_.STATUS,
                        isVisible: N && !I,
                        isExpandable: !1
                    })
                })
            })
    });
}
function R(e) {
    var t, n;
    let { user: i, onCloseProfile: a, reactReplyEnabled: s = !1, ...l } = e,
        u = (0, o.e7)([p.default], () => p.default.getId() === i.id),
        _ = (0, f.Z)(i.id),
        { analyticsLocations: h } = (0, d.ZP)(c.Z.PROFILE_CUSTOM_STATUS),
        m = null !== (t = null == _ ? void 0 : _.emoji) && void 0 !== t ? t : null,
        g = null !== (n = null == _ ? void 0 : _.state) && void 0 !== n ? n : null,
        E = null != g && '' !== g ? g : null;
    return null != m || null != E || u
        ? null == m && null == E
            ? (0, r.jsx)(d.Gt, {
                  value: h,
                  children: (0, r.jsx)(y, {
                      onCloseProfile: a,
                      ...l
                  })
              })
            : s
              ? (0, r.jsx)(d.Gt, {
                    value: h,
                    children: (0, r.jsx)(C, {
                        user: i,
                        emoji: m,
                        text: E,
                        ...l
                    })
                })
              : u
                ? (0, r.jsx)(d.Gt, {
                      value: h,
                      children: (0, r.jsx)(N, {
                          emoji: m,
                          text: E,
                          onCloseProfile: a,
                          ...l
                      })
                  })
                : (0, r.jsx)(d.Gt, {
                      value: h,
                      children: (0, r.jsx)(A, {
                          emoji: m,
                          text: E,
                          ...l
                      })
                  })
        : null;
}
