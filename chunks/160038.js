e(47120);
var i = e(200651),
    s = e(192379),
    r = e(120356),
    o = e.n(r),
    l = e(46973),
    a = e(481060),
    c = e(304680),
    u = e(706619),
    E = e(695346),
    d = e(131951),
    N = e(626135),
    C = e(572004),
    T = e(63063),
    g = e(476221),
    h = e(981631),
    I = e(65154),
    _ = e(388032),
    R = e(279778);
let p = () => {
    d.Z.getMediaEngine().once(l.aB.ConnectionStats, (t) => {
        let n = Object.values(I.Yn)
            .map((n) => {
                let e = t
                    .filter((t) => {
                        let { connection: e } = t;
                        return e.context === n;
                    })
                    .map((t, e) => {
                        let i = t.stats;
                        return (i.context = n), (i.index = e), i;
                    });
                for (let t of e) {
                    var i;
                    (null == t ? void 0 : null === (i = t.transport) || void 0 === i ? void 0 : i.localAddress) != null && (t.transport.localAddress = '(redacted)');
                }
                return e;
            })
            .filter((t) => t.length > 0);
        (0, C.JG)(JSON.stringify(n, null, 2)), (0, a.showToast)((0, a.createToast)(_.intl.string(_.t['t5VZ8/']), a.ToastType.SUCCESS));
    });
};
n.Z = function (t) {
    (0, s.useEffect)(() => {
        N.default.track(h.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
    }, []);
    let n = (0, s.useCallback)(() => {
            let { closePopout: n } = t;
            null != n && n(), c.bA();
        }, [t]),
        e = (0, s.useCallback)(() => {
            let { hostname: n, averagePing: e, lastPing: r, outboundLossRate: l } = t,
                a = E.Sb.getSetting();
            return (0, i.jsxs)(s.Fragment, {
                children: [
                    a &&
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)('div', {
                                    className: R.graphContainer,
                                    children: (0, i.jsx)(u.Z, {
                                        dataPoints: t.pings,
                                        width: 258,
                                        height: 80
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: R.popoutText,
                                    children: (0, i.jsx)('strong', { children: g.Z.getShortHostname(n) })
                                })
                            ]
                        }),
                    (0, i.jsx)('div', {
                        className: R.popoutText,
                        children: _.intl.format(_.t['X58/lJ'], { averagePing: e.toFixed(0) })
                    }),
                    null != r
                        ? (0, i.jsx)('div', {
                              className: R.popoutText,
                              children: _.intl.format(_.t['6iv2TE'], { lastPing: r.toFixed(0) })
                          })
                        : null,
                    null != l
                        ? (0, i.jsx)('div', {
                              className: R.popoutText,
                              children: _.intl.format(_.t.VIBJMz, { outboundLossRate: l.toFixed(1) })
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: o()(R.popoutText, R.popoutTextDetails),
                        children: [
                            null == l ? _.intl.formatToPlainString(_.t.vggaMj, { badPing: 250 }) : null,
                            null != l
                                ? _.intl.formatToPlainString(_.t['3pFz1N'], {
                                      badPing: 250,
                                      badLossRate: 10
                                  })
                                : null
                        ]
                    })
                ]
            });
        }, [t]),
        { connectionState: r, connectionTypeText: l } = t,
        C = E.Sb.getSetting(),
        O = {
            [h.hes.AWAITING_ENDPOINT]: _.intl.format(_.t.Eu2vUV, { url: h.yXt.STATUS }),
            [h.hes.CONNECTING]: _.intl.string(_.t['y+E8aG']),
            [h.hes.AUTHENTICATING]: _.intl.string(_.t['5lGIZG']),
            [h.hes.DISCONNECTED]: _.intl.string(_.t.fOX25O),
            [h.hes.RTC_CONNECTING]: _.intl.string(_.t.b5Ubd3),
            [h.hes.ICE_CHECKING]: _.intl.format(_.t.SyoYUV, { url: T.Z.getArticleURL(h.BhN.VOICE_CONNECTION_ERRORS) }),
            [h.hes.DTLS_CONNECTING]: _.intl.format(_.t.SyoYUV, { url: T.Z.getArticleURL(h.BhN.VOICE_CONNECTION_ERRORS) }),
            [h.hes.RTC_CONNECTED]: e,
            [h.hes.NO_ROUTE]: _.intl.format(_.t['2tgQnp'], { url: T.Z.getArticleURL(h.BhN.VOICE_CONNECTION_ERRORS) }),
            [h.hes.RTC_DISCONNECTED]: _.intl.string(_.t.fOX25O)
        }[r];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            'function' == typeof O
                ? O()
                : (0, i.jsx)('p', {
                      className: o()(R.popoutText, R.popoutTextDetails),
                      children: O
                  }),
            (0, i.jsx)('hr', { className: R.separator }),
            (0, i.jsxs)('div', {
                className: R.popoutBottom,
                children: [
                    (0, i.jsxs)('span', {
                        className: o()(R.secured, R.textWithIcon),
                        children: [
                            (0, i.jsx)(a.LockIcon, {
                                size: 'xxs',
                                color: a.tokens.colors.TEXT_POSITIVE.css,
                                className: R.__invalid_icon
                            }),
                            l
                        ]
                    }),
                    C &&
                        d.Z.supports(I.AN.DIAGNOSTICS) &&
                        !__OVERLAY__ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(a.Anchor, {
                                    className: o()(R.debugButton, R.textWithIcon),
                                    onClick: n,
                                    children: [
                                        _.intl.string(_.t.KBoWg4),
                                        (0, i.jsx)(a.WindowLaunchIcon, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: R.__invalid_icon
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(a.Anchor, {
                                    className: o()(R.copyStatsButton, R.textWithIcon),
                                    onClick: p,
                                    title: 'Copy to clipboard',
                                    children: [
                                        _.intl.string(_.t['XEb+Sk']),
                                        (0, i.jsx)(a.CopyIcon, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: R.__invalid_icon
                                        })
                                    ]
                                })
                            ]
                        }),
                    !C &&
                        !__OVERLAY__ &&
                        (0, i.jsx)(a.Anchor, {
                            className: R.debugButton,
                            href: T.Z.getArticleURL(h.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                            children: _.intl.string(_.t.hvVgAQ)
                        })
                ]
            })
        ]
    });
};
