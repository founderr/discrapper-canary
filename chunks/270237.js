s.d(t, {
  Z: function() {
    return i
  }
});
var n = s(470079),
  a = s(661111);

function i(e) {
  n.useEffect(() => {
    if (null != e) return a.Z.lockChangeLog(e), () => {
      a.Z.unlockChangeLog(e)
    }
  }, [e])
}