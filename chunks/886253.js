t.d(n, {
    A: function () {
        return v;
    }
});
var i = t(735250);
t(470079);
var l = t(442837),
    r = t(481060),
    s = t(264043),
    o = t(812206),
    a = t(572004),
    u = t(601911),
    c = t(504211),
    d = t(981631),
    f = t(689938),
    p = t(437561),
    m = t(27399);
function v(e) {
    let { appId: n, skuId: t, transitionState: v, onClose: I, onHeaderTitleClick: S, children: g, footer: h } = e,
        x = (0, l.e7)(
            [o.Z, s.Z],
            () => {
                var e;
                return null !== (e = o.Z.getApplication(n)) && void 0 !== e ? e : s.Z.getApplicationRecord(n);
            },
            [n]
        );
    if (null == x) return null;
    let E = (0, u.y)(x, 25),
        { termsOfServiceUrl: _, privacyPolicyUrl: N } = x;
    return (0, i.jsxs)(r.ModalRoot, {
        transitionState: v,
        size: r.ModalSize.DYNAMIC,
        className: m.modal,
        children: [
            (0, i.jsxs)(r.ModalHeader, {
                className: p.modalHeader,
                children: [
                    (0, i.jsxs)(r.Clickable, {
                        className: p.modalTitle,
                        onClick: S,
                        children: [
                            null != E &&
                                (0, i.jsx)('img', {
                                    src: E.href,
                                    alt: '',
                                    className: m.appIcon
                                }),
                            (0, i.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                children: x.name
                            })
                        ]
                    }),
                    (0, i.jsx)(r.ModalCloseButton, {
                        onClick: I,
                        className: p.modalCloseBtn
                    })
                ]
            }),
            g,
            (0, i.jsxs)(r.ModalFooter, {
                className: m.footer,
                children: [
                    null != _ && null != N
                        ? (0, i.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: f.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                                  tosUrl: _,
                                  ppUrl: N
                              })
                          })
                        : (0, i.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: f.Z.Messages.STOREFRONT_NO_TOS_PP
                          }),
                    (0, i.jsxs)('div', {
                        className: m.footerButtons,
                        children: [
                            a.wS &&
                                (0, i.jsx)(r.Button, {
                                    look: r.ButtonLooks.FILLED,
                                    size: r.ButtonSizes.ICON,
                                    color: r.ButtonColors.CUSTOM,
                                    'aria-label': f.Z.Messages.COPY_LINK,
                                    className: m.linkButton,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                        (0, a.JG)(e), (0, r.showToast)((0, r.createToast)(f.Z.Messages.COPIED_LINK, r.ToastType.SUCCESS)), (0, c.X)(n, c.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, i.jsx)(r.LinkIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                            h
                        ]
                    })
                ]
            })
        ]
    });
}
