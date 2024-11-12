n(47120);
var l = n(200651),
    s = n(192379),
    r = n(120356),
    o = n.n(r),
    i = n(46973),
    a = n(481060),
    c = n(304680),
    u = n(706619),
    d = n(695346),
    h = n(131951),
    x = n(626135),
    g = n(572004),
    N = n(63063),
    C = n(476221),
    f = n(981631),
    p = n(65154),
    E = n(388032),
    I = n(108983);
let T = () => {
    h.Z.getMediaEngine().once(i.aB.ConnectionStats, (e) => {
        let t = Object.values(p.Yn)
            .map((t) => {
                let n = e
                    .filter((e) => {
                        let { connection: n } = e;
                        return n.context === t;
                    })
                    .map((e, n) => {
                        let l = e.stats;
                        return (l.context = t), (l.index = n), l;
                    });
                for (let e of n) {
                    var l;
                    (null == e ? void 0 : null === (l = e.transport) || void 0 === l ? void 0 : l.localAddress) != null && (e.transport.localAddress = '(redacted)');
                }
                return n;
            })
            .filter((e) => e.length > 0);
        (0, g.JG)(JSON.stringify(t, null, 2)), (0, a.showToast)((0, a.createToast)(E.intl.string(E.t['t5VZ8/']), a.ToastType.SUCCESS));
    });
};
t.Z = function (e) {
    (0, s.useEffect)(() => {
        x.default.track(f.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
    }, []);
    let t = (0, s.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), c.bA();
        }, [e]),
        n = (0, s.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: r, outboundLossRate: i } = e,
                a = d.Sb.getSetting();
            return (0, l.jsxs)(s.Fragment, {
                children: [
                    a &&
                        (0, l.jsxs)('div', {
                            children: [
                                (0, l.jsx)('div', {
                                    className: I.graphContainer,
                                    children: (0, l.jsx)(u.Z, {
                                        dataPoints: e.pings,
                                        width: 258,
                                        height: 80
                                    })
                                }),
                                (0, l.jsx)('div', {
                                    className: I.popoutText,
                                    children: (0, l.jsx)('strong', { children: C.Z.getShortHostname(t) })
                                })
                            ]
                        }),
                    (0, l.jsx)('div', {
                        className: I.popoutText,
                        children: E.intl.format(E.t['X58/lJ'], { averagePing: n.toFixed(0) })
                    }),
                    null != r
                        ? (0, l.jsx)('div', {
                              className: I.popoutText,
                              children: E.intl.format(E.t['6iv2TE'], { lastPing: r.toFixed(0) })
                          })
                        : null,
                    null != i
                        ? (0, l.jsx)('div', {
                              className: I.popoutText,
                              children: E.intl.format(E.t.VIBJMz, { outboundLossRate: i.toFixed(1) })
                          })
                        : null,
                    (0, l.jsxs)('div', {
                        className: o()(I.popoutText, I.popoutTextDetails),
                        children: [
                            null == i ? E.intl.formatToPlainString(E.t.vggaMj, { badPing: 250 }) : null,
                            null != i
                                ? E.intl.formatToPlainString(E.t['3pFz1N'], {
                                      badPing: 250,
                                      badLossRate: 10
                                  })
                                : null
                        ]
                    })
                ]
            });
        }, [e]),
        { connectionState: r, connectionTypeText: i } = e,
        g = d.Sb.getSetting(),
        m = {
            [f.hes.AWAITING_ENDPOINT]: E.intl.format(E.t.Eu2vUV, { url: f.yXt.STATUS }),
            [f.hes.CONNECTING]: E.intl.string(E.t['y+E8aG']),
            [f.hes.AUTHENTICATING]: E.intl.string(E.t['5lGIZG']),
            [f.hes.DISCONNECTED]: E.intl.string(E.t.fOX25O),
            [f.hes.RTC_CONNECTING]: E.intl.string(E.t.b5Ubd3),
            [f.hes.ICE_CHECKING]: E.intl.format(E.t.SyoYUV, { url: N.Z.getArticleURL(f.BhN.VOICE_CONNECTION_ERRORS) }),
            [f.hes.DTLS_CONNECTING]: E.intl.format(E.t.SyoYUV, { url: N.Z.getArticleURL(f.BhN.VOICE_CONNECTION_ERRORS) }),
            [f.hes.RTC_CONNECTED]: n,
            [f.hes.NO_ROUTE]: E.intl.format(E.t['2tgQnp'], { url: N.Z.getArticleURL(f.BhN.VOICE_CONNECTION_ERRORS) }),
            [f.hes.RTC_DISCONNECTED]: E.intl.string(E.t.fOX25O)
        }[r];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            'function' == typeof m
                ? m()
                : (0, l.jsx)('p', {
                      className: o()(I.popoutText, I.popoutTextDetails),
                      children: m
                  }),
            (0, l.jsx)('hr', { className: I.separator }),
            (0, l.jsxs)('div', {
                className: I.popoutBottom,
                children: [
                    (0, l.jsxs)('span', {
                        className: o()(I.secured, I.textWithIcon),
                        children: [
                            (0, l.jsx)(a.LockIcon, {
                                size: 'xxs',
                                color: a.tokens.colors.TEXT_POSITIVE.css,
                                className: I.__invalid_icon
                            }),
                            i
                        ]
                    }),
                    g &&
                        h.Z.supports(p.AN.DIAGNOSTICS) &&
                        !__OVERLAY__ &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(a.Anchor, {
                                    className: o()(I.debugButton, I.textWithIcon),
                                    onClick: t,
                                    children: [
                                        E.intl.string(E.t.KBoWg4),
                                        (0, l.jsx)(a.WindowLaunchIcon, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: I.__invalid_icon
                                        })
                                    ]
                                }),
                                (0, l.jsxs)(a.Anchor, {
                                    className: o()(I.copyStatsButton, I.textWithIcon),
                                    onClick: T,
                                    title: 'Copy to clipboard',
                                    children: [
                                        E.intl.string(E.t['XEb+Sk']),
                                        (0, l.jsx)(a.CopyIcon, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: I.__invalid_icon
                                        })
                                    ]
                                })
                            ]
                        }),
                    !g &&
                        !__OVERLAY__ &&
                        (0, l.jsx)(a.Anchor, {
                            className: I.debugButton,
                            href: N.Z.getArticleURL(f.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                            children: E.intl.string(E.t.hvVgAQ)
                        })
                ]
            })
        ]
    });
};
