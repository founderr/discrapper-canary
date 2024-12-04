n.d(t, {
    I: function () {
        return c;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(803997),
    s = n.n(a),
    o = n(489948),
    l = n(821541),
    u = n(780900);
function c(e, t, n) {
    let a = (0, u.G6)(e);
    return i.forwardRef(function (c, d) {
        let { children: f, className: _, dir: p = 'ltr', orientation: h = 'vertical', fade: m = !1, customTheme: g = !1, paddingFix: E = !0, style: v, gap: I, experimental_useStack: T, ...b } = c,
            { scrollerRef: S, getScrollerState: y } = (0, u.Ke)(),
            A = (0, u.t2)(S, h);
        i.useImperativeHandle(
            d,
            () => ({
                getScrollerNode: () => S.current,
                getScrollerState: y,
                ...(0, u.Ue)(S, y, A, h)
            }),
            [S, y, h, A]
        );
        let N = (0, u.tT)({
            paddingFix: E,
            orientation: h,
            dir: p,
            className: _,
            scrollerRef: S,
            specs: a
        });
        return T
            ? (0, r.jsx)(l.K, {
                  gap: I,
                  ref: S,
                  className: s()(_, {
                      [e]: !0,
                      [t]: m,
                      [n]: g
                  }),
                  style: (0, u.uT)(v, h),
                  dir: p,
                  ...b,
                  children: (0, r.jsxs)(o.Jc, {
                      containerRef: S,
                      children: [f, N]
                  })
              })
            : (0, r.jsx)('div', {
                  ref: S,
                  className: s()(_, {
                      [e]: !0,
                      [t]: m,
                      [n]: g
                  }),
                  style: (0, u.uT)(v, h),
                  dir: p,
                  ...b,
                  children: (0, r.jsxs)(o.Jc, {
                      containerRef: S,
                      children: [f, N]
                  })
              });
    });
}
