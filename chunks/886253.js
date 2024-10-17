t.d(e, {
    A: function () {
        return f;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    o = t(481060),
    r = t(264043),
    a = t(812206),
    s = t(572004),
    u = t(601911),
    c = t(504211),
    d = t(981631),
    p = t(689938),
    v = t(213891),
    m = t(566809);
function f(n) {
    let { appId: e, skuId: t, transitionState: f, onClose: I, onHeaderTitleClick: h, children: S, footer: x } = n,
        g = (0, i.e7)(
            [a.Z, r.Z],
            () => {
                var n;
                return null !== (n = a.Z.getApplication(e)) && void 0 !== n ? n : r.Z.getApplicationRecord(e);
            },
            [e]
        );
    if (null == g) return null;
    let T = (0, u.y)(g, 25),
        { termsOfServiceUrl: E, privacyPolicyUrl: N } = g;
    return (0, l.jsxs)(o.ModalRoot, {
        transitionState: f,
        size: o.ModalSize.DYNAMIC,
        className: m.modal,
        children: [
            (0, l.jsxs)(o.ModalHeader, {
                className: v.modalHeader,
                children: [
                    (0, l.jsxs)(o.Clickable, {
                        className: v.modalTitle,
                        onClick: h,
                        children: [
                            null != T &&
                                (0, l.jsx)('img', {
                                    src: T.href,
                                    alt: '',
                                    className: m.appIcon
                                }),
                            (0, l.jsx)(o.Heading, {
                                variant: 'heading-md/semibold',
                                children: g.name
                            })
                        ]
                    }),
                    (0, l.jsx)(o.ModalCloseButton, {
                        onClick: I,
                        className: v.modalCloseBtn
                    })
                ]
            }),
            S,
            (0, l.jsxs)(o.ModalFooter, {
                className: m.footer,
                children: [
                    null != E && null != N
                        ? (0, l.jsx)(o.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: p.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                                  tosUrl: E,
                                  ppUrl: N
                              })
                          })
                        : (0, l.jsx)(o.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: p.Z.Messages.STOREFRONT_NO_TOS_PP
                          }),
                    (0, l.jsxs)('div', {
                        className: m.footerButtons,
                        children: [
                            s.wS &&
                                (0, l.jsx)(o.Button, {
                                    look: o.Button.Looks.FILLED,
                                    size: o.Button.Sizes.ICON,
                                    color: o.Button.Colors.PRIMARY,
                                    'aria-label': p.Z.Messages.COPY_LINK,
                                    className: m.linkButton,
                                    innerClassName: m.innerLinkButton,
                                    onClick: () => {
                                        let n = ''.concat(location.protocol, '//').concat(location.host).concat(d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t));
                                        (0, s.JG)(n), (0, o.showToast)((0, o.createToast)(p.Z.Messages.COPIED_LINK, o.ToastType.SUCCESS)), (0, c.X)(e, c.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, l.jsx)(o.LinkIcon, {
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
