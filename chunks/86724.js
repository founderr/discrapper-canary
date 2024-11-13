n.d(t, {
    L: function () {
        return R;
    },
    Z: function () {
        return C;
    }
}),
    n(47120),
    n(653041),
    n(757143),
    n(733860);
var r = n(373793),
    i = n(911969),
    a = n(555573),
    s = n(456007),
    o = n(10718),
    l = n(998698),
    u = n(895924),
    c = n(581364),
    d = n(509716),
    f = n(826298),
    _ = n(592125),
    p = n(430824),
    h = n(594174),
    m = n(91313),
    g = n(53529),
    E = n(925994),
    v = n(436660),
    I = n(887490),
    b = n(42530),
    S = n(981631),
    T = n(665692);
let y = new Set(['applicationCommandOption']),
    A = new Set([i.jw.ATTACHMENT]),
    N = new Set(['line', 'applicationCommand']);
function C(e, t, n, d) {
    let { insertData: _, isInline: p, isVoid: h, onChange: S, deleteBackward: C, deleteForward: M, deleteFragment: P } = e;
    (e.insertData = (n) => {
        if (null != t && I.bN.isEditorEmpty(e) && n.types.includes('application/x-discord-interaction-data')) {
            let e = JSON.parse(n.getData('application/x-discord-interaction-data')),
                { commandKey: l, interactionOptions: d } = (0, c.XA)(e),
                { application: f, command: _ } = o.Xq(t, l);
            if (null != _) {
                var r, i;
                let e =
                    null != f
                        ? {
                              type: u.Qi.APPLICATION,
                              id: f.id,
                              icon: f.icon,
                              name: null !== (i = null === (r = f.bot) || void 0 === r ? void 0 : r.username) && void 0 !== i ? i : f.name,
                              application: f
                          }
                        : null;
                return (
                    a.Po({
                        channelId: t.id,
                        command: _,
                        section: e,
                        location: u.Vh.PASTE,
                        initialValues: (0, s.Dw)(_, null != d ? d : [])
                    }),
                    null
                );
            }
        }
        return _(n);
    }),
        (e.isInline = (e) => !!y.has(e.type) || p(e)),
        (e.isVoid = (e) => !!('applicationCommandOption' === e.type && A.has(e.optionType)) || h(e)),
        (e.deleteBackward = (t) => {
            x(e, () => C(t));
        }),
        (e.deleteForward = (t) => {
            x(e, () => M(t));
        }),
        (e.deleteFragment = (t) => {
            x(e, () => P(t));
        });
    let k = null,
        U = null,
        B = null,
        G = null,
        Z = null;
    return (
        (e.onChange = () => {
            if (null != t) {
                let s = l.Z.getState(t.id),
                    c = o.Hf(t);
                if (I.bN.richValue(e) !== k || !I.Ew.equals(e.selection, U) || s.activeCommand !== B || null == Z || c.some((e, t) => Z[t] !== e)) {
                    let l = g.T.withMergedEntry(e, () => {
                        var l;
                        return (function (e) {
                            var t, n;
                            let { editor: s, storeCommandState: l, channel: c, canUseCommands: d, canOnlyUseTextCommands: _, commandChanged: p, previousOptionValues: h } = e,
                                { command: g, commandText: S } = L(s),
                                y = l.activeCommand;
                            if ((!d && (null == y ? void 0 : null === (t = y.integration_types) || void 0 === t ? void 0 : t.includes(r.Y.GUILD_INSTALL))) || (_ && (null == y ? void 0 : y.inputType) !== u.iw.BUILT_IN_TEXT && (null == y ? void 0 : y.inputType) !== u.iw.BUILT_IN_INTEGRATION)) return null != g && R(s, c.id, y, !0), null;
                            if (null != g) {
                                if (I.bN.isEditorEmpty(s) || null == y) return R(s, c.id, y, !1), null;
                                let e = ''.concat(T.GI).concat(g.displayName);
                                if (null == S || !S.startsWith(e) || (0 === m.cu(s).length && (S.length < e.length + 1 || ' ' !== S[e.length]))) return R(s, c.id, y, !0), null;
                            } else {
                                if (null != y && p) {
                                    let e = (function (e, t, n) {
                                            var r, i, a, s, o;
                                            let l;
                                            let { initialValues: u, activeCommand: c } = n;
                                            if (null == c) return null;
                                            let d = (null !== (a = null === (r = c.options) || void 0 === r ? void 0 : r.length) && void 0 !== a ? a : 0) > 0 ? m.zb(e, c) : null,
                                                f = (0, E.sk)(I.bN.richValue(e), {
                                                    mode: 'raw',
                                                    range: {
                                                        anchor: I.bN.start(e, []),
                                                        focus: null !== (s = null == d ? void 0 : null === (i = d[0]) || void 0 === i ? void 0 : i.keyRange.anchor) && void 0 !== s ? s : I.bN.end(e, [])
                                                    }
                                                }),
                                                _ = '',
                                                p = f.toLocaleLowerCase(),
                                                h = ''.concat(T.GI).concat(c.displayName, ' ').toLocaleLowerCase(),
                                                g = ''.concat(T.GI).concat(c.untranslatedName, ' ').toLocaleLowerCase();
                                            p.startsWith(h) ? (_ = f.substring(h.length).trim()) : p.startsWith(g) && (_ = f.substring(g.length).trim());
                                            let S = [],
                                                y = null,
                                                N = null;
                                            if (null != c.options) {
                                                let e = new Set();
                                                if (null != d)
                                                    for (let r of d) {
                                                        e.add(r.name);
                                                        let i = null !== (o = w(n, t, r.name)) && void 0 !== o ? o : r.text,
                                                            a = {
                                                                type: 'applicationCommandOption',
                                                                optionName: r.name,
                                                                optionDisplayName: r.displayName,
                                                                optionType: r.type,
                                                                children: [{ text: i }]
                                                            };
                                                        S.push(a), 0 === r.text.length && null == y && (y = a);
                                                    }
                                                for (let r of c.options)
                                                    if (!e.has(r.name) && (r.required || null != u[r.name])) {
                                                        let e, i;
                                                        _.length > 0 && !A.has(r.type) ? ((e = _), (_ = '')) : (e = null != (i = w(n, t, r.name)) ? i : '');
                                                        let a = {
                                                            type: 'applicationCommandOption',
                                                            optionName: r.name,
                                                            optionDisplayName: r.displayName,
                                                            optionType: r.type,
                                                            children: [{ text: e }]
                                                        };
                                                        S.push(a), 0 === e.length && null == y && (y = a), null == i && (N = a);
                                                    }
                                            }
                                            (l = _.length > 0 ? ''.concat(T.GI).concat(c.displayName, ' ').concat(_.replace(/\r|\n/g, ' ')) : 0 === S.length ? ''.concat(T.GI).concat(c.displayName, ' ') : ''.concat(T.GI).concat(c.displayName)), S.unshift({ text: l });
                                            let C = {
                                                type: 'applicationCommand',
                                                children: S,
                                                command: {
                                                    id: c.id,
                                                    name: c.untranslatedName,
                                                    displayName: c.displayName
                                                }
                                            };
                                            I.bN.withoutNormalizing(e, () => {
                                                for (let [, t] of (v.Q.insertNodes(e, [C], { at: b.YD }), I.bN.blocks(e).reverse()))
                                                    I.C0.isAfter(t, b.YD) &&
                                                        v.Q.removeNodes(e, {
                                                            at: t,
                                                            voids: !0
                                                        });
                                            });
                                            let R = null;
                                            return null != y ? (v.Q.selectCommandOption(e, y.optionName), (R = y.optionName)) : null != N ? (v.Q.selectCommandOption(e, N.optionName, !1), (R = N.optionName)) : v.Q.resetSelectionToEnd(e), null == N && O(e, c), R;
                                        })(s, c, l),
                                        t = m.tM(s, y, c.id);
                                    return (
                                        D({
                                            guildId: c.guild_id,
                                            channelId: c.id,
                                            command: y,
                                            activeOption: e,
                                            currentOptionValues: t,
                                            previousOptionValues: null,
                                            validateAll: !0,
                                            allowEmpty: !0
                                        }),
                                        {
                                            commandId: y.id,
                                            optionValues: t
                                        }
                                    );
                                }
                                if (null != y && !p)
                                    return (
                                        a.Po({
                                            channelId: c.id,
                                            command: null,
                                            section: null
                                        }),
                                        null
                                    );
                                let e = I.bN.richValue(s)[0],
                                    t = e.children[0];
                                if (N.has(e.type) && I.LC.isText(t)) {
                                    let e = (function (e, t) {
                                        if (!e.startsWith('/')) return null;
                                        let n = (0, f.hV)(t, e.substring(1));
                                        if (!n.hasSpaceTerminator) return null;
                                        let { commands: r, sections: a } = o.VB(t, i.yU.CHAT, n.text);
                                        if (0 === r.length) return null;
                                        let s = n.text.trim(),
                                            l = s + ' ',
                                            c = r.filter((e) => e.inputType !== u.iw.PLACEHOLDER && (e.displayName === s || e.displayName.startsWith(l)));
                                        if (1 === c.length && c[0].displayName === s) {
                                            let e = c[0],
                                                t = a.find((t) => {
                                                    var n;
                                                    return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.applicationId;
                                                });
                                            return {
                                                command: e,
                                                section: t
                                            };
                                        }
                                        return null;
                                    })(t.text, c);
                                    if (null != e)
                                        return (
                                            a.Po({
                                                channelId: c.id,
                                                command: e.command,
                                                section: e.section
                                            }),
                                            null
                                        );
                                }
                            }
                            if (null != y && null != g) {
                                !(function (e, t) {
                                    if (null == t.options || 0 === t.options.length) return !1;
                                    let n = m.zb(e, t);
                                    return (
                                        0 !== n.length &&
                                        (I.bN.withoutNormalizing(e, () => {
                                            for (let t = n.length - 1; t >= 0; t--) {
                                                let r = n[t];
                                                v.Q.textToInline(
                                                    e,
                                                    {
                                                        type: 'applicationCommandOption',
                                                        optionName: r.name,
                                                        optionDisplayName: r.displayName,
                                                        optionType: r.type,
                                                        children: [{ text: r.text }]
                                                    },
                                                    {
                                                        anchor: r.keyRange.anchor,
                                                        focus: r.valueRange.focus
                                                    }
                                                );
                                            }
                                            let t = I.bN.getFirstText(e);
                                            if (null == t) return !1;
                                            let r = t.text.trim();
                                            t.text !== r &&
                                                v.Q.textToText(e, r, {
                                                    anchor: {
                                                        path: b.u9,
                                                        offset: 0
                                                    },
                                                    focus: {
                                                        path: b.u9,
                                                        offset: t.text.length
                                                    }
                                                });
                                        }),
                                        !0)
                                    );
                                })(s, y) && O(s, y);
                                let e = m.tM(s, y, c.id),
                                    t = I.bN.above(s, {
                                        match: (e) => I.bN.isInline(s, e) && 'applicationCommandOption' === e.type,
                                        mode: 'lowest'
                                    }),
                                    r = null !== (n = null == t ? void 0 : t[0].optionName) && void 0 !== n ? n : null;
                                return (
                                    D({
                                        guildId: c.guild_id,
                                        channelId: c.id,
                                        command: y,
                                        activeOption: r,
                                        currentOptionValues: e,
                                        previousOptionValues: h,
                                        validateAll: !1,
                                        allowEmpty: !1
                                    }),
                                    {
                                        commandId: g.id,
                                        optionValues: e
                                    }
                                );
                            }
                            return null;
                        })({
                            editor: e,
                            storeCommandState: s,
                            channel: t,
                            canUseCommands: n,
                            canOnlyUseTextCommands: d,
                            commandChanged: (null === (l = s.activeCommand) || void 0 === l ? void 0 : l.id) !== (null == B ? void 0 : B.id),
                            previousOptionValues: G
                        });
                    });
                    if (null != l) {
                        let t = g.T.currentEntry(e);
                        null != t && (t.commandId = l.commandId), (G = l.optionValues);
                    } else G = null;
                    (k = I.bN.richValue(e)), (U = e.selection), (B = s.activeCommand), (Z = c);
                }
            }
            S();
        }),
        e
    );
}
function R(e, t, n, r) {
    let [i] = I.bN.blocks(e)[0],
        s = (r ? (0, E.sg)(i, { mode: 'plain' }).trimEnd() : '').split('\n').map((e) => ({
            type: 'line',
            children: [{ text: e }]
        })),
        o = [s.length - 1];
    for (let [, t] of (v.Q.insertNodes(e, s, { at: b.YD }), I.bN.blocks(e).reverse()))
        I.C0.isAfter(t, o) &&
            v.Q.removeNodes(e, {
                at: t,
                voids: !0
            });
    null != n &&
        a.Po({
            channelId: t,
            command: null,
            section: null
        });
}
function O(e, t) {
    if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || A.has(t.options[0].type) || m.cu(e).length > 0 || null == m.cr(e)) return !1;
    let n = I.bN.getFirstText(e);
    if (null == n) return !1;
    let r = t.options[0],
        i = {
            path: b.u9,
            offset: t.displayName.length + 2
        },
        a = {
            path: b.u9,
            offset: n.text.length
        };
    return (
        !(!n.text.startsWith(''.concat(T.GI).concat(t.displayName, ' ').toLocaleLowerCase()) || I.Jz.equals(i, a)) &&
        (v.Q.textToInline(
            e,
            {
                type: 'applicationCommandOption',
                optionName: r.name,
                optionDisplayName: r.displayName,
                optionType: r.type,
                children: [{ text: n.text.substring(t.displayName.length + 2) }]
            },
            {
                anchor: i,
                focus: a
            }
        ),
        !0)
    );
}
function D(e) {
    let { guildId: t, channelId: n, command: r, activeOption: i, currentOptionValues: s, previousOptionValues: o, validateAll: u, allowEmpty: c } = e;
    if (null == r.options) return !1;
    let f = u ? null : l.Z.getActiveOptionName(n),
        _ = {},
        p = l.Z.getOptionStates(n),
        h = !1;
    for (let e of r.options) {
        var m, g, E;
        let r = p[e.name],
            a = u || (e.name === f && f !== i) || ((null == r ? void 0 : null === (m = r.lastValidationResult) || void 0 === m ? void 0 : m.success) === !1 && (null == s ? void 0 : s[e.name]) !== (null == o ? void 0 : o[e.name])),
            l = {
                hasValue: null != s && e.name in s,
                isActive: e.name === i,
                lastValidationResult: a
                    ? (0, d.f)({
                          option: e,
                          content: null !== (E = null == s ? void 0 : s[e.name]) && void 0 !== E ? E : null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: c
                      })
                    : null == r
                      ? void 0
                      : r.lastValidationResult
            };
        (null == r || r.hasValue !== l.hasValue || r.isActive !== l.isActive || (a && (null === (g = r.lastValidationResult) || void 0 === g ? void 0 : g.success) === !1)) && ((_[e.name] = l), (h = !0));
    }
    h && a.g7(n, _);
}
function L(e) {
    let t = m.cr(e);
    if (null == t)
        return {
            command: null,
            commandText: null
        };
    let [n] = t,
        r = n.children[0];
    return I.LC.isText(r)
        ? {
              command: n.command,
              commandText: r.text
          }
        : {
              command: n.command,
              commandText: null
          };
}
function x(e, t) {
    let n = m.cu(e)[0];
    t();
    let r = I.M8.toPoint(e.selection);
    if (null == r || n === m.cu(e)[0]) return;
    let { command: i, commandText: a } = L(e);
    if (
        !(null == i || null == a || a.endsWith(' ')) &&
        !!I.Jz.equals(r, {
            path: b.u9,
            offset: i.displayName.length + 1
        })
    )
        v.Q.insertText(e, ' ');
}
function w(e, t, n) {
    var r, a, s, o;
    let l = null === (a = e.activeCommand) || void 0 === a ? void 0 : null === (r = a.options) || void 0 === r ? void 0 : r.find((e) => e.name === n),
        u = e.initialValues[n];
    if (null == l || null == u) return null;
    if (null != l.choices) return null === (o = l.choices.find((e) => e.value === u.value)) || void 0 === o ? void 0 : o.displayName;
    let c = null === (s = u.value) || void 0 === s ? void 0 : s.toString();
    return l.type === i.jw.CHANNEL || (l.type === i.jw.MENTIONABLE && null != _.Z.getChannel(c)) ? '<#'.concat(c, '>\t') : l.type === i.jw.USER || (l.type === i.jw.MENTIONABLE && null != h.default.getUser(c)) ? '<@'.concat(c, '>') : l.type === i.jw.ROLE || (l.type === i.jw.MENTIONABLE && null != p.Z.getRole(t.guild_id, null != c ? c : S.lds)) ? '<@&'.concat(c, '>') : c;
}
