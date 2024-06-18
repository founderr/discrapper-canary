"use strict";
t.d(s, {
  Z: function() {
    return N
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(920906),
  a = t(722770),
  r = t(442837),
  o = t(481060),
  c = t(607070),
  d = t(236413),
  u = t(85960),
  E = t(65912),
  _ = t(564488),
  I = t(689938),
  T = t(31067);

function N(e) {
  let {
    guildId: s,
    triggerType: t
  } = e, N = i.useMemo(() => () => (0, d.ep)(s, t), [s, t]), [m] = i.useState(N), [S, h] = i.useState(!1), {
    editingRule: g,
    createNewEditingRule: C
  } = (0, E.V)(), {
    getDefaultRuleName: x
  } = u.I6[t], R = (0, r.e7)([c.Z], () => c.Z.useReducedMotion), L = !(0, d.Vb)(g) && (null == g ? void 0 : g.triggerType) === t, [O, A] = i.useState(L ? g : m), p = (0, l.useSpring)({
    opacity: L ? 0 : 1,
    pointerEvents: L ? "none" : "all",
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    immediate: R
  }), M = (0, l.useSpring)({
    opacity: L ? 1 : 0,
    pointerEvents: L ? "all" : "none",
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    immediate: R,
    onStart: () => {
      A(L ? g : m)
    },
    onRest: () => {
      A(L ? g : m), h(L)
    }
  });
  return null == g || L ? (0, n.jsxs)("div", {
    className: T.mainRuleContainer,
    style: {
      height: L ? "auto" : "60px"
    },
    children: [(0, n.jsx)(l.animated.div, {
      className: T.animatedRuleCardContainer,
      style: M,
      children: (0, n.jsx)(_.Z, {
        rule: O,
        persistEdit: S
      })
    }), (0, n.jsx)(l.animated.div, {
      className: T.animatedNewRuleContainer,
      style: p,
      children: (0, n.jsxs)(o.Clickable, {
        className: T.addAnotherRuleCardContainer,
        onClick: () => {
          C(s, t)
        },
        children: [(0, n.jsx)(o.CirclePlusIcon, {
          size: "custom",
          width: 20,
          height: 20,
          color: a.Z.BLUE_345,
          className: T.plusIcon
        }), (0, n.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-link",
          children: I.Z.Messages.GUILD_AUTOMOD_ADD_ADDITIONAL_RULE.format({
            ruleName: x()
          })
        })]
      })
    })]
  }) : null
}