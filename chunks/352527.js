var i,
    l,
    o,
    r,
    s = n(442837),
    a = n(570140);
let u = !1,
    c = !1;
class d extends (r = s.ZP.Store) {
    get keepOpen() {
        return c;
    }
    get enabled() {
        return u;
    }
}
(o = 'SoundboardOverlayStore'),
    (l = 'displayName') in (i = d)
        ? Object.defineProperty(i, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = o),
    (t.Z = new d(a.Z, {
        SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((u = e.enabled), e.enabled)) {
                var t;
                c = null !== (t = e.keepOpen) && void 0 !== t && t;
            }
        }
    }));
