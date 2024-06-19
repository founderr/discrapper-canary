n.d(t, {
  Z: function() {
    return s
  }
}), n(757143);
var l = n(689938);
let i = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function s(e) {
  let t = l.Z.Messages.ACTIVITY_PANEL_GO_LIVE;
  return null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName), {
    sanitizedTitle: t.replace(i, ""),
    title: t
  }
}