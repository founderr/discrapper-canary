"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var a = n("735250"),
  u = n("470079"),
  i = n("960524"),
  l = n("442837"),
  s = n("524437"),
  r = n("481060"),
  o = n("706140"),
  d = n("594174"),
  f = n("672752"),
  c = n("466111"),
  S = n("26290"),
  I = n("74538"),
  _ = n("471113"),
  E = n("11352"),
  M = n("213931"),
  m = n("112440"),
  p = n("671105"),
  C = n("921944"),
  T = n("871465"),
  g = n("689938"),
  v = n("809851");

function N(e, t) {
  let n = (0, p.useGuildCustomNotificationSound)(e),
    N = (0, p.useChannelCustomNotificationSound)(e, t),
    h = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    A = I.default.canUseCustomNotificationSounds(h),
    R = A ? null != N ? N : n : T.Soundpacks.CLASSIC,
    x = E.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [O, U] = u.useState(!1),
    [F, G] = (0, o.useGetDismissibleContent)([s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE]),
    j = F === s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE;
  if (u.useEffect(() => () => {
      O && G(C.ContentDismissActionType.TAKE_ACTION)
    }, [O, G]), !x) return null;
  let y = n => {
      A ? null != t ? (0, M.updateChannelCustomNotificationSound)(e, t, n) : (0, M.updateGuildCustomNotificationSound)(e, n) : (0, m.default)()
    },
    P = A ? r.Text : _.default;
  return (0, a.jsx)(r.MenuItem, {
    id: "notification",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && U(t), (0, a.jsxs)(a.Fragment, {
        children: [j && (0, a.jsx)(S.TextBadge, {
          className: v.newBadge,
          text: g.default.Messages.NEW
        }), (0, a.jsxs)("div", {
          className: v.headerContainer,
          children: [(0, a.jsx)(P, {
            color: t ? "always-white" : void 0,
            variant: "text-sm/medium",
            children: g.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
          }), (0, a.jsx)(c.default, {
            className: v.nitroWheel,
            color: t ? "white" : A ? void 0 : f.GradientCssUrls.PREMIUM_TIER_2,
            width: 16,
            height: 16
          })]
        }), (0, a.jsx)(P, {
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
        checked: null == R || R === T.Soundpacks.CLASSIC,
        label: "Classic",
        action: () => y(T.Soundpacks.CLASSIC)
      }), (0, a.jsx)(r.MenuSeparator, {}), A ? (0, a.jsx)(r.MenuRadioItem, {
        id: "sound_1",
        group: "notification-preset",
        checked: R === T.Soundpacks.DETUNE,
        label: "Detune",
        action: () => y(T.Soundpacks.DETUNE)
      }) : (0, a.jsx)(r.MenuItem, {
        id: "sound_1",
        label: e => {
          let {
            isFocused: t
          } = e;
          return (0, a.jsxs)("div", {
            className: v.labelContainer,
            children: [(0, a.jsx)(_.default, {
              color: t ? "always-white" : void 0,
              variant: "text-sm/medium",
              children: "Detune"
            }), (0, a.jsx)(i.CirclePlayIcon, {
              className: v.playButton,
              color: t ? r.tokens.colors.INTERACTIVE_ACTIVE : r.tokens.colors.INTERACTIVE_NORMAL
            })]
          })
        },
        action: () => y(T.Soundpacks.DETUNE)
      })]
    })
  })
}