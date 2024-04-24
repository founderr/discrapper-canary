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
  var n;
  let v = (0, C.useGuildCustomNotificationSound)(e),
    R = (0, C.useChannelCustomNotificationSound)(e, t),
    x = (0, i.useStateFromStores)([f.default], () => f.default.getCurrentUser()),
    O = (0, i.useStateFromStores)([o.default], () => o.default.isMuted(e), [e]),
    U = _.default.canUseCustomNotificationSounds(x),
    F = U ? null != R ? R : v : N.Soundpacks.CLASSIC,
    G = E.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [j, y] = u.useState(!1),
    {
      playSound: P
    } = (0, T.default)(),
    [b, D] = (0, d.useGetDismissibleContent)([s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE]),
    L = b === s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE;
  if (u.useEffect(() => () => {
      j && D(g.ContentDismissActionType.TAKE_ACTION)
    }, [j, D]), !G) return null;
  let V = n => {
      if (P(n), !U) {
        (0, p.default)();
        return
      }
      null != t ? (0, m.updateChannelCustomNotificationSound)(e, t, n) : (0, m.updateGuildCustomNotificationSound)(e, n)
    },
    k = U ? r.Text : M.default,
    W = (0, N.getCustomNotificationSoundpackOptions)(),
    w = null === (n = W.find(e => e.value === F)) || void 0 === n ? void 0 : n.label;
  return (0, a.jsx)(r.MenuItem, {
    id: "notification",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && y(t), (0, a.jsxs)(a.Fragment, {
        children: [L && (0, a.jsx)(I.TextBadge, {
          className: h.newBadge,
          text: A.default.Messages.NEW
        }), (0, a.jsxs)("div", {
          className: h.headerContainer,
          children: [(0, a.jsx)(k, {
            className: h.text,
            color: t ? "always-white" : void 0,
            variant: "text-sm/medium",
            children: A.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
          }), (0, a.jsx)(S.default, {
            className: h.nitroWheel,
            color: t ? "white" : U ? void 0 : c.GradientCssUrls.PREMIUM_TIER_2,
            width: 16,
            height: 16
          })]
        }), null != w && (0, a.jsx)(k, {
          className: h.text,
          color: t ? "always-white" : void 0,
          variant: "text-xs/normal",
          children: w
        })]
      })
    },
    hasSubmenu: !0,
    children: (0, a.jsxs)(r.MenuGroup, {
      children: [W.map((e, t) => (0, a.jsxs)(u.Fragment, {
        children: [U || e.value === N.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuRadioItem, {
          id: e.label,
          group: "notification-preset",
          checked: (null != F ? F : N.Soundpacks.CLASSIC) === e.value,
          label: e.label,
          action: () => V(e.value)
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
          action: () => V(e.value)
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