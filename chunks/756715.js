n.r(t),
    n.d(t, {
        Anchor: function () {
            return f;
        }
    });
var r = n(411104);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(532712),
    u = n(1561),
    c = n(84735),
    d = n(335854),
    _ = n(645499),
    E = n(235585);
function f(e) {
    let { href: t, onClick: n, className: r, children: o, rel: f, target: h, useDefaultUnderlineStyles: p = !0, title: m, style: I, focusProps: T, ...g } = e;
    null != t && null == n && (n = d.X.getDefaultLinkInterceptor(t));
    let S = a.useContext(l.g),
        A = {
            className: s()(E.anchor, { [E.anchorUnderlineOnHover]: p }, r),
            href: t,
            onClick: n,
            rel: null != f ? f : void 0,
            target: null != h ? h : void 0,
            title: null != m ? m : void 0,
            style: null != I ? I : void 0
        };
    return (null != t && !(0, _.B)(t) && ((A.rel = 'noreferrer noopener'), (A.target = '_blank')), S && delete A.href, null != n)
        ? (0, i.jsx)(u.P, {
              tag: 'a',
              ...g,
              ...A,
              onClick: n,
              focusProps: T,
              children: o
          })
        : (0, i.jsx)(c.t, {
              ...T,
              children: (0, i.jsx)('a', {
                  ...g,
                  ...A,
                  children: o
              })
          });
}
