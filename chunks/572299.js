r.d(t, {
    n: function () {
        return i;
    }
});
var n = r(101284),
    a = r(622916),
    o = r(263449);
function i(e, t) {
    let r = (0, o.s3)(),
        i = (0, o.aF)();
    if (!r) return;
    let { beforeBreadcrumb: _ = null, maxBreadcrumbs: E = 100 } = r.getOptions();
    if (E <= 0) return;
    let s = {
            timestamp: (0, n.yW)(),
            ...e
        },
        c = _ ? (0, a.Cf)(() => _(s, t)) : s;
    null !== c && (r.emit && r.emit('beforeAddBreadcrumb', c, t), i.addBreadcrumb(c, E));
}
