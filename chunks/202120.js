n.d(t, {
    H: function () {
        return o;
    }
});
var r = n(457330),
    i = n(358085),
    a = n(856651),
    s = n(981631);
async function o(e) {
    let { location: t, twoWayLinkType: n, successRedirect: o, handle: l } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = arguments.length > 2 ? arguments[2] : void 0,
        c = Math.round(screen.width / 2 - 350),
        d = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0,
        f = null;
    !(0, i.isDesktop)() && (f = window.open(''.concat(window.location.protocol, '//').concat(window.location.host).concat(s.Z5c.CONNECTIONS(e), '?loading=true'), 'authorize', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,top='.concat(d, ',left=').concat(c, ',width=').concat(700, ',height=').concat(640)));
    let _ = u;
    if (null == _ && e !== a.Kt)
        try {
            let { body: i } = await r.Z.authorize(e, {
                location: t,
                twoWayLinkType: n,
                successRedirect: o,
                handle: l
            });
            _ = i.url;
        } catch (e) {
            throw (null == f || f.close(), e);
        }
    if (null == _) {
        null == f || f.close();
        return;
    }
    return null != f ? (f.location.href = _) : window.open(_), _;
}
