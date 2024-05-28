"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120"), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("812206"),
  r = n("82950"),
  o = n("434404"),
  u = n("106976"),
  d = n("270144"),
  c = n("981631"),
  f = n("689938"),
  E = n("466389");

function C(e) {
  let {
    guild: t
  } = e, n = (0, d.useUnseenEndedApplicationSubscriptionEntitlements)(t), C = () => (0, u.dismissApplicationSubscriptionExpirationNotice)(t.id), h = s.useMemo(() => new Set(n.map(e => e.applicationId)), [n]), _ = (0, l.useStateFromStoresArray)([i.default], () => {
    let e = [];
    for (let t of h) {
      let n = i.default.getApplication(t);
      null != n && e.push(n)
    }
    return e
  }, [h]);
  if (0 === _.length) return null;
  let S = "";
  return S = 1 === _.length ? f.default.Messages.ONE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: _[0].name
  }) : 2 === _.length ? f.default.Messages.TWO_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: _[0].name,
    b: _[1].name
  }) : 3 === _.length ? f.default.Messages.THREE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: _[0].name,
    b: _[1].name,
    c: _[2].name
  }) : f.default.Messages.MORE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT, (0, a.jsx)(r.default, {
    guild: t,
    onDismissed: C,
    message: S,
    type: c.ChannelNoticeTypes.APPLICATION_SUBSCRIPTION_EXPIRATION,
    image: E,
    onClick: () => {
      C(), o.default.open(t.id, c.GuildSettingsSections.INTEGRATIONS)
    },
    imageMarginTop: 6,
    imageMarginX: 46,
    cta: f.default.Messages.APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CTA
  })
}