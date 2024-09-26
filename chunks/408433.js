n.d(t, {
    dY: function () {
        return D;
    },
    kC: function () {
        return y;
    },
    l3: function () {
        return M;
    },
    o3: function () {
        return b;
    },
    vP: function () {
        return P;
    }
});
var r = n(789020);
var i = n(315314);
var a = n(610138);
var o = n(216116);
var s = n(78328);
var l = n(815648);
var u = n(47120);
var c = n(653041);
var d = n(392711),
    _ = n.n(d),
    E = n(913527),
    f = n.n(E),
    h = n(866442),
    p = n(709054),
    m = n(981631),
    I = n(817384);
let T = /sketchfab/i,
    g = /^https:\/\/sketchfab\.com/i,
    S = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
    A = 1492472454139,
    v = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
    N = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/;
function O(e) {
    let { width: t, height: n } = e;
    return t > 0 && n > 0;
}
function R(e, t, n) {
    if ((null != t && T.test(t.name)) || g.test(n.url)) return !1;
    let r = null != n.proxy_url || /^https:/i.test(n.url);
    return null != e && p.default.extractTimestamp(e) < A && (r = r && null != t && S.test(t.name)), r;
}
function C(e) {
    let { url: t, proxy_url: n, width: r, height: i, placeholder: a, placeholder_version: o } = e;
    return {
        url: t,
        proxyURL: n,
        width: r,
        height: i,
        placeholder: a,
        placeholderVersion: o
    };
}
function y(e, t, n) {
    let r = {
        id: _().uniqueId('embed_'),
        url: n.url,
        type: n.type,
        rawTitle: n.title,
        rawDescription: n.description,
        referenceId: n.reference_id,
        flags: n.flags,
        contentScanVersion: n.content_scan_version
    };
    if (
        (null != n.footer &&
            (r.footer = {
                text: n.footer.text,
                iconURL: n.footer.icon_url,
                iconProxyURL: n.footer.proxy_icon_url
            }),
        null != n.author &&
            null != n.author.name &&
            (r.author = {
                name: n.author.name,
                url: n.author.url,
                iconURL: n.author.icon_url,
                iconProxyURL: n.author.proxy_icon_url
            }),
        null != n.provider &&
            null != n.provider.name &&
            (r.provider = {
                name: n.provider.name,
                url: n.provider.url
            }),
        null != n.timestamp && (r.timestamp = f()(new Date(n.timestamp))),
        null != n.color && (r.color = (0, h.ho)(n.color, !0)),
        null != n.thumbnail && O(n.thumbnail))
    )
        switch (r.type) {
            case m.hBH.ARTICLE:
            case m.hBH.IMAGE:
                r.image = C(n.thumbnail);
                break;
            default:
                r.thumbnail = C(n.thumbnail);
        }
    if (
        (null != n.image && O(n.image) && (r.image = C(n.image)),
        null != n.video &&
            (null == r.thumbnail &&
                null != n.video.proxy_url &&
                O(n.video) &&
                (r.thumbnail = {
                    width: n.video.width,
                    height: n.video.height,
                    url: L(n.video.proxy_url, { format: 'webp' })
                }),
            null != r.thumbnail && O(n.video) && R(t, n.provider, n.video) && (r.video = C(n.video))),
        I.k.has(r.type))
    ) {
        var i;
        let e = null !== (i = n.fields) && void 0 !== i ? i : [];
        r.fields = e.map((e) => {
            let { name: t, value: n, inline: r } = e;
            return {
                rawName: t,
                rawValue: n,
                inline: r
            };
        });
    } else r.fields = [];
    return r;
}
function L(e, t) {
    let n = new URL(e);
    return (
        Object.keys(t).forEach((e) => {
            n.searchParams.set(e, t[e]);
        }),
        n.toString()
    );
}
function b(e) {
    let t = new Map(),
        n = [];
    return (
        e.forEach((e) => {
            if (null == e.url) {
                n.push(e);
                return;
            }
            let r = t.get(e.url);
            if (null == r) {
                n.push(e), t.set(e.url, e);
                return;
            }
            if (null != e.image) null == r.images && ((r.images = []), null != r.image && r.images.push(r.image)), r.images.push(e.image);
        }),
        n
    );
}
function D(e) {
    let { image: t, video: n, type: r, author: i, rawTitle: a } = e;
    return (null != t || null != n) && (r === m.hBH.GIFV || (r !== m.hBH.RICH && null == i && null == a));
}
function M(e) {
    return e.type === m.hBH.ARTICLE && null != e.url && (N.test(e.url) || v.test(e.url));
}
function P(e, t, n) {
    var r;
    return null != t && null != n
        ? {
              maxMediaWidth: t,
              maxMediaHeight: n
          }
        : (null === (r = e.provider) || void 0 === r ? void 0 : r.name) === 'TikTok'
          ? {
                maxMediaWidth: 400,
                maxMediaHeight: 450
            }
          : {
                maxMediaWidth: 400,
                maxMediaHeight: 300
            };
}
