var i = r(653041);
var a = r(200651);
r(192379);
var s = r(998698),
    o = r(588468),
    l = r(877565),
    u = r(590921),
    c = r(388032);
let d = { results: { commandOptions: [] } },
    f = {
        stores: [s.Z],
        focusMode: u.QZ.AUTO_WHEN_FILTERED,
        matches: (e, n, r, i, a) => !(i || null == s.Z.getActiveCommand(e.id) || null != s.Z.getActiveOption(e.id)),
        queryResults(e, n, r, i, a) {
            let o = s.Z.getActiveCommand(e.id);
            if ((null == o ? void 0 : o.options) == null) return d;
            let l = s.Z.getOptionStates(e.id),
                u = o.options.filter((e) => {
                    var n;
                    return e.displayName.startsWith(r) && !(null === (n = l[e.name]) || void 0 === n ? void 0 : n.hasValue);
                });
            return 0 === u.length ? d : { results: { commandOptions: u } };
        },
        renderResults(e) {
            let {
                    results: { commandOptions: n },
                    selectedIndex: r,
                    query: i,
                    onHover: s,
                    onClick: u
                } = e,
                d = [],
                f = [];
            n.forEach((e) => {
                (e.required ? d : f).push(e);
            });
            let _ =
                    d.length > 0
                        ? (0, l.HI)({
                              query: i,
                              selectedIndex: r,
                              autocompletes: d,
                              onHover: s,
                              onClick: u,
                              titleWithQuery: c.t['iO/jnJ'],
                              titleWithoutQuery: c.intl.string(c.t['7II2Gx']),
                              Component: o.ZP.Generic,
                              getProps: (e, n) => ({
                                  key: n.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription
                              }),
                              getQuery: (e) => e,
                              key: 'required-options'
                          })
                        : null,
                h =
                    f.length > 0
                        ? (0, l.HI)({
                              query: i,
                              selectedIndex: r,
                              autocompletes: f,
                              onHover: s,
                              onClick: u,
                              titleWithQuery: c.t.pg0anJ,
                              titleWithoutQuery: d.length > 0 ? c.intl.string(c.t.TpDXm5) : c.intl.string(c.t['+1H47u']),
                              Component: o.ZP.Generic,
                              getProps: (e, n) => ({
                                  key: n.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription
                              }),
                              getQuery: (e) => e,
                              key: 'optional-options',
                              indexOffset: d.length
                          })
                        : null;
            return (0, a.jsxs)(a.Fragment, {
                children: [_, h]
            });
        },
        onSelect(e) {
            let {
                    results: { commandOptions: n },
                    index: r,
                    options: i
                } = e,
                a = n[r];
            return i.insertText(_(a)), { type: u.z2.COMMAND_OPTION };
        }
    };
function _(e) {
    return ''.concat(e.displayName, ':');
}
n.Z = f;
