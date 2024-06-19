t(47120);
var a = t(735250),
  r = t(470079),
  s = t(481060),
  i = t(467138),
  o = t(246364),
  l = t(983736),
  c = t(5056),
  d = t(565321),
  u = t(297619),
  m = t(456935),
  h = t(446945),
  C = t(700833),
  x = t(592286),
  f = t(689938);
n.Z = function(e) {
  let {
    guild: n,
    submittedGuildJoinRequestsCount: t,
    onFormFieldUpdate: E,
    hideVerificationLevelField: T,
    isClanContext: _,
    formDescription: I,
    onFieldsSave: g,
    onDescriptionSave: p
  } = e, N = r.useRef(!1), [v, y] = r.useState(null), [A, S] = r.useState(e.formFields);
  r.useEffect(() => S(e.formFields), [e.formFields]);
  let M = r.useRef(e.formFields),
    j = r.useMemo(() => A.filter(l.kT), [A]),
    b = r.useMemo(() => A.filter(l._C), [A]),
    R = b.length,
    L = r.useMemo(() => A.length === x.nx, [A]),
    O = r.useMemo(() => A.some(o.J), [A]),
    Z = r.useMemo(() => A.some(e => !(0, o.J)(e)), [A]),
    D = R > 0,
    P = (0, i.e)(n.id) || _,
    F = r.useCallback(() => {
      (0, s.showToast)((0, s.createToast)(f.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE))
    }, []),
    w = r.useCallback(async e => {
      if (!N.current) {
        N.current = !0, _ && (e = e.filter(e => e.field_type !== o.QJ.TERMS));
        try {
          await g(n.id, e), E(), S(e), M.current = e
        } catch (e) {
          throw S(M.current), e
        } finally {
          null != v && y(null), N.current = !1
        }
      }
    }, [v, n.id, E, g, _]),
    k = r.useCallback(async e => {
      let n = e.field_type === o.QJ.TERMS ? [e, ...A] : [...A, e];
      await w(n)
    }, [A, w]),
    U = r.useCallback(async (e, n) => {
      if (A[e] === n) return;
      let t = [...A];
      t[e] = n, await w(t)
    }, [A, w]),
    G = r.useCallback(async (e, n, t) => {
      let a = A.indexOf(e),
        r = [...A];
      if (null != n && n !== a && (r.splice(a, 1), r.splice(n, 0, e), S(r)), t) try {
        await w(r), null !== v && y(null)
      } catch (e) {
        F()
      } else v !== n && y(n)
    }, [v, A, w, F]),
    B = r.useCallback(async e => {
      try {
        await w([...A.slice(0, e), ...A.slice(e + 1)])
      } catch (e) {
        F()
      }
    }, [A, w, F]),
    H = (0, a.jsxs)(a.Fragment, {
      children: [!T && (0, a.jsx)(m.ZP, {
        guild: n
      }), (0, a.jsx)(d.Z, {
        formDescription: I,
        guildId: n.id,
        onSave: p
      }), !O && !L && (0, a.jsx)(u.Z, {
        addFormField: k,
        guild: n
      }), j.map(e => (0, C.a0)({
        dropHoveredIndex: v,
        formField: e,
        guild: n,
        index: A.indexOf(e),
        isDragEnabled: !1,
        submittedGuildJoinRequestsCount: t,
        removeFormField: B,
        updateFormField: U,
        updateFormFieldOrder: G,
        canRemove: !0,
        actionsLocation: _ ? "side" : "footer"
      }))]
    });
  return P ? (0, a.jsxs)(a.Fragment, {
    children: [!_ && H, !Z && (0, a.jsx)(c.Z, {
      addFormField: k,
      showManualApprovalWarning: !_ && !D,
      guild: n,
      showHeader: !_
    }), b.map(e => (0, C.a0)({
      dropHoveredIndex: v,
      formField: e,
      guild: n,
      index: A.indexOf(e),
      isDragEnabled: D,
      submittedGuildJoinRequestsCount: t,
      removeFormField: B,
      updateFormField: U,
      updateFormFieldOrder: G,
      canRemove: !(_ && b.length <= 1),
      actionsLocation: _ ? "side" : "footer"
    })), Z && !L && (0, a.jsx)(h.Z, {
      addFormField: k,
      guild: n
    })]
  }) : H
}