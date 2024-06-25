n.d(t, {
  o: function() {
    return a
  }
});
var l = n(399606),
  i = n(592125),
  s = n(587100);

function a(e) {
  let t = (0, l.e7)([i.Z], () => i.Z.getChannel(e)),
    {
      enabled: n
    } = s.Z.useExperiment({
      location: "baec9c_1"
    });
  return n && function(e) {
    return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot))
  }(t)
}