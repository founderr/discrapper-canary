n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(49898),
    c = n(149025);
function d(e) {
    let { state: t, query: n, placeholder: l, onTextChange: d, onCollapsedClick: u, onClear: h, onBlur: m, onSubmit: p } = e,
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
    return t === s.GlobalDiscoverySearchBarState.COLLAPSED
        ? (0, i.jsx)(o.Clickable, {
              className: c.searchIcon,
              onClick: _,
              children: (0, i.jsx)(o.MagnifyingGlassIcon, {
                  size: 'md',
                  color: o.tokens.colors.INTERACTIVE_NORMAL
              })
          })
        : (0, i.jsx)(o.SearchBar, {
              ref: g,
              className: a()(c.searchBar, { [c.searchFloating]: t === s.GlobalDiscoverySearchBarState.FLOATING }),
              size: o.SearchBar.Sizes.MEDIUM,
              query: n,
              placeholder: l,
              onChange: d,
              onClear: h,
              onKeyDown: f,
              onBlur: m
          });
}
