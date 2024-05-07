"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("442837"),
  i = s("481060"),
  E = s("863249"),
  l = s("944163"),
  _ = s("616230"),
  r = s("430824"),
  u = s("650461"),
  o = s("689938"),
  T = s("418571");
t.default = e => {
  let {
    guildId: t
  } = e, s = (0, n.useStateFromStores)([r.default], () => r.default.getGuild(t)), d = (0, n.useStateFromStores)([l.default, u.default], () => {
    var e, s, a;
    return null !== (a = null === (s = u.default.getStateForGuild(t)) || void 0 === s ? void 0 : null === (e = s.progress) || void 0 === e ? void 0 : e.verificationForm) && void 0 !== a ? a : l.default.get(t)
  });
  return null == s ? null : (0, a.jsxs)("div", {
    className: T.slideContent,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: T.title,
      children: o.default.Messages.CLAN_SETUP_APPLICATION_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: T.subtitle,
      children: o.default.Messages.CLAN_SETUP_APPLICATION_SUBTITLE
    }), (0, a.jsx)("div", {
      className: T.maxWidthContainer,
      children: (0, a.jsx)(_.default, {
        guild: s,
        isClanContext: !0,
        onFieldsSave: (e, t) => (E.default.updateVerificationFormFieldsLocal(e, t), Promise.resolve()),
        onDescriptionSave: (e, t) => (E.default.updateVerificationFormDescriptionLocal(e, t), Promise.resolve()),
        verificationForm: d
      })
    })]
  })
}