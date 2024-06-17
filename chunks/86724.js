"use strict";
n.d(t, {
  L: function() {
    return L
  },
  Z: function() {
    return g
  }
}), n(47120), n(653041), n(757143), n(733860);
var i = n(911969),
  r = n(555573),
  s = n(456007),
  o = n(10718),
  a = n(998698),
  l = n(895924),
  u = n(581364),
  _ = n(509716),
  d = n(826298),
  c = n(592125),
  E = n(430824),
  I = n(594174),
  T = n(91313),
  h = n(53529),
  S = n(925994),
  f = n(436660),
  N = n(887490),
  A = n(42530),
  m = n(981631),
  O = n(665692);
let R = new Set(["applicationCommandOption"]),
  C = new Set([i.jw.ATTACHMENT]),
  p = new Set(["line", "applicationCommand"]);

function g(e, t, n, _) {
  let {
    insertData: c,
    isInline: E,
    isVoid: I,
    onChange: m,
    deleteBackward: g,
    deleteForward: U,
    deleteFragment: b
  } = e;
  e.insertData = n => {
    if (null != t && N.bN.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
      let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
        {
          commandKey: _,
          interactionOptions: d
        } = (0, u.XA)(e),
        {
          application: c,
          command: E
        } = o.Xq(t, _);
      if (null != E) {
        var i, a;
        let e = null != c ? {
          type: l.Qi.APPLICATION,
          id: c.id,
          icon: c.icon,
          name: null !== (a = null === (i = c.bot) || void 0 === i ? void 0 : i.username) && void 0 !== a ? a : c.name,
          application: c
        } : null;
        return r.Po({
          channelId: t.id,
          command: E,
          section: e,
          location: l.Vh.PASTE,
          initialValues: (0, s.Dw)(E, null != d ? d : [])
        }), null
      }
    }
    return c(n)
  }, e.isInline = e => !!R.has(e.type) || E(e), e.isVoid = e => !!("applicationCommandOption" === e.type && C.has(e.optionType)) || I(e), e.deleteBackward = t => {
    P(e, () => g(t))
  }, e.deleteForward = t => {
    P(e, () => U(t))
  }, e.deleteFragment = t => {
    P(e, () => b(t))
  };
  let G = null,
    w = null,
    k = null,
    B = null,
    x = null;
  return e.onChange = () => {
    if (null != t) {
      let s = a.Z.getState(t.id),
        u = o.Hf(t);
      if (N.bN.richValue(e) !== G || !N.Ew.equals(e.selection, w) || s.activeCommand !== k || null == x || u.some((e, t) => x[t] !== e)) {
        let a = h.T.withMergedEntry(e, () => {
          var a;
          return function(e) {
            let {
              editor: t,
              storeCommandState: n,
              channel: s,
              canUseCommands: a,
              canOnlyUseTextCommands: u,
              commandChanged: _,
              previousOptionValues: c
            } = e, {
              command: E,
              commandText: I
            } = M(t), h = n.activeCommand;
            if (!a || u && (null == h ? void 0 : h.inputType) !== l.iw.BUILT_IN_TEXT && (null == h ? void 0 : h.inputType) !== l.iw.BUILT_IN_INTEGRATION) return null != E && L(t, s.id, h, !0), null;
            if (null != E) {
              if (N.bN.isEditorEmpty(t) || null == h) return L(t, s.id, h, !1), null;
              let e = "".concat(O.GI).concat(E.displayName);
              if (null == I || !I.startsWith(e) || 0 === T.cu(t).length && (I.length < e.length + 1 || " " !== I[e.length])) return L(t, s.id, h, !0), null
            } else {
              if (null != h && _) {
                let e = function(e, t, n) {
                    var i, r, s, o, a;
                    let l;
                    let {
                      initialValues: u,
                      activeCommand: _
                    } = n;
                    if (null == _) return null;
                    let d = (null !== (s = null === (i = _.options) || void 0 === i ? void 0 : i.length) && void 0 !== s ? s : 0) > 0 ? T.zb(e, _) : null,
                      c = (0, S.sk)(N.bN.richValue(e), {
                        mode: "raw",
                        range: {
                          anchor: N.bN.start(e, []),
                          focus: null !== (o = null == d ? void 0 : null === (r = d[0]) || void 0 === r ? void 0 : r.keyRange.anchor) && void 0 !== o ? o : N.bN.end(e, [])
                        }
                      }),
                      E = "",
                      I = c.toLocaleLowerCase(),
                      h = "".concat(O.GI).concat(_.displayName).toLocaleLowerCase(),
                      m = "".concat(O.GI).concat(_.name).toLocaleLowerCase();
                    I.startsWith(h) && I.length > h.length ? E = c.substring(h.length).trim() : I.startsWith(m) && I.length > m.length && (E = c.substring(m.length).trim());
                    let R = [],
                      p = null,
                      g = null;
                    if (null != _.options) {
                      let e = new Set;
                      if (null != d)
                        for (let i of d) {
                          e.add(i.name);
                          let r = null !== (a = y(n, t, i.name)) && void 0 !== a ? a : i.text,
                            s = {
                              type: "applicationCommandOption",
                              optionName: i.name,
                              optionDisplayName: i.displayName,
                              optionType: i.type,
                              children: [{
                                text: r
                              }]
                            };
                          R.push(s), 0 === i.text.length && null == p && (p = s)
                        }
                      for (let i of _.options)
                        if (!e.has(i.name) && (i.required || null != u[i.name])) {
                          let e, r;
                          E.length > 0 && !C.has(i.type) ? (e = E, E = "") : e = null != (r = y(n, t, i.name)) ? r : "";
                          let s = {
                            type: "applicationCommandOption",
                            optionName: i.name,
                            optionDisplayName: i.displayName,
                            optionType: i.type,
                            children: [{
                              text: e
                            }]
                          };
                          R.push(s), 0 === e.length && null == p && (p = s), null == r && (g = s)
                        }
                    }
                    l = E.length > 0 ? "".concat(O.GI).concat(_.displayName, " ").concat(E.replace(/\r|\n/g, " ")) : 0 === R.length ? "".concat(O.GI).concat(_.displayName, " ") : "".concat(O.GI).concat(_.displayName), R.unshift({
                      text: l
                    });
                    let L = {
                      type: "applicationCommand",
                      children: R,
                      command: {
                        id: _.id,
                        name: _.name,
                        displayName: _.displayName
                      }
                    };
                    N.bN.withoutNormalizing(e, () => {
                      for (let [, t] of(f.Q.insertNodes(e, [L], {
                          at: A.YD
                        }), N.bN.blocks(e).reverse())) N.C0.isAfter(t, A.YD) && f.Q.removeNodes(e, {
                        at: t,
                        voids: !0
                      })
                    });
                    let D = null;
                    return null != p ? (f.Q.selectCommandOption(e, p.optionName), D = p.optionName) : null != g ? (f.Q.selectCommandOption(e, g.optionName, !1), D = g.optionName) : f.Q.resetSelectionToEnd(e), null == g && v(e, _), D
                  }(t, s, n),
                  i = T.tM(t, h, s.id);
                return D({
                  guildId: s.guild_id,
                  channelId: s.id,
                  command: h,
                  activeOption: e,
                  currentOptionValues: i,
                  previousOptionValues: null,
                  validateAll: !0,
                  allowEmpty: !0
                }), {
                  commandId: h.id,
                  optionValues: i
                }
              }
              if (null != h && !_) return r.Po({
                channelId: s.id,
                command: null,
                section: null
              }), null;
              let e = N.bN.richValue(t)[0],
                a = e.children[0];
              if (p.has(e.type) && N.LC.isText(a)) {
                let e = function(e, t) {
                  if (!e.startsWith("/")) return null;
                  let n = (0, d.hV)(t, e.substring(1));
                  if (!n.hasSpaceTerminator) return null;
                  let {
                    commands: r,
                    sections: s
                  } = o.VB(t, i.yU.CHAT, n.text);
                  if (0 === r.length) return null;
                  let a = n.text.trim(),
                    u = a + " ",
                    _ = r.filter(e => e.inputType !== l.iw.PLACEHOLDER && (e.displayName === a || e.displayName.startsWith(u)));
                  if (1 === _.length && _[0].displayName === a) {
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
                }(a.text, s);
                if (null != e) return r.Po({
                  channelId: s.id,
                  command: e.command,
                  section: e.section
                }), null
              }
            }
            if (null != h && null != E) {
              var m;
              ! function(e, t) {
                if (null == t.options || 0 === t.options.length) return !1;
                let n = T.zb(e, t);
                return 0 !== n.length && (N.bN.withoutNormalizing(e, () => {
                  for (let t = n.length - 1; t >= 0; t--) {
                    let i = n[t];
                    f.Q.textToInline(e, {
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
                  let t = N.bN.getFirstText(e);
                  if (null == t) return !1;
                  let i = t.text.trim();
                  t.text !== i && f.Q.textToText(e, i, {
                    anchor: {
                      path: A.u9,
                      offset: 0
                    },
                    focus: {
                      path: A.u9,
                      offset: t.text.length
                    }
                  })
                }), !0)
              }(t, h) && v(t, h);
              let e = T.tM(t, h, s.id),
                n = N.bN.above(t, {
                  match: e => N.bN.isInline(t, e) && "applicationCommandOption" === e.type,
                  mode: "lowest"
                }),
                i = null !== (m = null == n ? void 0 : n[0].optionName) && void 0 !== m ? m : null;
              return D({
                guildId: s.guild_id,
                channelId: s.id,
                command: h,
                activeOption: i,
                currentOptionValues: e,
                previousOptionValues: c,
                validateAll: !1,
                allowEmpty: !1
              }), {
                commandId: E.id,
                optionValues: e
              }
            }
            return null
          }({
            editor: e,
            storeCommandState: s,
            channel: t,
            canUseCommands: n,
            canOnlyUseTextCommands: _,
            commandChanged: (null === (a = s.activeCommand) || void 0 === a ? void 0 : a.id) !== (null == k ? void 0 : k.id),
            previousOptionValues: B
          })
        });
        if (null != a) {
          let t = h.T.currentEntry(e);
          null != t && (t.commandId = a.commandId), B = a.optionValues
        } else B = null;
        G = N.bN.richValue(e), w = e.selection, k = s.activeCommand, x = u
      }
    }
    m()
  }, e
}

function L(e, t, n, i) {
  let [s] = N.bN.blocks(e)[0], o = (i ? (0, S.sg)(s, {
    mode: "plain"
  }).trimEnd() : "").split("\n").map(e => ({
    type: "line",
    children: [{
      text: e
    }]
  })), a = [o.length - 1];
  for (let [, t] of(f.Q.insertNodes(e, o, {
      at: A.YD
    }), N.bN.blocks(e).reverse())) N.C0.isAfter(t, a) && f.Q.removeNodes(e, {
    at: t,
    voids: !0
  });
  null != n && r.Po({
    channelId: t,
    command: null,
    section: null
  })
}

function v(e, t) {
  if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || C.has(t.options[0].type) || T.cu(e).length > 0 || null == T.cr(e)) return !1;
  let n = N.bN.getFirstText(e);
  if (null == n) return !1;
  let i = t.options[0],
    r = {
      path: A.u9,
      offset: t.displayName.length + 2
    },
    s = {
      path: A.u9,
      offset: n.text.length
    };
  return !(!n.text.startsWith("".concat(O.GI).concat(t.displayName, " ").toLocaleLowerCase()) || N.Jz.equals(r, s)) && (f.Q.textToInline(e, {
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

function D(e) {
  let {
    guildId: t,
    channelId: n,
    command: i,
    activeOption: s,
    currentOptionValues: o,
    previousOptionValues: l,
    validateAll: u,
    allowEmpty: d
  } = e;
  if (null == i.options) return !1;
  let c = u ? null : a.Z.getActiveOptionName(n),
    E = {},
    I = a.Z.getOptionStates(n),
    T = !1;
  for (let e of i.options) {
    var h, S, f;
    let i = I[e.name],
      r = u || e.name === c && c !== s || (null == i ? void 0 : null === (h = i.lastValidationResult) || void 0 === h ? void 0 : h.success) === !1 && (null == o ? void 0 : o[e.name]) !== (null == l ? void 0 : l[e.name]),
      a = {
        hasValue: null != o && e.name in o,
        isActive: e.name === s,
        lastValidationResult: r ? (0, _.f)({
          option: e,
          content: null !== (f = null == o ? void 0 : o[e.name]) && void 0 !== f ? f : null,
          guildId: t,
          channelId: n,
          allowEmptyValues: d
        }) : null == i ? void 0 : i.lastValidationResult
      };
    (null == i || i.hasValue !== a.hasValue || i.isActive !== a.isActive || r && (null === (S = i.lastValidationResult) || void 0 === S ? void 0 : S.success) === !1) && (E[e.name] = a, T = !0)
  }
  T && r.g7(n, E)
}

function M(e) {
  let t = T.cr(e);
  if (null == t) return {
    command: null,
    commandText: null
  };
  let [n] = t, i = n.children[0];
  return N.LC.isText(i) ? {
    command: n.command,
    commandText: i.text
  } : {
    command: n.command,
    commandText: null
  }
}

function P(e, t) {
  let n = T.cu(e)[0];
  t();
  let i = N.M8.toPoint(e.selection);
  if (null == i || n === T.cu(e)[0]) return;
  let {
    command: r,
    commandText: s
  } = M(e);
  if (!(null == r || null == s || s.endsWith(" ")) && !!N.Jz.equals(i, {
      path: A.u9,
      offset: r.displayName.length + 1
    })) f.Q.insertText(e, " ")
}

function y(e, t, n) {
  var r, s, o, a;
  let l = null === (s = e.activeCommand) || void 0 === s ? void 0 : null === (r = s.options) || void 0 === r ? void 0 : r.find(e => e.name === n),
    u = e.initialValues[n];
  if (null == l || null == u) return null;
  if (null != l.choices) return null === (a = l.choices.find(e => e.value === u.value)) || void 0 === a ? void 0 : a.displayName;
  let _ = null === (o = u.value) || void 0 === o ? void 0 : o.toString();
  return l.type === i.jw.CHANNEL || l.type === i.jw.MENTIONABLE && null != c.Z.getChannel(_) ? "<#".concat(_, ">	") : l.type === i.jw.USER || l.type === i.jw.MENTIONABLE && null != I.default.getUser(_) ? "<@".concat(_, ">") : l.type === i.jw.ROLE || l.type === i.jw.MENTIONABLE && null != E.Z.getRole(t.guild_id, null != _ ? _ : m.lds) ? "<@&".concat(_, ">") : _
}