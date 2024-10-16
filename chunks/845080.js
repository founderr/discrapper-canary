n.d(i, {
    Z: function () {
        return s;
    }
});
var t = n(735250),
    o = n(470079),
    a = n(901461),
    c = n(464891);
let r = o.memo(c.ZP);
function s(e) {
    let { message: i, channel: n, author: o, compact: c, animateAvatar: s, guildId: l, isGroupStart: d = !0, roleIcon: u, hideTimestamp: m } = e;
    return !(0, a.Z)(i) && (d || c)
        ? (0, t.jsx)(r, {
              message: i,
              channel: n,
              author: o,
              guildId: l,
              compact: c,
              animate: s,
              roleIcon: u,
              hideTimestamp: m
          })
        : void 0;
}
