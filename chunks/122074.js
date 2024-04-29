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
  h = n("621917");

function v(e, t) {
  var n, v;
  let R = (0, C.useGuildCustomNotificationSound)(e),
    x = (0, C.useChannelCustomNotificationSound)(e, t),
    O = (0, i.useStateFromStores)([f.default], () => f.default.getCurrentUser()),
    U = (0, i.useStateFromStores)([o.default], () => o.default.isMuted(e), [e]),
    F = _.default.canUseCustomNotificationSounds(O),
    G = F ? null != x ? x : R : N.Soundpacks.CLASSIC,
    j = E.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [y, P] = u.useState(!1),
    {
      playSound: b
    } = (0, T.default)(),
    [D, L] = (0, d.useGetDismissibleContent)([s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE]),
    V = D === s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE;
  if (u.useEffect(() => () => {
      y && L(g.ContentDismissActionType.TAKE_ACTION)
    }, [y, L]), !j) return null;
  let k = n => {
      if (b(n), !F) {
        (0, p.default)();
        return
      }
      null != t ? (0, m.updateChannelCustomNotificationSound)(e, t, n) : (0, m.updateGuildCustomNotificationSound)(e, n)
    },
    W = F ? r.Text : M.default,
    w = (0, N.getCustomNotificationSoundpackOptions)(),
    Y = null !== (v = null === (n = w.find(e => e.value === G)) || void 0 === n ? void 0 : n.label) && void 0 !== v ? v : A.default.Messages.SOUNDPACK_DEFAULT_LABEL;
  return (0, a.jsx)(r.MenuItem, {
    id: "notification-sounds",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && P(t), (0, a.jsxs)(a.Fragment, {
        children: [V && (0, a.jsx)(I.TextBadge, {
          className: h.newBadge,
          text: A.default.Messages.NEW
        }), (0, a.jsxs)("div", {
          className: h.headerContainer,
          children: [(0, a.jsx)(W, {
            className: h.text,
            color: t ? "always-white" : void 0,
            variant: "text-sm/medium",
            children: A.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
          }), (0, a.jsx)(S.default, {
            className: h.nitroWheel,
            color: t ? "white" : F ? void 0 : c.GradientCssUrls.PREMIUM_TIER_2,
            width: 16,
            height: 16
          })]
        }), null != Y && (0, a.jsx)(W, {
          className: h.text,
          color: t ? "always-white" : void 0,
          variant: "text-xs/normal",
          children: Y
        })]
      })
    },
    hasSubmenu: !0,
    children: (0, a.jsxs)(r.MenuGroup, {
      children: [w.map((e, t) => (0, a.jsxs)(u.Fragment, {
        children: [F || e.value === N.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuRadioItem, {
          id: e.label,
          group: "notification-preset",
          checked: (null != G ? G : N.Soundpacks.CLASSIC) === e.value,
          label: e.label,
          action: () => k(e.value)
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
          action: () => k(e.value)
        }), e.value === N.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuSeparator, {}) : null]
      }, t)), U && (0, a.jsxs)(a.Fragment, {
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