n.r(t), n.d(t, {
    default: function () {
        return L;
    }
}), n(47120);
var i, a, s = n(735250), l = n(470079), r = n(120356), o = n.n(r), c = n(525654), d = n.n(c), u = n(873546), _ = n(213919), E = n(442837), m = n(481060), I = n(391650), T = n(314897), h = n(594174), N = n(153124), f = n(626135), p = n(361207), C = n(792125), g = n(981631), S = n(689938), A = n(59384);
(a = i || (i = {}))[a.OSX = 0] = 'OSX', a[a.WINDOWS = 1] = 'WINDOWS', a[a.LINUX = 2] = 'LINUX', a[a.IOS = 3] = 'IOS', a[a.ANDROID = 4] = 'ANDROID';
let x = [
        {
            getOs: () => S.Z.Messages.PLATFORM_MACOS,
            icon: A.apple,
            url: () => (0, p.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => S.Z.Messages.PLATFORM_WINDOWS,
            icon: A.windows,
            url: () => (0, p.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => S.Z.Messages.PLATFORM_LINUX,
            icon: A.linux,
            url: [
                {
                    url: () => (0, p.w4)('linux', !1, 'deb'),
                    getText: () => S.Z.Messages.DEB
                },
                {
                    url: () => (0, p.w4)('linux', !1, 'tar.gz'),
                    getText: () => S.Z.Messages.TAR_GZ
                }
            ],
            platformKey: 2
        }
    ], O = [
        {
            getOs: () => S.Z.Messages.PLATFORM_IOS,
            icon: A.ios,
            url: () => g.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => S.Z.Messages.PLATFORM_ANDROID,
            icon: A.android,
            url: () => g.fzT.ANDROID,
            platformKey: 4
        }
    ], R = (0, C.Q)(g.BRd.LIGHT), M = e => {
        let {
            url: t,
            text: n,
            onClick: i
        } = e;
        return (0, s.jsx)(m.Anchor, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: A.downloadButton,
            onClick: i,
            children: n
        });
    }, v = e => {
        let t, {
                platform: n,
                onClick: i,
                onMouseEnter: a,
                isActive: l,
                claimed: r
            } = e, {
                getOs: c,
                icon: d,
                url: u,
                platformKey: _
            } = n, E = c(), I = o()(A.icon, d);
        if (Array.isArray(u))
            t = u.map((e, t) => {
                let n = r ? e.url() : '';
                return (0, s.jsx)(M, {
                    url: n,
                    onClick: () => i(E),
                    text: e.getText()
                }, ''.concat(n, '-').concat(t));
            });
        else {
            let e = r ? u() : void 0;
            t = (0, s.jsx)(M, {
                url: e,
                onClick: () => i(E),
                text: S.Z.Messages.DOWNLOAD
            });
        }
        return (0, s.jsx)('li', {
            className: o()(A.platform, { [A.active]: l }),
            onMouseEnter: () => a(_),
            children: (0, s.jsxs)('div', {
                className: A.contentWrapper,
                children: [
                    (0, s.jsxs)('div', {
                        className: A.iconWrap,
                        children: [
                            (0, s.jsx)('div', { className: I }),
                            (0, s.jsx)('div', { className: o()(A.active, I) })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)(m.Heading, {
                                className: A.platformName,
                                variant: 'heading-lg/semibold',
                                children: E
                            }),
                            (0, s.jsx)('div', {
                                className: o()(A.downloadButtons, { [A.list]: Array.isArray(t) }),
                                children: t
                            })
                        ]
                    })
                ]
            })
        });
    };
function L(e) {
    let {
            source: t,
            onClose: n,
            transitionState: i
        } = e, a = (0, E.e7)([h.default], () => h.default.getCurrentUser()), r = (0, E.e7)([T.default], () => T.default.getFingerprint()), c = null == a || a.isClaimed(), [p, C] = l.useState(function () {
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
        }());
    function M(e) {
        (null != _.getToken() || null != r) && f.default.track(g.rMx.DOWNLOAD_APP, {
            platform: e,
            ptb: !1,
            released: !0,
            has_e_mail: c,
            referring_location: t,
            qr_code: !1
        }), !c && (n(), I.j());
    }
    function L(e) {
        C(e);
    }
    l.useEffect(() => {
        f.default.track(g.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let Z = (0, N.Dt)();
    return (0, s.jsx)(m.ModalRoot, {
        className: o()(A.downloadApps, R),
        transitionState: i,
        'aria-labelledby': Z,
        children: (0, s.jsx)('div', {
            className: A.inner,
            children: (0, s.jsxs)(m.HeadingLevel, {
                component: (0, s.jsx)(m.HiddenVisually, {
                    children: (0, s.jsx)(m.H, {
                        id: Z,
                        children: S.Z.Messages.DOWNLOAD_APP
                    })
                }),
                children: [
                    (0, s.jsx)(m.ModalCloseButton, {
                        onClick: n,
                        className: A.modalCloseButton
                    }),
                    !u.tq && (0, s.jsx)('div', {
                        className: A.platformsWrap,
                        children: (0, s.jsx)(m.HeadingLevel, {
                            component: (0, s.jsx)(m.Heading, {
                                variant: 'heading-lg/semibold',
                                className: A.header,
                                children: S.Z.Messages.DOWNLOAD_DESKTOP_TITLE
                            }),
                            children: (0, s.jsx)('ul', {
                                className: A.platforms,
                                children: x.map(e => (0, s.jsx)(v, {
                                    isActive: p === e.platformKey,
                                    platform: e,
                                    onClick: M,
                                    onMouseEnter: L,
                                    claimed: c
                                }, e.platformKey))
                            })
                        })
                    }),
                    (0, s.jsx)('div', {
                        className: A.platformsWrap,
                        children: (0, s.jsxs)(m.HeadingLevel, {
                            component: (0, s.jsx)(s.Fragment, {
                                children: !u.tq && (0, s.jsx)(m.Heading, {
                                    variant: 'heading-lg/semibold',
                                    className: A.header,
                                    children: S.Z.Messages.DOWNLOAD_MOBILE_TITLE
                                })
                            }),
                            children: [
                                (0, s.jsx)('ul', {
                                    className: A.platforms,
                                    children: O.map(e => (0, s.jsx)(v, {
                                        isActive: p === e.platformKey,
                                        platform: e,
                                        onClick: M,
                                        onMouseEnter: L,
                                        claimed: c
                                    }, e.platformKey))
                                }),
                                (0, s.jsx)(m.Text, {
                                    className: A.footer,
                                    variant: 'text-sm/normal',
                                    children: S.Z.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
