"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("481060"),
  E = s("467138"),
  l = s("246364"),
  _ = s("983736"),
  r = s("5056"),
  u = s("565321"),
  o = s("297619"),
  T = s("456935"),
  d = s("446945"),
  A = s("700833"),
  I = s("592286"),
  L = s("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: s,
    onFormFieldUpdate: c,
    hideVerificationLevelField: N,
    isClanContext: S,
    formDescription: g,
    onFieldsSave: D,
    onDescriptionSave: C
  } = e, f = n.useRef(!1), [O, G] = n.useState(null), [M, U] = n.useState(e.formFields), R = n.useRef(e.formFields), h = n.useMemo(() => M.filter(_.isAutomaticApprovalFormField), [M]), m = n.useMemo(() => M.filter(_.isManualApprovalFormField), [M]), p = m.length, v = n.useMemo(() => M.length === I.MAX_FORM_ELEMENTS, [M]), y = n.useMemo(() => M.some(l.isTermsFormField), [M]), P = n.useMemo(() => M.some(e => !(0, l.isTermsFormField)(e)), [M]), x = p > 1, H = (0, E.useIsMemberVerificationManualApproval)(t.id) || S, B = n.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(L.default.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE))
  }, []), F = n.useCallback(async e => {
    if (!f.current) {
      f.current = !0, S && (e = e.filter(e => e.field_type !== l.VerificationFormFieldTypes.TERMS));
      try {
        await D(t.id, e), c(), U(e), R.current = e
      } catch (e) {
        throw U(R.current), e
      } finally {
        null != O && G(null), f.current = !1
      }
    }
  }, [O, t.id, c, D, S]), V = n.useCallback(async e => {
    let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...M] : [...M, e];
    await F(t)
  }, [M, F]), j = n.useCallback(async (e, t) => {
    if (M[e] === t) return;
    let s = [...M];
    s[e] = t, await F(s)
  }, [M, F]), b = n.useCallback(async (e, t, s) => {
    let a = M.indexOf(e),
      n = [...M];
    if (null != t && t !== a && (n.splice(a, 1), n.splice(t, 0, e), U(n)), s) try {
      await F(n), null !== O && G(null)
    } catch (e) {
      B()
    } else O !== t && G(t)
  }, [O, M, F, B]), K = n.useCallback(async e => {
    try {
      await F([...M.slice(0, e), ...M.slice(e + 1)])
    } catch (e) {
      B()
    }
  }, [M, F, B]), w = (0, a.jsxs)(a.Fragment, {
    children: [!N && (0, a.jsx)(T.default, {
      guild: t
    }), (0, a.jsx)(u.default, {
      formDescription: g,
      guildId: t.id,
      onSave: C
    }), !y && !v && (0, a.jsx)(o.default, {
      addFormField: V,
      guild: t
    }), h.map(e => (0, A.getFormFieldBuilderComponent)({
      dropHoveredIndex: O,
      formField: e,
      guild: t,
      index: M.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: s,
      removeFormField: K,
      updateFormField: j,
      updateFormFieldOrder: b,
      canRemove: !0,
      actionsLocation: S ? "side" : "footer"
    }))]
  });
  return H ? (0, a.jsxs)(a.Fragment, {
    children: [!S && w, !P && (0, a.jsx)(r.default, {
      addFormField: V,
      showManualApprovalWarning: !S && !(p > 0),
      guild: t,
      showHeader: !S
    }), m.map(e => (0, A.getFormFieldBuilderComponent)({
      dropHoveredIndex: O,
      formField: e,
      guild: t,
      index: M.indexOf(e),
      isDragEnabled: x,
      submittedGuildJoinRequestsCount: s,
      removeFormField: K,
      updateFormField: j,
      updateFormFieldOrder: b,
      canRemove: !(S && m.length <= 1),
      actionsLocation: S ? "side" : "footer"
    })), P && !v && (0, a.jsx)(d.default, {
      addFormField: V,
      guild: t
    })]
  }) : w
}