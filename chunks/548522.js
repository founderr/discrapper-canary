n.d(t, {
    y: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(793030),
    s = n(481060),
    a = n(246364),
    o = n(571728),
    c = n(446945),
    d = n(700833),
    u = n(245762),
    m = n(592286),
    h = n(388032),
    g = n(792942);
function x(e) {
    var t;
    let { guild: n, formFields: l } = e,
        [s, h] = r.useState(l);
    r.useEffect(() => h(l), [l]);
    let g = null !== (t = (0, o.A)({ guildId: n.id })) && void 0 !== t ? t : 0,
        [x, f] = r.useState(null),
        C = r.useMemo(() => (null == s ? void 0 : s.some((e) => (0, a.J)(e))), [s]),
        _ = r.useMemo(() => s.length === m.nx, [s]),
        I = r.useCallback(
            (e) => {
                u.Z.setPendingMemberVerificationRules(n.id, e), h(e), null != x && f(null);
            },
            [x, n.id]
        ),
        v = r.useCallback(
            (e) => {
                I([...s, e]);
            },
            [s, I]
        ),
        N = r.useCallback(
            (e) => {
                I([...s.slice(0, e), ...s.slice(e + 1)]);
            },
            [s, I]
        ),
        T = r.useCallback(
            (e, t) => {
                if (s[e] === t) return;
                let n = [...s];
                (n[e] = t), I(n);
            },
            [s, I]
        ),
        b = r.useCallback(
            (e, t, n) => {
                let i = s.indexOf(e),
                    r = [...s];
                null != t && t !== i && (r.splice(i, 1), r.splice(t, 0, e), h(r)), n ? (I(r), null !== x && f(null)) : x !== t && f(t);
            },
            [x, s, I]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s.map((e) =>
                (0, d.a0)({
                    dropHoveredIndex: x,
                    formField: e,
                    guild: n,
                    index: s.indexOf(e),
                    isDragEnabled: !0,
                    submittedGuildJoinRequestsCount: g,
                    removeFormField: N,
                    updateFormField: T,
                    updateFormFieldOrder: b,
                    canRemove: s.length > 1,
                    actionsLocation: 'side',
                    fieldStyle: a.it.COMPACT
                })
            ),
            !_ &&
                (0, i.jsx)(c.Z, {
                    addFormField: v,
                    guild: n,
                    allowTerms: !C
                }),
            !_ && (0, i.jsx)(p, { addFormField: v })
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
                            field_type: a.QJ.TEXT_INPUT,
                            label: h.intl.string(h.t.EOwiEh),
                            required: !0
                        });
                    }
                },
                {
                    text: h.intl.string(h.t.jqrNDg),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: h.intl.string(h.t.jqrNDg),
                            required: !0
                        });
                    }
                },
                {
                    text: h.intl.string(h.t.I5q8vr),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
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
            (0, i.jsx)('div', {
                className: g.examples,
                children: n.map((e) =>
                    (0, i.jsx)(
                        s.Clickable,
                        {
                            className: g.pill,
                            onClick: e.onClick,
                            children: (0, i.jsx)(l.xv, {
                                tag: 'span',
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: e.text
                            })
                        },
                        e.text
                    )
                )
            })
        ]
    });
}
