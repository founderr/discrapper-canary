n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(46973),
    s = n(481060),
    c = n(304680),
    u = n(706619),
    d = n(695346),
    h = n(131951),
    p = n(626135),
    f = n(572004),
    m = n(63063),
    g = n(476221),
    C = n(981631),
    _ = n(65154),
    x = n(388032),
    v = n(108983);
let I = () => {
    h.Z.getMediaEngine().once(o.aB.ConnectionStats, (e) => {
        let t = Object.values(_.Yn)
            .map((t) => {
                let n = e
                    .filter((e) => {
                        let { connection: n } = e;
                        return n.context === t;
                    })
                    .map((e, n) => {
                        let i = e.stats;
                        return (i.context = t), (i.index = n), i;
                    });
                for (let e of n) {
                    var i;
                    (null == e ? void 0 : null === (i = e.transport) || void 0 === i ? void 0 : i.localAddress) != null && (e.transport.localAddress = '(redacted)');
                }
                return n;
            })
            .filter((e) => e.length > 0);
        (0, f.JG)(JSON.stringify(t, null, 2)), (0, s.showToast)((0, s.createToast)(x.intl.string(x.t['t5VZ8/']), s.ToastType.SUCCESS));
    });
};
t.Z = function (e) {
    (0, l.useEffect)(() => {
        p.default.track(C.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
    }, []);
    let t = (0, l.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), c.bA();
        }, [e]),
        n = (0, l.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: r, outboundLossRate: o } = e,
                s = d.Sb.getSetting();
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    s &&
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)('div', {
                                    className: v.graphContainer,
                                    children: (0, i.jsx)(u.Z, {
                                        dataPoints: e.pings,
                                        width: 258,
                                        height: 80
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: v.popoutText,
                                    children: (0, i.jsx)('strong', { children: g.Z.getShortHostname(t) })
                                })
                            ]
                        }),
                    (0, i.jsx)('div', {
                        className: v.popoutText,
                        children: x.intl.format(x.t['X58/lJ'], { averagePing: n.toFixed(0) })
                    }),
                    null != r
                        ? (0, i.jsx)('div', {
                              className: v.popoutText,
                              children: x.intl.format(x.t['6iv2TE'], { lastPing: r.toFixed(0) })
                          })
                        : null,
                    null != o
                        ? (0, i.jsx)('div', {
                              className: v.popoutText,
                              children: x.intl.format(x.t.VIBJMz, { outboundLossRate: o.toFixed(1) })
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: a()(v.popoutText, v.popoutTextDetails),
                        children: [
                            null == o ? x.intl.formatToPlainString(x.t.vggaMj, { badPing: 250 }) : null,
                            null != o
                                ? x.intl.formatToPlainString(x.t['3pFz1N'], {
                                      badPing: 250,
                                      badLossRate: 10
                                  })
                                : null
                        ]
                    })
                ]
            });
        }, [e]),
        { connectionState: r, connectionTypeText: o } = e,
        f = d.Sb.getSetting(),
        b = {
            [C.hes.AWAITING_ENDPOINT]: x.intl.format(x.t.Eu2vUV, { url: C.yXt.STATUS }),
            [C.hes.CONNECTING]: x.intl.string(x.t['y+E8aG']),
            [C.hes.AUTHENTICATING]: x.intl.string(x.t['5lGIZG']),
            [C.hes.DISCONNECTED]: x.intl.string(x.t.fOX25O),
            [C.hes.RTC_CONNECTING]: x.intl.string(x.t.b5Ubd3),
            [C.hes.ICE_CHECKING]: x.intl.format(x.t.SyoYUV, { url: m.Z.getArticleURL(C.BhN.VOICE_CONNECTION_ERRORS) }),
            [C.hes.DTLS_CONNECTING]: x.intl.format(x.t.SyoYUV, { url: m.Z.getArticleURL(C.BhN.VOICE_CONNECTION_ERRORS) }),
            [C.hes.RTC_CONNECTED]: n,
            [C.hes.NO_ROUTE]: x.intl.format(x.t['2tgQnp'], { url: m.Z.getArticleURL(C.BhN.VOICE_CONNECTION_ERRORS) }),
            [C.hes.RTC_DISCONNECTED]: x.intl.string(x.t.fOX25O)
        }[r];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            'function' == typeof b
                ? b()
                : (0, i.jsx)('p', {
                      className: a()(v.popoutText, v.popoutTextDetails),
                      children: b
                  }),
            (0, i.jsx)('hr', { className: v.separator }),
            (0, i.jsxs)('div', {
                className: v.popoutBottom,
                children: [
                    (0, i.jsxs)('span', {
                        className: a()(v.secured, v.textWithIcon),
                        children: [
                            (0, i.jsx)(s.LockIcon, {
                                size: 'xxs',
                                color: s.tokens.colors.TEXT_POSITIVE.css,
                                className: v.__invalid_icon
                            }),
                            o
                        ]
                    }),
                    f &&
                        h.Z.supports(_.AN.DIAGNOSTICS) &&
                        !__OVERLAY__ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(s.Anchor, {
                                    className: a()(v.debugButton, v.textWithIcon),
                                    onClick: t,
                                    children: [
                                        x.intl.string(x.t.KBoWg4),
                                        (0, i.jsx)(s.WindowLaunchIcon, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: v.__invalid_icon
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(s.Anchor, {
                                    className: a()(v.copyStatsButton, v.textWithIcon),
                                    onClick: I,
                                    title: 'Copy to clipboard',
                                    children: [
                                        x.intl.string(x.t['XEb+Sk']),
                                        (0, i.jsx)(s.CopyIcon, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: v.__invalid_icon
                                        })
                                    ]
                                })
                            ]
                        }),
                    !f &&
                        !__OVERLAY__ &&
                        (0, i.jsx)(s.Anchor, {
                            className: v.debugButton,
                            href: m.Z.getArticleURL(C.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                            children: x.intl.string(x.t.hvVgAQ)
                        })
                ]
            })
        ]
    });
};
