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
  m = n("46140"),
  T = n("689938"),
  I = n("333964");
t.default = function(e) {
  var t;
  let {
    className: n,
    color: a = r.default.colors.WHITE,
    quest: h,
    isInventory: p
  } = e, N = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, S = (0, i.useStateFromStores)([d.default], () => d.default.locale), {
    percentComplete: C
  } = (0, _.useQuestTaskDetails)({
    quest: h,
    location: m.QuestsExperimentLocations.QUEST_PROGRESS_BAR
  }), g = 100 * C, A = (0, E.isWeb)() && !N, M = () => (0, s.jsxs)("div", {
    className: I.desktopTooltip,
    style: {
      marginTop: p ? 8 : 0
    },
    children: [(0, s.jsx)(c.default, {
      className: I.infoIcon,
      height: p ? 16 : 12,
      width: p ? 16 : 12,
      color: p ? u.default.TEXT_MUTED : u.default.WHITE
    }), (0, s.jsx)(o.Text, {
      color: p ? "text-muted" : "always-white",
      variant: p ? "text-xs/normal" : "text-xxs/normal",
      children: T.default.Messages.QUESTS_PROGRESS_WEB_TIP
    })]
  });
  return A && !p ? (0, s.jsx)(M, {}) : (0, s.jsxs)("div", {
    className: l()(I.wrapper, n),
    style: {
      color: a.css
    },
    children: [(0, s.jsxs)("div", {
      className: I.percentCompleteWrapper,
      children: [(0, s.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: I.percentCompleteLabel,
        color: "none",
        children: (0, f.formatPercent)(S, C, {
          roundingMode: "floor"
        })
      }), (0, s.jsx)("div", {
        className: I.percentCompleteLabelOffset,
        style: {
          width: "".concat(100 - g, "%")
        }
      })]
    }), (0, s.jsx)("div", {
      className: I.progressBar,
      role: "progressbar",
      "aria-valuenow": g,
      children: (0, s.jsx)("div", {
        className: I.progressBarFill,
        style: {
          width: "".concat(g, "%")
        }
      })
    }), A && (0, s.jsx)(M, {})]
  })
}