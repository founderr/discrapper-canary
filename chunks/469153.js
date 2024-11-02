var i = n(200651);
n(192379);
var l = n(100621),
    a = n(442837),
    r = n(481060),
    o = n(607070),
    s = n(388032),
    u = n(704108),
    c = n(482617);
let d = () =>
    (0, i.jsxs)('div', {
        className: c.toast,
        children: [
            (0, i.jsx)(r.Spinner, {
                type: r.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                className: u.loadingSpinner
            }),
            (0, i.jsx)(r.Text, {
                color: 'header-primary',
                variant: 'text-md/normal',
                children: s.intl.string(s.t['5z/hlJ'])
            })
        ]
    });
t.Z = (e) => {
    let { shown: t, sent: n, className: u } = e,
        c = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        h = (0, r.useTransition)(
            t,
            {
                from: {
                    transform: c ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0
                },
                enter: {
                    transform: 'translateY(0)',
                    opacity: 1
                },
                leave: {
                    transform: c ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0
                },
                config: {
                    mass: 1,
                    tension: 500,
                    friction: 18,
                    clamp: !0
                },
                delay: 200
            },
            'animate-always'
        );
    return (0, i.jsx)(i.Fragment, {
        children: h(
            (e, t) =>
                t &&
                (0, i.jsx)(l.animated.div, {
                    className: u,
                    style: e,
                    children: n
                        ? (0, i.jsx)(r.Toast, {
                              message: s.intl.string(s.t.fjcCk5),
                              type: r.ToastType.SUCCESS,
                              id: 'success_message_toast'
                          })
                        : (0, i.jsx)(r.Toast, {
                              message: '',
                              type: r.ToastType.CUSTOM,
                              id: 'custom_loading_message_toast',
                              options: { component: (0, i.jsx)(d, {}) }
                          })
                })
        )
    });
};
