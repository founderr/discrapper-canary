r.d(n, {
    _b: function () {
        return g;
    },
    o: function () {
        return h;
    },
    zt: function () {
        return m;
    },
    zy: function () {
        return _;
    }
});
var i = r(757143);
var a = r(633302),
    s = r(134432),
    o = r(768581),
    l = r(358085),
    u = r(981631);
let c = ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/role-icons'),
    d = ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
    f = (0, l.isAndroid)(),
    _ = (e, n) => {
        if (null == e) return null;
        let r = null != e.unicodeEmoji ? a.ZP.getByName(a.ZP.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
        return {
            customIconSrc: p(e, n),
            unicodeEmoji: null != r ? r : void 0
        };
    },
    h = (e, n) => e.replace(/size=[0-9]+/g, 'size='.concat((0, s.oO)(n * (0, s.x_)()))),
    p = (e, n) => {
        let { id: r, icon: i } = e;
        if (null == i) return;
        if (i.startsWith('data:')) return i;
        let a = o.$k ? 'webp' : 'png',
            l = '',
            _ = 'quality=lossless';
        return (null != n && ((l = 'size=' + (0, s.oO)(n * (0, s.x_)())), (_ = f ? '' : '&' + _)), null != window.GLOBAL_ENV.CDN_HOST) ? ''.concat(c, '/').concat(r, '/').concat(i, '.').concat(a, '?').concat(l).concat(_) : ''.concat(d).concat(u.ANM.ROLE_ICON(r, i), '?').concat(l);
    },
    m = (e) => e.startsWith(c) || (e.startsWith(''.concat(d, '/roles')) && e.includes('/icons/')),
    g = (e, n) => {
        var r;
        return (null == n ? void 0 : null === (r = n.tags) || void 0 === r ? void 0 : r.subscription_listing_id) != null || e.features.has(u.oNc.ROLE_ICONS);
    };
