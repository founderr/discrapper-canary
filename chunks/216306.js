"use strict";
E.r(t), E.d(t, {
  clearRecentChannels: function() {
    return h
  },
  getActiveAgoTimestamp: function() {
    return P
  },
  getFirstRouteFor: function() {
    return f
  },
  useChannelBrowserChannelCount: function() {
    return y
  },
  useChannelBrowserSections: function() {
    return p
  },
  useFilterCategoriesByQuery: function() {
    return R
  }
}), E("733860");
var _ = E("470079"),
  s = E("658722"),
  T = E.n(s),
  a = E("913527"),
  A = E.n(a),
  n = E("442837"),
  I = E("704215"),
  u = E("45114"),
  i = E("740504"),
  L = E("605236"),
  l = E("931261"),
  o = E("540126"),
  r = E("671098"),
  d = E("703656"),
  N = E("592125"),
  S = E("324067"),
  g = E("306680"),
  D = E("709054"),
  G = E("981631"),
  O = E("176505"),
  c = E("443063"),
  U = E("490897"),
  C = E("689938");

function M(e, t) {
  e.index = t
}

function R(e, t, E, s) {
  s = s.toLowerCase();
  let a = (0, l.useCanSeeOnboardingHome)(e),
    A = _.useCallback((e, t) => !(a && e.channel.hasFlag(O.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== G.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || T()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [a]);
  return _.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return E[G.ChannelTypes.GUILD_CATEGORY].forEach(E => {
      let {
        channel: _
      } = E;
      "null" === _.id && (e.null = t.null.filter(e => A(e, s))), e[_.id] = t[_.id].filter(e => A(e, s))
    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === s.length || e[t.channel.id].length > 0), (0, i.default)(e._categories, e).forEach(M), e
  }, [t, E, A, s])
}

function f(e) {
  let t = e.getSections();
  if (t[o.SECTION_INDEX_COMMUNITY] > 0) switch (e.getCommunitySection().getRow(0)) {
    case c.ChannelListCommunityRow.GUILD_HOME:
      return O.StaticChannelRoute.GUILD_HOME;
    case c.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
      return O.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
    case c.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
      return O.StaticChannelRoute.MEMBER_APPLICATIONS
  }
  for (let _ = o.SECTION_INDEX_UNCATEGORIZED_CHANNELS; _ < e.voiceChannelsSectionNumber; _++)
    if (t[_] > 0) {
      var E;
      let t = null === (E = e.getChannelFromSectionRow(_, 0)) || void 0 === E ? void 0 : E.channel;
      if (null != t) return t.id
    } return null
}

function h(e, t) {
  let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  (0, r.bulkClearRecents)(e, t), (0, u.bulkAck)(t.map(e => ({
    channelId: e,
    readStateType: U.ReadStateTypes.CHANNEL,
    messageId: g.default.lastMessageId(e)
  }))), null != E && (0, d.transitionTo)(G.Routes.CHANNEL(e, E))
}

function p(e, t, E, _) {
  let s = (0, L.useIsDismissibleContentDismissed)(I.DismissibleContent.CHANNEL_BROWSER_NUX),
    T = (0, n.useStateFromStoresObject)([N.default], () => {
      let t = {},
        E = N.default.getMutableGuildChannelsForGuild(e);
      for (let e in E) {
        let {
          parent_id: s
        } = E[e];
        if (null != s) {
          var _;
          t[s] = (null !== (_ = t[s]) && void 0 !== _ ? _ : 0) + 1
        }
      }
      return t
    }, [e]),
    a = t._categories.map(e => {
      let _ = t[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === T[e.channel.id] ? 1 : _.length,
        rowHeight: 0 === _.length ? 0 : E
      }
    });
  return !s && null != _ && a.unshift({
    rowCount: 1,
    rowHeight: _
  }), a
}

function y(e) {
  var t, E;
  let _ = (0, n.useStateFromStores)([S.default], () => S.default.getCategories(e)),
    s = _._categories.length,
    T = _._categories[_._categories.length - 1];
  if (null == T) return 0;
  let a = _[null !== (E = null === (t = T.channel) || void 0 === t ? void 0 : t.id) && void 0 !== E ? E : "null"];
  return null == a ? 0 : 0 === a.length ? T.index + 2 - s : a[a.length - 1].index + 2 - s
}

function P(e) {
  var t;
  return C.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
    timeAgo: A()(D.default.extractTimestamp(null !== (t = g.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
  })
}