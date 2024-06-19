var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(442837),
  r = n(692547),
  o = n(481060),
  c = n(377171),
  u = n(706454),
  d = n(930153),
  E = n(358085),
  _ = n(113434),
  I = n(918701),
  T = n(46140),
  N = n(689938),
  m = n(567345);
t.Z = function(e) {
  var t;
  let {
    className: n,
    color: i = r.Z.colors.WHITE,
    quest: h,
    isInventory: C
  } = e, S = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, A = (0, I.zK)(h, T.S7.IN_HOUSE_CONSOLE_QUEST), p = (0, I.zK)(h, T.S7.MOBILE_CONSOLE_QUEST), g = (0, a.e7)([u.default], () => u.default.locale), {
    percentComplete: f
  } = (0, _.Rf)({
    quest: h,
    location: T.dr.QUEST_PROGRESS_BAR
  }), O = 100 * f, R = (0, E.isWeb)() && !S && !A && !p, M = () => (0, s.jsxs)("div", {
    className: m.desktopTooltip,
    style: {
      marginTop: C ? 8 : 0
    },
    children: [(0, s.jsx)(o.CircleInformationIcon, {
      size: "custom",
      className: m.infoIcon,
      height: C ? 16 : 12,
      width: C ? 16 : 12,
      color: C ? c.Z.TEXT_MUTED : c.Z.WHITE
    }), (0, s.jsx)(o.Text, {
      color: C ? "text-muted" : "always-white",
      variant: C ? "text-xs/normal" : "text-xxs/normal",
      children: N.Z.Messages.QUESTS_PROGRESS_WEB_TIP
    })]
  });
  return R && !C ? (0, s.jsx)(M, {}) : (0, s.jsxs)("div", {
    className: l()(m.wrapper, n),
    style: {
      color: i.css
    },
    children: [(0, s.jsxs)("div", {
      className: m.percentCompleteWrapper,
      children: [(0, s.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: m.percentCompleteLabel,
        color: "none",
        children: (0, d.T3)(g, f, {
          roundingMode: "floor"
        })
      }), (0, s.jsx)("div", {
        className: m.percentCompleteLabelOffset,
        style: {
          width: "".concat(100 - O, "%")
        }
      })]
    }), (0, s.jsx)("div", {
      className: m.progressBar,
      role: "progressbar",
      "aria-valuenow": O,
      children: (0, s.jsx)("div", {
        className: m.progressBarFill,
        style: {
          width: "".concat(O, "%")
        }
      })
    }), R && (0, s.jsx)(M, {})]
  })
}