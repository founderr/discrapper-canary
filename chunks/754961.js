n.d(t, {
    T: function () {
        return p;
    },
    i: function () {
        return g;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(100621),
    o = n(481060),
    c = n(603368),
    d = n(284019),
    u = n(388032),
    h = n(610817);
function m(e) {
    let { index: t, onClick: n, name: l, isActive: d, animate: m, fillBackgroundColor: p, hasError: g } = e,
        f = (0, o.useToken)(o.tokens.colors.BG_SURFACE_OVERLAY),
        _ = r.useMemo(() => (0, c.j1)(p, f.hex()), [p, f]),
        E = null != _,
        I = (0, o.useSpring)(
            {
                transform: d ? 'translateX(0%)' : 'translateX(-100%)',
                config: {
                    ...s.config.stiff,
                    clamp: !0
                }
            },
            m ? 'respect-motion-settings' : 'animate-never'
        ),
        C = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/medium',
                    color: 'header-primary',
                    children: u.intl.string(u.t.M6w76e)
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: u.intl.string(u.t.pNtCgo)
                })
            ]
        });
    return (0, i.jsx)(o.Tooltip, {
        color: g ? o.Tooltip.Colors.GREY : o.Tooltip.Colors.BRAND,
        text: g ? C : l,
        'aria-label': g ? u.intl.string(u.t.M6w76e) : l,
        shouldShow: null != n,
        tooltipStyle: _,
        tooltipClassName: a()(h.progressStepTooltip, { [h.progressStepTooltipCustomColors]: !g && null != _ }),
        children: (e) =>
            (0, i.jsxs)(o.Clickable, {
                ...e,
                'aria-label': u.intl.formatToPlainString(u.t.tCQ3Hx, { number: t }),
                tabIndex: null == n ? -1 : void 0,
                onClick: n,
                className: h.progressStepWrapper,
                children: [
                    g &&
                        (0, i.jsx)(o.WarningIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: h.errorIcon
                        }),
                    (0, i.jsx)('div', {
                        className: h.progressStep,
                        children: (0, i.jsx)(s.animated.div, {
                            style: {
                                ...I,
                                ..._
                            },
                            className: a()(h.progressStepFill, { [h.customProgressStepFill]: E })
                        })
                    })
                ]
            })
    });
}
function p(e) {
    let { steps: t, currentStepIndex: n, furthestStepIndex: r, onStepClick: l, stepFillColor: o, animationStyle: c, className: d } = e;
    return (0, i.jsx)(s.animated.div, {
        style: c,
        className: a()(h.progressContainer, d),
        children: t.map((e) => {
            let { index: t, name: a, hasError: s } = e;
            return (0, i.jsx)(
                m,
                {
                    name: a,
                    onClick: t <= r ? () => l(t) : void 0,
                    isActive: t <= n,
                    hasError: s,
                    index: t,
                    fillBackgroundColor: o,
                    animate: n === t || n + 1 === t
                },
                a
            );
        })
    });
}
function g(e) {
    let { className: t, isBackDisabled: n, isNextDisabled: r, onNextClick: l, onBackClick: c, backButtonClassName: m, nextButtonBackgroundColor: p, nextButtonClassName: g, nextButtonAnimationStyle: f } = e;
    return (0, i.jsxs)('div', {
        className: a()(h.buttonsContainer, t),
        children: [
            (0, i.jsx)(o.Button, {
                look: o.Button.Looks.OUTLINED,
                size: o.Button.Sizes.MEDIUM,
                color: o.Button.Colors.PRIMARY,
                className: m,
                onClick: c,
                disabled: n,
                children: u.intl.string(u.t['13/7kZ'])
            }),
            (0, i.jsx)(s.animated.div, {
                style: f,
                children: (0, i.jsx)(d.Z, {
                    className: g,
                    themeColor: p,
                    color: o.Button.Colors.BRAND,
                    look: o.Button.Looks.FILLED,
                    size: o.Button.Sizes.MEDIUM,
                    onClick: l,
                    disabled: r,
                    children: u.intl.string(u.t.PDTjLC)
                })
            })
        ]
    });
}
