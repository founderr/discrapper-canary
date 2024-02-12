"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
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
  v = n("299039"),
  S = n("305122"),
  C = n("235004"),
  E = n("846325"),
  _ = n("49111"),
  N = n("782340"),
  I = n("151355");

function O(e) {
  let {
    availableSlots: t,
    className: n
  } = e;
  return (0, a.jsxs)(u.Text, {
    className: l(I.suffixNode, n),
    variant: "text-sm/medium",
    color: "text-primary",
    children: [(0, a.jsx)(g.default, {
      className: I.speakerIcon
    }), N.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
      slots: t
    })]
  })
}

function A(e) {
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
  }), A = (0, s.useStateFromStoresObject)([C.default], () => {
    let e = {};
    for (let [n, a] of v.default.entries(g)) {
      var t;
      let r = (0, p.getAvailableSoundboardSoundCount)(null !== (t = C.default.getSoundsForGuild(n)) && void 0 !== t ? t : E.EMPTY_SOUND_LIST, a.premiumTier);
      e[n] = r
    }
    return e
  }, [g]);
  r.useEffect(() => {
    (0, S.maybeFetchSoundboardSounds)()
  }, []);
  let D = r.useMemo(() => Object.values(g).map(e => {
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
    M = r.useCallback(e => null == e || "" === e.value ? null : (0, a.jsx)(m.default, {
      className: l(I.guildSelectOptionIcon, {
        [I.disabledOption]: e.disabled
      }),
      guild: g[e.value],
      size: m.default.Sizes.SMOL,
      active: !0
    }), [g]),
    y = r.useCallback(e => {
      let t = null == e ? void 0 : e.value;
      return null == t || "" === t ? null : (0, a.jsx)(O, {
        className: l({
          [I.disabledOption]: null == e ? void 0 : e.disabled
        }),
        availableSlots: A[t]
      })
    }, [A]),
    b = r.useCallback(e => (0, a.jsx)("div", {
      className: l({
        [I.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    x = r.useCallback(e => {
      !(A[e] <= 0) && i(e)
    }, [A, i]),
    w = (() => {
      let e = A[null != t ? t : _.EMPTY_STRING_GUILD_ID];
      return null == e || e > 0 ? t : void 0
    })();
  return (0, a.jsx)(u.SearchableSelect, {
    className: n,
    onChange: x,
    value: w,
    multi: !1,
    options: D,
    renderOptionPrefix: M,
    renderOptionSuffix: y,
    renderOptionLabel: b,
    placeholder: 0 === D.length ? N.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : N.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
  })
}