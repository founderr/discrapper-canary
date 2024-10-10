n(47120), n(653041);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(911969),
    l = n(367907),
    u = n(998698),
    c = n(117530),
    d = n(459273),
    _ = n(585483),
    E = n(91313),
    f = n(53529),
    h = n(288897),
    p = n(925994),
    I = n(436660),
    m = n(887490),
    T = n(194625),
    S = n(77188),
    g = n(230554),
    A = n(780748),
    N = n(464581),
    R = n(732659),
    O = n(86724),
    v = n(847302),
    C = n(657198),
    L = n(321127),
    y = n(981631),
    D = n(770206);
t.Z = i.forwardRef(function (e, t) {
    let { value: n, type: a, channel: b, className: M, id: P, disabled: U, submitting: w, placeholder: x, required: G, textAreaPaddingClassName: k, onChange: B, onPaste: F, onResize: V, onFocus: H, onBlur: Z, onKeyDown: Y, onKeyUp: j, onTab: W, onEnter: K, onSubmit: z, maybeShowAutocomplete: q, hideAutocomplete: Q, moveSelection: X, spellcheckEnabled: $, canUseCommands: J, canOnlyUseTextCommands: ee, disableAutoFocus: et, disableEnterToSubmit: en, allowNewLines: er, 'aria-owns': ei, 'aria-expanded': ea, 'aria-haspopup': es, 'aria-activedescendant': eo, 'aria-controls': el, 'aria-invalid': eu, 'aria-describedby': ec, 'aria-labelledby': ed, 'aria-autocomplete': e_ } = e,
        eE = i.useRef(null),
        ef = i.useRef(null),
        eh = i.useRef(!0),
        ep = i.useRef(!0),
        eI = U || w,
        em = i.useCallback(
            (e, t, n) => {
                var r;
                let { value: i, selection: a } = n,
                    s = m.bN.richValue(e),
                    o = e.selection,
                    l = !1;
                if (void 0 !== i && i !== s) {
                    if (((e.children = i), 'parent' === t && !e.previewMarkdown)) {
                        try {
                            (e.previewMarkdown = !0), (0, v.KH)(e, b.guild_id, b.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, v.KH)(e, b.guild_id, b.id), (a = void 0);
                    }
                    'undo' !== t && void 0 !== i && i !== s && f.T.insertEntry(e, 'other', !1, s, o), (l = !0);
                }
                if ((null != a && !m.Ew.isValid(e, a) && (a = void 0), (l || !m.Ew.isValid(e, o)) && void 0 === a)) {
                    let t = m.bN.end(e, []);
                    a = {
                        anchor: t,
                        focus: t
                    };
                }
                if (null != a && !m.Ew.equals(a, o)) {
                    e.selection = a;
                    let t = f.T.currentEntry(e);
                    null != t && (t.selection = a), (l = !0);
                }
                let c = E.cr(e);
                if (
                    (null != c &&
                        c[0].command.id !== (null === (r = u.Z.getActiveCommand(b.id)) || void 0 === r ? void 0 : r.id) &&
                        f.T.withMergedEntry(e, () => {
                            (0, O.L)(e, b.id, null, !0);
                        }),
                    l)
                ) {
                    if ((!et && m.bN.focus(e), 'parent' === t))
                        try {
                            (ep.current = !1), e.onChange();
                        } finally {
                            ep.current = !0;
                        }
                    else e.onChange();
                }
            },
            [b.id, b.guild_id, et]
        ),
        eT = i.useCallback(() => {
            eh.current = !1;
        }, []),
        eS = i.useCallback(() => {
            eh.current = !0;
        }, []),
        eg = (0, S.Z)({
            channel: b,
            chatInputType: a,
            canUseCommands: J,
            canOnlyUseTextCommands: ee,
            onChangeStart: eT,
            onChangeEnd: eS,
            updateState: em
        }),
        eA = i.useCallback(
            (e, t) => {
                let n = E.tM(eg, e, b.id),
                    r = E.lk(e, b.guild_id, b.id, n, t);
                return {
                    values: n,
                    results: r
                };
            },
            [b.guild_id, b.id, eg]
        ),
        eN = i.useCallback(() => {
            let e;
            let t = J ? u.Z.getActiveCommand(b.id) : null;
            if (null != t && null != t.options) {
                let i = eA(t, !1);
                e = i.values;
                let a = E.cu(eg)
                    .filter((e) => !i.results[e].success)
                    .map((e) => {
                        var n;
                        return (null !== (n = t.options) && void 0 !== n ? n : []).find((t) => t.name === e);
                    });
                for (let e of t.options) e.required && !(e.name in i.values) && (I.Q.insertCommandOption(eg, e), a.push(e));
                if (a.length > 0) {
                    var n, r;
                    let e = a[0];
                    I.Q.selectCommandOption(eg, e.name),
                        _.S.dispatch(y.CkL.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        }),
                        (0, l.yw)(y.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
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
                    (0, p.sk)(m.bN.richValue(eg), {
                        mode: 'raw',
                        ignoreTrailingEmptyNodes: !0
                    }),
                    t,
                    e
                );
        }, [b.id, eg, z, eA, J]);
    (0, g.Z)(t, eg, b, eN), (0, R.Z)(eg, eE, V);
    let { handleKeyDown: eR, handleKeyUp: eO } = (0, A.Z)({
            editor: eg,
            channel: b,
            disableEnterToSubmit: en,
            onKeyDown: Y,
            onKeyUp: j,
            onTab: W,
            onEnter: K,
            allowNewLines: er,
            submit: eN,
            hideAutocomplete: Q,
            moveSelection: X
        }),
        { handlePaste: ev, handleGlobalPaste: eC } = (0, N.Z)(eg, eI, F),
        eL = i.useCallback(
            (e) => {
                null == q || q();
            },
            [q]
        ),
        ey = i.useCallback(
            (e) => {
                e !== ef.current ? ep.current && (null == B || B(null, (0, p.sk)(e, { mode: 'raw' }), e)) : ep.current && q();
            },
            [q, B]
        );
    i.useLayoutEffect(() => {
        eh.current && ((ef.current = n), em(eg, 'parent', { value: n }));
    }, [eg, n, em]),
        i.useEffect(() => {
            let e = () => {
                var e;
                let t = null !== (e = u.Z.getActiveCommand(b.id)) && void 0 !== e ? e : null;
                null !== t && null != t.options && eA(t, !0);
            };
            return c.Z.addChangeListener(e), () => c.Z.removeChangeListener(e);
        }, [b, eg, eA]);
    let eD = i.useCallback((e, t) => (0, T.Z)(e, t), []),
        eb = i.useCallback((e) => (0, C.Z)(eg, e, b.id), [b.id, eg]),
        eM = i.useCallback((e) => (0, L.Z)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.d9, {
                event: y.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eC
            }),
            (0, r.jsx)('div', {
                ref: eE,
                className: s()(M, D.slateContainer),
                children: (0, r.jsx)(h.Z, {
                    id: P,
                    editor: eg,
                    channelId: b.id,
                    guildId: b.guild_id,
                    className: s()(D.slateTextArea, k),
                    placeholder: x,
                    readOnly: eI,
                    spellCheck: $,
                    autoFocus: !et,
                    canFocus: !U,
                    onChange: ey,
                    onFocus: H,
                    onBlur: Z,
                    onClick: eL,
                    onPaste: ev,
                    onKeyDown: eR,
                    onKeyUp: eO,
                    decorateExtra: eD,
                    renderExtraElement: eb,
                    renderExtraLeaf: eM,
                    'aria-owns': ei,
                    'aria-haspopup': es,
                    'aria-expanded': ea,
                    'aria-activedescendant': eo,
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
