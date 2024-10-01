t.r(n),
    t.d(n, {
        default: function () {
            return I;
        }
    }),
    t(47120);
var a,
    i,
    l = t(735250),
    s = t(470079),
    r = t(442837),
    o = t(481060),
    d = t(728345),
    c = t(812206),
    u = t(886176),
    p = t(572004),
    m = t(504211),
    v = t(283836),
    h = t(507608),
    x = t(981631),
    g = t(272242),
    f = t(689938),
    S = t(213891);
function I(e) {
    let { onClose: n, transitionState: t, appId: a, guildId: i } = e,
        I = (0, r.e7)([c.Z], () => c.Z.getApplication(a), [a]),
        [N, T] = s.useState(() => (c.Z.isFetchingApplication(a) ? { status: 1 } : { status: 0 })),
        R = s.useRef(null),
        [j, _] = s.useState(!0),
        b = () => {
            var e;
            (null === (e = R.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? _(!1) : _(!0);
        };
    s.useEffect(() => {
        0 === N.status &&
            (T({ status: 1 }),
            d.Z.fetchApplication(a)
                .then(() => {
                    T({ status: 2 });
                })
                .catch((e) => {
                    T({
                        status: 3,
                        error: e.message
                    });
                }));
    }, [a, N.status]);
    let { subscriptions: O, otps: k } = (0, v.q)(a);
    if (null == I) return null;
    let E = f.Z.Messages.STOREFRONT_TITLE.format({ appName: I.name });
    return (0, l.jsxs)(o.ModalRoot, {
        transitionState: t,
        'aria-label': E,
        size: o.ModalSize.DYNAMIC,
        className: S.modal,
        children: [
            (0, l.jsxs)(o.ModalHeader, {
                className: S.modalHeader,
                children: [
                    (0, l.jsxs)('div', {
                        className: S.modalTitle,
                        children: [
                            (0, l.jsx)(u.Z, {}),
                            (0, l.jsx)(o.Heading, {
                                variant: 'heading-md/semibold',
                                children: E
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: S.modalHeaderLinks,
                        children: [
                            p.wS &&
                                (0, l.jsx)(o.Button, {
                                    look: o.ButtonLooks.BLANK,
                                    size: o.ButtonSizes.ICON,
                                    color: o.ButtonColors.TRANSPARENT,
                                    'aria-label': f.Z.Messages.COPY_LINK,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(x.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(a, g.ApplicationDirectoryProfileSections.STORE));
                                        (0, p.JG)(e), (0, o.showToast)((0, o.createToast)(f.Z.Messages.COPIED_LINK, o.ToastType.SUCCESS)), (0, m.X)(a, m.B.STORE_MODAL);
                                    },
                                    children: (0, l.jsx)(o.LinkIcon, { size: 'sm' })
                                }),
                            (0, l.jsx)(o.ModalCloseButton, {
                                onClick: n,
                                className: S.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(o.ModalContent, {
                scrollerRef: (e) => {
                    null != e && ((R.current = e), b());
                },
                onScroll: b,
                children: (0, l.jsx)(h.AF, {
                    app: I,
                    guildId: i,
                    subscriptions: O,
                    otps: k
                })
            }),
            (0, l.jsx)('div', {
                className: S.containerScrollGradient,
                'data-shown': j
            })
        ]
    });
}
((i = a || (a = {}))[(i.NONE = 0)] = 'NONE'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED'), (i[(i.ERROR = 3)] = 'ERROR');
