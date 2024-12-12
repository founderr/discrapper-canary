r.d(n, {
    ZP: function () {
        return f;
    },
    wQ: function () {
        return d;
    }
});
var i = r(442837),
    a = r(496675),
    s = r(700785),
    o = r(231338);
let l = [o.Pl.SET_VOICE_CHANNEL_STATUS, o.Pl.CONNECT, o.Pl.VIEW_CHANNEL],
    u = [o.Pl.SET_VOICE_CHANNEL_STATUS];
function c(e, n, r, i) {
    return (r ? u : l).every((r) =>
        null == i
            ? n.can(r, e)
            : s.BT({
                  permission: r,
                  user: i,
                  context: e
              })
    );
}
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 ? arguments[2] : void 0;
    return c(e, a.Z, n, r);
}
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 ? arguments[2] : void 0;
    return (0, i.e7)([a.Z], () => c(e, a.Z, n, r), [e, n, r]);
}
