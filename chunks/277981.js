var r = n(735250),
    i = n(470079),
    a = n(392711),
    o = n.n(a),
    s = n(481060),
    l = n(570140),
    u = n(85235),
    c = n(367907),
    d = n(998698),
    _ = n(895924),
    E = n(588468),
    f = n(600164),
    h = n(718745),
    p = n(590921),
    m = n(665692),
    I = n(981631),
    T = n(689938),
    g = n(243450);
let S = {
    results: {
        command: null,
        integrations: [],
        isLoading: !1
    }
};
function A(e, t, n) {
    var r, i;
    let a;
    return (
        n.commands === p.L8.OLD_BUILT_INS ? ((a = t.split(' ')[0].substring(m.GI.length)), (t = t.substring((null !== (r = a.length) && void 0 !== r ? r : 0) + m.GI.length))) : (a = null === (i = d.Z.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.untranslatedName),
        {
            command: a,
            query: t.trim()
        }
    );
}
let v = {
    stores: [d.Z, h.Z],
    matches(e, t, n, r, i) {
        var a;
        return i.commands !== p.L8.DISABLED && (i.commands === p.L8.OLD_BUILT_INS ? n.startsWith(m.GI + 'gif') || n.startsWith(m.GI + 'tenor') : (null === (a = d.Z.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.integrationType) === I.q9n.GIF && d.Z.getOptionStates(e.id).query.hasValue);
    },
    queryResults(e, t, n, r, i) {
        let { command: a, query: s } = A(e, n, r);
        if (null == a) return S;
        let l = o().findKey(I.nkL, (e) => e.command === a);
        i && null != l && s.length > 0 && u.Z.search(l, s);
        let c = h.Z.getResults(l, s);
        return null == c
            ? S
            : {
                  results: {
                      command: a,
                      integrations: c.results,
                      isLoading: c.loading
                  }
              };
    },
    renderResults(e) {
        let {
                results: { integrations: t, isLoading: n },
                selectedIndex: a,
                channel: o,
                query: l,
                options: u,
                onHover: c,
                onClick: _
            } = e,
            { command: h, query: m } = A(o, l, u);
        if (null == h || 0 === m.length) return null;
        if (n)
            return (0, r.jsx)(s.Spinner, {
                className: g.spinner,
                type: s.Spinner.Type.SPINNING_CIRCLE
            });
        if (null != t) {
            var S, v;
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === I.q9n.GIF) {
                        var i, o, s;
                        return (
                            (e = !0),
                            (0, r.jsx)(
                                E.ZP.GIFIntegration,
                                {
                                    className: g.horizontalAutocomplete,
                                    onClick: _,
                                    onHover: c,
                                    selected: a === n,
                                    index: n,
                                    width: null !== (i = t.meta.width) && void 0 !== i ? i : 0,
                                    height: null !== (o = t.meta.height) && void 0 !== o ? o : 0,
                                    src: null !== (s = t.meta.src) && void 0 !== s ? s : '',
                                    url: t.meta.url
                                },
                                ''.concat(t.meta.url).concat(t.meta.src)
                            )
                        );
                    }
                }),
                s = u.commands === p.L8.OLD_BUILT_INS ? h : null !== (v = null === (S = d.Z.getActiveCommand(o.id)) || void 0 === S ? void 0 : S.integrationTitle) && void 0 !== v ? v : h,
                l =
                    m.length > 0 && null != s
                        ? T.Z.Messages.CONTENT_MATCHING.format({
                              query: m,
                              command: s
                          })
                        : null != s
                          ? s
                          : h;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(E.ZP.Title, { title: l }),
                        e
                            ? (0, r.jsx)(f.Z, {
                                  className: g.horizontalAutocompletes,
                                  children: n
                              })
                            : n
                    ]
                },
                'gifs'
            );
        }
    },
    onSelect(e) {
        let {
            results: { command: t, integrations: n },
            index: r,
            type: i,
            options: a,
            channel: o,
            guild: s
        } = e;
        if (null == t) return { type: null };
        let u = n[r];
        if (
            (i === p.QB.INSERT ? a.replaceText(N(u)) : a.sendMessage(N(u)),
            c.ZP.trackWithMetadata(I.rMx.SEARCH_RESULT_SELECTED, {
                search_type: I.aib.GIF,
                index_num: r,
                source_object: '/'.concat(t)
            }),
            a.commands !== p.L8.OLD_BUILT_INS)
        ) {
            let e = d.Z.getActiveCommand(o.id);
            (null == e ? void 0 : e.inputType) === _.iw.BUILT_IN_INTEGRATION &&
                (l.Z.dispatch({
                    type: 'APPLICATION_COMMAND_USED',
                    context: {
                        channel: o,
                        guild: s
                    },
                    command: e,
                    commandOrigin: _.bB.CHAT
                }),
                c.ZP.trackWithMetadata(I.rMx.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: d.Z.getSource(o.id)
                }));
        }
        return { type: p.z2.GIF };
    }
};
function N(e) {
    return e.meta.url;
}
t.Z = v;
