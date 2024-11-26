n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(806966),
    u = n(254494),
    c = n(895924),
    d = n(826298),
    f = n(613932);
let _ = [16, 12, 8, 12];
function p(e) {
    let { className: t, channel: n, sections: a, activeCategoryIndex: p, filteredSectionId: h, onSectionClick: m, applicationCommandListRef: g } = e,
        E = i.useRef(null),
        v = i.useCallback(
            (e, t) => {
                var n;
                let r = 8;
                return (null === (n = a[t + 1]) || void 0 === n ? void 0 : n.type) === c.Qi.BUILT_IN && (r += 8), 32 + r;
            },
            [a]
        ),
        I = i.useCallback(
            (e, t) => {
                var n;
                if (!t) return 0 === e ? 0 : 8;
                return (null === (n = a[e + 1]) || void 0 === n ? void 0 : n.type) === c.Qi.BUILT_IN ? 0 : 8;
            },
            [a]
        ),
        T = i.useCallback(
            (e, t) => {
                let i = a[t];
                if (null == i) return;
                let s = (0, d.ky)(i),
                    l = i.type === c.Qi.BUILT_IN ? 4 : 0,
                    u = 32 - 2 * l,
                    _ = (0, r.jsx)(s, {
                        channel: n,
                        section: i,
                        isSelected: null != h ? i.id === h : p === t,
                        padding: l,
                        width: u,
                        height: u,
                        selectable: !0
                    }),
                    g = i.type !== c.Qi.BUILT_IN && t < a.length - 1 && a[t + 1].type === c.Qi.BUILT_IN;
                return (0, r.jsxs)(
                    'div',
                    {
                        className: f.section,
                        children: [
                            (0, r.jsx)(o.Tooltip, {
                                text: i.name,
                                position: 'right',
                                children: (e) => {
                                    let { onClick: t, ...n } = e;
                                    return (0, r.jsx)(o.Clickable, {
                                        'aria-label': i.name,
                                        onClick: () => {
                                            m(i), null == t || t();
                                        },
                                        ...n,
                                        children: _
                                    });
                                }
                            }),
                            g ? (0, r.jsx)('hr', { className: f.builtInSeparator }) : null
                        ]
                    },
                    i.id
                );
            },
            [p, n, m, a, h]
        );
    return 0 === a.length
        ? null
        : (0, r.jsx)('div', {
              className: s()(t, f.wrapper),
              children: (0, r.jsx)(u.Z, {
                  categoryListRef: E,
                  expressionsListRef: g,
                  store: l.Xn,
                  categories: a,
                  className: f.list,
                  renderCategoryListItem: T,
                  rowCount: a.length,
                  categoryHeight: v,
                  listPadding: _,
                  getScrollOffsetForIndex: I
              })
          });
}
