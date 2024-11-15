n.d(t, {
    B_: function () {
        return N;
    },
    MO: function () {
        return g;
    },
    _M: function () {
        return E;
    },
    k5: function () {
        return y;
    },
    q5: function () {
        return v;
    }
}),
    n(47120);
var r,
    i,
    a,
    s = n(544891),
    o = n(70956),
    l = n(591759),
    u = n(981631);
let c = (e) => (null == e ? void 0 : e.split(':')[0]);
function d(e) {
    return 'localhost' === e || '127.0.0.1' === e;
}
let f = new Set(['/attachments/', '/ephemeral-attachments/']),
    _ = new Set(['/external/']),
    p = 1 * o.Z.Millis.HOUR,
    h = new Set([window.GLOBAL_ENV.CDN_HOST, null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.substring(2)].map(c).filter(Boolean)),
    m = new Set(
        (null !== (a = null === (i = window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS) || void 0 === i ? void 0 : i.split(',')) && void 0 !== a ? a : [])
            .map((e) => e.substring(2))
            .map(c)
            .filter(Boolean)
    );
function g(e) {
    let t = h.has(e.hostname),
        n = !1,
        r = Array.from(f).some((t) => e.pathname.startsWith(t));
    return (t || n) && r;
}
function E(e) {
    var t;
    let n = m.has(e.hostname),
        r = !1,
        i = Array.from(_).some((t) => e.pathname.startsWith(t));
    return (n || r) && i;
}
function v(e) {
    let t = l.Z.toURLSafe(e);
    if (null == t) return e;
    for (let e of ['ex', 'is', 'hm']) t.searchParams.delete(e);
    return t;
}
function b(e) {
    let t = (function (e) {
        let t = e.searchParams.get('ex'),
            n = parseInt(null != t ? t : '', 16);
        return isNaN(n) ? void 0 : n * o.Z.Millis.SECOND;
    })(e);
    return null == t || t <= Date.now() + p;
}
function I(e) {
    let t = l.Z.toURLSafe(e.url);
    return null != t && b(t);
}
function S(e) {
    if (null == e) return !1;
    let t = l.Z.toURLSafe(e.url);
    return !!(null != t && g(t)) && b(t);
}
function T(e) {
    var t;
    return S(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(S)) || S(e.video);
}
function y(e) {
    return e.attachments.some(I) || e.embeds.some(T);
}
async function A(e) {
    let t = await s.tn.post({
        url: u.ANM.ATTACHMENTS_REFRESH_URLS,
        body: { attachment_urls: [e] }
    });
    return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function N(e) {
    let t = l.Z.toURLSafe(e);
    if (null == t || !b(t)) return e;
    let n = await A(e);
    return null != n ? n : e;
}
