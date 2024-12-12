r.d(n, {
    Cf: function () {
        return _;
    },
    L2: function () {
        return d;
    },
    Um: function () {
        return c;
    }
});
var i = r(442837),
    a = r(902704),
    s = r(158776),
    o = r(981631);
function l(e) {
    return e.type === o.IIU.PLAYING;
}
function u(e, n) {
    return n.findActivity(e, l);
}
function c(e, n) {
    return null != e ? u(e.ownerId, n) : null;
}
function d(e, n) {
    if (null == e) return null;
    let r = c(e, n);
    return null == r
        ? null
        : {
              id: r.application_id,
              name: r.name
          };
}
function f(e, n) {
    return e === n || (null != e && null != n && (0, a.Z)(e, n));
}
function _(e) {
    return (0, i.e7)([s.Z], () => d(e, s.Z), [e], f);
}
