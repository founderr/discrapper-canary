var n = r(200651),
    o = r(192379),
    i = r(481060),
    a = r(372900);
t.Z = o.memo(function (e) {
    var t, r, s, c;
    let { user: l, size: d = i.AvatarSizes.SIZE_32, animate: u = !1, 'aria-hidden': f = !1, ...p } = e,
        h = o.useContext(a.Z);
    return (0, n.jsx)(i.Avatar, {
        src: ((t = l), (r = (0, i.getAvatarSize)(d)), (s = u), (c = h), t.getAvatarURL(c, r, s)),
        size: d,
        'aria-label': f ? void 0 : l.username,
        'aria-hidden': f,
        ...p
    });
});
