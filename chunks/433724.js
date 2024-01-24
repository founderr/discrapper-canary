"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var i = n("37983");
n("884691");
var a = n("446674"),
  l = n("77078"),
  s = n("913144"),
  r = n("891653"),
  o = n("476765"),
  u = n("805199"),
  d = n("44771"),
  c = n("605475"),
  f = n("782340"),
  m = n("143598");

function h(e) {
  let {
    className: t,
    disabled: n,
    renderCTAButtons: h
  } = e, [g, _] = (0, a.useStateFromStoresArray)([u.default], () => [u.default.getCurrentDesktopIcon(), u.default.isEditorOpen]), p = (0, o.useUID)(), S = (0, l.useRadioGroup)({
    orientation: "horizontal",
    labelledBy: p
  }), v = e => {
    s.default.dispatch({
      type: "APP_ICON_UPDATED",
      id: e
    })
  };
  return (0, i.jsx)("div", {
    ...S,
    className: m.container,
    children: (0, i.jsxs)("div", {
      className: t,
      children: [(0, i.jsxs)("div", {
        className: m.header,
        children: [(0, i.jsxs)("div", {
          className: m.headings,
          children: [_ ? null : (0, i.jsxs)("div", {
            className: m.title,
            children: [(0, i.jsx)(l.Heading, {
              variant: "text-md/medium",
              children: f.default.Messages.APP_ICON_SETTINGS_TITLE
            }), (0, i.jsx)(r.default, {
              className: m.premiumIcon
            })]
          }), (0, i.jsx)(l.Heading, {
            variant: "text-sm/normal",
            children: f.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
          })]
        }), null == h ? void 0 : h()]
      }), (0, i.jsx)("div", {
        className: m.presets,
        children: c.ICONS.filter(e => {
          let {
            isHidden: t
          } = e;
          return !0 !== t
        }).map((e, t) => (0, i.jsx)(d.default, {
          icon: e,
          isSelected: g === e.id,
          onSelect: e => v(e),
          disabled: n,
          tabIndex: 0 !== t || n ? void 0 : 0
        }, e.id))
      })]
    })
  })
}