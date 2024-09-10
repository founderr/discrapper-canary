function n(t) {
    let e = '=='.slice(0, (4 - (t.length % 4)) % 4),
        r = atob(t.replace(/-/g, '+').replace(/_/g, '/') + e),
        n = new ArrayBuffer(r.length),
        i = new Uint8Array(n);
    for (let t = 0; t < r.length; t++) i[t] = r.charCodeAt(t);
    return n;
}
function i(t) {
    let e = new Uint8Array(t),
        r = '';
    for (let t of e) r += String.fromCharCode(t);
    return btoa(r).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
r.d(e, {
    U2: function () {
        return b;
    },
    Ue: function () {
        return y;
    }
});
var o = 'copy',
    a = 'convert';
function s(t, e, r) {
    if (e === o) return r;
    if (e === a) return t(r);
    if (e instanceof Array) return r.map((r) => s(t, e[0], r));
    if (e instanceof Object) {
        let n = {};
        for (let [i, o] of Object.entries(e)) {
            if (o.derive) {
                let t = o.derive(r);
                void 0 !== t && (r[i] = t);
            }
            if (!(i in r)) {
                if (o.required) throw Error(`Missing key: ${i}`);
                continue;
            }
            if (null == r[i]) {
                n[i] = null;
                continue;
            }
            n[i] = s(t, o.schema, r[i]);
        }
        return n;
    }
}
function u(t, e) {
    return {
        required: !0,
        schema: t,
        derive: e
    };
}
function c(t) {
    return {
        required: !0,
        schema: t
    };
}
function l(t) {
    return {
        required: !1,
        schema: t
    };
}
var h = {
        type: c(o),
        id: c(a),
        transports: l(o)
    },
    f = {
        appid: l(o),
        appidExclude: l(o),
        credProps: l(o)
    },
    p = {
        appid: l(o),
        appidExclude: l(o),
        credProps: l(o)
    },
    m = {
        publicKey: c({
            rp: c(o),
            user: c({
                id: c(a),
                name: c(o),
                displayName: c(o)
            }),
            challenge: c(a),
            pubKeyCredParams: c(o),
            timeout: l(o),
            excludeCredentials: l([h]),
            authenticatorSelection: l(o),
            attestation: l(o),
            extensions: l(f)
        }),
        signal: l(o)
    },
    d = {
        type: c(o),
        id: c(o),
        rawId: c(a),
        authenticatorAttachment: l(o),
        response: c({
            clientDataJSON: c(a),
            attestationObject: c(a),
            transports: u(o, (t) => {
                var e;
                return (null == (e = t.getTransports) ? void 0 : e.call(t)) || [];
            })
        }),
        clientExtensionResults: u(p, (t) => t.getClientExtensionResults())
    },
    v = {
        mediation: l(o),
        publicKey: c({
            challenge: c(a),
            timeout: l(o),
            rpId: l(o),
            allowCredentials: l([h]),
            userVerification: l(o),
            extensions: l(f)
        }),
        signal: l(o)
    },
    g = {
        type: c(o),
        id: c(o),
        rawId: c(a),
        authenticatorAttachment: l(o),
        response: c({
            clientDataJSON: c(a),
            authenticatorData: c(a),
            signature: c(a),
            userHandle: c(a)
        }),
        clientExtensionResults: u(p, (t) => t.getClientExtensionResults())
    };
async function y(t) {
    let e = await navigator.credentials.create(s(n, m, t));
    return s(i, d, e);
}
async function b(t) {
    let e = await navigator.credentials.get(s(n, v, t));
    return s(i, g, e);
}
