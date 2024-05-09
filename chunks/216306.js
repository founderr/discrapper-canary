"use strict";
s.r(t), s.d(t, {
  clearRecentChannels: function() {
    return h
  },
  getActiveAgoTimestamp: function() {
    return y
  },
  getFirstRouteFor: function() {
    return R
  },
  useChannelBrowserChannelCount: function() {
    return p
  },
  useChannelBrowserSections: function() {
    return m
  },
  useFilterCategoriesByQuery: function() {
    return U
  }
}), s("733860");
var a = s("470079"),
  n = s("658722"),
  i = s.n(n),
  E = s("913527"),
  l = s.n(E),
  _ = s("442837"),
  r = s("524437"),
  u = s("45114"),
  o = s("740504"),
  T = s("605236"),
  d = s("931261"),
  A = s("540126"),
  I = s("671098"),
  L = s("703656"),
  c = s("592125"),
  N = s("324067"),
  S = s("306680"),
  g = s("709054"),
  D = s("981631"),
  C = s("176505"),
  f = s("443063"),
  O = s("490897"),
  G = s("689938");

function M(e, t) {
  e.index = t
}

function U(e, t, s, n) {
  n = n.toLowerCase();
  let E = (0, d.useCanSeeOnboardingHome)(e),
    l = a.useCallback((e, t) => !(E && e.channel.hasFlag(C.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== D.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || i()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [E]);
  return a.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return s[D.ChannelTypes.GUILD_CATEGORY].forEach(s => {
      let {
        channel: a
      } = s;
      "null" === a.id && (e.null = t.null.filter(e => l(e, n))), e[a.id] = t[a.id].filter(e => l(e, n))
    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === n.length || e[t.channel.id].length > 0), (0, o.default)(e._categories, e).forEach(M), e
  }, [t, s, l, n])
}

function R(e) {
  let t = e.getSections();
  if (t[A.SECTION_INDEX_COMMUNITY] > 0) switch (e.getCommunitySection().getRow(0)) {
    case f.ChannelListCommunityRow.GUILD_HOME:
      return C.StaticChannelRoute.GUILD_HOME;
    case f.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
      return C.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
    case f.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
      return C.StaticChannelRoute.MEMBER_APPLICATIONS
  }
  for (let a = A.SECTION_INDEX_UNCATEGORIZED_CHANNELS; a < e.voiceChannelsSectionNumber; a++)
    if (t[a] > 0) {
      var s;
      let t = null === (s = e.getChannelFromSectionRow(a, 0)) || void 0 === s ? void 0 : s.channel;
      if (null != t) return t.id
    } return null
}

function h(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  (0, I.bulkClearRecents)(e, t), (0, u.bulkAck)(t.map(e => ({
    channelId: e,
    readStateType: O.ReadStateTypes.CHANNEL,
    messageId: S.default.lastMessageId(e)
  }))), null != s && (0, L.transitionTo)(D.Routes.CHANNEL(e, s))
}

function m(e, t, s, a) {
  let n = (0, T.useIsDismissibleContentDismissed)(r.DismissibleContent.CHANNEL_BROWSER_NUX),
    i = (0, _.useStateFromStoresObject)([c.default], () => {
      let t = {},
        s = c.default.getMutableGuildChannelsForGuild(e);
      for (let e in s) {
        let {
          parent_id: n
        } = s[e];
        if (null != n) {
          var a;
          t[n] = (null !== (a = t[n]) && void 0 !== a ? a : 0) + 1
        }
      }
      return t
    }, [e]),
    E = t._categories.map(e => {
      let a = t[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === i[e.channel.id] ? 1 : a.length,
        rowHeight: 0 === a.length ? 0 : s
      }
    });
  return !n && null != a && E.unshift({
    rowCount: 1,
    rowHeight: a
  }), E
}

function p(e) {
  var t, s;
  let a = (0, _.useStateFromStores)([N.default], () => N.default.getCategories(e)),
    n = a._categories.length,
    i = a._categories[a._categories.length - 1];
  if (null == i) return 0;
  let E = a[null !== (s = null === (t = i.channel) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : "null"];
  return null == E ? 0 : 0 === E.length ? i.index + 2 - n : E[E.length - 1].index + 2 - n
}

function y(e) {
  var t;
  return G.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
    timeAgo: l()(g.default.extractTimestamp(null !== (t = S.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
  })
}