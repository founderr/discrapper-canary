n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(111028),
    o = n(652853),
    s = n(228168),
    l = n(676411);
function u(e) {
    let { text: t, onClick: n, ...u } = e,
        { profileType: c } = (0, o.z)(),
        d = 'string' == typeof t ? t.trim() : t;
    if (null == d || '' === d) return null;
    let _ = () =>
        c === s.y0.FULL_SIZE
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
              children: _()
          })
        : _();
}
