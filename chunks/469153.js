var a = t(735250);
t(470079);
var l = t(338545),
    i = t(442837),
    r = t(481060),
    s = t(607070),
    o = t(689938),
    u = t(348910),
    c = t(810819);
let d = () =>
    (0, a.jsxs)('div', {
        className: c.toast,
        children: [
            (0, a.jsx)(r.Spinner, {
                type: r.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                className: u.loadingSpinner
            }),
            (0, a.jsx)(r.Text, {
                color: 'header-primary',
                variant: 'text-md/normal',
                children: o.Z.Messages.CONTENT_INVENTORY_MESSAGE_SENDING
            })
        ]
    });
n.Z = (e) => {
    let { shown: n, sent: t, className: u } = e,
        c = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        _ = (0, r.useTransition)(
            n,
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
    return (0, a.jsx)(a.Fragment, {
        children: _(
            (e, n) =>
                n &&
                (0, a.jsx)(l.animated.div, {
                    className: u,
                    style: e,
                    children: t
                        ? (0, a.jsx)(r.Toast, {
                              message: o.Z.Messages.CONTENT_INVENTORY_MESSAGE_SENT,
                              type: r.ToastType.SUCCESS,
                              id: 'success_message_toast'
                          })
                        : (0, a.jsx)(r.Toast, {
                              message: '',
                              type: r.ToastType.CUSTOM,
                              id: 'custom_loading_message_toast',
                              options: { component: (0, a.jsx)(d, {}) }
                          })
                })
        )
    });
};
