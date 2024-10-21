n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var s = n(399606),
    a = n(481060),
    l = n(351780),
    r = n(170248);
function o(e) {
    let { isShaking: t, shakeLocation: n, children: o, className: c } = e,
        u = (0, r.Z)(n);
    return (0, s.e7)([l.Z], () => l.Z.isEnabled({ shakeLocation: n }))
        ? (0, i.jsx)(a.Shaker, {
              isShaking: t,
              intensity: u,
              className: c,
              children: o
          })
        : (0, i.jsx)(i.Fragment, { children: o });
}
