var a = i(200651),
    n = i(192379),
    l = i(481060),
    s = i(372900);
t.Z = n.memo(function (e) {
    var t, i, r, c;
    let { user: d, size: o = l.AvatarSizes.SIZE_32, animate: u = !1, 'aria-hidden': A = !1, ...I } = e,
        S = n.useContext(s.Z);
    return (0, a.jsx)(l.Avatar, {
        src: ((t = d), (i = (0, l.getAvatarSize)(o)), (r = u), (c = S), t.getAvatarURL(c, i, r)),
        size: o,
        'aria-label': A ? void 0 : d.username,
        'aria-hidden': A,
        ...I
    });
});
