n.r(t),
    n.d(t, {
        default: function () {
            return A;
        }
    }),
    n(47120);
var s,
    a,
    r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(525654),
    d = n.n(c),
    u = n(873546),
    f = n(213919),
    p = n(442837),
    m = n(481060),
    x = n(391650),
    g = n(313201),
    h = n(314897),
    v = n(594174),
    w = n(626135),
    N = n(361207),
    j = n(981631),
    O = n(388032),
    S = n(788764);
((a = s || (s = {}))[(a.OSX = 0)] = 'OSX'), (a[(a.WINDOWS = 1)] = 'WINDOWS'), (a[(a.LINUX = 2)] = 'LINUX'), (a[(a.IOS = 3)] = 'IOS'), (a[(a.ANDROID = 4)] = 'ANDROID');
let _ = [
        {
            getOs: () => O.intl.string(O.t.NK5ySE),
            icon: S.apple,
            url: () => (0, N.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => O.intl.string(O.t.OvKGEx),
            icon: S.windows,
            url: () => (0, N.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => O.intl.string(O.t.dJB4PD),
            icon: S.linux,
            url: [
                {
                    url: () => (0, N.w4)('linux', !1, 'deb'),
                    getText: () => O.intl.string(O.t.Sodsur)
                },
                {
                    url: () => (0, N.w4)('linux', !1, 'tar.gz'),
                    getText: () => O.intl.string(O.t.G3U6IS)
                }
            ],
            platformKey: 2
        }
    ],
    b = [
        {
            getOs: () => O.intl.string(O.t.wCVyNT),
            icon: S.ios,
            url: () => j.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => O.intl.string(O.t.wuQpJC),
            icon: S.android,
            url: () => j.fzT.ANDROID,
            platformKey: 4
        }
    ],
    y = (e) => {
        let { url: t, text: n, onClick: s } = e;
        return (0, r.jsx)(m.Anchor, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: S.downloadButton,
            onClick: s,
            children: n
        });
    },
    W = (e) => {
        let t,
            { platform: n, onClick: s, onMouseEnter: a, isActive: i, claimed: l } = e,
            { getOs: c, icon: d, url: u, platformKey: f } = n,
            p = c(),
            x = o()(S.icon, d);
        if (Array.isArray(u))
            t = u.map((e, t) => {
                let n = l ? e.url() : '';
                return (0, r.jsx)(
                    y,
                    {
                        url: n,
                        onClick: () => s(p),
                        text: e.getText()
                    },
                    ''.concat(n, '-').concat(t)
                );
            });
        else {
            let e = l ? u() : void 0;
            t = (0, r.jsx)(y, {
                url: e,
                onClick: () => s(p),
                text: O.intl.string(O.t['1WjMbG'])
            });
        }
        return (0, r.jsx)('li', {
            className: o()(S.platform, { [S.active]: i }),
            onMouseEnter: () => a(f),
            children: (0, r.jsxs)('div', {
                className: S.contentWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: S.iconWrap,
                        children: [(0, r.jsx)('div', { className: x }), (0, r.jsx)('div', { className: o()(S.active, x) })]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(m.Heading, {
                                className: S.platformName,
                                variant: 'heading-lg/semibold',
                                children: p
                            }),
                            (0, r.jsx)('div', {
                                className: o()(S.downloadButtons, { [S.list]: Array.isArray(t) }),
                                children: t
                            })
                        ]
                    })
                ]
            })
        });
    };
function A(e) {
    let { source: t, onClose: n, transitionState: s } = e,
        a = (0, p.e7)([v.default], () => v.default.getCurrentUser()),
        l = (0, p.e7)([h.default], () => h.default.getFingerprint()),
        c = null == a || a.isClaimed(),
        [N, y] = i.useState(
            (function () {
                var e;
                switch (null === (e = d().os) || void 0 === e ? void 0 : e.family) {
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
    function A(e) {
        (null != f.getToken() || null != l) &&
            w.default.track(j.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: c,
                referring_location: t,
                qr_code: !1
            }),
            !c && (n(), x.j());
    }
    function D(e) {
        y(e);
    }
    i.useEffect(() => {
        w.default.track(j.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let C = (0, g.Dt)();
    return (0, r.jsx)(m.ThemeProvider, {
        theme: j.BRd.LIGHT,
        children: (e) =>
            (0, r.jsxs)(m.ModalRoot, {
                className: o()(S.downloadApps, e),
                transitionState: s,
                'aria-labelledby': C,
                children: [
                    (0, r.jsx)(m.ModalCloseButton, {
                        onClick: n,
                        className: S.modalCloseButton
                    }),
                    (0, r.jsx)('div', {
                        className: S.inner,
                        children: (0, r.jsxs)(m.HeadingLevel, {
                            component: (0, r.jsx)(m.HiddenVisually, {
                                children: (0, r.jsx)(m.H, {
                                    id: C,
                                    children: O.intl.string(O.t.BK8LKy)
                                })
                            }),
                            children: [
                                !u.tq &&
                                    (0, r.jsx)('div', {
                                        className: S.platformsWrap,
                                        children: (0, r.jsx)(m.HeadingLevel, {
                                            component: (0, r.jsx)(m.Heading, {
                                                variant: 'heading-lg/semibold',
                                                className: S.header,
                                                children: O.intl.string(O.t['0KK0bG'])
                                            }),
                                            children: (0, r.jsx)('ul', {
                                                className: S.platforms,
                                                children: _.map((e) =>
                                                    (0, r.jsx)(
                                                        W,
                                                        {
                                                            isActive: N === e.platformKey,
                                                            platform: e,
                                                            onClick: A,
                                                            onMouseEnter: D,
                                                            claimed: c
                                                        },
                                                        e.platformKey
                                                    )
                                                )
                                            })
                                        })
                                    }),
                                (0, r.jsx)('div', {
                                    className: S.platformsWrap,
                                    children: (0, r.jsxs)(m.HeadingLevel, {
                                        component: (0, r.jsx)(r.Fragment, {
                                            children:
                                                !u.tq &&
                                                (0, r.jsx)(m.Heading, {
                                                    variant: 'heading-lg/semibold',
                                                    className: S.header,
                                                    children: O.intl.string(O.t.RdSNWV)
                                                })
                                        }),
                                        children: [
                                            (0, r.jsx)('ul', {
                                                className: S.platforms,
                                                children: b.map((e) =>
                                                    (0, r.jsx)(
                                                        W,
                                                        {
                                                            isActive: N === e.platformKey,
                                                            platform: e,
                                                            onClick: A,
                                                            onMouseEnter: D,
                                                            claimed: c
                                                        },
                                                        e.platformKey
                                                    )
                                                )
                                            }),
                                            (0, r.jsx)(m.Text, {
                                                className: S.footer,
                                                variant: 'text-sm/normal',
                                                children: O.intl.format(O.t['RJS+1N'], {})
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
