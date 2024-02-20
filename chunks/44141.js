"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("267363"),
  d = n("680986"),
  s = n("689275"),
  o = n("755624"),
  r = n("233069"),
  c = n("245997"),
  f = n("660478"),
  I = n("49111"),
  _ = n("782340");

function p(e) {
  let t = function(e) {
    let t = (0, d.useUnreadThreadsCountForParent)(e.guild_id, e.id),
      n = (0, i.useStateFromStores)([f.default, c.default, s.default, o.default], () => {
        if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
        if (e.type !== I.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
        {
          let t = c.default.getCategories(e.getGuildId());
          if (null == t[e.id]) return !1;
          let n = t[e.id].some(e => {
            let {
              channel: t
            } = e;
            return (0, r.isReadableType)(t.type) && f.default.hasUnread(t.id)
          });
          if (n) return !0;
          let a = new Set(t[e.id].map(e => e.channel.id)),
            i = s.default.getThreadsForGuild(e.guild_id);
          for (let e in i)
            if (a.has(e)) {
              for (let t in i[e])
                if (o.default.hasJoined(t) && !o.default.isMuted(t) && f.default.hasUnread(t)) return !0
            } return !1
        }
      }, [e]);
    return e.isForumLikeChannel() ? t > 0 : n
  }(e);
  return (0, a.jsx)(l.MenuItem, {
    id: "mark-channel-read",
    label: _.default.Messages.MARK_AS_READ,
    action: function() {
      (0, u.ackChannel)(e)
    },
    disabled: !t
  })
}