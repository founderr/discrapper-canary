n.d(t, {
    A: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var a = n(442837),
    r = n(481060),
    l = n(264043),
    o = n(812206),
    s = n(572004),
    c = n(601911),
    d = n(504211),
    u = n(533159),
    p = n(981631),
    m = n(388032),
    _ = n(213891),
    h = n(566809);
function f(e) {
    let { appId: t, skuId: n, transitionState: f, onClose: g, onHeaderTitleClick: v, children: x, footer: I } = e,
        C = (0, a.e7)(
            [o.Z, l.Z],
            () => {
                var e;
                return null !== (e = o.Z.getApplication(t)) && void 0 !== e ? e : l.Z.getApplicationRecord(t);
            },
            [t]
        );
    if (null == C) return null;
    let N = (0, c.y)(C, 25),
        { termsOfServiceUrl: b, privacyPolicyUrl: S } = C;
    return (0, i.jsxs)(r.ModalRoot, {
        transitionState: f,
        size: r.ModalSize.DYNAMIC,
        className: h.modal,
        children: [
            (0, i.jsxs)(r.ModalHeader, {
                className: _.modalHeader,
                children: [
                    (0, i.jsxs)(r.Clickable, {
                        className: _.modalTitle,
                        onClick: v,
                        children: [
                            null != N &&
                                (0, i.jsx)('img', {
                                    src: N.href,
                                    alt: '',
                                    className: h.appIcon
                                }),
                            (0, i.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                children: C.name
                            })
                        ]
                    }),
                    (0, i.jsx)(r.ModalCloseButton, {
                        onClick: g,
                        className: _.modalCloseBtn
                    })
                ]
            }),
            x,
            (0, i.jsxs)(r.ModalFooter, {
                className: h.footer,
                children: [
                    null != b || null != S
                        ? (0, i.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: (0, i.jsx)(u.Z, {
                                  termsOfServiceUrl: b,
                                  privacyPolicyUrl: S
                              })
                          })
                        : (0, i.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: m.intl.string(m.t['3ZY+0N'])
                          }),
                    (0, i.jsxs)('div', {
                        className: h.footerButtons,
                        children: [
                            s.wS &&
                                (0, i.jsx)(r.Button, {
                                    look: r.Button.Looks.FILLED,
                                    size: r.Button.Sizes.ICON,
                                    color: r.Button.Colors.PRIMARY,
                                    'aria-label': m.intl.string(m.t.WqhZsr),
                                    className: h.linkButton,
                                    innerClassName: h.innerLinkButton,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(p.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n));
                                        (0, s.JG)(e), (0, r.showToast)((0, r.createToast)(m.intl.string(m.t['L/PwZW']), r.ToastType.SUCCESS)), (0, d.X)(t, d.B.DETAILS_MODAL, n);
                                    },
                                    children: (0, i.jsx)(r.LinkIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                            I
                        ]
                    })
                ]
            })
        ]
    });
}
