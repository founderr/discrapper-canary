"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Q
  }
}), n("222007"), n("808653"), n("424973"), n("881410");
var l = n("917351"),
  r = n.n(l),
  a = n("404828"),
  i = n.n(a),
  u = n("679653"),
  o = n("385976"),
  s = n("867805"),
  c = n("252931"),
  d = n("888198"),
  f = n("290689"),
  p = n("804888"),
  h = n("401690"),
  m = n("845579"),
  g = n("42203"),
  E = n("923959"),
  C = n("26989"),
  y = n("305961"),
  L = n("957255"),
  A = n("27618"),
  S = n("102985"),
  _ = n("697218"),
  T = n("25292"),
  I = n("402671"),
  N = n("158998"),
  v = n("49111"),
  R = n("958706"),
  b = n("782340");

function M(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  if (t[0] !== e) return null;
  let r = t.substr(e.length);
  return n.sortBy(e => {
    let {
      text: t
    } = e;
    return -t.length
  }).filter(e => {
    let {
      text: n
    } = e;
    return 1 === t.toLowerCase().indexOf(n.toLowerCase())
  }).sortBy(e => {
    let {
      text: t
    } = e;
    return t === r ? 0 : 1
  }).map(t => {
    let {
      id: n,
      text: r
    } = t;
    return [e + r, n, l]
  }).first()
}

function x(e) {
  return {
    order: e.order,
    match: e.match,
    parse: t => ({
      type: e.type,
      content: t[0]
    })
  }
}

function U(e) {
  return {
    match: i.anyScopeRegex(e),
    parse: e => ({
      type: "text",
      content: e[0]
    })
  }
}
let O = d.default.RULES,
  D = f.default,
  G = /^<@!?(\d+)>/,
  P = /^<@&(\d+)>/,
  w = /^<#(\d+)>/,
  k = /^<a?:(\w+):(\d+)>/,
  F = /(@everyone|@here|@Clyde)\b/,
  q = {
    link: x(i.defaultRules.link),
    autolink: x(i.defaultRules.autolink),
    url: x(i.defaultRules.url),
    inlineCode: x(O.inlineCode),
    codeBlock: x(O.codeBlock),
    rawUserMention: U(G),
    rawRoleMention: U(P),
    rawChannelMention: U(w),
    rawEmoji: U(k),
    mention: {
      match(e, t, n) {
        let l = n.split(" ").pop() + e;
        if (/^[^ ]+@[^ ]+\.[^ .]+/.test(l)) return null;
        let r = M("@", e, t.users, "mention");
        if (r || (r = M("@", e, t.mentionableRoles, "roleMention"))) return r;
        let a = t.users.map(e => ({
          ...e,
          text: e.text.split("#")[0]
        }));
        if (!(r = M("@", e, a, "mention"))) return null;
        let i = F.exec(e);
        if (null != i && r[0].length <= i[0].length) return null;
        if ("" === n && (0, p.canSuppressNotifications)()) {
          let t = p.SILENT_RE.exec(e);
          if (null != t && r[0].length <= t[0].length) return null
        }
        return r
      },
      parse(e) {
        let [, t, n] = e, l = "@";
        return "roleMention" === n && (l += "&"), {
          type: n,
          content: "<".concat(l).concat(t, ">")
        }
      }
    },
    channel: {
      match: (e, t) => (function(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (t[0] !== e) return null;
        if ('"' !== t[1]) return M(e, t, n, l);
        let r = 2;
        for (; r < t.length; r++) {
          if ("\\" === t[r]) {
            r++;
            continue
          }
          if ('"' === t[r]) break
        }
        let a = t.substring(0, r + 1),
          i = (0, u.unescapeChannelName)(t.substring(2, r));
        return n.sortBy(e => {
          let {
            text: t
          } = e;
          return -t.length
        }).filter(e => {
          let {
            text: t
          } = e;
          return i === t
        }).map(e => {
          let {
            id: t
          } = e;
          return [a, t, l]
        }).first()
      })("#", e, t.channels),
      parse: e => ({
        type: "text",
        content: "<#".concat(e[1], ">")
      })
    },
    emoticon: {
      match(e, t, n) {
        if (!m.ConvertEmoticons.getSetting() || 0 !== n.length && !/\s$/.test(n)) return null;
        let l = s.default.EMOJI_SHORTCUT_RE.exec(e);
        return null == l || l[0].length !== e.length && " " !== e[l[0].length] && "\n" !== e[l[0].length] ? null : l
      },
      parse: e => ({
        type: "emoticon",
        content: s.default.convertShortcutToName(e[1]),
        isShortcut: !0
      })
    },
    emoji: {
      order: O.emoji.order,
      match: e => s.default.EMOJI_NAME_RE.exec(e),
      parse(e, t, n) {
        let [l, r] = e, {
          customEmoji: a
        } = n, i = Object.prototype.hasOwnProperty.call(a, r) ? a[r] : null;
        if (null != i) {
          var u;
          return {
            type: "customEmoticon",
            content: "<".concat(!0 === i.animated ? "a" : "", ":").concat(null !== (u = i.originalName) && void 0 !== u ? u : i.name, ":").concat(i.id, ">"),
            emoji: i
          }
        }
        return {
          type: "text",
          content: l
        }
      }
    },
    customEmoticons: {
      match(e, t) {
        var n, l;
        return null !== (l = null === (n = t.customEmoticonsRegex) || void 0 === n ? void 0 : n.exec(e)) && void 0 !== l ? l : null
      },
      parse(e, t, n) {
        let [l, r] = e, {
          emojiContext: a
        } = n, i = a.getEmoticonByName(r);
        return null != i ? {
          type: "customEmoticon",
          content: "<".concat(!0 === i.animated ? "a" : "", ":").concat(i.name, ":").concat(i.id, ">"),
          emoji: i
        } : {
          type: "text",
          content: l
        }
      }
    },
    text: {
      ...D,
      match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, f.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != D.match ? D.match(e, t, "") : null
    }
  },
  B = {
    inlineCode: x(O.inlineCode),
    codeBlock: x(O.codeBlock),
    mention: {
      match: i.anyScopeRegex(G),
      parse(e, t, n) {
        let {
          isNotification: l
        } = n, r = _.default.getUser(e[1]);
        if (null == r) return {
          content: e[0]
        };
        let a = N.default.getUserTag(r, {
          identifiable: l && S.default.enabled ? "never" : "always"
        });
        if (!l) return {
          content: "@".concat(a)
        };
        {
          let e = N.default.getGlobalName(r);
          return {
            content: null != e ? "@".concat(e) : "@".concat(a)
          }
        }
      }
    },
    roleMention: {
      match: i.anyScopeRegex(P),
      parse(e, t, n) {
        let {
          guild: l
        } = n;
        if (null != l) {
          let t = l.roles[e[1]];
          if (null != t) return {
            content: "@".concat(t.name)
          }
        }
        return {
          content: e[0]
        }
      }
    },
    channel: {
      match: i.anyScopeRegex(w),
      parse(e) {
        let t = g.default.getChannel(e[1]);
        return {
          content: null == t ? e[0] : (0, u.computeChannelName)(t, _.default, A.default, !0, !0)
        }
      }
    },
    emoji: {
      match: i.anyScopeRegex(k),
      parse(e, t, n) {
        let [l, r, a] = e, {
          guild: i
        } = n, u = o.default.getDisambiguatedEmojiContext(i ? i.id : null).getById(a), s = null != u ? u.name : r;
        return {
          content: ":".concat(s, ":")
        }
      }
    },
    soundboard: {
      match: i.anyScopeRegex(/^<sound:(\d+)>/),
      parse(e) {
        let [t, n] = e;
        return {
          content: "<sound:".concat(n, ">")
        }
      }
    },
    spoiler: {
      match: i.anyScopeRegex(v.MARKDOWN_SPOILER_REGEXP),
      parse: () => ({
        content: "<".concat(b.default.Messages.SPOILER.toLowerCase(), ">")
      })
    },
    staticRouteLink: {
      match: i.anyScopeRegex(v.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
      parse: e => ({
        content: "<id:".concat(e[1], ">")
      })
    },
    timestamp: {
      ...O.timestamp,
      parse() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let l = O.timestamp.parse(...t);
        return {
          content: l.formatted
        }
      }
    },
    text: {
      ...D
    }
  };
[q, B].forEach(e => {
  Object.keys(e).forEach((t, n) => {
    e[t].order = n
  })
});
let H = i.parserFor(q),
  V = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

function K(e, t, n, l) {
  let r = "";
  return e.forEach(e => {
    if (! function(e, t, n) {
        if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
          let l;
          let r = s.default.translateSurrogatesToInlineEmoji(t.content);
          for (; null !== (l = V.exec(r));) {
            let r;
            null != l[1] && "" !== l[1] ? e.emojiContext && (r = e.emojiContext.getById(l[1])) : r = s.default.getByName(l[2]), r && n(r, t.isShortcut || !1)
          }
        }
      }(t, e, l), "string" == typeof e.content) switch (e.type) {
      case "codeBlock":
      case "inlineCode":
      case "mention":
      case "roleMention":
      case "channel":
      case "emoji":
        r += e.content;
        break;
      default:
        r += n(e.content)
    } else e.content.constructor === Array ? r += K(e.content, t, n, l) : console.warn("Unknown message item type: ", e)
  }), r
}

function j(e) {
  let t;
  let n = null == e ? void 0 : e.getGuildId(),
    l = null != n ? y.default.getGuild(n) : null,
    a = L.default.can(v.Permissions.MENTION_EVERYONE, e);
  t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map(e => ({
    userId: e,
    nick: null
  })) : null != n ? C.default.getMembers(n).map(e => {
    let {
      userId: t,
      nick: n
    } = e;
    return {
      userId: t,
      nick: n
    }
  }) : [];
  let i = r(t.reduce((e, t) => {
      let {
        userId: n
      } = t, l = _.default.getUser(n);
      return null == l ? e : (e.push({
        id: n,
        text: l.tag
      }), e)
    }, [])),
    u = r(null != l ? l.roles : {}).values().filter(e => {
      let {
        mentionable: t
      } = e;
      return a || t
    }).map(e => {
      let {
        id: t,
        name: n
      } = e;
      return {
        id: t,
        text: n
      }
    }),
    s = r(E.default.getTextChannelNameDisambiguations(n)).map(e => {
      let {
        id: t,
        name: n
      } = e;
      return {
        id: t,
        text: n
      }
    }),
    d = null != n ? r(T.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(e => e !== E.GUILD_SELECTABLE_CHANNELS_KEY).flatMap(e => E.default.getChannels(n)[e].map(e => ({
      id: e.channel.id,
      text: e.channel.name
    }))).value() : [],
    f = h.default.computeAllActiveJoinedThreads(n).map(e => ({
      id: e.id,
      text: e.name
    })),
    p = o.default.getDisambiguatedEmojiContext(n),
    m = p.getEscapedCustomEmoticonNames(),
    g = p.getCustomEmoji(),
    A = p.getCustomEmoticonRegex(),
    S = _.default.getCurrentUser(),
    I = (0, c.getInventoryGuildPacksUserExperimentConfig)({
      user: S,
      autoTrackExposure: !1
    }).viewAndUseEnabled,
    N = {
      inline: !0,
      mentionableRoles: u,
      guild: l,
      users: i,
      channels: s.concat(d).concat(f),
      emojiContext: p,
      customEmoticonsRegex: A,
      canViewAndUsePackEmoji: I,
      customEmoji: g,
      textExclusions: m,
      disableErrorGuards: !0
    };
  return N
}

function Y(e) {
  return e
}
var Q = {
  parse(e, t) {
    var n, l, r;
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
      i = null != a ? a : j(e),
      u = {
        content: t,
        tts: !1,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      };
    return u.content = (n = u.content, l = i, r = (t, n) => {
      I.default.isEmojiPremiumLocked({
        emoji: t,
        channel: e,
        intention: R.EmojiIntention.CHAT,
        canViewAndUsePackEmoji: i.canViewAndUsePackEmoji
      }) ? u.invalidEmojis.push(t) : !n && u.validNonShortcutEmojis.push(t)
    }, K(H(n, l), l, s.default.translateInlineEmojiToSurrogates, r)), u
  },
  parsePreprocessor(e, t) {
    let n = j(e);
    return H(t, n)
  },
  unparse(e, t, n) {
    let l = g.default.getChannel(t),
      a = null != l ? l.getGuildId() : null,
      u = null != a ? y.default.getGuild(a) : null,
      o = n ? B : r.omit(B, ["spoiler", "timestamp"]),
      c = n ? Y : s.default.translateSurrogatesToInlineEmoji,
      d = i.parserFor(o),
      f = {
        inline: !0,
        guild: u,
        isNotification: n
      };
    return K(d(e, f), f, c)
  }
}