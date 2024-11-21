n.d(t, {
    Z: function () {
        return h;
    },
    d: function () {
        return g;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(131388),
    l = n(686546),
    u = n(70097),
    c = n(259580),
    d = n(618158),
    f = n(362267),
    _ = n(388032),
    p = n(3910);
function h(e) {
    let { label: t, onClick: n, onKeyDown: i, onMouseEnter: o, onMouseLeave: l, onContextMenu: u, className: c, wrapperClassName: f, iconClassName: _, iconColor: h = 'currentColor', iconComponent: m, themeable: g = !1, disabled: E = !1, isActive: v = !1, tooltipPosition: b = 'top', shouldShowTooltip: I = !0, forceTooltipOpen: T = !1, buttonRef: S, grow: y, 'aria-label': A } = e;
    return (0, r.jsx)(d.Z, {
        children: (0, r.jsx)(s.Tooltip, {
            position: b,
            text: t,
            'aria-label': A,
            shouldShow: I,
            forceOpen: T,
            children: (e) => {
                let { onClick: t, onContextMenu: d, onMouseEnter: b, onMouseLeave: I, ...T } = e;
                return (0, r.jsx)(s.Button, {
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.NONE,
                    onKeyDown: (e) => {
                        null == i || i(e);
                    },
                    onClick: (e) => {
                        null == t || t(), null == n || n(e);
                    },
                    onMouseEnter: (e) => {
                        null == b || b(), null == o || o(e);
                    },
                    onMouseLeave: (e) => {
                        null == I || I(), null == l || l(e);
                    },
                    onContextMenu: (e) => {
                        null == d || d(), null == u || u(e);
                    },
                    onFocus: (e) => {
                        null == b || b(), null == o || o(e);
                    },
                    onBlur: (e) => {
                        null == I || I(), null == l || l(e);
                    },
                    disabled: E,
                    innerClassName: p.lineHeightReset,
                    className: a()({ [p.active]: v }, c),
                    wrapperClassName: f,
                    buttonRef: S,
                    grow: y,
                    'aria-label': A,
                    ...T,
                    children: (0, r.jsx)(m, {
                        className: a()(p.controlIcon, _, {
                            [p.themeable]: g,
                            [p.active]: v
                        }),
                        color: h
                    })
                });
            }
        })
    });
}
let m = {
    red: p.red,
    white: p.white,
    green: p.green,
    yellow: p.yellow,
    primaryDark: p.primaryDark,
    primaryLight: p.primaryLight,
    activeLight: p.activeLight
};
function g(e) {
    let { color: t, isActive: n = !1, className: i, iconClassName: g, onPopoutClick: E, popoutOpen: v = !1, premiumGlow: b = !1, ...I } = e,
        T = (0, f.Z)(t, n),
        S = (0, o.Z)('(max-width: 456px)'),
        y = (0, r.jsx)(h, {
            ...I,
            grow: !1,
            onContextMenu: E,
            iconClassName: a()(g, p.centerIcon),
            className: a()(S ? i : null, p.staticButton, p.centerButton, m[T])
        });
    return S
        ? y
        : (0, r.jsxs)('div', {
              className: a()(i, p.contextMenuContainer),
              children: [
                  (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.ZP, {
                              className: a()(p.buttonMask),
                              mask: null == E ? null : l.QS.CHANNEL_CALL_CONTROL_BUTTON,
                              width: 56,
                              height: 56,
                              children: y
                          }),
                          b &&
                              (0, r.jsx)('div', {
                                  className: p.glow,
                                  children: (0, r.jsx)(u.Z, {
                                      loop: !0,
                                      autoPlay: !0,
                                      className: p.glowVideo,
                                      children: (0, r.jsx)('source', {
                                          src: 'https://cdn.discordapp.com/assets/content/3988d11030317ce331a0b327cac18a9c02a693041f9a7695bb13b3d4cb486e11.webm',
                                          type: 'video/webm'
                                      })
                                  })
                              })
                      ]
                  }),
                  null != E
                      ? (0, r.jsx)(d.Z, {
                            children: (0, r.jsx)(s.Clickable, {
                                'aria-label': _.intl.string(_.t.PdRCRk),
                                onClick: E,
                                onContextMenu: E,
                                className: a()(p.contextMenuNub, m[T], { [p.active]: v }),
                                children: (0, r.jsx)(c.Z, { className: a()(p.contextMenuCaret, { [p.open]: v }) })
                            })
                        })
                      : null
              ]
          });
}
