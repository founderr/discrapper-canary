var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(367907),
    l = n(998698),
    u = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = new Map(),
    _ = new Map(),
    E = new Map();
function f(e) {
    if (!_.has(e)) {
        var t;
        _.set(e, {
            commandId: null === (t = l.Z.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
            optionName: l.Z.getActiveOptionName(e),
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
function h() {
    return d.clear(), _.clear(), !0;
}
function p(e) {
    var t;
    let { nonce: n, channelId: r, query: i, name: a } = e,
        o = f(r);
    if (o.optionNameToLastQuery.get(a) === i) return !1;
    o.optionNameToLastQuery.set(a, i);
    let s = null === (t = o.optionNameToAutocompleteQueries.get(a)) || void 0 === t ? void 0 : t.get(i);
    if (null != s) return (o.lastErrored = !1), o.optionNameToLastResults.set(a, s), !0;
    let l = o.optionNameToNonce.get(a);
    if (
        (null != l && d.delete(l),
        d.set(n, {
            channelId: r,
            query: i,
            name: a
        }),
        E.set(n, new Date()),
        o.optionNameToNonce.set(a, n),
        o.lastErrored)
    )
        return (o.lastErrored = !1), !0;
}
function m(e) {
    var t, n;
    let { choices: r, nonce: i } = e,
        a = d.get(i);
    if (null == a) return !1;
    d.delete(i);
    let o =
            null !==
                (n =
                    null == r
                        ? void 0
                        : r.map((e) => {
                              var t;
                              return {
                                  ...e,
                                  displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                              };
                          })) && void 0 !== n
                ? n
                : [],
        l = E.get(i),
        c = null != l ? new Date().getTime() - l.getTime() : 0;
    (0, s.yw)(u.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
        duration_ms: c,
        error: !1,
        num_options: o.length
    }),
        E.delete(i);
    let _ = f(a.channelId);
    return null == _.optionNameToAutocompleteQueries.get(a.name) && _.optionNameToAutocompleteQueries.set(a.name, new Map()), null === (t = _.optionNameToAutocompleteQueries.get(a.name)) || void 0 === t || t.set(a.query, o), _.optionNameToLastQuery.get(a.name) === a.query && ((_.lastErrored = !1), _.optionNameToLastResults.set(a.name, o)), (_.lastResponseNonce = i), !0;
}
function I(e) {
    let { nonce: t } = e;
    if (null == t) return !1;
    let n = d.get(t);
    if (null == n) return !1;
    d.delete(t);
    let r = E.get(t),
        i = null != r ? new Date().getTime() - r.getTime() : 0;
    return (
        (0, s.yw)(u.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
            duration_ms: i,
            error: !0
        }),
        E.delete(t),
        (f(n.channelId).lastErrored = !0),
        !0
    );
}
function T(e) {
    let { channelId: t, command: n } = e;
    S(t, null == n ? void 0 : n.id);
}
function g(e) {
    let { channelId: t, command: n } = e;
    S(t, null == n ? void 0 : n.id);
}
function S(e, t) {
    let n = l.Z.getActiveOptionName(e),
        r = _.get(e);
    return null != r && (t !== r.commandId || n !== r.optionName) && (null != t && t !== r.commandId && (r.optionNameToLastResults.clear(), r.optionNameToNonce.clear(), r.optionNameToLastQuery.clear(), r.optionNameToAutocompleteQueries.clear()), (r.lastErrored = !1), (r.commandId = t), (r.optionName = n), !0);
}
class A extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(l.Z);
    }
    getLastErrored(e) {
        return f(e).lastErrored;
    }
    getAutocompleteChoices(e, t, n) {
        var r;
        return null === (r = f(e).optionNameToAutocompleteQueries.get(t)) || void 0 === r ? void 0 : r.get(n);
    }
    getAutocompleteLastChoices(e, t) {
        return f(e).optionNameToLastResults.get(t);
    }
    getLastResponseNonce(e) {
        return f(e).lastResponseNonce;
    }
}
c(A, 'displayName', 'ApplicationCommandAutocompleteStore'),
    (t.Z = new A(o.Z, {
        CONNECTION_OPEN: h,
        LOGOUT: h,
        CHANNEL_SELECT: h,
        APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: p,
        APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: m,
        INTERACTION_FAILURE: I,
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: T,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: T,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: g
    }));
