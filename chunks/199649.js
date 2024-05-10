"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("194359"),
  i = n("631937"),
  r = n("699516"),
  o = n("63063"),
  u = n("862679"),
  d = n("981631"),
  c = n("689938");

function f(e) {
  let {
    channel: t,
    children: f
  } = e, h = (0, l.useStateFromStores)([r.default], () => r.default.isBlocked(t.getRecipientId()));
  (0, i.default)(t.id);
  let m = t.isSystemDM(),
    p = h && !m && !t.isMultiUserDM(),
    E = {};
  return m ? (E.message = c.default.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION, E.subtitle = c.default.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION_SUBTEXT, E.buttonText = c.default.Messages.LEARN_MORE, E.onButtonClick = () => open(o.default.getArticleURL(d.HelpdeskArticles.SYSTEM_DMS)), E.imageSrc = n("780961")) : p && (E.message = c.default.Messages.DM_VERIFICATION_TEXT_BLOCKED, E.buttonText = c.default.Messages.UNBLOCK, E.onButtonClick = () => {
    s.default.unblockUser(t.getRecipientId())
  }), (0, a.jsx)(u.default, {
    ...E,
    children: f
  })
}