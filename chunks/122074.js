"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  u = n("470079"),
  i = n("442837"),
  l = n("524437"),
  s = n("481060"),
  r = n("706140"),
  o = n("594174"),
  d = n("466111"),
  f = n("26290"),
  c = n("74538"),
  S = n("11352"),
  _ = n("213931"),
  I = n("112440"),
  M = n("671105"),
  E = n("921944"),
  m = n("871465"),
  p = n("689938"),
  C = n("809851");

function g(e, t) {
  let n = (0, M.useGuildCustomNotificationSound)(e),
    g = (0, M.useChannelCustomNotificationSound)(e, t),
    T = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    v = c.default.canUseCustomNotificationSounds(T),
    h = v ? null != g ? g : n : m.Soundpacks.CLASSIC,
    N = S.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [A, R] = u.useState(!1),
    [x, O] = (0, r.useGetDismissibleContent)([l.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE]),
    F = x === l.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE;
  if (u.useEffect(() => () => {
      A && O(E.ContentDismissActionType.TAKE_ACTION)
    }, [A, O]), !N) return null;
  let U = n => {
    v ? null != t ? (0, _.updateChannelCustomNotificationSound)(e, t, n) : (0, _.updateGuildCustomNotificationSound)(e, n) : (0, I.default)()
  };
  return (0, a.jsx)(s.MenuItem, {
    id: "notification",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && R(t), (0, a.jsxs)(a.Fragment, {
        children: [F && (0, a.jsx)(f.TextBadge, {
          className: C.newBadge,
          text: p.default.Messages.NEW
        }), (0, a.jsxs)("div", {
          className: C.headerContainer,
          children: [(0, a.jsx)(s.Text, {
            color: t ? "always-white" : void 0,
            variant: "text-sm/medium",
            children: p.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
          }), (0, a.jsx)(d.default, {
            className: C.nitroWheel,
            color: t ? "white" : void 0,
            width: 16,
            height: 16
          })]
        }), (0, a.jsx)(s.Text, {
          color: t ? "always-white" : void 0,
          variant: "text-xs/normal",
          children: "Discord Default"
        })]
      })
    },
    hasSubmenu: !0,
    children: (0, a.jsxs)(s.MenuGroup, {
      children: [(0, a.jsx)(s.MenuRadioItem, {
        id: "sound_0",
        group: "notification-preset",
        checked: null == h || h === m.Soundpacks.CLASSIC,
        label: "Classic",
        action: () => U(m.Soundpacks.CLASSIC)
      }), (0, a.jsx)(s.MenuSeparator, {}), (0, a.jsx)(s.MenuRadioItem, {
        id: "sound_1",
        group: "notification-preset",
        checked: h === m.Soundpacks.DETUNE,
        label: "Detune",
        action: () => U(m.Soundpacks.DETUNE)
      }), (0, a.jsx)(s.MenuRadioItem, {
        id: "sound_2",
        group: "notification-preset",
        checked: !1,
        label: "Discord Sound",
        action: () => {}
      })]
    })
  })
}