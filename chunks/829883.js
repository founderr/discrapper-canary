n.d(t, {
    _b: function () {
        return p;
    },
    o: function () {
        return f;
    },
    zt: function () {
        return h;
    },
    zy: function () {
        return d;
    }
}),
    n(757143);
var r = n(633302),
    i = n(134432),
    a = n(768581),
    s = n(358085),
    o = n(981631);
let l = ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/role-icons'),
    u = ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
    c = (0, s.isAndroid)(),
    d = (e, t) => {
        if (null == e) return null;
        let n = null != e.unicodeEmoji ? r.ZP.getByName(r.ZP.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
        return {
            customIconSrc: _(e, t),
            unicodeEmoji: null != n ? n : void 0
        };
    },
    f = (e, t) => e.replace(/size=[0-9]+/g, 'size='.concat((0, i.oO)(t * (0, i.x_)()))),
    _ = (e, t) => {
        let { id: n, icon: r } = e;
        if (null == r) return;
        if (r.startsWith('data:')) return r;
        let s = a.$k ? 'webp' : 'png',
            d = '',
            f = 'quality=lossless';
        return (null != t && ((d = 'size=' + (0, i.oO)(t * (0, i.x_)())), (f = c ? '' : '&' + f)), null != window.GLOBAL_ENV.CDN_HOST) ? ''.concat(l, '/').concat(n, '/').concat(r, '.').concat(s, '?').concat(d).concat(f) : ''.concat(u).concat(o.ANM.ROLE_ICON(n, r), '?').concat(d);
    },
    h = (e) => e.startsWith(l) || (e.startsWith(''.concat(u, '/roles')) && e.includes('/icons/')),
    p = (e, t) => {
        var n;
        return (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || e.features.has(o.oNc.ROLE_ICONS);
    };
