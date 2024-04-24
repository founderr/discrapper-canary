"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  u = n("470079"),
  l = n("960524"),
  i = n("442837"),
  s = n("524437"),
  r = n("481060"),
  d = n("706140"),
  o = n("9156"),
  f = n("594174"),
  c = n("672752"),
  S = n("466111"),
  I = n("26290"),
  _ = n("74538"),
  M = n("759198"),
  E = n("11352"),
  m = n("213931"),
  p = n("112440"),
  C = n("671105"),
  T = n("552958"),
  g = n("921944"),
  N = n("871465"),
  A = n("689938"),
  h = n("809851");

function v(e, t) {
  let n = (0, C.useGuildCustomNotificationSound)(e),
    v = (0, C.useChannelCustomNotificationSound)(e, t),
    R = (0, i.useStateFromStores)([f.default], () => f.default.getCurrentUser()),
    O = (0, i.useStateFromStores)([o.default], () => o.default.isMuted(e), [e]),
    x = _.default.canUseCustomNotificationSounds(R),
    U = x ? null != v ? v : n : N.Soundpacks.CLASSIC,
    F = E.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [G, j] = u.useState(!1),
    {
      playSound: y
    } = (0, T.default)(),
    [P, b] = (0, d.useGetDismissibleContent)([s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE]),
    D = P === s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE;
  if (u.useEffect(() => () => {
      G && b(g.ContentDismissActionType.TAKE_ACTION)
    }, [G, b]), !F) return null;
  let L = n => {
      if (y(n), !x) {
        (0, p.default)();
        return
      }
      null != t ? (0, m.updateChannelCustomNotificationSound)(e, t, n) : (0, m.updateGuildCustomNotificationSound)(e, n)
    },
    V = x ? r.Text : M.default,
    k = (0, N.getCustomNotificationSoundpackOptions)();
  return (0, a.jsx)(r.MenuItem, {
    id: "notification",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && j(t), (0, a.jsxs)(a.Fragment, {
        children: [D && (0, a.jsx)(I.TextBadge, {
          className: h.newBadge,
          text: A.default.Messages.NEW
        }), (0, a.jsxs)("div", {
          className: h.headerContainer,
          children: [(0, a.jsx)(V, {
            color: t ? "always-white" : void 0,
            variant: "text-sm/medium",
            children: A.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
          }), (0, a.jsx)(S.default, {
            className: h.nitroWheel,
            color: t ? "white" : x ? void 0 : c.GradientCssUrls.PREMIUM_TIER_2,
            width: 16,
            height: 16
          })]
        }), (0, a.jsx)(V, {
          color: t ? "always-white" : void 0,
          variant: "text-xs/normal",
          children: "Discord Default"
        })]
      })
    },
    hasSubmenu: !0,
    children: (0, a.jsxs)(r.MenuGroup, {
      children: [k.map((e, t) => (0, a.jsxs)(u.Fragment, {
        children: [x || e.value === N.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuRadioItem, {
          id: e.label,
          group: "notification-preset",
          checked: (null != U ? U : N.Soundpacks.CLASSIC) === e.value,
          label: e.label,
          action: () => L(e.value)
        }) : (0, a.jsx)(r.MenuItem, {
          id: e.label,
          label: t => {
            let {
              isFocused: n
            } = t;
            return (0, a.jsxs)("div", {
              className: h.labelContainer,
              children: [(0, a.jsx)(M.default, {
                color: n ? "always-white" : void 0,
                variant: "text-sm/medium",
                children: e.label
              }), (0, a.jsx)(l.CirclePlayIcon, {
                className: h.playButton,
                color: n ? r.tokens.colors.INTERACTIVE_ACTIVE : r.tokens.colors.INTERACTIVE_NORMAL
              })]
            })
          },
          action: () => L(e.value)
        }), e.value === N.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuSeparator, {}) : null]
      }, t)), O && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.MenuSeparator, {}), (0, a.jsx)(r.MenuItem, {
          id: "label",
          label: (0, a.jsx)(r.Text, {
            className: h.mutedLabel,
            variant: "text-sm/medium",
            children: A.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
          })
        })]
      })]
    })
  })
}