n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    s = n(481060),
    r = n(607070),
    a = n(594174),
    o = n(801719);
function C(e) {
    let { size: t, className: n } = e,
        C = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        d = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
        u = (0, o.Z)(t);
    return null == u
        ? null
        : (0, i.jsx)(s.AnimatedAvatar, {
              'aria-label': null == C ? void 0 : C.username,
              size: t,
              className: n,
              src: null == C ? void 0 : C.getAvatarURL(void 0, (0, s.getAvatarSize)(t), !d),
              avatarDecoration: u
          });
}
