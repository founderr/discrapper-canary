e.r(a),
    e.d(a, {
        default: function () {
            return T;
        }
    }),
    e(47120);
var r,
    o,
    i = e(200651),
    s = e(192379),
    n = e(541822),
    c = e(442837),
    l = e(481060),
    d = e(728345),
    p = e(812206),
    u = e(600164),
    f = e(886176),
    m = e(572004),
    h = e(504211),
    N = e(283836),
    x = e(507608),
    _ = e(533159),
    C = e(981631),
    S = e(272242),
    E = e(388032),
    g = e(775012);
function T(t) {
    let { onClose: a, transitionState: e, appId: r, guildId: o } = t,
        T = (0, c.e7)([p.Z], () => p.Z.getApplication(r), [r]),
        [j, v] = s.useState(() => (p.Z.isFetchingApplication(r) ? { status: 1 } : { status: 0 }));
    s.useEffect(() => {
        0 === j.status &&
            (v({ status: 1 }),
            d.ZP.fetchApplication(r)
                .then(() => {
                    v({ status: 2 });
                })
                .catch((t) => {
                    v({
                        status: 3,
                        error: t.message
                    });
                }));
    }, [r, j.status]);
    let { subscriptions: R, otps: O } = (0, N.q)(r);
    if (null == T) return null;
    let I = E.intl.formatToPlainString(E.t.XDRjs7, { appName: T.name });
    return (0, i.jsxs)(l.ModalRoot, {
        transitionState: e,
        'aria-label': I,
        size: l.ModalSize.DYNAMIC,
        className: g.modal,
        children: [
            (0, i.jsxs)(l.ModalHeader, {
                className: g.modalHeader,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.modalTitle,
                        children: [
                            (0, i.jsx)(f.Z, {}),
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                children: I
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: g.modalHeaderLinks,
                        children: [
                            m.wS &&
                                (0, i.jsx)(l.Button, {
                                    look: l.ButtonLooks.BLANK,
                                    size: l.ButtonSizes.ICON,
                                    color: l.ButtonColors.TRANSPARENT,
                                    'aria-label': E.intl.string(E.t.WqhZsr),
                                    onClick: () => {
                                        let t = ''.concat(location.protocol, '//').concat(location.host).concat(C.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(r, S.ApplicationDirectoryProfileSections.STORE));
                                        (0, m.JG)(t), (0, l.showToast)((0, l.createToast)(E.intl.string(E.t['L/PwZW']), l.ToastType.SUCCESS)), (0, h.X)(r, h.B.STORE_MODAL);
                                    },
                                    children: (0, i.jsx)(l.LinkIcon, { size: 'sm' })
                                }),
                            (0, i.jsx)(l.ModalCloseButton, {
                                onClick: a,
                                className: g.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: g.scrollerWrapper,
                children: (0, i.jsx)(n.Z, {
                    className: g.scroller,
                    children: (0, i.jsx)(x.AF, {
                        app: T,
                        guildId: o,
                        subscriptions: R,
                        otps: O
                    })
                })
            }),
            (0, i.jsx)(l.ModalFooter, {
                justify: u.Z.Justify.END,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children:
                        null != T.termsOfServiceUrl || null != T.privacyPolicyUrl
                            ? (0, i.jsx)(_.Z, {
                                  termsOfServiceUrl: T.termsOfServiceUrl,
                                  privacyPolicyUrl: T.privacyPolicyUrl
                              })
                            : E.intl.string(E.t['3ZY+0N'])
                })
            })
        ]
    });
}
((o = r || (r = {}))[(o.NONE = 0)] = 'NONE'), (o[(o.FETCHING = 1)] = 'FETCHING'), (o[(o.FETCHED = 2)] = 'FETCHED'), (o[(o.ERROR = 3)] = 'ERROR');
