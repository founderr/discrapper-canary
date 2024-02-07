"use strict";
n.r(e), n.d(e, {
  default: function() {
    return u
  }
});
var i = n("65597"),
  r = n("42203"),
  o = n("724210");

function u(t) {
  let e = (0, i.default)([r.default], () => {
    let e = r.default.getChannel(t);
    return (null == e ? void 0 : e.parent_id) != null && e.isForumPost() ? r.default.getChannel(null == e ? void 0 : e.parent_id) : null
  });
  return (null == e ? void 0 : e.hasFlag(o.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
}