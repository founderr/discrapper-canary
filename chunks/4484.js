n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(911969),
    l = n(367907),
    u = n(998698),
    c = n(117530),
    d = n(459273),
    f = n(585483),
    _ = n(91313),
    p = n(53529),
    h = n(288897),
    m = n(925994),
    g = n(436660),
    E = n(887490),
    v = n(194625),
    b = n(77188),
    I = n(230554),
    T = n(780748),
    S = n(464581),
    y = n(732659),
    A = n(86724),
    N = n(847302),
    C = n(657198),
    R = n(321127),
    O = n(981631),
    D = n(484918);
t.Z = i.forwardRef(function (e, t) {
    let { value: n, type: a, channel: L, className: x, id: w, disabled: M, submitting: P, placeholder: k, required: U, textAreaPaddingClassName: B, onChange: G, onPaste: Z, onResize: F, onFocus: V, onBlur: j, onKeyDown: H, onKeyUp: Y, onTab: W, onEnter: K, onSubmit: z, maybeShowAutocomplete: q, hideAutocomplete: Q, moveSelection: X, spellcheckEnabled: J, canUseCommands: $, canOnlyUseTextCommands: ee, disableAutoFocus: et, disableEnterToSubmit: en, allowNewLines: er, 'aria-owns': ei, 'aria-expanded': ea, 'aria-haspopup': es, 'aria-activedescendant': eo, 'aria-controls': el, 'aria-invalid': eu, 'aria-describedby': ec, 'aria-labelledby': ed, 'aria-autocomplete': ef } = e,
        e_ = i.useRef(null),
        ep = i.useRef(null),
        eh = i.useRef(!0),
        em = i.useRef(!0),
        eg = M || P,
        eE = i.useCallback(
            (e, t, n) => {
                var r;
                let { value: i, selection: a } = n,
                    s = E.bN.richValue(e),
                    o = e.selection,
                    l = !1;
                if (void 0 !== i && i !== s) {
                    if (((e.children = i), 'parent' === t && !e.previewMarkdown)) {
                        try {
                            (e.previewMarkdown = !0), (0, N.KH)(e, L.guild_id, L.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, N.KH)(e, L.guild_id, L.id), (a = void 0);
                    }
                    'undo' !== t && void 0 !== i && i !== s && p.T.insertEntry(e, 'other', !1, s, o), (l = !0);
                }
                if ((null != a && !E.Ew.isValid(e, a) && (a = void 0), (l || !E.Ew.isValid(e, o)) && void 0 === a)) {
                    let t = E.bN.end(e, []);
                    a = {
                        anchor: t,
                        focus: t
                    };
                }
                if (null != a && !E.Ew.equals(a, o)) {
                    e.selection = a;
                    let t = p.T.currentEntry(e);
                    null != t && (t.selection = a), (l = !0);
                }
                let c = _.cr(e);
                if (
                    (null != c &&
                        c[0].command.id !== (null === (r = u.Z.getActiveCommand(L.id)) || void 0 === r ? void 0 : r.id) &&
                        p.T.withMergedEntry(e, () => {
                            (0, A.L)(e, L.id, null, !0);
                        }),
                    l)
                ) {
                    if ((!et && E.bN.focus(e), 'parent' === t))
                        try {
                            (em.current = !1), e.onChange();
                        } finally {
                            em.current = !0;
                        }
                    else e.onChange();
                }
            },
            [L.id, L.guild_id, et]
        ),
        ev = i.useCallback(() => {
            eh.current = !1;
        }, []),
        eb = i.useCallback(() => {
            eh.current = !0;
        }, []),
        eI = (0, b.Z)({
            channel: L,
            chatInputType: a,
            canUseCommands: $,
            canOnlyUseTextCommands: ee,
            onChangeStart: ev,
            onChangeEnd: eb,
            updateState: eE
        }),
        eT = i.useCallback(
            (e, t) => {
                let n = _.tM(eI, e, L.id),
                    r = _.lk(e, L.guild_id, L.id, n, t);
                return {
                    values: n,
                    results: r
                };
            },
            [L.guild_id, L.id, eI]
        ),
        eS = i.useCallback(() => {
            let e;
            let t = $ ? u.Z.getActiveCommand(L.id) : null;
            if (null != t && null != t.options) {
                let i = eT(t, !1);
                e = i.values;
                let a = _.cu(eI)
                    .filter((e) => !i.results[e].success)
                    .map((e) => {
                        var n;
                        return (null !== (n = t.options) && void 0 !== n ? n : []).find((t) => t.name === e);
                    });
                for (let e of t.options) e.required && !(e.name in i.values) && (g.Q.insertCommandOption(eI, e), a.push(e));
                if (a.length > 0) {
                    var n, r;
                    let e = a[0];
                    g.Q.selectCommandOption(eI, e.name),
                        f.S.dispatch(O.CkL.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        }),
                        (0, l.yw)(O.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == t ? void 0 : t.applicationId,
                            command_id: null == t ? void 0 : null === (n = t.rootCommand) || void 0 === n ? void 0 : n.id,
                            argument_type: o.jw[null !== (r = null == e ? void 0 : e.type) && void 0 !== r ? r : 3],
                            is_required: null == e ? void 0 : e.required
                        });
                    return;
                }
            }
            null == z ||
                z(
                    (0, m.sk)(E.bN.richValue(eI), {
                        mode: 'raw',
                        ignoreTrailingEmptyNodes: !0
                    }),
                    t,
                    e
                );
        }, [L.id, eI, z, eT, $]);
    (0, I.Z)(t, eI, L, eS), (0, y.Z)(eI, e_, F);
    let { handleKeyDown: ey, handleKeyUp: eA } = (0, T.Z)({
            editor: eI,
            channel: L,
            disableEnterToSubmit: en,
            onKeyDown: H,
            onKeyUp: Y,
            onTab: W,
            onEnter: K,
            allowNewLines: er,
            submit: eS,
            hideAutocomplete: Q,
            moveSelection: X
        }),
        { handlePaste: eN, handleGlobalPaste: eC } = (0, S.Z)(eI, eg, Z),
        eR = i.useCallback(
            (e) => {
                null == q || q();
            },
            [q]
        ),
        eO = i.useCallback(
            (e) => {
                e !== ep.current ? em.current && (null == G || G(null, (0, m.sk)(e, { mode: 'raw' }), e)) : em.current && q();
            },
            [q, G]
        );
    i.useLayoutEffect(() => {
        eh.current && ((ep.current = n), eE(eI, 'parent', { value: n }));
    }, [eI, n, eE]),
        i.useEffect(() => {
            let e = () => {
                var e;
                let t = null !== (e = u.Z.getActiveCommand(L.id)) && void 0 !== e ? e : null;
                null !== t && null != t.options && eT(t, !0);
            };
            return c.Z.addChangeListener(e), () => c.Z.removeChangeListener(e);
        }, [L, eI, eT]);
    let eD = i.useCallback((e, t) => (0, v.Z)(e, t), []),
        eL = i.useCallback((e) => (0, C.Z)(eI, e, L.id), [L.id, eI]),
        ex = i.useCallback((e) => (0, R.Z)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.d9, {
                event: O.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eC
            }),
            (0, r.jsx)('div', {
                ref: e_,
                className: s()(x, D.slateContainer),
                children: (0, r.jsx)(h.Z, {
                    id: w,
                    editor: eI,
                    channelId: L.id,
                    guildId: L.guild_id,
                    className: s()(D.slateTextArea, B),
                    placeholder: k,
                    readOnly: eg,
                    spellCheck: J,
                    autoFocus: !et,
                    canFocus: !M,
                    onChange: eO,
                    onFocus: V,
                    onBlur: j,
                    onClick: eR,
                    onPaste: eN,
                    onKeyDown: ey,
                    onKeyUp: eA,
                    decorateExtra: eD,
                    renderExtraElement: eL,
                    renderExtraLeaf: ex,
                    'aria-owns': ei,
                    'aria-haspopup': es,
                    'aria-expanded': ea,
                    'aria-activedescendant': eo,
                    'aria-controls': el,
                    'aria-labelledby': ed,
                    'aria-describedby': ec,
                    'aria-invalid': eu,
                    'aria-autocomplete': ef,
                    'aria-required': U
                })
            })
        ]
    });
});
