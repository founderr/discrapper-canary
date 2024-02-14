"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  i = n("414456"),
  s = n.n(i),
  r = n("446674"),
  u = n("77078"),
  o = n("817963"),
  d = n("305961"),
  c = n("957255"),
  f = n("677099"),
  h = n("697218"),
  m = n("476263"),
  g = n("368121"),
  E = n("427459"),
  S = n("299039"),
  v = n("305122"),
  _ = n("235004"),
  N = n("846325"),
  p = n("49111"),
  A = n("782340"),
  D = n("216445");

function O(e) {
  let {
    availableSlots: t,
    className: n
  } = e;
  return (0, a.jsxs)(u.Text, {
    className: s(D.suffixNode, n),
    variant: "text-sm/medium",
    color: "text-primary",
    children: [(0, a.jsx)(g.default, {
      className: D.speakerIcon
    }), A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
      slots: t
    })]
  })
}

function C(e) {
  let {
    value: t,
    className: n,
    onChange: i
  } = e, g = (0, r.useStateFromStoresObject)([f.default, c.default, h.default, d.default], () => {
    let e = {};
    for (let t of f.default.getFlattenedGuildIds()) {
      let n = d.default.getGuild(t);
      if (null == n) continue;
      let a = (0, o.getManageResourcePermissions)(n, c.default, h.default);
      a.canCreateExpressions && (e[n.id] = n)
    }
    return e
  }), C = (0, r.useStateFromStoresObject)([_.default], () => {
    let e = {};
    for (let [n, a] of S.default.entries(g)) {
      var t;
      let l = (0, E.getAvailableSoundboardSoundCount)(null !== (t = _.default.getSoundsForGuild(n)) && void 0 !== t ? t : N.EMPTY_SOUND_LIST, a.premiumTier);
      e[n] = l
    }
    return e
  }, [g]);
  l.useEffect(() => {
    (0, v.maybeFetchSoundboardSounds)()
  }, []);
  let b = l.useMemo(() => Object.values(g).map(e => {
      let {
        name: t,
        id: n
      } = e;
      return {
        label: t,
        value: n,
        disabled: C[n] <= 0
      }
    }), [g, C]),
    I = l.useCallback(e => null == e || "" === e.value ? null : (0, a.jsx)(m.default, {
      className: s(D.guildSelectOptionIcon, {
        [D.disabledOption]: e.disabled
      }),
      guild: g[e.value],
      size: m.default.Sizes.SMOL,
      active: !0
    }), [g]),
    x = l.useCallback(e => {
      let t = null == e ? void 0 : e.value;
      return null == t || "" === t ? null : (0, a.jsx)(O, {
        className: s({
          [D.disabledOption]: null == e ? void 0 : e.disabled
        }),
        availableSlots: C[t]
      })
    }, [C]),
    M = l.useCallback(e => (0, a.jsx)("div", {
      className: s({
        [D.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    T = l.useCallback(e => {
      !(C[e] <= 0) && i(e)
    }, [C, i]),
    y = (() => {
      let e = C[null != t ? t : p.EMPTY_STRING_GUILD_ID];
      return null == e || e > 0 ? t : void 0
    })();
  return (0, a.jsx)(u.SearchableSelect, {
    className: n,
    onChange: T,
    value: y,
    multi: !1,
    options: b,
    renderOptionPrefix: I,
    renderOptionSuffix: x,
    renderOptionLabel: M,
    placeholder: 0 === b.length ? A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
  })
}