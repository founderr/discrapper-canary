var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(433355),
    l = n(944486),
    u = n(581364);
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
let d = {};
function _() {
    return (d = {}), !0;
}
function E(e) {
    return (
        !(e in d) &&
            (d[e] = {
                activeCommand: null,
                activeCommandSection: null,
                activeOptionName: null,
                preferredCommandId: null,
                optionStates: {},
                initialValues: {},
                commandOrigin: null
            }),
        d[e]
    );
}
function f(e) {
    var t;
    let { channelId: n, command: r, section: i, initialValues: a, location: o, triggerSection: s, queryLength: l, sectionName: c, query: d, searchResultsPosition: _, source: f, commandOrigin: h } = e,
        p = E(n);
    if ((null == r ? void 0 : r.id) === (null === (t = p.activeCommand) || void 0 === t ? void 0 : t.id)) return !1;
    (p.activeCommand = r), (p.activeCommandSection = i), (p.activeOptionName = null), (p.preferredCommandId = null), (p.initialValues = null != a ? a : {}), (p.commandOrigin = null != h ? h : null), (p.source = f);
    let m = {};
    return (
        (null == r ? void 0 : r.options) != null &&
            r.options.forEach((e) => {
                m[e.name] = {
                    isActive: !1,
                    hasValue: !1,
                    lastValidationResult: null,
                    optionValue: null
                };
            }),
        (p.optionStates = m),
        null != r &&
            (0, u.qJ)({
                command: r,
                location: o,
                triggerSection: s,
                queryLength: l,
                sectionName: c,
                query: d,
                searchResultsPosition: _,
                source: f
            }),
        !0
    );
}
function h(e) {
    var t, n;
    let { channelId: r, commandId: i } = e,
        a = E(r);
    return i !== a.preferredCommandId && (null !== a.preferredCommandId || i !== (null !== (n = null === (t = a.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && ((a.activeCommand = null), (a.activeOptionName = null), (a.preferredCommandId = i), (a.optionStates = {}), !0);
}
function p(e) {
    let { channelId: t, changedOptionStates: n } = e,
        r = E(t),
        i = { ...r.optionStates };
    for (let [e, t] of Object.entries(n)) {
        var a, o, s;
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
            location: null !== (o = t.location) && void 0 !== o ? o : n.location,
            length: null !== (s = t.length) && void 0 !== s ? s : n.length
        }),
            void 0 !== t.isActive && (t.isActive ? (null != r.activeOptionName && r.activeOptionName !== e && ((i[r.activeOptionName] = { ...i[r.activeOptionName] }), (i[r.activeOptionName].isActive = !1)), (r.activeOptionName = e)) : e === r.activeOptionName && (r.activeOptionName = null));
    }
    return (r.optionStates = i), !0;
}
function m(e) {
    let { channelId: t, preferredCommandId: n, command: r, section: i, location: a, changedOptionStates: o } = e,
        s = f({
            type: 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND',
            channelId: t,
            command: r,
            section: i,
            location: a
        }),
        l = h({
            type: 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND',
            channelId: t,
            commandId: n
        }),
        u = p({
            type: 'APPLICATION_COMMAND_UPDATE_OPTIONS',
            channelId: t,
            changedOptionStates: o
        });
    return s || l || u;
}
class I extends (r = a.ZP.Store) {
    initialize() {
        s.ZP.addChangeListener(() => {
            let e = l.Z.getChannelId();
            if (null == e) return (d = {}), !0;
            let t = s.ZP.getCurrentSidebarChannelId(e);
            if (null != t && t in d) return !1;
            d = e in d ? { [e]: d[e] } : {};
        });
    }
    getActiveCommand(e) {
        return E(e).activeCommand;
    }
    getActiveCommandSection(e) {
        return E(e).activeCommandSection;
    }
    getActiveOptionName(e) {
        return E(e).activeOptionName;
    }
    getActiveOption(e) {
        var t, n, r;
        let i = E(e);
        return null !== (r = null === (n = i.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find((e) => e.name === i.activeOptionName)) && void 0 !== r ? r : null;
    }
    getPreferredCommandId(e) {
        return E(e).preferredCommandId;
    }
    getOptionStates(e) {
        return E(e).optionStates;
    }
    getOptionState(e, t) {
        return E(e).optionStates[t];
    }
    getCommandOrigin(e) {
        return E(e).commandOrigin;
    }
    getSource(e) {
        return E(e).source;
    }
    getOption(e, t) {
        var n, r;
        return null === (r = E(e).activeCommand) || void 0 === r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.find((e) => e.name === t);
    }
    getState(e) {
        return { ...E(e) };
    }
}
c(I, 'displayName', 'ApplicationCommandStore');
let T = new I(o.Z, {
    CONNECTION_OPEN: _,
    CHANNEL_SELECT: _,
    LOGOUT: _,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: f,
    APPLICATION_COMMAND_SET_PREFERRED_COMMAND: h,
    APPLICATION_COMMAND_UPDATE_OPTIONS: p,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: m
});
t.Z = T;
