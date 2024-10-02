n.d(a, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var t = n(735250),
    i = n(470079),
    o = n(120356),
    r = n.n(o),
    l = n(657707),
    s = n(793030),
    c = n(692547),
    d = n(481060),
    u = n(962250),
    m = n(810568),
    p = n(221370),
    g = n(689938),
    f = n(51527),
    _ = n(110367);
function x(e) {
    let { detectedGame: a, trackAction: n } = e,
        [o, x] = i.useState((null == a ? void 0 : a.summaryLocalized) != null),
        [v, h] = i.useState(!0),
        [I, E] = i.useState(!1),
        A = i.useRef(null),
        { width: b, height: j } = (0, u.b)();
    return (i.useEffect(() => {
        let e = A.current;
        null != e && E(e.scrollHeight - e.clientHeight > 1);
    }, [A, b, j]),
    null == a.summary)
        ? null
        : (0, t.jsxs)('div', {
              className: r()(f.column, f.gapSm),
              children: [
                  null != a.summaryLocalized &&
                      (0, t.jsxs)('div', {
                          className: r()(f.row, f.gapSm),
                          children: [
                              (0, t.jsx)(l.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: 'xs'
                              }),
                              (0, t.jsx)(s.xv, {
                                  variant: 'text-xs/medium',
                                  color: 'header-secondary',
                                  children: o ? g.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({ onShowOriginal: () => x(!1) }) : g.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({ onShowTranslated: () => x(!0) })
                              })
                          ]
                      }),
                  (0, t.jsx)(s.xv, {
                      ref: A,
                      lineClamp: v ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: o ? a.summaryLocalized : a.summary
                  }),
                  (I || !v) &&
                      (0, t.jsx)(d.Clickable, {
                          className: f.clickable,
                          onClick: () => {
                              n(v ? m.as.ShowMore : m.as.ShowLess), h(!v);
                          },
                          children: (0, t.jsx)(s.xv, {
                              variant: 'text-sm/semibold',
                              children: v ? g.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : g.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                          })
                      }),
                  (0, t.jsx)(p.Z, {
                      className: _.platforms,
                      detectedGame: a
                  })
              ]
          });
}
