n.d(t, {
    L: function () {
        return U;
    },
    Z: function () {
        return D;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(757143);
var o = n(733860);
var s = n(373793),
    l = n(911969),
    u = n(555573),
    c = n(456007),
    d = n(10718),
    _ = n(998698),
    E = n(895924),
    f = n(581364),
    h = n(509716),
    p = n(826298),
    m = n(592125),
    I = n(430824),
    T = n(594174),
    g = n(91313),
    S = n(53529),
    A = n(925994),
    v = n(436660),
    N = n(887490),
    O = n(42530),
    R = n(981631),
    C = n(665692);
let y = new Set(['applicationCommandOption']),
    L = new Set([l.jw.ATTACHMENT]),
    b = new Set(['line', 'applicationCommand']);
function D(e, t, n, r) {
    let { insertData: i, isInline: a, isVoid: o, onChange: s, deleteBackward: l, deleteForward: h, deleteFragment: p } = e;
    (e.insertData = (n) => {
        if (null != t && N.bN.isEditorEmpty(e) && n.types.includes('application/x-discord-interaction-data')) {
            let e = JSON.parse(n.getData('application/x-discord-interaction-data')),
                { commandKey: i, interactionOptions: o } = (0, f.XA)(e),
                { application: s, command: l } = d.Xq(t, i);
            if (null != l) {
                var r, a;
                let e =
                    null != s
                        ? {
                              type: E.Qi.APPLICATION,
                              id: s.id,
                              icon: s.icon,
                              name: null !== (a = null === (r = s.bot) || void 0 === r ? void 0 : r.username) && void 0 !== a ? a : s.name,
                              application: s
                          }
                        : null;
                return (
                    u.Po({
                        channelId: t.id,
                        command: l,
                        section: e,
                        location: E.Vh.PASTE,
                        initialValues: (0, c.Dw)(l, null != o ? o : [])
                    }),
                    null
                );
            }
        }
        return i(n);
    }),
        (e.isInline = (e) => !!y.has(e.type) || a(e)),
        (e.isVoid = (e) => !!('applicationCommandOption' === e.type && L.has(e.optionType)) || o(e)),
        (e.deleteBackward = (t) => {
            B(e, () => l(t));
        }),
        (e.deleteForward = (t) => {
            B(e, () => h(t));
        }),
        (e.deleteFragment = (t) => {
            B(e, () => p(t));
        });
    let m = null,
        I = null,
        T = null,
        g = null,
        A = null;
    return (
        (e.onChange = () => {
            if (null != t) {
                let i = _.Z.getState(t.id),
                    a = d.Hf(t);
                if (N.bN.richValue(e) !== m || !N.Ew.equals(e.selection, I) || i.activeCommand !== T || null == A || a.some((e, t) => A[t] !== e)) {
                    let o = S.T.withMergedEntry(e, () => {
                        var a;
                        return M({
                            editor: e,
                            storeCommandState: i,
                            channel: t,
                            canUseCommands: n,
                            canOnlyUseTextCommands: r,
                            commandChanged: (null === (a = i.activeCommand) || void 0 === a ? void 0 : a.id) !== (null == T ? void 0 : T.id),
                            previousOptionValues: g
                        });
                    });
                    if (null != o) {
                        let t = S.T.currentEntry(e);
                        null != t && (t.commandId = o.commandId), (g = o.optionValues);
                    } else g = null;
                    (m = N.bN.richValue(e)), (I = e.selection), (T = i.activeCommand), (A = a);
                }
            }
            s();
        }),
        e
    );
}
function M(e) {
    var t, n;
    let { editor: r, storeCommandState: i, channel: a, canUseCommands: o, canOnlyUseTextCommands: l, commandChanged: c, previousOptionValues: d } = e,
        { command: _, commandText: f } = k(r),
        h = i.activeCommand;
    if ((!o && (null == h ? void 0 : null === (t = h.integration_types) || void 0 === t ? void 0 : t.includes(s.Y.GUILD_INSTALL))) || (l && (null == h ? void 0 : h.inputType) !== E.iw.BUILT_IN_TEXT && (null == h ? void 0 : h.inputType) !== E.iw.BUILT_IN_INTEGRATION)) return null != _ && U(r, a.id, h, !0), null;
    if (null != _) {
        if (N.bN.isEditorEmpty(r) || null == h) return U(r, a.id, h, !1), null;
        let e = ''.concat(C.GI).concat(_.displayName);
        if (null == f || !f.startsWith(e) || (0 === g.cu(r).length && (f.length < e.length + 1 || ' ' !== f[e.length]))) return U(r, a.id, h, !0), null;
    } else {
        if (null != h && c) {
            let e = P(r, a, i),
                t = g.tM(r, h, a.id);
            return (
                G({
                    guildId: a.guild_id,
                    channelId: a.id,
                    command: h,
                    activeOption: e,
                    currentOptionValues: t,
                    previousOptionValues: null,
                    validateAll: !0,
                    allowEmpty: !0
                }),
                {
                    commandId: h.id,
                    optionValues: t
                }
            );
        }
        if (null != h && !c)
            return (
                u.Po({
                    channelId: a.id,
                    command: null,
                    section: null
                }),
                null
            );
        let e = N.bN.richValue(r)[0],
            t = e.children[0];
        if (b.has(e.type) && N.LC.isText(t)) {
            let e = F(t.text, a);
            if (null != e)
                return (
                    u.Po({
                        channelId: a.id,
                        command: e.command,
                        section: e.section
                    }),
                    null
                );
        }
    }
    if (null != h && null != _) {
        !w(r, h) && x(r, h);
        let e = g.tM(r, h, a.id),
            t = N.bN.above(r, {
                match: (e) => N.bN.isInline(r, e) && 'applicationCommandOption' === e.type,
                mode: 'lowest'
            }),
            i = null !== (n = null == t ? void 0 : t[0].optionName) && void 0 !== n ? n : null;
        return (
            G({
                guildId: a.guild_id,
                channelId: a.id,
                command: h,
                activeOption: i,
                currentOptionValues: e,
                previousOptionValues: d,
                validateAll: !1,
                allowEmpty: !1
            }),
            {
                commandId: _.id,
                optionValues: e
            }
        );
    }
    return null;
}
function P(e, t, n) {
    var r, i, a, o, s;
    let l;
    let { initialValues: u, activeCommand: c } = n;
    if (null == c) return null;
    let d = (null !== (a = null === (r = c.options) || void 0 === r ? void 0 : r.length) && void 0 !== a ? a : 0) > 0 ? g.zb(e, c) : null,
        _ = (0, A.sk)(N.bN.richValue(e), {
            mode: 'raw',
            range: {
                anchor: N.bN.start(e, []),
                focus: null !== (o = null == d ? void 0 : null === (i = d[0]) || void 0 === i ? void 0 : i.keyRange.anchor) && void 0 !== o ? o : N.bN.end(e, [])
            }
        }),
        E = '',
        f = _.toLocaleLowerCase(),
        h = ''.concat(C.GI).concat(c.displayName).toLocaleLowerCase(),
        p = ''.concat(C.GI).concat(c.untranslatedName).toLocaleLowerCase();
    f.startsWith(h) && f.length > h.length ? (E = _.substring(h.length).trim()) : f.startsWith(p) && f.length > p.length && (E = _.substring(p.length).trim());
    let m = [],
        I = null,
        T = null;
    if (null != c.options) {
        let e = new Set();
        if (null != d)
            for (let r of d) {
                e.add(r.name);
                let i = null !== (s = Z(n, t, r.name)) && void 0 !== s ? s : r.text,
                    a = {
                        type: 'applicationCommandOption',
                        optionName: r.name,
                        optionDisplayName: r.displayName,
                        optionType: r.type,
                        children: [{ text: i }]
                    };
                m.push(a), 0 === r.text.length && null == I && (I = a);
            }
        for (let r of c.options)
            if (!e.has(r.name) && (r.required || null != u[r.name])) {
                let e, i;
                E.length > 0 && !L.has(r.type) ? ((e = E), (E = '')) : (e = null != (i = Z(n, t, r.name)) ? i : '');
                let a = {
                    type: 'applicationCommandOption',
                    optionName: r.name,
                    optionDisplayName: r.displayName,
                    optionType: r.type,
                    children: [{ text: e }]
                };
                m.push(a), 0 === e.length && null == I && (I = a), null == i && (T = a);
            }
    }
    (l = E.length > 0 ? ''.concat(C.GI).concat(c.displayName, ' ').concat(E.replace(/\r|\n/g, ' ')) : 0 === m.length ? ''.concat(C.GI).concat(c.displayName, ' ') : ''.concat(C.GI).concat(c.displayName)), m.unshift({ text: l });
    let S = {
        type: 'applicationCommand',
        children: m,
        command: {
            id: c.id,
            name: c.untranslatedName,
            displayName: c.displayName
        }
    };
    N.bN.withoutNormalizing(e, () => {
        for (let [, t] of (v.Q.insertNodes(e, [S], { at: O.YD }), N.bN.blocks(e).reverse()))
            N.C0.isAfter(t, O.YD) &&
                v.Q.removeNodes(e, {
                    at: t,
                    voids: !0
                });
    });
    let R = null;
    return null != I ? (v.Q.selectCommandOption(e, I.optionName), (R = I.optionName)) : null != T ? (v.Q.selectCommandOption(e, T.optionName, !1), (R = T.optionName)) : v.Q.resetSelectionToEnd(e), null == T && x(e, c), R;
}
function U(e, t, n, r) {
    let [i] = N.bN.blocks(e)[0],
        a = (r ? (0, A.sg)(i, { mode: 'plain' }).trimEnd() : '').split('\n').map((e) => ({
            type: 'line',
            children: [{ text: e }]
        })),
        o = [a.length - 1];
    for (let [, t] of (v.Q.insertNodes(e, a, { at: O.YD }), N.bN.blocks(e).reverse()))
        N.C0.isAfter(t, o) &&
            v.Q.removeNodes(e, {
                at: t,
                voids: !0
            });
    null != n &&
        u.Po({
            channelId: t,
            command: null,
            section: null
        });
}
function w(e, t) {
    if (null == t.options || 0 === t.options.length) return !1;
    let n = g.zb(e, t);
    return (
        0 !== n.length &&
        (N.bN.withoutNormalizing(e, () => {
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
            let t = N.bN.getFirstText(e);
            if (null == t) return !1;
            let r = t.text.trim();
            t.text !== r &&
                v.Q.textToText(e, r, {
                    anchor: {
                        path: O.u9,
                        offset: 0
                    },
                    focus: {
                        path: O.u9,
                        offset: t.text.length
                    }
                });
        }),
        !0)
    );
}
function x(e, t) {
    if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || L.has(t.options[0].type) || g.cu(e).length > 0 || null == g.cr(e)) return !1;
    let n = N.bN.getFirstText(e);
    if (null == n) return !1;
    let r = t.options[0],
        i = {
            path: O.u9,
            offset: t.displayName.length + 2
        },
        a = {
            path: O.u9,
            offset: n.text.length
        };
    return (
        !(!n.text.startsWith(''.concat(C.GI).concat(t.displayName, ' ').toLocaleLowerCase()) || N.Jz.equals(i, a)) &&
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
function G(e) {
    let { guildId: t, channelId: n, command: r, activeOption: i, currentOptionValues: a, previousOptionValues: o, validateAll: s, allowEmpty: l } = e;
    if (null == r.options) return !1;
    let c = s ? null : _.Z.getActiveOptionName(n),
        d = {},
        E = _.Z.getOptionStates(n),
        f = !1;
    for (let e of r.options) {
        var p, m, I;
        let r = E[e.name],
            u = s || (e.name === c && c !== i) || ((null == r ? void 0 : null === (p = r.lastValidationResult) || void 0 === p ? void 0 : p.success) === !1 && (null == a ? void 0 : a[e.name]) !== (null == o ? void 0 : o[e.name])),
            _ = {
                hasValue: null != a && e.name in a,
                isActive: e.name === i,
                lastValidationResult: u
                    ? (0, h.f)({
                          option: e,
                          content: null !== (I = null == a ? void 0 : a[e.name]) && void 0 !== I ? I : null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: l
                      })
                    : null == r
                      ? void 0
                      : r.lastValidationResult
            };
        (null == r || r.hasValue !== _.hasValue || r.isActive !== _.isActive || (u && (null === (m = r.lastValidationResult) || void 0 === m ? void 0 : m.success) === !1)) && ((d[e.name] = _), (f = !0));
    }
    f && u.g7(n, d);
}
function k(e) {
    let t = g.cr(e);
    if (null == t)
        return {
            command: null,
            commandText: null
        };
    let [n] = t,
        r = n.children[0];
    return N.LC.isText(r)
        ? {
              command: n.command,
              commandText: r.text
          }
        : {
              command: n.command,
              commandText: null
          };
}
function B(e, t) {
    let n = g.cu(e)[0];
    t();
    let r = N.M8.toPoint(e.selection);
    if (null == r || n === g.cu(e)[0]) return;
    let { command: i, commandText: a } = k(e);
    if (
        !(null == i || null == a || a.endsWith(' ')) &&
        !!N.Jz.equals(r, {
            path: O.u9,
            offset: i.displayName.length + 1
        })
    )
        v.Q.insertText(e, ' ');
}
function F(e, t) {
    if (!e.startsWith('/')) return null;
    let n = (0, p.hV)(t, e.substring(1));
    if (!n.hasSpaceTerminator) return null;
    let { commands: r, sections: i } = d.VB(t, l.yU.CHAT, n.text);
    if (0 === r.length) return null;
    let a = n.text.trim(),
        o = a + ' ',
        s = r.filter((e) => e.inputType !== E.iw.PLACEHOLDER && (e.displayName === a || e.displayName.startsWith(o)));
    if (1 === s.length && s[0].displayName === a) {
        let e = s[0],
            t = i.find((t) => {
                var n;
                return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.applicationId;
            });
        return {
            command: e,
            section: t
        };
    }
    return null;
}
function Z(e, t, n) {
    var r, i, a, o;
    let s = null === (i = e.activeCommand) || void 0 === i ? void 0 : null === (r = i.options) || void 0 === r ? void 0 : r.find((e) => e.name === n),
        u = e.initialValues[n];
    if (null == s || null == u) return null;
    if (null != s.choices) return null === (o = s.choices.find((e) => e.value === u.value)) || void 0 === o ? void 0 : o.displayName;
    let c = null === (a = u.value) || void 0 === a ? void 0 : a.toString();
    return s.type === l.jw.CHANNEL || (s.type === l.jw.MENTIONABLE && null != m.Z.getChannel(c)) ? '<#'.concat(c, '>\t') : s.type === l.jw.USER || (s.type === l.jw.MENTIONABLE && null != T.default.getUser(c)) ? '<@'.concat(c, '>') : s.type === l.jw.ROLE || (s.type === l.jw.MENTIONABLE && null != I.Z.getRole(t.guild_id, null != c ? c : R.lds)) ? '<@&'.concat(c, '>') : c;
}
