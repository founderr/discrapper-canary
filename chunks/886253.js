t.d(n, {
    A: function () {
        return f;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    r = t(481060),
    o = t(264043),
    a = t(812206),
    s = t(572004),
    u = t(601911),
    c = t(504211),
    d = t(981631),
    p = t(689938),
    m = t(213891),
    v = t(566809);
function f(e) {
    let { appId: n, skuId: t, transitionState: f, onClose: I, onHeaderTitleClick: h, children: S, footer: x } = e,
        g = (0, i.e7)(
            [a.Z, o.Z],
            () => {
                var e;
                return null !== (e = a.Z.getApplication(n)) && void 0 !== e ? e : o.Z.getApplicationRecord(n);
            },
            [n]
        );
    if (null == g) return null;
    let T = (0, u.y)(g, 25),
        { termsOfServiceUrl: E, privacyPolicyUrl: N } = g;
    return (0, l.jsxs)(r.ModalRoot, {
        transitionState: f,
        size: r.ModalSize.DYNAMIC,
        className: v.modal,
        children: [
            (0, l.jsxs)(r.ModalHeader, {
                className: m.modalHeader,
                children: [
                    (0, l.jsxs)(r.Clickable, {
                        className: m.modalTitle,
                        onClick: h,
                        children: [
                            null != T &&
                                (0, l.jsx)('img', {
                                    src: T.href,
                                    alt: '',
                                    className: v.appIcon
                                }),
                            (0, l.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                children: g.name
                            })
                        ]
                    }),
                    (0, l.jsx)(r.ModalCloseButton, {
                        onClick: I,
                        className: m.modalCloseBtn
                    })
                ]
            }),
            S,
            (0, l.jsxs)(r.ModalFooter, {
                className: v.footer,
                children: [
                    null != E && null != N
                        ? (0, l.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: p.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                                  tosUrl: E,
                                  ppUrl: N
                              })
                          })
                        : (0, l.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: p.Z.Messages.STOREFRONT_NO_TOS_PP
                          }),
                    (0, l.jsxs)('div', {
                        className: v.footerButtons,
                        children: [
                            s.wS &&
                                (0, l.jsx)(r.Button, {
                                    look: r.Button.Looks.FILLED,
                                    size: r.Button.Sizes.ICON,
                                    color: r.Button.Colors.PRIMARY,
                                    'aria-label': p.Z.Messages.COPY_LINK,
                                    className: v.linkButton,
                                    innerClassName: v.innerLinkButton,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                        (0, s.JG)(e), (0, r.showToast)((0, r.createToast)(p.Z.Messages.COPIED_LINK, r.ToastType.SUCCESS)), (0, c.X)(n, c.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, l.jsx)(r.LinkIcon, {
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
