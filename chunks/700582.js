var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(372900);
t.Z = i.memo(function (e) {
    var t, n, o, l;
    let { user: u, size: c = a.AvatarSizes.SIZE_32, animate: d = !1, 'aria-hidden': f = !1, ..._ } = e,
        h = i.useContext(s.Z);
    return (0, r.jsx)(a.Avatar, {
        src: ((t = u), (n = (0, a.getAvatarSize)(c)), (o = d), (l = h), t.getAvatarURL(l, n, o)),
        size: c,
        'aria-label': f ? void 0 : u.username,
        'aria-hidden': f,
        ..._
    });
});
