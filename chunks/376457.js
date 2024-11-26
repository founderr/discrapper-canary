r.d(t, {
    s: function () {
        return _;
    }
});
var a = r(151122),
    n = r(163162);
let _ = (0, a._I)(() => ({
    name: 'HttpContext',
    preprocessEvent(e) {
        if (!n.m9.navigator && !n.m9.location && !n.m9.document) return;
        let t = (e.request && e.request.url) || (n.m9.location && n.m9.location.href),
            { referrer: r } = n.m9.document || {},
            { userAgent: a } = n.m9.navigator || {},
            _ = {
                ...(e.request && e.request.headers),
                ...(r && { Referer: r }),
                ...(a && { 'User-Agent': a })
            },
            o = {
                ...e.request,
                ...(t && { url: t }),
                headers: _
            };
        e.request = o;
    }
}));
