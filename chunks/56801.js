n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(806966),
    u = n(254494),
    c = n(895924),
    d = n(826298),
    _ = n(360557);
let E = [16, 12, 8, 12],
    f = 32,
    h = 4,
    p = 8;
function m(e) {
    let { className: t, channel: n, sections: a, activeCategoryIndex: m, filteredSectionId: I, onSectionClick: T, applicationCommandListRef: g } = e,
        S = i.useRef(null),
        A = i.useCallback(
            (e, t) => {
                var n;
                let r = 2 * h;
                return (null === (n = a[t + 1]) || void 0 === n ? void 0 : n.type) === c.Qi.BUILT_IN && (r += p), f + r;
            },
            [a]
        ),
        v = i.useCallback(
            (e, t) => {
                var n;
                if (!t) return 0 === e ? 0 : 2 * h;
                return (null === (n = a[e + 1]) || void 0 === n ? void 0 : n.type) === c.Qi.BUILT_IN ? 0 : 2 * h;
            },
            [a]
        ),
        N = i.useCallback(
            (e, t) => {
                let i = a[t];
                if (null == i) return;
                let o = (0, d.ky)(i),
                    l = i.type === c.Qi.BUILT_IN ? h : 0,
                    u = f - 2 * l,
                    E = (0, r.jsx)(o, {
                        channel: n,
                        section: i,
                        isSelected: null != I ? i.id === I : m === t,
                        padding: l,
                        width: u,
                        height: u,
                        selectable: !0
                    }),
                    p = i.type !== c.Qi.BUILT_IN && t < a.length - 1 && a[t + 1].type === c.Qi.BUILT_IN;
                return (0, r.jsxs)(
                    'div',
                    {
                        className: _.section,
                        children: [
                            (0, r.jsx)(s.Tooltip, {
                                text: i.name,
                                position: 'right',
                                children: (e) => {
                                    let { onClick: t, ...n } = e;
                                    return (0, r.jsx)(s.Clickable, {
                                        'aria-label': i.name,
                                        onClick: () => {
                                            T(i), null == t || t();
                                        },
                                        ...n,
                                        children: E
                                    });
                                }
                            }),
                            p ? (0, r.jsx)('hr', { className: _.builtInSeparator }) : null
                        ]
                    },
                    i.id
                );
            },
            [m, n, T, a, I]
        );
    return 0 === a.length
        ? null
        : (0, r.jsx)('div', {
              className: o()(t, _.wrapper),
              children: (0, r.jsx)(u.Z, {
                  categoryListRef: S,
                  expressionsListRef: g,
                  store: l.Xn,
                  categories: a,
                  className: _.list,
                  renderCategoryListItem: N,
                  rowCount: a.length,
                  categoryHeight: A,
                  listPadding: E,
                  getScrollOffsetForIndex: v
              })
          });
}
