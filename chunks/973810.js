n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(849055),
    s = n(481060),
    o = n(358085),
    a = n(960048),
    d = n(998502),
    u = n(507453),
    c = n(981631),
    h = n(388032);
function f(e) {
    let { mfaChallenge: t, finish: n, setSlide: f, onClose: m } = e,
        [g, S] = i.useState(!1),
        [x, v] = i.useState(null),
        { challenge: p } = t.methods.find((e) => 'webauthn' === e.type),
        j = async () => {
            S(!0), v(null);
            let e = o.isPlatformEmbedded && d.ZP.supportsFeature(c.eRX.WEBAUTHN) ? d.ZP.webAuthnAuthenticate(p) : r.U2(JSON.parse(p)).then((e) => JSON.stringify(e)),
                t = async (e) => {
                    try {
                        await n({
                            mfaType: 'webauthn',
                            data: e
                        });
                    } catch (e) {
                        var t;
                        v(null !== (t = e.message) && void 0 !== t ? t : h.intl.string(h.t.xSCvBQ));
                    }
                };
            try {
                let n = await e;
                await t(n);
            } catch (e) {
                a.Z.captureException(e), v(h.intl.string(h.t.xSCvBQ));
            } finally {
                S(!1);
            }
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(u.Z.SlideHeader, { onClose: m }),
            (0, l.jsxs)(u.Z.SlideContent, {
                children: [
                    (0, l.jsx)(s.Button, {
                        submitting: g,
                        onClick: j,
                        children: h.intl.string(h.t.Xr3Ekp)
                    }),
                    (0, l.jsx)(u.Z.SlideError, { error: x })
                ]
            }),
            (0, l.jsx)(u.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: f
            })
        ]
    });
}
