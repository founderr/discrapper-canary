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
  } = e, v = r.useRef(!1), [N, A] = r.useState(null), [S, R] = r.useState(e.formFields), M = r.useRef(e.formFields), L = r.useMemo(() => S.filter(o.isAutomaticApprovalFormField), [S]), y = r.useMemo(() => S.filter(o.isManualApprovalFormField), [S]), b = y.length, j = r.useMemo(() => S.length === E.MAX_FORM_ELEMENTS, [S]), O = r.useMemo(() => S.some(s.isTermsFormField), [S]), D = r.useMemo(() => S.some(e => !(0, s.isTermsFormField)(e)), [S]), F = b > 1, P = (0, l.useIsMemberVerificationManualApproval)(t.id) || _, w = r.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(T.default.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE))
  }, []), G = r.useCallback(async e => {
    if (!v.current) {
      v.current = !0, _ && (e = e.filter(e => e.field_type !== s.VerificationFormFieldTypes.TERMS));
      try {
        await g(t.id, e), p(), R(e), M.current = e
      } catch (e) {
        throw R(M.current), e
      } finally {
        null != N && A(null), v.current = !1
      }
    }
  }, [N, t.id, p, g, _]), U = r.useCallback(async e => {
    let t = e.field_type === s.VerificationFormFieldTypes.TERMS ? [e, ...S] : [...S, e];
    await G(t)
  }, [S, G]), B = r.useCallback(async (e, t) => {
    if (S[e] === t) return;
    let a = [...S];
    a[e] = t, await G(a)
  }, [S, G]), k = r.useCallback(async (e, t, a) => {
    let n = S.indexOf(e),
      r = [...S];
    if (null != t && t !== n && (r.splice(n, 1), r.splice(t, 0, e), R(r)), a) try {
      await G(r), null !== N && A(null)
    } catch (e) {
      w()
    } else N !== t && A(t)
  }, [N, S, G, w]), H = r.useCallback(async e => {
    try {
      await G([...S.slice(0, e), ...S.slice(e + 1)])
    } catch (e) {
      w()
    }
  }, [S, G, w]), V = (0, n.jsxs)(n.Fragment, {
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
      index: S.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: a,
      removeFormField: H,
      updateFormField: B,
      updateFormFieldOrder: k,
      canRemove: !0,
      actionsLocation: _ ? "side" : "footer"
    }))]
  });
  return P ? (0, n.jsxs)(n.Fragment, {
    children: [!_ && V, !D && (0, n.jsx)(c.default, {
      addFormField: U,
      showManualApprovalWarning: !_ && !(b > 0),
      guild: t,
      showHeader: !_
    }), y.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: S.indexOf(e),
      isDragEnabled: F,
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