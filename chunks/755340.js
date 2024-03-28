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
  E = i("456935"),
  I = i("446945"),
  T = i("243371"),
  m = i("700833"),
  _ = i("592286"),
  x = i("981631"),
  h = i("689938");
t.default = function(e) {
  let {
    guild: t,
    submittedGuildJoinRequestsCount: i,
    onFormFieldUpdate: p,
    hideVerificationLevelField: M
  } = e, R = t.hasFeature(x.GuildFeatures.CLAN), F = l.useRef(!1), [v, N] = l.useState(null), [S, g] = l.useState(e.formFields), C = l.useRef(e.formFields), A = l.useMemo(() => S.filter(d.isAutomaticApprovalFormField), [S]), L = l.useMemo(() => S.filter(d.isManualApprovalFormField), [S]), j = L.length, y = l.useMemo(() => S.length === _.MAX_FORM_ELEMENTS, [S]), O = l.useMemo(() => S.some(o.isTermsFormField), [S]), U = l.useMemo(() => S.some(e => !(0, o.isTermsFormField)(e)), [S]), D = j > 1, w = (0, r.useIsMemberVerificationManualApproval)(t.id), V = l.useCallback(() => {
    (0, n.showToast)((0, n.createToast)(h.default.Messages.ERROR_GENERIC_TITLE, n.ToastType.FAILURE))
  }, []), G = l.useCallback(async e => {
    if (!F.current) {
      F.current = !0;
      try {
        await s.default.updateVerificationForm(t.id, e), p(), g(e), C.current = e
      } catch (e) {
        throw g(C.current), e
      } finally {
        null != v && N(null), F.current = !1
      }
    }
  }, [v, t.id, p]), P = l.useCallback(async e => {
    let t = e.field_type === o.VerificationFormFieldTypes.TERMS ? [e, ...S] : [...S, e];
    await G(t)
  }, [S, G]), b = l.useCallback(async (e, t) => {
    if (S[e] === t) return;
    let i = [...S];
    i[e] = t, await G(i)
  }, [S, G]), B = l.useCallback(async (e, t, i) => {
    let a = S.indexOf(e),
      l = [...S];
    if (null != t && t !== a && (l.splice(a, 1), l.splice(t, 0, e), g(l)), i) try {
      await G(l), null !== v && N(null)
    } catch (e) {
      V()
    } else v !== t && N(t)
  }, [v, S, G, V]), H = l.useCallback(async e => {
    try {
      await G([...S.slice(0, e), ...S.slice(e + 1)])
    } catch (e) {
      V()
    }
  }, [S, G, V]), k = (0, a.jsxs)(a.Fragment, {
    children: [!M && (0, a.jsx)(E.default, {
      guild: t
    }), (0, a.jsx)(u.default, {
      guildId: t.id
    }), !O && !y && (0, a.jsx)(f.default, {
      addFormField: P,
      guild: t
    }), A.map(e => (0, m.getFormFieldBuilderComponent)({
      dropHoveredIndex: v,
      formField: e,
      guild: t,
      index: S.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: i,
      removeFormField: H,
      updateFormField: b,
      updateFormFieldOrder: B
    }))]
  });
  return w ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(T.default, {
      text: h.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_AUTOMATIC_APPROVAL_DIVIDER
    }), k, (0, a.jsx)(T.default, {
      text: h.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_DIVIDER
    }), !U && (0, a.jsx)(c.default, {
      addFormField: P,
      showManualApprovalWarning: !R && !(j > 0),
      guild: t
    }), L.map(e => (0, m.getFormFieldBuilderComponent)({
      dropHoveredIndex: v,
      formField: e,
      guild: t,
      index: S.indexOf(e),
      isDragEnabled: D,
      submittedGuildJoinRequestsCount: i,
      removeFormField: H,
      updateFormField: b,
      updateFormFieldOrder: B
    })), U && !y && (0, a.jsx)(I.default, {
      addFormField: P,
      guild: t
    })]
  }) : k
}