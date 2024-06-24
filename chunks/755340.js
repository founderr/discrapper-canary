t(47120);
var a = t(735250),
  r = t(470079),
  s = t(481060),
  i = t(467138),
  l = t(246364),
  o = t(983736),
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
  } = e, N = r.useRef(!1), [v, y] = r.useState(null), [S, A] = r.useState(e.formFields);
  r.useEffect(() => A(e.formFields), [e.formFields]);
  let M = r.useRef(e.formFields),
    b = r.useMemo(() => S.filter(o.kT), [S]),
    j = r.useMemo(() => S.filter(o._C), [S]),
    R = j.length,
    L = r.useMemo(() => S.length === x.nx, [S]),
    O = r.useMemo(() => S.some(l.J), [S]),
    Z = r.useMemo(() => S.some(e => !(0, l.J)(e)), [S]),
    D = R > 0,
    P = (0, i.e)(n.id) || _,
    F = r.useCallback(() => {
      (0, s.showToast)((0, s.createToast)(f.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE))
    }, []),
    w = r.useCallback(async e => {
      if (!N.current) {
        N.current = !0, _ && (e = e.filter(e => e.field_type !== l.QJ.TERMS));
        try {
          await g(n.id, e), E(), A(e), M.current = e
        } catch (e) {
          throw A(M.current), e
        } finally {
          null != v && y(null), N.current = !1
        }
      }
    }, [v, n.id, E, g, _]),
    k = r.useCallback(async e => {
      let n = e.field_type === l.QJ.TERMS ? [e, ...S] : [...S, e];
      await w(n)
    }, [S, w]),
    G = r.useCallback(async (e, n) => {
      if (S[e] === n) return;
      let t = [...S];
      t[e] = n, await w(t)
    }, [S, w]),
    U = r.useCallback(async (e, n, t) => {
      let a = S.indexOf(e),
        r = [...S];
      if (null != n && n !== a && (r.splice(a, 1), r.splice(n, 0, e), A(r)), t) try {
        await w(r), null !== v && y(null)
      } catch (e) {
        F()
      } else v !== n && y(n)
    }, [v, S, w, F]),
    B = r.useCallback(async e => {
      try {
        await w([...S.slice(0, e), ...S.slice(e + 1)])
      } catch (e) {
        F()
      }
    }, [S, w, F]),
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
      }), b.map(e => (0, C.a0)({
        dropHoveredIndex: v,
        formField: e,
        guild: n,
        index: S.indexOf(e),
        isDragEnabled: !1,
        submittedGuildJoinRequestsCount: t,
        removeFormField: B,
        updateFormField: G,
        updateFormFieldOrder: U,
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
    }), j.map(e => (0, C.a0)({
      dropHoveredIndex: v,
      formField: e,
      guild: n,
      index: S.indexOf(e),
      isDragEnabled: D,
      submittedGuildJoinRequestsCount: t,
      removeFormField: B,
      updateFormField: G,
      updateFormFieldOrder: U,
      canRemove: !(_ && j.length <= 1),
      actionsLocation: _ ? "side" : "footer"
    })), Z && !L && (0, a.jsx)(h.Z, {
      addFormField: k,
      guild: n
    })]
  }) : H
}