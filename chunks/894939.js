"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("596454"),
  o = s("906732"),
  d = s("856768"),
  u = s("993413"),
  c = s("208049"),
  S = s("763296"),
  E = s("242291"),
  T = s("893663"),
  _ = s("331642"),
  I = s("474333"),
  N = s("466111"),
  f = s("632184"),
  g = s("63063"),
  m = s("581883"),
  C = s("918257"),
  A = s("981631"),
  h = s("710111"),
  O = s("689938"),
  p = s("976130"),
  R = s("611273");

function x(e) {
  return (0, l.useStateFromStores)([S.default], () => {
    if (null == e) return null;
    let {
      guildId: t,
      soundId: s
    } = e;
    return S.default.getSound(t === h.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? h.DEFAULT_SOUND_GUILD_ID : t, s)
  })
}

function M() {
  let {
    analyticsLocations: e
  } = (0, o.default)(), [t, s] = n.useState(h.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID), r = (0, T.useCustomJoinSound)(t), f = x(r), m = (0, l.useStateFromStores)([S.default], () => S.default.hasFetchedAllSounds()), M = (null == r ? void 0 : r.type) === T.CustomSoundType.GLOBAL, L = m && null != r && null == f;
  n.useEffect(() => {
    L && (0, E.trackCustomCallSoundExternallyDeleted)({
      location: e
    })
  }, [L, e]), n.useEffect(() => {
    (0, c.maybeFetchSoundboardSounds)()
  }, []);
  let P = n.useCallback((e, t) => {
    let {
      inDropdown: s
    } = t;
    return null == e ? null : s ? (0, a.jsx)(D, {
      guildId: e.value
    }) : null
  }, []);
  return (0, a.jsxs)(i.FormSection, {
    className: p.container,
    tag: i.FormTitleTags.H1,
    titleClassName: R.__invalid_marginBottom16,
    title: O.default.Messages.SOUNDBOARD,
    children: [(0, a.jsx)(C.default, {}), (0, a.jsx)(i.FormDivider, {
      className: p.callSoundsDivider
    }), (0, a.jsx)(i.Heading, {
      variant: "text-md/medium",
      color: "header-primary",
      className: p.callSoundsTitle,
      children: O.default.Messages.CALL_SOUNDS_SETTINGS
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      children: O.default.Messages.CALL_SOUNDS_SETTINGS_DESCRIPTION_2.format({
        helpdeskArticle: g.default.getArticleURL(A.HelpdeskArticles.SOUNDBOARD)
      })
    }), (0, a.jsx)(d.default, {
      guildId: t,
      className: p.guildSelector,
      globalOption: {
        label: O.default.Messages.CALL_SOUNDS_SETTINGS_GLOBAL_GUILD_SEARCH,
        value: h.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID
      },
      onChange: e => s(null == e ? h.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : e.id),
      renderOptionSuffix: P,
      hideDivider: !0
    }), (0, a.jsxs)(u.default, {
      className: R.marginTop20,
      title: O.default.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND.format({
        nitroWheelHook: () => (0, a.jsx)(N.default, {
          className: p.nitroWheel
        })
      }),
      forcedDivider: !0,
      children: [(0, a.jsx)(_.default, {
        sound: f,
        isGlobal: M,
        onSelect: s => {
          null == s ? (0, E.removeCustomJoinSound)(t, e) : (0, E.updateCustomJoinSound)(t, s, e)
        }
      }), L && (0, a.jsx)(I.default, {
        className: p.notice,
        messageType: I.HelpMessageTypes.WARNING,
        children: O.default.Messages.CALL_SOUNDS_SETTINGS_SOUND_REMOVED
      })]
    })]
  })
}

function D(e) {
  let {
    guildId: t
  } = e, s = (0, l.useStateFromStores)([m.default], () => {
    var e, s, a;
    return null === (a = m.default.settings.guilds) || void 0 === a ? void 0 : null === (s = a.guilds) || void 0 === s ? void 0 : null === (e = s[t]) || void 0 === e ? void 0 : e.joinSound
  }), n = x(s);
  if (null == s || null == n) return null;
  let {
    emojiId: o,
    emojiName: d
  } = n, u = null != o || null != d;
  return (0, a.jsxs)("div", {
    className: p.pill,
    children: [u ? (0, a.jsx)(r.default, {
      emojiId: o,
      emojiName: d,
      className: p.pillIcon
    }) : (0, a.jsx)(f.default, {
      className: p.pillIcon
    }), (0, a.jsx)(i.Text, {
      className: p.pillText,
      variant: "text-xs/medium",
      children: n.name
    })]
  })
}