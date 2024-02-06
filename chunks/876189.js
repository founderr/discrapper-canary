"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  s = n("414456"),
  r = n.n(s),
  a = n("446674"),
  u = n("77078"),
  o = n("817963"),
  d = n("305961"),
  c = n("957255"),
  f = n("677099"),
  h = n("697218"),
  m = n("476263"),
  g = n("368121"),
  E = n("427459"),
  S = n("305122"),
  v = n("235004"),
  p = n("846325"),
  _ = n("782340"),
  N = n("151355");

function C(e) {
  let {
    availableSlots: t,
    className: n
  } = e;
  return (0, i.jsxs)(u.Text, {
    className: r(N.suffixNode, n),
    variant: "text-sm/medium",
    color: "text-primary",
    children: [(0, i.jsx)(g.default, {
      className: N.speakerIcon
    }), _.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
      slots: t
    })]
  })
}

function I(e) {
  let {
    value: t,
    className: n,
    onChange: s
  } = e, g = (0, a.useStateFromStoresObject)([f.default, c.default, h.default, d.default], () => {
    let e = {};
    for (let t of f.default.getFlattenedGuildIds()) {
      let n = d.default.getGuild(t);
      if (null == n) continue;
      let i = (0, o.getManageResourcePermissions)(n, c.default, h.default);
      i.canCreateExpressions && (e[n.id] = n)
    }
    return e
  }), I = (0, a.useStateFromStoresObject)([v.default], () => {
    let e = {};
    for (let [n, i] of Object.entries(g)) {
      var t;
      let l = (0, E.getAvailableSoundboardSoundCount)(null !== (t = v.default.getSoundsForGuild(n)) && void 0 !== t ? t : p.EMPTY_SOUND_LIST, i.premiumTier);
      e[n] = l
    }
    return e
  }, [g]);
  l.useEffect(() => {
    (0, S.maybeFetchSoundboardSounds)()
  }, []);
  let O = l.useMemo(() => Object.values(g).map(e => {
      let {
        name: t,
        id: n
      } = e;
      return {
        label: t,
        value: n,
        disabled: I[n] <= 0
      }
    }), [g, I]),
    A = l.useCallback(e => null == e || "" === e.value ? null : (0, i.jsx)(m.default, {
      className: r(N.guildSelectOptionIcon, {
        [N.disabledOption]: e.disabled
      }),
      guild: g[e.value],
      size: m.default.Sizes.SMOL,
      active: !0
    }), [g]),
    x = l.useCallback(e => {
      let t = null == e ? void 0 : e.value;
      return null == t || "" === t ? null : (0, i.jsx)(C, {
        className: r({
          [N.disabledOption]: null == e ? void 0 : e.disabled
        }),
        availableSlots: I[t]
      })
    }, [I]),
    D = l.useCallback(e => (0, i.jsx)("div", {
      className: r({
        [N.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    L = l.useCallback(e => {
      !(I[e] <= 0) && s(e)
    }, [I, s]),
    M = (() => {
      let e = I[null != t ? t : ""];
      return null == e || e > 0 ? t : void 0
    })();
  return (0, i.jsx)(u.SearchableSelect, {
    className: n,
    onChange: L,
    value: M,
    multi: !1,
    options: O,
    renderOptionPrefix: A,
    renderOptionSuffix: x,
    renderOptionLabel: D,
    placeholder: 0 === O.length ? _.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : _.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
  })
}