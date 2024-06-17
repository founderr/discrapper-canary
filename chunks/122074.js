"use strict";
n.r(t), n.d(t, {
  useCustomNotificationNewBadge: function() {
    return U
  },
  useCustomNotificationSoundDMContextMenuItem: function() {
    return x
  },
  useCustomNotificationSoundGuildContextMenuItem: function() {
    return O
  }
}), n("47120");
var a = n("735250"),
  u = n("470079"),
  l = n("960524"),
  i = n("442837"),
  s = n("704215"),
  r = n("481060"),
  d = n("706140"),
  o = n("9156"),
  c = n("594174"),
  f = n("672752"),
  S = n("466111"),
  _ = n("74538"),
  M = n("759198"),
  E = n("11352"),
  I = n("213931"),
  m = n("767157"),
  T = n("112440"),
  C = n("671105"),
  g = n("552958"),
  N = n("981631"),
  A = n("921944"),
  p = n("871465"),
  v = n("689938"),
  h = n("621917");

function O(e, t) {
  let n = E.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }),
    u = R(e, void 0, s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? "trailing" : "top"),
    l = n.nestedEntry && t || !n.nestedEntry && !t;
  return (0, a.jsx)(a.Fragment, {
    children: l && u
  })
}

function x(e, t, n) {
  return R(e, t, s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n)
}

function U() {
  let e = E.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }),
    [t] = (0, d.useGetDismissibleContent)([s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
  return (0, a.jsx)(a.Fragment, {
    children: e.enabled && e.nestedEntry && t === s.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE && (0, a.jsx)(r.TextBadge, {
      className: h.newBadge,
      text: v.default.Messages.NEW
    })
  })
}

function R(e, t, s, O) {
  var x, U;
  let R = (0, C.useGuildCustomNotificationSound)(e),
    F = (0, C.useChannelCustomNotificationSound)(e, t),
    D = (0, i.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    b = (0, i.useStateFromStores)([o.default], () => o.default.isMuted(e), [e]),
    j = _.default.canUseCustomNotificationSounds(D),
    G = j ? null != F ? F : R : p.Soundpacks.CLASSIC,
    y = E.CustomNotificationSoundExperiment.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [L, P] = u.useState(!1),
    {
      playSound: V
    } = (0, g.default)(),
    [k, B] = (0, d.useGetDismissibleContent)([s]),
    W = k === s;
  if (u.useEffect(() => () => {
      L && B(A.ContentDismissActionType.TAKE_ACTION)
    }, [L, B]), !y) return null;
  let w = n => {
      if (V(n), B(A.ContentDismissActionType.TAKE_ACTION), !j && n !== p.Soundpacks.CLASSIC) {
        (0, m.default)(n, "contextMenu"), (0, T.default)();
        return
      }
      null != t ? (0, I.updateChannelCustomNotificationSound)(e, t, G, n, "contextMenu") : (0, I.updateGuildCustomNotificationSound)(e, G, n, "contextMenu")
    },
    Y = j ? r.Text : M.default,
    K = (0, p.getCustomNotificationSoundpackOptions)(),
    q = null !== (U = null === (x = K.find(e => e.value === G)) || void 0 === x ? void 0 : x.label) && void 0 !== U ? U : v.default.Messages.SOUNDPACK_DEFAULT_LABEL,
    H = (0, a.jsx)(r.TextBadge, {
      className: h.newBadge,
      text: v.default.Messages.NEW
    });
  return (0, a.jsx)(r.MenuItem, {
    id: "notification-sounds",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && P(t), (0, a.jsxs)("div", {
        className: h.rootContainer,
        children: [(0, a.jsxs)("div", {
          children: [W && "top" === O && H, (0, a.jsxs)("div", {
            className: h.headerContainer,
            children: [(0, a.jsx)(Y, {
              className: h.text,
              color: t ? "always-white" : void 0,
              variant: "text-sm/medium",
              children: v.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
            }), (0, a.jsx)(S.default, {
              className: h.nitroWheel,
              color: t ? "white" : j ? void 0 : f.GradientCssUrls.PREMIUM_TIER_2,
              width: 16,
              height: 16
            })]
          }), null != q && (0, a.jsx)(Y, {
            className: h.text,
            color: t ? "always-white" : void 0,
            variant: "text-xs/normal",
            children: q
          })]
        }), W && "trailing" === O && H]
      })
    },
    action: e !== N.ZERO_STRING_GUILD_ID ? () => (0, r.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("86977"), n.e("5863"), n.e("49956")]).then(n.bind(n, "751212"));
      return n => (0, a.jsx)(t, {
        ...n,
        guildId: e
      })
    }) : void 0,
    hasSubmenu: !0,
    children: (0, a.jsxs)(r.MenuGroup, {
      children: [K.map((e, t) => (0, a.jsxs)(u.Fragment, {
        children: [j || e.value === p.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuRadioItem, {
          id: e.label,
          group: "notification-preset",
          checked: (null != G ? G : p.Soundpacks.CLASSIC) === e.value,
          label: e.label,
          action: () => w(e.value)
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
          action: () => w(e.value)
        }), e.value === p.Soundpacks.CLASSIC ? (0, a.jsx)(r.MenuSeparator, {}) : null]
      }, t)), b && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.MenuSeparator, {}), (0, a.jsx)(r.MenuItem, {
          id: "label",
          label: (0, a.jsx)(r.Text, {
            className: h.mutedLabel,
            variant: "text-sm/medium",
            children: v.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
          })
        })]
      })]
    })
  })
}