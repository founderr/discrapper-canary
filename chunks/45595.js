t.d(s, {
    H: function () {
        return E;
    },
    Z: function () {
        return u;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(699581),
    l = t(772848),
    c = t(110924),
    d = t(725424);
let _ = (0, l.Z)();
function E() {
    return (0, n.jsx)('div', {
        id: _,
        className: d.noticeBar
    });
}
function u(e) {
    let { show: s, children: t } = e,
        [n, i] = a.useState(!1),
        [l, E] = a.useState(!1),
        u = (0, c.Z)(s);
    !s || !1 !== u || n || l ? !s && u && !l && !n && (E(!0), setTimeout(() => E(!1), 500)) : (i(!0), setTimeout(() => i(!1), 500));
    let I = window.document.getElementById(_);
    return null != t && a.isValidElement(t) && null != I && (s || n || l)
        ? o.createPortal(
              a.cloneElement(t, {
                  className: r()({
                      [d.slideIn]: n,
                      [d.slideOut]: l
                  })
              }),
              I
          )
        : null;
}
