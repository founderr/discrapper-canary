l.r(n),
    l.d(n, {
        default: function () {
            return N;
        }
    }),
    l(47120);
var i,
    t,
    s = l(735250),
    a = l(470079),
    r = l(442837),
    o = l(481060),
    d = l(728345),
    u = l(812206),
    c = l(886176),
    m = l(572004),
    p = l(504211),
    v = l(283836),
    h = l(507608),
    x = l(981631),
    S = l(272242),
    g = l(689938),
    I = l(213891);
function N(e) {
    let { onClose: n, transitionState: l, appId: i, onlySubscribeServerSubForGuildId: t } = e,
        N = (0, r.e7)([u.Z], () => u.Z.getApplication(i), [i]),
        [T, j] = a.useState(() => (u.Z.isFetchingApplication(i) ? { status: 1 } : { status: 0 })),
        R = a.useRef(null),
        [f, b] = a.useState(!0),
        O = () => {
            var e;
            (null === (e = R.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? b(!1) : b(!0);
        };
    a.useEffect(() => {
        0 === T.status &&
            (j({ status: 1 }),
            d.Z.fetchApplication(i)
                .then(() => {
                    j({ status: 2 });
                })
                .catch((e) => {
                    j({
                        status: 3,
                        error: e.message
                    });
                }));
    }, [i, T.status]);
    let { subscriptions: k, otps: E } = (0, v.q)(i);
    if (null == N) return null;
    let P = g.Z.Messages.STOREFRONT_TITLE.format({ appName: N.name });
    return (0, s.jsxs)(o.ModalRoot, {
        transitionState: l,
        'aria-label': P,
        size: o.ModalSize.DYNAMIC,
        className: I.modal,
        children: [
            (0, s.jsxs)(o.ModalHeader, {
                className: I.modalHeader,
                children: [
                    (0, s.jsxs)('div', {
                        className: I.modalTitle,
                        children: [
                            (0, s.jsx)(c.Z, {}),
                            (0, s.jsx)(o.Heading, {
                                variant: 'heading-md/semibold',
                                children: P
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: I.modalHeaderLinks,
                        children: [
                            m.wS &&
                                (0, s.jsx)(o.Button, {
                                    look: o.ButtonLooks.BLANK,
                                    size: o.ButtonSizes.ICON,
                                    color: o.ButtonColors.TRANSPARENT,
                                    'aria-label': g.Z.Messages.COPY_LINK,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(x.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(i, S.ApplicationDirectoryProfileSections.STORE));
                                        (0, m.JG)(e), (0, o.showToast)((0, o.createToast)(g.Z.Messages.COPIED_LINK, o.ToastType.SUCCESS)), (0, p.X)(i, p.B.STORE_MODAL);
                                    },
                                    children: (0, s.jsx)(o.LinkIcon, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20,
                                        color: 'var(--white)'
                                    })
                                }),
                            (0, s.jsx)(o.ModalCloseButton, {
                                onClick: n,
                                className: I.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsx)(o.ModalContent, {
                scrollerRef: (e) => {
                    null != e && ((R.current = e), O());
                },
                onScroll: O,
                children: (0, s.jsx)(h.AF, {
                    app: N,
                    onlySubscribeServerSubForGuildId: t,
                    subscriptions: k,
                    otps: E
                })
            }),
            (0, s.jsx)('div', {
                className: I.containerScrollGradient,
                'data-shown': f
            })
        ]
    });
}
((t = i || (i = {}))[(t.NONE = 0)] = 'NONE'), (t[(t.FETCHING = 1)] = 'FETCHING'), (t[(t.FETCHED = 2)] = 'FETCHED'), (t[(t.ERROR = 3)] = 'ERROR');
