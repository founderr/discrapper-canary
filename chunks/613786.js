"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("77078"),
  i = s("50926"),
  r = s("520141"),
  o = s("567054"),
  d = s("409464"),
  u = s("414989"),
  c = s("64284"),
  E = s("335724"),
  _ = s("925993"),
  I = s("832285"),
  f = s("26754"),
  T = s("546470"),
  S = s("394294"),
  m = s("782340"),
  N = function(e) {
    let {
      guild: t,
      submittedGuildJoinRequestsCount: s,
      onFormFieldUpdate: N,
      hideVerificationLevelField: g
    } = e, h = l.useRef(!1), [C, R] = l.useState(null), [x, L] = l.useState(e.formFields), O = l.useRef(e.formFields), p = l.useMemo(() => x.filter(d.isAutomaticApprovalFormField), [x]), A = l.useMemo(() => x.filter(d.isManualApprovalFormField), [x]), M = A.length, D = l.useMemo(() => x.length === S.MAX_FORM_ELEMENTS, [x]), v = l.useMemo(() => x.some(o.isTermsFormField), [x]), j = l.useMemo(() => x.some(e => !(0, o.isTermsFormField)(e)), [x]), G = M > 1, U = (0, r.useIsMemberVerificationManualApproval)(t.id), P = l.useCallback(() => {
      (0, n.showToast)((0, n.createToast)(m.default.Messages.ERROR_GENERIC_TITLE, n.ToastType.FAILURE))
    }, []), b = l.useCallback(async e => {
      if (!h.current) {
        h.current = !0;
        try {
          await i.default.updateVerificationForm(t.id, e), N(), L(e), O.current = e
        } catch (e) {
          throw L(O.current), e
        } finally {
          null != C && R(null), h.current = !1
        }
      }
    }, [C, t.id, N]), B = l.useCallback(async e => {
      let t = e.field_type === o.VerificationFormFieldTypes.TERMS ? [e, ...x] : [...x, e];
      await b(t)
    }, [x, b]), y = l.useCallback(async (e, t) => {
      if (x[e] === t) return;
      let s = [...x];
      s[e] = t, await b(s)
    }, [x, b]), F = l.useCallback(async (e, t, s) => {
      let a = x.indexOf(e),
        l = [...x];
      if (null != t && t !== a && (l.splice(a, 1), l.splice(t, 0, e), L(l)), s) try {
        await b(l), null !== C && R(null)
      } catch (e) {
        P()
      } else C !== t && R(t)
    }, [C, x, b, P]), H = l.useCallback(async e => {
      try {
        await b([...x.slice(0, e), ...x.slice(e + 1)])
      } catch (e) {
        P()
      }
    }, [x, b, P]), k = (0, a.jsxs)(a.Fragment, {
      children: [!g && (0, a.jsx)(_.default, {
        guild: t
      }), (0, a.jsx)(c.default, {
        guildId: t.id
      }), !v && !D && (0, a.jsx)(E.default, {
        addFormField: B
      }), p.map(e => (0, T.getFormFieldBuilderComponent)({
        dropHoveredIndex: C,
        formField: e,
        guild: t,
        index: x.indexOf(e),
        isDragEnabled: !1,
        submittedGuildJoinRequestsCount: s,
        removeFormField: H,
        updateFormField: y,
        updateFormFieldOrder: F
      }))]
    });
    return U ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.default, {
        text: m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_AUTOMATIC_APPROVAL_DIVIDER
      }), k, (0, a.jsx)(f.default, {
        text: m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_DIVIDER
      }), !j && (0, a.jsx)(u.default, {
        addFormField: B,
        hasManualFormFields: M > 0
      }), A.map(e => (0, T.getFormFieldBuilderComponent)({
        dropHoveredIndex: C,
        formField: e,
        guild: t,
        index: x.indexOf(e),
        isDragEnabled: G,
        submittedGuildJoinRequestsCount: s,
        removeFormField: H,
        updateFormField: y,
        updateFormFieldOrder: F
      })), j && !D && (0, a.jsx)(I.default, {
        addFormField: B
      })]
    }) : k
  }