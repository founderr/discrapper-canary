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
    t(757143);
var o = t(735250),
    r = t(470079),
    c = t(266067),
    l = t(481060),
    s = t(457330),
    i = t(726542),
    a = t(536285),
    u = t(656649),
    d = t(981631),
    f = t(689938),
    p = t(934484);
let C = null != window.opener,
    g = (e) => new URLSearchParams(e.search);
function N() {
    var e;
    let n = (0, c.k6)(),
        t = g((0, c.TH)()),
        l = t.get('code'),
        f = t.get('oauth_verifier'),
        p = null !== (e = t.get('state')) && void 0 !== e ? e : '',
        N = t.get('loading'),
        { type: v } = (0, c.UO)(),
        b = (0, u.vJ)(v),
        O = null == f ? (null != l ? l : '') : f;
    return (r.useEffect(() => {
        let e;
        if (null != N) return;
        for (let n of t.keys()) {
            if (!!n.startsWith('openid.')) null == e && (e = {}), (e[n] = t.get(n));
        }
        let o = (e) => {
                let { status: o, body: r } = e;
                if (null != l) {
                    if (null == r ? void 0 : r.redirect) {
                        n.replace(d.Z5c.CONNECTIONS_SUCCESS(l)), (window.location = r.redirect);
                        return;
                    }
                    if ([200, 204].includes(o)) {
                        n.replace(d.Z5c.CONNECTIONS_SUCCESS(l)), C && window.close();
                        return;
                    }
                    n.replace(''.concat(d.Z5c.CONNECTIONS_ERROR(l), '?').concat(t.toString()));
                }
            },
            r = {
                code: O,
                openid_params: e,
                state: p
            },
            c = (e) => {
                null != l && i.Z.isSupported(l) && s.Z.callback(l, r, e).then(o, o);
            };
        if (C) {
            c(!1);
            return;
        }
        let l = (0, u.vJ)(v);
        a.default
            .request(d.Etm.CONNECTIONS_CALLBACK, {
                ...r,
                providerType: l
            })
            .then(o, (e) => c('RPCError' !== e.name))
            .then(() => a.default.disconnect());
    }, [O, n, N, v, t, p]),
    null != b && i.Z.isSupported(b))
        ? (0, o.jsx)(m, { platformType: b })
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
            (0, o.jsx)(l.Button, {
                className: p.btn,
                disabled: !0,
                children: (0, o.jsx)(l.Spinner, { itemClassName: p.spinnerItem })
            })
        ]
    });
}
