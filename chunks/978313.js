n.d(a, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var t = n(735250),
    i = n(470079),
    r = n(120356),
    o = n.n(r),
    l = n(657707),
    s = n(793030),
    c = n(692547),
    d = n(481060),
    u = n(962250),
    m = n(810568),
    p = n(221370),
    g = n(689938),
    _ = n(51527),
    f = n(110367);
function x(e) {
    let { detectedGame: a, trackAction: n } = e,
        [r, x] = i.useState((null == a ? void 0 : a.summaryLocalized) != null),
        [h, v] = i.useState(!0),
        [I, E] = i.useState(!1),
        A = i.useRef(null),
        { width: b, height: C } = (0, u.b)();
    return (i.useEffect(() => {
        let e = A.current;
        null != e && E(e.scrollHeight - e.clientHeight > 1);
    }, [A, b, C]),
    null == a.summary)
        ? null
        : (0, t.jsxs)('div', {
              className: o()(_.column, _.gapSm),
              children: [
                  null != a.summaryLocalized &&
                      (0, t.jsxs)('div', {
                          className: o()(_.row, _.gapSm),
                          children: [
                              (0, t.jsx)(l.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: 'xs'
                              }),
                              (0, t.jsx)(s.xv, {
                                  variant: 'text-xs/medium',
                                  color: 'header-secondary',
                                  children: r ? g.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({ onShowOriginal: () => x(!1) }) : g.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({ onShowTranslated: () => x(!0) })
                              })
                          ]
                      }),
                  (0, t.jsx)(s.xv, {
                      ref: A,
                      lineClamp: h ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: r ? a.summaryLocalized : a.summary
                  }),
                  (I || !h) &&
                      (0, t.jsx)(d.Clickable, {
                          className: _.clickable,
                          onClick: () => {
                              n(h ? m.as.ShowMore : m.as.ShowLess), v(!h);
                          },
                          children: (0, t.jsx)(s.xv, {
                              variant: 'text-sm/semibold',
                              children: h ? g.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : g.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                          })
                      }),
                  (0, t.jsx)(p.Z, {
                      className: f.platforms,
                      detectedGame: a
                  })
              ]
          });
}
