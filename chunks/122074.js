"use strict";
n.r(t), n.d(t, {
  useCustomNotificationNewBadge: function() {
    return U
  },
  useCustomNotificationSoundDMContextMenuItem: function() {
    return x
  },
  useCustomNotificationSoundGuildContextMenuItem: function() {
    return R
  }
}), n("47120");
var a = n("735250"),
  u = n("470079"),
  i = n("960524"),
  l = n("442837"),
  s = n("524437"),
  r = n("481060"),
  o = n("706140"),
  d = n("9156"),
  c = n("594174"),
  f = n("672752"),
  S = n("466111"),
  I = n("26290"),
  _ = n("74538"),
  E = n("759198"),
  M = n("11352"),
  m = n("213931"),
  C = n("767157"),
  T = n("112440"),
  p = n("671105"),
  N = n("552958"),
  A = n("981631"),
  g = n("921944"),
  h = n("871465"),
  v = n("689938"),
  O = n("621917");

function R(e, t) {
  let n = M.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }),
    u = F(e, void 0, s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? "trailing" : "top"),
    i = n.nestedEntry && t || !n.nestedEntry && !t;
  return (0, a.jsx)(a.Fragment, {
    children: i && u
  })
}

function x(e, t, n) {
  return F(e, t, s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n)
}

function U() {
  let e = M.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }),
    [t] = (0, o.useGetDismissibleContent)([s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
  return (0, a.jsx)(a.Fragment, {
    children: e.enabled && e.nestedEntry && t === s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE && (0, a.jsx)(I.TextBadge, {
      className: O.newBadge,
      text: v.default.Messages.NEW
    })
  })
}

function F(e, t, s, R) {
  var x, U;
  let F = (0, p.useGuildCustomNotificationSound)(e),
    G = (0, p.useChannelCustomNotificationSound)(e, t),
    y = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    j = (0, l.useStateFromStores)([d.default], () => d.default.isMuted(e), [e]),
    P = _.default.canUseCustomNotificationSounds(y),
    D = P ? null != G ? G : F : h.Soundpacks.CLASSIC,
    b = M.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [L, k] = u.useState(!1),
    {
      playSound: V
    } = (0, N.default)(),
    [W, w] = (0, o.useGetDismissibleContent)([s]),
    Y = W === s;
  if (u.useEffect(() => () => {
      L && w(g.ContentDismissActionType.TAKE_ACTION)
    }, [L, w]), !b) return null;
  let B = n => {
      if (V(n), w(g.ContentDismissActionType.TAKE_ACTION), !P && n !== h.Soundpacks.CLASSIC) {
        (0, C.default)(n, "contextMenu"), (0, T.default)();
        return
      }
      null != t ? (0, m.updateChannelCustomNotificationSound)(e, t, D, n, "contextMenu") : (0, m.updateGuildCustomNotificationSound)(e, D, n, "contextMenu")
    },
    K = P ? r.Text : E.default,
    q = (0, h.getCustomNotificationSoundpackOptions)(),
    H = null !== (U = null === (x = q.find(e => e.value === D)) || void 0 === x ? void 0 : x.label) && void 0 !== U ? U : v.default.Messages.SOUNDPACK_DEFAULT_LABEL,
    z = (0, a.jsx)(I.TextBadge, {
      className: O.newBadge,
      text: v.default.Messages.NEW
    });
  return (0, a.jsx)(r.MenuItem, {
    id: "notification-sounds",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && k(t), (0, a.jsxs)("div", {
        className: O.rootContainer,
        children: [(0, a.jsxs)("div", {
          children: [Y && "top" === R && z, (0, a.jsxs)("div", {
            className: O.headerContainer,
            children: [(0, a.jsx)(K, {
              className: O.text,
              color: t ? "always-white" : void 0,
              variant: "text-sm/medium",
              children: v.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
            }), (0, a.jsx)(S.default, {
              className: O.nitroWheel,
              color: t ? "white" : P ? void 0 : f.GradientCssUrls.PREMIUM_TIER_2,
              width: 16,
              height: 16
            })]
          }), null != H && (0, a.jsx)(K, {
            className: O.text,
            color: t ? "always-white" : void 0,
            variant: "text-xs/normal",
            children: H
          })]
        }), Y && "trailing" === R && z]
      })
    },
    action: e !== A.ZERO_STRING_GUILD_ID ? () => (0, r.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("86977"), n.e("5863"), n.e("86426")]).then(n.bind(n, "751212"));
      return n => (0, a.jsx)(t, {
        ...n,
        guildId: e
      })
    }) : void 0,
    hasSubmenu: !0,
    children: (0, a.jsxs)(r.MenuGroup, {
      children: [q.map((e, t) => (0, a.jsxs)(u.Fragment, {
        children: [P || e.value === h.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuRadioItem, {
          id: e.label,
          group: "notification-preset",
          checked: (null != D ? D : h.Soundpacks.CLASSIC) === e.value,
          label: e.label,
          action: () => B(e.value)
        }) : (0, a.jsx)(r.MenuItem, {
          id: e.label,
          label: t => {
            let {
              isFocused: n
            } = t;
            return (0, a.jsxs)("div", {
              className: O.labelContainer,
              children: [(0, a.jsx)(E.default, {
                color: n ? "always-white" : void 0,
                variant: "text-sm/medium",
                children: e.label
              }), (0, a.jsx)(i.CirclePlayIcon, {
                className: O.playButton,
                color: n ? r.tokens.colors.INTERACTIVE_ACTIVE : r.tokens.colors.INTERACTIVE_NORMAL
              })]
            })
          },
          action: () => B(e.value)
        }), e.value === h.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuSeparator, {}) : null]
      }, t)), j && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.MenuSeparator, {}), (0, a.jsx)(r.MenuItem, {
          id: "label",
          label: (0, a.jsx)(r.Text, {
            className: O.mutedLabel,
            variant: "text-sm/medium",
            children: v.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
          })
        })]
      })]
    })
  })
}