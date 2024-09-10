t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(735250),
    o = t(470079),
    a = t(901461),
    c = t(464891);
let r = o.memo(c.ZP);
function l(e) {
    let { message: n, channel: t, author: o, compact: c, animateAvatar: l, guildId: s, isGroupStart: d = !0, roleIcon: u, hideTimestamp: _ } = e;
    return !(0, a.Z)(n) && (d || c)
        ? (0, i.jsx)(r, {
              message: n,
              channel: t,
              author: o,
              guildId: s,
              compact: c,
              animate: l,
              roleIcon: u,
              hideTimestamp: _
          })
        : void 0;
}
