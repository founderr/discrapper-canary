t.d(n, {
    A: function () {
        return v;
    }
});
var o = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    i = t(264043),
    s = t(812206),
    a = t(352057),
    c = t(572004),
    d = t(601911),
    u = t(504211),
    m = t(533159),
    x = t(981631),
    f = t(388032),
    p = t(213891),
    h = t(566809);
function v(e) {
    let { appId: n, skuId: t, transitionState: v, onClose: _, onHeaderTitleClick: j, children: I, footer: g } = e,
        k = (0, a.h)({
            location: 'store_modal',
            autoTrackExposure: !1
        }),
        N = (0, l.e7)(
            [s.Z, i.Z],
            () => {
                var e;
                return null !== (e = s.Z.getApplication(n)) && void 0 !== e ? e : i.Z.getApplicationRecord(n);
            },
            [n]
        );
    if (null == N) return null;
    let C = (0, d.y)(N, 25),
        { termsOfServiceUrl: S, privacyPolicyUrl: b } = N;
    return (0, o.jsxs)(r.ModalRoot, {
        transitionState: v,
        size: r.ModalSize.DYNAMIC,
        className: h.modal,
        children: [
            (0, o.jsxs)(r.ModalHeader, {
                className: p.modalHeader,
                children: [
                    (0, o.jsxs)(r.Clickable, {
                        className: p.modalTitle,
                        onClick: j,
                        children: [
                            null != C &&
                                (0, o.jsx)('img', {
                                    src: C.href,
                                    alt: '',
                                    className: h.appIcon
                                }),
                            (0, o.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                children: N.name
                            })
                        ]
                    }),
                    (0, o.jsx)(r.ModalCloseButton, {
                        onClick: _,
                        className: p.modalCloseBtn
                    })
                ]
            }),
            I,
            (0, o.jsxs)(r.ModalFooter, {
                className: h.footer,
                children: [
                    null != S || null != b
                        ? (0, o.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: (0, o.jsx)(m.Z, {
                                  termsOfServiceUrl: S,
                                  privacyPolicyUrl: b
                              })
                          })
                        : (0, o.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: f.intl.string(f.t['3ZY+0N'])
                          }),
                    (0, o.jsxs)('div', {
                        className: h.footerButtons,
                        children: [
                            c.wS &&
                                (0, o.jsx)(r.Button, {
                                    look: r.Button.Looks.FILLED,
                                    size: r.Button.Sizes.ICON,
                                    color: r.Button.Colors.PRIMARY,
                                    'aria-label': f.intl.string(f.t.WqhZsr),
                                    className: h.linkButton,
                                    innerClassName: h.innerLinkButton,
                                    onClick: () => {
                                        let e = ''
                                            .concat(location.protocol, '//')
                                            .concat(location.host)
                                            .concat(k ? x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, t) : x.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                        (0, c.JG)(e), (0, r.showToast)((0, r.createToast)(f.intl.string(f.t['L/PwZW']), r.ToastType.SUCCESS)), (0, u.X)(n, u.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, o.jsx)(r.LinkIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                            g
                        ]
                    })
                ]
            })
        ]
    });
}
