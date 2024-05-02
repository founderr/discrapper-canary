"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  i = n("481060"),
  s = n("467138"),
  l = n("246364"),
  o = n("983736"),
  c = n("5056"),
  d = n("565321"),
  u = n("297619"),
  f = n("456935"),
  m = n("446945"),
  h = n("700833"),
  p = n("592286"),
  T = n("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: n,
    onFormFieldUpdate: E,
    hideVerificationLevelField: C,
    isClanContext: _,
    formDescription: g,
    onFieldsSave: x,
    onDescriptionSave: I
  } = e, v = r.useRef(!1), [N, S] = r.useState(null), [A, L] = r.useState(e.formFields), b = r.useRef(e.formFields), R = r.useMemo(() => A.filter(o.isAutomaticApprovalFormField), [A]), M = r.useMemo(() => A.filter(o.isManualApprovalFormField), [A]), y = M.length, j = r.useMemo(() => A.length === p.MAX_FORM_ELEMENTS, [A]), O = r.useMemo(() => A.some(l.isTermsFormField), [A]), D = r.useMemo(() => A.some(e => !(0, l.isTermsFormField)(e)), [A]), P = y > 1, F = (0, s.useIsMemberVerificationManualApproval)(t.id) || _, B = r.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(T.default.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE))
  }, []), w = r.useCallback(async e => {
    if (!v.current) {
      v.current = !0, _ && (e = e.filter(e => e.field_type !== l.VerificationFormFieldTypes.TERMS));
      try {
        await x(t.id, e), E(), L(e), b.current = e
      } catch (e) {
        throw L(b.current), e
      } finally {
        null != N && S(null), v.current = !1
      }
    }
  }, [N, t.id, E, x, _]), G = r.useCallback(async e => {
    let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...A] : [...A, e];
    await w(t)
  }, [A, w]), U = r.useCallback(async (e, t) => {
    if (A[e] === t) return;
    let n = [...A];
    n[e] = t, await w(n)
  }, [A, w]), k = r.useCallback(async (e, t, n) => {
    let a = A.indexOf(e),
      r = [...A];
    if (null != t && t !== a && (r.splice(a, 1), r.splice(t, 0, e), L(r)), n) try {
      await w(r), null !== N && S(null)
    } catch (e) {
      B()
    } else N !== t && S(t)
  }, [N, A, w, B]), H = r.useCallback(async e => {
    try {
      await w([...A.slice(0, e), ...A.slice(e + 1)])
    } catch (e) {
      B()
    }
  }, [A, w, B]), V = (0, a.jsxs)(a.Fragment, {
    children: [!C && (0, a.jsx)(f.default, {
      guild: t
    }), (0, a.jsx)(d.default, {
      formDescription: g,
      guildId: t.id,
      onSave: I
    }), !O && !j && (0, a.jsx)(u.default, {
      addFormField: G,
      guild: t
    }), R.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: A.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: n,
      removeFormField: H,
      updateFormField: U,
      updateFormFieldOrder: k,
      canRemove: !0,
      actionsLocation: _ ? "side" : "footer"
    }))]
  });
  return F ? (0, a.jsxs)(a.Fragment, {
    children: [!_ && V, !D && (0, a.jsx)(c.default, {
      addFormField: G,
      showManualApprovalWarning: !_ && !(y > 0),
      guild: t,
      showHeader: !_
    }), M.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: A.indexOf(e),
      isDragEnabled: P,
      submittedGuildJoinRequestsCount: n,
      removeFormField: H,
      updateFormField: U,
      updateFormFieldOrder: k,
      canRemove: !(_ && M.length <= 1),
      actionsLocation: _ ? "side" : "footer"
    })), D && !j && (0, a.jsx)(m.default, {
      addFormField: G,
      guild: t
    })]
  }) : V
}