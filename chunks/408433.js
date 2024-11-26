n.d(t, {
    En: function () {
        return C;
    },
    dY: function () {
        return S;
    },
    eC: function () {
        return N;
    },
    kC: function () {
        return T;
    },
    l3: function () {
        return y;
    },
    o3: function () {
        return b;
    },
    vP: function () {
        return A;
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
    u = n(948141),
    c = n(630388),
    d = n(709054),
    f = n(981631),
    _ = n(817384);
let p = /sketchfab/i,
    h = /^https:\/\/sketchfab\.com/i,
    m = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
    g = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
    E = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/;
function v(e) {
    let { width: t, height: n } = e;
    return t > 0 && n > 0;
}
function I(e) {
    let { url: t, proxy_url: n, width: r, height: i, placeholder: a, placeholder_version: s, flags: o } = e,
        d = l.Z.getCurrentConfig({ location: 'embed_utils_sanitize_media' }).enabled || u.Z.getCurrentConfig({ location: 'embed_utils_sanitize_media' }).enabled;
    return {
        url: t,
        proxyURL: n,
        width: r,
        height: i,
        placeholder: a,
        placeholderVersion: s,
        srcIsAnimated: d && (0, c.yE)(null != o ? o : 0, f.FoC.IS_ANIMATED),
        flags: d ? (null != o ? o : 0) : (0, c.Ge)(null != o ? o : 0, f.FoC.IS_ANIMATED)
    };
}
function T(e, t, n) {
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
        null != n.thumbnail && v(n.thumbnail))
    )
        switch (r.type) {
            case f.hBH.ARTICLE:
            case f.hBH.IMAGE:
                r.image = I(n.thumbnail);
                break;
            default:
                r.thumbnail = I(n.thumbnail);
        }
    if (
        (null != n.image && v(n.image) && (r.image = I(n.image)),
        null != n.video &&
            (null == r.thumbnail &&
                null != n.video.proxy_url &&
                v(n.video) &&
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
                v(n.video) &&
                (function (e, t, n) {
                    if ((null != t && p.test(t.name)) || h.test(n.url)) return !1;
                    let r = null != n.proxy_url || /^https:/i.test(n.url);
                    return null != e && 1492472454139 > d.default.extractTimestamp(e) && (r = r && null != t && m.test(t.name)), r;
                })(t, n.provider, n.video) &&
                (r.video = I(n.video))),
        _.k.has(r.type))
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
function S(e) {
    let { image: t, video: n, type: r, author: i, rawTitle: a } = e;
    return (null != t || null != n) && (r === f.hBH.GIFV || (r !== f.hBH.RICH && null == i && null == a));
}
function y(e) {
    return e.type === f.hBH.ARTICLE && null != e.url && (E.test(e.url) || g.test(e.url));
}
function A(e, t, n) {
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
function N(e, t) {
    return e.isPrivate() ? !e.isManaged() : t.can(f.Plq.EMBED_LINKS, e);
}
function C(e) {
    return '' !== e.content || e.messageSnapshots.some((e) => '' !== e.message.content || e.message.attachments.length > 0);
}
