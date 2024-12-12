var i,
    a = r(47120);
var s = r(442837),
    o = r(570140),
    l = r(367907),
    u = r(998698),
    c = r(981631);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = new Map(),
    _ = new Map(),
    h = new Map();
function p(e) {
    if (!_.has(e)) {
        var n;
        _.set(e, {
            commandId: null === (n = u.Z.getActiveCommand(e)) || void 0 === n ? void 0 : n.id,
            optionName: u.Z.getActiveOptionName(e),
            optionNameToAutocompleteQueries: new Map(),
            optionNameToLastResults: new Map(),
            optionNameToNonce: new Map(),
            optionNameToLastQuery: new Map(),
            lastErrored: !1,
            lastResponseNonce: void 0
        });
    }
    return _.get(e);
}
function m() {
    return f.clear(), _.clear(), !0;
}
function g(e) {
    var n;
    let { nonce: r, channelId: i, query: a, name: s } = e,
        o = p(i);
    if (o.optionNameToLastQuery.get(s) === a) return !1;
    o.optionNameToLastQuery.set(s, a);
    let l = null === (n = o.optionNameToAutocompleteQueries.get(s)) || void 0 === n ? void 0 : n.get(a);
    if (null != l) return (o.lastErrored = !1), o.optionNameToLastResults.set(s, l), !0;
    let u = o.optionNameToNonce.get(s);
    if (
        (null != u && f.delete(u),
        f.set(r, {
            channelId: i,
            query: a,
            name: s
        }),
        h.set(r, new Date()),
        o.optionNameToNonce.set(s, r),
        o.lastErrored)
    )
        return (o.lastErrored = !1), !0;
}
function E(e) {
    var n, r;
    let { choices: i, nonce: a } = e,
        s = f.get(a);
    if (null == s) return !1;
    f.delete(a);
    let o =
            null !==
                (r =
                    null == i
                        ? void 0
                        : i.map((e) => {
                              var n;
                              return {
                                  ...e,
                                  displayName: null !== (n = e.name_localized) && void 0 !== n ? n : e.name
                              };
                          })) && void 0 !== r
                ? r
                : [],
        u = h.get(a),
        d = null != u ? new Date().getTime() - u.getTime() : 0;
    (0, l.yw)(c.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
        duration_ms: d,
        error: !1,
        num_options: o.length
    }),
        h.delete(a);
    let _ = p(s.channelId);
    return null == _.optionNameToAutocompleteQueries.get(s.name) && _.optionNameToAutocompleteQueries.set(s.name, new Map()), null === (n = _.optionNameToAutocompleteQueries.get(s.name)) || void 0 === n || n.set(s.query, o), _.optionNameToLastQuery.get(s.name) === s.query && ((_.lastErrored = !1), _.optionNameToLastResults.set(s.name, o)), (_.lastResponseNonce = a), !0;
}
function v(e) {
    let { nonce: n } = e;
    if (null == n) return !1;
    let r = f.get(n);
    if (null == r) return !1;
    f.delete(n);
    let i = h.get(n),
        a = null != i ? new Date().getTime() - i.getTime() : 0;
    return (
        (0, l.yw)(c.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
            duration_ms: a,
            error: !0
        }),
        h.delete(n),
        (p(r.channelId).lastErrored = !0),
        !0
    );
}
function I(e) {
    let { channelId: n, command: r } = e;
    b(n, null == r ? void 0 : r.id);
}
function T(e) {
    let { channelId: n, command: r } = e;
    b(n, null == r ? void 0 : r.id);
}
function b(e, n) {
    let r = u.Z.getActiveOptionName(e),
        i = _.get(e);
    return null != i && (n !== i.commandId || r !== i.optionName) && (null != n && n !== i.commandId && (i.optionNameToLastResults.clear(), i.optionNameToNonce.clear(), i.optionNameToLastQuery.clear(), i.optionNameToAutocompleteQueries.clear()), (i.lastErrored = !1), (i.commandId = n), (i.optionName = r), !0);
}
class y extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getLastErrored(e) {
        return p(e).lastErrored;
    }
    getAutocompleteChoices(e, n, r) {
        var i;
        return null === (i = p(e).optionNameToAutocompleteQueries.get(n)) || void 0 === i ? void 0 : i.get(r);
    }
    getAutocompleteLastChoices(e, n) {
        return p(e).optionNameToLastResults.get(n);
    }
    getLastResponseNonce(e) {
        return p(e).lastResponseNonce;
    }
}
d(y, 'displayName', 'ApplicationCommandAutocompleteStore'),
    (n.Z = new y(o.Z, {
        CONNECTION_OPEN: m,
        LOGOUT: m,
        CHANNEL_SELECT: m,
        APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: g,
        APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: E,
        INTERACTION_FAILURE: v,
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: I,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: I,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: T
    }));
