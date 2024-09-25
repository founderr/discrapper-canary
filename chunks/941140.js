var r = n(653041);
var i = n(735250);
n(470079);
var a = n(998698),
    o = n(588468),
    s = n(877565),
    l = n(590921),
    u = n(689938);
let c = { results: { commandOptions: [] } },
    d = {
        stores: [a.Z],
        focusMode: l.QZ.AUTO_WHEN_FILTERED,
        matches: (e, t, n, r, i) => !(r || null == a.Z.getActiveCommand(e.id) || null != a.Z.getActiveOption(e.id)),
        queryResults(e, t, n, r, i) {
            let o = a.Z.getActiveCommand(e.id);
            if ((null == o ? void 0 : o.options) == null) return c;
            let s = a.Z.getOptionStates(e.id),
                l = o.options.filter((e) => {
                    var t;
                    return e.displayName.startsWith(n) && !(null === (t = s[e.name]) || void 0 === t ? void 0 : t.hasValue);
                });
            return 0 === l.length ? c : { results: { commandOptions: l } };
        },
        renderResults(e) {
            let {
                    results: { commandOptions: t },
                    selectedIndex: n,
                    query: r,
                    onHover: a,
                    onClick: l
                } = e,
                c = [],
                d = [];
            t.forEach((e) => {
                (e.required ? c : d).push(e);
            });
            let _ =
                    c.length > 0
                        ? (0, s.HI)({
                              query: r,
                              selectedIndex: n,
                              autocompletes: c,
                              onHover: a,
                              onClick: l,
                              titleWithQuery: u.Z.Messages.REQUIRED_OPTIONS_MATCHING,
                              titleWithoutQuery: u.Z.Messages.REQUIRED_OPTIONS,
                              Component: o.ZP.Generic,
                              getProps: (e, t) => ({
                                  key: t.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription
                              }),
                              getQuery: (e) => e,
                              key: 'required-options'
                          })
                        : null,
                E =
                    d.length > 0
                        ? (0, s.HI)({
                              query: r,
                              selectedIndex: n,
                              autocompletes: d,
                              onHover: a,
                              onClick: l,
                              titleWithQuery: u.Z.Messages.OPTIONS_MATCHING,
                              titleWithoutQuery: c.length > 0 ? u.Z.Messages.OTHER_OPTIONS : u.Z.Messages.OPTIONS,
                              Component: o.ZP.Generic,
                              getProps: (e, t) => ({
                                  key: t.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription
                              }),
                              getQuery: (e) => e,
                              key: 'optional-options',
                              indexOffset: c.length
                          })
                        : null;
            return (0, i.jsxs)(i.Fragment, {
                children: [_, E]
            });
        },
        onSelect(e) {
            let {
                    results: { commandOptions: t },
                    index: n,
                    options: r
                } = e,
                i = t[n];
            return r.insertText(_(i)), { type: l.z2.COMMAND_OPTION };
        }
    };
function _(e) {
    return ''.concat(e.displayName, ':');
}
t.Z = d;
