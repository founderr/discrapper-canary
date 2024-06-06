"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("481060"),
  s = a("467138"),
  l = a("246364"),
  o = a("983736"),
  d = a("5056"),
  c = a("565321"),
  u = a("297619"),
  f = a("456935"),
  m = a("446945"),
  E = a("700833"),
  h = a("592286"),
  T = a("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: a,
    onFormFieldUpdate: _,
    hideVerificationLevelField: C,
    isClanContext: x,
    formDescription: p,
    onFieldsSave: I,
    onDescriptionSave: g
  } = e, N = r.useRef(!1), [A, v] = r.useState(null), [S, R] = r.useState(e.formFields);
  r.useEffect(() => R(e.formFields), [e.formFields]);
  let L = r.useRef(e.formFields),
    y = r.useMemo(() => S.filter(o.isAutomaticApprovalFormField), [S]),
    M = r.useMemo(() => S.filter(o.isManualApprovalFormField), [S]),
    j = M.length,
    b = r.useMemo(() => S.length === h.MAX_FORM_ELEMENTS, [S]),
    O = r.useMemo(() => S.some(l.isTermsFormField), [S]),
    D = r.useMemo(() => S.some(e => !(0, l.isTermsFormField)(e)), [S]),
    F = j > 0,
    P = (0, s.useIsMemberVerificationManualApproval)(t.id) || x,
    w = r.useCallback(() => {
      (0, i.showToast)((0, i.createToast)(T.default.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE))
    }, []),
    B = r.useCallback(async e => {
      if (!N.current) {
        N.current = !0, x && (e = e.filter(e => e.field_type !== l.VerificationFormFieldTypes.TERMS));
        try {
          await I(t.id, e), _(), R(e), L.current = e
        } catch (e) {
          throw R(L.current), e
        } finally {
          null != A && v(null), N.current = !1
        }
      }
    }, [A, t.id, _, I, x]),
    G = r.useCallback(async e => {
      let t = e.field_type === l.VerificationFormFieldTypes.TERMS ? [e, ...S] : [...S, e];
      await B(t)
    }, [S, B]),
    U = r.useCallback(async (e, t) => {
      if (S[e] === t) return;
      let a = [...S];
      a[e] = t, await B(a)
    }, [S, B]),
    H = r.useCallback(async (e, t, a) => {
      let n = S.indexOf(e),
        r = [...S];
      if (null != t && t !== n && (r.splice(n, 1), r.splice(t, 0, e), R(r)), a) try {
        await B(r), null !== A && v(null)
      } catch (e) {
        w()
      } else A !== t && v(t)
    }, [A, S, B, w]),
    k = r.useCallback(async e => {
      try {
        await B([...S.slice(0, e), ...S.slice(e + 1)])
      } catch (e) {
        w()
      }
    }, [S, B, w]),
    V = (0, n.jsxs)(n.Fragment, {
      children: [!C && (0, n.jsx)(f.default, {
        guild: t
      }), (0, n.jsx)(c.default, {
        formDescription: p,
        guildId: t.id,
        onSave: g
      }), !O && !b && (0, n.jsx)(u.default, {
        addFormField: G,
        guild: t
      }), y.map(e => (0, E.getFormFieldBuilderComponent)({
        dropHoveredIndex: A,
        formField: e,
        guild: t,
        index: S.indexOf(e),
        isDragEnabled: !1,
        submittedGuildJoinRequestsCount: a,
        removeFormField: k,
        updateFormField: U,
        updateFormFieldOrder: H,
        canRemove: !0,
        actionsLocation: x ? "side" : "footer"
      }))]
    });
  return P ? (0, n.jsxs)(n.Fragment, {
    children: [!x && V, !D && (0, n.jsx)(d.default, {
      addFormField: G,
      showManualApprovalWarning: !x && !F,
      guild: t,
      showHeader: !x
    }), M.map(e => (0, E.getFormFieldBuilderComponent)({
      dropHoveredIndex: A,
      formField: e,
      guild: t,
      index: S.indexOf(e),
      isDragEnabled: F,
      submittedGuildJoinRequestsCount: a,
      removeFormField: k,
      updateFormField: U,
      updateFormFieldOrder: H,
      canRemove: !(x && M.length <= 1),
      actionsLocation: x ? "side" : "footer"
    })), D && !b && (0, n.jsx)(m.default, {
      addFormField: G,
      guild: t
    })]
  }) : V
}