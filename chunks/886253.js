t.d(n, {
    A: function () {
        return p;
    }
});
var o = t(200651);
t(192379);
var l = t(442837),
    i = t(481060),
    r = t(264043),
    s = t(812206),
    a = t(572004),
    c = t(601911),
    d = t(504211),
    u = t(533159),
    m = t(981631),
    x = t(388032),
    h = t(213891),
    f = t(566809);
function p(e) {
    let { appId: n, skuId: t, transitionState: p, onClose: v, onHeaderTitleClick: _, children: j, footer: I } = e,
        N = (0, l.e7)(
            [s.Z, r.Z],
            () => {
                var e;
                return null !== (e = s.Z.getApplication(n)) && void 0 !== e ? e : r.Z.getApplicationRecord(n);
            },
            [n]
        );
    if (null == N) return null;
    let k = (0, c.y)(N, 25),
        { termsOfServiceUrl: g, privacyPolicyUrl: C } = N;
    return (0, o.jsxs)(i.ModalRoot, {
        transitionState: p,
        size: i.ModalSize.DYNAMIC,
        className: f.modal,
        children: [
            (0, o.jsxs)(i.ModalHeader, {
                className: h.modalHeader,
                children: [
                    (0, o.jsxs)(i.Clickable, {
                        className: h.modalTitle,
                        onClick: _,
                        children: [
                            null != k &&
                                (0, o.jsx)('img', {
                                    src: k.href,
                                    alt: '',
                                    className: f.appIcon
                                }),
                            (0, o.jsx)(i.Heading, {
                                variant: 'heading-md/semibold',
                                children: N.name
                            })
                        ]
                    }),
                    (0, o.jsx)(i.ModalCloseButton, {
                        onClick: v,
                        className: h.modalCloseBtn
                    })
                ]
            }),
            j,
            (0, o.jsxs)(i.ModalFooter, {
                className: f.footer,
                children: [
                    null != g || null != C
                        ? (0, o.jsx)(i.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: (0, o.jsx)(u.Z, {
                                  termsOfServiceUrl: g,
                                  privacyPolicyUrl: C
                              })
                          })
                        : (0, o.jsx)(i.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: x.intl.string(x.t['3ZY+0N'])
                          }),
                    (0, o.jsxs)('div', {
                        className: f.footerButtons,
                        children: [
                            a.wS &&
                                (0, o.jsx)(i.Button, {
                                    look: i.Button.Looks.FILLED,
                                    size: i.Button.Sizes.ICON,
                                    color: i.Button.Colors.PRIMARY,
                                    'aria-label': x.intl.string(x.t.WqhZsr),
                                    className: f.linkButton,
                                    innerClassName: f.innerLinkButton,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                        (0, a.JG)(e), (0, i.showToast)((0, i.createToast)(x.intl.string(x.t['L/PwZW']), i.ToastType.SUCCESS)), (0, d.X)(n, d.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, o.jsx)(i.LinkIcon, {
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
