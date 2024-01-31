"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("454686"),
  i = s("254365"),
  r = s("151866"),
  o = s("155158"),
  d = s("872708"),
  u = s("567062"),
  c = s("736523"),
  E = n.memo(function(e) {
    let {
      rule: t,
      persistEdit: s = !1,
      initWithEdit: E = !1
    } = e, {
      hasChanges: _,
      editingRule: T,
      createNewEditingRule: I,
      setEditingRule: S
    } = (0, r.useAutomodEditingRuleState)(), {
      isLoading: N
    } = (0, r.useAutomodEditingRuleActions)(), [f] = n.useState(() => !(0, l.isBackendPersistedRule)(t)), g = (null == T ? void 0 : T.id) === t.id || s, A = (0, i.isDefaultRuleId)(null == t ? void 0 : t.id), L = g && null != T ? T : t, m = n.useMemo(() => (0, o.createOnPreventNavigation)(t.name), [null == t ? void 0 : t.name]), C = n.useCallback(() => {
      I(t.guildId, t.triggerType)
    }, [t.guildId, t.triggerType, I]), O = n.useCallback(e => {
      !N && S(e, !0)
    }, [N, S]);
    n.useEffect(() => {
      E && S(t, !0)
    }, [E, t, S]);
    let h = n.useCallback(() => {
      g ? !_ && S(null) : _ ? m(() => {
        S(t)
      }) : S(t)
    }, [g, _, m, t, S]);
    return (0, a.jsx)(u.default, {
      renderHeader: (0, a.jsx)(c.default, {
        rule: L,
        forceSetup: f && !g && !A,
        triggerType: t.triggerType,
        isEditMode: g,
        isDefaultRule: A,
        onChangeRule: O,
        onSetupRule: C
      }),
      isStuck: g && _,
      isExpanded: g,
      onExpand: h,
      children: g && (0, a.jsx)(d.default, {
        rule: L,
        isLoading: N,
        onChangeRule: O
      })
    })
  })