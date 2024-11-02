n.d(t, {
    h: function () {
        return u;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(15127),
    o = n(512983),
    l = n(276580);
let u = i.forwardRef(function (e, t) {
    var n;
    let { children: u, className: c, titleClassName: d, title: f, icon: _, disabled: h, htmlFor: p, tag: m = 'h5', ...g } = e,
        E = i.useId(),
        v = null !== (n = g.titleId) && void 0 !== n ? n : E;
    return (0, r.jsx)('div', {
        ref: t,
        className: c,
        children:
            null != f
                ? (0, r.jsx)(a.HeadingLevel, {
                      component: (0, r.jsxs)('div', {
                          className: l.sectionTitle,
                          children: [
                              _,
                              null != f
                                  ? (0, r.jsx)(o.v, {
                                        tag: m,
                                        id: v,
                                        htmlFor: p,
                                        disabled: h,
                                        className: d,
                                        children: f
                                    })
                                  : null
                          ]
                      }),
                      children: (0, r.jsx)('div', {
                          className: l.children,
                          children: (0, r.jsx)(s.ol, {
                              titleId: v,
                              children: u
                          })
                      })
                  })
                : u
    });
});
