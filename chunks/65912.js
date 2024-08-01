t.d(n, {
  V: function() {
return N;
  },
  w: function() {
return A;
  }
});
var r = t(392711),
  i = t.n(r),
  o = t(652874),
  l = t(881052),
  u = t(823379),
  a = t(539573),
  s = t(236413),
  c = t(85960),
  d = t(36459),
  _ = t(422303),
  E = t(866894),
  f = t(981631),
  I = t(689938);
let T = Object.freeze({
editingRule: null,
hasChanges: !1,
isLoading: !1,
errorMessage: null
  }),
  S = (0, o.Z)((e, n) => ({
editingRule: null,
hasChanges: !1,
setEditingRule: t => {
  let r = n().editingRule,
    o = null != t && null != r && t.id === r.id,
    l = i().cloneDeep(t);
  null != l && (l = {
    ...l,
    actions: l.actions.filter(u.lm)
  }), e({
    editingRule: l,
    hasChanges: o,
    errorMessage: null
  });
},
createNewEditingRule: (n, t, r) => {
  let i = {
    ...(0, s.ep)(n, t),
    ...null != r ? r : {}
  };
  return e({
    editingRule: i,
    hasChanges: !1
  }), i;
},
isLoading: !1,
errorMessage: null,
cancelEditingRule: () => {
  e({
    ...T
  });
},
saveRule: async (n, t) => {
  if (null == n)
    return e({
      ...T
    }), null;
  try {
    var r, i, o;
    (0, s.DO)(n) && (n.triggerMetadata.keywordFilter = (0, _.cb)((0, _.Ze)(null !== (r = n.triggerMetadata.keywordFilter) && void 0 !== r ? r : [])), n.triggerMetadata.allowList = (0, _.cb)((0, _.Ze)(null !== (i = n.triggerMetadata.allowList) && void 0 !== i ? i : []))), (0, s.Fn)(n) && (n.triggerMetadata.allowList = (0, _.cb)((0, _.Ze)(null !== (o = n.triggerMetadata.allowList) && void 0 !== o ? o : []))), (0, c.yU)(n, t), (0, s.QO)(n);
  } catch (n) {
    return n instanceof a.V6 ? e({
      errorMessage: I.Z.Messages.GUILD_AUTOMOD_KEYWORD_GENERIC_SAVE_ERROR,
      isLoading: !1
    }) : n instanceof a.uS ? e({
      errorMessage: I.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,
      isLoading: !1
    }) : e({
      errorMessage: n.message,
      isLoading: !1
    }), null;
  }
  try {
    e({
      isLoading: !0
    });
    let t = null;
    return t = (0, s.Vb)(n) && !(0, E.U)(n.id) ? await (0, d.Je)(n) : await (0, d.JK)(n), e({
      ...T
    }), t;
  } catch (n) {
    e({
      isLoading: !1,
      errorMessage: function(e) {
        if (e.code === f.evJ.INVALID_FORM_BODY) {
          var n, t;
          if ((null === (t = e.errors) || void 0 === t ? void 0 : null === (n = t.trigger_metadata) || void 0 === n ? void 0 : n.regex_patterns) != null)
            return I.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR;
        }
        return e.getAnyErrorMessage();
      }(new l.Hx(n))
    });
  }
  return null;
},
saveEditingRule: e => {
  let {
    editingRule: t,
    saveRule: r
  } = n();
  return r(t, e);
}
  }));

function A() {
  return S(e => ({
hasChanges: e.hasChanges,
editingRule: e.editingRule,
isLoading: e.isLoading,
errorMessage: e.errorMessage,
saveRule: e.saveRule,
saveEditingRule: e.saveEditingRule,
cancelEditingRule: e.cancelEditingRule
  }));
}

function N() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
n = S(e => ({
  hasChanges: e.hasChanges,
  editingRule: e.editingRule,
  setEditingRule: e.setEditingRule,
  createNewEditingRule: e.createNewEditingRule
}));
  return null != e && n.setEditingRule(e), n;
}