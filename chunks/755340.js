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
  E = n("592286"),
  p = n("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: n,
    onFormFieldUpdate: C,
    hideVerificationLevelField: T,
    isClanContext: _,
    formDescription: x,
    onFieldsSave: g,
    onDescriptionSave: I
  } = e, N = r.useRef(!1), [v, A] = r.useState(null), [S, L] = r.useState(e.formFields);
  r.useEffect(() => L(e.formFields), [e.formFields]);
  let R = r.useRef(e.formFields),
    y = r.useMemo(() => S.filter(o.isAutomaticApprovalFormField), [S]),
    M = r.useMemo(() => S.filter(o.isManualApprovalFormField), [S]),
    b = M.length,
    j = r.useMemo(() => S.length === E.MAX_FORM_ELEMENTS, [S]),
    O = r.useMemo(() => S.some(l.isTermsFormField), [S]),
    D = r.useMemo(() => S.some(e => !(0, l.isTermsFormField)(e)), [S]),
    F = b > 0,
    P = (0, i.useIsMemberVerificationManualApproval)(t.id) || _,
    w = r.useCallback(() => {
      (0, s.showToast)((0, s.createToast)(p.default.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE))
    }, []),
    B = r.useCallback(async e => {
      if (!N.current) {
        N.current = !0, _ && (e = e.filter(e => e.field_type !== l.VerificationFormFieldTypes.TERMS));
        try {
          await g(t.id, e), C(), L(e), R.current = e
        } catch (e) {
          throw L(R.current), e
        } finally {
          null != v && A(null), N.current = !1
        }
      }
    }, [v, t.id, C, g, _]),
    G = r.useCallback(async e => {
      let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...S] : [...S, e];
      await B(t)
    }, [S, B]),
    U = r.useCallback(async (e, t) => {
      if (S[e] === t) return;
      let n = [...S];
      n[e] = t, await B(n)
    }, [S, B]),
    k = r.useCallback(async (e, t, n) => {
      let a = S.indexOf(e),
        r = [...S];
      if (null != t && t !== a && (r.splice(a, 1), r.splice(t, 0, e), L(r)), n) try {
        await B(r), null !== v && A(null)
      } catch (e) {
        w()
      } else v !== t && A(t)
    }, [v, S, B, w]),
    H = r.useCallback(async e => {
      try {
        await B([...S.slice(0, e), ...S.slice(e + 1)])
      } catch (e) {
        w()
      }
    }, [S, B, w]),
    V = (0, a.jsxs)(a.Fragment, {
      children: [!T && (0, a.jsx)(f.default, {
        guild: t
      }), (0, a.jsx)(d.default, {
        formDescription: x,
        guildId: t.id,
        onSave: I
      }), !O && !j && (0, a.jsx)(u.default, {
        addFormField: G,
        guild: t
      }), y.map(e => (0, h.getFormFieldBuilderComponent)({
        dropHoveredIndex: v,
        formField: e,
        guild: t,
        index: S.indexOf(e),
        isDragEnabled: !1,
        submittedGuildJoinRequestsCount: n,
        removeFormField: H,
        updateFormField: U,
        updateFormFieldOrder: k,
        canRemove: !0,
        actionsLocation: _ ? "side" : "footer"
      }))]
    });
  return P ? (0, a.jsxs)(a.Fragment, {
    children: [!_ && V, !D && (0, a.jsx)(c.default, {
      addFormField: G,
      showManualApprovalWarning: !_ && !F,
      guild: t,
      showHeader: !_
    }), M.map(e => (0, h.getFormFieldBuilderComponent)({
      dropHoveredIndex: v,
      formField: e,
      guild: t,
      index: S.indexOf(e),
      isDragEnabled: F,
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