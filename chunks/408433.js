n.d(t, {
    En: function () {
        return N;
    },
    dY: function () {
        return S;
    },
    eC: function () {
        return A;
    },
    kC: function () {
        return b;
    },
    l3: function () {
        return T;
    },
    o3: function () {
        return I;
    },
    vP: function () {
        return y;
    }
}),
    n(789020),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(653041);
var r = n(392711),
    i = n.n(r),
    a = n(913527),
    s = n.n(a),
    o = n(866442),
    l = n(849727),
    u = n(630388),
    c = n(709054),
    d = n(981631),
    f = n(817384);
let _ = /sketchfab/i,
    p = /^https:\/\/sketchfab\.com/i,
    h = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
    m = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
    g = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/;
function E(e) {
    let { width: t, height: n } = e;
    return t > 0 && n > 0;
}
function v(e) {
    let { url: t, proxy_url: n, width: r, height: i, placeholder: a, placeholder_version: s, flags: o } = e;
    return {
        url: t,
        proxyURL: n,
        width: r,
        height: i,
        placeholder: a,
        placeholderVersion: s,
        srcIsAnimated: l.Z.getCurrentConfig({ location: 'embed_utils_sanitize_media' }).enabled && (0, u.yE)(null != o ? o : 0, d.J0y.IS_ANIMATED)
    };
}
function b(e, t, n) {
    let r = {
        id: i().uniqueId('embed_'),
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
        null != n.timestamp && (r.timestamp = s()(new Date(n.timestamp))),
        null != n.color && (r.color = (0, o.ho)(n.color, !0)),
        null != n.thumbnail && E(n.thumbnail))
    )
        switch (r.type) {
            case d.hBH.ARTICLE:
            case d.hBH.IMAGE:
                r.image = v(n.thumbnail);
                break;
            default:
                r.thumbnail = v(n.thumbnail);
        }
    if (
        (null != n.image && E(n.image) && (r.image = v(n.image)),
        null != n.video &&
            (null == r.thumbnail &&
                null != n.video.proxy_url &&
                E(n.video) &&
                (r.thumbnail = {
                    width: n.video.width,
                    height: n.video.height,
                    url: (function (e, t) {
                        let n = new URL(e);
                        return (
                            Object.keys(t).forEach((e) => {
                                n.searchParams.set(e, t[e]);
                            }),
                            n.toString()
                        );
                    })(n.video.proxy_url, { format: 'webp' })
                }),
            null != r.thumbnail &&
                E(n.video) &&
                (function (e, t, n) {
                    if ((null != t && _.test(t.name)) || p.test(n.url)) return !1;
                    let r = null != n.proxy_url || /^https:/i.test(n.url);
                    return null != e && 1492472454139 > c.default.extractTimestamp(e) && (r = r && null != t && h.test(t.name)), r;
                })(t, n.provider, n.video) &&
                (r.video = v(n.video))),
        f.k.has(r.type))
    ) {
        var a;
        let e = null !== (a = n.fields) && void 0 !== a ? a : [];
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
function I(e) {
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
function S(e) {
    let { image: t, video: n, type: r, author: i, rawTitle: a } = e;
    return (null != t || null != n) && (r === d.hBH.GIFV || (r !== d.hBH.RICH && null == i && null == a));
}
function T(e) {
    return e.type === d.hBH.ARTICLE && null != e.url && (g.test(e.url) || m.test(e.url));
}
function y(e, t, n) {
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
function A(e, t) {
    return e.isPrivate() ? !e.isManaged() : t.can(d.Plq.EMBED_LINKS, e);
}
function N(e) {
    return '' !== e.content || e.messageSnapshots.some((e) => '' !== e.message.content || e.message.attachments.length > 0);
}
