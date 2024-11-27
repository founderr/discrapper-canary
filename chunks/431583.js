n.r(t),
    n.d(t, {
        default: function () {
            return j;
        }
    }),
    n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(525654),
    u = n.n(c),
    d = n(873546),
    m = n(213919),
    h = n(442837),
    f = n(481060),
    p = n(391650),
    g = n(313201),
    _ = n(314897),
    E = n(594174),
    C = n(626135),
    I = n(361207),
    x = n(981631),
    N = n(388032),
    v = n(898521);
((r = i || (i = {}))[(r.OSX = 0)] = 'OSX'), (r[(r.WINDOWS = 1)] = 'WINDOWS'), (r[(r.LINUX = 2)] = 'LINUX'), (r[(r.IOS = 3)] = 'IOS'), (r[(r.ANDROID = 4)] = 'ANDROID');
let T = [
        {
            getOs: () => N.intl.string(N.t.NK5ySE),
            icon: v.apple,
            url: () => (0, I.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => N.intl.string(N.t.OvKGEx),
            icon: v.windows,
            url: () => (0, I.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => N.intl.string(N.t.dJB4PD),
            icon: v.linux,
            url: [
                {
                    url: () => (0, I.w4)('linux', !1, 'deb'),
                    getText: () => N.intl.string(N.t.Sodsur)
                },
                {
                    url: () => (0, I.w4)('linux', !1, 'tar.gz'),
                    getText: () => N.intl.string(N.t.G3U6IS)
                }
            ],
            platformKey: 2
        }
    ],
    S = [
        {
            getOs: () => N.intl.string(N.t.wCVyNT),
            icon: v.ios,
            url: () => x.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => N.intl.string(N.t.wuQpJC),
            icon: v.android,
            url: () => x.fzT.ANDROID,
            platformKey: 4
        }
    ],
    A = (e) => {
        let { url: t, text: n, onClick: i } = e;
        return (0, l.jsx)(f.Anchor, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: v.downloadButton,
            onClick: i,
            children: n
        });
    },
    b = (e) => {
        let t,
            { platform: n, onClick: i, onMouseEnter: r, isActive: a, claimed: o } = e,
            { getOs: c, icon: u, url: d, platformKey: m } = n,
            h = c(),
            p = s()(v.icon, u);
        if (Array.isArray(d))
            t = d.map((e, t) => {
                let n = o ? e.url() : '';
                return (0, l.jsx)(
                    A,
                    {
                        url: n,
                        onClick: () => i(h),
                        text: e.getText()
                    },
                    ''.concat(n, '-').concat(t)
                );
            });
        else {
            let e = o ? d() : void 0;
            t = (0, l.jsx)(A, {
                url: e,
                onClick: () => i(h),
                text: N.intl.string(N.t['1WjMbG'])
            });
        }
        return (0, l.jsx)('li', {
            className: s()(v.platform, { [v.active]: a }),
            onMouseEnter: () => r(m),
            children: (0, l.jsxs)('div', {
                className: v.contentWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: v.iconWrap,
                        children: [(0, l.jsx)('div', { className: p }), (0, l.jsx)('div', { className: s()(v.active, p) })]
                    }),
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(f.Heading, {
                                className: v.platformName,
                                variant: 'heading-lg/semibold',
                                children: h
                            }),
                            (0, l.jsx)('div', {
                                className: s()(v.downloadButtons, { [v.list]: Array.isArray(t) }),
                                children: t
                            })
                        ]
                    })
                ]
            })
        });
    };
function j(e) {
    let { source: t, onClose: n, transitionState: i } = e,
        r = (0, h.e7)([E.default], () => E.default.getCurrentUser()),
        o = (0, h.e7)([_.default], () => _.default.getFingerprint()),
        c = null == r || r.isClaimed(),
        [I, A] = a.useState(
            (function () {
                var e;
                switch (null === (e = u().os) || void 0 === e ? void 0 : e.family) {
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
            })()
        );
    function j(e) {
        (null != m.getToken() || null != o) &&
            C.default.track(x.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: c,
                referring_location: t,
                qr_code: !1
            }),
            !c && (n(), p.j());
    }
    function Z(e) {
        A(e);
    }
    a.useEffect(() => {
        C.default.track(x.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let R = (0, g.Dt)();
    return (0, l.jsx)(f.ThemeProvider, {
        theme: x.BRd.LIGHT,
        children: (e) =>
            (0, l.jsxs)(f.ModalRoot, {
                className: s()(v.downloadApps, e),
                transitionState: i,
                'aria-labelledby': R,
                children: [
                    (0, l.jsx)(f.ModalCloseButton, {
                        onClick: n,
                        className: v.modalCloseButton
                    }),
                    (0, l.jsx)('div', {
                        className: v.inner,
                        children: (0, l.jsxs)(f.HeadingLevel, {
                            component: (0, l.jsx)(f.HiddenVisually, {
                                children: (0, l.jsx)(f.H, {
                                    id: R,
                                    children: N.intl.string(N.t.BK8LKy)
                                })
                            }),
                            children: [
                                !d.tq &&
                                    (0, l.jsx)('div', {
                                        className: v.platformsWrap,
                                        children: (0, l.jsx)(f.HeadingLevel, {
                                            component: (0, l.jsx)(f.Heading, {
                                                variant: 'heading-lg/semibold',
                                                className: v.header,
                                                children: N.intl.string(N.t['0KK0bG'])
                                            }),
                                            children: (0, l.jsx)('ul', {
                                                className: v.platforms,
                                                children: T.map((e) =>
                                                    (0, l.jsx)(
                                                        b,
                                                        {
                                                            isActive: I === e.platformKey,
                                                            platform: e,
                                                            onClick: j,
                                                            onMouseEnter: Z,
                                                            claimed: c
                                                        },
                                                        e.platformKey
                                                    )
                                                )
                                            })
                                        })
                                    }),
                                (0, l.jsx)('div', {
                                    className: v.platformsWrap,
                                    children: (0, l.jsxs)(f.HeadingLevel, {
                                        component: (0, l.jsx)(l.Fragment, {
                                            children:
                                                !d.tq &&
                                                (0, l.jsx)(f.Heading, {
                                                    variant: 'heading-lg/semibold',
                                                    className: v.header,
                                                    children: N.intl.string(N.t.RdSNWV)
                                                })
                                        }),
                                        children: [
                                            (0, l.jsx)('ul', {
                                                className: v.platforms,
                                                children: S.map((e) =>
                                                    (0, l.jsx)(
                                                        b,
                                                        {
                                                            isActive: I === e.platformKey,
                                                            platform: e,
                                                            onClick: j,
                                                            onMouseEnter: Z,
                                                            claimed: c
                                                        },
                                                        e.platformKey
                                                    )
                                                )
                                            }),
                                            (0, l.jsx)(f.Text, {
                                                className: v.footer,
                                                variant: 'text-sm/normal',
                                                children: N.intl.format(N.t['RJS+1N'], {})
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
    });
}
