n.d(t, {
    Z: function () {
        return v;
    },
    d: function () {
        return b;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(212605),
    l = n(481060),
    u = n(131388),
    c = n(686546),
    d = n(70097),
    f = n(411840),
    _ = n(259580),
    p = n(937995),
    h = n(618158),
    m = n(362267),
    g = n(388032),
    E = n(32390);
function v(e) {
    let { label: t, onClick: n, onKeyDown: i, onMouseEnter: a, onMouseLeave: u, onContextMenu: c, className: d, wrapperClassName: f, iconClassName: _, iconColor: p = 'currentColor', iconComponent: m, themeable: g = !1, disabled: v = !1, isActive: I = !1, tooltipPosition: T = 'top', shouldShowTooltip: b = !0, forceTooltipOpen: S = !1, buttonRef: y, grow: A, 'aria-label': N } = e;
    return (0, r.jsx)(h.Z, {
        children: (0, r.jsx)(l.Tooltip, {
            position: T,
            text: t,
            'aria-label': N,
            shouldShow: b,
            forceOpen: S,
            children: (e) => {
                let { onClick: t, onContextMenu: h, onMouseEnter: T, onMouseLeave: b, ...S } = e;
                return (0, r.jsx)(l.Button, {
                    look: l.Button.Looks.BLANK,
                    size: l.Button.Sizes.NONE,
                    onKeyDown: (e) => {
                        null == i || i(e);
                    },
                    onClick: (e) => {
                        null == t || t(), null == n || n(e);
                    },
                    onMouseEnter: (e) => {
                        null == T || T(), null == a || a(e);
                    },
                    onMouseLeave: (e) => {
                        null == b || b(), null == u || u(e);
                    },
                    onContextMenu: (e) => {
                        null == h || h(), null == c || c(e);
                    },
                    onFocus: (e) => {
                        null == T || T(), null == a || a(e);
                    },
                    onBlur: (e) => {
                        null == b || b(), null == u || u(e);
                    },
                    disabled: v,
                    innerClassName: E.lineHeightReset,
                    className: s()({ [E.active]: I }, d),
                    wrapperClassName: f,
                    buttonRef: y,
                    grow: A,
                    'aria-label': N,
                    ...S,
                    children: (0, r.jsx)(m, {
                        size: o.Z.md,
                        className: s()(E.controlIcon, _, {
                            [E.themeable]: g,
                            [E.active]: I
                        }),
                        color: p
                    })
                });
            }
        })
    });
}
let I = {
        red: E.red,
        white: E.white,
        green: E.green,
        yellow: E.yellow,
        primaryDark: E.primaryDark,
        primaryLight: E.primaryLight,
        activeLight: E.activeLight
    },
    T = {
        red: E.red,
        white: E.white,
        green: E.green,
        yellow: E.yellow,
        primaryDark: E.experimentDark,
        primaryLight: E.primaryLight,
        activeLight: E.activeLight
    };
function b(e) {
    let { color: t, ignoreColorForCaret: n = !1, isActive: a = !1, className: o, iconClassName: b, onPopoutClick: S, popoutOpen: y = !1, premiumGlow: A = !1, fullRegionButton: N = !1, ...C } = e,
        R = (0, m.Z)(t, a),
        O = (0, m.Z)(n ? void 0 : t, !1),
        D = (0, u.Z)('(max-width: 456px)'),
        L = i.useRef(null),
        x = i.useContext(p.h9);
    i.useEffect(() => {
        null != L.current && (x ? L.current.pause() : L.current.play());
    }, [x]);
    let { groupedButtons: w } = (0, f.Z)({ location: 'CenterControlButton' }),
        P = w ? [E.experimentButton, T[R], N && null == S && E.fullRegionButton] : [I[R]],
        M = (0, r.jsx)(v, {
            ...C,
            grow: !1,
            onContextMenu: S,
            iconClassName: s()(b, E.centerIcon, w && E.experimentControlIcon, w && N && null == S && E.fullRegionIcon),
            className: s()(D ? o : null, E.staticButton, E.centerButton, ...P)
        });
    return D
        ? M
        : w
          ? (0, r.jsxs)('div', {
                className: s()(E.caretButtonContainer, o, N && null != S && [E.fullRegionDropdownButton, T[R]]),
                children: [
                    M,
                    null != S
                        ? (0, r.jsx)(h.Z, {
                              children: (0, r.jsx)(l.Clickable, {
                                  'aria-label': g.intl.string(g.t.PdRCRk),
                                  onClick: S,
                                  onContextMenu: S,
                                  className: s()(E.contextMenuNubExperiment, T[O], { [E.active]: y }),
                                  children: (0, r.jsx)(_.Z, { className: s()(E.contextMenuCaretExperiment, { [E.open]: y }) })
                              })
                          })
                        : null
                ]
            })
          : (0, r.jsxs)('div', {
                className: s()(o, E.contextMenuContainer),
                children: [
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(c.ZP, {
                                className: s()(E.buttonMask),
                                mask: null == S ? null : c.QS.CHANNEL_CALL_CONTROL_BUTTON,
                                width: 56,
                                height: 56,
                                children: M
                            }),
                            A &&
                                (0, r.jsx)('div', {
                                    className: E.glow,
                                    children: (0, r.jsx)(d.Z, {
                                        ref: L,
                                        loop: !0,
                                        autoPlay: !0,
                                        className: E.glowVideo,
                                        children: (0, r.jsx)('source', {
                                            src: 'https://cdn.discordapp.com/assets/content/3988d11030317ce331a0b327cac18a9c02a693041f9a7695bb13b3d4cb486e11.webm',
                                            type: 'video/webm'
                                        })
                                    })
                                })
                        ]
                    }),
                    null != S
                        ? (0, r.jsx)(h.Z, {
                              children: (0, r.jsx)(l.Clickable, {
                                  'aria-label': g.intl.string(g.t.PdRCRk),
                                  onClick: S,
                                  onContextMenu: S,
                                  className: s()(E.contextMenuNub, I[R], { [E.active]: y }),
                                  children: (0, r.jsx)(_.Z, { className: s()(E.contextMenuCaret, { [E.open]: y }) })
                              })
                          })
                        : null
                ]
            });
}
