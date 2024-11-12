n.d(t, {
    B_: function () {
        return A;
    },
    MO: function () {
        return m;
    },
    _M: function () {
        return g;
    },
    k5: function () {
        return T;
    },
    q5: function () {
        return E;
    }
}),
    n(47120);
var r,
    i,
    a = n(544891),
    s = n(70956),
    o = n(591759),
    l = n(981631);
let u = (e) => (null == e ? void 0 : e.split(':')[0]);
function c(e) {
    return 'localhost' === e || '127.0.0.1' === e;
}
let d = new Set(['/attachments/', '/ephemeral-attachments/']),
    f = new Set(['/external/']),
    _ = 1 * s.Z.Millis.HOUR,
    p = new Set([window.GLOBAL_ENV.CDN_HOST, null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.substring(2)].map(u).filter(Boolean)),
    h = new Set([null === (i = window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.substring(2)].map(u).filter(Boolean));
function m(e) {
    let t = p.has(e.hostname),
        n = !1,
        r = Array.from(d).some((t) => e.pathname.startsWith(t));
    return (t || n) && r;
}
function g(e) {
    var t;
    let n = h.has(e.hostname),
        r = !1,
        i = Array.from(f).some((t) => e.pathname.startsWith(t));
    return (n || r) && i;
}
function E(e) {
    let t = o.Z.toURLSafe(e);
    if (null == t) return e;
    for (let e of ['ex', 'is', 'hm']) t.searchParams.delete(e);
    return t;
}
function v(e) {
    let t = (function (e) {
        let t = e.searchParams.get('ex'),
            n = parseInt(null != t ? t : '', 16);
        return isNaN(n) ? void 0 : n * s.Z.Millis.SECOND;
    })(e);
    return null == t || t <= Date.now() + _;
}
function I(e) {
    let t = o.Z.toURLSafe(e.url);
    return null != t && v(t);
}
function b(e) {
    if (null == e) return !1;
    let t = o.Z.toURLSafe(e.url);
    return !!(null != t && m(t)) && v(t);
}
function S(e) {
    var t;
    return b(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(b)) || b(e.video);
}
function T(e) {
    return e.attachments.some(I) || e.embeds.some(S);
}
async function y(e) {
    let t = await a.tn.post({
        url: l.ANM.ATTACHMENTS_REFRESH_URLS,
        body: { attachment_urls: [e] }
    });
    return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function A(e) {
    let t = o.Z.toURLSafe(e);
    if (null == t || !v(t)) return e;
    let n = await y(e);
    return null != n ? n : e;
}
