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
  f = n("507893"),
  E = n("930153"),
  _ = n("358085"),
  m = n("918701"),
  T = n("46140"),
  I = n("689938"),
  p = n("333964");
t.default = function(e) {
  var t;
  let {
    className: n,
    color: l = o.default.colors.WHITE,
    quest: h,
    isInventory: N
  } = e, S = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, C = (0, r.useStateFromStores)([c.default], () => c.default.locale), g = a.useMemo(() => (0, m.calculatePercentComplete)({
    quest: h,
    location: T.QuestsExperimentLocations.QUEST_PROGRESS_BAR
  }), [h]), A = 100 * g, M = (0, _.isWeb)() && !S, R = () => (0, s.jsxs)("div", {
    className: p.desktopTooltip,
    style: {
      marginTop: N ? 8 : 0
    },
    children: [(0, s.jsx)(f.default, {
      className: p.infoIcon,
      height: N ? 16 : 12,
      width: N ? 16 : 12,
      color: N ? d.default.TEXT_MUTED : d.default.WHITE
    }), (0, s.jsx)(u.Text, {
      color: N ? "text-muted" : "always-white",
      variant: N ? "text-xs/normal" : "text-xxs/normal",
      children: I.default.Messages.QUESTS_PROGRESS_WEB_TIP
    })]
  });
  return M && !N ? (0, s.jsx)(R, {}) : (0, s.jsxs)("div", {
    className: i()(p.wrapper, n),
    style: {
      color: l.css
    },
    children: [(0, s.jsxs)("div", {
      className: p.percentCompleteWrapper,
      children: [(0, s.jsx)(u.Text, {
        variant: "text-xs/semibold",
        className: p.percentCompleteLabel,
        color: "none",
        children: (0, E.formatPercent)(C, g, {
          roundingMode: "floor"
        })
      }), (0, s.jsx)("div", {
        className: p.percentCompleteLabelOffset,
        style: {
          width: "".concat(100 - A, "%")
        }
      })]
    }), (0, s.jsx)("div", {
      className: p.progressBar,
      role: "progressbar",
      "aria-valuenow": A,
      children: (0, s.jsx)("div", {
        className: p.progressBarFill,
        style: {
          width: "".concat(A, "%")
        }
      })
    }), M && (0, s.jsx)(R, {})]
  })
}