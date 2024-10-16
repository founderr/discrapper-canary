a.d(n, {
    Z: function () {
        return p;
    }
}),
    a(47120);
var t = a(735250),
    r = a(470079),
    s = a(120356),
    i = a.n(s),
    o = a(657707),
    l = a(793030),
    c = a(692547),
    d = a(481060),
    u = a(885006),
    _ = a(810568),
    E = a(221370),
    m = a(689938),
    I = a(51527),
    A = a(110367);
function p(e) {
    let { detectedGame: n, trackAction: a } = e,
        [s, p] = r.useState((null == n ? void 0 : n.summaryLocalized) != null),
        [g, f] = r.useState(!0),
        [T, O] = r.useState(!1),
        R = r.useRef(null),
        { width: N, height: h } = (0, u.Z)();
    return (r.useEffect(() => {
        let e = R.current;
        null != e && O(e.scrollHeight - e.clientHeight > 1 || !g);
    }, [R, N, h, g]),
    null == n.summary)
        ? null
        : (0, t.jsxs)('div', {
              className: i()(I.column, I.gapMd),
              children: [
                  null != n.summaryLocalized &&
                      (0, t.jsxs)('div', {
                          className: i()(I.row, I.gapSm),
                          children: [
                              (0, t.jsx)(o.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: 'xs'
                              }),
                              (0, t.jsx)(l.xv, {
                                  variant: 'text-xs/medium',
                                  color: 'header-secondary',
                                  children: s ? m.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({ onShowOriginal: () => p(!1) }) : m.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({ onShowTranslated: () => p(!0) })
                              })
                          ]
                      }),
                  (0, t.jsx)(l.xv, {
                      ref: R,
                      lineClamp: g ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: s ? n.summaryLocalized : n.summary
                  }),
                  T &&
                      (0, t.jsx)(d.Clickable, {
                          className: I.clickable,
                          onClick: () => {
                              a(g ? _.as.ShowMore : _.as.ShowLess), f(!g);
                          },
                          children: (0, t.jsx)(l.xv, {
                              variant: 'text-sm/semibold',
                              children: g ? m.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : m.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                          })
                      }),
                  (0, t.jsx)(E.Z, {
                      className: A.platforms,
                      detectedGame: n
                  })
              ]
          });
}
