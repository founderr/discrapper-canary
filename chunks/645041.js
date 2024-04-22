"use strict";
a.r(t), a.d(t, {
  markContentAsDismissed: function() {
    return h
  },
  useIsContentDismissed: function() {
    return E
  }
});
var n = a("442837"),
  s = a("524437"),
  l = a("675478"),
  i = a("581883"),
  r = a("626135"),
  o = a("915486"),
  u = a("981631"),
  d = a("921944"),
  c = a("526761");

function f(e, t) {
  let a = i.default.getDismissedGuildContent(t);
  return null != a && (0, o.hasBit)(a, e)
}

function E(e, t) {
  return (0, n.useStateFromStores)([i.default], () => f(e, t))
}

function h(e, t, a, n) {
  (0, l.updateUserGuildSettings)(t, a => {
    if (f(e, t)) return !1;
    a.dismissedGuildContent = (0, o.addBit)(a.dismissedGuildContent, e)
  }, c.UserSettingsDelay.INFREQUENT_USER_ACTION), a && r.default.track(u.AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, {
    type: s.DismissibleGuildContent[e],
    guild_id: t,
    action: null != n ? n : d.ContentDismissActionType.UNKNOWN
  })
}