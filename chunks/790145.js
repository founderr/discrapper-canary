var s = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    l = t(843950);
n.Z = (e) => {
    let { value: n = 0, text: t, className: r, lowImportance: a, ...o } = e;
    return null != t
        ? (0, s.jsx)('div', {
              className: i()(l.wrapper, r, a && l.lowImportance),
              ...o,
              children: t
          })
        : n > 0
          ? (0, s.jsx)('div', {
                className: i()(l.wrapper, r, a && l.lowImportance),
                ...o,
                children: n
            })
          : null;
};
