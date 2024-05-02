"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("481060"),
  i = n("467138"),
  l = n("246364"),
  o = n("983736"),
  c = n("5056"),
  d = n("565321"),
  u = n("297619"),
  f = n("456935"),
  m = n("446945"),
  h = n("700833"),
  p = n("592286"),
  E = n("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: n,
    onFormFieldUpdate: T,
    hideVerificationLevelField: C,
    isClanContext: _,
    formDescription: g,
    onFieldsSave: x,
    onDescriptionSave: I
  } = e, N = r.useRef(!1), [v, A] = r.useState(null), [S, L] = r.useState(e.formFields), R = r.useRef(e.formFields), y = r.useMemo(() => S.filter(o.isAutomaticApprovalFormField), [S]), b = r.useMemo(() => S.filter(o.isManualApprovalFormField), [S]), j = b.length, M = r.useMemo(() => S.length === p.MAX_FORM_ELEMENTS, [S]), O = r.useMemo(() => S.some(l.isTermsFormField), [S]), D = r.useMemo(() => S.some(e => !(0, l.isTermsFormField)(e)), [S]), P = j > 1, F = (0, i.useIsMemberVerificationManualApproval)(t.id) || _, B = r.useCallback(() => {
    (0, s.showToast)((0, s.createToast)(E.default.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE))
  }, []), w = r.useCallback(async e => {
    if (!N.current) {
      N.current = !0, _ && (e = e.filter(e => e.field_type !== l.VerificationFormFieldTypes.TERMS));
      try {
        await x(t.id, e), T(), L(e), R.current = e
      } catch (e) {
        throw L(R.current), e
      } finally {
        null != v && A(null), N.current = !1
      }
    }
  }, [v, t.id, T, x, _]), G = r.useCallback(async e => {
    let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...S] : [...S, e];
    await w(t)
  }, [S, w]), U = r.useCallback(async (e, t) => {
    if (S[e] === t) return;
    let n = [...S];
    n[e] = t, await w(n)
  }, [S, w]), H = r.useCallback(async (e, t, n) => {
    let a = S.indexOf(e),
      r = [...S];
    if (null != t && t !== a && (r.splice(a, 1), r.splice(t, 0, e), L(r)), n) try {
      await w(r), null !== v && A(null)
    } catch (e) {
      B()
    } else v !== t && A(t)
  }, [v, S, w, B]), k = r.useCallback(async e => {
    try {
      await w([...S.slice(0, e), ...S.slice(e + 1)])
    } catch (e) {
      B()
    }
  }, [S, w, B]), V = (0, a.jsxs)(a.Fragment, {
    children: [!C && (0, a.jsx)(f.default, {
      guild: t
    }), (0, a.jsx)(d.default, {
      formDescription: g,
      guildId: t.id,
      onSave: I
    }), !O && !M && (0, a.jsx)(u.default, {
      addFormField: G,
      guild: t
    }), y.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: v,
      formField: e,
      guild: t,
      index: S.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: n,
      removeFormField: k,
      updateFormField: U,
      updateFormFieldOrder: H,
      canRemove: !0,
      actionsLocation: _ ? "side" : "footer"
    }))]
  });
  return F ? (0, a.jsxs)(a.Fragment, {
    children: [!_ && V, !D && (0, a.jsx)(c.default, {
      addFormField: G,
      showManualApprovalWarning: !_ && !(j > 0),
      guild: t,
      showHeader: !_
    }), b.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: v,
      formField: e,
      guild: t,
      index: S.indexOf(e),
      isDragEnabled: P,
      submittedGuildJoinRequestsCount: n,
      removeFormField: k,
      updateFormField: U,
      updateFormFieldOrder: H,
      canRemove: !(_ && b.length <= 1),
      actionsLocation: _ ? "side" : "footer"
    })), D && !M && (0, a.jsx)(m.default, {
      addFormField: G,
      guild: t
    })]
  }) : V
}