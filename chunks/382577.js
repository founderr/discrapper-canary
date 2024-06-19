s.d(t, {
  Z: function() {
    return r
  }
});
var n = s(470079),
  i = s(570140);

function r(e) {
  let t = (0, n.useRef)(e);
  (0, n.useEffect)(() => {
    t.current = e
  }, [e]), (0, n.useEffect)(() => {
    if (__OVERLAY__) {
      function e(e) {
        e.locked && t.current()
      }
      return i.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", e), () => {
        i.Z.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
      }
    }
  }, [])
}