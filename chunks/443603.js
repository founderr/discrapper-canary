n.d(t, {
    j: function () {
        return i;
    }
});
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(100621),
    c = n(481060),
    d = n(686546),
    f = n(540059),
    _ = n(855981),
    p = n(55543),
    h = n(364677);
((r = i || (i = {}))[(r.UPDATE = 0)] = 'UPDATE'), (r[(r.NEW = 1)] = 'NEW');
let m = {
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
t.Z = s.memo(function (e) {
    let { className: t, disabled: n = !1, innerClassName: r, childClassName: i, iconClassName: s, icon: o, children: g, onClick: E, isActive: v, onMouseEnter: I, onMouseLeave: b, onFocus: S, onBlur: T, pulse: y, sparkle: A, notification: N, 'aria-label': C, 'aria-expanded': R, 'aria-haspopup': O, 'aria-controls': D } = e,
        L = (0, f.Q)('ChannelTextAreaButton'),
        x = (0, c.useTransition)(null != g, {
            ...m,
            keys: (e) => (e ? 'children' : 'icon')
        }),
        w = (e) => {
            let { component: t } = e;
            return null != N
                ? (0, a.jsxs)('div', {
                      className: h.buttonContent,
                      children: [
                          (0, a.jsx)(d.ZP, {
                              className: h.iconMask,
                              mask: d.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: L ? 20 : 24,
                              height: L ? 20 : 24,
                              children: t
                          }),
                          (0, a.jsx)('span', { className: h.notificationDot })
                      ]
                  })
                : t;
        };
    return (0, a.jsxs)(c.Button, {
        look: c.Button.Looks.BLANK,
        size: c.Button.Sizes.NONE,
        'aria-label': C,
        'aria-expanded': R,
        'aria-haspopup': O,
        'aria-controls': D,
        disabled: n,
        className: l()(t, { [h.active]: v }),
        innerClassName: l()(h.button, r, { [h.pulseButton]: y }),
        onClick: E,
        onMouseEnter: I,
        onMouseLeave: b,
        onFocus: S,
        onBlur: T,
        focusProps: {
            offset: {
                top: 4,
                bottom: 4
            }
        },
        children: [
            x((e, t, n) => {
                let { key: r } = n;
                return t
                    ? (0, a.jsx)(
                          u.animated.div,
                          {
                              style: e,
                              className: l()(h.buttonWrapper, i),
                              children: w({ component: g })
                          },
                          r
                      )
                    : null != o
                      ? (0, a.jsx)(
                            u.animated.div,
                            {
                                style: e,
                                className: l()(h.buttonWrapper, i),
                                children: w({
                                    component: (0, a.jsx)(o, {
                                        className: l()(h.icon, s, { [h.pulseIcon]: y }),
                                        color: 'currentColor'
                                    })
                                })
                            },
                            r
                        )
                      : void 0;
            }),
            A &&
                (0, a.jsxs)('div', {
                    className: h.sparkleContainer,
                    children: [(0, a.jsx)(p.Z, { className: h.sparkleStar }), (0, a.jsx)(_.Z, { className: h.sparklePlus })]
                })
        ]
    });
});
