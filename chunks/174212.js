n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(367907),
    c = n(998698),
    d = n(981631);
let f = new Map(),
    _ = new Map(),
    h = new Map();
function p(e) {
    if (!_.has(e)) {
        var t;
        _.set(e, {
            commandId: null === (t = c.Z.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
            optionName: c.Z.getActiveOptionName(e),
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
    let { channelId: t, command: n } = e;
    E(t, null == n ? void 0 : n.id);
}
function E(e, t) {
    let n = c.Z.getActiveOptionName(e),
        r = _.get(e);
    return null != r && (t !== r.commandId || n !== r.optionName) && (null != t && t !== r.commandId && (r.optionNameToLastResults.clear(), r.optionNameToNonce.clear(), r.optionNameToLastQuery.clear(), r.optionNameToAutocompleteQueries.clear()), (r.lastErrored = !1), (r.commandId = t), (r.optionName = n), !0);
}
class v extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    getLastErrored(e) {
        return p(e).lastErrored;
    }
    getAutocompleteChoices(e, t, n) {
        var r;
        return null === (r = p(e).optionNameToAutocompleteQueries.get(t)) || void 0 === r ? void 0 : r.get(n);
    }
    getAutocompleteLastChoices(e, t) {
        return p(e).optionNameToLastResults.get(t);
    }
    getLastResponseNonce(e) {
        return p(e).lastResponseNonce;
    }
}
(s = 'ApplicationCommandAutocompleteStore'),
    (a = 'displayName') in (i = v)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new v(l.Z, {
        CONNECTION_OPEN: m,
        LOGOUT: m,
        CHANNEL_SELECT: m,
        APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function (e) {
            var t;
            let { nonce: n, channelId: r, query: i, name: a } = e,
                s = p(r);
            if (s.optionNameToLastQuery.get(a) === i) return !1;
            s.optionNameToLastQuery.set(a, i);
            let o = null === (t = s.optionNameToAutocompleteQueries.get(a)) || void 0 === t ? void 0 : t.get(i);
            if (null != o) return (s.lastErrored = !1), s.optionNameToLastResults.set(a, o), !0;
            let l = s.optionNameToNonce.get(a);
            if (
                (null != l && f.delete(l),
                f.set(n, {
                    channelId: r,
                    query: i,
                    name: a
                }),
                h.set(n, new Date()),
                s.optionNameToNonce.set(a, n),
                s.lastErrored)
            )
                return (s.lastErrored = !1), !0;
        },
        APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function (e) {
            var t, n;
            let { choices: r, nonce: i } = e,
                a = f.get(i);
            if (null == a) return !1;
            f.delete(i);
            let s =
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
                o = h.get(i),
                l = null != o ? new Date().getTime() - o.getTime() : 0;
            (0, u.yw)(d.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                duration_ms: l,
                error: !1,
                num_options: s.length
            }),
                h.delete(i);
            let c = p(a.channelId);
            return null == c.optionNameToAutocompleteQueries.get(a.name) && c.optionNameToAutocompleteQueries.set(a.name, new Map()), null === (t = c.optionNameToAutocompleteQueries.get(a.name)) || void 0 === t || t.set(a.query, s), c.optionNameToLastQuery.get(a.name) === a.query && ((c.lastErrored = !1), c.optionNameToLastResults.set(a.name, s)), (c.lastResponseNonce = i), !0;
        },
        INTERACTION_FAILURE: function (e) {
            let { nonce: t } = e;
            if (null == t) return !1;
            let n = f.get(t);
            if (null == n) return !1;
            f.delete(t);
            let r = h.get(t),
                i = null != r ? new Date().getTime() - r.getTime() : 0;
            return (
                (0, u.yw)(d.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                    duration_ms: i,
                    error: !0
                }),
                h.delete(t),
                (p(n.channelId).lastErrored = !0),
                !0
            );
        },
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: g,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: g,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
            let { channelId: t, command: n } = e;
            E(t, null == n ? void 0 : n.id);
        }
    }));
