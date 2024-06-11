"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var l = s("215569"),
  n = s("481060"),
  i = s("852860"),
  r = s("236413"),
  o = s("727072"),
  d = s("65912"),
  u = s("689938"),
  c = s("817437");

function E(e) {
  let {
    guildId: t,
    existingRules: s
  } = e, {
    cancelEditingRule: E,
    isLoading: _,
    hasChanges: I,
    editingRule: T,
    errorMessage: S,
    saveEditingRule: f
  } = (0, d.useAutomodEditingRuleActions)(), {
    updateRule: m
  } = (0, o.useAutomodRulesList)(t), N = null != T, g = N && !(0, r.isBackendPersistedRule)(T), h = N || I || g, C = async () => {
    if (!I && !g) return E();
    null != T && !g && m(T);
    let e = s.find(e => {
      let {
        id: t
      } = e;
      return t === (null == T ? void 0 : T.id)
    });
    try {
      let e = await f(s);
      null != e && m(e)
    } catch (t) {
      null != e && m(e)
    }
  }, R = u.default.Messages.CANCEL, x = !I && N ? u.default.Messages.GUILD_AUTOMOD_EDIT_NO_CHANGES.format({
    ruleName: null == T ? void 0 : T.name
  }) : void 0;
  return null != S && (x = (0, a.jsx)(n.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: c.message,
    children: S
  })), (0, a.jsx)(l.TransitionGroup, {
    component: "div",
    className: c.saveNoticeContainer,
    children: h && (0, a.jsx)(n.SlideIn, {
      children: (0, a.jsx)(i.default, {
        submitting: _,
        disabled: _,
        onSave: C,
        onReset: E,
        onResetText: R,
        message: x
      })
    })
  })
}