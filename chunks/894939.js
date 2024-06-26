t.d(s, {
  Z: function() {
    return D
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(481060),
  o = t(596454),
  l = t(906732),
  c = t(856768),
  d = t(993413),
  _ = t(921801),
  E = t(208049),
  u = t(763296),
  T = t(242291),
  S = t(893663),
  I = t(331642),
  N = t(474333),
  C = t(63063),
  m = t(581883),
  A = t(918257),
  O = t(726985),
  g = t(981631),
  h = t(710111),
  R = t(689938),
  p = t(934025),
  x = t(331651);

function M(e) {
  return (0, i.e7)([u.Z], () => {
    if (null == e) return null;
    let {
      guildId: s,
      soundId: t
    } = e;
    return u.Z.getSound(s === h.hY ? h.X8 : s, t)
  })
}

function D() {
  let {
    analyticsLocations: e
  } = (0, l.ZP)(), [s, t] = a.useState(h.hY), o = (0, S.tT)(s), m = M(o), D = (0, i.e7)([u.Z], () => u.Z.hasFetchedAllSounds()), L = (null == o ? void 0 : o.type) === S.zx.GLOBAL, P = D && null != o && null == m;
  a.useEffect(() => {
    P && (0, T.tt)({
      location: e
    })
  }, [P, e]), a.useEffect(() => {
    (0, E.w)()
  }, []);
  let Z = a.useCallback((e, s) => {
    let {
      inDropdown: t
    } = s;
    return null == e ? null : t ? (0, n.jsx)(f, {
      guildId: e.value
    }) : null
  }, []);
  return (0, n.jsxs)(r.FormSection, {
    className: p.container,
    tag: r.FormTitleTags.H1,
    titleClassName: x.__invalid_marginBottom16,
    title: R.Z.Messages.SOUNDBOARD,
    children: [(0, n.jsx)(_.F, {
      setting: O.s6.VOICE_AND_VIDEO_SOUNDBOARD,
      children: (0, n.jsx)(A.Z, {})
    }), (0, n.jsxs)(_.F, {
      setting: O.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
      children: [(0, n.jsx)(r.FormDivider, {
        className: p.callSoundsDivider
      }), (0, n.jsx)(r.Heading, {
        variant: "text-md/medium",
        color: "header-primary",
        className: p.callSoundsTitle,
        children: R.Z.Messages.CALL_SOUNDS_SETTINGS
      }), (0, n.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: R.Z.Messages.CALL_SOUNDS_SETTINGS_DESCRIPTION_2.format({
          helpdeskArticle: C.Z.getArticleURL(g.BhN.SOUNDBOARD)
        })
      }), (0, n.jsx)(c.Z, {
        guildId: s,
        className: p.guildSelector,
        globalOption: {
          label: R.Z.Messages.CALL_SOUNDS_SETTINGS_GLOBAL_GUILD_SEARCH,
          value: h.hY
        },
        onChange: e => t(null == e ? h.hY : e.id),
        renderOptionSuffix: Z,
        hideDivider: !0
      }), (0, n.jsxs)(d.Z, {
        className: x.marginTop20,
        title: R.Z.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND.format({
          nitroWheelHook: () => (0, n.jsx)(r.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: p.nitroWheel
          })
        }),
        forcedDivider: !0,
        children: [(0, n.jsx)(I.Z, {
          sound: m,
          isGlobal: L,
          onSelect: t => {
            null == t ? (0, T.aC)(s, e) : (0, T.SZ)(s, t, e)
          }
        }), P && (0, n.jsx)(N.Z, {
          className: p.notice,
          messageType: N.Q.WARNING,
          children: R.Z.Messages.CALL_SOUNDS_SETTINGS_SOUND_REMOVED
        })]
      })]
    })]
  })
}

function f(e) {
  let {
    guildId: s
  } = e, t = (0, i.e7)([m.Z], () => {
    var e, t, n;
    return null === (n = m.Z.settings.guilds) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : null === (e = t[s]) || void 0 === e ? void 0 : e.joinSound
  }), a = M(t);
  if (null == t || null == a) return null;
  let {
    emojiId: l,
    emojiName: c
  } = a, d = null != l || null != c;
  return (0, n.jsxs)("div", {
    className: p.pill,
    children: [d ? (0, n.jsx)(o.Z, {
      emojiId: l,
      emojiName: c,
      className: p.pillIcon
    }) : (0, n.jsx)(r.VoiceNormalIcon, {
      size: "md",
      color: "currentColor",
      className: p.pillIcon
    }), (0, n.jsx)(r.Text, {
      className: p.pillText,
      variant: "text-xs/medium",
      children: a.name
    })]
  })
}