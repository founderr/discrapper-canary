"use strict";
i.r(t), i("47120");
var a = i("735250"),
  l = i("470079"),
  n = i("481060"),
  s = i("863249"),
  r = i("467138"),
  o = i("246364"),
  d = i("983736"),
  c = i("5056"),
  u = i("565321"),
  f = i("297619"),
  m = i("456935"),
  E = i("446945"),
  I = i("700833"),
  x = i("592286"),
  h = i("981631"),
  T = i("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: i,
    onFormFieldUpdate: M,
    hideVerificationLevelField: F
  } = e, _ = t.hasFeature(h.GuildFeatures.CLAN), R = l.useRef(!1), [v, g] = l.useState(null), [p, C] = l.useState(e.formFields), N = l.useRef(e.formFields), j = l.useMemo(() => p.filter(d.isAutomaticApprovalFormField), [p]), L = l.useMemo(() => p.filter(d.isManualApprovalFormField), [p]), y = L.length, A = l.useMemo(() => p.length === x.MAX_FORM_ELEMENTS, [p]), S = l.useMemo(() => p.some(o.isTermsFormField), [p]), w = l.useMemo(() => p.some(e => !(0, o.isTermsFormField)(e)), [p]), O = y > 1, V = (0, r.useIsMemberVerificationManualApproval)(t.id), P = l.useCallback(() => {
    (0, n.showToast)((0, n.createToast)(T.default.Messages.ERROR_GENERIC_TITLE, n.ToastType.FAILURE))
  }, []), b = l.useCallback(async e => {
    if (!R.current) {
      R.current = !0;
      try {
        await s.default.updateVerificationForm(t.id, e), M(), C(e), N.current = e
      } catch (e) {
        throw C(N.current), e
      } finally {
        null != v && g(null), R.current = !1
      }
    }
  }, [v, t.id, M]), D = l.useCallback(async e => {
    let t = e.field_type === o.VerificationFormFieldTypes.TERMS ? [e, ...p] : [...p, e];
    await b(t)
  }, [p, b]), B = l.useCallback(async (e, t) => {
    if (p[e] === t) return;
    let i = [...p];
    i[e] = t, await b(i)
  }, [p, b]), H = l.useCallback(async (e, t, i) => {
    let a = p.indexOf(e),
      l = [...p];
    if (null != t && t !== a && (l.splice(a, 1), l.splice(t, 0, e), C(l)), i) try {
      await b(l), null !== v && g(null)
    } catch (e) {
      P()
    } else v !== t && g(t)
  }, [v, p, b, P]), k = l.useCallback(async e => {
    try {
      await b([...p.slice(0, e), ...p.slice(e + 1)])
    } catch (e) {
      P()
    }
  }, [p, b, P]), G = (0, a.jsxs)(a.Fragment, {
    children: [!F && (0, a.jsx)(m.default, {
      guild: t
    }), (0, a.jsx)(u.default, {
      guildId: t.id
    }), !S && !A && (0, a.jsx)(f.default, {
      addFormField: D,
      guild: t
    }), j.map(e => (0, I.getFormFieldBuilderComponent)({
      dropHoveredIndex: v,
      formField: e,
      guild: t,
      index: p.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: i,
      removeFormField: k,
      updateFormField: B,
      updateFormFieldOrder: H,
      canRemove: !0
    }))]
  });
  return V ? (0, a.jsxs)(a.Fragment, {
    children: [G, !w && (0, a.jsx)(c.default, {
      addFormField: D,
      showManualApprovalWarning: !_ && !(y > 0),
      guild: t
    }), L.map(e => (0, I.getFormFieldBuilderComponent)({
      dropHoveredIndex: v,
      formField: e,
      guild: t,
      index: p.indexOf(e),
      isDragEnabled: O,
      submittedGuildJoinRequestsCount: i,
      removeFormField: k,
      updateFormField: B,
      updateFormFieldOrder: H,
      canRemove: !(_ && L.length <= 1)
    })), w && !A && (0, a.jsx)(E.default, {
      addFormField: D,
      guild: t
    })]
  }) : G
}