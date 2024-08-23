t.r(n),
    t.d(n, {
        default: function () {
            return L;
        }
    }),
    t(47120);
var i,
    o,
    a = t(735250),
    r = t(470079),
    s = t(442837),
    l = t(481060),
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
function L(e) {
    let { onClose: n, transitionState: t, appId: i, onlySubscribeServerSubForGuildId: o } = e,
        L = (0, s.e7)([d.Z], () => d.Z.getApplication(i), [i]),
        [T, g] = r.useState(() => (d.Z.isFetchingApplication(i) ? { status: 1 } : { status: 0 })),
        v = r.useRef(null),
        [E, N] = r.useState(!0),
        A = () => {
            var e;
            (null === (e = v.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? N(!1) : N(!0);
        };
    r.useEffect(() => {
        0 === T.status &&
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
    }, [i, T.status]);
    let { subs: O, otps: y, subscriptionGroupListing: R } = (0, _.q)(i, o);
    if (((0, f.FE)(i, null == L ? void 0 : L.primarySkuId, { refetchOnMount: !0 }), null == L)) return null;
    let Z = h.Z.Messages.STOREFRONT_TITLE.format({ appName: L.name });
    return (0, a.jsxs)(l.ModalRoot, {
        transitionState: t,
        'aria-label': Z,
        size: l.ModalSize.DYNAMIC,
        className: S.modal,
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                className: S.modalHeader,
                children: [
                    (0, a.jsxs)('div', {
                        className: S.modalTitle,
                        children: [
                            (0, a.jsx)(u.Z, {}),
                            (0, a.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                children: Z
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: S.modalHeaderLinks,
                        children: [
                            p.wS &&
                                (0, a.jsx)(l.Button, {
                                    look: l.ButtonLooks.BLANK,
                                    size: l.ButtonSizes.ICON,
                                    color: l.ButtonColors.TRANSPARENT,
                                    'aria-label': h.Z.Messages.COPY_LINK,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(m.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(i, I.ApplicationDirectoryProfileSections.STORE));
                                        (0, p.JG)(e), (0, l.showToast)((0, l.createToast)(h.Z.Messages.COPIED_LINK, l.ToastType.SUCCESS)), (0, C.X)(i, C.B.STORE_MODAL);
                                    },
                                    children: (0, a.jsx)(l.LinkIcon, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20,
                                        color: 'var(--white)'
                                    })
                                }),
                            (0, a.jsx)(l.ModalCloseButton, {
                                onClick: n,
                                className: S.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(l.ModalContent, {
                scrollerRef: (e) => {
                    null != e && ((v.current = e), A());
                },
                onScroll: A,
                children: (0, a.jsx)(b.AF, {
                    app: L,
                    subscriptionGroupListing: R,
                    onlySubscribeServerSubForGuildId: o,
                    subscriptionListings: O,
                    otpListings: y
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
