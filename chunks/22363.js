var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(646574),
    o = n(543241),
    l = n(747613),
    u = n(533432),
    c = n(149203),
    d = n(185923),
    f = n(744924);
t.Z = (e) => {
    let { accessory: t, pickerIntention: n, headerClassName: i, emojiListRef: _, onKeyDown: h, onFocus: p, autoFocus: m, searchBarRef: g, hasTabWrapper: E, diversitySurrogate: v, isBurstReaction: I, onBurstReactionToggle: S, renderHeader: b } = e,
        T = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.Z, {
                    emojiListRef: _,
                    gridNavigatorId: c.Vr,
                    onKeyDown: h,
                    className: f.searchBar,
                    ref: g,
                    isFullRow: !1,
                    onFocus: p,
                    autoFocus: m,
                    defaultSearchPlaceholder: (0, o.nV)(n, I)
                }),
                n === d.Hz.REACTION
                    ? (0, r.jsx)('div', {
                          className: f.burstToggle,
                          children: (0, r.jsx)(s.Z, {
                              checked: I,
                              onClick: S
                          })
                      })
                    : null,
                null != t
                    ? t
                    : (0, r.jsx)(l.Z, {
                          searchBarRef: g,
                          className: f.diversitySelector,
                          hasTabWrapper: E,
                          selectedSurrogate: v
                      })
            ]
        });
    return (0, r.jsx)('div', {
        className: a()(f.header, i),
        children: null != b ? b(T) : T
    });
};
