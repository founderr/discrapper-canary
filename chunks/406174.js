t.d(s, {
  Z: function() {
    return u
  }
});
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(78839),
  E = t(981631),
  d = t(689938),
  _ = t(729170),
  T = t(875328),
  S = t(834300);

function u(e) {
  let {
    onClickManageSubscription: s
  } = e, t = (0, r.e7)([c.ZP], () => c.ZP.getSubscriptions()), a = i.useMemo(() => Object.values(null != t ? t : {}).filter(e => e.type === E.NYc.GUILD).filter(e => e.status !== E.O0b.ENDED), [t]);
  return 0 === a.length ? null : (0, n.jsxs)("div", {
    className: _.container,
    children: [(0, n.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: _.__invalid_sectionTitle,
      children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
    }), (0, n.jsx)(o.Spacer, {
      size: 4
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      className: _.sectionDescription,
      children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_USER_SUBSCRIPTIONS_DESCRIPTION
    }), (0, n.jsx)(o.Spacer, {
      size: 24
    }), (0, n.jsxs)("div", {
      className: l()(T.guildBoostingSubscriptionRow, _.card),
      children: [(0, n.jsx)("img", {
        src: S,
        alt: "",
        className: _.handImage
      }), (0, n.jsxs)("div", {
        className: _.textContainer,
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: _.header,
          children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
        }), (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          className: _.description,
          children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({
            numSubscriptions: a.length
          })
        })]
      }), (0, n.jsx)(o.Button, {
        color: o.Button.Colors.CUSTOM,
        size: o.Button.Sizes.SMALL,
        className: _.manageSubscriptionsButton,
        onClick: s,
        children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_SUBSCRIPTIONS_BUTTON
      })]
    })]
  })
}