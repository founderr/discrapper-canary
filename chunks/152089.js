"use strict";
n.d(t, {
  FW: function() {
    return _
  },
  fZ: function() {
    return d
  },
  py: function() {
    return E
  }
}), n(47120), n(411104);
var i = n(911969),
  r = n(581364),
  s = n(752305),
  o = n(130402),
  a = n(365704),
  l = n(590921),
  u = n(185923);

function _(e) {
  var t;
  let {
    activeCommandOption: n,
    canMentionUsers: o = !0,
    canMentionRoles: a = !0,
    canMentionChannels: u = !0,
    canMentionEveryone: _,
    canMentionClyde: c = !1,
    useNewSlashCommands: d,
    canOnlyUseTextCommands: E,
    canSendStickers: I,
    hideMentionDescription: T,
    hidePersonalInformation: h,
    type: f,
    emojiIntention: S,
    editorRef: N,
    onSendMessage: A,
    onSendSticker: m,
    setValue: O
  } = e, p = {
    mentions: {
      channel: l.nS.DENY,
      global: l.VV.DENY,
      role: l.Fw.DENY,
      user: l.h3.DENY,
      clyde: l.cz.DENY
    },
    commands: l.L8.DISABLED,
    allowStickers: !0 === I,
    forNonStringCommandOption: null != n && n.type !== i.jw.STRING,
    hideMentionDescription: !0 === T,
    hidePersonalInformation: !0 === h,
    chatInputType: f,
    emojiIntention: S,
    sendMessage: A,
    sendSticker: m,
    insertText: (e, t) => {
      var n;
      null === (n = N.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e)
    },
    replaceText: (e, t) => {
      O(e, null != t ? t : (0, s.JM)(e))
    },
    getCommandOptionValues: () => {
      var e;
      return null === (e = N.current) || void 0 === e ? void 0 : e.getCommandOptionValues()
    }
  };
  if (null != n) {
    let e = (0, r.$z)(n);
    e.canMentionChannels && (p.mentions.channel = l.nS.ALLOW_SELECTABLE), e.canMentionEveryone && (p.mentions.global = e.canMentionHere ? l.VV.ALLOW_EVERYONE_OR_HERE : l.VV.ALLOW_EVERYONE), e.canMentionRoles && (p.mentions.role = e.canMentionNonMentionableRoles ? l.Fw.ALLOW_ALL : l.Fw.ALLOW_MENTIONABLE), e.canMentionUsers && (p.mentions.user = e.canMentionAnyGuildUser ? l.h3.ALLOW_GUILD : l.h3.ALLOW_CHANNEL), p.hideMentionDescription = !0
  } else u && (p.mentions.channel = l.nS.ALLOW_SELECTABLE), a && (p.mentions.role = l.Fw.ALLOW_MENTIONABLE), o && (p.mentions.user = l.h3.ALLOW_CHANNEL), _ && (p.mentions.global = l.VV.ALLOW_EVERYONE_OR_HERE), c && (p.mentions.clyde = l.cz.ALLOW);
  return (null === (t = f.commands) || void 0 === t ? void 0 : t.enabled) && (d ? p.commands = E ? l.L8.NEW_TEXT_ONLY : l.L8.NEW : p.commands = l.L8.OLD_BUILT_INS), null != n && null != n.channelTypes && (p.allowedChannelTypes = n.channelTypes), p
}

function c(e) {
  let {
    type: t,
    channel: n,
    guild: i,
    query: r,
    isAtStart: s,
    options: o
  } = e, l = a.W[t];
  if (null != l.sentinel) {
    if (!r.startsWith(l.sentinel)) return !1;
    r = r.substring(l.sentinel.length)
  }
  return !!(null == l.matches || l.matches(n, i, r, s, o)) || !1
}

function d(e) {
  let {
    channel: t,
    guild: n,
    options: i,
    currentWord: r,
    currentWordIsAtStart: s,
    textValue: _,
    optionText: d
  } = e, E = null;
  for (let e of a.R) {
    var I, T, h, f, S, N;
    let A = a.W[e];
    if (e === l.eq.GIFS || e === l.eq.CHOICES) {
      if (i.commands === l.L8.OLD_BUILT_INS) {
        if (c({
            type: e,
            channel: t,
            guild: n,
            query: _,
            isAtStart: !1,
            options: i
          })) {
          E = {
            type: e,
            typeInfo: A,
            query: _
          };
          break
        }
      } else if (c({
          type: e,
          channel: t,
          guild: n,
          query: d,
          isAtStart: !1,
          options: i
        })) return {
        type: e,
        typeInfo: A,
        query: d
      }
    } else if (e === l.eq.COMMANDS && i.commands !== l.L8.OLD_BUILT_INS) {
      if (c({
          type: e,
          channel: t,
          guild: n,
          query: _,
          isAtStart: !0,
          options: i
        })) {
        E = {
          type: e,
          typeInfo: A,
          query: _.substring(null !== (T = null === (I = A.sentinel) || void 0 === I ? void 0 : I.length) && void 0 !== T ? T : 0)
        };
        break
      }
    } else if (e === l.eq.LEGACY_COMMANDS) {
      if (c({
          type: e,
          channel: t,
          guild: n,
          query: _,
          isAtStart: s,
          options: i
        })) {
        E = {
          type: e,
          typeInfo: A,
          query: _
        };
        break
      }
    } else if (e === l.eq.EMOJIS_AND_STICKERS) {
      if (null != r && r.length > 0 && (0, o.x)(u.qR.AutocompleteTyped), null != r && c({
          type: e,
          channel: t,
          guild: n,
          query: r,
          isAtStart: s,
          options: i
        })) {
        E = {
          type: e,
          typeInfo: A,
          query: r.substring(null !== (f = null === (h = A.sentinel) || void 0 === h ? void 0 : h.length) && void 0 !== f ? f : 0)
        };
        break
      }
    } else if (null != r && c({
        type: e,
        channel: t,
        guild: n,
        query: r,
        isAtStart: s,
        options: i
      })) {
      E = {
        type: e,
        typeInfo: A,
        query: r.substring(null !== (N = null === (S = A.sentinel) || void 0 === S ? void 0 : S.length) && void 0 !== N ? N : 0)
      };
      break
    }
  }
  return null == E ? null : (E.query = E.query.toLocaleLowerCase(), E)
}

function E(e, t) {
  let n;
  if (null == t || null == e) return null;
  if (null != e.choices || e.autocomplete) n = l.eq.CHOICES;
  else switch (e.type) {
    case i.jw.BOOLEAN:
      n = l.eq.CHOICES;
      break;
    case i.jw.CHANNEL:
      n = l.eq.CHANNELS;
      break;
    case i.jw.ROLE:
    case i.jw.USER:
    case i.jw.MENTIONABLE:
      n = l.eq.MENTIONS;
      break;
    default:
      return null
  }
  let r = a.W[n];
  return {
    type: n,
    typeInfo: r,
    query: t
  }
}