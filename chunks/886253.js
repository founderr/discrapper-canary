t.d(n, {
    A: function () {
        return f;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    s = t(481060),
    a = t(264043),
    o = t(812206),
    r = t(572004),
    u = t(601911),
    c = t(504211),
    d = t(981631),
    p = t(689938),
    m = t(213891),
    v = t(566809);
function f(e) {
    let { appId: n, skuId: t, transitionState: f, onClose: h, onHeaderTitleClick: I, children: S, footer: x } = e,
        T = (0, i.e7)(
            [o.Z, a.Z],
            () => {
                var e;
                return null !== (e = o.Z.getApplication(n)) && void 0 !== e ? e : a.Z.getApplicationRecord(n);
            },
            [n]
        );
    if (null == T) return null;
    let N = (0, u.y)(T, 25),
        { termsOfServiceUrl: E, privacyPolicyUrl: g } = T;
    return (0, l.jsxs)(s.ModalRoot, {
        transitionState: f,
        size: s.ModalSize.DYNAMIC,
        className: v.modal,
        children: [
            (0, l.jsxs)(s.ModalHeader, {
                className: m.modalHeader,
                children: [
                    (0, l.jsxs)(s.Clickable, {
                        className: m.modalTitle,
                        onClick: I,
                        children: [
                            null != N &&
                                (0, l.jsx)('img', {
                                    src: N.href,
                                    alt: '',
                                    className: v.appIcon
                                }),
                            (0, l.jsx)(s.Heading, {
                                variant: 'heading-md/semibold',
                                children: T.name
                            })
                        ]
                    }),
                    (0, l.jsx)(s.ModalCloseButton, {
                        onClick: h,
                        className: m.modalCloseBtn
                    })
                ]
            }),
            S,
            (0, l.jsxs)(s.ModalFooter, {
                className: v.footer,
                children: [
                    null != E && null != g
                        ? (0, l.jsx)(s.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: p.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                                  tosUrl: E,
                                  ppUrl: g
                              })
                          })
                        : (0, l.jsx)(s.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: p.Z.Messages.STOREFRONT_NO_TOS_PP
                          }),
                    (0, l.jsxs)('div', {
                        className: v.footerButtons,
                        children: [
                            r.wS &&
                                (0, l.jsx)(s.Button, {
                                    look: s.Button.Looks.FILLED,
                                    size: s.Button.Sizes.ICON,
                                    color: s.Button.Colors.PRIMARY,
                                    'aria-label': p.Z.Messages.COPY_LINK,
                                    className: v.linkButton,
                                    innerClassName: v.innerLinkButton,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                        (0, r.JG)(e), (0, s.showToast)((0, s.createToast)(p.Z.Messages.COPIED_LINK, s.ToastType.SUCCESS)), (0, c.X)(n, c.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, l.jsx)(s.LinkIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                            x
                        ]
                    })
                ]
            })
        ]
    });
}
