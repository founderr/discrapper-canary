t.r(n),
    t.d(n, {
        VerifyAccountLoading: function () {
            return m;
        },
        default: function () {
            return N;
        }
    }),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120),
    t(757143),
    t(773603);
var o = t(735250),
    r = t(470079),
    l = t(266067),
    c = t(481060),
    i = t(457330),
    s = t(726542),
    a = t(536285),
    u = t(656649),
    d = t(981631),
    f = t(689938),
    p = t(934484);
let C = null != window.opener,
    g = (e) => new URLSearchParams(e.search);
function N() {
    var e;
    let n = (0, l.k6)(),
        t = g((0, l.TH)()),
        c = t.get('code'),
        f = t.get('oauth_verifier'),
        p = null !== (e = t.get('state')) && void 0 !== e ? e : '',
        N = t.get('loading'),
        { type: v } = (0, l.UO)(),
        _ = (0, u.vJ)(v),
        E = null == f ? (null != c ? c : '') : f;
    return (r.useEffect(() => {
        let e;
        if (null != N) return;
        for (let n of t.keys()) {
            if (!!n.startsWith('openid.')) null == e && (e = {}), (e[n] = t.get(n));
        }
        let o = (e) => {
                let { status: o, body: r } = e;
                if (null != c) {
                    if (null == r ? void 0 : r.redirect) {
                        n.replace(d.Z5c.CONNECTIONS_SUCCESS(c)), (window.location = r.redirect);
                        return;
                    }
                    if ([200, 204].includes(o)) {
                        n.replace(d.Z5c.CONNECTIONS_SUCCESS(c)), C && window.close();
                        return;
                    }
                    n.replace(''.concat(d.Z5c.CONNECTIONS_ERROR(c), '?').concat(t.toString()));
                }
            },
            r = {
                code: E,
                openid_params: e,
                state: p
            },
            l = (e) => {
                null != c && s.Z.isSupported(c) && i.Z.callback(c, r, e).then(o, o);
            };
        if (C) {
            l(!1);
            return;
        }
        let c = (0, u.vJ)(v);
        a.default
            .request(d.Etm.CONNECTIONS_CALLBACK, {
                ...r,
                providerType: c
            })
            .then(o, (e) => {
                (null == e ? void 0 : e.errorCode) !== d.lTL.BAD_REQUEST_FOR_PROVIDER && l('RPCError' !== e.name);
            })
            .finally(() => a.default.disconnect());
    }, [E, n, N, v, t, p]),
    null != _ && s.Z.isSupported(_))
        ? (0, o.jsx)(m, { platformType: _ })
        : null;
}
function m(e) {
    let { platformType: n } = e;
    return (0, o.jsxs)(u.UV, {
        platformType: n,
        children: [
            (0, o.jsx)('div', {
                className: p.message,
                children: f.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({ name: platform.name })
            }),
            (0, o.jsx)(c.Button, {
                className: p.btn,
                disabled: !0,
                children: (0, o.jsx)(c.Spinner, { itemClassName: p.spinnerItem })
            })
        ]
    });
}
