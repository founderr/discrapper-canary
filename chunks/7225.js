i.r(e),
    i.d(e, {
        default: function () {
            return E;
        }
    }),
    i(47120);
var n,
    a,
    o = i(200651),
    r = i(192379),
    c = i(541822),
    s = i(442837),
    l = i(481060),
    d = i(728345),
    u = i(812206),
    _ = i(600164),
    p = i(886176),
    C = i(572004),
    f = i(504211),
    S = i(283836),
    I = i(507608),
    T = i(533159),
    b = i(981631),
    m = i(272242),
    N = i(388032),
    L = i(671702);
function E(t) {
    let { onClose: e, transitionState: i, appId: n, guildId: a } = t,
        E = (0, s.e7)([u.Z], () => u.Z.getApplication(n), [n]),
        [h, g] = r.useState(() => (u.Z.isFetchingApplication(n) ? { status: 1 } : { status: 0 }));
    r.useEffect(() => {
        0 === h.status &&
            (g({ status: 1 }),
            d.ZP.fetchApplication(n)
                .then(() => {
                    g({ status: 2 });
                })
                .catch((t) => {
                    g({
                        status: 3,
                        error: t.message
                    });
                }));
    }, [n, h.status]);
    let { subscriptions: P, otps: O } = (0, S.q)(n);
    if (null == E) return null;
    let A = N.intl.formatToPlainString(N.t.XDRjs7, { appName: E.name });
    return (0, o.jsxs)(l.ModalRoot, {
        transitionState: i,
        'aria-label': A,
        size: l.ModalSize.DYNAMIC,
        className: L.modal,
        children: [
            (0, o.jsxs)(l.ModalHeader, {
                className: L.modalHeader,
                children: [
                    (0, o.jsxs)('div', {
                        className: L.modalTitle,
                        children: [
                            (0, o.jsx)(p.Z, {}),
                            (0, o.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                children: A
                            })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        className: L.modalHeaderLinks,
                        children: [
                            C.wS &&
                                (0, o.jsx)(l.Button, {
                                    look: l.ButtonLooks.BLANK,
                                    size: l.ButtonSizes.ICON,
                                    color: l.ButtonColors.TRANSPARENT,
                                    'aria-label': N.intl.string(N.t.WqhZsr),
                                    onClick: () => {
                                        let t = ''.concat(location.protocol, '//').concat(location.host).concat(b.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(n, m.ApplicationDirectoryProfileSections.STORE));
                                        (0, C.JG)(t), (0, l.showToast)((0, l.createToast)(N.intl.string(N.t['L/PwZW']), l.ToastType.SUCCESS)), (0, f.X)(n, f.B.STORE_MODAL);
                                    },
                                    children: (0, o.jsx)(l.LinkIcon, { size: 'sm' })
                                }),
                            (0, o.jsx)(l.ModalCloseButton, {
                                onClick: e,
                                className: L.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: L.scrollerWrapper,
                children: (0, o.jsx)(c.Z, {
                    className: L.scroller,
                    children: (0, o.jsx)(I.AF, {
                        app: E,
                        guildId: a,
                        subscriptions: P,
                        otps: O
                    })
                })
            }),
            (0, o.jsx)(l.ModalFooter, {
                justify: _.Z.Justify.END,
                children: (0, o.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children:
                        null != E.termsOfServiceUrl || null != E.privacyPolicyUrl
                            ? (0, o.jsx)(T.Z, {
                                  termsOfServiceUrl: E.termsOfServiceUrl,
                                  privacyPolicyUrl: E.privacyPolicyUrl
                              })
                            : N.intl.string(N.t['3ZY+0N'])
                })
            })
        ]
    });
}
((a = n || (n = {}))[(a.NONE = 0)] = 'NONE'), (a[(a.FETCHING = 1)] = 'FETCHING'), (a[(a.FETCHED = 2)] = 'FETCHED'), (a[(a.ERROR = 3)] = 'ERROR');
