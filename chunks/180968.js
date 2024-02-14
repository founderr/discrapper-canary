"use strict";
n.r(t), n.d(t, {
  HAS_NO_COUNT: function() {
    return h
  },
  SearchKeyType: function() {
    return a
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
var a, l, s = n("884691"),
  i = n("308503"),
  r = n("16470"),
  o = n("913144"),
  u = n("84339"),
  d = n("390933"),
  c = n("25932"),
  f = n("49111");
let h = -1;
(l = a || (a = {})).MENTIONS = "mentions", l.MESSAGES = "messages", l.LINKS = "links", l.MEDIA = "media";
let m = {
    searchFetcher: null,
    result: null,
    messageCount: h,
    lastMessage: null
  },
  p = (0, i.default)(() => new Map),
  E = (e, t) => {
    p.setState(n => {
      let a = n.get(e);
      return null == a ? n.set(e, {
        ...m,
        ...t
      }) : n.set(e, {
        ...a,
        ...t
      }), n
    })
  },
  S = e => p(t => t.get(e), r.default);

function g(e, t, n) {
  let a = null != n ? n : {};
  switch (t) {
    case "mentions":
      return {
        ...a, mentions: e
      };
    case "messages":
      return {
        ...a, author_id: e
      };
    case "links":
      return {
        ...a, author_id: e, has: ["link"]
      };
    case "media":
      return {
        ...a, author_id: e, attachment_extension: ["png", "jpg", "webp", "mov", "mp4", "gif", "mp3", "wav", "flac", "ogg"]
      }
  }
}

function C(e, t, n, a) {
  let {
    addtionalQuery: l,
    shouldDispatch: i = !1
  } = a, r = s.useMemo(() => (function(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      l = JSON.stringify(a);
    return "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(l)
  })(e, t, n, l), [e, t, n, l]), p = S(r), C = (0, u.default)(r), [_, I] = s.useState({});
  return s.useEffect(() => {
    if (C !== r) {
      let a = g(e, n, l),
        s = new d.default(t, f.SearchTypes.GUILD, a);
      E(r, {
        searchFetcher: s,
        messageCount: h,
        lastMessage: null
      }), setTimeout(() => {
        s.fetch(e => {
          let n = e.body,
            a = n.messages[0];
          if (E(r, {
              searchFetcher: s,
              result: n,
              messageCount: n.total_results,
              lastMessage: a
            }), I({}), i) {
            var l, u;
            o.default.dispatch({
              type: "MOD_VIEW_SEARCH_FINISH",
              searchId: t,
              guildId: t,
              analyticsId: n.analytics_id,
              totalResults: n.total_results,
              channels: n.channels,
              messages: n.messages,
              threads: null !== (l = n.threads) && void 0 !== l ? l : [],
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
  }, [e, t, p, r, n, l]), null != p ? p : m
}

function _(e, t, n) {
  return C(e, t, "messages", n)
}

function I(e, t, n) {
  let a = C(e, t, "messages", {
      addtionalQuery: n
    }),
    l = C(e, t, "links", {
      addtionalQuery: n
    }),
    s = C(e, t, "media", {
      addtionalQuery: n
    });
  return {
    messages: a,
    links: l,
    media: s
  }
}