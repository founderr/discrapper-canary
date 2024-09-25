n.d(t, {
    S: function () {
        return h;
    },
    m: function () {
        return f;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(607070),
    u = n(426563),
    c = n(998502),
    d = n(689938),
    _ = n(146655);
let E = c.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = a.useState(!1),
        r = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        i = a.useMemo(() => {
            let n = t || (!r && !e);
            return (0, u.j)(n);
        }, [t, r, e]),
        s = a.useCallback(() => n(!0), []);
    return {
        avatarSrc: i,
        eventHandlers: {
            onMouseEnter: s,
            onMouseLeave: a.useCallback(() => n(!1), [])
        }
    };
}
function h(e) {
    let { src: t } = e;
    return (0, i.jsx)('div', {
        className: _.avatarContainer,
        children: (0, i.jsx)(E, {
            src: t,
            size: s.AvatarSizes.SIZE_40,
            'aria-label': d.Z.Messages.GUILD_AUTOMOD_USERNAME
        })
    });
}
