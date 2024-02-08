"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  },
  unsetCommand: function() {
    return x
  }
}), n("222007"), n("424973"), n("781738"), n("843762");
var l = n("798609"),
  i = n("507217"),
  a = n("118200"),
  s = n("240249"),
  r = n("383018"),
  o = n("524768"),
  u = n("389153"),
  d = n("343952"),
  c = n("355263"),
  f = n("511104"),
  p = n("42203"),
  m = n("305961"),
  h = n("697218"),
  E = n("640830"),
  S = n("83800"),
  g = n("970153"),
  C = n("939563"),
  T = n("385887"),
  v = n("566819"),
  I = n("406291");
let _ = new Set(["applicationCommandOption"]),
  y = new Set([l.ApplicationCommandOptionType.ATTACHMENT]),
  A = new Set(["line", "applicationCommand"]);

function N(e, t, n, d) {
  let {
    insertData: p,
    isInline: m,
    isVoid: h,
    onChange: N,
    deleteBackward: b,
    deleteForward: j,
    deleteFragment: U
  } = e;
  e.insertData = n => {
    if (null != t && T.EditorUtils.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
      let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
        {
          commandKey: d,
          interactionOptions: c
        } = (0, u.extractInteractionDataProps)(e),
        {
          application: f,
          command: p
        } = s.getCachedCommand(t, d);
      if (null != p) {
        var l, r;
        let e = null != f ? {
          type: o.ApplicationCommandSectionType.APPLICATION,
          id: f.id,
          icon: f.icon,
          name: null !== (r = null === (l = f.bot) || void 0 === l ? void 0 : l.username) && void 0 !== r ? r : f.name,
          application: f
        } : null;
        return i.setActiveCommand({
          channelId: t.id,
          command: p,
          section: e,
          location: o.ApplicationCommandTriggerLocations.PASTE,
          initialValues: (0, a.getInitialValuesFromInteractionOptions)(p, null != c ? c : [])
        }), null
      }
    }
    return p(n)
  }, e.isInline = e => !!_.has(e.type) || m(e), e.isVoid = e => !!("applicationCommandOption" === e.type && y.has(e.optionType)) || h(e), e.deleteBackward = t => {
    L(e, () => b(t))
  }, e.deleteForward = t => {
    L(e, () => j(t))
  }, e.deleteFragment = t => {
    L(e, () => U(t))
  };
  let D = null,
    k = null,
    w = null,
    F = null,
    G = null;
  return e.onChange = () => {
    if (null != t) {
      var a;
      let u = r.default.getState(t.id),
        p = T.EditorUtils.getFirstText(e),
        m = (0, c.getCommandQuery)(t, null !== (a = null == p ? void 0 : p.text) && void 0 !== a ? a : ""),
        h = s.getChangeKeys(t, l.ApplicationCommandType.CHAT, m.text);
      if (T.EditorUtils.richValue(e) !== D || !T.SelectionUtils.equals(e.selection, k) || u.activeCommand !== w || null == G || h.some((e, t) => G[t] !== e)) {
        let a = S.HistoryUtils.withMergedEntry(e, () => {
          var a;
          return function(e) {
            let {
              editor: t,
              storeCommandState: n,
              channel: a,
              canUseCommands: r,
              canOnlyUseTextCommands: u,
              commandChanged: d,
              previousOptionValues: p
            } = e, {
              command: m,
              commandText: h
            } = M(t), S = n.activeCommand;
            if (!r || u && (null == S ? void 0 : S.inputType) !== o.ApplicationCommandInputType.BUILT_IN_TEXT && (null == S ? void 0 : S.inputType) !== o.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return null != m && x(t, a.id, S, !0), null;
            if (null != m) {
              if (T.EditorUtils.isEditorEmpty(t) || null == S) return x(t, a.id, S, !1), null;
              let e = "".concat(I.COMMAND_SENTINEL).concat(m.displayName);
              if (null == h || !h.startsWith(e) || 0 === E.getOptionNames(t).length && (h.length < e.length + 1 || " " !== h[e.length])) return x(t, a.id, S, !0), null
            } else {
              if (null != S && d) {
                let e = function(e, t, n) {
                    var l, i, a, s, r;
                    let o;
                    let {
                      initialValues: u,
                      activeCommand: d
                    } = n;
                    if (null == d) return null;
                    let c = (null !== (a = null === (l = d.options) || void 0 === l ? void 0 : l.length) && void 0 !== a ? a : 0) > 0 ? E.findTextOptions(e, d) : null,
                      p = (0, g.toTextValue)(T.EditorUtils.richValue(e), {
                        mode: "raw",
                        range: {
                          anchor: T.EditorUtils.start(e, []),
                          focus: null !== (s = null == c ? void 0 : null === (i = c[0]) || void 0 === i ? void 0 : i.keyRange.anchor) && void 0 !== s ? s : T.EditorUtils.end(e, [])
                        }
                      }),
                      m = "",
                      h = p.toLocaleLowerCase(),
                      S = f.PREFIX_COMMAND_REGEX.exec(h);
                    null != S && (h = I.COMMAND_SENTINEL + h.substring(S.length));
                    let _ = "".concat(I.COMMAND_SENTINEL).concat(d.displayName).toLocaleLowerCase(),
                      A = "".concat(I.COMMAND_SENTINEL).concat(d.name).toLocaleLowerCase();
                    h.startsWith(_) && h.length > _.length ? m = p.substring(_.length).trim() : h.startsWith(A) && h.length > A.length && (m = p.substring(A.length).trim());
                    let N = [],
                      x = null,
                      R = null;
                    if (null != d.options) {
                      let e = new Set;
                      if (null != c)
                        for (let l of c) {
                          e.add(l.name);
                          let i = null !== (r = P(n, t, l.name)) && void 0 !== r ? r : l.text,
                            a = {
                              type: "applicationCommandOption",
                              optionName: l.name,
                              optionDisplayName: l.displayName,
                              optionType: l.type,
                              children: [{
                                text: i
                              }]
                            };
                          N.push(a), 0 === l.text.length && null == x && (x = a)
                        }
                      for (let l of d.options)
                        if (!e.has(l.name) && (l.required || null != u[l.name])) {
                          let e, i;
                          m.length > 0 && !y.has(l.type) ? (e = m, m = "") : e = null != (i = P(n, t, l.name)) ? i : "";
                          let a = {
                            type: "applicationCommandOption",
                            optionName: l.name,
                            optionDisplayName: l.displayName,
                            optionType: l.type,
                            children: [{
                              text: e
                            }]
                          };
                          N.push(a), 0 === e.length && null == x && (x = a), null == i && (R = a)
                        }
                    }
                    o = m.length > 0 ? "".concat(I.COMMAND_SENTINEL).concat(d.displayName, " ").concat(m.replace(/\r|\n/g, " ")) : 0 === N.length ? "".concat(I.COMMAND_SENTINEL).concat(d.displayName, " ") : "".concat(I.COMMAND_SENTINEL).concat(d.displayName), N.unshift({
                      text: o
                    });
                    let M = {
                      type: "applicationCommand",
                      children: N,
                      command: {
                        id: d.id,
                        name: d.name,
                        displayName: d.displayName
                      }
                    };
                    T.EditorUtils.withoutNormalizing(e, () => {
                      for (let [, t] of(C.SlateTransforms.insertNodes(e, [M], {
                          at: v.FIRST_BLOCK_PATH
                        }), T.EditorUtils.blocks(e).reverse())) T.PathUtils.isAfter(t, v.FIRST_BLOCK_PATH) && C.SlateTransforms.removeNodes(e, {
                        at: t,
                        voids: !0
                      })
                    });
                    let L = null;
                    return null != x ? (C.SlateTransforms.selectCommandOption(e, x.optionName), L = x.optionName) : null != R ? (C.SlateTransforms.selectCommandOption(e, R.optionName, !1), L = R.optionName) : C.SlateTransforms.resetSelectionToEnd(e), null == R && O(e, d), L
                  }(t, a, n),
                  l = E.getOptionValues(t, S);
                return R({
                  guildId: a.guild_id,
                  channelId: a.id,
                  command: S,
                  activeOption: e,
                  currentOptionValues: l,
                  previousOptionValues: null,
                  validateAll: !0,
                  allowEmpty: !0
                }), {
                  commandId: S.id,
                  optionValues: l
                }
              }
              if (null != S && !d) return i.setActiveCommand({
                channelId: a.id,
                command: null,
                section: null
              }), null;
              let e = T.EditorUtils.richValue(t),
                r = e[0],
                u = r.children[0];
              if (A.has(r.type) && T.TextUtils.isText(u)) {
                let e = function(e, t) {
                  if (!e.startsWith("/")) return null;
                  let n = (0, c.getCommandQuery)(t, e.substring(1));
                  if (!n.hasSpaceTerminator) return null;
                  let {
                    commands: i,
                    sections: a
                  } = s.getCachedResults(t, l.ApplicationCommandType.CHAT, n.text);
                  if (0 === i.length) return null;
                  let r = n.text.trim(),
                    u = r + " ",
                    d = i.filter(e => e.inputType !== o.ApplicationCommandInputType.PLACEHOLDER && (e.displayName === r || e.displayName.startsWith(u)));
                  if (1 === d.length && d[0].displayName === r) {
                    let e = d[0],
                      t = a.find(t => {
                        var n;
                        return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.applicationId
                      });
                    return {
                      command: e,
                      section: t
                    }
                  }
                  return null
                }(u.text, a);
                if (null != e) return i.setActiveCommand({
                  channelId: a.id,
                  command: e.command,
                  section: e.section
                }), null
              }
            }
            if (null != S && null != m) {
              var _;
              ! function(e, t) {
                if (null == t.options || 0 === t.options.length) return !1;
                let n = E.findTextOptions(e, t);
                return 0 !== n.length && (T.EditorUtils.withoutNormalizing(e, () => {
                  for (let t = n.length - 1; t >= 0; t--) {
                    let l = n[t];
                    C.SlateTransforms.textToInline(e, {
                      type: "applicationCommandOption",
                      optionName: l.name,
                      optionDisplayName: l.displayName,
                      optionType: l.type,
                      children: [{
                        text: l.text
                      }]
                    }, {
                      anchor: l.keyRange.anchor,
                      focus: l.valueRange.focus
                    })
                  }
                  let t = T.EditorUtils.getFirstText(e);
                  if (null == t) return !1;
                  let l = t.text.trim();
                  t.text !== l && C.SlateTransforms.textToText(e, l, {
                    anchor: {
                      path: v.FIRST_TEXT_PATH,
                      offset: 0
                    },
                    focus: {
                      path: v.FIRST_TEXT_PATH,
                      offset: t.text.length
                    }
                  })
                }), !0)
              }(t, S) && O(t, S);
              let e = E.getOptionValues(t, S),
                n = T.EditorUtils.above(t, {
                  match: e => T.EditorUtils.isInline(t, e) && "applicationCommandOption" === e.type,
                  mode: "lowest"
                }),
                l = null !== (_ = null == n ? void 0 : n[0].optionName) && void 0 !== _ ? _ : null;
              return R({
                guildId: a.guild_id,
                channelId: a.id,
                command: S,
                activeOption: l,
                currentOptionValues: e,
                previousOptionValues: p,
                validateAll: !1,
                allowEmpty: !1
              }), {
                commandId: m.id,
                optionValues: e
              }
            }
            return null
          }({
            editor: e,
            storeCommandState: u,
            channel: t,
            canUseCommands: n,
            canOnlyUseTextCommands: d,
            commandChanged: (null === (a = u.activeCommand) || void 0 === a ? void 0 : a.id) !== (null == w ? void 0 : w.id),
            previousOptionValues: F
          })
        });
        if (null != a) {
          let t = S.HistoryUtils.currentEntry(e);
          null != t && (t.commandId = a.commandId), F = a.optionValues
        } else F = null;
        D = T.EditorUtils.richValue(e), k = e.selection, w = u.activeCommand, G = h
      }
    }
    N()
  }, e
}

function x(e, t, n, l) {
  let [a] = T.EditorUtils.blocks(e)[0], s = l ? (0, g.serializeDescendant)(a, {
    mode: "plain"
  }).trimEnd() : "", r = s.split("\n").map(e => ({
    type: "line",
    children: [{
      text: e
    }]
  })), o = [r.length - 1];
  for (let [, t] of(C.SlateTransforms.insertNodes(e, r, {
      at: v.FIRST_BLOCK_PATH
    }), T.EditorUtils.blocks(e).reverse())) T.PathUtils.isAfter(t, o) && C.SlateTransforms.removeNodes(e, {
    at: t,
    voids: !0
  });
  null != n && i.setActiveCommand({
    channelId: t,
    command: null,
    section: null
  })
}

function O(e, t) {
  if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || y.has(t.options[0].type) || E.getOptionNames(e).length > 0) return !1;
  let n = E.getCommandBlock(e);
  if (null == n) return !1;
  let l = T.EditorUtils.getFirstText(e);
  if (null == l) return !1;
  let i = t.options[0],
    a = {
      path: v.FIRST_TEXT_PATH,
      offset: t.displayName.length + 2
    },
    s = {
      path: v.FIRST_TEXT_PATH,
      offset: l.text.length
    };
  return !(!l.text.startsWith("".concat(I.COMMAND_SENTINEL).concat(t.displayName, " ").toLocaleLowerCase()) || T.PointUtils.equals(a, s)) && (C.SlateTransforms.textToInline(e, {
    type: "applicationCommandOption",
    optionName: i.name,
    optionDisplayName: i.displayName,
    optionType: i.type,
    children: [{
      text: l.text.substring(t.displayName.length + 2)
    }]
  }, {
    anchor: a,
    focus: s
  }), !0)
}

function R(e) {
  let {
    guildId: t,
    channelId: n,
    command: l,
    activeOption: a,
    currentOptionValues: s,
    previousOptionValues: o,
    validateAll: u,
    allowEmpty: c
  } = e;
  if (null == l.options) return !1;
  let f = u ? null : r.default.getActiveOptionName(n),
    p = {},
    m = r.default.getOptionStates(n),
    h = !1;
  for (let e of l.options) {
    var E, S, g;
    let l = m[e.name],
      i = u || e.name === f && f !== a || (null == l ? void 0 : null === (E = l.lastValidationResult) || void 0 === E ? void 0 : E.success) === !1 && (null == s ? void 0 : s[e.name]) !== (null == o ? void 0 : o[e.name]),
      r = {
        hasValue: null != s && e.name in s,
        isActive: e.name === a,
        lastValidationResult: i ? (0, d.validateOptionContent)({
          option: e,
          content: null !== (g = null == s ? void 0 : s[e.name]) && void 0 !== g ? g : null,
          guildId: t,
          channelId: n,
          allowEmptyValues: c
        }) : null == l ? void 0 : l.lastValidationResult
      };
    (null == l || l.hasValue !== r.hasValue || l.isActive !== r.isActive || i && (null === (S = l.lastValidationResult) || void 0 === S ? void 0 : S.success) === !1) && (p[e.name] = r, h = !0)
  }
  h && i.updateOptionStates(n, p)
}

function M(e) {
  let t = E.getCommandBlock(e);
  if (null == t) return {
    command: null,
    commandText: null
  };
  let [n] = t, l = n.children[0];
  return T.TextUtils.isText(l) ? {
    command: n.command,
    commandText: l.text
  } : {
    command: n.command,
    commandText: null
  }
}

function L(e, t) {
  let n = E.getOptionNames(e)[0];
  t();
  let l = T.RangeUtils.toPoint(e.selection);
  if (null == l || n === E.getOptionNames(e)[0]) return;
  let {
    command: i,
    commandText: a
  } = M(e);
  !(null == i || null == a || a.endsWith(" ")) && T.PointUtils.equals(l, {
    path: v.FIRST_TEXT_PATH,
    offset: i.displayName.length + 1
  }) && C.SlateTransforms.insertText(e, " ")
}

function P(e, t, n) {
  var i, a, s, r, o;
  let u = null === (a = e.activeCommand) || void 0 === a ? void 0 : null === (i = a.options) || void 0 === i ? void 0 : i.find(e => e.name === n),
    d = e.initialValues[n];
  if (null == u || null == d) return null;
  if (null != u.choices) return null === (o = u.choices.find(e => e.value === d.value)) || void 0 === o ? void 0 : o.displayName;
  let c = null === (s = d.value) || void 0 === s ? void 0 : s.toString();
  return u.type === l.ApplicationCommandOptionType.CHANNEL || u.type === l.ApplicationCommandOptionType.MENTIONABLE && null != p.default.getChannel(c) ? "<#".concat(c, ">	") : u.type === l.ApplicationCommandOptionType.USER || u.type === l.ApplicationCommandOptionType.MENTIONABLE && null != h.default.getUser(c) ? "<@".concat(c, ">") : u.type === l.ApplicationCommandOptionType.ROLE || u.type === l.ApplicationCommandOptionType.MENTIONABLE && (null === (r = m.default.getGuild(t.guild_id)) || void 0 === r ? void 0 : r.getRole(null != c ? c : "")) != null ? "<@&".concat(c, ">") : c
}