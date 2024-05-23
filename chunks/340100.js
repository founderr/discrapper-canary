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
  T = n("689938"),
  I = n("333964");
t.default = function(e) {
  var t;
  let {
    className: n,
    color: l = o.default.colors.WHITE,
    quest: p,
    isInventory: h
  } = e, N = (null === (t = p.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, S = (0, r.useStateFromStores)([c.default], () => c.default.locale), C = a.useMemo(() => (0, m.calculatePercentComplete)(p), [p]), g = 100 * C, A = (0, _.isWeb)() && !N, M = () => (0, s.jsxs)("div", {
    className: I.desktopTooltip,
    style: {
      marginTop: h ? 8 : 0
    },
    children: [(0, s.jsx)(f.default, {
      className: I.infoIcon,
      height: h ? 16 : 12,
      width: h ? 16 : 12,
      color: h ? d.default.TEXT_MUTED : d.default.WHITE
    }), (0, s.jsx)(u.Text, {
      className: I.__invalid_desktopTooltipText,
      color: h ? "text-muted" : "always-white",
      variant: h ? "text-xs/normal" : "text-xxs/normal",
      children: T.default.Messages.QUESTS_PROGRESS_WEB_TIP
    })]
  });
  return A && !h ? (0, s.jsx)(M, {}) : (0, s.jsxs)("div", {
    className: i()(I.wrapper, n),
    style: {
      color: l.css
    },
    children: [(0, s.jsxs)("div", {
      className: I.percentCompleteWrapper,
      children: [(0, s.jsx)(u.Text, {
        variant: "text-xs/semibold",
        className: I.percentCompleteLabel,
        color: "none",
        children: (0, E.formatPercent)(S, C, {
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