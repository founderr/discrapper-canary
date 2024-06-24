t.d(s, {
  Z: function() {
    return D
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(596454),
  o = t(906732),
  c = t(856768),
  E = t(993413),
  d = t(921801),
  _ = t(208049),
  T = t(763296),
  S = t(242291),
  u = t(893663),
  I = t(331642),
  N = t(474333),
  A = t(63063),
  C = t(581883),
  O = t(918257),
  m = t(726985),
  h = t(981631),
  g = t(710111),
  R = t(689938),
  M = t(934025),
  x = t(331651);

function p(e) {
  return (0, a.e7)([T.Z], () => {
    if (null == e) return null;
    let {
      guildId: s,
      soundId: t
    } = e;
    return T.Z.getSound(s === g.hY ? g.X8 : s, t)
  })
}

function D() {
  let {
    analyticsLocations: e
  } = (0, o.ZP)(), [s, t] = i.useState(g.hY), r = (0, u.tT)(s), C = p(r), D = (0, a.e7)([T.Z], () => T.Z.hasFetchedAllSounds()), P = (null == r ? void 0 : r.type) === u.zx.GLOBAL, Z = D && null != r && null == C;
  i.useEffect(() => {
    Z && (0, S.tt)({
      location: e
    })
  }, [Z, e]), i.useEffect(() => {
    (0, _.w)()
  }, []);
  let f = i.useCallback((e, s) => {
    let {
      inDropdown: t
    } = s;
    return null == e ? null : t ? (0, n.jsx)(L, {
      guildId: e.value
    }) : null
  }, []);
  return (0, n.jsxs)(l.FormSection, {
    className: M.container,
    tag: l.FormTitleTags.H1,
    titleClassName: x.__invalid_marginBottom16,
    title: R.Z.Messages.SOUNDBOARD,
    children: [(0, n.jsx)(d.F, {
      setting: m.s6.VOICE_AND_VIDEO_SOUNDBOARD,
      children: (0, n.jsx)(O.Z, {})
    }), (0, n.jsxs)(d.F, {
      setting: m.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
      children: [(0, n.jsx)(l.FormDivider, {
        className: M.callSoundsDivider
      }), (0, n.jsx)(l.Heading, {
        variant: "text-md/medium",
        color: "header-primary",
        className: M.callSoundsTitle,
        children: R.Z.Messages.CALL_SOUNDS_SETTINGS
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: R.Z.Messages.CALL_SOUNDS_SETTINGS_DESCRIPTION_2.format({
          helpdeskArticle: A.Z.getArticleURL(h.BhN.SOUNDBOARD)
        })
      }), (0, n.jsx)(c.Z, {
        guildId: s,
        className: M.guildSelector,
        globalOption: {
          label: R.Z.Messages.CALL_SOUNDS_SETTINGS_GLOBAL_GUILD_SEARCH,
          value: g.hY
        },
        onChange: e => t(null == e ? g.hY : e.id),
        renderOptionSuffix: f,
        hideDivider: !0
      }), (0, n.jsxs)(E.Z, {
        className: x.marginTop20,
        title: R.Z.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND.format({
          nitroWheelHook: () => (0, n.jsx)(l.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: M.nitroWheel
          })
        }),
        forcedDivider: !0,
        children: [(0, n.jsx)(I.Z, {
          sound: C,
          isGlobal: P,
          onSelect: t => {
            null == t ? (0, S.aC)(s, e) : (0, S.SZ)(s, t, e)
          }
        }), Z && (0, n.jsx)(N.Z, {
          className: M.notice,
          messageType: N.Q.WARNING,
          children: R.Z.Messages.CALL_SOUNDS_SETTINGS_SOUND_REMOVED
        })]
      })]
    })]
  })
}

function L(e) {
  let {
    guildId: s
  } = e, t = (0, a.e7)([C.Z], () => {
    var e, t, n;
    return null === (n = C.Z.settings.guilds) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : null === (e = t[s]) || void 0 === e ? void 0 : e.joinSound
  }), i = p(t);
  if (null == t || null == i) return null;
  let {
    emojiId: o,
    emojiName: c
  } = i, E = null != o || null != c;
  return (0, n.jsxs)("div", {
    className: M.pill,
    children: [E ? (0, n.jsx)(r.Z, {
      emojiId: o,
      emojiName: c,
      className: M.pillIcon
    }) : (0, n.jsx)(l.VoiceNormalIcon, {
      size: "md",
      color: "currentColor",
      className: M.pillIcon
    }), (0, n.jsx)(l.Text, {
      className: M.pillText,
      variant: "text-xs/medium",
      children: i.name
    })]
  })
}