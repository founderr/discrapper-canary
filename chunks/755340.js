t(47120);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    s = t(481060),
    r = t(496675),
    o = t(63568),
    c = t(246364),
    d = t(983736),
    u = t(5056),
    m = t(565321),
    x = t(297619),
    f = t(456935),
    h = t(446945),
    g = t(700833),
    v = t(592286),
    C = t(981631),
    j = t(388032),
    p = t(491490);
n.Z = function (e) {
    let { guild: n, submittedGuildJoinRequestsCount: t, onFormFieldUpdate: T, hideVerificationLevelField: N, isClanContext: I, formDescription: y, onFieldsSave: R, onDescriptionSave: F } = e,
        E = l.useRef(!1),
        [b, w] = l.useState(null),
        [M, k] = l.useState(e.formFields);
    l.useEffect(() => k(e.formFields), [e.formFields]);
    let L = l.useRef(e.formFields),
        P = l.useMemo(() => M.filter(d.kT), [M]),
        S = l.useMemo(() => M.filter(d._C), [M]),
        A = S.length,
        Z = l.useMemo(() => M.length === v.nx, [M]),
        _ = l.useMemo(() => M.some(c.J), [M]),
        H = l.useMemo(() => M.some((e) => !(0, c.J)(e)), [M]),
        J = A > 0,
        D = (0, o.K2)(n.id, 'verification form builder') || n.hasFeature(C.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || I,
        B = l.useCallback(() => {
            (0, s.showToast)((0, s.createToast)(j.intl.string(j.t.R0RpRU), s.ToastType.FAILURE));
        }, []),
        z = (0, a.e7)([r.Z], () => r.Z.can(C.Plq.MANAGE_GUILD, n)),
        Q = l.useCallback(
            async (e) => {
                if (!E.current) {
                    (E.current = !0), I && (e = e.filter((e) => e.field_type !== c.QJ.TERMS));
                    try {
                        await R(n.id, e), T(), k(e), (L.current = e);
                    } catch (e) {
                        throw (k(L.current), e);
                    } finally {
                        null != b && w(null), (E.current = !1);
                    }
                }
            },
            [b, n.id, T, R, I]
        ),
        G = l.useCallback(
            async (e) => {
                let n = e.field_type === c.QJ.TERMS ? [e, ...M] : [...M, e];
                await Q(n);
            },
            [M, Q]
        ),
        U = l.useCallback(
            async (e, n) => {
                if (M[e] === n) return;
                let t = [...M];
                (t[e] = n), await Q(t);
            },
            [M, Q]
        ),
        O = l.useCallback(
            async (e, n, t) => {
                let i = M.indexOf(e),
                    l = [...M];
                if ((null != n && n !== i && (l.splice(i, 1), l.splice(n, 0, e), k(l)), t))
                    try {
                        await Q(l), null !== b && w(null);
                    } catch (e) {
                        B();
                    }
                else b !== n && w(n);
            },
            [b, M, Q, B]
        ),
        q = l.useCallback(
            async (e) => {
                try {
                    await Q([...M.slice(0, e), ...M.slice(e + 1)]);
                } catch (e) {
                    B();
                }
            },
            [M, Q, B]
        ),
        V = z ? (I ? 'side' : 'footer') : 'none',
        X = (0, i.jsxs)(i.Fragment, {
            children: [
                !N && (0, i.jsx)(f.ZP, { guild: n }),
                (0, i.jsx)(m.Z, {
                    formDescription: y,
                    guildId: n.id,
                    onSave: F,
                    disable: !z
                }),
                z &&
                    !_ &&
                    !Z &&
                    (0, i.jsx)(x.Z, {
                        addFormField: G,
                        guild: n
                    }),
                P.map((e) =>
                    (0, g.a0)({
                        dropHoveredIndex: b,
                        formField: e,
                        guild: n,
                        index: M.indexOf(e),
                        isDragEnabled: !1,
                        submittedGuildJoinRequestsCount: t,
                        removeFormField: q,
                        updateFormField: U,
                        updateFormFieldOrder: O,
                        canRemove: !0,
                        actionsLocation: V,
                        fieldStyle: c.it.REGULAR
                    })
                )
            ]
        });
    return D
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  !I && X,
                  !H &&
                      (0, i.jsx)(u.Z, {
                          addFormField: G,
                          showManualApprovalWarning: !I && !J,
                          guild: n,
                          showHeader: !I
                      }),
                  S.map((e) =>
                      (0, g.a0)({
                          dropHoveredIndex: b,
                          formField: e,
                          guild: n,
                          index: M.indexOf(e),
                          isDragEnabled: J && z,
                          submittedGuildJoinRequestsCount: t,
                          removeFormField: q,
                          updateFormField: U,
                          updateFormFieldOrder: O,
                          canRemove: !(I && S.length <= 1) && z,
                          actionsLocation: V,
                          fieldStyle: c.it.REGULAR
                      })
                  ),
                  H &&
                      !Z &&
                      z &&
                      (0, i.jsx)('div', {
                          className: p.addQuestionsContainer,
                          children: (0, i.jsx)(h.Z, {
                              addFormField: G,
                              guild: n
                          })
                      })
              ]
          })
        : X;
};
