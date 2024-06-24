n.d(t, {
  Z: function() {
    return a
  }
});
var s = n(470079),
  i = n(661111);

function a(e) {
  s.useEffect(() => {
    if (null != e) return i.Z.lockChangeLog(e), () => {
      i.Z.unlockChangeLog(e)
    }
  }, [e])
}