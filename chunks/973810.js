n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(849055),
    s = n(544891),
    o = n(481060),
    a = n(358085),
    d = n(960048),
    u = n(998502),
    c = n(507453),
    h = n(981631),
    f = n(388032);
function m(e) {
    let { mfaChallenge: t, finish: n, setSlide: m, onClose: g } = e,
        [S, x] = i.useState(!1),
        [p, v] = i.useState(null),
        { challenge: j } = t.methods.find((e) => 'webauthn' === e.type),
        C = async () => {
            x(!0), v(null);
            let e = a.isPlatformEmbedded && u.ZP.supportsFeature(h.eRX.WEBAUTHN) ? u.ZP.webAuthnAuthenticate(j) : r.U2(JSON.parse(j)).then((e) => JSON.stringify(e)),
                t = async (e) => {
                    try {
                        await n({
                            mfaType: 'webauthn',
                            data: e
                        });
                    } catch (e) {
                        e instanceof s.Pd ? v(f.intl.string(f.t.xSCvBQ)) : v(e.message);
                    }
                };
            try {
                let n = await e;
                await t(n);
            } catch (e) {
                d.Z.captureException(e), v(f.intl.string(f.t.xSCvBQ));
            } finally {
                x(!1);
            }
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(c.Z.SlideHeader, { onClose: g }),
            (0, l.jsxs)(c.Z.SlideContent, {
                children: [
                    (0, l.jsx)(o.Button, {
                        submitting: S,
                        onClick: C,
                        children: f.intl.string(f.t.Xr3Ekp)
                    }),
                    (0, l.jsx)(c.Z.SlideError, { error: p })
                ]
            }),
            (0, l.jsx)(c.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: m
            })
        ]
    });
}
