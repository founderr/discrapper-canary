"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
});
var s = a("37983");
a("884691");
var n = a("414456"),
  i = a.n(n),
  l = a("446674"),
  r = a("77078"),
  o = a("79112"),
  d = a("915639"),
  u = a("415133"),
  c = a("42060"),
  E = a("49111"),
  f = a("782340"),
  m = a("341923");

function g(e) {
  let {
    onClose: t
  } = e, a = (0, c.useForceMigration)(), n = (0, l.useStateFromStores)([d.default], () => d.default.locale);
  return (0, s.jsxs)("div", {
    className: m.infoContainer,
    children: [(0, s.jsx)(r.Heading, {
      className: i(m.finishTitle, {
        [m.finishTitlePadding]: a
      }),
      color: "header-primary",
      variant: "heading-xl/bold",
      children: a ? f.default.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_1.format({
        date: (0, u.getLocalizedForcedUUDate)(n)
      }) : f.default.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE
    }), (0, s.jsx)(r.Text, {
      className: m.subtitleFinish,
      color: "header-secondary",
      variant: "text-md/medium",
      children: a ? f.default.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_2.format({
        date: (0, u.getLocalizedForcedUUDate)(n)
      }) : f.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1
    }), (0, s.jsx)(r.Text, {
      className: m.promptFinish,
      color: "header-secondary",
      variant: "text-md/medium",
      children: f.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
        onClick: () => {
          t(), o.default.open(E.UserSettingsSections.ACCOUNT)
        }
      })
    }), (0, s.jsx)(r.Button, {
      className: m.button,
      type: "button",
      size: r.Button.Sizes.SMALL,
      onClick: t,
      children: f.default.Messages.INVITES_DISABLED_CONFIRMATION
    })]
  })
}