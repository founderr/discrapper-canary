"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  i = n("414456"),
  l = n.n(i),
  s = n("446674"),
  u = n("77078"),
  o = n("817963"),
  d = n("305961"),
  c = n("957255"),
  f = n("677099"),
  h = n("697218"),
  m = n("476263"),
  g = n("368121"),
  p = n("427459"),
  v = n("305122"),
  S = n("235004"),
  C = n("846325"),
  E = n("782340"),
  _ = n("151355");

function N(e) {
  let {
    availableSlots: t,
    className: n
  } = e;
  return (0, a.jsxs)(u.Text, {
    className: l(_.suffixNode, n),
    variant: "text-sm/medium",
    color: "text-primary",
    children: [(0, a.jsx)(g.default, {
      className: _.speakerIcon
    }), E.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
      slots: t
    })]
  })
}

function I(e) {
  let {
    value: t,
    className: n,
    onChange: i
  } = e, g = (0, s.useStateFromStoresObject)([f.default, c.default, h.default, d.default], () => {
    let e = {};
    for (let t of f.default.getFlattenedGuildIds()) {
      let n = d.default.getGuild(t);
      if (null == n) continue;
      let a = (0, o.getManageResourcePermissions)(n, c.default, h.default);
      a.canCreateExpressions && (e[n.id] = n)
    }
    return e
  }), I = (0, s.useStateFromStoresObject)([S.default], () => {
    let e = {};
    for (let [n, a] of Object.entries(g)) {
      var t;
      let r = (0, p.getAvailableSoundboardSoundCount)(null !== (t = S.default.getSoundsForGuild(n)) && void 0 !== t ? t : C.EMPTY_SOUND_LIST, a.premiumTier);
      e[n] = r
    }
    return e
  }, [g]);
  r.useEffect(() => {
    (0, v.maybeFetchSoundboardSounds)()
  }, []);
  let O = r.useMemo(() => Object.values(g).map(e => {
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
    A = r.useCallback(e => null == e || "" === e.value ? null : (0, a.jsx)(m.default, {
      className: l(_.guildSelectOptionIcon, {
        [_.disabledOption]: e.disabled
      }),
      guild: g[e.value],
      size: m.default.Sizes.SMOL,
      active: !0
    }), [g]),
    D = r.useCallback(e => {
      let t = null == e ? void 0 : e.value;
      return null == t || "" === t ? null : (0, a.jsx)(N, {
        className: l({
          [_.disabledOption]: null == e ? void 0 : e.disabled
        }),
        availableSlots: I[t]
      })
    }, [I]),
    M = r.useCallback(e => (0, a.jsx)("div", {
      className: l({
        [_.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    y = r.useCallback(e => {
      !(I[e] <= 0) && i(e)
    }, [I, i]),
    b = (() => {
      let e = I[null != t ? t : ""];
      return null == e || e > 0 ? t : void 0
    })();
  return (0, a.jsx)(u.SearchableSelect, {
    className: n,
    onChange: y,
    value: b,
    multi: !1,
    options: O,
    renderOptionPrefix: A,
    renderOptionSuffix: D,
    renderOptionLabel: M,
    placeholder: 0 === O.length ? E.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : E.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
  })
}