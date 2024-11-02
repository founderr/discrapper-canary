var i,
    r,
    s,
    o,
    a = n(442837),
    l = n(570140);
let c = !1,
    d = !1;
class u extends (o = a.ZP.Store) {
    get keepOpen() {
        return d;
    }
    get enabled() {
        return c;
    }
}
(s = 'SoundboardOverlayStore'),
    (r = 'displayName') in (i = u)
        ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = s),
    (t.Z = new u(l.Z, {
        SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((c = e.enabled), e.enabled)) {
                var t;
                d = null !== (t = e.keepOpen) && void 0 !== t && t;
            }
        }
    }));
