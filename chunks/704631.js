"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("82950"),
  i = a("981631"),
  r = a("921944"),
  o = a("689938"),
  u = a("524094");

function d(e) {
  let {
    guild: t,
    markAsDismissed: d
  } = e;
  return (0, n.jsx)(l.default, {
    guild: t,
    onDismissed: () => d(r.ContentDismissActionType.UNKNOWN),
    onClick: function() {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(a.bind(a, "650233"));
        return t => (0, n.jsx)(e, {
          ...t
        })
      })
    },
    message: o.default.Messages.HUB_LINK_CHANNEL_NOTICE_BODY,
    cta: o.default.Messages.LEARN_MORE,
    trackingSource: i.ChannelNoticeCtaSources.HUB_LINK_NOTICE,
    type: i.ChannelNoticeTypes.HUB_LINK,
    image: u
  })
}