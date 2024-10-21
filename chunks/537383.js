var s = n(200651),
    l = n(192379),
    a = n(461745),
    r = n(631155);
let i = l.forwardRef(function (e, t) {
    let { query: n, onQueryChange: l, onRemoveTag: i, onSelect: o, onSelectionChange: c, selectedSection: d, selectedRow: u, tags: m, sections: h, placeholder: x = '', focusAfterReady: E, isReady: S, 'aria-labelledby': R, 'aria-controls': T } = e;
    return (0, s.jsx)(a.ZP, {
        autoFocus: !0,
        className: r.searchBar,
        maxHeight: 100,
        onQueryChange: l,
        onRemoveTag: i,
        selectedSection: d,
        selectedRow: u,
        onSelect: o,
        onSelectionChange: c,
        placeholder: 0 === m.length ? x : '',
        query: n,
        ref: t,
        size: a.ZP.Sizes.MEDIUM,
        tags: m,
        sections: h,
        focusAfterReady: E,
        isReady: S,
        inputProps: {
            'aria-labelledby': R,
            'aria-controls': T,
            'aria-expanded': !0,
            'aria-activedescendant': 'user-row-'.concat(u)
        }
    });
});
t.Z = i;
