"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("735250"),
  u = n("470079"),
  i = n("481060"),
  r = n("466111"),
  l = n("11352"),
  s = n("809851");

function d() {
  let e = l.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [t, n] = u.useState(0);
  return e ? (0, a.jsx)(i.MenuItem, {
    id: "notification",
    label: e => {
      let {
        isFocused: t
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)("div", {
          className: s.headerContainer,
          children: [(0, a.jsx)(i.Text, {
            color: t ? "always-white" : void 0,
            variant: "text-sm/medium",
            children: "Notification Sound"
          }), (0, a.jsx)(r.default, {
            className: s.nitroWheel,
            color: t ? "white" : void 0,
            width: 16,
            height: 16
          })]
        }), (0, a.jsx)(i.Text, {
          color: t ? "always-white" : void 0,
          variant: "text-xs/normal",
          children: "Discord Default"
        })]
      })
    },
    hasSubmenu: !0,
    children: (0, a.jsxs)(i.MenuGroup, {
      children: [(0, a.jsx)(i.MenuRadioItem, {
        id: "sound_0",
        group: "notification-preset",
        checked: 0 === t,
        label: "Discord Sound",
        action: () => n(0)
      }), (0, a.jsx)(i.MenuSeparator, {}), (0, a.jsx)(i.MenuRadioItem, {
        id: "sound_1",
        group: "notification-preset",
        checked: 1 === t,
        label: "Discord Sound",
        action: () => n(1)
      }), (0, a.jsx)(i.MenuRadioItem, {
        id: "sound_2",
        group: "notification-preset",
        checked: 2 === t,
        label: "Discord Sound",
        action: () => n(2)
      })]
    })
  }) : null
}