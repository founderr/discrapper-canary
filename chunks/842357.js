"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("454686"),
  i = s("254365"),
  r = s("151866"),
  o = s("155158"),
  d = s("872708"),
  u = s("567062"),
  c = s("736523"),
  E = l.memo(function(e) {
    let {
      rule: t,
      persistEdit: s = !1,
      initWithEdit: E = !1
    } = e, {
      hasChanges: _,
      editingRule: I,
      createNewEditingRule: f,
      setEditingRule: T
    } = (0, r.useAutomodEditingRuleState)(), {
      isLoading: S
    } = (0, r.useAutomodEditingRuleActions)(), [m] = l.useState(() => !(0, n.isBackendPersistedRule)(t)), N = (null == I ? void 0 : I.id) === t.id || s, g = (0, i.isDefaultRuleId)(null == t ? void 0 : t.id), h = N && null != I ? I : t, C = l.useMemo(() => (0, o.createOnPreventNavigation)(t.name), [null == t ? void 0 : t.name]), R = l.useCallback(() => {
      f(t.guildId, t.triggerType)
    }, [t.guildId, t.triggerType, f]), x = l.useCallback(e => {
      !S && T(e, !0)
    }, [S, T]);
    l.useEffect(() => {
      E && T(t, !0)
    }, [E, t, T]);
    let L = l.useCallback(() => {
      N ? !_ && T(null) : _ ? C(() => {
        T(t)
      }) : T(t)
    }, [N, _, C, t, T]);
    return (0, a.jsx)(u.default, {
      renderHeader: (0, a.jsx)(c.default, {
        rule: h,
        forceSetup: m && !N && !g,
        triggerType: t.triggerType,
        isEditMode: N,
        isDefaultRule: g,
        onChangeRule: x,
        onSetupRule: R
      }),
      isStuck: N && _,
      isExpanded: N,
      onExpand: L,
      children: N && (0, a.jsx)(d.default, {
        rule: h,
        isLoading: S,
        onChangeRule: x
      })
    })
  })