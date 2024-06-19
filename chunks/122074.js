t.d(n, {
  U: function() {
    return h
  },
  Uf: function() {
    return x
  },
  ng: function() {
    return m
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(442837),
  r = t(704215),
  u = t(481060),
  s = t(706140),
  o = t(9156),
  d = t(594174),
  c = t(672752),
  _ = t(74538),
  I = t(759198),
  M = t(11352),
  f = t(213931),
  E = t(767157),
  N = t(112440),
  T = t(671105),
  Z = t(552958),
  A = t(981631),
  S = t(921944),
  g = t(871465),
  C = t(689938),
  O = t(193504);

function m(e, n) {
  let t = M.Y.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }),
    l = R(e, void 0, r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, t.nestedEntry ? "trailing" : "top"),
    a = t.nestedEntry && n || !t.nestedEntry && !n;
  return (0, i.jsx)(i.Fragment, {
    children: a && l
  })
}

function x(e, n, t) {
  return R(e, n, r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, t)
}

function h() {
  let e = M.Y.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }),
    [n] = (0, s.c)([r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
  return (0, i.jsx)(i.Fragment, {
    children: e.enabled && e.nestedEntry && n === r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE && (0, i.jsx)(u.TextBadge, {
      className: O.newBadge,
      text: C.Z.Messages.NEW
    })
  })
}

function R(e, n, r, m) {
  var x, h;
  let R = (0, T.OR)(e),
    U = (0, T._c)(e, n),
    v = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
    p = (0, a.e7)([o.ZP], () => o.ZP.isMuted(e), [e]),
    P = _.ZP.canUseCustomNotificationSounds(v),
    j = P ? null != U ? U : R : g.YC.CLASSIC,
    G = M.Y.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [y, b] = l.useState(!1),
    {
      playSound: D
    } = (0, Z.Z)(),
    [L, F] = (0, s.c)([r]),
    V = L === r;
  if (l.useEffect(() => () => {
      y && F(S.L.TAKE_ACTION)
    }, [y, F]), !G) return null;
  let k = t => {
      if (D(t), F(S.L.TAKE_ACTION), !P && t !== g.YC.CLASSIC) {
        (0, E.Z)(t, "contextMenu"), (0, N.Z)();
        return
      }
      null != n ? (0, f.M)(e, n, j, t, "contextMenu") : (0, f.t)(e, j, t, "contextMenu")
    },
    Y = P ? u.Text : I.Z,
    z = (0, g.LB)(),
    w = null !== (h = null === (x = z.find(e => e.value === j)) || void 0 === x ? void 0 : x.label) && void 0 !== h ? h : C.Z.Messages.SOUNDPACK_DEFAULT_LABEL,
    K = (0, i.jsx)(u.TextBadge, {
      className: O.newBadge,
      text: C.Z.Messages.NEW
    });
  return (0, i.jsx)(u.MenuItem, {
    id: "notification-sounds",
    label: e => {
      let {
        isFocused: n
      } = e;
      return n && b(n), (0, i.jsxs)("div", {
        className: O.rootContainer,
        children: [(0, i.jsxs)("div", {
          children: [V && "top" === m && K, (0, i.jsxs)("div", {
            className: O.headerContainer,
            children: [(0, i.jsx)(Y, {
              className: O.text,
              color: n ? "always-white" : void 0,
              variant: "text-sm/medium",
              children: C.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
            }), (0, i.jsx)(u.NitroWheelIcon, {
              size: "xs",
              className: O.nitroWheel,
              color: n ? "white" : P ? void 0 : c.JX.PREMIUM_TIER_2
            })]
          }), null != w && (0, i.jsx)(Y, {
            className: O.text,
            color: n ? "always-white" : void 0,
            variant: "text-xs/normal",
            children: w
          })]
        }), V && "trailing" === m && K]
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
      children: [z.map((e, n) => (0, i.jsxs)(l.Fragment, {
        children: [P || e.value === g.YC.CLASSIC ? (0, i.jsx)(u.MenuRadioItem, {
          id: e.label,
          group: "notification-preset",
          checked: (null != j ? j : g.YC.CLASSIC) === e.value,
          label: e.label,
          action: () => k(e.value)
        }) : (0, i.jsx)(u.MenuItem, {
          id: e.label,
          label: n => {
            let {
              isFocused: t
            } = n;
            return (0, i.jsxs)("div", {
              className: O.labelContainer,
              children: [(0, i.jsx)(I.Z, {
                color: t ? "always-white" : void 0,
                variant: "text-sm/medium",
                children: e.label
              }), (0, i.jsx)(u.CirclePlayIcon, {
                className: O.playButton,
                color: t ? u.tokens.colors.INTERACTIVE_ACTIVE : u.tokens.colors.INTERACTIVE_NORMAL
              })]
            })
          },
          action: () => k(e.value)
        }), e.value === g.YC.CLASSIC ? (0, i.jsx)(u.MenuSeparator, {}) : null]
      }, n)), p && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.MenuSeparator, {}), (0, i.jsx)(u.MenuItem, {
          id: "label",
          label: (0, i.jsx)(u.Text, {
            className: O.mutedLabel,
            variant: "text-sm/medium",
            children: C.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
          })
        })]
      })]
    })
  })
}