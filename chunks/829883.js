n.d(t, {
    _b: function () {
        return p;
    },
    o: function () {
        return E;
    },
    zt: function () {
        return h;
    },
    zy: function () {
        return _;
    }
});
var r = n(757143);
var i = n(633302),
    a = n(134432),
    o = n(768581),
    s = n(358085),
    l = n(981631);
let u = ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/role-icons'),
    c = ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
    d = (0, s.isAndroid)(),
    _ = (e, t) => {
        if (null == e) return null;
        let n = null != e.unicodeEmoji ? i.ZP.getByName(i.ZP.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
        return {
            customIconSrc: f(e, t),
            unicodeEmoji: null != n ? n : void 0
        };
    },
    E = (e, t) => e.replace(/size=[0-9]+/g, 'size='.concat((0, a.oO)(t * (0, a.x_)()))),
    f = (e, t) => {
        let { id: n, icon: r } = e;
        if (null == r) return;
        if (r.startsWith('data:')) return r;
        let i = o.$k ? 'webp' : 'png',
            s = '',
            _ = 'quality=lossless';
        return (null != t && ((s = 'size=' + (0, a.oO)(t * (0, a.x_)())), (_ = d ? '' : '&' + _)), null != window.GLOBAL_ENV.CDN_HOST) ? ''.concat(u, '/').concat(n, '/').concat(r, '.').concat(i, '?').concat(s).concat(_) : ''.concat(c).concat(l.ANM.ROLE_ICON(n, r), '?').concat(s);
    },
    h = (e) => e.startsWith(u) || (e.startsWith(''.concat(c, '/roles')) && e.includes('/icons/')),
    p = (e, t) => {
        var n;
        return (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || e.features.has(l.oNc.ROLE_ICONS);
    };
