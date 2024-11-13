t(47120);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    r = t(481060),
    s = t(496675),
    o = t(246364),
    c = t(983736),
    d = t(5056),
    u = t(565321),
    m = t(297619),
    x = t(456935),
    f = t(446945),
    h = t(700833),
    g = t(592286),
    v = t(981631),
    j = t(388032);
n.Z = function (e) {
    let { guild: n, submittedGuildJoinRequestsCount: t, onFormFieldUpdate: C, hideVerificationLevelField: p, isClanContext: N, formDescription: I, onFieldsSave: T, onDescriptionSave: F } = e,
        b = l.useRef(!1),
        [y, R] = l.useState(null),
        [w, E] = l.useState(e.formFields);
    l.useEffect(() => E(e.formFields), [e.formFields]);
    let k = l.useRef(e.formFields),
        M = l.useMemo(() => w.filter(c.kT), [w]),
        L = l.useMemo(() => w.filter(c._C), [w]),
        Z = L.length,
        P = l.useMemo(() => w.length === g.nx, [w]),
        S = l.useMemo(() => w.some(o.J), [w]),
        A = l.useMemo(() => w.some((e) => !(0, o.J)(e)), [w]),
        _ = Z > 0,
        H = n.hasFeature(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || N,
        D = l.useCallback(() => {
            (0, r.showToast)((0, r.createToast)(j.intl.string(j.t.R0RpRU), r.ToastType.FAILURE));
        }, []),
        J = (0, a.e7)([s.Z], () => s.Z.can(v.Plq.MANAGE_GUILD, n)),
        B = l.useCallback(
            async (e) => {
                if (!b.current) {
                    (b.current = !0), N && (e = e.filter((e) => e.field_type !== o.QJ.TERMS));
                    try {
                        await T(n.id, e), C(), E(e), (k.current = e);
                    } catch (e) {
                        throw (E(k.current), e);
                    } finally {
                        null != y && R(null), (b.current = !1);
                    }
                }
            },
            [y, n.id, C, T, N]
        ),
        z = l.useCallback(
            async (e) => {
                let n = e.field_type === o.QJ.TERMS ? [e, ...w] : [...w, e];
                await B(n);
            },
            [w, B]
        ),
        G = l.useCallback(
            async (e, n) => {
                if (w[e] === n) return;
                let t = [...w];
                (t[e] = n), await B(t);
            },
            [w, B]
        ),
        Q = l.useCallback(
            async (e, n, t) => {
                let i = w.indexOf(e),
                    l = [...w];
                if ((null != n && n !== i && (l.splice(i, 1), l.splice(n, 0, e), E(l)), t))
                    try {
                        await B(l), null !== y && R(null);
                    } catch (e) {
                        D();
                    }
                else y !== n && R(n);
            },
            [y, w, B, D]
        ),
        U = l.useCallback(
            async (e) => {
                try {
                    await B([...w.slice(0, e), ...w.slice(e + 1)]);
                } catch (e) {
                    D();
                }
            },
            [w, B, D]
        ),
        O = J ? (N ? 'side' : 'footer') : 'none',
        q = (0, i.jsxs)(i.Fragment, {
            children: [
                !p && (0, i.jsx)(x.ZP, { guild: n }),
                (0, i.jsx)(u.Z, {
                    formDescription: I,
                    guildId: n.id,
                    onSave: F,
                    disable: !J
                }),
                J &&
                    !S &&
                    !P &&
                    (0, i.jsx)(m.Z, {
                        addFormField: z,
                        guild: n
                    }),
                M.map((e) =>
                    (0, h.a0)({
                        dropHoveredIndex: y,
                        formField: e,
                        guild: n,
                        index: w.indexOf(e),
                        isDragEnabled: !1,
                        submittedGuildJoinRequestsCount: t,
                        removeFormField: U,
                        updateFormField: G,
                        updateFormFieldOrder: Q,
                        canRemove: !0,
                        actionsLocation: O
                    })
                )
            ]
        });
    return H
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  !N && q,
                  !A &&
                      (0, i.jsx)(d.Z, {
                          addFormField: z,
                          showManualApprovalWarning: !N && !_,
                          guild: n,
                          showHeader: !N
                      }),
                  L.map((e) =>
                      (0, h.a0)({
                          dropHoveredIndex: y,
                          formField: e,
                          guild: n,
                          index: w.indexOf(e),
                          isDragEnabled: _ && J,
                          submittedGuildJoinRequestsCount: t,
                          removeFormField: U,
                          updateFormField: G,
                          updateFormFieldOrder: Q,
                          canRemove: !(N && L.length <= 1) && J,
                          actionsLocation: O
                      })
                  ),
                  A &&
                      !P &&
                      J &&
                      (0, i.jsx)(f.Z, {
                          addFormField: z,
                          guild: n
                      })
              ]
          })
        : q;
};
