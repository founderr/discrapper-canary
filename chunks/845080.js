n.d(i, {
    Z: function () {
        return l;
    }
});
var t = n(200651),
    o = n(192379),
    a = n(901461),
    c = n(464891);
let r = o.memo(c.ZP);
function l(e) {
    let { message: i, channel: n, author: o, compact: c, animateAvatar: l, guildId: s, isGroupStart: d = !0, roleIcon: u, hideTimestamp: m } = e;
    return !(0, a.Z)(i) && (d || c)
        ? (0, t.jsx)(r, {
              message: i,
              channel: n,
              author: o,
              guildId: s,
              compact: c,
              animate: l,
              roleIcon: u,
              hideTimestamp: m
          })
        : void 0;
}
