t.d(n, {
  U: function() {
    return O
  },
  Uf: function() {
    return h
  },
  ng: function() {
    return x
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  l = t(442837),
  r = t(704215),
  u = t(481060),
  s = t(706140),
  o = t(9156),
  d = t(594174),
  c = t(672752),
  _ = t(74538),
  M = t(759198),
  I = t(11352),
  f = t(213931),
  E = t(767157),
  N = t(112440),
  T = t(671105),
  Z = t(552958),
  A = t(981631),
  C = t(921944),
  S = t(871465),
  g = t(689938),
  m = t(193504);

function x(e, n) {
  let t = I.Y.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }),
    a = R(e, void 0, r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, t.nestedEntry ? "trailing" : "top"),
    l = t.nestedEntry && n || !t.nestedEntry && !n;
  return (0, i.jsx)(i.Fragment, {
    children: l && a
  })
}

function h(e, n, t) {
  return R(e, n, r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, t)
}

function O() {
  let e = I.Y.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }),
    [n] = (0, s.c)([r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
  return (0, i.jsx)(i.Fragment, {
    children: e.enabled && e.nestedEntry && n === r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE && (0, i.jsx)(u.TextBadge, {
      className: m.newBadge,
      text: g.Z.Messages.NEW
    })
  })
}

function R(e, n, r, x) {
  var h, O;
  let R = (0, T.OR)(e),
    U = (0, T._c)(e, n),
    p = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
    v = (0, l.e7)([o.ZP], () => o.ZP.isMuted(e), [e]),
    P = _.ZP.canUseCustomNotificationSounds(p),
    j = P ? null != U ? U : R : S.YC.CLASSIC,
    G = I.Y.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [y, b] = a.useState(!1),
    {
      playSound: L
    } = (0, Z.Z)(),
    [D, F] = (0, s.c)([r]),
    V = D === r;
  if (a.useEffect(() => () => {
      y && F(C.L.TAKE_ACTION)
    }, [y, F]), !G) return null;
  let k = t => {
      if (L(t), F(C.L.TAKE_ACTION), !P && t !== S.YC.CLASSIC) {
        (0, E.Z)(t, "contextMenu"), (0, N.Z)();
        return
      }
      null != n ? (0, f.M)(e, n, j, t, "contextMenu") : (0, f.t)(e, j, t, "contextMenu")
    },
    Y = P ? u.Text : M.Z,
    z = (0, S.LB)(),
    w = null !== (O = null === (h = z.find(e => e.value === j)) || void 0 === h ? void 0 : h.label) && void 0 !== O ? O : g.Z.Messages.SOUNDPACK_DEFAULT_LABEL,
    K = (0, i.jsx)(u.TextBadge, {
      className: m.newBadge,
      text: g.Z.Messages.NEW
    });
  return (0, i.jsx)(u.MenuItem, {
    id: "notification-sounds",
    label: e => {
      let {
        isFocused: n
      } = e;
      return n && b(n), (0, i.jsxs)("div", {
        className: m.rootContainer,
        children: [(0, i.jsxs)("div", {
          children: [V && "top" === x && K, (0, i.jsxs)("div", {
            className: m.headerContainer,
            children: [(0, i.jsx)(Y, {
              className: m.text,
              color: n ? "always-white" : void 0,
              variant: "text-sm/medium",
              children: g.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
            }), (0, i.jsx)(u.NitroWheelIcon, {
              size: "xs",
              className: m.nitroWheel,
              color: n ? "white" : P ? void 0 : c.JX.PREMIUM_TIER_2
            })]
          }), null != w && (0, i.jsx)(Y, {
            className: m.text,
            color: n ? "always-white" : void 0,
            variant: "text-xs/normal",
            children: w
          })]
        }), V && "trailing" === x && K]
      })
    },
    action: e !== A.aIL ? () => (0, u.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([t.e("99387"), t.e("86977"), t.e("5863"), t.e("83804")]).then(t.bind(t, 751212));
      return t => (0, i.jsx)(n, {
        ...t,
        guildId: e
      })
    }) : void 0,
    hasSubmenu: !0,
    children: (0, i.jsxs)(u.MenuGroup, {
      children: [z.map((e, n) => (0, i.jsxs)(a.Fragment, {
        children: [P || e.value === S.YC.CLASSIC ? (0, i.jsx)(u.MenuRadioItem, {
          id: e.label,
          group: "notification-preset",
          checked: (null != j ? j : S.YC.CLASSIC) === e.value,
          label: e.label,
          action: () => k(e.value)
        }) : (0, i.jsx)(u.MenuItem, {
          id: e.label,
          label: n => {
            let {
              isFocused: t
            } = n;
            return (0, i.jsxs)("div", {
              className: m.labelContainer,
              children: [(0, i.jsx)(M.Z, {
                color: t ? "always-white" : void 0,
                variant: "text-sm/medium",
                children: e.label
              }), (0, i.jsx)(u.CirclePlayIcon, {
                className: m.playButton,
                color: t ? u.tokens.colors.INTERACTIVE_ACTIVE : u.tokens.colors.INTERACTIVE_NORMAL
              })]
            })
          },
          action: () => k(e.value)
        }), e.value === S.YC.CLASSIC ? (0, i.jsx)(u.MenuSeparator, {}) : null]
      }, n)), v && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.MenuSeparator, {}), (0, i.jsx)(u.MenuItem, {
          id: "label",
          label: (0, i.jsx)(u.Text, {
            className: m.mutedLabel,
            variant: "text-sm/medium",
            children: g.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
          })
        })]
      })]
    })
  })
}