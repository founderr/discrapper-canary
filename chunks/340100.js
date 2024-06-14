"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("442837"),
  r = n("692547"),
  o = n("481060"),
  u = n("377171"),
  d = n("706454"),
  c = n("507893"),
  f = n("930153"),
  E = n("358085"),
  _ = n("113434"),
  m = n("918701"),
  T = n("46140"),
  I = n("689938"),
  p = n("333964");
t.default = function(e) {
  var t;
  let {
    className: n,
    color: a = r.default.colors.WHITE,
    quest: h,
    isInventory: N
  } = e, S = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, C = (0, m.hasVariant)(h, T.QuestVariants.IN_HOUSE_CONSOLE_QUEST), g = (0, m.hasVariant)(h, T.QuestVariants.MOBILE_CONSOLE_QUEST), A = (0, i.useStateFromStores)([d.default], () => d.default.locale), {
    percentComplete: M
  } = (0, _.useQuestTaskDetails)({
    quest: h,
    location: T.QuestsExperimentLocations.QUEST_PROGRESS_BAR
  }), R = 100 * M, v = (0, E.isWeb)() && !S && !C && !g, O = () => (0, s.jsxs)("div", {
    className: p.desktopTooltip,
    style: {
      marginTop: N ? 8 : 0
    },
    children: [(0, s.jsx)(c.default, {
      className: p.infoIcon,
      height: N ? 16 : 12,
      width: N ? 16 : 12,
      color: N ? u.default.TEXT_MUTED : u.default.WHITE
    }), (0, s.jsx)(o.Text, {
      color: N ? "text-muted" : "always-white",
      variant: N ? "text-xs/normal" : "text-xxs/normal",
      children: I.default.Messages.QUESTS_PROGRESS_WEB_TIP
    })]
  });
  return v && !N ? (0, s.jsx)(O, {}) : (0, s.jsxs)("div", {
    className: l()(p.wrapper, n),
    style: {
      color: a.css
    },
    children: [(0, s.jsxs)("div", {
      className: p.percentCompleteWrapper,
      children: [(0, s.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: p.percentCompleteLabel,
        color: "none",
        children: (0, f.formatPercent)(A, M, {
          roundingMode: "floor"
        })
      }), (0, s.jsx)("div", {
        className: p.percentCompleteLabelOffset,
        style: {
          width: "".concat(100 - R, "%")
        }
      })]
    }), (0, s.jsx)("div", {
      className: p.progressBar,
      role: "progressbar",
      "aria-valuenow": R,
      children: (0, s.jsx)("div", {
        className: p.progressBarFill,
        style: {
          width: "".concat(R, "%")
        }
      })
    }), v && (0, s.jsx)(O, {})]
  })
}