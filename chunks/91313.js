"use strict";
n.r(t), n.d(t, {
  findTextOptions: function() {
    return N
  },
  getCommandBlock: function() {
    return I
  },
  getCurrentCommandOption: function() {
    return T
  },
  getOptionNames: function() {
    return f
  },
  getOptionValues: function() {
    return S
  },
  optionToValues: function() {
    return h
  },
  validateOption: function() {
    return m
  },
  validateOptionValues: function() {
    return A
  }
}), n("653041"), n("47120");
var i = n("911969"),
  r = n("555573"),
  s = n("998698"),
  a = n("509716"),
  o = n("703558"),
  l = n("117530"),
  u = n("752305"),
  d = n("925994"),
  _ = n("887490"),
  c = n("42530");
let E = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;

function I(e) {
  let t = _.EditorUtils.richValue(e)[0];
  return null == t || "applicationCommand" !== t.type ? null : [t, c.FIRST_BLOCK_PATH]
}

function T(e) {
  var t, n;
  if (null == e.selection) return null;
  let i = null !== (t = _.EditorUtils.above(e, {
    at: e.selection.focus,
    match: e => _.NodeUtils.isType(e, "applicationCommandOption")
  })) && void 0 !== t ? t : null;
  return null != i || _.RangeUtils.isCollapsed(e.selection) ? i : null !== (n = _.EditorUtils.above(e, {
    at: e.selection.anchor,
    match: e => _.NodeUtils.isType(e, "applicationCommandOption")
  })) && void 0 !== n ? n : null
}

function f(e) {
  let t = I(e),
    n = [],
    i = null == t ? void 0 : t[0].children;
  if (null != i)
    for (let e of i) _.NodeUtils.isType(e, "applicationCommandOption") && n.push(e.optionName);
  return n
}

function S(e, t, n) {
  let i = {};
  if (null == t.options) return {};
  let r = I(e),
    s = Object.fromEntries(t.options.map(e => [e.name, e])),
    a = null == r ? void 0 : r[0].children;
  if (null != a) {
    for (let t of a)
      if (_.NodeUtils.isType(t, "applicationCommandOption")) {
        let r = s[t.optionName];
        null != r && (i[t.optionName] = h(e, r, t, n))
      }
  }
  return i
}

function h(e, t, n, r) {
  let s = n.children.map(n => {
    if (t.type === i.ApplicationCommandOptionType.ATTACHMENT) {
      let e = l.default.getUpload(r, t.name, o.DraftType.SlashCommand);
      if (null != e) {
        var s;
        return {
          type: "text",
          text: null !== (s = e.filename) && void 0 !== s ? s : ""
        }
      }
    }
    if (_.TextUtils.isText(n)) return {
      type: "text",
      text: n.text
    };
    if (_.EditorUtils.isVoid(e, n)) {
      let e = (0, u.voidToOptionValue)(n);
      if (null != e) return e
    }
    return {
      type: "text",
      text: (0, d.serializeDescendant)(n, {
        mode: "raw"
      })
    }
  });
  if (t.type !== i.ApplicationCommandOptionType.STRING) {
    for (; s.length > 0 && "text" === s[0].type && "" === s[0].text.trim();) s.shift();
    for (; s.length > 0 && "text" === s[s.length - 1].type && "" === s[s.length - 1].text.trim();) s.pop()
  }
  return s
}

function A(e, t, n, i, s) {
  if (null == e.options) return {};
  let o = Object.fromEntries(e.options.map(e => {
    var r;
    return [e.name, a.validateOptionContent({
      option: e,
      content: null !== (r = i[e.name]) && void 0 !== r ? r : null,
      guildId: t,
      channelId: n,
      allowEmptyValues: s
    })]
  }));
  return r.updateOptionValidationStates(n, o), o
}

function m(e, t, n, i, o) {
  var l;
  let [u] = i, d = s.default.getActiveCommand(n), _ = null == d ? void 0 : null === (l = d.options) || void 0 === l ? void 0 : l.find(e => e.name === u.optionName);
  if (null == _) return;
  let c = h(e, _, u, n),
    E = a.validateOptionContent({
      option: _,
      content: c,
      guildId: t,
      channelId: n,
      allowEmptyValues: o
    });
  return r.updateOptionStates(n, {
    [u.optionName]: {
      lastValidationResult: E
    }
  }), E
}

function N(e, t) {
  if (null == t.options || 0 === t.options.length) return [];
  let n = _.EditorUtils.richValue(e),
    i = [],
    r = new Set(f(e)),
    s = {},
    a = new Set;
  for (let e of t.options) s[e.displayName] = e, !r.has(e.name) && a.add(e.displayName);
  let o = null;
  for (let t = 0; t < n.length; t++) {
    let r = n[t];
    if ("line" === r.type || "applicationCommand" === r.type)
      for (let u = 0; u < r.children.length; u++) {
        let c;
        let I = r.children[u],
          T = [t, u];
        if (_.NodeUtils.isType(I, "applicationCommandOption")) {
          if (null != o) {
            var l;
            o.valueRange.focus = null !== (l = _.EditorUtils.before(e, T)) && void 0 !== l ? l : _.EditorUtils.start(e, []), o.text = (0, d.toTextValue)(n, {
              mode: "raw",
              range: o.valueRange
            }).trim(), i.push(o), o = null
          }
          continue
        }
        if (!!_.TextUtils.isText(I))
          for (E.lastIndex = 0; null != (c = E.exec(I.text));) {
            if (0 !== c.index && null == I.text.charAt(c.index - 1).match(/(\t|\s)/)) continue;
            let e = c[1];
            if (!a.has(e)) continue;
            a.delete(e);
            let t = s[e];
            if (null == t) continue;
            let r = {
                path: T,
                offset: c.index
              },
              l = {
                path: T,
                offset: r.offset + c[0].length
              },
              u = {
                path: T,
                offset: l.offset
              },
              _ = {
                name: t.name,
                displayName: t.displayName,
                type: t.type,
                keyRange: {
                  anchor: r,
                  focus: l
                },
                valueRange: {
                  anchor: u,
                  focus: u
                },
                text: ""
              };
            null != o && (o.valueRange.focus = _.keyRange.anchor, o.text = (0, d.toTextValue)(n, {
              mode: "raw",
              range: o.valueRange
            }).trim(), i.push(o)), o = _
          }
      }
  }
  return null != o && (o.valueRange.focus = _.EditorUtils.end(e, []), o.text = (0, d.toTextValue)(n, {
    mode: "raw",
    range: o.valueRange
  }).trim(), i.push(o)), i
}