function n(e) {
    let r = '=='.slice(0, (4 - (e.length % 4)) % 4),
        t = atob(e.replace(/-/g, '+').replace(/_/g, '/') + r),
        n = new ArrayBuffer(t.length),
        a = new Uint8Array(n);
    for (let e = 0; e < t.length; e++) a[e] = t.charCodeAt(e);
    return n;
}
function a(e) {
    let r = new Uint8Array(e),
        t = '';
    for (let e of r) t += String.fromCharCode(e);
    return btoa(t).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
t.d(r, {
    U2: function () {
        return w;
    },
    Ue: function () {
        return y;
    }
});
var i = 'copy',
    o = 'convert';
function f(e, r, t) {
    if (r === i) return t;
    if (r === o) return e(t);
    if (r instanceof Array) return t.map((t) => f(e, r[0], t));
    if (r instanceof Object) {
        let n = {};
        for (let [a, i] of Object.entries(r)) {
            if (i.derive) {
                let e = i.derive(t);
                void 0 !== e && (t[a] = e);
            }
            if (!(a in t)) {
                if (i.required) throw Error(`Missing key: ${a}`);
                continue;
            }
            if (null == t[a]) {
                n[a] = null;
                continue;
            }
            n[a] = f(e, i.schema, t[a]);
        }
        return n;
    }
}
function s(e, r) {
    return {
        required: !0,
        schema: e,
        derive: r
    };
}
function l(e) {
    return {
        required: !0,
        schema: e
    };
}
function c(e) {
    return {
        required: !1,
        schema: e
    };
}
var u = {
        type: l(i),
        id: l(o),
        transports: c(i)
    },
    d = {
        appid: c(i),
        appidExclude: c(i),
        credProps: c(i)
    },
    v = {
        appid: c(i),
        appidExclude: c(i),
        credProps: c(i)
    },
    h = {
        publicKey: l({
            rp: l(i),
            user: l({
                id: l(o),
                name: l(i),
                displayName: l(i)
            }),
            challenge: l(o),
            pubKeyCredParams: l(i),
            timeout: c(i),
            excludeCredentials: c([u]),
            authenticatorSelection: c(i),
            attestation: c(i),
            extensions: c(d)
        }),
        signal: c(i)
    },
    p = {
        type: l(i),
        id: l(i),
        rawId: l(o),
        authenticatorAttachment: c(i),
        response: l({
            clientDataJSON: l(o),
            attestationObject: l(o),
            transports: s(i, (e) => {
                var r;
                return (null == (r = e.getTransports) ? void 0 : r.call(e)) || [];
            })
        }),
        clientExtensionResults: s(v, (e) => e.getClientExtensionResults())
    },
    g = {
        mediation: c(i),
        publicKey: l({
            challenge: l(o),
            timeout: c(i),
            rpId: c(i),
            allowCredentials: c([u]),
            userVerification: c(i),
            extensions: c(d)
        }),
        signal: c(i)
    },
    b = {
        type: l(i),
        id: l(i),
        rawId: l(o),
        authenticatorAttachment: c(i),
        response: l({
            clientDataJSON: l(o),
            authenticatorData: l(o),
            signature: l(o),
            userHandle: l(o)
        }),
        clientExtensionResults: s(v, (e) => e.getClientExtensionResults())
    };
async function y(e) {
    let r = await navigator.credentials.create(f(n, h, e));
    return f(a, p, r);
}
async function w(e) {
    let r = await navigator.credentials.get(f(n, g, e));
    return f(a, b, r);
}
