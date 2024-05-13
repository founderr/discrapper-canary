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
  I = n("689938"),
  m = n("333964");
t.default = function(e) {
  var t;
  let {
    className: n,
    color: l = o.default.colors.WHITE,
    quest: N,
    isInventory: p
  } = e, S = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, C = (0, r.useStateFromStores)([c.default], () => c.default.locale), A = a.useMemo(() => (0, T.calculatePercentComplete)(N), [N]), h = 100 * A, g = (0, _.isWeb)() && !S, M = () => (0, s.jsxs)("div", {
    className: m.desktopTooltip,
    style: {
      marginTop: p ? 8 : 0
    },
    children: [(0, s.jsx)(E.default, {
      className: m.infoIcon,
      height: p ? 16 : 12,
      width: p ? 16 : 12,
      color: p ? d.default.TEXT_MUTED : d.default.WHITE
    }), (0, s.jsx)(u.Text, {
      className: m.__invalid_desktopTooltipText,
      color: p ? "text-muted" : "always-white",
      variant: p ? "text-xs/normal" : "text-xxs/normal",
      children: I.default.Messages.QUESTS_PROGRESS_WEB_TIP
    })]
  });
  return g && !p ? (0, s.jsx)(M, {}) : (0, s.jsxs)("div", {
    className: i()(m.wrapper, n),
    style: {
      color: l.css
    },
    children: [(0, s.jsxs)("div", {
      className: m.percentCompleteWrapper,
      children: [(0, s.jsx)(u.Text, {
        variant: "text-xs/semibold",
        className: m.percentCompleteLabel,
        color: "none",
        children: (0, f.formatPercent)(C, A, {
          roundingMode: "floor"
        })
      }), (0, s.jsx)("div", {
        className: m.percentCompleteLabelOffset,
        style: {
          width: "".concat(100 - h, "%")
        }
      })]
    }), (0, s.jsx)("div", {
      className: m.progressBar,
      role: "progressbar",
      "aria-valuenow": h,
      children: (0, s.jsx)("div", {
        className: m.progressBarFill,
        style: {
          width: "".concat(h, "%")
        }
      })
    }), g && (0, s.jsx)(M, {})]
  })
}