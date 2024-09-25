n.d(t, {
    H: function () {
        return s;
    }
});
var r = n(457330),
    i = n(358085),
    a = n(856651),
    o = n(981631);
async function s(e) {
    let { location: t, twoWayLinkType: n, successRedirect: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = arguments.length > 2 ? arguments[2] : void 0,
        u = 700,
        c = 640,
        d = Math.round(screen.width / 2 - u / 2),
        _ = screen.height > c ? Math.round(screen.height / 2 - c / 2) : 0,
        E = null;
    !(0, i.isDesktop)() && (E = window.open(''.concat(window.location.protocol, '//').concat(window.location.host).concat(o.Z5c.CONNECTIONS(e), '?loading=true'), 'authorize', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,top='.concat(_, ',left=').concat(d, ',width=').concat(u, ',height=').concat(c)));
    let f = l;
    if (null == f && e !== a.Kt) {
        let { body: i } = await r.Z.authorize(e, {
            location: t,
            twoWayLinkType: n,
            successRedirect: s
        });
        f = i.url;
    }
    if (null != f) return null != E ? (E.location.href = f) : window.open(f), f;
}
