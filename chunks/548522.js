n.d(t, {
    y: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(793030),
    s = n(246364),
    a = n(571728),
    o = n(446945),
    c = n(681460),
    d = n(700833),
    u = n(245762),
    m = n(592286),
    h = n(388032),
    g = n(792942);
function x(e) {
    var t;
    let { guild: n, formFields: l } = e,
        [c, h] = r.useState(l);
    r.useEffect(() => h(l), [l]);
    let x = null !== (t = (0, a.A)({ guildId: n.id })) && void 0 !== t ? t : 0,
        [f, C] = r.useState(null),
        I = r.useMemo(() => (null == c ? void 0 : c.some((e) => (0, s.J)(e))), [c]),
        _ = r.useMemo(() => c.length === m.nx, [c]),
        v = r.useCallback(
            (e) => {
                u.Z.setPendingMemberVerificationRules(n.id, e), h(e), null != f && C(null);
            },
            [f, n.id]
        ),
        N = r.useCallback(
            (e) => {
                v([...c, e]);
            },
            [c, v]
        ),
        T = r.useCallback(
            (e) => {
                v([...c.slice(0, e), ...c.slice(e + 1)]);
            },
            [c, v]
        ),
        b = r.useCallback(
            (e, t) => {
                if (c[e] === t) return;
                let n = [...c];
                (n[e] = t), v(n);
            },
            [c, v]
        ),
        j = r.useCallback(
            (e, t, n) => {
                let i = c.indexOf(e),
                    r = [...c];
                null != t && t !== i && (r.splice(i, 1), r.splice(t, 0, e), h(r)), n ? (v(r), null !== f && C(null)) : f !== t && C(t);
            },
            [f, c, v]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c.map((e) =>
                (0, d.a0)({
                    dropHoveredIndex: f,
                    formField: e,
                    guild: n,
                    index: c.indexOf(e),
                    isDragEnabled: !0,
                    submittedGuildJoinRequestsCount: x,
                    removeFormField: T,
                    updateFormField: b,
                    updateFormFieldOrder: j,
                    canRemove: c.length > 1,
                    actionsLocation: 'side',
                    fieldStyle: s.it.COMPACT
                })
            ),
            !_ &&
                (0, i.jsx)('div', {
                    className: g.addQuestionsContainer,
                    children: (0, i.jsx)(o.Z, {
                        addFormField: N,
                        guild: n,
                        allowTerms: !I
                    })
                }),
            !_ && (0, i.jsx)(p, { addFormField: N })
        ]
    });
}
function p(e) {
    let { addFormField: t } = e,
        n = r.useMemo(
            () => [
                {
                    text: h.intl.string(h.t.EOwiEh),
                    onClick: () => {
                        t({
                            field_type: s.QJ.TEXT_INPUT,
                            label: h.intl.string(h.t.EOwiEh),
                            required: !0
                        });
                    }
                },
                {
                    text: h.intl.string(h.t.jqrNDg),
                    onClick: () => {
                        t({
                            field_type: s.QJ.TEXT_INPUT,
                            label: h.intl.string(h.t.jqrNDg),
                            required: !0
                        });
                    }
                },
                {
                    text: h.intl.string(h.t.I5q8vr),
                    onClick: () => {
                        t({
                            field_type: s.QJ.TEXT_INPUT,
                            label: h.intl.string(h.t.I5q8vr),
                            required: !0
                        });
                    }
                }
            ],
            [t]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: g.examplesHeader,
                children: h.intl.string(h.t.ID04cH)
            }),
            (0, i.jsx)(c.j, { pills: n })
        ]
    });
}
