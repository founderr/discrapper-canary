"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("481060"),
  d = s("78839"),
  u = s("981631"),
  c = s("689938"),
  S = s("431963"),
  E = s("822293"),
  T = s("834300");

function _(e) {
  let {
    onClickManageSubscription: t
  } = e, s = (0, r.useStateFromStores)([d.default], () => d.default.getSubscriptions()), i = n.useMemo(() => Object.values(null != s ? s : {}).filter(e => e.type === u.SubscriptionTypes.GUILD).filter(e => e.status !== u.SubscriptionStatusTypes.ENDED), [s]);
  return 0 === i.length ? null : (0, a.jsxs)("div", {
    className: S.container,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: S.__invalid_sectionTitle,
      children: c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
    }), (0, a.jsx)(o.Spacer, {
      size: 4
    }), (0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      className: S.sectionDescription,
      children: c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_USER_SUBSCRIPTIONS_DESCRIPTION
    }), (0, a.jsx)(o.Spacer, {
      size: 24
    }), (0, a.jsxs)("div", {
      className: l()(E.guildBoostingSubscriptionRow, S.card),
      children: [(0, a.jsx)("img", {
        src: T,
        alt: "",
        className: S.handImage
      }), (0, a.jsxs)("div", {
        className: S.textContainer,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: S.header,
          children: c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          className: S.description,
          children: c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({
            numSubscriptions: i.length
          })
        })]
      }), (0, a.jsx)(o.Button, {
        color: o.Button.Colors.CUSTOM,
        size: o.Button.Sizes.SMALL,
        className: S.manageSubscriptionsButton,
        onClick: t,
        children: c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_SUBSCRIPTIONS_BUTTON
      })]
    })]
  })
}