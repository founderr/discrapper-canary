"use strict";
n.r(t), n.d(t, {
  resolvePlaintextInlineVoid: function() {
    return g
  },
  resolveApplicationCommandOption: function() {
    return _
  }
}), n("222007");
var l = n("679653"),
  i = n("980215"),
  o = n("385976"),
  a = n("867805"),
  r = n("401690"),
  s = n("42203"),
  u = n("923959"),
  c = n("26989"),
  d = n("305961"),
  p = n("697218"),
  m = n("25292"),
  f = n("149022"),
  h = n("680894");

function g(e, t, n, p) {
  let {
    allowUsers: f = !0,
    allowRoles: g = !0
  } = null != p ? p : {};
  switch (e[0]) {
    case "@":
      return function(e, t, n, l, o) {
        let [a, r] = e.slice(1).split("#", 2), u = null != t ? d.default.getGuild(t) : null, p = (0, i.getClydeExperimentEnabled)(u);
        if (o && null == r && null != u) {
          for (let e of Object.values(u.roles))
            if (a === e.name) return {
              type: "roleMention",
              roleId: e.id,
              children: [{
                text: ""
              }]
            }
        }
        if (l) {
          let e = null != n ? s.default.getChannel(n) : null;
          if (null != e) {
            if (e.isPrivate()) {
              for (let t of e.recipients)
                if (C(a, r, t)) return {
                  type: "userMention",
                  userId: t,
                  children: [{
                    text: ""
                  }]
                }
            } else {
              let e = c.default.getMembers(t);
              for (let {
                  userId: t
                }
                of e)
                if (C(a, r, t)) return {
                  type: "userMention",
                  userId: t,
                  children: [{
                    text: ""
                  }]
                };
              if (p && C(a, r, h.CLYDE_AI_USER_ID)) return {
                type: "userMention",
                userId: h.CLYDE_AI_USER_ID,
                children: [{
                  text: ""
                }]
              }
            }
          }
        }
        return null
      }(e, t, n, f, g);
    case ":":
      return function(e, t) {
        let n = a.default.EMOJI_NAME_RE.exec(e);
        if (null == n) return null;
        let l = n[1],
          i = o.default.getDisambiguatedEmojiContext(t).getCustomEmoji();
        if (null != i && l in i) {
          let e = i[l];
          return {
            type: "customEmoji",
            emoji: {
              emojiId: e.id,
              name: "require_colons" in e && e.require_colons ? ":".concat(e.name, ":") : e.name,
              animated: !0 === e.animated,
              jumboable: !1
            },
            children: [{
              text: ""
            }]
          }
        }
        return null
      }(e, t);
    case "#":
      return function(e, t) {
        let n;
        if (null == t) return null;
        n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, l.unescapeChannelName)(e.slice(2, e.length - 1)) : e.slice(1);
        let i = u.default.getTextChannelNameDisambiguations(t);
        for (let e of Object.keys(i))
          if (i[e].name === n) return {
            type: "channelMention",
            channelId: e,
            children: [{
              text: ""
            }]
          };
        for (let e of m.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS) {
          if (e === u.GUILD_SELECTABLE_CHANNELS_KEY) continue;
          let l = u.default.getChannels(t)[e];
          for (let {
              channel: e
            }
            of l)
            if (e.name === n) return {
              type: "channelMention",
              channelId: e.id,
              children: [{
                text: ""
              }]
            }
        }
        let o = r.default.getActiveJoinedThreadsForGuild(t);
        for (let e of Object.keys(o))
          for (let t of Object.keys(o[e])) {
            let {
              channel: l
            } = o[e][t];
            if (l.name === n) return {
              type: "channelMention",
              channelId: l.id,
              children: [{
                text: ""
              }]
            }
          }
        return null
      }(e, t)
  }
  return null
}

function _(e, t, n, l) {
  let i = g(e, t, n, l);
  return null == i ? null : (0, f.voidToOptionValue)(i)
}

function C(e, t, n) {
  let l = p.default.getUser(n);
  return null != l && (n === h.CLYDE_AI_USER_ID && "clyde" === e.toLowerCase() || l.username === e && l.discriminator === (null != t ? t : "0"))
}