n.d(t, {
    j: function () {
        return r;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(212433),
    u = n(481060),
    c = n(686546),
    d = n(540059),
    _ = n(855981),
    E = n(55543),
    f = n(364677);
!(function (e) {
    (e[(e.UPDATE = 0)] = 'UPDATE'), (e[(e.NEW = 1)] = 'NEW');
})(r || (r = {}));
let h = 24,
    p = 20,
    m = {
        config: {
            friction: 26,
            tension: 700,
            mass: 1
        },
        initial: {
            scale: 1,
            opacity: 1
        },
        from: {
            scale: 0.6,
            opacity: 0
        },
        enter: {
            scale: 1,
            opacity: 1
        },
        leave: {
            scale: 0.6,
            opacity: 0
        }
    };
function I(e) {
    let { className: t, disabled: n = !1, innerClassName: r, childClassName: a, iconClassName: o, icon: I, children: T, onClick: g, isActive: S, onMouseEnter: A, onMouseLeave: v, onFocus: N, onBlur: O, pulse: R, sparkle: C, notification: y, 'aria-label': L, 'aria-expanded': b, 'aria-haspopup': D, 'aria-controls': M } = e,
        P = (0, d.Q)('ChannelTextAreaButton'),
        U = (0, u.useTransition)(null != T, {
            ...m,
            keys: (e) => (e ? 'children' : 'icon')
        }),
        w = (e) => {
            let { component: t } = e;
            return null != y
                ? (0, i.jsxs)('div', {
                      className: f.buttonContent,
                      children: [
                          (0, i.jsx)(c.ZP, {
                              className: f.iconMask,
                              mask: c.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: P ? p : h,
                              height: P ? p : h,
                              children: t
                          }),
                          (0, i.jsx)('span', { className: f.notificationDot })
                      ]
                  })
                : t;
        };
    return (0, i.jsxs)(u.Button, {
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        'aria-label': L,
        'aria-expanded': b,
        'aria-haspopup': D,
        'aria-controls': M,
        disabled: n,
        className: s()(t, { [f.active]: S }),
        innerClassName: s()(f.button, r, { [f.pulseButton]: R }),
        onClick: g,
        onMouseEnter: A,
        onMouseLeave: v,
        onFocus: N,
        onBlur: O,
        focusProps: {
            offset: {
                top: 4,
                bottom: 4
            }
        },
        children: [
            U((e, t, n) => {
                let { key: r } = n;
                return t
                    ? (0, i.jsx)(
                          l.animated.div,
                          {
                              style: e,
                              className: s()(f.buttonWrapper, a),
                              children: w({ component: T })
                          },
                          r
                      )
                    : null != I
                      ? (0, i.jsx)(
                            l.animated.div,
                            {
                                style: e,
                                className: s()(f.buttonWrapper, a),
                                children: w({
                                    component: (0, i.jsx)(I, {
                                        className: s()(f.icon, o, { [f.pulseIcon]: R }),
                                        color: 'currentColor'
                                    })
                                })
                            },
                            r
                        )
                      : void 0;
            }),
            C &&
                (0, i.jsxs)('div', {
                    className: f.sparkleContainer,
                    children: [(0, i.jsx)(E.Z, { className: f.sparkleStar }), (0, i.jsx)(_.Z, { className: f.sparklePlus })]
                })
        ]
    });
}
t.Z = a.memo(I);
