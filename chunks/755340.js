"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("481060"),
  s = n("467138"),
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
    hideVerificationLevelField: T,
    isClanContext: h,
    formDescription: g,
    onFieldsSave: C,
    onDescriptionSave: v
  } = e, x = r.useRef(!1), [N, R] = r.useState(null), [A, S] = r.useState(e.formFields), M = r.useRef(e.formFields), O = r.useMemo(() => A.filter(o.isAutomaticApprovalFormField), [A]), b = r.useMemo(() => A.filter(o.isManualApprovalFormField), [A]), L = b.length, F = r.useMemo(() => A.length === E.MAX_FORM_ELEMENTS, [A]), y = r.useMemo(() => A.some(l.isTermsFormField), [A]), D = r.useMemo(() => A.some(e => !(0, l.isTermsFormField)(e)), [A]), j = L > 1, P = (0, s.useIsMemberVerificationManualApproval)(t.id) || h, w = r.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(I.default.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE))
  }, []), G = r.useCallback(async e => {
    if (!x.current) {
      x.current = !0;
      try {
        await C(t.id, e), _(), S(e), M.current = e
      } catch (e) {
        throw S(M.current), e
      } finally {
        null != N && R(null), x.current = !1
      }
    }
  }, [N, t.id, _, C]), U = r.useCallback(async e => {
    let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...A] : [...A, e];
    await G(t)
  }, [A, G]), B = r.useCallback(async (e, t) => {
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
  }, [N, A, G, w]), H = r.useCallback(async e => {
    try {
      await G([...A.slice(0, e), ...A.slice(e + 1)])
    } catch (e) {
      w()
    }
  }, [A, G, w]), k = (0, i.jsxs)(i.Fragment, {
    children: [!T && (0, i.jsx)(f.default, {
      guild: t
    }), (0, i.jsx)(c.default, {
      formDescription: g,
      guildId: t.id,
      onSave: v
    }), !y && !F && (0, i.jsx)(d.default, {
      addFormField: U,
      guild: t
    }), O.map(e => (0, m.getFormFieldBuilderComponent)({
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: A.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: n,
      removeFormField: H,
      updateFormField: B,
      updateFormFieldOrder: V,
      canRemove: !0
    }))]
  });
  return P ? (0, i.jsxs)(i.Fragment, {
    children: [k, !D && (0, i.jsx)(u.default, {
      addFormField: U,
      showManualApprovalWarning: !h && !(L > 0),
      guild: t,
      showHeader: !h
    }), b.map(e => (0, m.getFormFieldBuilderComponent)({
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: A.indexOf(e),
      isDragEnabled: j,
      submittedGuildJoinRequestsCount: n,
      removeFormField: H,
      updateFormField: B,
      updateFormFieldOrder: V,
      canRemove: !(h && b.length <= 1)
    })), D && !F && (0, i.jsx)(p.default, {
      addFormField: U,
      guild: t
    })]
  }) : k
}