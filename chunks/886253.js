t.d(n, {
    A: function () {
        return v;
    }
});
var o = t(200651);
t(192379);
var l = t(442837),
    i = t(481060),
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
        k = (0, a.h)({
            location: 'store_modal',
            autoTrackExposure: !1
        }),
        S = (0, l.e7)(
            [s.Z, r.Z],
            () => {
                var e;
                return null !== (e = s.Z.getApplication(n)) && void 0 !== e ? e : r.Z.getApplicationRecord(n);
            },
            [n]
        );
    if (null == S) return null;
    let T = (0, d.y)(S, 25),
        { termsOfServiceUrl: g, privacyPolicyUrl: C } = S;
    return (0, o.jsxs)(i.ModalRoot, {
        transitionState: v,
        size: i.ModalSize.DYNAMIC,
        className: p.modal,
        children: [
            (0, o.jsxs)(i.ModalHeader, {
                className: f.modalHeader,
                children: [
                    (0, o.jsxs)(i.Clickable, {
                        className: f.modalTitle,
                        onClick: j,
                        children: [
                            null != T &&
                                (0, o.jsx)('img', {
                                    src: T.href,
                                    alt: '',
                                    className: p.appIcon
                                }),
                            (0, o.jsx)(i.Heading, {
                                variant: 'heading-md/semibold',
                                children: S.name
                            })
                        ]
                    }),
                    (0, o.jsx)(i.ModalCloseButton, {
                        onClick: _,
                        className: f.modalCloseBtn
                    })
                ]
            }),
            I,
            (0, o.jsxs)(i.ModalFooter, {
                className: p.footer,
                children: [
                    null != g || null != C
                        ? (0, o.jsx)(i.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: (0, o.jsx)(m.Z, {
                                  termsOfServiceUrl: g,
                                  privacyPolicyUrl: C
                              })
                          })
                        : (0, o.jsx)(i.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: h.intl.string(h.t['3ZY+0N'])
                          }),
                    (0, o.jsxs)('div', {
                        className: p.footerButtons,
                        children: [
                            c.wS &&
                                (0, o.jsx)(i.Button, {
                                    look: i.Button.Looks.FILLED,
                                    size: i.Button.Sizes.ICON,
                                    color: i.Button.Colors.PRIMARY,
                                    'aria-label': h.intl.string(h.t.WqhZsr),
                                    className: p.linkButton,
                                    innerClassName: p.innerLinkButton,
                                    onClick: () => {
                                        let e = ''
                                            .concat(location.protocol, '//')
                                            .concat(location.host)
                                            .concat(k ? x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, t) : x.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                        (0, c.JG)(e), (0, i.showToast)((0, i.createToast)(h.intl.string(h.t['L/PwZW']), i.ToastType.SUCCESS)), (0, u.X)(n, u.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, o.jsx)(i.LinkIcon, {
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
