"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120");
var a = n("735250"),
  u = n("470079"),
  i = n("524437"),
  l = n("481060"),
  s = n("706140"),
  r = n("466111"),
  d = n("26290"),
  o = n("11352"),
  f = n("921944"),
  c = n("689938"),
  _ = n("809851");

function M() {
  let e = o.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [t, n] = u.useState(0),
    [M, S] = u.useState(!1),
    [I, E] = (0, s.useGetDismissibleContent)([i.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE]),
    p = I === i.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE;
  return (u.useEffect(() => () => {
    M && E(f.ContentDismissActionType.TAKE_ACTION)
  }, [M, E]), e) ? (0, a.jsx)(l.MenuItem, {
    id: "notification",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && S(t), (0, a.jsxs)(a.Fragment, {
        children: [p && (0, a.jsx)(d.TextBadge, {
          className: _.newBadge,
          text: c.default.Messages.NEW
        }), (0, a.jsxs)("div", {
          className: _.headerContainer,
          children: [(0, a.jsx)(l.Text, {
            color: t ? "always-white" : void 0,
            variant: "text-sm/medium",
            children: c.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
          }), (0, a.jsx)(r.default, {
            className: _.nitroWheel,
            color: t ? "white" : void 0,
            width: 16,
            height: 16
          })]
        }), (0, a.jsx)(l.Text, {
          color: t ? "always-white" : void 0,
          variant: "text-xs/normal",
          children: "Discord Default"
        })]
      })
    },
    hasSubmenu: !0,
    children: (0, a.jsxs)(l.MenuGroup, {
      children: [(0, a.jsx)(l.MenuRadioItem, {
        id: "sound_0",
        group: "notification-preset",
        checked: 0 === t,
        label: "Discord Sound",
        action: () => n(0)
      }), (0, a.jsx)(l.MenuSeparator, {}), (0, a.jsx)(l.MenuRadioItem, {
        id: "sound_1",
        group: "notification-preset",
        checked: 1 === t,
        label: "Discord Sound",
        action: () => n(1)
      }), (0, a.jsx)(l.MenuRadioItem, {
        id: "sound_2",
        group: "notification-preset",
        checked: 2 === t,
        label: "Discord Sound",
        action: () => n(2)
      })]
    })
  }) : null
}