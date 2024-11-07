n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(111028),
    s = n(652853),
    o = n(228168),
    l = n(69035);
function u(e) {
    let { text: t, onClick: n, ...u } = e,
        { profileType: c } = (0, s.z)(),
        d = 'string' == typeof t ? t.trim() : t;
    if (null == d || '' === d) return null;
    let f = () =>
        c === o.y0.FULL_SIZE
            ? (0, r.jsx)(i.Text, {
                  color: 'text-normal',
                  ...u,
                  children: d
              })
            : (0, r.jsx)(i.Text, {
                  color: 'text-normal',
                  ...u,
                  children: (0, r.jsx)(a.Z, { children: d })
              });
    return null != n
        ? (0, r.jsx)(i.Clickable, {
              onClick: n,
              className: l.clickable,
              children: f()
          })
        : f();
}
