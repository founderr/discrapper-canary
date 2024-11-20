var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(372900);
t.Z = i.memo(function (e) {
    var t, n, l, s;
    let { user: c, size: d = o.AvatarSizes.SIZE_32, animate: u = !1, 'aria-hidden': f = !1, ...p } = e,
        v = i.useContext(a.Z);
    return (0, r.jsx)(o.Avatar, {
        src: ((t = c), (n = (0, o.getAvatarSize)(d)), (l = u), (s = v), t.getAvatarURL(s, n, l)),
        size: d,
        'aria-label': f ? void 0 : c.username,
        'aria-hidden': f,
        ...p
    });
});
