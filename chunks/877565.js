r.d(n, {
    HI: function () {
        return u;
    },
    gm: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(588468);
r(419922);
var o = r(388032);
function l(e) {
    let { titleWithQuery: n, titleWithoutQuery: r, query: a, getQuery: l, headerClassName: u, headerTrailingContent: c } = e,
        d = a.length > 0 ? o.intl.formatToPlainString(n, { prefix: l(a) }) : r;
    return (0, i.jsx)(
        s.ZP.Title,
        {
            className: u,
            title: d,
            children: c
        },
        'autocomplete-title-'.concat(d)
    );
}
function u(e) {
    let { query: n, selectedIndex: r, autocompletes: s, onHover: o, onClick: u, titleWithQuery: c, titleWithoutQuery: d, Component: f, getProps: _, getQuery: h, key: p, indexOffset: m = 0, headerClassName: g, headerTrailingContent: E, footer: v } = e;
    if (null == v && (null == s || 0 === s.length)) return null;
    let I =
        null == s
            ? void 0
            : s.map((e, n) => {
                  let i = n + m,
                      s = _(e, i);
                  return (0, a.createElement)(f, {
                      onClick: u,
                      onHover: o,
                      selected: r === i,
                      index: i,
                      ...s,
                      key: s.key
                  });
              });
    return (0, i.jsxs)(
        a.Fragment,
        {
            children: [
                null != c && null != d
                    ? l({
                          titleWithQuery: c,
                          titleWithoutQuery: d,
                          query: n,
                          getQuery: h,
                          headerClassName: g,
                          headerTrailingContent: E
                      })
                    : null,
                I,
                v
            ]
        },
        p
    );
}
