t.r(n),
    t.d(n, {
        VerifyAccountLoading: function () {
            return v;
        },
        default: function () {
            return N;
        }
    }),
    t(47120),
    t(757143);
var o = t(735250),
    r = t(470079),
    c = t(266067),
    l = t(481060),
    i = t(457330),
    a = t(169382),
    s = t(726542),
    u = t(536285),
    d = t(656649),
    f = t(981631),
    p = t(689938),
    C = t(289720);
let g = null != window.opener;
function N() {
    var e;
    let n = (0, c.k6)(),
        t = (0, a.l)(),
        l = t.get('code'),
        p = t.get('oauth_verifier'),
        C = null !== (e = t.get('state')) && void 0 !== e ? e : '',
        N = t.get('loading'),
        { type: m } = (0, c.UO)(),
        _ = (0, d.vJ)(m),
        E = null == p ? (null != l ? l : '') : p;
    return (r.useEffect(() => {
        (async function e() {
            let e;
            if (null != N) return;
            for (let n of t.keys()) {
                if (!!n.startsWith('openid.')) null == e && (e = {}), (e[n] = t.get(n));
            }
            let o = (e) => {
                    let { status: o, body: r } = e;
                    if (null != l) {
                        if (null == r ? void 0 : r.redirect) {
                            n.replace(f.Z5c.CONNECTIONS_SUCCESS(l)), (window.location = r.redirect);
                            return;
                        }
                        if ([200, 204].includes(o)) {
                            n.replace(f.Z5c.CONNECTIONS_SUCCESS(l)), g && window.close();
                            return;
                        }
                        null != r.code && t.append('error-code', r.code), n.replace(''.concat(f.Z5c.CONNECTIONS_ERROR(l), '?').concat(t.toString()));
                    }
                },
                r = {
                    code: E,
                    openid_params: e,
                    state: C
                };
            async function c(e) {
                if (null != l && s.Z.isSupported(l))
                    try {
                        let n = await i.Z.callback(l, r, e);
                        o(n);
                    } catch (e) {
                        o(e);
                    }
            }
            if (g) {
                await c(!1);
                return;
            }
            let l = (0, d.vJ)(m);
            try {
                let e = await u.default.request(f.Etm.CONNECTIONS_CALLBACK, {
                    ...r,
                    providerType: l
                });
                o(e);
            } catch (e) {
                (null == e ? void 0 : e.code) !== f.lTL.BAD_REQUEST_FOR_PROVIDER && (await c('RPCError' !== e.name));
            }
            u.default.disconnect();
        })();
    }, [E, n, N, m, t, C]),
    null != _ && s.Z.isSupported(_))
        ? (0, o.jsx)(v, { platformType: _ })
        : null;
}
function v(e) {
    let { platformType: n } = e;
    return (0, o.jsxs)(d.UV, {
        platformType: n,
        children: [
            (0, o.jsx)('div', {
                className: C.message,
                children: p.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({ name: platform.name })
            }),
            (0, o.jsx)(l.Button, {
                className: C.btn,
                disabled: !0,
                children: (0, o.jsx)(l.Spinner, { itemClassName: C.spinnerItem })
            })
        ]
    });
}
