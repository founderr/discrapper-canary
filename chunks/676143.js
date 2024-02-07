"use strict";
n.r(t), n.d(t, {
  useFilterCategoriesByQuery: function() {
    return I
  },
  getFirstRouteFor: function() {
    return S
  },
  clearRecentChannels: function() {
    return T
  },
  useChannelBrowserSections: function() {
    return M
  },
  useChannelBrowserChannelCount: function() {
    return A
  },
  getActiveAgoTimestamp: function() {
    return w
  }
}), n("843762");
var s = n("884691"),
  r = n("448105"),
  i = n.n(r),
  a = n("866227"),
  l = n.n(a),
  o = n("249654"),
  u = n("446674"),
  d = n("151426"),
  c = n("267363"),
  h = n("320954"),
  f = n("10641"),
  p = n("290886"),
  g = n("319839"),
  v = n("194704"),
  m = n("393414"),
  D = n("42203"),
  C = n("245997"),
  E = n("660478"),
  _ = n("49111"),
  N = n("724210"),
  O = n("796618"),
  L = n("133335"),
  R = n("782340");

function x(e, t) {
  e.index = t
}

function I(e, t, n, r) {
  r = r.toLowerCase();
  let a = (0, p.useCanSeeOnboardingHome)(e),
    l = s.useCallback((e, t) => !(a && e.channel.hasFlag(N.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== _.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || i(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [a]);
  return s.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return n[_.ChannelTypes.GUILD_CATEGORY].forEach(n => {
      let {
        channel: s
      } = n;
      "null" === s.id && (e.null = t.null.filter(e => l(e, r))), e[s.id] = t[s.id].filter(e => l(e, r))
    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === r.length || e[t.channel.id].length > 0), (0, h.default)(e._categories, e).forEach(x), e
  }, [t, n, l, r])
}

function S(e) {
  let t = e.getSections();
  if (t[g.SECTION_INDEX_COMMUNITY] > 0) {
    let t = e.getCommunitySection().getRow(0);
    switch (t) {
      case O.ChannelListCommunityRow.GUILD_HOME:
        return N.StaticChannelRoute.GUILD_HOME;
      case O.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
        return N.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
      case O.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
        return N.StaticChannelRoute.MEMBER_APPLICATIONS
    }
  }
  for (let s = g.SECTION_INDEX_UNCATEGORIZED_CHANNELS; s < e.voiceChannelsSectionNumber; s++)
    if (t[s] > 0) {
      var n;
      let t = null === (n = e.getChannelFromSectionRow(s, 0)) || void 0 === n ? void 0 : n.channel;
      if (null != t) return t.id
    } return null
}

function T(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  (0, v.bulkClearRecents)(e, t), (0, c.bulkAck)(t.map(e => ({
    channelId: e,
    readStateType: L.ReadStateTypes.CHANNEL,
    messageId: E.default.lastMessageId(e)
  }))), null != n && (0, m.transitionTo)(_.Routes.CHANNEL(e, n))
}

function M(e, t, n, s) {
  let r = (0, f.useIsDismissibleContentDismissed)(d.DismissibleContent.CHANNEL_BROWSER_NUX),
    i = (0, u.useStateFromStoresObject)([D.default], () => {
      let t = {},
        n = D.default.getMutableGuildChannelsForGuild(e);
      for (let e in n) {
        let {
          parent_id: r
        } = n[e];
        if (null != r) {
          var s;
          t[r] = (null !== (s = t[r]) && void 0 !== s ? s : 0) + 1
        }
      }
      return t
    }, [e]),
    a = t._categories.map(e => {
      let s = t[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === i[e.channel.id] ? 1 : s.length,
        rowHeight: 0 === s.length ? 0 : n
      }
    });
  return !r && null != s && a.unshift({
    rowCount: 1,
    rowHeight: s
  }), a
}

function A(e) {
  var t, n;
  let s = (0, u.useStateFromStores)([C.default], () => C.default.getCategories(e)),
    r = s._categories.length,
    i = s._categories[s._categories.length - 1];
  if (null == i) return 0;
  let a = null !== (n = null === (t = i.channel) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "null",
    l = s[a];
  return null == l ? 0 : 0 === l.length ? i.index + 2 - r : l[l.length - 1].index + 2 - r
}

function w(e) {
  var t;
  return R.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
    timeAgo: l(o.default.extractTimestamp(null !== (t = E.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
  })
}