r.d(n, {
    I: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(803997),
    o = r.n(s),
    l = r(489948),
    u = r(821541),
    c = r(780900);
function d(e, n, r) {
    let s = (0, c.G6)(e);
    return a.forwardRef(function (d, f) {
        let { children: _, className: h, dir: p = 'ltr', orientation: m = 'vertical', fade: g = !1, customTheme: E = !1, paddingFix: v = !0, style: I, gap: T, experimental_useStack: b, ...y } = d,
            { scrollerRef: S, getScrollerState: A } = (0, c.Ke)(),
            N = (0, c.t2)(S, m);
        a.useImperativeHandle(
            f,
            () => ({
                getScrollerNode: () => S.current,
                getScrollerState: A,
                ...(0, c.Ue)(S, A, N, m)
            }),
            [S, A, m, N]
        );
        let C = (0, c.tT)({
            paddingFix: v,
            orientation: m,
            dir: p,
            className: h,
            scrollerRef: S,
            specs: s
        });
        return b
            ? (0, i.jsx)(u.K, {
                  gap: T,
                  ref: S,
                  className: o()(h, {
                      [e]: !0,
                      [n]: g,
                      [r]: E
                  }),
                  style: (0, c.uT)(I, m),
                  dir: p,
                  ...y,
                  children: (0, i.jsxs)(l.Jc, {
                      containerRef: S,
                      children: [_, C]
                  })
              })
            : (0, i.jsx)('div', {
                  ref: S,
                  className: o()(h, {
                      [e]: !0,
                      [n]: g,
                      [r]: E
                  }),
                  style: (0, c.uT)(I, m),
                  dir: p,
                  ...y,
                  children: (0, i.jsxs)(l.Jc, {
                      containerRef: S,
                      children: [_, C]
                  })
              });
    });
}
