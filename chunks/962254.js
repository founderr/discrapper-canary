"use strict";
n.r(t), n.d(t, {
  getOptions: function() {
    return d
  },
  findMatchingAutocompleteType: function() {
    return f
  },
  findCommandOptionAutocompleteType: function() {
    return p
  }
}), n("222007"), n("70102");
var l = n("913144"),
  i = n("798609"),
  a = n("389153"),
  s = n("149022"),
  r = n("237700"),
  o = n("851745"),
  u = n("958706");

function d(e) {
  var t;
  let {
    activeCommandOption: n,
    canMentionUsers: l = !0,
    canMentionRoles: r = !0,
    canMentionChannels: u = !0,
    canMentionEveryone: d,
    canMentionClyde: c = !1,
    useNewSlashCommands: f,
    canOnlyUseTextCommands: p,
    canSendStickers: m,
    hideMentionDescription: h,
    hidePersonalInformation: E,
    type: S,
    emojiIntention: g,
    editorRef: C,
    onSendMessage: T,
    onSendSticker: v,
    setValue: I
  } = e, _ = {
    mentions: {
      channel: o.ChannelMentionMode.DENY,
      global: o.GlobalMentionMode.DENY,
      role: o.RoleMentionMode.DENY,
      user: o.UserMentionMode.DENY,
      clyde: o.ClydeMentionMode.DENY
    },
    commands: o.CommandMode.DISABLED,
    allowStickers: !0 === m,
    forNonStringCommandOption: null != n && n.type !== i.ApplicationCommandOptionType.STRING,
    hideMentionDescription: !0 === h,
    hidePersonalInformation: !0 === E,
    chatInputType: S,
    emojiIntention: g,
    sendMessage: T,
    sendSticker: v,
    insertText: (e, t) => {
      var n;
      null === (n = C.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e)
    },
    replaceText: (e, t) => {
      I(e, null != t ? t : (0, s.toRichValue)(e))
    },
    getCommandOptionValues: () => {
      var e;
      return null === (e = C.current) || void 0 === e ? void 0 : e.getCommandOptionValues()
    }
  };
  if (null != n) {
    let e = (0, a.getApplicationCommandOptionQueryOptions)(n);
    e.canMentionChannels && (_.mentions.channel = o.ChannelMentionMode.ALLOW_SELECTABLE), e.canMentionEveryone && (_.mentions.global = e.canMentionHere ? o.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE : o.GlobalMentionMode.ALLOW_EVERYONE), e.canMentionRoles && (_.mentions.role = e.canMentionNonMentionableRoles ? o.RoleMentionMode.ALLOW_ALL : o.RoleMentionMode.ALLOW_MENTIONABLE), e.canMentionUsers && (_.mentions.user = e.canMentionAnyGuildUser ? o.UserMentionMode.ALLOW_GUILD : o.UserMentionMode.ALLOW_CHANNEL), _.hideMentionDescription = !0
  } else u && (_.mentions.channel = o.ChannelMentionMode.ALLOW_SELECTABLE), r && (_.mentions.role = o.RoleMentionMode.ALLOW_MENTIONABLE), l && (_.mentions.user = o.UserMentionMode.ALLOW_CHANNEL), d && (_.mentions.global = o.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE), c && (_.mentions.clyde = o.ClydeMentionMode.ALLOW);
  return (null === (t = S.commands) || void 0 === t ? void 0 : t.enabled) && (f ? _.commands = p ? o.CommandMode.NEW_TEXT_ONLY : o.CommandMode.NEW : _.commands = o.CommandMode.OLD_BUILT_INS), null != n && null != n.channelTypes && (_.allowedChannelTypes = n.channelTypes), _
}

function c(e) {
  let {
    type: t,
    channel: n,
    guild: l,
    query: i,
    isAtStart: a,
    options: s
  } = e, o = r.AUTOCOMPLETE_OPTIONS[t];
  if (null != o.sentinel) {
    if (!i.startsWith(o.sentinel)) return !1;
    i = i.substring(o.sentinel.length)
  }
  return !!(null == o.matches || o.matches(n, l, i, a, s)) || !1
}

function f(e) {
  let {
    channel: t,
    guild: n,
    options: i,
    currentWord: a,
    currentWordIsAtStart: s,
    textValue: d,
    optionText: f
  } = e, p = null;
  for (let e of r.AUTOCOMPLETE_PRIORITY) {
    var m, h, E, S, g, C;
    let T = r.AUTOCOMPLETE_OPTIONS[e];
    if (e === o.AutocompleteOptionTypes.GIFS || e === o.AutocompleteOptionTypes.CHOICES) {
      if (i.commands === o.CommandMode.OLD_BUILT_INS) {
        if (c({
            type: e,
            channel: t,
            guild: n,
            query: d,
            isAtStart: !1,
            options: i
          })) {
          p = {
            type: e,
            typeInfo: T,
            query: d
          };
          break
        }
      } else if (c({
          type: e,
          channel: t,
          guild: n,
          query: f,
          isAtStart: !1,
          options: i
        })) return {
        type: e,
        typeInfo: T,
        query: f
      }
    } else if (e === o.AutocompleteOptionTypes.COMMANDS && i.commands !== o.CommandMode.OLD_BUILT_INS) {
      if (c({
          type: e,
          channel: t,
          guild: n,
          query: d,
          isAtStart: !0,
          options: i
        })) {
        p = {
          type: e,
          typeInfo: T,
          query: d.substring(null !== (h = null === (m = T.sentinel) || void 0 === m ? void 0 : m.length) && void 0 !== h ? h : 0)
        };
        break
      }
    } else if (e === o.AutocompleteOptionTypes.LEGACY_COMMANDS) {
      if (c({
          type: e,
          channel: t,
          guild: n,
          query: d,
          isAtStart: s,
          options: i
        })) {
        p = {
          type: e,
          typeInfo: T,
          query: d
        };
        break
      }
    } else if (e === o.AutocompleteOptionTypes.EMOJIS_AND_STICKERS) {
      if (null != a && a.length > 0 && l.default.dispatch({
          type: "EMOJI_INTERACTION_INITIATED",
          interaction: u.EmojiInteractionPoint.AutocompleteTyped
        }), null != a && c({
          type: e,
          channel: t,
          guild: n,
          query: a,
          isAtStart: s,
          options: i
        })) {
        p = {
          type: e,
          typeInfo: T,
          query: a.substring(null !== (S = null === (E = T.sentinel) || void 0 === E ? void 0 : E.length) && void 0 !== S ? S : 0)
        };
        break
      }
    } else if (null != a && c({
        type: e,
        channel: t,
        guild: n,
        query: a,
        isAtStart: s,
        options: i
      })) {
      p = {
        type: e,
        typeInfo: T,
        query: a.substring(null !== (C = null === (g = T.sentinel) || void 0 === g ? void 0 : g.length) && void 0 !== C ? C : 0)
      };
      break
    }
  }
  return null == p ? null : (p.query = p.query.toLocaleLowerCase(), p)
}

function p(e, t) {
  let n;
  if (null == t || null == e) return null;
  if (null != e.choices || e.autocomplete) n = o.AutocompleteOptionTypes.CHOICES;
  else switch (e.type) {
    case i.ApplicationCommandOptionType.BOOLEAN:
      n = o.AutocompleteOptionTypes.CHOICES;
      break;
    case i.ApplicationCommandOptionType.CHANNEL:
      n = o.AutocompleteOptionTypes.CHANNELS;
      break;
    case i.ApplicationCommandOptionType.ROLE:
    case i.ApplicationCommandOptionType.USER:
    case i.ApplicationCommandOptionType.MENTIONABLE:
      n = o.AutocompleteOptionTypes.MENTIONS;
      break;
    default:
      return null
  }
  let l = r.AUTOCOMPLETE_OPTIONS[n];
  return {
    type: n,
    typeInfo: l,
    query: t
  }
}