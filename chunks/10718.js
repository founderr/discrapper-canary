n.d(t, {
    Hf: function () {
        return S;
    },
    JT: function () {
        return v;
    },
    Nk: function () {
        return T;
    },
    Qm: function () {
        return O;
    },
    VB: function () {
        return g;
    },
    Xq: function () {
        return m;
    },
    YZ: function () {
        return N;
    },
    wi: function () {
        return A;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(653041);
var o = n(470079),
    s = n(442837),
    l = n(430824),
    u = n(823379),
    c = n(254711),
    d = n(213459),
    _ = n(367790),
    E = n(895924),
    f = n(581364),
    h = n(689079),
    p = n(981631);
function m(e, t, n) {
    var r, i, a, o;
    if (null == t)
        return {
            application: void 0,
            command: void 0
        };
    let s = d.ZP.getUserState(),
        l = d.ZP.getContextState(e),
        u = Object.values(null !== (a = null === (r = s.result) || void 0 === r ? void 0 : r.sections) && void 0 !== a ? a : {}).concat(Object.values(null !== (o = null === (i = l.result) || void 0 === i ? void 0 : i.sections) && void 0 !== o ? o : {}));
    if (null != n) {
        let e = u.find((e) => {
            var t;
            return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === n;
        });
        if (null != e) {
            let n = I(e, t);
            return {
                application: e.descriptor.application,
                command: n
            };
        }
    } else
        for (let e of u) {
            let n = I(e, t);
            if (null != n)
                return {
                    application: e.descriptor.application,
                    command: n
                };
        }
    return {
        application: void 0,
        command: void 0
    };
}
function I(e, t) {
    var n, r, i;
    if (null == t) return;
    if (null != e.commands[t]) return e.commands[t];
    let a =
        null ===
            (n = Object.values(e.commands).find((e) => {
                var n;
                return (null === (n = e.rootCommand) || void 0 === n ? void 0 : n.id) === t;
            })) || void 0 === n
            ? void 0
            : n.rootCommand;
    return null != a
        ? (0, f.Z8)({
              rootCommand: a,
              command: a,
              applicationId: null !== (i = null === (r = e.descriptor.application) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : ''
          })
        : void 0;
}
function T(e, t, n) {
    var r, i, a, o, s, l, u, c;
    let _ = d.ZP.getUserState(),
        E = d.ZP.getContextState(e),
        f = d.ZP.getApplicationState(n),
        h = null !== (c = null !== (u = null === (i = _.result) || void 0 === i ? void 0 : null === (r = i.sections) || void 0 === r ? void 0 : r[n]) && void 0 !== u ? u : null === (o = E.result) || void 0 === o ? void 0 : null === (a = o.sections) || void 0 === a ? void 0 : a[n]) && void 0 !== c ? c : null === (l = f.result) || void 0 === l ? void 0 : null === (s = l.sections) || void 0 === s ? void 0 : s[n];
    return null == h ? void 0 : h.descriptor;
}
function g(e, t, n) {
    let r = d.ZP.query(
        e,
        {
            commandTypes: [t],
            text: n
        },
        {
            scoreMethod: _.p.COMMAND_OR_APPLICATION,
            allowFetch: !1
        }
    );
    return {
        commands: r.commands,
        sections: r.descriptors
    };
}
function S(e) {
    let t = d.ZP.getUserState(),
        n = d.ZP.getContextState(e);
    return [null == t ? void 0 : t.result, null == n ? void 0 : n.result];
}
function A(e, t, n) {
    let r = (0, s.e7)([l.Z], () => l.Z.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
        {
            descriptors: i,
            commands: a,
            sectionedCommands: u,
            loading: _
        } = (0, d.JK)(e, r, t, {
            ...n,
            allowFetch: !0
        }),
        [E, f] = o.useState(null),
        m = o.useRef(!1);
    m.current = _;
    let I = o.useMemo(() => {
        var e;
        return C(null !== (e = n.placeholderCount) && void 0 !== e ? e : 0, t.commandTypes[0]);
    }, [t.commandTypes, n.placeholderCount]);
    return o.useMemo(() => {
        let e = {
            loading: m,
            commands: a,
            activeSections: i,
            commandsByActiveSection: u,
            filteredSectionId: E,
            hasMoreAfter: !1,
            placeholders: _ ? I : [],
            sectionDescriptors: i,
            filterSection: (e) => {
                f(e);
            },
            scrollDown: p.dG4
        };
        if (null != E) {
            let t = u.find((e) => e.section.id === E);
            (e.activeSections = null != t ? [t.section] : []), (e.commandsByActiveSection = null != t ? [t] : []);
        }
        if (_) {
            let t = u[0];
            if (null != t)
                e.commandsByActiveSection = [
                    {
                        section: t.section,
                        data: [...t.data, ...I]
                    },
                    ...u.slice(1)
                ];
            else {
                let t = c.Tm[h.bi.BUILT_IN];
                (e.activeSections = [t]),
                    (e.commandsByActiveSection = [
                        {
                            section: t,
                            data: I
                        }
                    ]);
            }
            e.commands = [...a, ...I];
        }
        return e;
    }, [a, i, E, u, _, I]);
}
function v(e, t, n) {
    var r;
    let { descriptors: i, commands: a, loading: o } = d.ZP.query(e, t, n),
        s = C(o && null !== (r = n.placeholderCount) && void 0 !== r ? r : 0, t.commandTypes[0]);
    return {
        commands: o ? [...a, ...s] : a,
        sections: o && 0 === i.length ? [c.Tm[h.bi.BUILT_IN]] : i
    };
}
function N(e, t) {
    let n = (0, d.PL)(!0, !0),
        r = (0, d.em)(e, !0, !0);
    return o.useMemo(() => {
        if (null != t) {
            var e, i, a, o;
            for (let s of Object.values(null !== (a = null === (e = n.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}).concat(Object.values(null !== (o = null === (i = r.result) || void 0 === i ? void 0 : i.sections) && void 0 !== o ? o : {}))) {
                let e = s.commands[t];
                if (null != e)
                    return {
                        command: e,
                        application: s.descriptor.application
                    };
            }
        }
        return {
            command: void 0,
            application: void 0
        };
    }, [r.result, n.result, t]);
}
function O(e, t, n) {
    let r = (0, d.PL)(!0, !0),
        i = (0, d.em)(e, !0, !0);
    return o.useMemo(() => {
        var e, a, o, s, l, c;
        let d = null !== (l = null === (a = r.result) || void 0 === a ? void 0 : null === (e = a.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== l ? l : null === (o = i.result) || void 0 === o ? void 0 : o.sections[t],
            _ = Object.values(null !== (c = null == d ? void 0 : d.commands) && void 0 !== c ? c : {})
                .map((e) =>
                    null == e.rootCommand
                        ? e
                        : (0, f.Z8)({
                              rootCommand: e.rootCommand,
                              command: e.rootCommand,
                              applicationId: e.applicationId
                          })
                )
                .reduce((e, t) => ((e[t.id] = t), e), {});
        return {
            application: null == d ? void 0 : null === (s = d.descriptor) || void 0 === s ? void 0 : s.application,
            commands: n.map((e) => _[e]).filter(u.lm)
        };
    }, [null == r ? void 0 : r.result, null == i ? void 0 : i.result, t, n]);
}
let R = {
    id: 'placeholder-section',
    type: E.Qi.APPLICATION,
    name: ''
};
function C(e, t) {
    let n = [];
    for (let r = 0; r < e; r++) n.push(y(r, t));
    return n;
}
function y(e, t) {
    return {
        type: t,
        inputType: E.iw.PLACEHOLDER,
        id: 'placeholder-'.concat(e),
        untranslatedName: '',
        displayName: '',
        untranslatedDescription: '',
        displayDescription: '',
        applicationId: '',
        section: R
    };
}
