"use strict";
let l, i, o;
n.r(t), n.d(t, {
  filterEmpty: function() {
    return u
  },
  getString: function() {
    return c
  },
  getOptionalString: function() {
    return d
  },
  normalizeNumericString: function() {
    return p
  },
  getInitialValuesFromInteractionOptions: function() {
    return m
  }
}), n("781738"), n("222007"), n("627445");
var a = n("798609"),
  r = n("841362"),
  s = n("655518");

function u(e) {
  return null == e ? [] : e.filter((t, n) => "text" !== t.type || (n > 0 && n < e.length - 1 ? "" !== t.text : "" !== t.text.trim()))
}

function c(e, t) {
  let n = e[t],
    l = "";
  for (let e of n) switch (e.type) {
    case "text":
    case "textMention":
      l += e.text;
      break;
    case "userMention":
      l += "<@".concat(e.userId, ">");
      break;
    case "channelMention":
      l += "<#".concat(e.channelId, ">");
      break;
    case "roleMention":
      l += "<@&".concat(e.roleId, ">");
      break;
    case "emoji":
      l += e.surrogate;
      break;
    case "customEmoji":
      l += "<".concat(e.animated ? "a" : "", ":").concat(e.name.replace(/:/g, "").split("~")[0], ":").concat(e.emojiId, ">")
  }
  return l
}

function d(e, t) {
  return null == e[t] ? null : c(e, t)
}

function p(e, t) {
  if (e !== o) {
    var n;
    o = e;
    let {
      group: t,
      decimal: a
    } = null !== (n = r.numberParts[e]) && void 0 !== n ? n : r.numberParts["en-US"];
    l = RegExp(s.default.escape(t), "g"), i = RegExp(s.default.escape(a), "g")
  }
  return t.replace(l, "").replace(i, ".")
}

function m(e, t) {
  let n = {};
  for (let i of t) {
    var l;
    let t = null === (l = e.options) || void 0 === l ? void 0 : l.find(e => e.name === i.name);
    if (i.type !== a.ApplicationCommandOptionType.ATTACHMENT)(null == t || !t.autocomplete) && (n[i.name] = i)
  }
  return n
}
n("317041")