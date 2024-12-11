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
    j = t(981631),
    C = t(388032);
n.Z = function (e) {
    let { guild: n, submittedGuildJoinRequestsCount: t, onFormFieldUpdate: p, hideVerificationLevelField: N, isClanContext: I, formDescription: T, onFieldsSave: F, onDescriptionSave: b } = e,
        w = l.useRef(!1),
        [y, R] = l.useState(null),
        [E, k] = l.useState(e.formFields);
    l.useEffect(() => k(e.formFields), [e.formFields]);
    let M = l.useRef(e.formFields),
        L = l.useMemo(() => E.filter(d.kT), [E]),
        P = l.useMemo(() => E.filter(d._C), [E]),
        Z = P.length,
        S = l.useMemo(() => E.length === v.nx, [E]),
        A = l.useMemo(() => E.some(c.J), [E]),
        _ = l.useMemo(() => E.some((e) => !(0, c.J)(e)), [E]),
        H = Z > 0,
        D = (0, o.K2)(n.id, 'verification form builder') || n.hasFeature(j.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || I,
        J = l.useCallback(() => {
            (0, s.showToast)((0, s.createToast)(C.intl.string(C.t.R0RpRU), s.ToastType.FAILURE));
        }, []),
        B = (0, a.e7)([r.Z], () => r.Z.can(j.Plq.MANAGE_GUILD, n)),
        z = l.useCallback(
            async (e) => {
                if (!w.current) {
                    (w.current = !0), I && (e = e.filter((e) => e.field_type !== c.QJ.TERMS));
                    try {
                        await F(n.id, e), p(), k(e), (M.current = e);
                    } catch (e) {
                        throw (k(M.current), e);
                    } finally {
                        null != y && R(null), (w.current = !1);
                    }
                }
            },
            [y, n.id, p, F, I]
        ),
        G = l.useCallback(
            async (e) => {
                let n = e.field_type === c.QJ.TERMS ? [e, ...E] : [...E, e];
                await z(n);
            },
            [E, z]
        ),
        Q = l.useCallback(
            async (e, n) => {
                if (E[e] === n) return;
                let t = [...E];
                (t[e] = n), await z(t);
            },
            [E, z]
        ),
        U = l.useCallback(
            async (e, n, t) => {
                let i = E.indexOf(e),
                    l = [...E];
                if ((null != n && n !== i && (l.splice(i, 1), l.splice(n, 0, e), k(l)), t))
                    try {
                        await z(l), null !== y && R(null);
                    } catch (e) {
                        J();
                    }
                else y !== n && R(n);
            },
            [y, E, z, J]
        ),
        O = l.useCallback(
            async (e) => {
                try {
                    await z([...E.slice(0, e), ...E.slice(e + 1)]);
                } catch (e) {
                    J();
                }
            },
            [E, z, J]
        ),
        q = B ? (I ? 'side' : 'footer') : 'none',
        V = (0, i.jsxs)(i.Fragment, {
            children: [
                !N && (0, i.jsx)(f.ZP, { guild: n }),
                (0, i.jsx)(m.Z, {
                    formDescription: T,
                    guildId: n.id,
                    onSave: b,
                    disable: !B
                }),
                B &&
                    !A &&
                    !S &&
                    (0, i.jsx)(x.Z, {
                        addFormField: G,
                        guild: n
                    }),
                L.map((e) =>
                    (0, g.a0)({
                        dropHoveredIndex: y,
                        formField: e,
                        guild: n,
                        index: E.indexOf(e),
                        isDragEnabled: !1,
                        submittedGuildJoinRequestsCount: t,
                        removeFormField: O,
                        updateFormField: Q,
                        updateFormFieldOrder: U,
                        canRemove: !0,
                        actionsLocation: q
                    })
                )
            ]
        });
    return D
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  !I && V,
                  !_ &&
                      (0, i.jsx)(u.Z, {
                          addFormField: G,
                          showManualApprovalWarning: !I && !H,
                          guild: n,
                          showHeader: !I
                      }),
                  P.map((e) =>
                      (0, g.a0)({
                          dropHoveredIndex: y,
                          formField: e,
                          guild: n,
                          index: E.indexOf(e),
                          isDragEnabled: H && B,
                          submittedGuildJoinRequestsCount: t,
                          removeFormField: O,
                          updateFormField: Q,
                          updateFormFieldOrder: U,
                          canRemove: !(I && P.length <= 1) && B,
                          actionsLocation: q
                      })
                  ),
                  _ &&
                      !S &&
                      B &&
                      (0, i.jsx)(h.Z, {
                          addFormField: G,
                          guild: n
                      })
              ]
          })
        : V;
};
