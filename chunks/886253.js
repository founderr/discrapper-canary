t.d(n, {
    A: function () {
        return v;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    a = t(481060),
    r = t(264043),
    o = t(812206),
    s = t(572004),
    u = t(601911),
    c = t(504211),
    d = t(981631),
    p = t(689938),
    f = t(213891),
    m = t(566809);
function v(e) {
    let { appId: n, skuId: t, transitionState: v, onClose: I, onHeaderTitleClick: h, children: S, footer: x } = e,
        N = (0, i.e7)(
            [o.Z, r.Z],
            () => {
                var e;
                return null !== (e = o.Z.getApplication(n)) && void 0 !== e ? e : r.Z.getApplicationRecord(n);
            },
            [n]
        );
    if (null == N) return null;
    let T = (0, u.y)(N, 25),
        { termsOfServiceUrl: Z, privacyPolicyUrl: g } = N;
    return (0, l.jsxs)(a.ModalRoot, {
        transitionState: v,
        size: a.ModalSize.DYNAMIC,
        className: m.modal,
        children: [
            (0, l.jsxs)(a.ModalHeader, {
                className: f.modalHeader,
                children: [
                    (0, l.jsxs)(a.Clickable, {
                        className: f.modalTitle,
                        onClick: h,
                        children: [
                            null != T &&
                                (0, l.jsx)('img', {
                                    src: T.href,
                                    alt: '',
                                    className: m.appIcon
                                }),
                            (0, l.jsx)(a.Heading, {
                                variant: 'heading-md/semibold',
                                children: N.name
                            })
                        ]
                    }),
                    (0, l.jsx)(a.ModalCloseButton, {
                        onClick: I,
                        className: f.modalCloseBtn
                    })
                ]
            }),
            S,
            (0, l.jsxs)(a.ModalFooter, {
                className: m.footer,
                children: [
                    null != Z && null != g
                        ? (0, l.jsx)(a.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: p.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                                  tosUrl: Z,
                                  ppUrl: g
                              })
                          })
                        : (0, l.jsx)(a.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: p.Z.Messages.STOREFRONT_NO_TOS_PP
                          }),
                    (0, l.jsxs)('div', {
                        className: m.footerButtons,
                        children: [
                            s.wS &&
                                (0, l.jsx)(a.Button, {
                                    look: a.ButtonLooks.FILLED,
                                    size: a.ButtonSizes.ICON,
                                    color: a.ButtonColors.CUSTOM,
                                    'aria-label': p.Z.Messages.COPY_LINK,
                                    className: m.linkButton,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                        (0, s.JG)(e), (0, a.showToast)((0, a.createToast)(p.Z.Messages.COPIED_LINK, a.ToastType.SUCCESS)), (0, c.X)(n, c.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, l.jsx)(a.LinkIcon, {
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
