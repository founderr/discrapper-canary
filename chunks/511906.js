r.d(t, {
    K: function () {
        return E;
    },
    M: function () {
        return o;
    }
});
var n = r(622916),
    a = r(263449),
    _ = r(255768);
function o(e, t) {
    !0 === t.debug &&
        (_.X
            ? n.kg.enable()
            : (0, n.Cf)(() => {
                  console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
              })),
        (0, a.nZ)().update(t.initialScope);
    let r = new e(t);
    return E(r), r.init(), r;
}
function E(e) {
    (0, a.nZ)().setClient(e);
}
