t.d(n, {
    Z: function () {
        return s;
    }
});
var r = t(735250),
    i = t(470079),
    o = t(901461),
    l = t(464891);
let u = i.memo(l.ZP);
function s(e) {
    let { message: n, channel: t, author: i, compact: l, animateAvatar: s, guildId: a, isGroupStart: c = !0, roleIcon: d, hideTimestamp: _ } = e;
    return !(0, o.Z)(n) && (c || l)
        ? (0, r.jsx)(u, {
              message: n,
              channel: t,
              author: i,
              guildId: a,
              compact: l,
              animate: s,
              roleIcon: d,
              hideTimestamp: _
          })
        : void 0;
}
