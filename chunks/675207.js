t.r(n),
    t.d(n, {
        VerifyAccountLoading: function () {
            return g;
        },
        default: function () {
            return _;
        }
    }),
    t(47120),
    t(757143);
var r = t(735250),
    c = t(470079),
    o = t(266067),
    l = t(604039),
    i = t(481060),
    a = t(457330),
    u = t(733427),
    s = t(169382),
    f = t(726542),
    d = t(536285),
    p = t(591759),
    C = t(656649),
    N = t(981631),
    O = t(689938),
    E = t(289720);
let S = null != window.opener;
function _() {
    var e;
    let n = (0, o.k6)(),
        t = (0, s.l)(),
        i = t.get('code'),
        O = t.get('oauth_verifier'),
        E = null !== (e = t.get('state')) && void 0 !== e ? e : '',
        _ = t.get('loading'),
        { type: v } = (0, o.UO)(),
        m = (0, C.vJ)(v),
        [R, A] = c.useState(!1),
        b = (0, u.Z)(),
        T = null == O ? (null != i ? i : '') : O;
    return (c.useEffect(() => {
        let e;
        if (null != _) return;
        for (let n of t.keys()) {
            if (!!n.startsWith('openid.')) null == e && (e = {}), (e[n] = t.get(n));
        }
        let r = (0, C.vJ)(v);
        null != r &&
            a.Z.sessionHandoff(r, E, T, e)
                .then(() => {
                    A(!0);
                })
                .catch(async () => {
                    let r = (e) => {
                            let { status: r, body: c } = e;
                            if (null != l) {
                                if (null == c ? void 0 : c.redirect) {
                                    window.location = c.redirect;
                                    return;
                                }
                                if ([200, 204].includes(r)) {
                                    n.replace(N.Z5c.CONNECTIONS_SUCCESS(l)), S && window.close();
                                    return;
                                }
                                null != c.code && t.append('error-code', c.code), n.replace(''.concat(N.Z5c.CONNECTIONS_ERROR(l), '?').concat(t.toString()));
                            }
                        },
                        c = {
                            code: T,
                            openid_params: e,
                            state: E
                        };
                    async function o(e) {
                        if (null != l && f.Z.isSupported(l))
                            try {
                                let n = await a.Z.callback(l, c, e);
                                r(n);
                            } catch (e) {
                                r(e);
                            }
                    }
                    if (S) {
                        await o(!1);
                        return;
                    }
                    let l = (0, C.vJ)(v);
                    try {
                        let e = await d.default.request(N.Etm.CONNECTIONS_CALLBACK, {
                            ...c,
                            providerType: l
                        });
                        r(e);
                    } catch (e) {
                        (null == e ? void 0 : e.code) !== N.lTL.BAD_REQUEST_FOR_PROVIDER && (await o('RPCError' !== e.name));
                    }
                    d.default.disconnect();
                });
    }, [T, n, _, v, t, E]),
    c.useEffect(() => {
        let e;
        if (!R) return;
        let t = 0;
        async function r() {
            if (null == m) return;
            let { handoff_status: c, success_redirect: o } = (await a.Z.getHandoffStatus(m, E)).body;
            if (c === l.g.HANDOFF_SUCCESS) {
                if (null == p.Z.toURLSafe(o)) return n.replace(N.Z5c.CONNECTIONS_SUCCESS(m));
                window.location = o;
                return;
            }
            if (c === l.g.HANDOFF_ERROR || t >= 10) return n.replace(N.Z5c.CONNECTIONS_ERROR(m));
            e = setTimeout(() => {
                b() && ((t += 1), r());
            }, 1000);
        }
        return (
            r(),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [b, n, m, R, E]),
    null != m && f.Z.isSupported(m))
        ? (0, r.jsx)(g, { platformType: m })
        : null;
}
function g(e) {
    let { platformType: n } = e,
        t = f.Z.get(n);
    return (0, r.jsxs)(C.UV, {
        platformType: n,
        children: [
            (0, r.jsx)('div', {
                className: E.message,
                children: O.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({ name: t.name })
            }),
            (0, r.jsx)(i.Button, {
                className: E.btn,
                disabled: !0,
                children: (0, r.jsx)(i.Spinner, { itemClassName: E.spinnerItem })
            })
        ]
    });
}
