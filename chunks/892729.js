t.d(s, {
  Z: function() {
    return E
  }
});
var n = t(470079),
  i = t(442837),
  a = t(355467),
  l = t(78839),
  r = t(261744),
  o = t(293810);
let c = [];

function E() {
  let {
    ensureFresh: e = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = (0, r.Z)() === o.PY.SUBSCRIBED, t = (0, i.e7)([l.ZP], () => l.ZP.getActiveGuildSubscriptions()), E = n.useRef(!1);
  return n.useEffect(() => {
    (function(e) {
      var s;
      let {
        ensureFresh: t,
        hasFetched: n,
        hasRoleSubscriptions: i
      } = e, a = l.ZP.getActiveGuildSubscriptions();
      return (null !== (s = null == a ? void 0 : a.length) && void 0 !== s ? s : 0) === 0 && !!i || !!t && !n || !n && !l.ZP.hasFetchedSubscriptions()
    })({
      ensureFresh: e,
      hasRoleSubscriptions: s,
      hasFetched: E.current
    }) && (E.current = !0, a.jg())
  }, [e, s]), null != t ? t : c
}