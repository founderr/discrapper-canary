n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(481060),
    o = n(49898),
    c = n(495288);
function d(e) {
    let { state: t, query: n, placeholder: a, onTextChange: d, onCollapsedClick: u, onClear: h, onBlur: m, onSubmit: p } = e,
        g = r.useRef(null),
        f = r.useCallback(
            (e) => {
                'Enter' === e.key && p();
            },
            [p]
        ),
        _ = r.useCallback(() => {
            u(),
                setTimeout(() => {
                    var e;
                    return null === (e = g.current) || void 0 === e ? void 0 : e.focus();
                });
        }, [u]);
    return t === o.WB.COLLAPSED
        ? (0, i.jsx)(s.Clickable, {
              className: c.searchIcon,
              onClick: _,
              children: (0, i.jsx)(s.MagnifyingGlassIcon, {
                  size: 'md',
                  color: s.tokens.colors.INTERACTIVE_NORMAL
              })
          })
        : (0, i.jsx)(s.SearchBar, {
              ref: g,
              className: l()(c.searchBar, { [c.searchFloating]: t === o.WB.FLOATING }),
              size: s.SearchBar.Sizes.MEDIUM,
              query: n,
              placeholder: a,
              onChange: d,
              onClear: h,
              onKeyDown: f,
              onBlur: m
          });
}
