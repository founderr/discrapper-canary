"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("481060"),
  r = s("596454"),
  o = s("906732"),
  d = s("856768"),
  u = s("993413"),
  c = s("921801"),
  S = s("208049"),
  E = s("763296"),
  T = s("242291"),
  _ = s("893663"),
  I = s("331642"),
  N = s("474333"),
  g = s("466111"),
  f = s("632184"),
  m = s("63063"),
  A = s("581883"),
  C = s("918257"),
  O = s("726985"),
  h = s("981631"),
  R = s("710111"),
  p = s("689938"),
  M = s("976130"),
  D = s("611273");

function x(e) {
  return (0, i.useStateFromStores)([E.default], () => {
    if (null == e) return null;
    let {
      guildId: t,
      soundId: s
    } = e;
    return E.default.getSound(t === R.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? R.DEFAULT_SOUND_GUILD_ID : t, s)
  })
}

function L() {
  let {
    analyticsLocations: e
  } = (0, o.default)(), [t, s] = n.useState(R.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID), r = (0, _.useCustomJoinSound)(t), f = x(r), A = (0, i.useStateFromStores)([E.default], () => E.default.hasFetchedAllSounds()), L = (null == r ? void 0 : r.type) === _.CustomSoundType.GLOBAL, b = A && null != r && null == f;
  n.useEffect(() => {
    b && (0, T.trackCustomCallSoundExternallyDeleted)({
      location: e
    })
  }, [b, e]), n.useEffect(() => {
    (0, S.maybeFetchSoundboardSounds)()
  }, []);
  let v = n.useCallback((e, t) => {
    let {
      inDropdown: s
    } = t;
    return null == e ? null : s ? (0, a.jsx)(P, {
      guildId: e.value
    }) : null
  }, []);
  return (0, a.jsxs)(l.FormSection, {
    className: M.container,
    tag: l.FormTitleTags.H1,
    titleClassName: D.__invalid_marginBottom16,
    title: p.default.Messages.SOUNDBOARD,
    children: [(0, a.jsx)(c.Subsetting, {
      setting: O.WebSetting.VOICE_AND_VIDEO_SOUNDBOARD,
      children: (0, a.jsx)(C.default, {})
    }), (0, a.jsxs)(c.Subsetting, {
      setting: O.WebSetting.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
      children: [(0, a.jsx)(l.FormDivider, {
        className: M.callSoundsDivider
      }), (0, a.jsx)(l.Heading, {
        variant: "text-md/medium",
        color: "header-primary",
        className: M.callSoundsTitle,
        children: p.default.Messages.CALL_SOUNDS_SETTINGS
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: p.default.Messages.CALL_SOUNDS_SETTINGS_DESCRIPTION_2.format({
          helpdeskArticle: m.default.getArticleURL(h.HelpdeskArticles.SOUNDBOARD)
        })
      }), (0, a.jsx)(d.default, {
        guildId: t,
        className: M.guildSelector,
        globalOption: {
          label: p.default.Messages.CALL_SOUNDS_SETTINGS_GLOBAL_GUILD_SEARCH,
          value: R.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID
        },
        onChange: e => s(null == e ? R.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : e.id),
        renderOptionSuffix: v,
        hideDivider: !0
      }), (0, a.jsxs)(u.default, {
        className: D.marginTop20,
        title: p.default.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND.format({
          nitroWheelHook: () => (0, a.jsx)(g.default, {
            className: M.nitroWheel
          })
        }),
        forcedDivider: !0,
        children: [(0, a.jsx)(I.default, {
          sound: f,
          isGlobal: L,
          onSelect: s => {
            null == s ? (0, T.removeCustomJoinSound)(t, e) : (0, T.updateCustomJoinSound)(t, s, e)
          }
        }), b && (0, a.jsx)(N.default, {
          className: M.notice,
          messageType: N.HelpMessageTypes.WARNING,
          children: p.default.Messages.CALL_SOUNDS_SETTINGS_SOUND_REMOVED
        })]
      })]
    })]
  })
}

function P(e) {
  let {
    guildId: t
  } = e, s = (0, i.useStateFromStores)([A.default], () => {
    var e, s, a;
    return null === (a = A.default.settings.guilds) || void 0 === a ? void 0 : null === (s = a.guilds) || void 0 === s ? void 0 : null === (e = s[t]) || void 0 === e ? void 0 : e.joinSound
  }), n = x(s);
  if (null == s || null == n) return null;
  let {
    emojiId: o,
    emojiName: d
  } = n, u = null != o || null != d;
  return (0, a.jsxs)("div", {
    className: M.pill,
    children: [u ? (0, a.jsx)(r.default, {
      emojiId: o,
      emojiName: d,
      className: M.pillIcon
    }) : (0, a.jsx)(f.default, {
      className: M.pillIcon
    }), (0, a.jsx)(l.Text, {
      className: M.pillText,
      variant: "text-xs/medium",
      children: n.name
    })]
  })
}