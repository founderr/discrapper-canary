"use strict";
a.r(t);
var n = a("735250");
a("470079");
var r = a("442837"),
  i = a("481060"),
  s = a("863249"),
  l = a("944163"),
  o = a("616230"),
  c = a("430824"),
  d = a("650461"),
  u = a("689938"),
  f = a("418571");
t.default = e => {
  let {
    guildId: t
  } = e, a = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t)), m = (0, r.useStateFromStores)([l.default, d.default], () => {
    var e, a, n;
    return null !== (n = null === (a = d.default.getStateForGuild(t)) || void 0 === a ? void 0 : null === (e = a.progress) || void 0 === e ? void 0 : e.verificationForm) && void 0 !== n ? n : l.default.get(t)
  });
  return null == a ? null : (0, n.jsxs)("div", {
    className: f.slideContent,
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: u.default.Messages.CLAN_SETUP_APPLICATION_TITLE
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: u.default.Messages.CLAN_SETUP_APPLICATION_SUBTITLE
    }), (0, n.jsx)("div", {
      children: (0, n.jsx)(o.default, {
        guild: a,
        isClanContext: !0,
        onFieldsSave: (e, t) => (s.default.updateVerificationFormFieldsLocal(e, t), Promise.resolve()),
        onDescriptionSave: (e, t) => (s.default.updateVerificationFormDescriptionLocal(e, t), Promise.resolve()),
        verificationForm: m
      })
    })]
  })
}