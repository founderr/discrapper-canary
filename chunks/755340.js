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
  } = e, x = r.useRef(!1), [N, R] = r.useState(null), [S, A] = r.useState(e.formFields), M = r.useRef(e.formFields), O = r.useMemo(() => S.filter(o.isAutomaticApprovalFormField), [S]), b = r.useMemo(() => S.filter(o.isManualApprovalFormField), [S]), F = b.length, L = r.useMemo(() => S.length === E.MAX_FORM_ELEMENTS, [S]), y = r.useMemo(() => S.some(l.isTermsFormField), [S]), D = r.useMemo(() => S.some(e => !(0, l.isTermsFormField)(e)), [S]), j = F > 1, P = (0, s.useIsMemberVerificationManualApproval)(t.id) || h, w = r.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(I.default.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE))
  }, []), G = r.useCallback(async e => {
    if (!x.current) {
      x.current = !0, h && (e = e.filter(e => e.field_type !== l.VerificationFormFieldTypes.TERMS));
      try {
        await C(t.id, e), _(), A(e), M.current = e
      } catch (e) {
        throw A(M.current), e
      } finally {
        null != N && R(null), x.current = !1
      }
    }
  }, [N, t.id, _, C, h]), U = r.useCallback(async e => {
    let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...S] : [...S, e];
    await G(t)
  }, [S, G]), B = r.useCallback(async (e, t) => {
    if (S[e] === t) return;
    let n = [...S];
    n[e] = t, await G(n)
  }, [S, G]), V = r.useCallback(async (e, t, n) => {
    let i = S.indexOf(e),
      r = [...S];
    if (null != t && t !== i && (r.splice(i, 1), r.splice(t, 0, e), A(r)), n) try {
      await G(r), null !== N && R(null)
    } catch (e) {
      w()
    } else N !== t && R(t)
  }, [N, S, G, w]), H = r.useCallback(async e => {
    try {
      await G([...S.slice(0, e), ...S.slice(e + 1)])
    } catch (e) {
      w()
    }
  }, [S, G, w]), k = (0, i.jsxs)(i.Fragment, {
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
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: S.indexOf(e),
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
      dropHoveredIndex: N,
      formField: e,
      guild: t,
      index: S.indexOf(e),
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