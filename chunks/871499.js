n.d(t, {
    Z: function () {
        return p;
    },
    d: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(131388),
    l = n(70097),
    u = n(259580),
    c = n(618158),
    d = n(362267),
    f = n(388032),
    _ = n(3910);
function p(e) {
    let { label: t, onClick: n, onKeyDown: i, onMouseEnter: o, onMouseLeave: l, onContextMenu: u, className: d, wrapperClassName: f, iconClassName: p, iconColor: h = 'currentColor', iconComponent: m, themeable: g = !1, disabled: E = !1, isActive: v = !1, tooltipPosition: I = 'top', shouldShowTooltip: b = !0, forceTooltipOpen: S = !1, buttonRef: T, grow: y, 'aria-label': A } = e;
    return (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(s.Tooltip, {
            position: I,
            text: t,
            'aria-label': A,
            shouldShow: b,
            forceOpen: S,
            children: (e) => {
                let { onClick: t, onContextMenu: c, onMouseEnter: I, onMouseLeave: b, ...S } = e;
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
                        null == I || I(), null == o || o(e);
                    },
                    onMouseLeave: (e) => {
                        null == b || b(), null == l || l(e);
                    },
                    onContextMenu: (e) => {
                        null == c || c(), null == u || u(e);
                    },
                    onFocus: (e) => {
                        null == I || I(), null == o || o(e);
                    },
                    onBlur: (e) => {
                        null == b || b(), null == l || l(e);
                    },
                    disabled: E,
                    innerClassName: _.lineHeightReset,
                    className: a()({ [_.active]: v }, d),
                    wrapperClassName: f,
                    buttonRef: T,
                    grow: y,
                    'aria-label': A,
                    ...S,
                    children: (0, r.jsx)(m, {
                        className: a()(_.controlIcon, p, {
                            [_.themeable]: g,
                            [_.active]: v
                        }),
                        color: h
                    })
                });
            }
        })
    });
}
let h = {
    red: _.red,
    white: _.white,
    green: _.green,
    yellow: _.yellow,
    primaryDark: _.primaryDark,
    primaryLight: _.primaryLight,
    activeLight: _.activeLight
};
function m(e) {
    let { color: t, isActive: n = !1, className: i, iconClassName: m, onPopoutClick: g, popoutOpen: E = !1, premiumGlow: v = !1, ...I } = e,
        b = (0, d.Z)(t, n),
        S = (0, o.Z)('(max-width: 456px)'),
        T = (0, r.jsx)(p, {
            ...I,
            grow: !1,
            onContextMenu: g,
            iconClassName: a()(m, _.centerIcon),
            className: a()(S ? i : null, _.staticButton, _.centerButton, h[b])
        });
    return S
        ? T
        : (0, r.jsxs)('div', {
              className: a()(i, _.contextMenuContainer),
              children: [
                  (0, r.jsxs)(r.Fragment, {
                      children: [
                          T,
                          v &&
                              (0, r.jsx)('div', {
                                  className: _.glow,
                                  children: (0, r.jsx)(l.Z, {
                                      loop: !0,
                                      autoPlay: !0,
                                      className: _.glowVideo,
                                      children: (0, r.jsx)('source', {
                                          src: 'https://cdn.discordapp.com/assets/content/3988d11030317ce331a0b327cac18a9c02a693041f9a7695bb13b3d4cb486e11.webm',
                                          type: 'video/webm'
                                      })
                                  })
                              })
                      ]
                  }),
                  null != g
                      ? (0, r.jsx)(c.Z, {
                            children: (0, r.jsx)(s.Clickable, {
                                'aria-label': f.intl.string(f.t.PdRCRk),
                                onClick: g,
                                onContextMenu: g,
                                className: a()(_.contextMenuNub, h[b], { [_.active]: E }),
                                children: (0, r.jsx)(u.Z, { className: a()(_.contextMenuCaret, { [_.open]: E }) })
                            })
                        })
                      : null
              ]
          });
}
