"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var r = a("442837"),
  i = a("481060"),
  s = a("863249"),
  l = a("616230"),
  o = a("430824"),
  d = a("389134"),
  c = a("650461"),
  u = a("689938"),
  f = a("661926");
t.default = e => {
  let {
    guildId: t,
    error: a,
    inSettings: m = !1
  } = e, E = (0, r.useStateFromStores)([o.default], () => o.default.getGuild(t)), h = (0, r.useStateFromStores)([d.default, c.default], () => {
    var e, a;
    return m ? d.default.getState().settings.verificationForm : null === (a = c.default.getStateForGuild(t)) || void 0 === a ? void 0 : null === (e = a.progress) || void 0 === e ? void 0 : e.verificationForm
  });
  return null == E ? null : (0, n.jsxs)("div", {
    className: f.slideContent,
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: m ? u.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP : u.default.Messages.CLAN_SETUP_APPLICATION_TITLE
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: u.default.Messages.CLAN_SETUP_APPLICATION_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: f.maxWidthContainer,
      children: [null != a && (0, n.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: f.errorText,
        children: a
      }), (0, n.jsx)(l.default, {
        guild: E,
        isClanContext: !0,
        onFieldsSave: (e, t) => (s.default.updateVerificationFormFieldsLocal(e, [...t]), Promise.resolve()),
        verificationForm: h
      })]
    })]
  })
}