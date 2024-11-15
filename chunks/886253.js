t.d(n, {
    A: function () {
        return v;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(264043),
    o = t(812206),
    s = t(352057),
    c = t(572004),
    u = t(601911),
    d = t(504211),
    m = t(533159),
    f = t(981631),
    p = t(388032),
    h = t(775012),
    x = t(191046);
function v(e) {
    let { appId: n, skuId: t, transitionState: v, onClose: _, onHeaderTitleClick: C, children: g, footer: I } = e,
        b = (0, s.h)({
            location: 'store_modal',
            autoTrackExposure: !1
        }),
        j = (0, i.e7)(
            [o.Z, a.Z],
            () => {
                var e;
                return null !== (e = o.Z.getApplication(n)) && void 0 !== e ? e : a.Z.getApplicationRecord(n);
            },
            [n]
        );
    if (null == j) return null;
    let S = (0, u.y)(j, 25),
        { termsOfServiceUrl: N, privacyPolicyUrl: E } = j;
    return (0, l.jsxs)(r.ModalRoot, {
        transitionState: v,
        size: r.ModalSize.DYNAMIC,
        className: x.modal,
        children: [
            (0, l.jsxs)(r.ModalHeader, {
                className: h.modalHeader,
                children: [
                    (0, l.jsxs)(r.Clickable, {
                        className: h.modalTitle,
                        onClick: C,
                        children: [
                            null != S &&
                                (0, l.jsx)('img', {
                                    src: S.href,
                                    alt: '',
                                    className: x.appIcon
                                }),
                            (0, l.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                children: j.name
                            })
                        ]
                    }),
                    (0, l.jsx)(r.ModalCloseButton, {
                        onClick: _,
                        className: h.modalCloseBtn
                    })
                ]
            }),
            g,
            (0, l.jsxs)(r.ModalFooter, {
                className: x.footer,
                children: [
                    null != N || null != E
                        ? (0, l.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/normal',
                              children: (0, l.jsx)(m.Z, {
                                  termsOfServiceUrl: N,
                                  privacyPolicyUrl: E
                              })
                          })
                        : (0, l.jsx)(r.Text, {
                              color: 'header-primary',
                              variant: 'text-xs/normal',
                              children: p.intl.string(p.t['3ZY+0N'])
                          }),
                    (0, l.jsxs)('div', {
                        className: x.footerButtons,
                        children: [
                            c.wS &&
                                (0, l.jsx)(r.Button, {
                                    look: r.Button.Looks.FILLED,
                                    size: r.Button.Sizes.ICON,
                                    color: r.Button.Colors.PRIMARY,
                                    'aria-label': p.intl.string(p.t.WqhZsr),
                                    className: x.linkButton,
                                    innerClassName: x.innerLinkButton,
                                    onClick: () => {
                                        let e = ''
                                            .concat(location.protocol, '//')
                                            .concat(location.host)
                                            .concat(b ? f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, t) : f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                        (0, c.JG)(e), (0, r.showToast)((0, r.createToast)(p.intl.string(p.t['L/PwZW']), r.ToastType.SUCCESS)), (0, d.X)(n, d.B.DETAILS_MODAL, t);
                                    },
                                    children: (0, l.jsx)(r.LinkIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                            I
                        ]
                    })
                ]
            })
        ]
    });
}
