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
    let { children: u, className: c, titleClassName: d, title: _, icon: E, disabled: f, htmlFor: h, tag: p = 'h5', ...I } = e,
        m = i.useId(),
        T = null !== (n = I.titleId) && void 0 !== n ? n : m;
    return (0, r.jsx)('div', {
        ref: t,
        className: c,
        children:
            null != _
                ? (0, r.jsx)(a.HeadingLevel, {
                      component: (0, r.jsxs)('div', {
                          className: l.sectionTitle,
                          children: [
                              E,
                              null != _
                                  ? (0, r.jsx)(o.v, {
                                        tag: p,
                                        id: T,
                                        htmlFor: h,
                                        disabled: f,
                                        className: d,
                                        children: _
                                    })
                                  : null
                          ]
                      }),
                      children: (0, r.jsx)('div', {
                          className: l.children,
                          children: (0, r.jsx)(s.ol, {
                              titleId: T,
                              children: u
                          })
                      })
                  })
                : u
    });
});
