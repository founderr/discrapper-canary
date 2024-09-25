var r = n(735250),
    i = n(470079),
    a = n(481060),
    o = n(372900);
function s(e, t, n, r) {
    return e.getAvatarURL(r, t, n);
}
t.Z = i.memo(function (e) {
    let { user: t, size: n = a.AvatarSizes.SIZE_32, animate: l = !1, 'aria-hidden': u = !1, ...c } = e,
        d = i.useContext(o.Z);
    return (0, r.jsx)(a.Avatar, {
        src: s(t, (0, a.getAvatarSize)(n), l, d),
        size: n,
        'aria-label': u ? void 0 : t.username,
        'aria-hidden': u,
        ...c
    });
});
