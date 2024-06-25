"use strict";
n.d(t, {
  sg: function() {
    return f
  },
  sk: function() {
    return T
  }
}), n(47120), n(653041), n(757143);
var i = n(512722),
  r = n.n(i),
  s = n(933557),
  o = n(660199),
  a = n(763296),
  l = n(592125),
  u = n(430824),
  _ = n(699516),
  c = n(914010),
  d = n(594174),
  E = n(51144),
  I = n(887490);

function T(e, t) {
  let {
    mode: n,
    ignoreTrailingEmptyNodes: i,
    preventEmojiSurrogates: r
  } = null != t ? t : {}, [s, o] = (null == t ? void 0 : t.range) != null ? I.M8.edges(t.range) : [void 0, void 0];
  return h(e, {
    mode: n,
    start: s,
    end: o,
    ignoreTrailingEmptyNodes: i,
    preventEmojiSurrogates: r
  })
}

function h(e, t) {
  var n, i;
  let {
    mode: r,
    start: s,
    end: o,
    separator: a,
    ignoreEmptyNodes: l,
    ignoreTrailingEmptyNodes: u,
    preventEmojiSurrogates: _
  } = null != t ? t : {}, c = e.length > 0 && !I.LC.isText(e[0]);
  null == a && (a = c ? "\n" : "");
  let d = null !== (n = null == s ? void 0 : s.path[0]) && void 0 !== n ? n : 0,
    E = null !== (i = null == o ? void 0 : o.path[0]) && void 0 !== i ? i : e.length - 1;
  if (u)
    for (let t = E; t >= d; t--) {
      let n = e[t];
      if (I.LC.isText(n)) {
        if (n.text.length > 0) {
          E = t;
          break
        }
      } else if (!I.q.isEmpty(n)) {
        E = t;
        break
      }
      if (t === d) return ""
    }
  let T = d > 0 && I.aj.isType(e[d - 1], "blockQuote"),
    h = I.aj.isType(e[d], "blockQuote"),
    S = I.aj.isType(e[E], "blockQuote"),
    A = [];
  for (let t = d; t <= E; t++) {
    let n = e[t];
    if (l && I.LC.isText(n) && 0 === n.text.length) continue;
    let i = null != s && t === d ? {
        path: s.path.slice(1),
        offset: s.offset
      } : void 0,
      a = null != o && t === E ? {
        path: o.path.slice(1),
        offset: o.offset
      } : void 0,
      u = f(n, {
        mode: r,
        start: i,
        end: a,
        allowBlockQuotePrefix: null == s || null == o || !T && (!h || S),
        preventEmojiSurrogates: _
      });
    (!l || u.length > 0) && A.push(u)
  }
  return A.join(a)
}

function f(e, t) {
  let {
    mode: n,
    start: i,
    allowBlockQuotePrefix: T = !1,
    preventEmojiSurrogates: f = !1
  } = null != t ? t : {};
  if (I.LC.isText(e)) return function(e, t) {
    var n, i;
    let {
      start: s,
      end: o
    } = null != t ? t : {};
    return r()(null == s || 0 === s.path.length, "Invalid start provided to serializeText"), r()(null == o || 0 === o.path.length, "Invalid end provided to serializeText"), e.substring(null !== (n = null == s ? void 0 : s.offset) && void 0 !== n ? n : 0, null !== (i = null == o ? void 0 : o.offset) && void 0 !== i ? i : e.length)
  }(e.text, t);
  switch (e.type) {
    case "line":
    case "testInline":
      return h(e.children, t);
    case "testInlineVoid":
      return "";
    case "blockQuote": {
      let n = h(e.children, t),
        r = null != i && 1 === i.path.length && 0 === i.path[0] && 0 === i.offset;
      if (T && (null == i || r)) return "> ".concat(n);
      return n
    }
    case "emoji": {
      let t = e.emoji;
      if (!f && null != t.surrogate) return t.surrogate;
      return t.name
    }
    case "customEmoji": {
      let t = e.emoji;
      if ("raw" === n) {
        let e = t.animated ? "a" : "",
          n = t.name.replace(/:/g, "").split("~")[0];
        return "<".concat(e, ":").concat(n, ":").concat(t.emojiId, ">")
      }
      return t.name
    }
    case "textMention":
      return e.name;
    case "channelMention": {
      let t = "<#".concat(e.channelId, ">");
      if ("raw" === n) return t;
      let i = l.Z.getChannel(e.channelId);
      if (null == i) return t;
      return (0, s.F6)(i, d.default, _.Z, !0, !0)
    }
    case "soundboard": {
      let t = "<sound:".concat(e.soundId, ">");
      if ("raw" === n) return t;
      let i = a.Z.getSoundById(e.soundId);
      if (null == i) return t;
      return i.name
    }
    case "staticRouteLink": {
      let t = "<id:".concat(e.channelId, ">");
      if ("raw" === n) return t;
      let i = l.Z.getChannel(e.channelId);
      if (null == i) return t;
      return (0, s.F6)(i, d.default, _.Z, !0, !0)
    }
    case "roleMention": {
      let t = "<@&".concat(e.roleId, ">");
      if ("raw" === n) return t;
      let i = c.Z.getGuildId(),
        r = null != i ? u.Z.getRole(i, e.roleId) : void 0;
      if (null == r) return t;
      return "@".concat(r.name)
    }
    case "userMention": {
      let t = "<@".concat(e.userId, ">");
      if ("raw" === n) return t;
      let i = d.default.getUser(e.userId);
      if (null == i) return t;
      return "@".concat(E.ZP.getUserTag(i, {
        decoration: "never"
      }))
    }
    case "commandMention":
      return "</".concat(e.commandName, ":").concat(e.commandId, ">");
    case "timestamp":
      return (0, o.He)(e.parsed.timestamp, e.parsed.format);
    case "applicationCommand":
      return h(e.children, {
        ...t,
        separator: " ",
        ignoreEmptyNodes: !0
      });
    case "applicationCommandOption": {
      let n = h(e.children, t);
      if (null == i) return "".concat(e.optionDisplayName, ":").concat(n);
      return n
    }
  }
}