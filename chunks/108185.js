r.d(t, {
    QV: function () {
        return i;
    },
    XL: function () {
        return c;
    },
    Y: function () {
        return E;
    },
    nl: function () {
        return o;
    }
});
var a = r(696486),
    n = r(152228),
    _ = r(395848);
function o(e) {
    return 'number' == typeof e && isFinite(e);
}
function E(e, t, r, { ..._ }) {
    let o = (0, a.XU)(e).start_timestamp;
    return (
        o && o > t && 'function' == typeof e.updateStartTime && e.updateStartTime(t),
        (0, n._d)(e, () => {
            let e = (0, n.qp)({
                startTime: t,
                ..._
            });
            return e && e.end(r), e;
        })
    );
}
function i() {
    return _.m && _.m.addEventListener && _.m.performance;
}
function c(e) {
    return e / 1000;
}
