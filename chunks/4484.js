var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(911969),
    c = n(367907),
    d = n(998698),
    _ = n(117530),
    E = n(459273),
    f = n(585483),
    h = n(91313),
    p = n(53529),
    m = n(288897),
    I = n(925994),
    T = n(436660),
    g = n(887490),
    S = n(194625),
    A = n(77188),
    v = n(230554),
    N = n(780748),
    O = n(464581),
    R = n(732659),
    C = n(86724),
    y = n(847302),
    b = n(657198),
    L = n(321127),
    D = n(981631),
    M = n(770206);
t.Z = o.forwardRef(function (e, t) {
    let { value: n, type: r, channel: i, className: s, id: P, disabled: U, submitting: w, placeholder: x, required: G, textAreaPaddingClassName: k, onChange: B, onPaste: F, onResize: Z, onFocus: V, onBlur: H, onKeyDown: Y, onKeyUp: j, onTab: W, onEnter: K, onSubmit: z, maybeShowAutocomplete: q, hideAutocomplete: Q, moveSelection: X, spellcheckEnabled: $, canUseCommands: J, canOnlyUseTextCommands: ee, disableAutoFocus: et, disableEnterToSubmit: en, allowNewLines: er, 'aria-owns': ei, 'aria-expanded': ea, 'aria-haspopup': eo, 'aria-activedescendant': es, 'aria-controls': el, 'aria-invalid': eu, 'aria-describedby': ec, 'aria-labelledby': ed, 'aria-autocomplete': e_ } = e,
        eE = o.useRef(null),
        ef = o.useRef(null),
        eh = o.useRef(!0),
        ep = o.useRef(!0),
        em = U || w,
        eI = o.useCallback(
            (e, t, n) => {
                var r;
                let { value: a, selection: o } = n,
                    s = g.bN.richValue(e),
                    l = e.selection,
                    u = !1;
                if (void 0 !== a && a !== s) {
                    if (((e.children = a), 'parent' === t && !e.previewMarkdown)) {
                        try {
                            (e.previewMarkdown = !0), (0, y.KH)(e, i.guild_id, i.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, y.KH)(e, i.guild_id, i.id), (o = void 0);
                    }
                    'undo' !== t && void 0 !== a && a !== s && p.T.insertEntry(e, 'other', !1, s, l), (u = !0);
                }
                if ((null != o && !g.Ew.isValid(e, o) && (o = void 0), (u || !g.Ew.isValid(e, l)) && void 0 === o)) {
                    let t = g.bN.end(e, []);
                    o = {
                        anchor: t,
                        focus: t
                    };
                }
                if (null != o && !g.Ew.equals(o, l)) {
                    e.selection = o;
                    let t = p.T.currentEntry(e);
                    null != t && (t.selection = o), (u = !0);
                }
                let c = h.cr(e);
                if (
                    (null != c &&
                        c[0].command.id !== (null === (r = d.Z.getActiveCommand(i.id)) || void 0 === r ? void 0 : r.id) &&
                        p.T.withMergedEntry(e, () => {
                            (0, C.L)(e, i.id, null, !0);
                        }),
                    u)
                ) {
                    if ((!et && g.bN.focus(e), 'parent' === t))
                        try {
                            (ep.current = !1), e.onChange();
                        } finally {
                            ep.current = !0;
                        }
                    else e.onChange();
                }
            },
            [i.id, i.guild_id, et]
        ),
        eT = o.useCallback(() => {
            eh.current = !1;
        }, []),
        eg = o.useCallback(() => {
            eh.current = !0;
        }, []),
        eS = (0, A.Z)({
            channel: i,
            chatInputType: r,
            canUseCommands: J,
            canOnlyUseTextCommands: ee,
            onChangeStart: eT,
            onChangeEnd: eg,
            updateState: eI
        }),
        eA = o.useCallback(
            (e, t) => {
                let n = h.tM(eS, e, i.id),
                    r = h.lk(e, i.guild_id, i.id, n, t);
                return {
                    values: n,
                    results: r
                };
            },
            [i.guild_id, i.id, eS]
        ),
        ev = o.useCallback(() => {
            let e;
            let t = J ? d.Z.getActiveCommand(i.id) : null;
            if (null != t && null != t.options) {
                let i = eA(t, !1);
                e = i.values;
                let a = h
                    .cu(eS)
                    .filter((e) => !i.results[e].success)
                    .map((e) => {
                        var n;
                        return (null !== (n = t.options) && void 0 !== n ? n : []).find((t) => t.name === e);
                    });
                for (let e of t.options) e.required && !(e.name in i.values) && (T.Q.insertCommandOption(eS, e), a.push(e));
                if (a.length > 0) {
                    var n, r;
                    let e = a[0];
                    T.Q.selectCommandOption(eS, e.name),
                        f.S.dispatch(D.CkL.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        }),
                        (0, c.yw)(D.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == t ? void 0 : t.applicationId,
                            command_id: null == t ? void 0 : null === (n = t.rootCommand) || void 0 === n ? void 0 : n.id,
                            argument_type: u.jw[null !== (r = null == e ? void 0 : e.type) && void 0 !== r ? r : 3],
                            is_required: null == e ? void 0 : e.required
                        });
                    return;
                }
            }
            null == z ||
                z(
                    (0, I.sk)(g.bN.richValue(eS), {
                        mode: 'raw',
                        ignoreTrailingEmptyNodes: !0
                    }),
                    t,
                    e
                );
        }, [i.id, eS, z, eA, J]);
    (0, v.Z)(t, eS, i, ev), (0, R.Z)(eS, eE, Z);
    let { handleKeyDown: eN, handleKeyUp: eO } = (0, N.Z)({
            editor: eS,
            channel: i,
            disableEnterToSubmit: en,
            onKeyDown: Y,
            onKeyUp: j,
            onTab: W,
            onEnter: K,
            allowNewLines: er,
            submit: ev,
            hideAutocomplete: Q,
            moveSelection: X
        }),
        { handlePaste: eR, handleGlobalPaste: eC } = (0, O.Z)(eS, em, F),
        ey = o.useCallback(
            (e) => {
                null == q || q();
            },
            [q]
        ),
        eb = o.useCallback(
            (e) => {
                e !== ef.current ? ep.current && (null == B || B(null, (0, I.sk)(e, { mode: 'raw' }), e)) : ep.current && q();
            },
            [q, B]
        );
    o.useLayoutEffect(() => {
        eh.current && ((ef.current = n), eI(eS, 'parent', { value: n }));
    }, [eS, n, eI]),
        o.useEffect(() => {
            let e = () => {
                var e;
                let t = null !== (e = d.Z.getActiveCommand(i.id)) && void 0 !== e ? e : null;
                null !== t && null != t.options && eA(t, !0);
            };
            return _.Z.addChangeListener(e), () => _.Z.removeChangeListener(e);
        }, [i, eS, eA]);
    let eL = o.useCallback((e, t) => (0, S.Z)(e, t), []),
        eD = o.useCallback((e) => (0, b.Z)(eS, e, i.id), [i.id, eS]),
        eM = o.useCallback((e) => (0, L.Z)(e), []);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(E.d9, {
                event: D.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eC
            }),
            (0, a.jsx)('div', {
                ref: eE,
                className: l()(s, M.slateContainer),
                children: (0, a.jsx)(m.Z, {
                    id: P,
                    editor: eS,
                    channelId: i.id,
                    guildId: i.guild_id,
                    className: l()(M.slateTextArea, k),
                    placeholder: x,
                    readOnly: em,
                    spellCheck: $,
                    autoFocus: !et,
                    canFocus: !U,
                    onChange: eb,
                    onFocus: V,
                    onBlur: H,
                    onClick: ey,
                    onPaste: eR,
                    onKeyDown: eN,
                    onKeyUp: eO,
                    decorateExtra: eL,
                    renderExtraElement: eD,
                    renderExtraLeaf: eM,
                    'aria-owns': ei,
                    'aria-haspopup': eo,
                    'aria-expanded': ea,
                    'aria-activedescendant': es,
                    'aria-controls': el,
                    'aria-labelledby': ed,
                    'aria-describedby': ec,
                    'aria-invalid': eu,
                    'aria-autocomplete': e_,
                    'aria-required': G
                })
            })
        ]
    });
});
