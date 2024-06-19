l.d(n, {
  Z: function() {
    return o
  }
});
var s = l(470079),
  t = l(442837),
  i = l(749210),
  a = l(594174);

function o(e) {
  let n = (0, t.e7)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
  return s.useEffect(() => {
    null == n && (null == e ? void 0 : e.creator_id) != null && i.Z.requestMembersById(e.guild_id, e.creator_id)
  }, [e, n]), n
}