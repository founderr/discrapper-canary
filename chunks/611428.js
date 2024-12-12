r.d(n, {
    Z: function () {
        return D;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(788307),
    f = r(100527),
    _ = r(906732),
    h = r(8454),
    p = r(633302),
    m = r(314897),
    g = r(785717),
    E = r(510659),
    v = r(287954),
    I = r(810097),
    T = r(64621),
    b = r(913002),
    y = r(228168),
    S = r(388032),
    A = r(376296);
function N(e) {
    let { profileType: n, onCloseProfile: i } = e,
        { analyticsLocations: s } = (0, _.ZP)(),
        { trackUserProfileAction: o } = (0, g.KZ)(),
        u = {
            [A.biteSize]: n === y.y0.BITE_SIZE,
            [A.fullSize]: n === y.y0.FULL_SIZE,
            [A.panel]: n === y.y0.PANEL
        },
        d = () => {
            o({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == i || i(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await r.e('51714').then(r.bind(r, 211065));
                    return (n) =>
                        (0, a.jsx)(e, {
                            ...n,
                            sourceAnalyticsLocations: s
                        });
                });
        };
    return (0, a.jsx)(c.Clickable, {
        className: l()(A.container, A.editable, u),
        'aria-label': S.intl.string(S.t['zrpF/f']),
        onClick: d,
        focusProps: { ringClassName: A.ring },
        children: (0, a.jsx)('div', {
            className: l()(A.outer, u),
            children: (0, a.jsxs)('span', {
                className: l()(A.inner, A.clickable),
                children: [
                    (0, a.jsx)(c.CirclePlusIcon, {
                        size: 'xs',
                        className: A.addStatusIcon,
                        colorClass: A.addStatusIconColor
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        className: A.addStatusPrompt,
                        children: S.intl.string(S.t.evw0o6)
                    })
                ]
            })
        })
    });
}
function C(e) {
    var n, r;
    let { emoji: i, text: o, profileType: u, animate: f, className: _, toolbar: h, onShowToolbar: p } = e,
        { trackUserProfileAction: m } = (0, g.KZ)(),
        E = s.useRef(null),
        v = {
            [A.biteSize]: u === y.y0.BITE_SIZE,
            [A.fullSize]: u === y.y0.FULL_SIZE,
            [A.panel]: u === y.y0.PANEL
        },
        I = (0, a.jsx)('div', {
            className: l()(A.outer, v),
            children: (0, a.jsx)('span', {
                className: A.inner,
                children: (0, a.jsxs)('span', {
                    className: A.clamp,
                    children: [
                        null != i &&
                            (0, a.jsx)(d.Iv, {
                                emoji: i,
                                animate: f,
                                hideTooltip: !1,
                                tooltipDelay: y.vB,
                                className: A.statusEmoji
                            }),
                        null != o &&
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                className: A.statusText,
                                children: o
                            })
                    ]
                })
            })
        });
    return null == p
        ? (0, a.jsx)(c.FocusRing, {
              ringClassName: A.ring,
              children: (0, a.jsx)('div', {
                  ref: E,
                  role: 'tooltip',
                  tabIndex: 0,
                  className: l()(A.container, v, _),
                  'aria-label': S.intl.formatToPlainString(S.t.UpF5QU, {
                      emoji: null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : '',
                      status: o
                  }),
                  onMouseEnter: () => m({ action: 'HOVER_CUSTOM_STATUS' }),
                  children: I
              })
          })
        : (0, a.jsx)(c.FocusRing, {
              ringClassName: A.ring,
              children: (0, a.jsxs)('div', {
                  ref: E,
                  role: 'tooltip',
                  tabIndex: 0,
                  className: l()(A.container, v, _),
                  'aria-label': S.intl.formatToPlainString(S.t.UpF5QU, {
                      emoji: null !== (r = null == i ? void 0 : i.name) && void 0 !== r ? r : '',
                      status: o
                  }),
                  onFocus: () => {
                      p(!0);
                  },
                  onBlur: (e) => {
                      var n;
                      !(null === (n = E.current) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) && p(!1);
                  },
                  onMouseEnter: () => {
                      m({ action: 'HOVER_CUSTOM_STATUS' }), p(!0);
                  },
                  onMouseLeave: () => {
                      p(!1);
                  },
                  children: [I, h]
              })
          });
}
function R(e) {
    let { emoji: n, text: r, onCloseProfile: i, ...o } = e,
        [l, u] = s.useState(!1);
    return (0, a.jsx)(C, {
        ...o,
        emoji: n,
        text: r,
        className: A.editable,
        onShowToolbar: u,
        toolbar: (0, a.jsx)(b.Z, {
            isVisible: l,
            isExpandable: !1,
            onCloseProfile: i
        })
    });
}
function O(e) {
    let { emoji: n, text: r, user: i, guildId: o, channelId: l, profileType: u, ...c } = e,
        { interactionType: d, interactionSource: f, resetInteraction: _ } = (0, E.Xo)(),
        h = f === y.n_.STATUS && d === y.P.REACT,
        m = f === y.n_.STATUS && d === y.P.REPLY,
        g = h || m,
        b = s.useRef(n),
        S = s.useRef(r);
    s.useEffect(() => {
        if (f === y.n_.STATUS) (b.current !== n || S.current !== r) && _(), (b.current = n), (S.current = r);
    }, [f, _, n, r]);
    let [N, R] = s.useState(!1),
        O = s.useCallback(
            (e) => {
                if (!!e || !g) R(e);
            },
            [g]
        ),
        D = () => {
            if (null == n) return r;
            let e = null != n.id ? '`' + ':'.concat(n.name, ':') + '`' : p.ZP.translateSurrogatesToInlineEmoji(n.name);
            return null == r ? e : ''.concat(e, ' ').concat(r);
        };
    return (0, a.jsx)(v.Z, {
        user: i,
        guildId: o,
        channelId: l,
        profileType: u,
        sourceDetails: D(),
        sourceType: y.n_.STATUS,
        onClose: () => R(!1),
        children: () =>
            (0, a.jsx)(T.Z, {
                sourceType: y.n_.STATUS,
                user: i,
                children: (0, a.jsx)(C, {
                    ...c,
                    emoji: n,
                    text: r,
                    profileType: u,
                    className: g ? A.hoisted : void 0,
                    onShowToolbar: O,
                    toolbar: (0, a.jsx)(I.ZP, {
                        user: i,
                        sourceType: y.n_.STATUS,
                        isVisible: N && !g,
                        isExpandable: !1
                    })
                })
            })
    });
}
function D(e) {
    var n, r;
    let { user: i, onCloseProfile: s, reactReplyEnabled: o = !1, ...l } = e,
        c = (0, u.e7)([m.default], () => m.default.getId() === i.id),
        d = (0, h.Z)(i.id),
        { analyticsLocations: p } = (0, _.ZP)(f.Z.PROFILE_CUSTOM_STATUS),
        g = null !== (n = null == d ? void 0 : d.emoji) && void 0 !== n ? n : null,
        E = null !== (r = null == d ? void 0 : d.state) && void 0 !== r ? r : null,
        v = null != E && '' !== E ? E : null;
    return null != g || null != v || c
        ? null == g && null == v
            ? (0, a.jsx)(_.Gt, {
                  value: p,
                  children: (0, a.jsx)(N, {
                      onCloseProfile: s,
                      ...l
                  })
              })
            : o
              ? (0, a.jsx)(_.Gt, {
                    value: p,
                    children: (0, a.jsx)(O, {
                        user: i,
                        emoji: g,
                        text: v,
                        ...l
                    })
                })
              : c
                ? (0, a.jsx)(_.Gt, {
                      value: p,
                      children: (0, a.jsx)(R, {
                          emoji: g,
                          text: v,
                          onCloseProfile: s,
                          ...l
                      })
                  })
                : (0, a.jsx)(_.Gt, {
                      value: p,
                      children: (0, a.jsx)(C, {
                          emoji: g,
                          text: v,
                          ...l
                      })
                  })
        : null;
}
