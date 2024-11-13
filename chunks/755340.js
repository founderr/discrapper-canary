t(47120);
var r = t(200651),
    a = t(192379),
    i = t(442837),
    o = t(481060),
    s = t(496675),
    l = t(246364),
    c = t(983736),
    d = t(5056),
    u = t(565321),
    m = t(297619),
    f = t(456935),
    h = t(446945),
    x = t(700833),
    p = t(592286),
    g = t(981631),
    C = t(388032);
n.Z = function (e) {
    let { guild: n, submittedGuildJoinRequestsCount: t, onFormFieldUpdate: b, hideVerificationLevelField: v, isClanContext: _, formDescription: y, onFieldsSave: T, onDescriptionSave: I } = e,
        j = a.useRef(!1),
        [N, S] = a.useState(null),
        [E, k] = a.useState(e.formFields);
    a.useEffect(() => k(e.formFields), [e.formFields]);
    let A = a.useRef(e.formFields),
        w = a.useMemo(() => E.filter(c.kT), [E]),
        M = a.useMemo(() => E.filter(c._C), [E]),
        R = M.length,
        D = a.useMemo(() => E.length === p.nx, [E]),
        L = a.useMemo(() => E.some(l.J), [E]),
        Z = a.useMemo(() => E.some((e) => !(0, l.J)(e)), [E]),
        P = R > 0,
        O = n.hasFeature(g.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || _,
        F = a.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(C.intl.string(C.t.R0RpRU), o.ToastType.FAILURE));
        }, []),
        B = (0, i.e7)([s.Z], () => s.Z.can(g.Plq.MANAGE_GUILD, n)),
        G = a.useCallback(
            async (e) => {
                if (!j.current) {
                    (j.current = !0), _ && (e = e.filter((e) => e.field_type !== l.QJ.TERMS));
                    try {
                        await T(n.id, e), b(), k(e), (A.current = e);
                    } catch (e) {
                        throw (k(A.current), e);
                    } finally {
                        null != N && S(null), (j.current = !1);
                    }
                }
            },
            [N, n.id, b, T, _]
        ),
        H = a.useCallback(
            async (e) => {
                let n = e.field_type === l.QJ.TERMS ? [e, ...E] : [...E, e];
                await G(n);
            },
            [E, G]
        ),
        U = a.useCallback(
            async (e, n) => {
                if (E[e] === n) return;
                let t = [...E];
                (t[e] = n), await G(t);
            },
            [E, G]
        ),
        W = a.useCallback(
            async (e, n, t) => {
                let r = E.indexOf(e),
                    a = [...E];
                if ((null != n && n !== r && (a.splice(r, 1), a.splice(n, 0, e), k(a)), t))
                    try {
                        await G(a), null !== N && S(null);
                    } catch (e) {
                        F();
                    }
                else N !== n && S(n);
            },
            [N, E, G, F]
        ),
        q = a.useCallback(
            async (e) => {
                try {
                    await G([...E.slice(0, e), ...E.slice(e + 1)]);
                } catch (e) {
                    F();
                }
            },
            [E, G, F]
        ),
        z = B ? (_ ? 'side' : 'footer') : 'none',
        V = (0, r.jsxs)(r.Fragment, {
            children: [
                !v && (0, r.jsx)(f.ZP, { guild: n }),
                (0, r.jsx)(u.Z, {
                    formDescription: y,
                    guildId: n.id,
                    onSave: I,
                    disable: !B
                }),
                B &&
                    !L &&
                    !D &&
                    (0, r.jsx)(m.Z, {
                        addFormField: H,
                        guild: n
                    }),
                w.map((e) =>
                    (0, x.a0)({
                        dropHoveredIndex: N,
                        formField: e,
                        guild: n,
                        index: E.indexOf(e),
                        isDragEnabled: !1,
                        submittedGuildJoinRequestsCount: t,
                        removeFormField: q,
                        updateFormField: U,
                        updateFormFieldOrder: W,
                        canRemove: !0,
                        actionsLocation: z
                    })
                )
            ]
        });
    return O
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  !_ && V,
                  !Z &&
                      (0, r.jsx)(d.Z, {
                          addFormField: H,
                          showManualApprovalWarning: !_ && !P,
                          guild: n,
                          showHeader: !_
                      }),
                  M.map((e) =>
                      (0, x.a0)({
                          dropHoveredIndex: N,
                          formField: e,
                          guild: n,
                          index: E.indexOf(e),
                          isDragEnabled: P && B,
                          submittedGuildJoinRequestsCount: t,
                          removeFormField: q,
                          updateFormField: U,
                          updateFormFieldOrder: W,
                          canRemove: !(_ && M.length <= 1) && B,
                          actionsLocation: z
                      })
                  ),
                  Z &&
                      !D &&
                      B &&
                      (0, r.jsx)(h.Z, {
                          addFormField: H,
                          guild: n
                      })
              ]
          })
        : V;
};
