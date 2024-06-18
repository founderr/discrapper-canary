"use strict";
n.d(t, {
  L: function() {
    return L
  },
  Z: function() {
    return v
  }
}), n(47120), n(653041), n(757143), n(733860);
var i = n(373793),
  r = n(911969),
  s = n(555573),
  o = n(456007),
  a = n(10718),
  l = n(998698),
  u = n(895924),
  _ = n(581364),
  c = n(509716),
  d = n(826298),
  E = n(592125),
  I = n(430824),
  T = n(594174),
  h = n(91313),
  S = n(53529),
  f = n(925994),
  N = n(436660),
  A = n(887490),
  m = n(42530),
  O = n(981631),
  R = n(665692);
let p = new Set(["applicationCommandOption"]),
  g = new Set([r.jw.ATTACHMENT]),
  C = new Set(["line", "applicationCommand"]);

function v(e, t, n, c) {
  let {
    insertData: E,
    isInline: I,
    isVoid: T,
    onChange: O,
    deleteBackward: v,
    deleteForward: b,
    deleteFragment: G
  } = e;
  e.insertData = n => {
    if (null != t && A.bN.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
      let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
        {
          commandKey: l,
          interactionOptions: c
        } = (0, _.XA)(e),
        {
          application: d,
          command: E
        } = a.Xq(t, l);
      if (null != E) {
        var i, r;
        let e = null != d ? {
          type: u.Qi.APPLICATION,
          id: d.id,
          icon: d.icon,
          name: null !== (r = null === (i = d.bot) || void 0 === i ? void 0 : i.username) && void 0 !== r ? r : d.name,
          application: d
        } : null;
        return s.Po({
          channelId: t.id,
          command: E,
          section: e,
          location: u.Vh.PASTE,
          initialValues: (0, o.Dw)(E, null != c ? c : [])
        }), null
      }
    }
    return E(n)
  }, e.isInline = e => !!p.has(e.type) || I(e), e.isVoid = e => !!("applicationCommandOption" === e.type && g.has(e.optionType)) || T(e), e.deleteBackward = t => {
    y(e, () => v(t))
  }, e.deleteForward = t => {
    y(e, () => b(t))
  }, e.deleteFragment = t => {
    y(e, () => G(t))
  };
  let w = null,
    k = null,
    B = null,
    x = null,
    V = null;
  return e.onChange = () => {
    if (null != t) {
      let o = l.Z.getState(t.id),
        _ = a.Hf(t);
      if (A.bN.richValue(e) !== w || !A.Ew.equals(e.selection, k) || o.activeCommand !== B || null == V || _.some((e, t) => V[t] !== e)) {
        let l = S.T.withMergedEntry(e, () => {
          var l;
          return function(e) {
            var t, n;
            let {
              editor: o,
              storeCommandState: l,
              channel: _,
              canUseCommands: c,
              canOnlyUseTextCommands: E,
              commandChanged: I,
              previousOptionValues: T
            } = e, {
              command: S,
              commandText: O
            } = P(o), p = l.activeCommand;
            if (!c && (null == p ? void 0 : null === (t = p.integration_types) || void 0 === t ? void 0 : t.includes(i.Y.GUILD_INSTALL)) || E && (null == p ? void 0 : p.inputType) !== u.iw.BUILT_IN_TEXT && (null == p ? void 0 : p.inputType) !== u.iw.BUILT_IN_INTEGRATION) return null != S && L(o, _.id, p, !0), null;
            if (null != S) {
              if (A.bN.isEditorEmpty(o) || null == p) return L(o, _.id, p, !1), null;
              let e = "".concat(R.GI).concat(S.displayName);
              if (null == O || !O.startsWith(e) || 0 === h.cu(o).length && (O.length < e.length + 1 || " " !== O[e.length])) return L(o, _.id, p, !0), null
            } else {
              if (null != p && I) {
                let e = function(e, t, n) {
                    var i, r, s, o, a;
                    let l;
                    let {
                      initialValues: u,
                      activeCommand: _
                    } = n;
                    if (null == _) return null;
                    let c = (null !== (s = null === (i = _.options) || void 0 === i ? void 0 : i.length) && void 0 !== s ? s : 0) > 0 ? h.zb(e, _) : null,
                      d = (0, f.sk)(A.bN.richValue(e), {
                        mode: "raw",
                        range: {
                          anchor: A.bN.start(e, []),
                          focus: null !== (o = null == c ? void 0 : null === (r = c[0]) || void 0 === r ? void 0 : r.keyRange.anchor) && void 0 !== o ? o : A.bN.end(e, [])
                        }
                      }),
                      E = "",
                      I = d.toLocaleLowerCase(),
                      T = "".concat(R.GI).concat(_.displayName).toLocaleLowerCase(),
                      S = "".concat(R.GI).concat(_.name).toLocaleLowerCase();
                    I.startsWith(T) && I.length > T.length ? E = d.substring(T.length).trim() : I.startsWith(S) && I.length > S.length && (E = d.substring(S.length).trim());
                    let O = [],
                      p = null,
                      C = null;
                    if (null != _.options) {
                      let e = new Set;
                      if (null != c)
                        for (let i of c) {
                          e.add(i.name);
                          let r = null !== (a = U(n, t, i.name)) && void 0 !== a ? a : i.text,
                            s = {
                              type: "applicationCommandOption",
                              optionName: i.name,
                              optionDisplayName: i.displayName,
                              optionType: i.type,
                              children: [{
                                text: r
                              }]
                            };
                          O.push(s), 0 === i.text.length && null == p && (p = s)
                        }
                      for (let i of _.options)
                        if (!e.has(i.name) && (i.required || null != u[i.name])) {
                          let e, r;
                          E.length > 0 && !g.has(i.type) ? (e = E, E = "") : e = null != (r = U(n, t, i.name)) ? r : "";
                          let s = {
                            type: "applicationCommandOption",
                            optionName: i.name,
                            optionDisplayName: i.displayName,
                            optionType: i.type,
                            children: [{
                              text: e
                            }]
                          };
                          O.push(s), 0 === e.length && null == p && (p = s), null == r && (C = s)
                        }
                    }
                    l = E.length > 0 ? "".concat(R.GI).concat(_.displayName, " ").concat(E.replace(/\r|\n/g, " ")) : 0 === O.length ? "".concat(R.GI).concat(_.displayName, " ") : "".concat(R.GI).concat(_.displayName), O.unshift({
                      text: l
                    });
                    let v = {
                      type: "applicationCommand",
                      children: O,
                      command: {
                        id: _.id,
                        name: _.name,
                        displayName: _.displayName
                      }
                    };
                    A.bN.withoutNormalizing(e, () => {
                      for (let [, t] of(N.Q.insertNodes(e, [v], {
                          at: m.YD
                        }), A.bN.blocks(e).reverse())) A.C0.isAfter(t, m.YD) && N.Q.removeNodes(e, {
                        at: t,
                        voids: !0
                      })
                    });
                    let L = null;
                    return null != p ? (N.Q.selectCommandOption(e, p.optionName), L = p.optionName) : null != C ? (N.Q.selectCommandOption(e, C.optionName, !1), L = C.optionName) : N.Q.resetSelectionToEnd(e), null == C && D(e, _), L
                  }(o, _, l),
                  t = h.tM(o, p, _.id);
                return M({
                  guildId: _.guild_id,
                  channelId: _.id,
                  command: p,
                  activeOption: e,
                  currentOptionValues: t,
                  previousOptionValues: null,
                  validateAll: !0,
                  allowEmpty: !0
                }), {
                  commandId: p.id,
                  optionValues: t
                }
              }
              if (null != p && !I) return s.Po({
                channelId: _.id,
                command: null,
                section: null
              }), null;
              let e = A.bN.richValue(o)[0],
                t = e.children[0];
              if (C.has(e.type) && A.LC.isText(t)) {
                let e = function(e, t) {
                  if (!e.startsWith("/")) return null;
                  let n = (0, d.hV)(t, e.substring(1));
                  if (!n.hasSpaceTerminator) return null;
                  let {
                    commands: i,
                    sections: s
                  } = a.VB(t, r.yU.CHAT, n.text);
                  if (0 === i.length) return null;
                  let o = n.text.trim(),
                    l = o + " ",
                    _ = i.filter(e => e.inputType !== u.iw.PLACEHOLDER && (e.displayName === o || e.displayName.startsWith(l)));
                  if (1 === _.length && _[0].displayName === o) {
                    let e = _[0],
                      t = s.find(t => {
                        var n;
                        return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.applicationId
                      });
                    return {
                      command: e,
                      section: t
                    }
                  }
                  return null
                }(t.text, _);
                if (null != e) return s.Po({
                  channelId: _.id,
                  command: e.command,
                  section: e.section
                }), null
              }
            }
            if (null != p && null != S) {
              ! function(e, t) {
                if (null == t.options || 0 === t.options.length) return !1;
                let n = h.zb(e, t);
                return 0 !== n.length && (A.bN.withoutNormalizing(e, () => {
                  for (let t = n.length - 1; t >= 0; t--) {
                    let i = n[t];
                    N.Q.textToInline(e, {
                      type: "applicationCommandOption",
                      optionName: i.name,
                      optionDisplayName: i.displayName,
                      optionType: i.type,
                      children: [{
                        text: i.text
                      }]
                    }, {
                      anchor: i.keyRange.anchor,
                      focus: i.valueRange.focus
                    })
                  }
                  let t = A.bN.getFirstText(e);
                  if (null == t) return !1;
                  let i = t.text.trim();
                  t.text !== i && N.Q.textToText(e, i, {
                    anchor: {
                      path: m.u9,
                      offset: 0
                    },
                    focus: {
                      path: m.u9,
                      offset: t.text.length
                    }
                  })
                }), !0)
              }(o, p) && D(o, p);
              let e = h.tM(o, p, _.id),
                t = A.bN.above(o, {
                  match: e => A.bN.isInline(o, e) && "applicationCommandOption" === e.type,
                  mode: "lowest"
                }),
                i = null !== (n = null == t ? void 0 : t[0].optionName) && void 0 !== n ? n : null;
              return M({
                guildId: _.guild_id,
                channelId: _.id,
                command: p,
                activeOption: i,
                currentOptionValues: e,
                previousOptionValues: T,
                validateAll: !1,
                allowEmpty: !1
              }), {
                commandId: S.id,
                optionValues: e
              }
            }
            return null
          }({
            editor: e,
            storeCommandState: o,
            channel: t,
            canUseCommands: n,
            canOnlyUseTextCommands: c,
            commandChanged: (null === (l = o.activeCommand) || void 0 === l ? void 0 : l.id) !== (null == B ? void 0 : B.id),
            previousOptionValues: x
          })
        });
        if (null != l) {
          let t = S.T.currentEntry(e);
          null != t && (t.commandId = l.commandId), x = l.optionValues
        } else x = null;
        w = A.bN.richValue(e), k = e.selection, B = o.activeCommand, V = _
      }
    }
    O()
  }, e
}

function L(e, t, n, i) {
  let [r] = A.bN.blocks(e)[0], o = (i ? (0, f.sg)(r, {
    mode: "plain"
  }).trimEnd() : "").split("\n").map(e => ({
    type: "line",
    children: [{
      text: e
    }]
  })), a = [o.length - 1];
  for (let [, t] of(N.Q.insertNodes(e, o, {
      at: m.YD
    }), A.bN.blocks(e).reverse())) A.C0.isAfter(t, a) && N.Q.removeNodes(e, {
    at: t,
    voids: !0
  });
  null != n && s.Po({
    channelId: t,
    command: null,
    section: null
  })
}

function D(e, t) {
  if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || g.has(t.options[0].type) || h.cu(e).length > 0 || null == h.cr(e)) return !1;
  let n = A.bN.getFirstText(e);
  if (null == n) return !1;
  let i = t.options[0],
    r = {
      path: m.u9,
      offset: t.displayName.length + 2
    },
    s = {
      path: m.u9,
      offset: n.text.length
    };
  return !(!n.text.startsWith("".concat(R.GI).concat(t.displayName, " ").toLocaleLowerCase()) || A.Jz.equals(r, s)) && (N.Q.textToInline(e, {
    type: "applicationCommandOption",
    optionName: i.name,
    optionDisplayName: i.displayName,
    optionType: i.type,
    children: [{
      text: n.text.substring(t.displayName.length + 2)
    }]
  }, {
    anchor: r,
    focus: s
  }), !0)
}

function M(e) {
  let {
    guildId: t,
    channelId: n,
    command: i,
    activeOption: r,
    currentOptionValues: o,
    previousOptionValues: a,
    validateAll: u,
    allowEmpty: _
  } = e;
  if (null == i.options) return !1;
  let d = u ? null : l.Z.getActiveOptionName(n),
    E = {},
    I = l.Z.getOptionStates(n),
    T = !1;
  for (let e of i.options) {
    var h, S, f;
    let i = I[e.name],
      s = u || e.name === d && d !== r || (null == i ? void 0 : null === (h = i.lastValidationResult) || void 0 === h ? void 0 : h.success) === !1 && (null == o ? void 0 : o[e.name]) !== (null == a ? void 0 : a[e.name]),
      l = {
        hasValue: null != o && e.name in o,
        isActive: e.name === r,
        lastValidationResult: s ? (0, c.f)({
          option: e,
          content: null !== (f = null == o ? void 0 : o[e.name]) && void 0 !== f ? f : null,
          guildId: t,
          channelId: n,
          allowEmptyValues: _
        }) : null == i ? void 0 : i.lastValidationResult
      };
    (null == i || i.hasValue !== l.hasValue || i.isActive !== l.isActive || s && (null === (S = i.lastValidationResult) || void 0 === S ? void 0 : S.success) === !1) && (E[e.name] = l, T = !0)
  }
  T && s.g7(n, E)
}

function P(e) {
  let t = h.cr(e);
  if (null == t) return {
    command: null,
    commandText: null
  };
  let [n] = t, i = n.children[0];
  return A.LC.isText(i) ? {
    command: n.command,
    commandText: i.text
  } : {
    command: n.command,
    commandText: null
  }
}

function y(e, t) {
  let n = h.cu(e)[0];
  t();
  let i = A.M8.toPoint(e.selection);
  if (null == i || n === h.cu(e)[0]) return;
  let {
    command: r,
    commandText: s
  } = P(e);
  if (!(null == r || null == s || s.endsWith(" ")) && !!A.Jz.equals(i, {
      path: m.u9,
      offset: r.displayName.length + 1
    })) N.Q.insertText(e, " ")
}

function U(e, t, n) {
  var i, s, o, a;
  let l = null === (s = e.activeCommand) || void 0 === s ? void 0 : null === (i = s.options) || void 0 === i ? void 0 : i.find(e => e.name === n),
    u = e.initialValues[n];
  if (null == l || null == u) return null;
  if (null != l.choices) return null === (a = l.choices.find(e => e.value === u.value)) || void 0 === a ? void 0 : a.displayName;
  let _ = null === (o = u.value) || void 0 === o ? void 0 : o.toString();
  return l.type === r.jw.CHANNEL || l.type === r.jw.MENTIONABLE && null != E.Z.getChannel(_) ? "<#".concat(_, ">	") : l.type === r.jw.USER || l.type === r.jw.MENTIONABLE && null != T.default.getUser(_) ? "<@".concat(_, ">") : l.type === r.jw.ROLE || l.type === r.jw.MENTIONABLE && null != I.Z.getRole(t.guild_id, null != _ ? _ : O.lds) ? "<@&".concat(_, ">") : _
}