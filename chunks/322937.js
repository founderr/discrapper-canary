n.d(t, {
  $: function() {
    return a
  }
});
var l = n(470079),
  i = n(774078),
  s = n(202107);

function a(e) {
  let {
    communicationDisabledUntil: t,
    userId: n,
    guildId: a
  } = null != e ? e : {}, r = (0, i.Z)(null != t ? Date.parse(t) : Date.now()), o = r.seconds, c = (0, l.useRef)(null);
  return (0, l.useEffect)(() => {
    if (null == e || null == a || null == n) {
      clearTimeout(c.current);
      return
    }
    return o <= 0 && null == c.current && (c.current = setTimeout(() => {
      s.Z.clearGuildMemberTimeout(a, n)
    }, 1e3)), () => {
      null != c.current && (clearTimeout(c.current), c.current = null)
    }
  }, [a, n, o, t, e]), r
}