"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("446674"),
  u = n("77078"),
  o = n("817963"),
  d = n("305961"),
  c = n("957255"),
  f = n("677099"),
  h = n("697218"),
  m = n("476263"),
  g = n("368121"),
  S = n("427459"),
  p = n("305122"),
  v = n("235004"),
  C = n("846325"),
  E = n("782340"),
  _ = n("151355");

function N(e) {
  let {
    availableSlots: t,
    className: n
  } = e;
  return (0, l.jsxs)(u.Text, {
    className: s(_.suffixNode, n),
    variant: "text-sm/medium",
    color: "text-primary",
    children: [(0, l.jsx)(g.default, {
      className: _.speakerIcon
    }), E.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
      slots: t
    })]
  })
}

function A(e) {
  let {
    value: t,
    className: n,
    onChange: a
  } = e, g = (0, r.useStateFromStoresObject)([f.default, c.default, h.default, d.default], () => {
    let e = {};
    for (let t of f.default.getFlattenedGuildIds()) {
      let n = d.default.getGuild(t);
      if (null == n) continue;
      let l = (0, o.getManageResourcePermissions)(n, c.default, h.default);
      l.canCreateExpressions && (e[n.id] = n)
    }
    return e
  }), A = (0, r.useStateFromStoresObject)([v.default], () => {
    let e = {};
    for (let [n, l] of Object.entries(g)) {
      var t;
      let i = (0, S.getAvailableSoundboardSoundCount)(null !== (t = v.default.getSoundsForGuild(n)) && void 0 !== t ? t : C.EMPTY_SOUND_LIST, l.premiumTier);
      e[n] = i
    }
    return e
  }, [g]);
  i.useEffect(() => {
    (0, p.maybeFetchSoundboardSounds)()
  }, []);
  let D = i.useMemo(() => Object.values(g).map(e => {
      let {
        name: t,
        id: n
      } = e;
      return {
        label: t,
        value: n,
        disabled: A[n] <= 0
      }
    }), [g, A]),
    y = i.useCallback(e => null == e || "" === e.value ? null : (0, l.jsx)(m.default, {
      className: s(_.guildSelectOptionIcon, {
        [_.disabledOption]: e.disabled
      }),
      guild: g[e.value],
      size: m.default.Sizes.SMOL,
      active: !0
    }), [g]),
    O = i.useCallback(e => {
      let t = null == e ? void 0 : e.value;
      return null == t || "" === t ? null : (0, l.jsx)(N, {
        className: s({
          [_.disabledOption]: null == e ? void 0 : e.disabled
        }),
        availableSlots: A[t]
      })
    }, [A]),
    I = i.useCallback(e => (0, l.jsx)("div", {
      className: s({
        [_.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    x = i.useCallback(e => {
      !(A[e] <= 0) && a(e)
    }, [A, a]),
    b = (() => {
      let e = A[null != t ? t : ""];
      return null == e || e > 0 ? t : void 0
    })();
  return (0, l.jsx)(u.SearchableSelect, {
    className: n,
    onChange: x,
    value: b,
    multi: !1,
    options: D,
    renderOptionPrefix: y,
    renderOptionSuffix: O,
    renderOptionLabel: I,
    placeholder: 0 === D.length ? E.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : E.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
  })
}