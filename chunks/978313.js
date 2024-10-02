a.d(n, {
    Z: function () {
        return g;
    }
}),
    a(47120);
var t = a(735250),
    i = a(470079),
    o = a(120356),
    r = a.n(o),
    l = a(657707),
    s = a(793030),
    c = a(692547),
    d = a(481060),
    u = a(962250),
    m = a(810568),
    p = a(689938),
    _ = a(51527);
function g(e) {
    let { detectedGame: n, trackAction: a } = e,
        [o, g] = i.useState((null == n ? void 0 : n.summaryLocalized) != null),
        [f, x] = i.useState(!0),
        [v, h] = i.useState(!1),
        I = i.useRef(null),
        { width: E, height: A } = (0, u.b)();
    return (i.useEffect(() => {
        let e = I.current;
        null != e && h(e.scrollHeight - e.clientHeight > 1);
    }, [I, E, A]),
    null == n.summary)
        ? null
        : (0, t.jsxs)('div', {
              className: r()(_.column, _.gapSm),
              children: [
                  null != n.summaryLocalized &&
                      (0, t.jsxs)('div', {
                          className: r()(_.row, _.gapSm),
                          children: [
                              (0, t.jsx)(l.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: 'xs'
                              }),
                              (0, t.jsx)(s.xv, {
                                  variant: 'text-xs/medium',
                                  color: 'header-secondary',
                                  children: o ? p.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({ onShowOriginal: () => g(!1) }) : p.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({ onShowTranslated: () => g(!0) })
                              })
                          ]
                      }),
                  (0, t.jsx)(s.xv, {
                      ref: I,
                      lineClamp: f ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: o ? n.summaryLocalized : n.summary
                  }),
                  (v || !f) &&
                      (0, t.jsx)(d.Clickable, {
                          className: _.clickable,
                          onClick: () => {
                              a(f ? m.as.ShowMore : m.as.ShowLess), x(!f);
                          },
                          children: (0, t.jsx)(s.xv, {
                              variant: 'text-sm/semibold',
                              children: f ? p.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : p.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                          })
                      })
              ]
          });
}
