t.d(e, {
    A: function () {
        return h;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    s = t(264043),
    a = t(812206),
    o = t(572004),
    u = t(601911),
    c = t(504211),
    d = t(533159),
    f = t(981631),
    p = t(689938),
    v = t(213891),
    m = t(566809);
function h(n) {
    let { appId: e, skuId: t, transitionState: h, onClose: I, onHeaderTitleClick: S, children: x, footer: E } = n,
        T = (0, i.e7)(
            [a.Z, s.Z],
            () => {
                var n;
                return null !== (n = a.Z.getApplication(e)) && void 0 !== n ? n : s.Z.getApplicationRecord(e);
            },
            [e]
        );
    if (null == T) return null;
    let g = (0, u.y)(T, 25),
        { termsOfServiceUrl: R, privacyPolicyUrl: N } = T;
    return (0, l.jsxs)(r.ModalRoot, {
        transitionState: h,
        size: r.ModalSize.DYNAMIC,
        className: m.modal,
        children: [
            (0, l.jsxs)(r.ModalHeader, {
                className: v.modalHeader,
                children: [
                    (0, l.jsxs)(r.Clickable, {
                        className: v.modalTitle,
                        onClick: S,
                        children: [
                            null != g &&
                                (0, l.jsx)('img', {
                                    src: g.href,
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
                        onClick: I,
                        className: v.modalCloseBtn
                    })
                ]
            }),
            x,
            (0, l.jsxs)(r.ModalFooter, {
                className: m.footer,
                children: [
                    null != R || null != N
                        ? (0, l.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: (0, l.jsx)(d.Z, {
                                  termsOfServiceUrl: R,
                                  privacyPolicyUrl: N
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
                            o.wS &&
                                (0, l.jsx)(r.Button, {
                                    look: r.Button.Looks.FILLED,
                                    size: r.Button.Sizes.ICON,
                                    color: r.Button.Colors.PRIMARY,
                                    'aria-label': p.Z.Messages.COPY_LINK,
                                    className: m.linkButton,
                                    innerClassName: m.innerLinkButton,
                                    onClick: () => {
                                        let n = ''.concat(location.protocol, '//').concat(location.host).concat(f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t));
                                        (0, o.JG)(n), (0, r.showToast)((0, r.createToast)(p.Z.Messages.COPIED_LINK, r.ToastType.SUCCESS)), (0, c.X)(e, c.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, l.jsx)(r.LinkIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                            E
                        ]
                    })
                ]
            })
        ]
    });
}
