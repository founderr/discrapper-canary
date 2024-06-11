"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("481060"),
  d = s("987997"),
  u = s("78839"),
  c = s("981631"),
  S = s("689938"),
  E = s("535273"),
  T = s("822293"),
  _ = s("845904");

function I(e) {
  let {
    onClickManageSubscription: t
  } = e, s = (0, r.useStateFromStores)([u.default], () => u.default.getSubscriptions()), i = n.useMemo(() => Object.values(null != s ? s : {}).filter(e => e.type === c.SubscriptionTypes.APPLICATION && e.status !== c.SubscriptionStatusTypes.ENDED), [s]);
  return 0 === i.length ? null : (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: E.__invalid_sectionTitle,
      children: S.default.Messages.APPLICATION_USER_SUBSCRIPTIONS_TITLE
    }), (0, a.jsx)(o.Spacer, {
      size: 4
    }), (0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      className: E.sectionDescription,
      children: S.default.Messages.APPLICATION_USER_SUBSCRIPTIONS_DESCRIPTION
    }), (0, a.jsx)(o.Spacer, {
      size: 24
    }), (0, a.jsxs)("div", {
      className: l()(T.guildBoostingSubscriptionRow, E.card),
      children: [(0, a.jsx)("img", {
        src: _,
        alt: "",
        className: E.bannerImage
      }), (0, a.jsxs)("div", {
        className: E.textContainer,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: E.header,
          children: S.default.Messages.APPLICATION_USER_SUBSCRIPTIONS_TITLE
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          className: E.description,
          children: S.default.Messages.APPLICATION_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({
            numSubscriptions: i.length
          })
        })]
      }), (0, a.jsx)(d.default, {
        color: o.Button.Colors.BRAND,
        onClick: t,
        children: S.default.Messages.APPLICATION_MANAGE_SUBSCRIPTIONS_BUTTON
      })]
    })]
  })
}