"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  u = n("470079"),
  i = n("442837"),
  l = n("524437"),
  r = n("481060"),
  s = n("706140"),
  o = n("594174"),
  d = n("672752"),
  f = n("466111"),
  c = n("26290"),
  S = n("74538"),
  _ = n("471113"),
  I = n("11352"),
  M = n("213931"),
  E = n("112440"),
  p = n("671105"),
  m = n("921944"),
  g = n("871465"),
  C = n("689938"),
  T = n("809851");

function v(e, t) {
  let n = (0, p.useGuildCustomNotificationSound)(e),
    v = (0, p.useChannelCustomNotificationSound)(e, t),
    h = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    N = S.default.canUseCustomNotificationSounds(h),
    A = N ? null != v ? v : n : g.Soundpacks.CLASSIC,
    R = I.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [x, O] = u.useState(!1),
    [U, F] = (0, s.useGetDismissibleContent)([l.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE]),
    G = U === l.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE;
  if (u.useEffect(() => () => {
      x && F(m.ContentDismissActionType.TAKE_ACTION)
    }, [x, F]), !R) return null;
  let j = n => {
      N ? null != t ? (0, M.updateChannelCustomNotificationSound)(e, t, n) : (0, M.updateGuildCustomNotificationSound)(e, n) : (0, E.default)()
    },
    y = N ? r.Text : _.default;
  return (0, a.jsx)(r.MenuItem, {
    id: "notification",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && O(t), (0, a.jsxs)(a.Fragment, {
        children: [G && (0, a.jsx)(c.TextBadge, {
          className: T.newBadge,
          text: C.default.Messages.NEW
        }), (0, a.jsxs)("div", {
          className: T.headerContainer,
          children: [(0, a.jsx)(y, {
            color: t ? "always-white" : void 0,
            variant: "text-sm/medium",
            children: C.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
          }), (0, a.jsx)(f.default, {
            className: T.nitroWheel,
            color: t ? "white" : N ? void 0 : d.GradientCssUrls.PREMIUM_TIER_2,
            width: 16,
            height: 16
          })]
        }), (0, a.jsx)(y, {
          color: t ? "always-white" : void 0,
          variant: "text-xs/normal",
          children: "Discord Default"
        })]
      })
    },
    hasSubmenu: !0,
    children: (0, a.jsxs)(r.MenuGroup, {
      children: [(0, a.jsx)(r.MenuRadioItem, {
        id: "sound_0",
        group: "notification-preset",
        checked: null == A || A === g.Soundpacks.CLASSIC,
        label: "Classic",
        action: () => j(g.Soundpacks.CLASSIC)
      }), (0, a.jsx)(r.MenuSeparator, {}), (0, a.jsx)(r.MenuRadioItem, {
        id: "sound_1",
        group: "notification-preset",
        checked: A === g.Soundpacks.DETUNE,
        label: "Detune",
        action: () => j(g.Soundpacks.DETUNE)
      }), (0, a.jsx)(r.MenuRadioItem, {
        id: "sound_2",
        group: "notification-preset",
        checked: !1,
        label: "Discord Sound",
        action: () => {}
      })]
    })
  })
}