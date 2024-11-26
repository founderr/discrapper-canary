n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(901461),
    o = n(464891);
let u = r.memo(o.ZP);
function a(e) {
    let { message: t, channel: n, author: r, compact: o, animateAvatar: a, guildId: s, isGroupStart: c = !0, roleIcon: d, hideTimestamp: f } = e;
    return !(0, l.Z)(t) && (c || o)
        ? (0, i.jsx)(u, {
              message: t,
              channel: n,
              author: r,
              guildId: s,
              compact: o,
              animate: a,
              roleIcon: d,
              hideTimestamp: f
          })
        : void 0;
}
