"use strict";
n.r(t);
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("692547"),
  u = n("481060"),
  d = n("377171"),
  c = n("706454"),
  E = n("507893"),
  f = n("930153"),
  _ = n("358085"),
  T = n("918701"),
  m = n("46140"),
  I = n("689938"),
  N = n("333964");
t.default = function(e) {
  var t;
  let {
    className: n,
    color: l = o.default.colors.WHITE,
    quest: p,
    isInventory: S
  } = e, C = (null === (t = p.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, A = (0, r.useStateFromStores)([c.default], () => c.default.locale), h = a.useMemo(() => (0, T.calculatePercentComplete)({
    quest: p,
    location: m.QuestsExperimentLocations.QUEST_PROGRESS_BAR
  }), [p]), g = 100 * h, M = (0, _.isWeb)() && !C, O = () => (0, s.jsxs)("div", {
    className: N.desktopTooltip,
    style: {
      marginTop: S ? 8 : 0
    },
    children: [(0, s.jsx)(E.default, {
      className: N.infoIcon,
      height: S ? 16 : 12,
      width: S ? 16 : 12,
      color: S ? d.default.TEXT_MUTED : d.default.WHITE
    }), (0, s.jsx)(u.Text, {
      color: S ? "text-muted" : "always-white",
      variant: S ? "text-xs/normal" : "text-xxs/normal",
      children: I.default.Messages.QUESTS_PROGRESS_WEB_TIP
    })]
  });
  return M && !S ? (0, s.jsx)(O, {}) : (0, s.jsxs)("div", {
    className: i()(N.wrapper, n),
    style: {
      color: l.css
    },
    children: [(0, s.jsxs)("div", {
      className: N.percentCompleteWrapper,
      children: [(0, s.jsx)(u.Text, {
        variant: "text-xs/semibold",
        className: N.percentCompleteLabel,
        color: "none",
        children: (0, f.formatPercent)(A, h, {
          roundingMode: "floor"
        })
      }), (0, s.jsx)("div", {
        className: N.percentCompleteLabelOffset,
        style: {
          width: "".concat(100 - g, "%")
        }
      })]
    }), (0, s.jsx)("div", {
      className: N.progressBar,
      role: "progressbar",
      "aria-valuenow": g,
      children: (0, s.jsx)("div", {
        className: N.progressBarFill,
        style: {
          width: "".concat(g, "%")
        }
      })
    }), M && (0, s.jsx)(O, {})]
  })
}