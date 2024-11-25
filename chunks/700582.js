var r = n(200651),
    o = n(192379),
    i = n(481060),
    a = n(372900);
t.Z = o.memo(function (e) {
    var t, n, s, l;
    let { user: c, size: d = i.AvatarSizes.SIZE_32, animate: u = !1, 'aria-hidden': p = !1, ...f } = e,
        h = o.useContext(a.Z);
    return (0, r.jsx)(i.Avatar, {
        src: ((t = c), (n = (0, i.getAvatarSize)(d)), (s = u), (l = h), t.getAvatarURL(l, n, s)),
        size: d,
        'aria-label': p ? void 0 : c.username,
        'aria-hidden': p,
        ...f
    });
});
