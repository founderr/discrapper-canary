"use strict";
n.r(t), n.d(t, {
  useEmojiAndSourceGuild: function() {
    return c
  }
}), n("222007");
var l = n("884691"),
  a = n("65597"),
  s = n("305961"),
  i = n("385976"),
  r = n("858619"),
  o = n("101263"),
  u = n("49111");
let d = (e, t, n) => {
    let l = null != n ? e.getCustomEmojiById(n) : null;
    if ((null == l ? void 0 : l.type) === r.EmojiTypes.GUILD) return {
      emoji: l,
      joinedEmojiSourceGuildRecord: t.getGuild(null == l ? void 0 : l.guildId)
    };
    return {
      emoji: null,
      joinedEmojiSourceGuildRecord: null
    }
  },
  c = e => {
    let {
      emojiId: t,
      refreshPositionKey: n
    } = e, {
      joinedEmojiSourceGuildRecord: r,
      emoji: c
    } = (0, a.useStateFromStoresObject)([i.default, s.default], () => d(i.default, s.default, t)), m = null != r, f = null != r && r.hasFeature(u.GuildFeatures.DISCOVERABLE), h = (!m || f) && null != t, [p, g] = l.useState(h), E = null != r ? o.default.createFromGuildRecord(r) : null, [C, v] = l.useState(E);
    return l.useEffect(() => {
      null == n || n();
      let e = async () => {
        let e = null != t ? await o.default.getGuildFromEmojiId(t) : null;
        v(e), g(!1), null == n || n()
      };
      if (h) {
        e();
        return
      }
      null == n || n()
    }, [t, h]), {
      expressionSourceGuild: C,
      joinedEmojiSourceGuildRecord: r,
      hasJoinedEmojiSourceGuild: m,
      emoji: c,
      isFetching: p
    }
  }