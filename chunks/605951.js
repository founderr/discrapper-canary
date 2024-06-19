n.d(t, {
  Z: function() {
    return s
  }
});
var l = n(470079),
  i = n(914010);

function s(e) {
  l.useLayoutEffect(() => {
    let t = null;

    function n() {
      let n = i.Z.getGuildId();
      if (n !== t) t = null != n ? n : null, e(null != n ? n : null, !1)
    }
    return i.Z.addChangeListener(n), n(), () => {
      i.Z.removeChangeListener(n)
    }
  }, [e])
}