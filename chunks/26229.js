var i = n(200651),
    s = n(192379);
t.Z = s.memo(function (e) {
    let { layout: t, layoutSize: n, className: s, renderWidget: r } = e;
    return null != t
        ? (0, i.jsx)('div', {
              className: s,
              style: {
                  width: n.width,
                  height: n.height
              },
              children: t.widgets.map((e) => r(e, n))
          })
        : null;
});
