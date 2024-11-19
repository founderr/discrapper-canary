var r = n(200651),
    i = n(192379),
    a = n(392711),
    s = n.n(a),
    o = n(481060),
    l = n(570140),
    u = n(85235),
    c = n(367907),
    d = n(998698),
    f = n(895924),
    _ = n(588468),
    p = n(600164),
    h = n(718745),
    m = n(590921),
    g = n(665692),
    E = n(981631),
    v = n(388032),
    b = n(411832);
let I = {
    results: {
        command: null,
        integrations: [],
        isLoading: !1
    }
};
function T(e, t, n) {
    var r, i;
    let a;
    return (
        n.commands === m.L8.OLD_BUILT_INS ? ((a = t.split(' ')[0].substring(g.GI.length)), (t = t.substring((null !== (r = a.length) && void 0 !== r ? r : 0) + g.GI.length))) : (a = null === (i = d.Z.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.untranslatedName),
        {
            command: a,
            query: t.trim()
        }
    );
}
let S = {
    stores: [d.Z, h.Z],
    matches(e, t, n, r, i) {
        var a;
        return i.commands !== m.L8.DISABLED && (i.commands === m.L8.OLD_BUILT_INS ? n.startsWith(g.GI + 'gif') || n.startsWith(g.GI + 'tenor') : (null === (a = d.Z.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.integrationType) === E.q9n.GIF && d.Z.getOptionStates(e.id).query.hasValue);
    },
    queryResults(e, t, n, r, i) {
        let { command: a, query: o } = T(e, n, r);
        if (null == a) return I;
        let l = s().findKey(E.nkL, (e) => e.command === a);
        i && null != l && o.length > 0 && u.Z.search(l, o);
        let c = h.Z.getResults(l, o);
        return null == c
            ? I
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
                channel: s,
                query: l,
                options: u,
                onHover: c,
                onClick: f
            } = e,
            { command: h, query: g } = T(s, l, u);
        if (null == h || 0 === g.length) return null;
        if (n)
            return (0, r.jsx)(o.Spinner, {
                className: b.spinner,
                type: o.Spinner.Type.SPINNING_CIRCLE
            });
        if (null != t) {
            var I, S;
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === E.q9n.GIF) {
                        var i, s, o;
                        return (
                            (e = !0),
                            (0, r.jsx)(
                                _.ZP.GIFIntegration,
                                {
                                    className: b.horizontalAutocomplete,
                                    onClick: f,
                                    onHover: c,
                                    selected: a === n,
                                    index: n,
                                    width: null !== (i = t.meta.width) && void 0 !== i ? i : 0,
                                    height: null !== (s = t.meta.height) && void 0 !== s ? s : 0,
                                    src: null !== (o = t.meta.src) && void 0 !== o ? o : '',
                                    url: t.meta.url
                                },
                                ''.concat(t.meta.url).concat(t.meta.src)
                            )
                        );
                    }
                }),
                o = u.commands === m.L8.OLD_BUILT_INS ? h : null !== (S = null === (I = d.Z.getActiveCommand(s.id)) || void 0 === I ? void 0 : I.integrationTitle) && void 0 !== S ? S : h,
                l =
                    g.length > 0 && null != o
                        ? v.intl.format(v.t['3njXz8'], {
                              query: g,
                              command: o
                          })
                        : null != o
                          ? o
                          : h;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(_.ZP.Title, { title: l }),
                        e
                            ? (0, r.jsx)(p.Z, {
                                  className: b.horizontalAutocompletes,
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
            channel: s,
            guild: o
        } = e;
        if (null == t) return { type: null };
        let u = n[r];
        if (
            (i === m.QB.INSERT
                ? a.replaceText(
                      (function (e) {
                          return e.meta.url;
                      })(u)
                  )
                : a.sendMessage(
                      (function (e) {
                          return e.meta.url;
                      })(u)
                  ),
            c.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_SELECTED, {
                search_type: E.aib.GIF,
                index_num: r,
                source_object: '/'.concat(t)
            }),
            a.commands !== m.L8.OLD_BUILT_INS)
        ) {
            let e = d.Z.getActiveCommand(s.id);
            (null == e ? void 0 : e.inputType) === f.iw.BUILT_IN_INTEGRATION &&
                (l.Z.dispatch({
                    type: 'APPLICATION_COMMAND_USED',
                    context: {
                        channel: s,
                        guild: o
                    },
                    command: e,
                    commandOrigin: f.bB.CHAT
                }),
                c.ZP.trackWithMetadata(E.rMx.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: d.Z.getSource(s.id)
                }));
        }
        return { type: m.z2.GIF };
    }
};
function y(e) {
    return e.meta.url;
}
t.Z = S;
