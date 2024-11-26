r.d(t, {
    K: function () {
        return E;
    },
    M: function () {
        return o;
    }
});
var a = r(622916),
    n = r(263449),
    _ = r(255768);
function o(e, t) {
    !0 === t.debug &&
        (_.X
            ? a.kg.enable()
            : (0, a.Cf)(() => {
                  console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
              })),
        (0, n.nZ)().update(t.initialScope);
    let r = new e(t);
    return E(r), r.init(), r;
}
function E(e) {
    (0, n.nZ)().setClient(e);
}
