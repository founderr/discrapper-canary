"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  }
});
var n = a("37983");
a("884691");
var r = a("446674"),
  i = a("77078"),
  s = a("477566"),
  u = a("680986"),
  l = a("263024"),
  o = a("300322"),
  d = a("42203"),
  f = a("724210"),
  c = a("782340");

function v(e) {
  let t = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(e.parent_id)),
    a = (0, o.useIsThreadModerator)(e),
    v = (0, u.useExistingPin)(e);
  return (null == t ? void 0 : t.isForumLikeChannel()) && a ? e.hasFlag(f.ChannelFlags.PINNED) ? (0, n.jsx)(i.MenuItem, {
    id: "unpin-thread",
    label: c.default.Messages.UNPIN_POST,
    action: () => l.default.unpin(e)
  }) : (0, n.jsx)(i.MenuItem, {
    id: "pin-thread",
    label: c.default.Messages.PIN_POST,
    action: function() {
      null != v ? s.default.show({
        title: c.default.Messages.FORUM_PIN_CONFIRM_TITLE,
        body: c.default.Messages.FORUM_PIN_CONFIRM_BODY,
        onConfirm: async () => {
          await l.default.unpin(v), l.default.pin(e)
        }
      }) : l.default.pin(e)
    }
  }) : null
}