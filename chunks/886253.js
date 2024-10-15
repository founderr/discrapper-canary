t.d(n, {
    A: function () {
        return f;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    a = t(481060),
    s = t(264043),
    r = t(812206),
    o = t(572004),
    u = t(601911),
    c = t(504211),
    d = t(981631),
    p = t(689938),
    m = t(213891),
    v = t(566809);
function f(e) {
    let { appId: n, skuId: t, transitionState: f, onClose: h, onHeaderTitleClick: I, children: x, footer: S } = e,
        T = (0, i.e7)(
            [r.Z, s.Z],
            () => {
                var e;
                return null !== (e = r.Z.getApplication(n)) && void 0 !== e ? e : s.Z.getApplicationRecord(n);
            },
            [n]
        );
    if (null == T) return null;
    let N = (0, u.y)(T, 25),
        { termsOfServiceUrl: E, privacyPolicyUrl: _ } = T;
    return (0, l.jsxs)(a.ModalRoot, {
        transitionState: f,
        size: a.ModalSize.DYNAMIC,
        className: v.modal,
        children: [
            (0, l.jsxs)(a.ModalHeader, {
                className: m.modalHeader,
                children: [
                    (0, l.jsxs)(a.Clickable, {
                        className: m.modalTitle,
                        onClick: I,
                        children: [
                            null != N &&
                                (0, l.jsx)('img', {
                                    src: N.href,
                                    alt: '',
                                    className: v.appIcon
                                }),
                            (0, l.jsx)(a.Heading, {
                                variant: 'heading-md/semibold',
                                children: T.name
                            })
                        ]
                    }),
                    (0, l.jsx)(a.ModalCloseButton, {
                        onClick: h,
                        className: m.modalCloseBtn
                    })
                ]
            }),
            x,
            (0, l.jsxs)(a.ModalFooter, {
                className: v.footer,
                children: [
                    null != E && null != _
                        ? (0, l.jsx)(a.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: p.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                                  tosUrl: E,
                                  ppUrl: _
                              })
                          })
                        : (0, l.jsx)(a.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: p.Z.Messages.STOREFRONT_NO_TOS_PP
                          }),
                    (0, l.jsxs)('div', {
                        className: v.footerButtons,
                        children: [
                            o.wS &&
                                (0, l.jsx)(a.Button, {
                                    look: a.ButtonLooks.FILLED,
                                    size: a.ButtonSizes.ICON,
                                    color: a.ButtonColors.CUSTOM,
                                    'aria-label': p.Z.Messages.COPY_LINK,
                                    className: v.linkButton,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                        (0, o.JG)(e), (0, a.showToast)((0, a.createToast)(p.Z.Messages.COPIED_LINK, a.ToastType.SUCCESS)), (0, c.X)(n, c.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, l.jsx)(a.LinkIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                            S
                        ]
                    })
                ]
            })
        ]
    });
}
