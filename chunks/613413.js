n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(314910),
    d = n(906467),
    _ = n(857192),
    E = n(835225),
    f = n(117795),
    h = n(565384),
    p = n(535504);
function m() {
    let { debugTrackedData: e, impressions: t } = (0, h.Xo)((e) => ({
            debugTrackedData: e.debugTrackedData,
            impressions: e.impressions
        })),
        n = (0, l.e7)([_.default], () => _.default.isAnalyticsDebuggerEnabled),
        r = (0, l.e7)([d.Z], () => d.Z.isDeveloper),
        [o, m] = a.useState(!1),
        { name: I, ...T } = null != e ? e : {},
        g = null != I;
    return r && n
        ? (0, i.jsx)(c.ZP, {
              children: (0, i.jsxs)('div', {
                  className: s()(p.container, {
                      [p.containerMinimized]: o,
                      [p.notTracked]: !g
                  }),
                  children: [
                      (0, i.jsx)(u.Clickable, {
                          className: p.minimizeButton,
                          onClick: () => {
                              m(!o);
                          },
                          children: o ? (0, i.jsx)(E.Z, {}) : (0, i.jsx)(f.Z, {})
                      }),
                      (0, i.jsxs)('div', {
                          className: s()(p.content, { [p.contentMinimized]: o }),
                          children: [
                              (0, i.jsxs)(u.Text, {
                                  className: s()(p.label, { [p.notTracked]: !g }),
                                  variant: 'text-xxs/normal',
                                  children: [
                                      g
                                          ? (0, i.jsx)(u.CircleCheckIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: p.iconTracked
                                            })
                                          : (0, i.jsx)(u.CircleXIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: p.iconNotTracked
                                            }),
                                      null != I ? I : '(untracked)'
                                  ]
                              }),
                              (0, i.jsx)('div', {
                                  className: p.current,
                                  children: JSON.stringify(T, void 0, 2)
                              }),
                              (0, i.jsx)(u.Text, {
                                  className: s()(p.label, { [p.notTracked]: !g }),
                                  variant: 'text-xxs/normal',
                                  children: 'impressions stack'
                              }),
                              (0, i.jsx)('div', {
                                  className: p.stack,
                                  children: JSON.stringify(t, void 0, 2)
                              })
                          ]
                      })
                  ]
              })
          })
        : null;
}
