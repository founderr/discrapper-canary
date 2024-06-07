"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var r = n("442837"),
  s = n("481060"),
  i = n("863249"),
  l = n("616230"),
  o = n("430824"),
  c = n("389134"),
  d = n("650461"),
  u = n("689938"),
  f = n("661926");
t.default = e => {
  let {
    guildId: t,
    inSettings: n = !1
  } = e, m = (0, r.useStateFromStores)([o.default], () => o.default.getGuild(t)), h = (0, r.useStateFromStores)([c.default, d.default], () => {
    var e, a;
    return n ? c.default.getState().settings.verificationForm : null === (a = d.default.getStateForGuild(t)) || void 0 === a ? void 0 : null === (e = a.progress) || void 0 === e ? void 0 : e.verificationForm
  });
  return null == m ? null : (0, a.jsxs)("div", {
    className: f.slideContent,
    children: [(0, a.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: n ? u.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP : u.default.Messages.CLAN_SETUP_APPLICATION_TITLE
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: u.default.Messages.CLAN_SETUP_APPLICATION_SUBTITLE
    }), (0, a.jsx)("div", {
      className: f.maxWidthContainer,
      children: (0, a.jsx)(l.default, {
        guild: m,
        isClanContext: !0,
        onFieldsSave: (e, t) => (i.default.updateVerificationFormFieldsLocal(e, [...t]), Promise.resolve()),
        verificationForm: h
      })
    })]
  })
}