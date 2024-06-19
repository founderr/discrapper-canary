t.d(s, {
  Z: function() {
    return I
  }
});
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(987997),
  E = t(78839),
  d = t(981631),
  _ = t(689938),
  T = t(668734),
  S = t(875328),
  u = t(845904);

function I(e) {
  let {
    onClickManageSubscription: s
  } = e, t = (0, r.e7)([E.ZP], () => E.ZP.getSubscriptions()), a = i.useMemo(() => Object.values(null != t ? t : {}).filter(e => e.type === d.NYc.APPLICATION && e.status !== d.O0b.ENDED), [t]);
  return 0 === a.length ? null : (0, n.jsxs)("div", {
    className: T.container,
    children: [(0, n.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: T.__invalid_sectionTitle,
      children: _.Z.Messages.APPLICATION_USER_SUBSCRIPTIONS_TITLE
    }), (0, n.jsx)(o.Spacer, {
      size: 4
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      className: T.sectionDescription,
      children: _.Z.Messages.APPLICATION_USER_SUBSCRIPTIONS_DESCRIPTION
    }), (0, n.jsx)(o.Spacer, {
      size: 24
    }), (0, n.jsxs)("div", {
      className: l()(S.guildBoostingSubscriptionRow, T.card),
      children: [(0, n.jsx)("img", {
        src: u,
        alt: "",
        className: T.bannerImage
      }), (0, n.jsxs)("div", {
        className: T.textContainer,
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: T.header,
          children: _.Z.Messages.APPLICATION_USER_SUBSCRIPTIONS_TITLE
        }), (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          className: T.description,
          children: _.Z.Messages.APPLICATION_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({
            numSubscriptions: a.length
          })
        })]
      }), (0, n.jsx)(c.Z, {
        color: o.Button.Colors.BRAND,
        onClick: s,
        children: _.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTIONS_BUTTON
      })]
    })]
  })
}