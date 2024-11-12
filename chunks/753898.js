n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(607070),
    s = n(43267),
    o = n(933557),
    c = n(266076),
    d = n(518950),
    u = n(967128);
function h(e) {
    var t;
    let { channel: n, children: h, user: p } = e,
        m = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
        f = null !== (t = (0, o.ZP)(n)) && void 0 !== t ? t : '',
        {
            avatarDecorationSrc: g,
            eventHandlers: C,
            isAnimating: x
        } = (0, d.Z)({
            user: p,
            size: r.AvatarSizes.SIZE_80,
            animateOnHover: !0
        });
    return (0, i.jsxs)(u.ZP, {
        channelId: n.id,
        ...C,
        children: [
            (() => {
                let e = !m && x;
                return n.isMultiUserDM()
                    ? (0, i.jsx)(c.Z, {
                          channel: n,
                          size: r.AvatarSizes.SIZE_80,
                          experimentLocation: 'empty_messages',
                          animated: e,
                          'aria-label': f
                      })
                    : (0, i.jsx)(r.Avatar, {
                          'aria-label': f,
                          size: r.AvatarSizes.SIZE_80,
                          src: (0, s.x)(n, 80, e),
                          avatarDecoration: g
                      });
            })(),
            (0, i.jsx)(u.Ot, { children: f }),
            (0, i.jsx)(u.jz, { children: h })
        ]
    });
}
