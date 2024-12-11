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
    let { guild: n, submittedGuildJoinRequestsCount: t, onFormFieldUpdate: p, hideVerificationLevelField: T, isClanContext: I, formDescription: N, onFieldsSave: R, onDescriptionSave: y } = e,
        F = l.useRef(!1),
        [E, b] = l.useState(null),
        [w, M] = l.useState(e.formFields);
    l.useEffect(() => M(e.formFields), [e.formFields]);
    let k = l.useRef(e.formFields),
        L = l.useMemo(() => w.filter(d.kT), [w]),
        P = l.useMemo(() => w.filter(d._C), [w]),
        S = P.length,
        A = l.useMemo(() => w.length === v.nx, [w]),
        Z = l.useMemo(() => w.some(c.J), [w]),
        _ = l.useMemo(() => w.some((e) => !(0, c.J)(e)), [w]),
        H = S > 0,
        J = (0, o.K2)(n.id, 'verification form builder') || n.hasFeature(j.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || I,
        B = l.useCallback(() => {
            (0, s.showToast)((0, s.createToast)(C.intl.string(C.t.R0RpRU), s.ToastType.FAILURE));
        }, []),
        D = (0, a.e7)([r.Z], () => r.Z.can(j.Plq.MANAGE_GUILD, n)),
        z = l.useCallback(
            async (e) => {
                if (!F.current) {
                    (F.current = !0), I && (e = e.filter((e) => e.field_type !== c.QJ.TERMS));
                    try {
                        await R(n.id, e), p(), M(e), (k.current = e);
                    } catch (e) {
                        throw (M(k.current), e);
                    } finally {
                        null != E && b(null), (F.current = !1);
                    }
                }
            },
            [E, n.id, p, R, I]
        ),
        G = l.useCallback(
            async (e) => {
                let n = e.field_type === c.QJ.TERMS ? [e, ...w] : [...w, e];
                await z(n);
            },
            [w, z]
        ),
        Q = l.useCallback(
            async (e, n) => {
                if (w[e] === n) return;
                let t = [...w];
                (t[e] = n), await z(t);
            },
            [w, z]
        ),
        U = l.useCallback(
            async (e, n, t) => {
                let i = w.indexOf(e),
                    l = [...w];
                if ((null != n && n !== i && (l.splice(i, 1), l.splice(n, 0, e), M(l)), t))
                    try {
                        await z(l), null !== E && b(null);
                    } catch (e) {
                        B();
                    }
                else E !== n && b(n);
            },
            [E, w, z, B]
        ),
        O = l.useCallback(
            async (e) => {
                try {
                    await z([...w.slice(0, e), ...w.slice(e + 1)]);
                } catch (e) {
                    B();
                }
            },
            [w, z, B]
        ),
        q = D ? (I ? 'side' : 'footer') : 'none',
        V = (0, i.jsxs)(i.Fragment, {
            children: [
                !T && (0, i.jsx)(f.ZP, { guild: n }),
                (0, i.jsx)(m.Z, {
                    formDescription: N,
                    guildId: n.id,
                    onSave: y,
                    disable: !D
                }),
                D &&
                    !Z &&
                    !A &&
                    (0, i.jsx)(x.Z, {
                        addFormField: G,
                        guild: n
                    }),
                L.map((e) =>
                    (0, g.a0)({
                        dropHoveredIndex: E,
                        formField: e,
                        guild: n,
                        index: w.indexOf(e),
                        isDragEnabled: !1,
                        submittedGuildJoinRequestsCount: t,
                        removeFormField: O,
                        updateFormField: Q,
                        updateFormFieldOrder: U,
                        canRemove: !0,
                        actionsLocation: q,
                        fieldStyle: c.it.REGULAR
                    })
                )
            ]
        });
    return J
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
                          dropHoveredIndex: E,
                          formField: e,
                          guild: n,
                          index: w.indexOf(e),
                          isDragEnabled: H && D,
                          submittedGuildJoinRequestsCount: t,
                          removeFormField: O,
                          updateFormField: Q,
                          updateFormFieldOrder: U,
                          canRemove: !(I && P.length <= 1) && D,
                          actionsLocation: q,
                          fieldStyle: c.it.REGULAR
                      })
                  ),
                  _ &&
                      !A &&
                      D &&
                      (0, i.jsx)(h.Z, {
                          addFormField: G,
                          guild: n
                      })
              ]
          })
        : V;
};
