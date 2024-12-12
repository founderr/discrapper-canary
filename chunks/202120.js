r.d(n, {
    H: function () {
        return l;
    }
});
var i = r(457330),
    a = r(358085),
    s = r(856651),
    o = r(981631);
async function l(e) {
    let { location: n, twoWayLinkType: r, successRedirect: l, handle: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        c = arguments.length > 2 ? arguments[2] : void 0,
        d = 700,
        f = 640,
        _ = Math.round(screen.width / 2 - d / 2),
        h = screen.height > f ? Math.round(screen.height / 2 - f / 2) : 0,
        p = null;
    !(0, a.isDesktop)() && (p = window.open(''.concat(window.location.protocol, '//').concat(window.location.host).concat(o.Z5c.CONNECTIONS(e), '?loading=true'), 'authorize', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,top='.concat(h, ',left=').concat(_, ',width=').concat(d, ',height=').concat(f)));
    let m = c;
    if (null == m && e !== s.Kt)
        try {
            let { body: a } = await i.Z.authorize(e, {
                location: n,
                twoWayLinkType: r,
                successRedirect: l,
                handle: u
            });
            m = a.url;
        } catch (e) {
            throw (null == p || p.close(), e);
        }
    if (null == m) {
        null == p || p.close();
        return;
    }
    return null != p ? (p.location.href = m) : window.open(m), m;
}
