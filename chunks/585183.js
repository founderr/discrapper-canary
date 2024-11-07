n.d(t, {
    h: function () {
        return C;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    l = n(512722),
    o = n.n(l),
    s = n(481060),
    i = n(457330),
    c = n(600164),
    d = n(710845),
    u = n(69580),
    x = n(424071),
    h = n(388032),
    m = n(101319);
let N = new d.Z('TwoWayLinkDiscordConsentWeb');
function C(e) {
    let { platformType: t, clientId: n, scopes: l, authToken: d, onContinue: C, onError: j, onClose: f, redirectUri: v } = e,
        [p, b] = r.useState(!1),
        T = r.useCallback(
            async (e) => {
                let n,
                    a,
                    { location: r } = e,
                    { callbackCode: l, callbackState: o } = d;
                try {
                    n = await i.Z.completeTwoWayLink(t, r, l, o);
                } catch (e) {
                    var s;
                    N.error(''.concat(t, ' link error:'), e), (a = null === (s = e.body) || void 0 === s ? void 0 : s.code);
                }
                null != n ? C() : j(a);
            },
            [t, d, C, j]
        ),
        {
            header: E,
            body: k,
            appDetails: g,
            sendAuthorize: B
        } = (0, u.useOAuth2AuthorizeForm)({
            clientId: n,
            scopes: l,
            responseType: 'code',
            callback: T,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: v
        }),
        O = r.useCallback(() => {
            o()(null != B, 'sendAuthorize not available'), b(!0), B(!0);
        }, [B]);
    return (0, a.jsxs)(x.Z, {
        children: [
            (0, a.jsxs)(s.ModalHeader, {
                direction: c.Z.Direction.VERTICAL,
                className: m.header,
                separator: !1,
                children: [
                    (0, a.jsx)(s.Text, {
                        className: m.stepHeader,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: h.intl.format(h.t.fHz6eX, {
                            number: 2,
                            total: 2
                        })
                    }),
                    null != f &&
                        (0, a.jsx)(s.ModalCloseButton, {
                            className: m.closeButton,
                            onClick: f
                        })
                ]
            }),
            (0, a.jsxs)(s.ModalContent, {
                paddingFix: !1,
                children: [E, k, g]
            }),
            (0, a.jsx)(s.ModalFooter, {
                className: m.footer,
                children: (0, a.jsx)(s.Button, {
                    className: m.footerButton,
                    color: s.Button.Colors.BRAND,
                    submitting: p,
                    onClick: O,
                    children: h.intl.string(h.t.ZN4hkZ)
                })
            })
        ]
    });
}
