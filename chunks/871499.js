n.d(t, {
    Z: function () {
        return h;
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
    l = n(686546),
    u = n(259580),
    c = n(618158),
    d = n(362267),
    f = n(388032),
    _ = n(109438);
function h(e) {
    let { label: t, onClick: n, onKeyDown: i, onMouseEnter: o, onMouseLeave: l, onContextMenu: u, className: d, wrapperClassName: f, iconClassName: h, iconColor: p = 'currentColor', iconComponent: m, themeable: g = !1, disabled: E = !1, isActive: v = !1, tooltipPosition: I = 'top', shouldShowTooltip: S = !0, forceTooltipOpen: T = !1, buttonRef: b, grow: y, 'aria-label': A } = e;
    return (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(s.Tooltip, {
            position: I,
            text: t,
            'aria-label': A,
            shouldShow: S,
            forceOpen: T,
            children: (e) => {
                let { onClick: t, onContextMenu: c, onMouseEnter: I, onMouseLeave: S, ...T } = e;
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
                        null == S || S(), null == l || l(e);
                    },
                    onContextMenu: (e) => {
                        null == c || c(), null == u || u(e);
                    },
                    onFocus: (e) => {
                        null == I || I(), null == o || o(e);
                    },
                    onBlur: (e) => {
                        null == S || S(), null == l || l(e);
                    },
                    disabled: E,
                    innerClassName: _.lineHeightReset,
                    className: a()({ [_.active]: v }, d),
                    wrapperClassName: f,
                    buttonRef: b,
                    grow: y,
                    'aria-label': A,
                    ...T,
                    children: (0, r.jsx)(m, {
                        className: a()(_.controlIcon, h, {
                            [_.themeable]: g,
                            [_.active]: v
                        }),
                        color: p
                    })
                });
            }
        })
    });
}
let p = {
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
        S = (0, d.Z)(t, n),
        T = (0, o.Z)('(max-width: 456px)'),
        b = (0, r.jsx)(h, {
            ...I,
            grow: !1,
            onContextMenu: g,
            iconClassName: a()(m, _.centerIcon),
            className: a()(T ? i : null, _.staticButton, _.centerButton, p[S])
        });
    return T
        ? b
        : (0, r.jsxs)('div', {
              className: a()(i, _.contextMenuContainer),
              children: [
                  (0, r.jsx)(l.ZP, {
                      className: a()(_.buttonMask, { [_.buttonPremiumGlow]: v }),
                      mask: null == g ? null : l.QS.CHANNEL_CALL_CONTROL_BUTTON,
                      width: 56,
                      height: 56,
                      children: b
                  }),
                  null != g
                      ? (0, r.jsx)(c.Z, {
                            children: (0, r.jsx)(s.Clickable, {
                                'aria-label': f.intl.string(f.t.PdRCRk),
                                onClick: g,
                                onContextMenu: g,
                                className: a()(_.contextMenuNub, p[S], { [_.active]: E }),
                                children: (0, r.jsx)(u.Z, { className: a()(_.contextMenuCaret, { [_.open]: E }) })
                            })
                        })
                      : null
              ]
          });
}
