var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(664772);
let s = (e) => {
    let { value: t = 0, text: n, className: i, ...s } = e;
    return null != n
        ? (0, r.jsx)('div', {
              className: a()(o.wrapper, i),
              ...s,
              children: n
          })
        : t > 0
          ? (0, r.jsx)('div', {
                className: a()(o.wrapper, i),
                ...s,
                children: t
            })
          : null;
};
t.Z = s;
