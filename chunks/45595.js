t.d(s, {
    H: function () {
        return _;
    },
    Z: function () {
        return E;
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
let u = (0, l.Z)();
function _() {
    return (0, n.jsx)('div', {
        id: u,
        className: d.noticeBar
    });
}
function E(e) {
    let { show: s, children: t } = e,
        [n, i] = a.useState(!1),
        [l, _] = a.useState(!1),
        E = (0, c.Z)(s);
    !s || !1 !== E || n || l ? !s && E && !l && !n && (_(!0), setTimeout(() => _(!1), 500)) : (i(!0), setTimeout(() => i(!1), 500));
    let T = window.document.getElementById(u);
    return null != t && a.isValidElement(t) && null != T && (s || n || l)
        ? o.createPortal(
              a.cloneElement(t, {
                  className: r()({
                      [d.slideIn]: n,
                      [d.slideOut]: l
                  })
              }),
              T
          )
        : null;
}
