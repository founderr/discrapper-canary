"use strict";
n.r(e), n.d(e, {
  getNativeContextMenuChannelAnalytics: function() {
    return o
  }
});
var i = n("18494"),
  r = n("724210");

function o() {
  var t;
  let e = null !== (t = i.default.getCurrentlySelectedChannelId()) && void 0 !== t ? t : void 0;
  return null != e && (0, r.isStaticChannelRoute)(e) ? {
    channel_static_route: e
  } : {
    channel_id: e
  }
}