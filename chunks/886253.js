n.d(t, {
    A: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(264043),
    s = n(812206),
    l = n(572004),
    u = n(601911),
    c = n(504211),
    d = n(981631),
    _ = n(689938),
    E = n(213891),
    f = n(566809);
function h(e) {
    let { appId: t, skuId: n, transitionState: h, onClose: p, onHeaderTitleClick: m, children: I, footer: T } = e,
        g = (0, i.e7)(
            [s.Z, o.Z],
            () => {
                var e;
                return null !== (e = s.Z.getApplication(t)) && void 0 !== e ? e : o.Z.getApplicationRecord(t);
            },
            [t]
        );
    if (null == g) return null;
    let S = (0, u.y)(g, 25),
        { termsOfServiceUrl: A, privacyPolicyUrl: v } = g;
    return (0, r.jsxs)(a.ModalRoot, {
        transitionState: h,
        size: a.ModalSize.DYNAMIC,
        className: f.modal,
        children: [
            (0, r.jsxs)(a.ModalHeader, {
                className: E.modalHeader,
                children: [
                    (0, r.jsxs)(a.Clickable, {
                        className: E.modalTitle,
                        onClick: m,
                        children: [
                            null != S &&
                                (0, r.jsx)('img', {
                                    src: S.href,
                                    alt: '',
                                    className: f.appIcon
                                }),
                            (0, r.jsx)(a.Heading, {
                                variant: 'heading-md/semibold',
                                children: g.name
                            })
                        ]
                    }),
                    (0, r.jsx)(a.ModalCloseButton, {
                        onClick: p,
                        className: E.modalCloseBtn
                    })
                ]
            }),
            I,
            (0, r.jsxs)(a.ModalFooter, {
                className: f.footer,
                children: [
                    null != A && null != v
                        ? (0, r.jsx)(a.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: _.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                                  tosUrl: A,
                                  ppUrl: v
                              })
                          })
                        : (0, r.jsx)(a.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: _.Z.Messages.STOREFRONT_NO_TOS_PP
                          }),
                    (0, r.jsxs)('div', {
                        className: f.footerButtons,
                        children: [
                            l.wS &&
                                (0, r.jsx)(a.Button, {
                                    look: a.ButtonLooks.FILLED,
                                    size: a.ButtonSizes.ICON,
                                    color: a.ButtonColors.CUSTOM,
                                    'aria-label': _.Z.Messages.COPY_LINK,
                                    className: f.linkButton,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n));
                                        (0, l.JG)(e), (0, a.showToast)((0, a.createToast)(_.Z.Messages.COPIED_LINK, a.ToastType.SUCCESS)), (0, c.X)(t, c.B.DETAILS_MODAL, n);
                                    },
                                    children: (0, r.jsx)(a.LinkIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                            T
                        ]
                    })
                ]
            })
        ]
    });
}
