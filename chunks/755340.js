"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("481060"),
  a = n("467138"),
  l = n("246364"),
  o = n("983736"),
  u = n("5056"),
  c = n("565321"),
  d = n("297619"),
  f = n("456935"),
  p = n("446945"),
  m = n("700833"),
  E = n("592286"),
  I = n("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: n,
    onFormFieldUpdate: _,
    hideVerificationLevelField: h,
    isClanContext: T,
    formDescription: g,
    onFieldsSave: C,
    onDescriptionSave: x
  } = e, v = r.useRef(!1), [N, R] = r.useState(null), [A, S] = r.useState(e.formFields), M = r.useRef(e.formFields), b = r.useMemo(() => A.filter(o.isAutomaticApprovalFormField), [A]), O = r.useMemo(() => A.filter(o.isManualApprovalFormField), [A]), L = O.length, F = r.useMemo(() => A.length === E.MAX_FORM_ELEMENTS, [A]), y = r.useMemo(() => A.some(l.isTermsFormField), [A]), D = r.useMemo(() => A.some(e => !(0, l.isTermsFormField)(e)), [A]), j = L > 1, P = (0, a.useIsMemberVerificationManualApproval)(t.id) || T, w = r.useCallback(() => {
    (0, s.showToast)((0, s.createToast)(I.default.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE))
  }, []), G = r.useCallback(async e => {
    if (!v.current) {
      v.current = !0, T && (e = e.filter(e => e.field_type !== l.VerificationFormFieldTypes.TERMS));
      try {
        await C(t.id, e), _(), S(e), M.current = e
      } catch (e) {
        throw S(M.current), e
      } finally {
        null != N && R(null), v.current = !1
      }
    }
  }, [N, t.id, _, C, T]), B = r.useCallback(async e => {
    let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...A] : [...A, e];
    await G(t)
  }, [A, G]), U = r.useCallback(async (e, t) => {
    if (A[e] === t) return;
    let n = [...A];
    n[e] = t, await G(n)
  }, [A, G]), V = r.useCallback(async (e, t, n) => {
    let i = A.indexOf(e),
      r = [...A];
    if (null != t && t !== i && (r.splice(i, 1), r.splice(t, 0, e), S(r)), n) try {
      await G(r), null !== N && R(null)
    } catch (e) {
      w()
    } else N !== t && R(t)
  }, [N, A, G, w]), k = r.useCallback(async e => {
    try {
      await G([...A.slice(0, e), ...A.slice(e + 1)])
    } catch (e) {
      w()
    }
  }, [A, G, w]), H = (0, i.jsxs)(i.Fragment, {
    children: [!h && (0, i.jsx)(f.default, {
      guild: t
    }), (0, i.jsx)(c.default, {
      formDescription: g,
      guildId: t.id,
      onSave: x
    }), !y && !F && (0, i.jsx)(d.default, {
      addFormField: B,
      guild: t
    }), b.map(e => (0, m.getFormFieldBuilderComponent)({
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: A.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: n,
      removeFormField: k,
      updateFormField: U,
      updateFormFieldOrder: V,
      canRemove: !0,
      actionsLocation: T ? "side" : "footer"
    }))]
  });
  return P ? (0, i.jsxs)(i.Fragment, {
    children: [!T && H, !D && (0, i.jsx)(u.default, {
      addFormField: B,
      showManualApprovalWarning: !T && !(L > 0),
      guild: t,
      showHeader: !T
    }), O.map(e => (0, m.getFormFieldBuilderComponent)({
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: A.indexOf(e),
      isDragEnabled: j,
      submittedGuildJoinRequestsCount: n,
      removeFormField: k,
      updateFormField: U,
      updateFormFieldOrder: V,
      canRemove: !(T && O.length <= 1),
      actionsLocation: T ? "side" : "footer"
    })), D && !F && (0, i.jsx)(p.default, {
      addFormField: B,
      guild: t
    })]
  }) : H
}