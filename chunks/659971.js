var i,
    r,
    l,
    a,
    o = n(873546),
    s = n(442837),
    c = n(570140);
let d = !1;
class u extends (a = s.ZP.Store) {
    getIsOpen() {
        return !o.tq || d;
    }
}
(l = 'MobileWebSidebarStore'),
    (r = 'displayName') in (i = u)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new u(c.Z, {
        MOBILE_WEB_SIDEBAR_OPEN: function () {
            d = !0;
        },
        MOBILE_WEB_SIDEBAR_CLOSE: function () {
            d = !1;
        }
    }));
