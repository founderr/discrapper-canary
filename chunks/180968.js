"use strict";
n.r(t), n.d(t, {
  HAS_NO_COUNT: function() {
    return h
  },
  SearchKeyType: function() {
    return l
  },
  getSearchQueryForUser: function() {
    return S
  },
  useServerMessageHistoryForUser: function() {
    return _
  },
  useServerActivityCountsForUser: function() {
    return T
  }
}), n("222007");
var l, a, s = n("884691"),
  i = n("308503"),
  r = n("16470"),
  u = n("913144"),
  o = n("84339"),
  d = n("390933"),
  c = n("25932"),
  f = n("49111");
let h = -1;
(a = l || (l = {})).MESSAGES = "messages", a.LINKS = "links", a.MEDIA = "media", a.ALL_COUNTS = "all_counts";

function m(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    s = JSON.stringify(l);
  return a ? "guild_".concat(t, "_search_tab_").concat(n, "_for_").concat(e, "_with_additonal_").concat(s) : "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(s)
}
let p = {
    searchFetcher: null,
    searchTabFetcher: null,
    result: null,
    messageCount: h,
    lastMessage: null
  },
  E = (0, i.default)(() => new Map),
  g = (e, t) => {
    E.setState(n => {
      let l = n.get(e);
      return null == l ? n.set(e, {
        ...p,
        ...t
      }) : n.set(e, {
        ...l,
        ...t
      }), n
    })
  },
  C = e => E(t => t.get(e), r.default);

function S(e, t, n) {
  let l = null != n ? n : {};
  switch (t) {
    case "links":
      return {
        author_id: e, has: ["link"], ...l
      };
    case "media":
      return {
        author_id: e, attachment_extension: ["png", "jpg", "webp", "mov", "mp4", "gif", "mp3", "wav", "flac", "ogg"], ...l
      };
    case "all_counts":
      return {
        author_id: [e], limit: 1, cursor: null, ...l
      };
    default:
      return {
        author_id: e, ...l
      }
  }
}

function _(e, t, n) {
  return function(e, t, n, l) {
    let {
      addtionalQuery: a,
      shouldDispatch: i = !1
    } = l, r = s.useMemo(() => m(e, t, n, a), [e, t, n, a]), E = C(r), _ = (0, o.default)(r), [I, T] = s.useState({});
    return s.useEffect(() => {
      if (_ !== r) {
        let l = S(e, n, a),
          s = new d.default(t, f.SearchTypes.GUILD, l);
        g(r, {
          searchFetcher: s,
          messageCount: h,
          lastMessage: null
        }), setTimeout(() => {
          s.fetch(e => {
            let n = e.body,
              l = n.messages[0];
            if (g(r, {
                searchFetcher: s,
                result: n,
                messageCount: n.total_results,
                lastMessage: l
              }), T({}), i) {
              var a, o;
              u.default.dispatch({
                type: "MOD_VIEW_SEARCH_FINISH",
                searchId: t,
                guildId: t,
                analyticsId: n.analytics_id,
                totalResults: n.total_results,
                channels: n.channels,
                messages: n.messages,
                threads: null !== (a = n.threads) && void 0 !== a ? a : [],
                members: (null !== (o = n.members) && void 0 !== o ? o : []).map(e => (0, c.default)(e)),
                hasError: !1,
                doingHistoricalIndex: n.doing_deep_historical_index,
                documentsIndexed: n.documents_indexed
              })
            }
          }, e => {}, e => {
            g(r, {
              messageCount: 0,
              lastMessage: null
            }), T({})
          })
        })
      }
      return () => {}
    }, [e, t, E, r, n, a]), null != E ? E : p
  }(e, t, "messages", n)
}

function I(e, t, n, l) {
  let a = s.useMemo(() => m(e, t, n, l, !0), [e, t, n, l]),
    i = C(a),
    r = (0, o.default)(a);
  return {
    key: a,
    previousKey: r,
    state: i
  }
}

function T(e, t, n) {
  var l, a, i;
  let {
    key: r,
    state: u
  } = I(e, t, "messages", n), {
    key: o,
    state: c
  } = I(e, t, "links", n), {
    key: m,
    state: p
  } = I(e, t, "media", n), E = s.useMemo(() => S(e, "all_counts", n), [e, n]), C = s.useMemo(() => ({
    tabs: {
      messages: S(e, "messages", E),
      links: S(e, "links", E),
      media: S(e, "media", E)
    },
    track_exact_total_hits: !0
  }), [e, E]), _ = s.useCallback(e => {
    let t = e.messages,
      n = e.links,
      l = e.media;
    g(r, t), g(o, n), g(m, l)
  }, [o, m, r]), T = s.useCallback(e => {
    _({
      messages: e,
      links: e,
      media: e
    })
  }, [_]);
  s.useEffect(() => {
    let e = new d.SearchTabFetcherImpl(t, f.SearchTypes.GUILD, E, C);
    T({
      searchTabFetcher: e,
      messageCount: h,
      lastMessage: null
    });
    let n = setTimeout(async () => {
      let t = null;
      try {
        let n = await e.makeRequest();
        t = null == n ? void 0 : n.body
      } catch (e) {
        t = null
      }
      if (null == t) T({
        messageCount: 0,
        lastMessage: null
      });
      else {
        var n, l, a, s, i, r;
        let e = t.tabs.messages,
          u = t.tabs.links,
          o = t.tabs.media;
        _({
          messages: {
            messageCount: null !== (n = null == e ? void 0 : e.total_results) && void 0 !== n ? n : 0,
            lastMessage: null !== (l = null == e ? void 0 : e.messages[0]) && void 0 !== l ? l : null
          },
          links: {
            messageCount: null !== (a = null == u ? void 0 : u.total_results) && void 0 !== a ? a : 0,
            lastMessage: null !== (s = null == u ? void 0 : u.messages[0]) && void 0 !== s ? s : null
          },
          media: {
            messageCount: null !== (i = null == o ? void 0 : o.total_results) && void 0 !== i ? i : 0,
            lastMessage: null !== (r = null == o ? void 0 : o.messages[0]) && void 0 !== r ? r : null
          }
        })
      }
      x({})
    });
    return () => {
      e.cancel(), clearTimeout(n)
    }
  }, [e, t, E, C, T, _]);
  let [v, x] = s.useState({});
  return {
    messagesCount: null !== (l = null == u ? void 0 : u.messageCount) && void 0 !== l ? l : h,
    linksCount: null !== (a = null == c ? void 0 : c.messageCount) && void 0 !== a ? a : h,
    mediaCount: null !== (i = null == p ? void 0 : p.messageCount) && void 0 !== i ? i : h
  }
}