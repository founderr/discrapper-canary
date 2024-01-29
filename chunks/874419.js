"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
});
var s = l("37983"),
  i = l("884691"),
  n = l("446674"),
  u = l("151426"),
  a = l("79112"),
  o = l("685665"),
  r = l("10641"),
  d = l("5667"),
  c = l("783142"),
  f = l("713135"),
  _ = l("49111"),
  S = l("994428"),
  T = l("397336"),
  E = l("782340"),
  C = l("393036");
let p = u.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP,
  m = e => {
    (0, r.markDismissibleContentAsDismissed)(p, {
      dismissAction: e,
      forceTrack: !0
    })
  };
var I = e => {
  let {
    position: t,
    onClose: l
  } = e, {
    analyticsLocations: u
  } = (0, o.default)(), r = (0, n.useStateFromStores)([f.default], () => f.default.getIsAccessibilityTooltipViewed());
  return i.useEffect(() => r ? () => m(S.ContentDismissActionType.AUTO) : () => (0, c.handleProfileAccessibilityTooltipViewed)(), [r]), (0, s.jsx)(d.default, {
    markAsDismissed: m,
    header: E.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_TITLE,
    headerClassName: C.header,
    content: (0, s.jsx)("div", {
      className: C.content,
      children: E.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_DESCRIPTION
    }),
    buttonCTA: E.default.Messages.TAKE_ME_THERE,
    onClick: () => {
      null == l || l(), a.default.open(_.UserSettingsSections.ACCESSIBILITY, null, {
        scrollPosition: T.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME,
        analyticsLocations: u
      })
    },
    secondaryButtonCTA: E.default.Messages.DISMISS,
    onSecondaryClick: l,
    buttonLayout: d.ButtonLayout.STACKED,
    caretPosition: "left" === t ? d.CaretPosition.RIGHT_CENTER : d.CaretPosition.LEFT_CENTER
  })
}