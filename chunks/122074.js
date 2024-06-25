t.d(n, {
  U: function() {
    return O
  },
  Uf: function() {
    return m
  },
  ng: function() {
    return h
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
  x = t(193504);

function h(e, n) {
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

function m(e, n, t) {
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
      className: x.newBadge,
      text: g.Z.Messages.NEW
    })
  })
}

function R(e, n, r, h) {
  var m, O;
  let R = (0, T.OR)(e),
    U = (0, T._c)(e, n),
    p = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
    v = (0, l.e7)([o.ZP], () => o.ZP.isMuted(e), [e]),
    j = _.ZP.canUseCustomNotificationSounds(p),
    P = j ? null != U ? U : R : S.YC.CLASSIC,
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
      if (L(t), F(C.L.TAKE_ACTION), !j && t !== S.YC.CLASSIC) {
        (0, E.Z)(t, "contextMenu"), (0, N.Z)();
        return
      }
      null != n ? (0, f.M)(e, n, P, t, "contextMenu") : (0, f.t)(e, P, t, "contextMenu")
    },
    Y = j ? u.Text : M.Z,
    z = (0, S.LB)(),
    w = null !== (O = null === (m = z.find(e => e.value === P)) || void 0 === m ? void 0 : m.label) && void 0 !== O ? O : g.Z.Messages.SOUNDPACK_DEFAULT_LABEL,
    K = (0, i.jsx)(u.TextBadge, {
      className: x.newBadge,
      text: g.Z.Messages.NEW
    });
  return (0, i.jsx)(u.MenuItem, {
    id: "notification-sounds",
    label: e => {
      let {
        isFocused: n
      } = e;
      return n && b(n), (0, i.jsxs)("div", {
        className: x.rootContainer,
        children: [(0, i.jsxs)("div", {
          children: [V && "top" === h && K, (0, i.jsxs)("div", {
            className: x.headerContainer,
            children: [(0, i.jsx)(Y, {
              className: x.text,
              color: n ? "always-white" : void 0,
              variant: "text-sm/medium",
              children: g.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
            }), (0, i.jsx)(u.NitroWheelIcon, {
              size: "xs",
              className: x.nitroWheel,
              color: n ? "white" : j ? void 0 : c.JX.PREMIUM_TIER_2
            })]
          }), null != w && (0, i.jsx)(Y, {
            className: x.text,
            color: n ? "always-white" : void 0,
            variant: "text-xs/normal",
            children: w
          })]
        }), V && "trailing" === h && K]
      })
    },
    action: e !== A.aIL ? () => (0, u.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([t.e("86977"), t.e("5863"), t.e("48856")]).then(t.bind(t, 751212));
      return t => (0, i.jsx)(n, {
        ...t,
        guildId: e
      })
    }) : void 0,
    hasSubmenu: !0,
    children: (0, i.jsxs)(u.MenuGroup, {
      children: [z.map((e, n) => (0, i.jsxs)(a.Fragment, {
        children: [j || e.value === S.YC.CLASSIC ? (0, i.jsx)(u.MenuRadioItem, {
          id: e.label,
          group: "notification-preset",
          checked: (null != P ? P : S.YC.CLASSIC) === e.value,
          label: e.label,
          action: () => k(e.value)
        }) : (0, i.jsx)(u.MenuItem, {
          id: e.label,
          label: n => {
            let {
              isFocused: t
            } = n;
            return (0, i.jsxs)("div", {
              className: x.labelContainer,
              children: [(0, i.jsx)(M.Z, {
                color: t ? "always-white" : void 0,
                variant: "text-sm/medium",
                children: e.label
              }), (0, i.jsx)(u.CirclePlayIcon, {
                className: x.playButton,
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
            className: x.mutedLabel,
            variant: "text-sm/medium",
            children: g.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
          })
        })]
      })]
    })
  })
}