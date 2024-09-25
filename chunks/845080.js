n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(901461),
    o = n(464891);
let s = i.memo(o.ZP);
function l(e) {
    let { message: t, channel: n, author: i, compact: o, animateAvatar: l, guildId: u, isGroupStart: c = !0, roleIcon: d, hideTimestamp: _ } = e;
    return !(0, a.Z)(t) && (c || o)
        ? (0, r.jsx)(s, {
              message: t,
              channel: n,
              author: i,
              guildId: u,
              compact: o,
              animate: l,
              roleIcon: d,
              hideTimestamp: _
          })
        : void 0;
}
