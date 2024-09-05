t.r(n),
    t.d(n, {
        default: function () {
            return T;
        }
    }),
    t(47120);
var i,
    o,
    a = t(735250),
    r = t(470079),
    l = t(442837),
    s = t(481060),
    c = t(728345),
    d = t(812206),
    u = t(886176),
    f = t(270144),
    p = t(572004),
    C = t(504211),
    _ = t(283836),
    b = t(507608),
    m = t(981631),
    I = t(272242),
    h = t(689938),
    S = t(437561);
function T(e) {
    let { onClose: n, transitionState: t, appId: i, onlySubscribeServerSubForGuildId: o } = e,
        T = (0, l.e7)([d.Z], () => d.Z.getApplication(i), [i]),
        [L, g] = r.useState(() => (d.Z.isFetchingApplication(i) ? { status: 1 } : { status: 0 })),
        v = r.useRef(null),
        [E, N] = r.useState(!0),
        A = () => {
            var e;
            (null === (e = v.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? N(!1) : N(!0);
        };
    r.useEffect(() => {
        0 === L.status &&
            (g({ status: 1 }),
            c.Z.fetchApplication(i)
                .then(() => {
                    g({ status: 2 });
                })
                .catch((e) => {
                    g({
                        status: 3,
                        error: e.message
                    });
                }));
    }, [i, L.status]);
    let { subscriptions: O, otps: y } = (0, _.q)(i);
    if (((0, f.FE)(i, null == T ? void 0 : T.primarySkuId, { refetchOnMount: !0 }), null == T)) return null;
    let R = h.Z.Messages.STOREFRONT_TITLE.format({ appName: T.name });
    return (0, a.jsxs)(s.ModalRoot, {
        transitionState: t,
        'aria-label': R,
        size: s.ModalSize.DYNAMIC,
        className: S.modal,
        children: [
            (0, a.jsxs)(s.ModalHeader, {
                className: S.modalHeader,
                children: [
                    (0, a.jsxs)('div', {
                        className: S.modalTitle,
                        children: [
                            (0, a.jsx)(u.Z, {}),
                            (0, a.jsx)(s.Heading, {
                                variant: 'heading-md/semibold',
                                children: R
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: S.modalHeaderLinks,
                        children: [
                            p.wS &&
                                (0, a.jsx)(s.Button, {
                                    look: s.ButtonLooks.BLANK,
                                    size: s.ButtonSizes.ICON,
                                    color: s.ButtonColors.TRANSPARENT,
                                    'aria-label': h.Z.Messages.COPY_LINK,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(m.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(i, I.ApplicationDirectoryProfileSections.STORE));
                                        (0, p.JG)(e), (0, s.showToast)((0, s.createToast)(h.Z.Messages.COPIED_LINK, s.ToastType.SUCCESS)), (0, C.X)(i, C.B.STORE_MODAL);
                                    },
                                    children: (0, a.jsx)(s.LinkIcon, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20,
                                        color: 'var(--white)'
                                    })
                                }),
                            (0, a.jsx)(s.ModalCloseButton, {
                                onClick: n,
                                className: S.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(s.ModalContent, {
                scrollerRef: (e) => {
                    null != e && ((v.current = e), A());
                },
                onScroll: A,
                children: (0, a.jsx)(b.AF, {
                    app: T,
                    onlySubscribeServerSubForGuildId: o,
                    subscriptions: O,
                    otps: y
                })
            }),
            (0, a.jsx)('div', {
                className: S.containerScrollGradient,
                'data-shown': E
            })
        ]
    });
}
((o = i || (i = {}))[(o.NONE = 0)] = 'NONE'), (o[(o.FETCHING = 1)] = 'FETCHING'), (o[(o.FETCHED = 2)] = 'FETCHED'), (o[(o.ERROR = 3)] = 'ERROR');
