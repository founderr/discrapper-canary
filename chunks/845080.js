i.d(o, {
    Z: function () {
        return s;
    }
});
var n = i(735250),
    t = i(470079),
    c = i(901461),
    a = i(464891);
let d = t.memo(a.ZP);
function s(e) {
    let { message: o, channel: i, author: t, compact: a, animateAvatar: s, guildId: r, isGroupStart: l = !0, roleIcon: m, hideTimestamp: _ } = e;
    return !(0, c.Z)(o) && (l || a)
        ? (0, n.jsx)(d, {
              message: o,
              channel: i,
              author: t,
              guildId: r,
              compact: a,
              animate: s,
              roleIcon: m,
              hideTimestamp: _
          })
        : void 0;
}
