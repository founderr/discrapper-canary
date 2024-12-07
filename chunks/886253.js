t.d(n, {
    A: function () {
        return v;
    }
});
var o = t(200651);
t(192379);
var i = t(442837),
    l = t(481060),
    r = t(264043),
    s = t(812206),
    a = t(352057),
    c = t(572004),
    d = t(601911),
    u = t(504211),
    m = t(533159),
    x = t(981631),
    h = t(388032),
    f = t(671702),
    p = t(689762);
function v(e) {
    let { appId: n, skuId: t, transitionState: v, onClose: _, onHeaderTitleClick: j, children: I, footer: N } = e,
        S = (0, a.h$)({ location: 'store_modal' }),
        k = (0, i.e7)(
            [s.Z, r.Z],
            () => {
                var e;
                return null !== (e = s.Z.getApplication(n)) && void 0 !== e ? e : r.Z.getApplicationRecord(n);
            },
            [n]
        );
    if (null == k) return null;
    let g = (0, d.y)(k, 25),
        { termsOfServiceUrl: C, privacyPolicyUrl: R } = k;
    return (0, o.jsxs)(l.ModalRoot, {
        transitionState: v,
        size: l.ModalSize.DYNAMIC,
        className: p.modal,
        children: [
            (0, o.jsxs)(l.ModalHeader, {
                className: f.modalHeader,
                children: [
                    (0, o.jsxs)(l.Clickable, {
                        className: f.modalTitle,
                        onClick: j,
                        children: [
                            null != g &&
                                (0, o.jsx)('img', {
                                    src: g.href,
                                    alt: '',
                                    className: p.appIcon
                                }),
                            (0, o.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                children: k.name
                            })
                        ]
                    }),
                    (0, o.jsx)(l.ModalCloseButton, {
                        onClick: _,
                        className: f.modalCloseBtn
                    })
                ]
            }),
            I,
            (0, o.jsxs)(l.ModalFooter, {
                className: p.footer,
                children: [
                    null != C || null != R
                        ? (0, o.jsx)(l.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: (0, o.jsx)(m.Z, {
                                  termsOfServiceUrl: C,
                                  privacyPolicyUrl: R
                              })
                          })
                        : (0, o.jsx)(l.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: h.intl.string(h.t['3ZY+0N'])
                          }),
                    (0, o.jsxs)('div', {
                        className: p.footerButtons,
                        children: [
                            c.wS &&
                                (0, o.jsx)(l.Button, {
                                    look: l.Button.Looks.FILLED,
                                    size: l.Button.Sizes.ICON,
                                    color: l.Button.Colors.PRIMARY,
                                    'aria-label': h.intl.string(h.t.WqhZsr),
                                    className: p.linkButton,
                                    innerClassName: p.innerLinkButton,
                                    onClick: () => {
                                        let e = ''
                                            .concat(location.protocol, '//')
                                            .concat(location.host)
                                            .concat(S ? x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, t) : x.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                        (0, c.JG)(e), (0, l.showToast)((0, l.createToast)(h.intl.string(h.t['L/PwZW']), l.ToastType.SUCCESS)), (0, u.X)(n, u.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, o.jsx)(l.LinkIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                            N
                        ]
                    })
                ]
            })
        ]
    });
}
