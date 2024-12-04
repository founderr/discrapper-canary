n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(49898),
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
    return t === o.GlobalDiscoverySearchBarState.COLLAPSED
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
              className: a()(c.searchBar, { [c.searchFloating]: t === o.GlobalDiscoverySearchBarState.FLOATING }),
              size: s.SearchBar.Sizes.MEDIUM,
              query: n,
              placeholder: l,
              onChange: d,
              onClear: h,
              onKeyDown: f,
              onBlur: m
          });
}
