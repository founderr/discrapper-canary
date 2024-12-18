n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(517055);
function s(e) {
    let { padded: t = !0, inset: n = !1, active: r = !1, className: s, children: c, onClick: d, ...u } = e;
    return null != d
        ? (0, i.jsx)(a.Clickable, {
              onClick: d,
              tabIndex: null != d ? 0 : -1,
              className: l()(s, {
                  [o.outer]: !n,
                  [o.inset]: n,
                  [o.padded]: t,
                  [o.active]: r,
                  [o.interactive]: null != d
              }),
              ...u,
              children: c
          })
        : (0, i.jsx)('div', {
              className: l()(s, {
                  [o.outer]: !n,
                  [o.inset]: n,
                  [o.padded]: t,
                  [o.active]: r
              }),
              ...u,
              children: c
          });
}
