n.r(t),
    n.d(t, {
        default: function () {
            return b;
        }
    });
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(525654),
    c = n.n(u),
    d = n(873546),
    _ = n(213919),
    E = n(442837),
    f = n(481060),
    h = n(391650),
    p = n(313201),
    m = n(314897),
    I = n(594174),
    T = n(626135),
    g = n(361207),
    S = n(981631),
    A = n(689938),
    v = n(788764);
!(function (e) {
    (e[(e.OSX = 0)] = 'OSX'), (e[(e.WINDOWS = 1)] = 'WINDOWS'), (e[(e.LINUX = 2)] = 'LINUX'), (e[(e.IOS = 3)] = 'IOS'), (e[(e.ANDROID = 4)] = 'ANDROID');
})(r || (r = {}));
let N = [
        {
            getOs: () => A.Z.Messages.PLATFORM_MACOS,
            icon: v.apple,
            url: () => (0, g.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => A.Z.Messages.PLATFORM_WINDOWS,
            icon: v.windows,
            url: () => (0, g.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => A.Z.Messages.PLATFORM_LINUX,
            icon: v.linux,
            url: [
                {
                    url: () => (0, g.w4)('linux', !1, 'deb'),
                    getText: () => A.Z.Messages.DEB
                },
                {
                    url: () => (0, g.w4)('linux', !1, 'tar.gz'),
                    getText: () => A.Z.Messages.TAR_GZ
                }
            ],
            platformKey: 2
        }
    ],
    O = [
        {
            getOs: () => A.Z.Messages.PLATFORM_IOS,
            icon: v.ios,
            url: () => S.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => A.Z.Messages.PLATFORM_ANDROID,
            icon: v.android,
            url: () => S.fzT.ANDROID,
            platformKey: 4
        }
    ];
function R() {
    var e;
    switch (null === (e = c().os) || void 0 === e ? void 0 : e.family) {
        case 'OS X':
            return 0;
        case 'Windows':
            return 1;
        case 'Ubuntu':
        case 'Debian':
        case 'Fedora':
        case 'Red Hat':
        case 'SuSE':
        case 'Linux':
            return 2;
        case 'iOS':
            return 3;
        case 'Android':
            return 4;
        default:
            return;
    }
}
let C = (e) => {
        let { url: t, text: n, onClick: r } = e;
        return (0, a.jsx)(f.Anchor, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: v.downloadButton,
            onClick: r,
            children: n
        });
    },
    y = (e) => {
        let t,
            { platform: n, onClick: r, onMouseEnter: i, isActive: o, claimed: s } = e,
            { getOs: u, icon: c, url: d, platformKey: _ } = n,
            E = u(),
            h = l()(v.icon, c);
        if (Array.isArray(d))
            t = d.map((e, t) => {
                let n = s ? e.url() : '';
                return (0, a.jsx)(
                    C,
                    {
                        url: n,
                        onClick: () => r(E),
                        text: e.getText()
                    },
                    ''.concat(n, '-').concat(t)
                );
            });
        else {
            let e = s ? d() : void 0;
            t = (0, a.jsx)(C, {
                url: e,
                onClick: () => r(E),
                text: A.Z.Messages.DOWNLOAD
            });
        }
        return (0, a.jsx)('li', {
            className: l()(v.platform, { [v.active]: o }),
            onMouseEnter: () => i(_),
            children: (0, a.jsxs)('div', {
                className: v.contentWrapper,
                children: [
                    (0, a.jsxs)('div', {
                        className: v.iconWrap,
                        children: [(0, a.jsx)('div', { className: h }), (0, a.jsx)('div', { className: l()(v.active, h) })]
                    }),
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(f.Heading, {
                                className: v.platformName,
                                variant: 'heading-lg/semibold',
                                children: E
                            }),
                            (0, a.jsx)('div', {
                                className: l()(v.downloadButtons, { [v.list]: Array.isArray(t) }),
                                children: t
                            })
                        ]
                    })
                ]
            })
        });
    };
function b(e) {
    let { source: t, onClose: n, transitionState: r } = e,
        i = (0, E.e7)([I.default], () => I.default.getCurrentUser()),
        s = (0, E.e7)([m.default], () => m.default.getFingerprint()),
        u = null == i || i.isClaimed(),
        [c, g] = o.useState(R());
    function C(e) {
        (null != _.getToken() || null != s) &&
            T.default.track(S.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: u,
                referring_location: t,
                qr_code: !1
            }),
            !u && (n(), h.j());
    }
    function b(e) {
        g(e);
    }
    o.useEffect(() => {
        T.default.track(S.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let L = (0, p.Dt)();
    return (0, a.jsx)(f.ThemeProvider, {
        theme: S.BRd.LIGHT,
        children: (e) =>
            (0, a.jsx)(f.ModalRoot, {
                className: l()(v.downloadApps, e),
                transitionState: r,
                'aria-labelledby': L,
                children: (0, a.jsx)('div', {
                    className: v.inner,
                    children: (0, a.jsxs)(f.HeadingLevel, {
                        component: (0, a.jsx)(f.HiddenVisually, {
                            children: (0, a.jsx)(f.H, {
                                id: L,
                                children: A.Z.Messages.DOWNLOAD_APP
                            })
                        }),
                        children: [
                            (0, a.jsx)(f.ModalCloseButton, {
                                onClick: n,
                                className: v.modalCloseButton
                            }),
                            !d.tq &&
                                (0, a.jsx)('div', {
                                    className: v.platformsWrap,
                                    children: (0, a.jsx)(f.HeadingLevel, {
                                        component: (0, a.jsx)(f.Heading, {
                                            variant: 'heading-lg/semibold',
                                            className: v.header,
                                            children: A.Z.Messages.DOWNLOAD_DESKTOP_TITLE
                                        }),
                                        children: (0, a.jsx)('ul', {
                                            className: v.platforms,
                                            children: N.map((e) =>
                                                (0, a.jsx)(
                                                    y,
                                                    {
                                                        isActive: c === e.platformKey,
                                                        platform: e,
                                                        onClick: C,
                                                        onMouseEnter: b,
                                                        claimed: u
                                                    },
                                                    e.platformKey
                                                )
                                            )
                                        })
                                    })
                                }),
                            (0, a.jsx)('div', {
                                className: v.platformsWrap,
                                children: (0, a.jsxs)(f.HeadingLevel, {
                                    component: (0, a.jsx)(a.Fragment, {
                                        children:
                                            !d.tq &&
                                            (0, a.jsx)(f.Heading, {
                                                variant: 'heading-lg/semibold',
                                                className: v.header,
                                                children: A.Z.Messages.DOWNLOAD_MOBILE_TITLE
                                            })
                                    }),
                                    children: [
                                        (0, a.jsx)('ul', {
                                            className: v.platforms,
                                            children: O.map((e) =>
                                                (0, a.jsx)(
                                                    y,
                                                    {
                                                        isActive: c === e.platformKey,
                                                        platform: e,
                                                        onClick: C,
                                                        onMouseEnter: b,
                                                        claimed: u
                                                    },
                                                    e.platformKey
                                                )
                                            )
                                        }),
                                        (0, a.jsx)(f.Text, {
                                            className: v.footer,
                                            variant: 'text-sm/normal',
                                            children: A.Z.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
    });
}
