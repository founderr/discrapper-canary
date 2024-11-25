var r = n(200651);
n(192379);
var i = n(392711),
    a = n.n(i),
    s = n(788911),
    o = n(911969),
    l = n(174212),
    u = n(998698),
    c = n(667204),
    d = n(588468),
    f = n(483360),
    _ = n(877565),
    p = n(590921),
    h = n(689079),
    m = n(388032),
    g = n(49508),
    E = n(239840);
let v = { results: { choices: [] } },
    I = {
        results: {
            choices: [],
            isLoading: !0
        }
    },
    b = Array.from({ length: 5 }, () => ({
        name: '',
        displayName: '',
        value: ''
    })),
    T = {
        results: {
            choices: [],
            isError: !0
        }
    },
    S = a().debounce(c.Z, h.Fu, {
        leading: !0,
        trailing: !0
    }),
    y = {
        stores: [u.Z, l.Z],
        showEmpty: !0,
        matches(e, t, n, r, i) {
            let a = u.Z.getActiveOption(e.id);
            return i.commands !== p.L8.DISABLED && null != a && (a.type === o.jw.BOOLEAN || !!(null == a ? void 0 : a.autocomplete) || ((null == a ? void 0 : a.choices) != null && a.choices.length > 0));
        },
        queryResults(e, t, n, r, i) {
            var a;
            let s = u.Z.getActiveOption(e.id);
            if (null == s) return v;
            if (s.autocomplete) {
                if (i) {
                    let i = u.Z.getActiveCommand(e.id);
                    S({
                        command: i,
                        optionValues: r.getCommandOptionValues(),
                        context: {
                            channel: e,
                            guild: t,
                            autocomplete: {
                                name: s.name,
                                query: n
                            }
                        }
                    });
                }
                if (l.Z.getLastErrored(e.id)) return T;
                let a = l.Z.getAutocompleteChoices(e.id, s.name, n);
                return null == a ? I : { results: { choices: a } };
            }
            return {
                results: f.ZP.queryChoiceResults({
                    query: n,
                    choices: s.type === o.jw.BOOLEAN ? h.ak : null !== (a = s.choices) && void 0 !== a ? a : []
                })
            };
        },
        renderResults(e) {
            let {
                results: { choices: t, isLoading: n, isError: i },
                selectedIndex: a,
                query: o,
                onHover: l,
                onClick: u
            } = e;
            return i
                ? (0, r.jsx)(s.Z, {
                      message: m.intl.string(m.t.rTAbPj),
                      noResultsImageURL: E,
                      className: g.noAutocompleteResults
                  })
                : 0 !== t.length || n
                  ? (0, _.HI)({
                        query: o,
                        selectedIndex: a,
                        autocompletes: n ? b : t,
                        onHover: l,
                        onClick: u,
                        titleWithQuery: m.t.pg0anJ,
                        titleWithoutQuery: m.intl.string(m.t['+1H47u']),
                        Component: n ? d.ZP.Loading : d.ZP.Generic,
                        getProps: (e, t) => ({
                            key: t.toString(),
                            text: e.displayName
                        }),
                        getQuery: (e) => e,
                        key: 'choice'
                    })
                  : (0, r.jsx)(s.Z, {
                        message: m.intl.string(m.t['41014u']),
                        noResultsImageURL: E,
                        className: g.noAutocompleteResults
                    });
        },
        onSelect(e) {
            let {
                    results: { choices: t },
                    index: n,
                    options: r
                } = e,
                i = t[n];
            return (
                r.insertText(
                    (function (e) {
                        return e.displayName;
                    })(i)
                ),
                { type: p.z2.CHOICE }
            );
        }
    };
t.Z = y;
