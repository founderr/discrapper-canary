n.d(t, {
    B_: function () {
        return v;
    },
    MO: function () {
        return d;
    },
    k5: function () {
        return g;
    },
    q5: function () {
        return f;
    }
}),
    n(47120);
var r,
    i = n(544891),
    a = n(70956),
    s = n(591759),
    o = n(981631);
let l = new Set([window.GLOBAL_ENV.CDN_HOST, null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.substring(2)]),
    u = new Set(['/attachments/', '/ephemeral-attachments/']),
    c = 1 * a.Z.Millis.HOUR;
function d(e) {
    return l.has(e.hostname) && Array.from(u).some((t) => e.pathname.startsWith(t));
}
function f(e) {
    let t = s.Z.toURLSafe(e);
    if (null == t) return e;
    for (let e of ['ex', 'is', 'hm']) t.searchParams.delete(e);
    return t;
}
function _(e) {
    let t = (function (e) {
        let t = e.searchParams.get('ex'),
            n = parseInt(null != t ? t : '', 16);
        return isNaN(n) ? void 0 : n * a.Z.Millis.SECOND;
    })(e);
    return null == t || t <= Date.now() + c;
}
function h(e) {
    let t = s.Z.toURLSafe(e.url);
    return null != t && _(t);
}
function p(e) {
    if (null == e) return !1;
    let t = s.Z.toURLSafe(e.url);
    return !!(null != t && d(t)) && _(t);
}
function m(e) {
    var t;
    return p(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(p)) || p(e.video);
}
function g(e) {
    return e.attachments.some(h) || e.embeds.some(m);
}
async function E(e) {
    let t = await i.tn.post({
        url: o.ANM.ATTACHMENTS_REFRESH_URLS,
        body: { attachment_urls: [e] }
    });
    return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function v(e) {
    let t = s.Z.toURLSafe(e);
    if (null == t || !_(t)) return e;
    let n = await E(e);
    return null != n ? n : e;
}
