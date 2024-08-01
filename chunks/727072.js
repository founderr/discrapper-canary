t.d(n, {
  I2: function() {
return I;
  },
  RD: function() {
return T;
  },
  mY: function() {
return f;
  },
  pH: function() {
return S;
  }
}), t(653041), t(47120), t(724458);
var r = t(470079),
  i = t(652874),
  o = t(143927),
  l = t(881052),
  u = t(36459),
  a = t(866894),
  s = t(273504),
  c = t(981631);
let d = {},
  _ = e => {
let n = {
  [s.fX.KEYWORD]: [],
  [s.fX.ML_SPAM]: [],
  [s.fX.DEFAULT_KEYWORD_LIST]: [],
  [s.fX.MENTION_SPAM]: [],
  [s.fX.USER_PROFILE]: [],
  [s.fX.SERVER_POLICY]: []
};
return e.forEach(e => {
  var t;
  let {
    triggerType: r
  } = e;
  null === (t = n[r]) || void 0 === t || t.push(e);
}), n;
  },
  E = (0, i.Z)((e, n) => ({
rules: {},
fetching: !1,
error: null,
updateRule: t => {
  var r, i;
  let {
    guildId: o,
    id: l,
    triggerType: u
  } = t, {
    rules: s
  } = n(), c = null !== (r = s[o]) && void 0 !== r ? r : {}, d = null !== (i = c[u]) && void 0 !== i ? i : [], _ = d.some(e => e.id === l), E = d.filter(e => (!(0, a.U)(e.id) || e.triggerType !== u) && !0), f = _ ? E.map(e => e.id === l ? t : e) : [
    ...E,
    t
  ];
  e({
    rules: {
      ...s,
      [o]: {
        ...c,
        [u]: f
      }
    },
    error: null
  });
},
removeRule: (t, r) => {
  let {
    rules: i
  } = n(), o = i[r], l = Object.keys(o).reduce((e, n) => {
    var r;
    let i = Number(n),
      l = null !== (r = o[i]) && void 0 !== r ? r : [];
    return e[i] = l.filter(e => e.id !== t), e;
  }, o);
  e({
    rules: {
      ...i,
      [r]: l
    },
    error: null
  });
},
syncRules: async t => {
  if (!! function(e) {
      var n;
      let t = Date.now(),
        r = null !== (n = d[e]) && void 0 !== n ? n : 0;
      return t - r > 20000;
    }(t)) {
    d[t] = Date.now();
    try {
      let r = await (0, u.$Y)(t),
        i = _(r),
        o = n().rules;
      e({
        rules: {
          ...o,
          [t]: i
        },
        error: null
      });
    } catch (n) {
      e({
        error: new l.Hx(n)
      });
    }
  }
}
  })),
  f = (e, n) => {
var t, r;
return (null !== (r = null === (t = E.getState().rules[e]) || void 0 === t ? void 0 : t[n]) && void 0 !== r ? r : []).length;
  };

function I(e) {
  let [n, t] = r.useState(!1), [i, l] = E(e => [
e.syncRules,
e.fetching
  ], o.Z);
  return [
n,
r.useCallback(async () => {
  if (!l && null != e)
    try {
      t(!0), await i(e);
    } finally {
      t(!1);
    }
}, [
  e,
  l,
  i
])
  ];
}

function T(e) {
  let [n, t] = I(e);
  return r.useEffect(() => {
(async () => {
  await t();
})();
  }, [
e,
t
  ]), [
n,
t
  ];
}

function S(e) {
  return E(n => {
var t;
return {
  rulesByTriggerType: null !== (t = n.rules[null != e ? e : c.lds]) && void 0 !== t ? t : {},
  updateRule: n.updateRule,
  removeRule: n.removeRule
};
  });
}