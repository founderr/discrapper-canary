"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("863249"),
  r = n("944163"),
  o = n("616230"),
  u = n("430824"),
  d = n("650461"),
  c = n("689938"),
  f = n("597338");
t.default = e => {
  let {
    guildId: t
  } = e, n = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(t)), E = (0, s.useStateFromStores)([r.default, d.default], () => {
    var e, n, a;
    return null !== (a = null === (n = d.default.getStateForGuild(t)) || void 0 === n ? void 0 : null === (e = n.progress) || void 0 === e ? void 0 : e.verificationForm) && void 0 !== a ? a : r.default.get(t)
  });
  return null == n ? null : (0, a.jsxs)("div", {
    className: f.slideContent,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: c.default.Messages.CLAN_SETUP_APPLICATION_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: c.default.Messages.CLAN_SETUP_APPLICATION_SUBTITLE
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(o.default, {
        guild: n,
        isClanContext: !0,
        onFieldsSave: (e, t) => (i.default.updateVerificationFormFieldsLocal(e, t), Promise.resolve()),
        onDescriptionSave: (e, t) => (i.default.updateVerificationFormDescriptionLocal(e, t), Promise.resolve()),
        verificationForm: E
      })
    })]
  })
}