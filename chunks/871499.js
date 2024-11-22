n.d(t, {
    Z: function () {
        return g;
    },
    d: function () {
        return v;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(131388),
    u = n(686546),
    c = n(70097),
    d = n(259580),
    f = n(937995),
    _ = n(618158),
    p = n(362267),
    h = n(388032),
    m = n(3910);
function g(e) {
    let { label: t, onClick: n, onKeyDown: i, onMouseEnter: a, onMouseLeave: l, onContextMenu: u, className: c, wrapperClassName: d, iconClassName: f, iconColor: p = 'currentColor', iconComponent: h, themeable: g = !1, disabled: E = !1, isActive: v = !1, tooltipPosition: I = 'top', shouldShowTooltip: b = !0, forceTooltipOpen: T = !1, buttonRef: S, grow: y, 'aria-label': A } = e;
    return (0, r.jsx)(_.Z, {
        children: (0, r.jsx)(o.Tooltip, {
            position: I,
            text: t,
            'aria-label': A,
            shouldShow: b,
            forceOpen: T,
            children: (e) => {
                let { onClick: t, onContextMenu: _, onMouseEnter: I, onMouseLeave: b, ...T } = e;
                return (0, r.jsx)(o.Button, {
                    look: o.Button.Looks.BLANK,
                    size: o.Button.Sizes.NONE,
                    onKeyDown: (e) => {
                        null == i || i(e);
                    },
                    onClick: (e) => {
                        null == t || t(), null == n || n(e);
                    },
                    onMouseEnter: (e) => {
                        null == I || I(), null == a || a(e);
                    },
                    onMouseLeave: (e) => {
                        null == b || b(), null == l || l(e);
                    },
                    onContextMenu: (e) => {
                        null == _ || _(), null == u || u(e);
                    },
                    onFocus: (e) => {
                        null == I || I(), null == a || a(e);
                    },
                    onBlur: (e) => {
                        null == b || b(), null == l || l(e);
                    },
                    disabled: E,
                    innerClassName: m.lineHeightReset,
                    className: s()({ [m.active]: v }, c),
                    wrapperClassName: d,
                    buttonRef: S,
                    grow: y,
                    'aria-label': A,
                    ...T,
                    children: (0, r.jsx)(h, {
                        className: s()(m.controlIcon, f, {
                            [m.themeable]: g,
                            [m.active]: v
                        }),
                        color: p
                    })
                });
            }
        })
    });
}
let E = {
    red: m.red,
    white: m.white,
    green: m.green,
    yellow: m.yellow,
    primaryDark: m.primaryDark,
    primaryLight: m.primaryLight,
    activeLight: m.activeLight
};
function v(e) {
    let { color: t, isActive: n = !1, className: a, iconClassName: v, onPopoutClick: I, popoutOpen: b = !1, premiumGlow: T = !1, ...S } = e,
        y = (0, p.Z)(t, n),
        A = (0, l.Z)('(max-width: 456px)'),
        N = i.useRef(null),
        C = i.useContext(f.h9);
    i.useEffect(() => {
        null != N.current && (C ? N.current.pause() : N.current.play());
    }, [C]);
    let R = (0, r.jsx)(g, {
        ...S,
        grow: !1,
        onContextMenu: I,
        iconClassName: s()(v, m.centerIcon),
        className: s()(A ? a : null, m.staticButton, m.centerButton, E[y])
    });
    return A
        ? R
        : (0, r.jsxs)('div', {
              className: s()(a, m.contextMenuContainer),
              children: [
                  (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.ZP, {
                              className: s()(m.buttonMask),
                              mask: null == I ? null : u.QS.CHANNEL_CALL_CONTROL_BUTTON,
                              width: 56,
                              height: 56,
                              children: R
                          }),
                          T &&
                              (0, r.jsx)('div', {
                                  className: m.glow,
                                  children: (0, r.jsx)(c.Z, {
                                      ref: N,
                                      loop: !0,
                                      autoPlay: !0,
                                      className: m.glowVideo,
                                      children: (0, r.jsx)('source', {
                                          src: 'https://cdn.discordapp.com/assets/content/3988d11030317ce331a0b327cac18a9c02a693041f9a7695bb13b3d4cb486e11.webm',
                                          type: 'video/webm'
                                      })
                                  })
                              })
                      ]
                  }),
                  null != I
                      ? (0, r.jsx)(_.Z, {
                            children: (0, r.jsx)(o.Clickable, {
                                'aria-label': h.intl.string(h.t.PdRCRk),
                                onClick: I,
                                onContextMenu: I,
                                className: s()(m.contextMenuNub, E[y], { [m.active]: b }),
                                children: (0, r.jsx)(d.Z, { className: s()(m.contextMenuCaret, { [m.open]: b }) })
                            })
                        })
                      : null
              ]
          });
}
