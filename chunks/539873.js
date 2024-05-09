"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("442837"),
  s = n("481060"),
  o = n("570140"),
  l = n("605236"),
  u = n("837741"),
  d = n("587446"),
  _ = n("996073"),
  c = n("153124"),
  E = n("327943"),
  I = n("997945"),
  T = n("401460"),
  f = n("441319"),
  S = n("921944"),
  h = n("526761"),
  A = n("689938"),
  m = n("587092");

function N(e) {
  let {
    className: t,
    disabled: n,
    renderCTAButtons: N
  } = e, [p, O] = (0, a.useStateFromStoresArray)([E.default], () => [E.default.getCurrentDesktopIcon(), E.default.isEditorOpen]), R = r.useRef(null);
  (0, _.default)(R, h.AppearanceScrollPositions.CUSTOM_APP_ICONS);
  let C = (0, c.useUID)(),
    g = (0, s.useRadioGroup)({
      orientation: "horizontal",
      labelledBy: C
    }),
    L = e => {
      o.default.dispatch({
        type: "APP_ICON_UPDATED",
        id: e
      });
      let t = I.NewAppIconsDCMap.get(e);
      null != t && (0, l.markDismissibleContentAsDismissed)(t, {
        dismissAction: S.ContentDismissActionType.TAKE_ACTION
      })
    },
    {
      enabled: v
    } = (0, u.useBrandRefreshPerksExperiment)({
      location: "AppIconSelectionGroup"
    }),
    D = (e, t) => t === I.PremiumAppIconIds.BLURPLE_TWILIGHT ? v && !e : !0 !== e,
    M = e => {
      let t = I.NewAppIconsDCMap.get(e);
      return null != t && !(0, l.isDismissibleContentDismissed)(t)
    };
  return (0, i.jsx)("div", {
    ref: R,
    children: (0, i.jsx)("div", {
      ...g,
      className: m.__invalid_container,
      children: (0, i.jsxs)("div", {
        className: t,
        children: [(0, i.jsxs)("div", {
          className: m.header,
          children: [(0, i.jsxs)("div", {
            className: m.headings,
            children: [O ? null : (0, i.jsxs)("div", {
              className: m.title,
              children: [(0, i.jsx)(s.Heading, {
                variant: "text-md/medium",
                children: A.default.Messages.APP_ICON_SETTINGS_TITLE
              }), (0, i.jsx)(d.default, {
                className: m.premiumIcon
              })]
            }), (0, i.jsx)(s.Heading, {
              variant: "text-sm/normal",
              children: A.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
            })]
          }), null == N ? void 0 : N()]
        }), (0, i.jsx)("div", {
          className: m.presets,
          children: f.ICONS.filter(e => {
            let {
              isHidden: t,
              id: n
            } = e;
            return D(t, n)
          }).map((e, t) => (0, i.jsx)(T.default, {
            icon: e,
            isSelected: p === e.id,
            onSelect: e => L(e),
            disabled: n,
            tabIndex: 0 !== t || n ? void 0 : 0,
            isNew: M(e.id)
          }, e.id))
        })]
      })
    })
  })
}