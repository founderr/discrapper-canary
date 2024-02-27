"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("819689"),
  d = s("249561"),
  r = s("300322"),
  u = s("957255"),
  o = s("697218"),
  c = s("228220"),
  f = s("49111"),
  E = s("782340");

function g(e, t) {
  var s;
  let g = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    M = (0, r.useIsActiveChannelOrUnarchivableThread)(t),
    _ = (0, n.useStateFromStores)([u.default], () => u.default.can(f.Permissions.MANAGE_MESSAGES, t), [t]),
    h = e.author.id === (null == g ? void 0 : g.id) || (null === (s = e.interactionMetadata) || void 0 === s ? void 0 : s.user_id) === (null == g ? void 0 : g.id) || _;
  return e.state === f.MessageStates.SENDING || !h || f.MessageTypesSets.UNDELETABLE.has(e.type) || !M ? null : (0, a.jsx)(l.MenuItem, {
    id: "delete",
    label: E.default.Messages.DELETE_MESSAGE,
    action: function(s) {
      e.state === f.MessageStates.SEND_FAILED ? i.default.deleteMessage(t.id, e.id, !0) : s.shiftKey ? i.default.deleteMessage(t.id, e.id) : d.default.confirmDelete(t, e, !0)
    },
    color: "danger",
    icon: c.default
  })
}