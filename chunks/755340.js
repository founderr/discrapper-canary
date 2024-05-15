"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("481060"),
  l = a("467138"),
  s = a("246364"),
  o = a("983736"),
  c = a("5056"),
  d = a("565321"),
  u = a("297619"),
  f = a("456935"),
  m = a("446945"),
  h = a("700833"),
  E = a("592286"),
  T = a("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: a,
    onFormFieldUpdate: p,
    hideVerificationLevelField: C,
    isClanContext: _,
    formDescription: x,
    onFieldsSave: g,
    onDescriptionSave: I
  } = e, v = r.useRef(!1), [N, S] = r.useState(null), [A, R] = r.useState(e.formFields), M = r.useRef(e.formFields), L = r.useMemo(() => A.filter(o.isAutomaticApprovalFormField), [A]), y = r.useMemo(() => A.filter(o.isManualApprovalFormField), [A]), b = y.length, j = r.useMemo(() => A.length === E.MAX_FORM_ELEMENTS, [A]), O = r.useMemo(() => A.some(s.isTermsFormField), [A]), D = r.useMemo(() => A.some(e => !(0, s.isTermsFormField)(e)), [A]), P = b > 1, F = (0, l.useIsMemberVerificationManualApproval)(t.id) || _, w = r.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(T.default.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE))
  }, []), G = r.useCallback(async e => {
    if (!v.current) {
      v.current = !0, _ && (e = e.filter(e => e.field_type !== s.VerificationFormFieldTypes.TERMS));
      try {
        await g(t.id, e), p(), R(e), M.current = e
      } catch (e) {
        throw R(M.current), e
      } finally {
        null != N && S(null), v.current = !1
      }
    }
  }, [N, t.id, p, g, _]), U = r.useCallback(async e => {
    let t = e.field_type === s.VerificationFormFieldTypes.TERMS ? [e, ...A] : [...A, e];
    await G(t)
  }, [A, G]), B = r.useCallback(async (e, t) => {
    if (A[e] === t) return;
    let a = [...A];
    a[e] = t, await G(a)
  }, [A, G]), k = r.useCallback(async (e, t, a) => {
    let n = A.indexOf(e),
      r = [...A];
    if (null != t && t !== n && (r.splice(n, 1), r.splice(t, 0, e), R(r)), a) try {
      await G(r), null !== N && S(null)
    } catch (e) {
      w()
    } else N !== t && S(t)
  }, [N, A, G, w]), H = r.useCallback(async e => {
    try {
      await G([...A.slice(0, e), ...A.slice(e + 1)])
    } catch (e) {
      w()
    }
  }, [A, G, w]), V = (0, n.jsxs)(n.Fragment, {
    children: [!C && (0, n.jsx)(f.default, {
      guild: t
    }), (0, n.jsx)(d.default, {
      formDescription: x,
      guildId: t.id,
      onSave: I
    }), !O && !j && (0, n.jsx)(u.default, {
      addFormField: U,
      guild: t
    }), L.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: A.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: a,
      removeFormField: H,
      updateFormField: B,
      updateFormFieldOrder: k,
      canRemove: !0,
      actionsLocation: _ ? "side" : "footer"
    }))]
  });
  return F ? (0, n.jsxs)(n.Fragment, {
    children: [!_ && V, !D && (0, n.jsx)(c.default, {
      addFormField: U,
      showManualApprovalWarning: !_ && !(b > 0),
      guild: t,
      showHeader: !_
    }), y.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: A.indexOf(e),
      isDragEnabled: P,
      submittedGuildJoinRequestsCount: a,
      removeFormField: H,
      updateFormField: B,
      updateFormFieldOrder: k,
      canRemove: !(_ && y.length <= 1),
      actionsLocation: _ ? "side" : "footer"
    })), D && !j && (0, n.jsx)(m.default, {
      addFormField: U,
      guild: t
    })]
  }) : V
}