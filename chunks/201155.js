"use strict";
n.r(e), n.d(e, {
  useShowApplicationInGDM: function() {
    return r
  }
});
var i = n("65597"),
  u = n("42203"),
  a = n("337026");

function r(t) {
  let e = (0, i.default)([u.default], () => u.default.getChannel(t)),
    {
      enabled: n
    } = a.default.useExperiment({
      location: "baec9c_1"
    });
  return n && function(t) {
    return null != t && (!!t.isMultiUserDM() || !!t.isDM() && !t.isSystemDM() && null == t.rawRecipients.find(t => t.bot))
  }(e)
}