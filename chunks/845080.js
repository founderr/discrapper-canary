t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(735250),
    r = t(470079),
    l = t(901461),
    o = t(464891);
let u = r.memo(o.ZP);
function s(e) {
    let { message: n, channel: t, author: r, compact: o, animateAvatar: s, guildId: a, isGroupStart: c = !0, roleIcon: d, hideTimestamp: _ } = e;
    return !(0, l.Z)(n) && (c || o)
        ? (0, i.jsx)(u, {
              message: n,
              channel: t,
              author: r,
              guildId: a,
              compact: o,
              animate: s,
              roleIcon: d,
              hideTimestamp: _
          })
        : void 0;
}
