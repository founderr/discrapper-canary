var n,
    l,
    o,
    s,
    r = i(442837),
    a = i(570140);
let u = !1,
    d = !1;
class c extends (s = r.ZP.Store) {
    get keepOpen() {
        return d;
    }
    get enabled() {
        return u;
    }
}
(o = 'SoundboardOverlayStore'),
    (l = 'displayName') in (n = c)
        ? Object.defineProperty(n, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[l] = o),
    (t.Z = new c(a.Z, {
        SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((u = e.enabled), e.enabled)) {
                var t;
                d = null !== (t = e.keepOpen) && void 0 !== t && t;
            }
        }
    }));
