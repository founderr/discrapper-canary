n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(19780),
    s = n(571826),
    c = n(630759),
    u = n(301107),
    d = n(785792),
    h = n(190054),
    p = n(760373),
    f = n(388032),
    m = n(64570);
function g(e) {
    let { channelId: t } = e,
        n = (0, r.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator;
        }),
        g = (0, u.W)({
            fingerprintBase64: n,
            chunkSize: p.y6,
            desiredLength: p.YP
        }),
        C = l.useCallback(() => {
            (0, s.PM)({ channelId: t });
        }, [t]);
    return (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsxs)('div', {
                className: m.tag,
                children: [
                    (0, i.jsx)(a.LockIcon, {
                        size: 'xxs',
                        color: a.tokens.colors.TEXT_POSITIVE
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-positive',
                        children: f.intl.string(f.t['3BogKS'])
                    })
                ]
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: f.intl.string(f.t.B9JNsr)
            }),
            (0, i.jsxs)('div', {
                className: m.header,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-sm/bold',
                        color: 'header-primary',
                        children: f.intl.string(f.t.cTQI5u)
                    }),
                    null != g &&
                        (0, i.jsx)(h.H, {
                            chunks: g,
                            color: a.tokens.colors.INTERACTIVE_NORMAL.css,
                            onCopy: C
                        })
                ]
            }),
            (0, i.jsx)(d.b, {
                className: m.code,
                chunks: g,
                columns: p.WK
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: f.intl.format(f.t.wKxADQ, { helpArticle: (0, c.uV)() })
            })
        ]
    });
}
