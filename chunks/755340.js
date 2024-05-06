"use strict";
a.r(t), a("47120");
var n = a("735250"),
  i = a("470079"),
  r = a("481060"),
  s = a("467138"),
  l = a("246364"),
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
    hideVerificationLevelField: _,
    isClanContext: C,
    formDescription: g,
    onFieldsSave: x,
    onDescriptionSave: I
  } = e, v = i.useRef(!1), [N, A] = i.useState(null), [S, R] = i.useState(e.formFields), L = i.useRef(e.formFields), M = i.useMemo(() => S.filter(o.isAutomaticApprovalFormField), [S]), b = i.useMemo(() => S.filter(o.isManualApprovalFormField), [S]), j = b.length, y = i.useMemo(() => S.length === E.MAX_FORM_ELEMENTS, [S]), O = i.useMemo(() => S.some(l.isTermsFormField), [S]), D = i.useMemo(() => S.some(e => !(0, l.isTermsFormField)(e)), [S]), P = j > 1, F = (0, s.useIsMemberVerificationManualApproval)(t.id) || C, w = i.useCallback(() => {
    (0, r.showToast)((0, r.createToast)(T.default.Messages.ERROR_GENERIC_TITLE, r.ToastType.FAILURE))
  }, []), G = i.useCallback(async e => {
    if (!v.current) {
      v.current = !0, C && (e = e.filter(e => e.field_type !== l.VerificationFormFieldTypes.TERMS));
      try {
        await x(t.id, e), p(), R(e), L.current = e
      } catch (e) {
        throw R(L.current), e
      } finally {
        null != N && A(null), v.current = !1
      }
    }
  }, [N, t.id, p, x, C]), U = i.useCallback(async e => {
    let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...S] : [...S, e];
    await G(t)
  }, [S, G]), B = i.useCallback(async (e, t) => {
    if (S[e] === t) return;
    let a = [...S];
    a[e] = t, await G(a)
  }, [S, G]), k = i.useCallback(async (e, t, a) => {
    let n = S.indexOf(e),
      i = [...S];
    if (null != t && t !== n && (i.splice(n, 1), i.splice(t, 0, e), R(i)), a) try {
      await G(i), null !== N && A(null)
    } catch (e) {
      w()
    } else N !== t && A(t)
  }, [N, S, G, w]), H = i.useCallback(async e => {
    try {
      await G([...S.slice(0, e), ...S.slice(e + 1)])
    } catch (e) {
      w()
    }
  }, [S, G, w]), V = (0, n.jsxs)(n.Fragment, {
    children: [!_ && (0, n.jsx)(f.default, {
      guild: t
    }), (0, n.jsx)(d.default, {
      formDescription: g,
      guildId: t.id,
      onSave: I
    }), !O && !y && (0, n.jsx)(u.default, {
      addFormField: U,
      guild: t
    }), M.map(e => (0, h.getFormFieldBuilderComponent)({
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
      actionsLocation: C ? "side" : "footer"
    }))]
  });
  return F ? (0, n.jsxs)(n.Fragment, {
    children: [!C && V, !D && (0, n.jsx)(c.default, {
      addFormField: U,
      showManualApprovalWarning: !C && !(j > 0),
      guild: t,
      showHeader: !C
    }), b.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: S.indexOf(e),
      isDragEnabled: P,
      submittedGuildJoinRequestsCount: a,
      removeFormField: H,
      updateFormField: B,
      updateFormFieldOrder: k,
      canRemove: !(C && b.length <= 1),
      actionsLocation: C ? "side" : "footer"
    })), D && !y && (0, n.jsx)(m.default, {
      addFormField: U,
      guild: t
    })]
  }) : V
}