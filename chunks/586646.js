e.d(n, {
    Z: function () {
        return g;
    }
});
var i = e(200651),
    s = e(192379),
    r = e(442837),
    o = e(481060),
    l = e(19780),
    a = e(571826),
    c = e(630759),
    u = e(301107),
    E = e(785792),
    d = e(190054),
    N = e(760373),
    C = e(388032),
    T = e(64570);
function g(t) {
    let { channelId: n } = t,
        e = (0, r.e7)([l.Z], () => {
            var t;
            return null === (t = l.Z.getSecureFramesState()) || void 0 === t ? void 0 : t.epochAuthenticator;
        }),
        g = (0, u.W)({
            fingerprintBase64: e,
            chunkSize: N.y6,
            desiredLength: N.YP
        }),
        h = s.useCallback(() => {
            (0, a.PM)({ channelId: n });
        }, [n]);
    return (0, i.jsxs)('div', {
        className: T.container,
        children: [
            (0, i.jsxs)('div', {
                className: T.tag,
                children: [
                    (0, i.jsx)(o.LockIcon, {
                        size: 'xxs',
                        color: o.tokens.colors.TEXT_POSITIVE
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-positive',
                        children: C.intl.string(C.t['3BogKS'])
                    })
                ]
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: C.intl.string(C.t.B9JNsr)
            }),
            (0, i.jsxs)('div', {
                className: T.header,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'text-sm/bold',
                        color: 'header-primary',
                        children: C.intl.string(C.t.cTQI5u)
                    }),
                    null != g &&
                        (0, i.jsx)(d.H, {
                            chunks: g,
                            color: o.tokens.colors.INTERACTIVE_NORMAL.css,
                            onCopy: h
                        })
                ]
            }),
            (0, i.jsx)(E.b, {
                className: T.code,
                chunks: g,
                columns: N.WK
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: C.intl.format(C.t.wKxADQ, { helpArticle: (0, c.uV)() })
            })
        ]
    });
}
