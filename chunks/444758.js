"use strict";
var i = n(302454),
  r = n.n(i),
  s = n(430198),
  o = n(933557),
  a = n(66999),
  l = n(754688),
  u = n(592125),
  _ = n(430824),
  c = n(496675),
  d = n(699516),
  E = n(594174),
  I = n(768581),
  T = n(934415),
  h = n(624138),
  f = n(699450),
  S = n(594199),
  A = n(981631),
  N = n(689938);
let m = e => {
  let t = u.Z.getChannel(e);
  return null == t ? void 0 : t.getGuildId()
};

function O(e) {
  return {
    type: "guild",
    guildId: e.id,
    content: (0, h.aF)(e.name, 32),
    icon: I.ZP.getGuildIconURL({
      id: e.id,
      icon: e.icon,
      size: 40
    })
  }
}

function R(e, t) {
  let n;
  let i = v((0, h.aF)(e.name, 32));
  return {
    type: "channel",
    content: [n = "italics" === t ? {
      type: "em",
      content: [i]
    } : i],
    channelType: e.type,
    iconType: e.iconType
  }
}

function p(e) {
  return {
    type: "channel",
    content: [v("")],
    iconType: e ? "post" : "message"
  }
}

function g(e, t) {
  var n;
  let i = u.Z.getChannel(e),
    r = (0, a.$)(e, u.Z, s.Z, c.Z).isSubscriptionGated,
    _ = null !== (n = (0, T.wl)(i)) && void 0 !== n ? n : "text";
  if (null != t) {
    let n = t.find(t => t.id === e);
    if (null != n) return {
      type: n.type,
      id: n.id,
      guildId: n.guild_id,
      name: n.name,
      isDm: null != i && i.isPrivate(),
      isForumPost: null != i && i.isForumPost(),
      isMentionable: !0,
      canViewChannel: !0,
      roleSubscriptionGated: r,
      iconType: _,
      parentId: null == i ? void 0 : i.parent_id
    }
  }
  return null != i ? {
    type: i.type,
    id: i.id,
    guildId: i.guild_id,
    name: (0, o.F6)(i, E.default, d.Z),
    isDm: i.isPrivate(),
    isForumPost: i.isForumPost(),
    isMentionable: (0, f.B)(i.type),
    canViewChannel: (0, l.YO)(i),
    roleSubscriptionGated: r,
    iconType: _,
    parentId: i.parent_id
  } : null
}

function C(e) {
  return {
    type: "link",
    content: [{
      type: "text",
      content: e
    }],
    target: e,
    title: void 0
  }
}

function v(e) {
  return {
    type: "text",
    content: e
  }
}

function L(e, t, n, i, r) {
  let s = _.Z.getGuild(e),
    o = (null == s ? void 0 : s.id) === i;
  return {
    type: "channelMention",
    guildId: e,
    channelId: t,
    messageId: n,
    originalLink: r,
    inContent: null == s || o ? null : [O(s)],
    content: [R({
      name: N.Z.Messages.UNKNOWN_CHANNEL.toLowerCase(),
      type: A.d4z.UNKNOWN,
      iconType: "text"
    }, "italics")]
  }
}

function D(e, t, n, i) {
  if (!e.canViewChannel) return function(e, t) {
    let n = {
      type: "channel",
      content: [v(e.roleSubscriptionGated ? e.name : N.Z.Messages.NO_ACCESS)],
      channelType: e.roleSubscriptionGated ? e.type : A.d4z.UNKNOWN,
      iconType: "locked"
    };
    return {
      type: "channelMention",
      guildId: e.guildId,
      channelId: e.id,
      messageId: t,
      inContent: null,
      content: [n]
    }
  }(e, t);
  if (!e.isMentionable) return v("#".concat(e.name));
  let r = {
      type: "channelMention",
      channelId: e.id,
      guildId: e.guildId,
      messageId: t,
      originalLink: i
    },
    s = _.Z.getGuild(e.guildId);
  if (null == s) {
    var o;
    if (e.isDm) return {
      ...r,
      guildId: A.ME,
      inContent: [R(e)],
      content: [p(!1)]
    };
    return null != (o = i) ? C(o) : v("#".concat(N.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER))
  }
  let a = e.guildId === n;
  return {
    ...r,
    ... function(e, t, n, i) {
      let r = O(e),
        s = R(t),
        o = p(t.isForumPost);
      if (n && i) {
        if (t.isForumPost) {
          let e = u.Z.getChannel(t.parentId);
          if (null != e) {
            var a;
            return {
              inContent: [R({
                name: e.name,
                type: e.type,
                iconType: null !== (a = (0, T.wl)(e)) && void 0 !== a ? a : "forum"
              })],
              content: [s]
            }
          }
        }
        return {
          inContent: [s],
          content: [o]
        }
      }
      if (n && !i) return {
        inContent: null,
        content: [s]
      };
      if (!n && i) return {
        inContent: [r],
        content: [t.isForumPost ? s : o]
      };
      else if (!n && !i) return {
        inContent: [r],
        content: [s]
      }
    }(s, e, a, null != t)
  }
}
let M = {
    order: S.ZP.order,
    requiredFirstCharacters: ["<"],
    match: e => /^<#(\d+)>/.exec(e),
    parse(e, t, n) {
      let i = e[1];
      if (n.returnMentionIds) return {
        type: "channelMention",
        id: i
      };
      let r = g(i, n.mentionChannels);
      return null == r ? L(null, i, null, m(n.channelId)) : D(r, null, m(n.channelId))
    }
  },
  P = {
    order: r().defaultRules.url.order - .5,
    requiredFirstCharacters: ["h"],
    match(e) {
      let t = l.Jv.exec(e);
      return null != t && (null != t[2] && /\D/.test(t[2]) || null != t[3] && /\D/.test(t[3])) ? null : t
    },
    parse(e, t, n) {
      let i = e[0],
        r = e[1],
        s = e[2],
        o = e[3];
      if (null == s) return C(i);
      let a = g(s, null);
      return null == a ? L(r, s, o, m(n.channelId), i) : D(a, o, m(n.channelId), i)
    }
  },
  y = {
    order: r().defaultRules.url.order - .5,
    requiredFirstCharacters: ["h"],
    match: e => l.M0.exec(e),
    parse(e, t, n) {
      let i = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = e[4];
      if (null == s || null == o) return C(i);
      let l = g(o, null);
      if (null != l) return D(l, a, m(n.channelId), i);
      let u = g(s, null);
      return null != u ? D(u, a, m(n.channelId), i) : L(r, s, a, m(n.channelId), i)
    }
  };
t.Z = {
  channelMention: M,
  channelOrMessageUrl: P,
  mediaPostLink: y
}