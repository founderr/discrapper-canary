t.r(n),
    t.d(n, {
        VerifyAccountLoading: function () {
            return N;
        },
        default: function () {
            return m;
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
let g = null != window.opener,
    C = (e) => new URLSearchParams(e.search);
function m() {
    var e;
    let n = (0, c.k6)(),
        t = C((0, c.TH)()),
        l = t.get('code'),
        f = t.get('oauth_verifier'),
        p = null !== (e = t.get('state')) && void 0 !== e ? e : '',
        m = t.get('loading'),
        { type: v } = (0, c.UO)(),
        b = (0, u.vJ)(v),
        h = null == f ? (null != l ? l : '') : f;
    return (r.useEffect(() => {
        let e;
        if (null != m) return;
        for (let n of t.keys()) {
            if (!!n.startsWith('openid.')) null == e && (e = {}), (e[n] = t.get(n));
        }
        let o = (e) => {
                let { status: o, body: r } = e;
                if (null != l) {
                    if (null == r ? void 0 : r.redirect) return n.replace(r.redirect);
                    [200, 204].includes(o) && (n.replace(d.Z5c.CONNECTIONS_SUCCESS(l)), g && window.close()), n.replace(''.concat(d.Z5c.CONNECTIONS_ERROR(l), '?').concat(t.toString()));
                }
            },
            r = {
                code: h,
                openid_params: e,
                state: p
            },
            c = (e) => {
                null != l && i.Z.isSupported(l) && s.Z.callback(l, r, e).then(o, o);
            };
        if (g) {
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
    }, [h, n, m, v, t, p]),
    null != b && i.Z.isSupported(b))
        ? (0, o.jsx)(N, { platformType: b })
        : null;
}
function N(e) {
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
