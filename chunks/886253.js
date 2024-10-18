t.d(e, {
    A: function () {
        return v;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    r = t(481060),
    a = t(264043),
    o = t(812206),
    s = t(572004),
    u = t(601911),
    c = t(504211),
    d = t(981631),
    p = t(689938),
    f = t(213891),
    m = t(566809);
function v(n) {
    let { appId: e, skuId: t, transitionState: v, onClose: h, onHeaderTitleClick: I, children: S, footer: x } = n,
        T = (0, i.e7)(
            [o.Z, a.Z],
            () => {
                var n;
                return null !== (n = o.Z.getApplication(e)) && void 0 !== n ? n : a.Z.getApplicationRecord(e);
            },
            [e]
        );
    if (null == T) return null;
    let E = (0, u.y)(T, 25),
        { termsOfServiceUrl: g, privacyPolicyUrl: N } = T;
    return (0, l.jsxs)(r.ModalRoot, {
        transitionState: v,
        size: r.ModalSize.DYNAMIC,
        className: m.modal,
        children: [
            (0, l.jsxs)(r.ModalHeader, {
                className: f.modalHeader,
                children: [
                    (0, l.jsxs)(r.Clickable, {
                        className: f.modalTitle,
                        onClick: I,
                        children: [
                            null != E &&
                                (0, l.jsx)('img', {
                                    src: E.href,
                                    alt: '',
                                    className: m.appIcon
                                }),
                            (0, l.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                children: T.name
                            })
                        ]
                    }),
                    (0, l.jsx)(r.ModalCloseButton, {
                        onClick: h,
                        className: f.modalCloseBtn
                    })
                ]
            }),
            S,
            (0, l.jsxs)(r.ModalFooter, {
                className: m.footer,
                children: [
                    null != g && null != N
                        ? (0, l.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: p.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                                  tosUrl: g,
                                  ppUrl: N
                              })
                          })
                        : (0, l.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: p.Z.Messages.STOREFRONT_NO_TOS_PP
                          }),
                    (0, l.jsxs)('div', {
                        className: m.footerButtons,
                        children: [
                            s.wS &&
                                (0, l.jsx)(r.Button, {
                                    look: r.Button.Looks.FILLED,
                                    size: r.Button.Sizes.ICON,
                                    color: r.Button.Colors.PRIMARY,
                                    'aria-label': p.Z.Messages.COPY_LINK,
                                    className: m.linkButton,
                                    innerClassName: m.innerLinkButton,
                                    onClick: () => {
                                        let n = ''.concat(location.protocol, '//').concat(location.host).concat(d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t));
                                        (0, s.JG)(n), (0, r.showToast)((0, r.createToast)(p.Z.Messages.COPIED_LINK, r.ToastType.SUCCESS)), (0, c.X)(e, c.B.DETAILS_MODAL, t);
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
