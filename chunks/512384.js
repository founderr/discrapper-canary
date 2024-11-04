n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(399606),
    r = n(481060),
    s = n(351780),
    a = n(170248);
function o(e) {
    let { isShaking: t, shakeLocation: n, children: o, className: c } = e,
        u = (0, a.Z)(n);
    return (0, l.e7)([s.Z], () => s.Z.isEnabled({ shakeLocation: n }))
        ? (0, i.jsx)(r.Shaker, {
              isShaking: t,
              intensity: u,
              className: c,
              children: o
          })
        : (0, i.jsx)(i.Fragment, { children: o });
}
