n.d(t, {
    B_: function () {
        return S;
    },
    MO: function () {
        return _;
    },
    k5: function () {
        return T;
    },
    q5: function () {
        return E;
    }
});
var r,
    i = n(47120);
var a = n(544891),
    o = n(70956),
    s = n(591759),
    l = n(981631);
let u = new Set([window.GLOBAL_ENV.CDN_HOST, null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.substring(2)]),
    c = new Set(['/attachments/', '/ephemeral-attachments/']),
    d = 1 * o.Z.Millis.HOUR;
function _(e) {
    return u.has(e.hostname) && Array.from(c).some((t) => e.pathname.startsWith(t));
}
function E(e) {
    let t = s.Z.toURLSafe(e);
    if (null == t) return e;
    for (let e of ['ex', 'is', 'hm']) t.searchParams.delete(e);
    return t;
}
function f(e) {
    let t = e.searchParams.get('ex'),
        n = parseInt(null != t ? t : '', 16);
    return isNaN(n) ? void 0 : n * o.Z.Millis.SECOND;
}
function h(e) {
    let t = f(e);
    return null == t || t <= Date.now() + d;
}
function p(e) {
    let t = s.Z.toURLSafe(e.url);
    return null != t && h(t);
}
function m(e) {
    if (null == e) return !1;
    let t = s.Z.toURLSafe(e.url);
    return !!(null != t && _(t)) && h(t);
}
function I(e) {
    var t;
    return m(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(m)) || m(e.video);
}
function T(e) {
    return e.attachments.some(p) || e.embeds.some(I);
}
async function g(e) {
    let t = await a.tn.post({
        url: l.ANM.ATTACHMENTS_REFRESH_URLS,
        body: { attachment_urls: [e] }
    });
    return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function S(e) {
    let t = s.Z.toURLSafe(e);
    if (null == t || !h(t)) return e;
    let n = await g(e);
    return null != n ? n : e;
}
