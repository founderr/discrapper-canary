var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(526629),
    o = n(442837),
    l = n(481060),
    u = n(493683),
    c = n(607070),
    d = n(785717),
    _ = n(228168),
    E = n(689938),
    f = n(920163),
    h = n(482617);
let p = (e) => {
        let { message: t, userId: n, onClose: i } = e,
            { trackUserProfileAction: s } = (0, d.KZ)();
        return (0, r.jsxs)('div', {
            className: a()(h.toast, f.toastPadding),
            children: [
                (0, r.jsx)(l.CheckmarkLargeIcon, {
                    size: 'sm',
                    className: f.toastIcon,
                    color: l.tokens.colors.STATUS_POSITIVE.css
                }),
                (0, r.jsxs)('div', {
                    className: f.successToast,
                    children: [
                        (0, r.jsx)(l.Text, {
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: t
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            children: E.Z.Messages.USER_PROFILE_TOAST_VIEW.format({
                                onClick: () => {
                                    s({ action: 'PRESS_REACT_REPLY_TOAST' }), null == i || i(), u.Z.openPrivateChannel(n);
                                }
                            })
                        })
                    ]
                })
            ]
        });
    },
    I = () =>
        (0, r.jsxs)('div', {
            className: a()(h.toast, f.toastPadding),
            children: [
                (0, r.jsx)(l.Spinner, {
                    type: l.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                    className: f.toastIcon
                }),
                (0, r.jsx)(l.Text, {
                    color: 'header-primary',
                    variant: 'text-sm/semibold',
                    children: E.Z.Messages.USER_PROFILE_SENDING
                })
            ]
        });
t.Z = (e) => {
    let { interactionTypeSent: t, isVisible: n, userId: i, onClose: u, className: d } = e,
        h = t === _.P.REPLY ? E.Z.Messages.USER_PROFILE_REPLY_SENT : E.Z.Messages.USER_PROFILE_REACTION_SENT,
        m = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        T = (0, l.useTransition)(
            n,
            {
                from: {
                    transform: m ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0
                },
                enter: {
                    transform: 'translateY(0)',
                    opacity: 1
                },
                leave: {
                    transform: m ? 'translateY(0)' : 'translateY(16px)',
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
    return (0, r.jsx)(r.Fragment, {
        children: T(
            (e, n) =>
                n &&
                (0, r.jsx)(s.animated.div, {
                    className: a()(f.toastContainer, d),
                    style: e,
                    children:
                        null != t
                            ? (0, r.jsx)(l.Toast, {
                                  message: '',
                                  type: l.ToastType.CUSTOM,
                                  id: 'react_reply_success_toast',
                                  options: {
                                      component: (0, r.jsx)(p, {
                                          userId: i,
                                          message: h,
                                          onClose: u
                                      })
                                  }
                              })
                            : (0, r.jsx)(l.Toast, {
                                  message: '',
                                  type: l.ToastType.CUSTOM,
                                  id: 'react_reply_loading_toast',
                                  options: { component: (0, r.jsx)(I, {}) }
                              })
                })
        )
    });
};
