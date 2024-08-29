t.r(n);
var o = t(735250),
    s = t(470079),
    c = t(442837),
    r = t(481060),
    i = t(959457),
    l = t(571826),
    a = t(301107),
    d = t(785792),
    u = t(190054),
    h = t(245581),
    f = t(760373),
    x = t(689938),
    _ = t(756843);
n.default = function (e) {
    let { transitionState: n, streamKey: t, channelId: m } = e,
        E = (0, c.e7)([i.Z], () => {
            var e;
            return null === (e = i.Z.getSecureFramesState(t)) || void 0 === e ? void 0 : e.epochAuthenticator;
        }),
        v = (0, a.W)({
            fingerprintBase64: E,
            chunkSize: f.y6,
            desiredLength: f.YP
        }),
        p = s.useCallback(() => {
            (0, l.ih)({ channelId: m });
        }, [m]);
    return (0, o.jsxs)(h.Z, {
        transitionState: n,
        title: x.Z.Messages.E2EE_STREAM_PRIVACY_CODE,
        subtitle: x.Z.Messages.E2EE_STREAM_VERIFICATION_SUBTITLE,
        children: [
            (0, o.jsxs)('div', {
                className: _.verification,
                children: [
                    (0, o.jsxs)('div', {
                        className: _.header,
                        children: [
                            (0, o.jsx)(r.Heading, {
                                variant: 'text-sm/bold',
                                color: 'header-primary',
                                children: x.Z.Messages.E2EE_PRIVACY_CODE
                            }),
                            null != v &&
                                (0, o.jsx)(u.H, {
                                    className: _.copyIcon,
                                    chunks: v,
                                    color: r.tokens.colors.INTERACTIVE_NORMAL,
                                    onCopy: p
                                })
                        ]
                    }),
                    (0, o.jsx)(d.b, {
                        className: _.code,
                        chunks: v,
                        columns: f.WK
                    })
                ]
            }),
            (0, o.jsx)(r.Text, {
                className: _.footer,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: x.Z.Messages.E2EE_STREAM_VERIFICATION_FOOTER_TEXT.format({ helpArticle: f.l4 })
            })
        ]
    });
};
