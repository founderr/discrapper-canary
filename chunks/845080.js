i.d(n, {
    Z: function () {
        return c;
    }
});
var t = i(735250), o = i(470079), a = i(778947), r = i(901461);
let l = o.memo(a.ZP);
function c(e) {
    let {
        message: n,
        channel: i,
        author: o,
        compact: a,
        animateAvatar: c,
        guildId: s,
        isGroupStart: d = !0,
        roleIcon: u,
        hideTimestamp: f
    } = e;
    return !(0, r.Z)(n) && (d || a) ? (0, t.jsx)(l, {
        message: n,
        channel: i,
        author: o,
        guildId: s,
        compact: a,
        animate: c,
        roleIcon: u,
        hideTimestamp: f
    }) : void 0;
}
