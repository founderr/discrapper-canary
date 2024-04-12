"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
}), a("47120"), a("653041");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("812206"),
  r = a("82950"),
  o = a("434404"),
  u = a("106976"),
  d = a("270144"),
  c = a("981631"),
  f = a("689938"),
  E = a("466389");

function h(e) {
  let {
    guild: t
  } = e, a = (0, d.useUnseenEndedApplicationSubscriptionEntitlements)(t), h = () => (0, u.dismissApplicationSubscriptionExpirationNotice)(t.id), _ = s.useMemo(() => new Set(a.map(e => e.applicationId)), [a]), C = (0, l.useStateFromStoresArray)([i.default], () => {
    let e = [];
    for (let t of _) {
      let a = i.default.getApplication(t);
      null != a && e.push(a)
    }
    return e
  }, [_]);
  if (0 === C.length) return null;
  let m = "";
  return m = 1 === C.length ? f.default.Messages.ONE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: C[0].name
  }) : 2 === C.length ? f.default.Messages.TWO_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: C[0].name,
    b: C[1].name
  }) : 3 === C.length ? f.default.Messages.THREE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: C[0].name,
    b: C[1].name,
    c: C[2].name
  }) : f.default.Messages.MORE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT, (0, n.jsx)(r.default, {
    guild: t,
    onDismissed: h,
    message: m,
    type: c.ChannelNoticeTypes.APPLICATION_SUBSCRIPTION_EXPIRATION,
    image: E,
    onClick: () => {
      h(), o.default.open(t.id, c.GuildSettingsSections.INTEGRATIONS)
    },
    imageMarginTop: 6,
    imageMarginX: 46,
    cta: f.default.Messages.APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CTA
  })
}