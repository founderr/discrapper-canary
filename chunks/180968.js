"use strict";
n.r(t), n.d(t, {
  HAS_NO_COUNT: function() {
    return h
  },
  SearchKeyType: function() {
    return l
  },
  getSearchQueryForUser: function() {
    return g
  },
  useServerMessageHistoryForUser: function() {
    return _
  },
  useServerActivityForUser: function() {
    return I
  }
}), n("222007");
var l, a, s = n("884691"),
  i = n("308503"),
  r = n("16470"),
  o = n("913144"),
  u = n("84339"),
  d = n("390933"),
  c = n("25932"),
  f = n("49111");
let h = -1;
(a = l || (l = {})).MENTIONS = "mentions", a.MESSAGES = "messages", a.LINKS = "links", a.MEDIA = "media";
let m = {
    searchFetcher: null,
    result: null,
    messageCount: h,
    lastMessage: null
  },
  p = (0, i.default)(() => new Map),
  E = (e, t) => {
    p.setState(n => {
      let l = n.get(e);
      return null == l ? n.set(e, {
        ...m,
        ...t
      }) : n.set(e, {
        ...l,
        ...t
      }), n
    })
  },
  S = e => p(t => t.get(e), r.default);

function g(e, t, n) {
  let l = null != n ? n : {};
  switch (t) {
    case "mentions":
      return {
        ...l, mentions: e
      };
    case "messages":
      return {
        ...l, author_id: e
      };
    case "links":
      return {
        ...l, author_id: e, has: ["link"]
      };
    case "media":
      return {
        ...l, author_id: e, attachment_extension: ["png", "jpg", "webp", "mov", "mp4", "gif", "mp3", "wav", "flac", "ogg"]
      }
  }
}

function C(e, t, n, l) {
  let {
    addtionalQuery: a,
    shouldDispatch: i = !1
  } = l, r = s.useMemo(() => (function(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      a = JSON.stringify(l);
    return "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(a)
  })(e, t, n, a), [e, t, n, a]), p = S(r), C = (0, u.default)(r), [_, I] = s.useState({});
  return s.useEffect(() => {
    if (C !== r) {
      let l = g(e, n, a),
        s = new d.default(t, f.SearchTypes.GUILD, l);
      E(r, {
        searchFetcher: s,
        messageCount: h,
        lastMessage: null
      }), setTimeout(() => {
        s.fetch(e => {
          let n = e.body,
            l = n.messages[0];
          if (E(r, {
              searchFetcher: s,
              result: n,
              messageCount: n.total_results,
              lastMessage: l
            }), I({}), i) {
            var a, u;
            o.default.dispatch({
              type: "MOD_VIEW_SEARCH_FINISH",
              searchId: t,
              guildId: t,
              analyticsId: n.analytics_id,
              totalResults: n.total_results,
              channels: n.channels,
              messages: n.messages,
              threads: null !== (a = n.threads) && void 0 !== a ? a : [],
              members: (null !== (u = n.members) && void 0 !== u ? u : []).map(e => (0, c.default)(e)),
              hasError: !1,
              doingHistoricalIndex: n.doing_deep_historical_index,
              documentsIndexed: n.documents_indexed
            })
          }
        }, e => {}, e => {
          E(r, {
            messageCount: 0,
            lastMessage: null
          }), I({})
        })
      })
    }
    return () => {}
  }, [e, t, p, r, n, a]), null != p ? p : m
}

function _(e, t, n) {
  return C(e, t, "messages", n)
}

function I(e, t, n) {
  let l = C(e, t, "messages", {
      addtionalQuery: n
    }),
    a = C(e, t, "links", {
      addtionalQuery: n
    }),
    s = C(e, t, "media", {
      addtionalQuery: n
    });
  return {
    messages: l,
    links: a,
    media: s
  }
}