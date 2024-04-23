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
  r = n("524437"),
  s = n("481060"),
  o = n("706140"),
  d = n("594174"),
  f = n("672752"),
  c = n("466111"),
  S = n("26290"),
  I = n("74538"),
  _ = n("759198"),
  M = n("11352"),
  E = n("213931"),
  m = n("112440"),
  p = n("671105"),
  C = n("552958"),
  g = n("921944"),
  v = n("871465"),
  T = n("689938"),
  A = n("809851");

function N(e, t) {
  let n = (0, p.useGuildCustomNotificationSound)(e),
    N = (0, p.useChannelCustomNotificationSound)(e, t),
    h = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    R = I.default.canUseCustomNotificationSounds(h),
    O = R ? null != N ? N : n : v.Soundpacks.CLASSIC,
    x = M.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [U, F] = u.useState(!1),
    {
      playSound: G
    } = (0, C.default)(),
    [j, y] = (0, o.useGetDismissibleContent)([r.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE]),
    P = j === r.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE;
  if (u.useEffect(() => () => {
      U && y(g.ContentDismissActionType.TAKE_ACTION)
    }, [U, y]), !x) return null;
  let b = n => {
      if (G(n), !R) {
        (0, m.default)();
        return
      }
      null != t ? (0, E.updateChannelCustomNotificationSound)(e, t, n) : (0, E.updateGuildCustomNotificationSound)(e, n)
    },
    D = R ? s.Text : _.default,
    L = (0, v.getCustomNotificationSoundpackOptions)();
  return (0, a.jsx)(s.MenuItem, {
    id: "notification",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && F(t), (0, a.jsxs)(a.Fragment, {
        children: [P && (0, a.jsx)(S.TextBadge, {
          className: A.newBadge,
          text: T.default.Messages.NEW
        }), (0, a.jsxs)("div", {
          className: A.headerContainer,
          children: [(0, a.jsx)(D, {
            color: t ? "always-white" : void 0,
            variant: "text-sm/medium",
            children: T.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
          }), (0, a.jsx)(c.default, {
            className: A.nitroWheel,
            color: t ? "white" : R ? void 0 : f.GradientCssUrls.PREMIUM_TIER_2,
            width: 16,
            height: 16
          })]
        }), (0, a.jsx)(D, {
          color: t ? "always-white" : void 0,
          variant: "text-xs/normal",
          children: "Discord Default"
        })]
      })
    },
    hasSubmenu: !0,
    children: (0, a.jsx)(s.MenuGroup, {
      children: L.map((e, t) => (0, a.jsxs)(u.Fragment, {
        children: [R || e.value === v.Soundpacks.CLASSIC ? (0, a.jsx)(s.MenuRadioItem, {
          id: e.label,
          group: "notification-preset",
          checked: (null != O ? O : v.Soundpacks.CLASSIC) === e.value,
          label: e.label,
          action: () => b(e.value)
        }) : (0, a.jsx)(s.MenuItem, {
          id: e.label,
          label: t => {
            let {
              isFocused: n
            } = t;
            return (0, a.jsxs)("div", {
              className: A.labelContainer,
              children: [(0, a.jsx)(_.default, {
                color: n ? "always-white" : void 0,
                variant: "text-sm/medium",
                children: e.label
              }), (0, a.jsx)(i.CirclePlayIcon, {
                className: A.playButton,
                color: n ? s.tokens.colors.INTERACTIVE_ACTIVE : s.tokens.colors.INTERACTIVE_NORMAL
              })]
            })
          },
          action: () => b(e.value)
        }), e.value === v.Soundpacks.CLASSIC ? (0, a.jsx)(s.MenuSeparator, {}) : null]
      }, t))
    })
  })
}