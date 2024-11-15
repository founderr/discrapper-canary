var o = t(200651),
    n = t(192379),
    a = t(481060),
    i = t(372900);
r.Z = n.memo(function (e) {
    var r, t, s, l;
    let { user: c, size: d = a.AvatarSizes.SIZE_32, animate: u = !1, 'aria-hidden': f = !1, ...p } = e,
        h = n.useContext(i.Z);
    return (0, o.jsx)(a.Avatar, {
        src: ((r = c), (t = (0, a.getAvatarSize)(d)), (s = u), (l = h), r.getAvatarURL(l, t, s)),
        size: d,
        'aria-label': f ? void 0 : c.username,
        'aria-hidden': f,
        ...p
    });
});
