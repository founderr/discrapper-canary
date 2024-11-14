var i,
    r,
    l,
    o,
    a = n(442837),
    s = n(570140);
let u = !1,
    c = !1;
class d extends (o = a.ZP.Store) {
    get keepOpen() {
        return c;
    }
    get enabled() {
        return u;
    }
}
(l = 'SoundboardOverlayStore'),
    (r = 'displayName') in (i = d)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new d(s.Z, {
        SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((u = e.enabled), e.enabled)) {
                var t;
                c = null !== (t = e.keepOpen) && void 0 !== t && t;
            }
        }
    }));
