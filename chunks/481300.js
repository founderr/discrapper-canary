"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("163268"),
  s = n("789536"),
  r = n("689938");

function u(e, t) {
  return null != t && (0, l.isMediaObscured)({
    type: l.ObscuredMediaTypes.GenericMedia,
    media: t
  }, (0, l.shouldRedactExplicitContent)(e)) ? (0, a.jsx)(i.MenuItem, {
    id: "report-image-false-positive",
    label: r.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
    action: () => {
      (0, i.openModalLazy)(async () => {
        let {
          default: i
        } = await n("788679");
        return n => (0, a.jsx)(i, {
          channelId: e.channel_id,
          messageId: e.id,
          mediaItemUrl: t.url,
          ...n
        })
      })
    },
    icon: s.default
  }, "report-image-false-positive") : null
}