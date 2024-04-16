"use strict";
i.r(t), i("47120");
var n = i("735250"),
  r = i("470079"),
  s = i("481060"),
  a = i("467138"),
  l = i("246364"),
  o = i("983736"),
  c = i("5056"),
  u = i("565321"),
  d = i("297619"),
  f = i("456935"),
  p = i("446945"),
  C = i("700833"),
  m = i("592286"),
  h = i("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: i,
    onFormFieldUpdate: _,
    hideVerificationLevelField: E,
    isClanContext: I,
    formDescription: T,
    onFieldsSave: x,
    onDescriptionSave: g
  } = e, v = r.useRef(!1), [R, A] = r.useState(null), [N, S] = r.useState(e.formFields), M = r.useRef(e.formFields), L = r.useMemo(() => N.filter(o.isAutomaticApprovalFormField), [N]), j = r.useMemo(() => N.filter(o.isManualApprovalFormField), [N]), b = j.length, O = r.useMemo(() => N.length === m.MAX_FORM_ELEMENTS, [N]), y = r.useMemo(() => N.some(l.isTermsFormField), [N]), F = r.useMemo(() => N.some(e => !(0, l.isTermsFormField)(e)), [N]), D = b > 1, P = (0, a.useIsMemberVerificationManualApproval)(t.id) || I, w = r.useCallback(() => {
    (0, s.showToast)((0, s.createToast)(h.default.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE))
  }, []), G = r.useCallback(async e => {
    if (!v.current) {
      v.current = !0, I && (e = e.filter(e => e.field_type !== l.VerificationFormFieldTypes.TERMS));
      try {
        await x(t.id, e), _(), S(e), M.current = e
      } catch (e) {
        throw S(M.current), e
      } finally {
        null != R && A(null), v.current = !1
      }
    }
  }, [R, t.id, _, x, I]), B = r.useCallback(async e => {
    let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...N] : [...N, e];
    await G(t)
  }, [N, G]), U = r.useCallback(async (e, t) => {
    if (N[e] === t) return;
    let i = [...N];
    i[e] = t, await G(i)
  }, [N, G]), V = r.useCallback(async (e, t, i) => {
    let n = N.indexOf(e),
      r = [...N];
    if (null != t && t !== n && (r.splice(n, 1), r.splice(t, 0, e), S(r)), i) try {
      await G(r), null !== R && A(null)
    } catch (e) {
      w()
    } else R !== t && A(t)
  }, [R, N, G, w]), H = r.useCallback(async e => {
    try {
      await G([...N.slice(0, e), ...N.slice(e + 1)])
    } catch (e) {
      w()
    }
  }, [N, G, w]), k = (0, n.jsxs)(n.Fragment, {
    children: [!E && (0, n.jsx)(f.default, {
      guild: t
    }), (0, n.jsx)(u.default, {
      formDescription: T,
      guildId: t.id,
      onSave: g
    }), !y && !O && (0, n.jsx)(d.default, {
      addFormField: B,
      guild: t
    }), L.map(e => (0, C.getFormFieldBuilderComponent)({
      dropHoveredIndex: R,
      formField: e,
      guild: t,
      index: N.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: i,
      removeFormField: H,
      updateFormField: U,
      updateFormFieldOrder: V,
      canRemove: !0,
      actionsLocation: I ? "side" : "footer"
    }))]
  });
  return P ? (0, n.jsxs)(n.Fragment, {
    children: [!I && k, !F && (0, n.jsx)(c.default, {
      addFormField: B,
      showManualApprovalWarning: !I && !(b > 0),
      guild: t,
      showHeader: !I
    }), j.map(e => (0, C.getFormFieldBuilderComponent)({
      dropHoveredIndex: R,
      formField: e,
      guild: t,
      index: N.indexOf(e),
      isDragEnabled: D,
      submittedGuildJoinRequestsCount: i,
      removeFormField: H,
      updateFormField: U,
      updateFormFieldOrder: V,
      canRemove: !(I && j.length <= 1),
      actionsLocation: I ? "side" : "footer"
    })), F && !O && (0, n.jsx)(p.default, {
      addFormField: B,
      guild: t
    })]
  }) : k
}