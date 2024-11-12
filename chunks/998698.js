n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(433355),
    c = n(944486),
    d = n(581364);
let f = {};
function _() {
    return (f = {}), !0;
}
function p(e) {
    return (
        !(e in f) &&
            (f[e] = {
                activeCommand: null,
                activeCommandSection: null,
                activeOptionName: null,
                preferredCommandId: null,
                optionStates: {},
                initialValues: {},
                commandOrigin: null
            }),
        f[e]
    );
}
function h(e) {
    var t;
    let { channelId: n, command: r, section: i, initialValues: a, location: s, triggerSection: o, queryLength: l, sectionName: u, query: c, searchResultsPosition: f, source: _, commandOrigin: h } = e,
        m = p(n);
    if ((null == r ? void 0 : r.id) === (null === (t = m.activeCommand) || void 0 === t ? void 0 : t.id)) return !1;
    (m.activeCommand = r), (m.activeCommandSection = i), (m.activeOptionName = null), (m.preferredCommandId = null), (m.initialValues = null != a ? a : {}), (m.commandOrigin = null != h ? h : null), (m.source = _);
    let g = {};
    return (
        (null == r ? void 0 : r.options) != null &&
            r.options.forEach((e) => {
                g[e.name] = {
                    isActive: !1,
                    hasValue: !1,
                    lastValidationResult: null,
                    optionValue: null
                };
            }),
        (m.optionStates = g),
        null != r &&
            (0, d.qJ)({
                command: r,
                location: s,
                triggerSection: o,
                queryLength: l,
                sectionName: u,
                query: c,
                searchResultsPosition: f,
                source: _
            }),
        !0
    );
}
function m(e) {
    var t, n;
    let { channelId: r, commandId: i } = e,
        a = p(r);
    return i !== a.preferredCommandId && (null !== a.preferredCommandId || i !== (null !== (n = null === (t = a.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && ((a.activeCommand = null), (a.activeOptionName = null), (a.preferredCommandId = i), (a.optionStates = {}), !0);
}
function g(e) {
    let { channelId: t, changedOptionStates: n } = e,
        r = p(t),
        i = { ...r.optionStates };
    for (let [e, t] of Object.entries(n)) {
        var a, s, o;
        if (!(e in r.optionStates)) continue;
        if (!(void 0 !== t.hasValue ? t.hasValue : i[e].hasValue)) {
            (i[e] = {
                hasValue: !1,
                isActive: !1,
                lastValidationResult: null,
                optionValue: null,
                location: void 0,
                length: void 0
            }),
                r.activeOptionName === e && (r.activeOptionName = null);
            continue;
        }
        let n = i[e];
        (i[e] = {
            hasValue: !0,
            isActive: void 0 !== t.isActive ? t.isActive : n.isActive,
            lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
            optionValue: null !== (a = t.optionValue) && void 0 !== a ? a : n.optionValue,
            location: null !== (s = t.location) && void 0 !== s ? s : n.location,
            length: null !== (o = t.length) && void 0 !== o ? o : n.length
        }),
            void 0 !== t.isActive && (t.isActive ? (null != r.activeOptionName && r.activeOptionName !== e && ((i[r.activeOptionName] = { ...i[r.activeOptionName] }), (i[r.activeOptionName].isActive = !1)), (r.activeOptionName = e)) : e === r.activeOptionName && (r.activeOptionName = null));
    }
    return (r.optionStates = i), !0;
}
class E extends (r = o.ZP.Store) {
    initialize() {
        u.ZP.addChangeListener(() => {
            let e = c.Z.getChannelId();
            if (null == e) return (f = {}), !0;
            let t = u.ZP.getCurrentSidebarChannelId(e);
            if (null != t && t in f) return !1;
            f = e in f ? { [e]: f[e] } : {};
        });
    }
    getActiveCommand(e) {
        return p(e).activeCommand;
    }
    getActiveCommandSection(e) {
        return p(e).activeCommandSection;
    }
    getActiveOptionName(e) {
        return p(e).activeOptionName;
    }
    getActiveOption(e) {
        var t, n, r;
        let i = p(e);
        return null !== (r = null === (n = i.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find((e) => e.name === i.activeOptionName)) && void 0 !== r ? r : null;
    }
    getPreferredCommandId(e) {
        return p(e).preferredCommandId;
    }
    getOptionStates(e) {
        return p(e).optionStates;
    }
    getOptionState(e, t) {
        return p(e).optionStates[t];
    }
    getCommandOrigin(e) {
        return p(e).commandOrigin;
    }
    getSource(e) {
        return p(e).source;
    }
    getOption(e, t) {
        var n, r;
        return null === (r = p(e).activeCommand) || void 0 === r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.find((e) => e.name === t);
    }
    getState(e) {
        return { ...p(e) };
    }
}
(s = 'ApplicationCommandStore'),
    (a = 'displayName') in (i = E)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
let v = new E(l.Z, {
    CONNECTION_OPEN: _,
    CHANNEL_SELECT: _,
    LOGOUT: _,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: h,
    APPLICATION_COMMAND_SET_PREFERRED_COMMAND: m,
    APPLICATION_COMMAND_UPDATE_OPTIONS: g,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
        let { channelId: t, preferredCommandId: n, command: r, section: i, location: a, changedOptionStates: s } = e,
            o = h({
                type: 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND',
                channelId: t,
                command: r,
                section: i,
                location: a
            }),
            l = m({
                type: 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND',
                channelId: t,
                commandId: n
            }),
            u = g({
                type: 'APPLICATION_COMMAND_UPDATE_OPTIONS',
                channelId: t,
                changedOptionStates: s
            });
        return o || l || u;
    }
});
t.Z = v;
