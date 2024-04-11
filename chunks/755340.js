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
  } = e, x = r.useRef(!1), [A, N] = r.useState(null), [R, S] = r.useState(e.formFields), M = r.useRef(e.formFields), O = r.useMemo(() => R.filter(o.isAutomaticApprovalFormField), [R]), b = r.useMemo(() => R.filter(o.isManualApprovalFormField), [R]), F = b.length, L = r.useMemo(() => R.length === E.MAX_FORM_ELEMENTS, [R]), y = r.useMemo(() => R.some(l.isTermsFormField), [R]), D = r.useMemo(() => R.some(e => !(0, l.isTermsFormField)(e)), [R]), j = F > 1, P = (0, s.useIsMemberVerificationManualApproval)(t.id) || h, w = r.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(I.default.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE))
  }, []), G = r.useCallback(async e => {
    if (!x.current) {
      x.current = !0, h && (e = e.filter(e => e.field_type !== l.VerificationFormFieldTypes.TERMS));
      try {
        await C(t.id, e), _(), S(e), M.current = e
      } catch (e) {
        throw S(M.current), e
      } finally {
        null != A && N(null), x.current = !1
      }
    }
  }, [A, t.id, _, C, h]), U = r.useCallback(async e => {
    let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...R] : [...R, e];
    await G(t)
  }, [R, G]), B = r.useCallback(async (e, t) => {
    if (R[e] === t) return;
    let n = [...R];
    n[e] = t, await G(n)
  }, [R, G]), V = r.useCallback(async (e, t, n) => {
    let i = R.indexOf(e),
      r = [...R];
    if (null != t && t !== i && (r.splice(i, 1), r.splice(t, 0, e), S(r)), n) try {
      await G(r), null !== A && N(null)
    } catch (e) {
      w()
    } else A !== t && N(t)
  }, [A, R, G, w]), H = r.useCallback(async e => {
    try {
      await G([...R.slice(0, e), ...R.slice(e + 1)])
    } catch (e) {
      w()
    }
  }, [R, G, w]), k = (0, i.jsxs)(i.Fragment, {
    children: [!T && (0, i.jsx)(f.default, {
      guild: t
    }), (0, i.jsx)(c.default, {
      formDescription: g,
      guildId: t.id,
      onSave: v
    }), !y && !L && (0, i.jsx)(d.default, {
      addFormField: U,
      guild: t
    }), O.map(e => (0, m.getFormFieldBuilderComponent)({
      dropHoveredIndex: A,
      formField: e,
      guild: t,
      index: R.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: n,
      removeFormField: H,
      updateFormField: B,
      updateFormFieldOrder: V,
      canRemove: !0
    }))]
  });
  return P ? (0, i.jsxs)(i.Fragment, {
    children: [!h && k, !D && (0, i.jsx)(u.default, {
      addFormField: U,
      showManualApprovalWarning: !h && !(F > 0),
      guild: t,
      showHeader: !h
    }), b.map(e => (0, m.getFormFieldBuilderComponent)({
      dropHoveredIndex: A,
      formField: e,
      guild: t,
      index: R.indexOf(e),
      isDragEnabled: j,
      submittedGuildJoinRequestsCount: n,
      removeFormField: H,
      updateFormField: B,
      updateFormFieldOrder: V,
      canRemove: !(h && b.length <= 1)
    })), D && !L && (0, i.jsx)(p.default, {
      addFormField: U,
      guild: t
    })]
  }) : k
}