n.d(t, {
  II: function() {
    return m
  },
  Ow: function() {
    return _
  },
  P2: function() {
    return T
  },
  mw: function() {
    return l
  },
  z0: function() {
    return I
  }
}), n(47120);
var l, i, s = n(470079),
  a = n(652874),
  r = n(143927),
  o = n(570140),
  c = n(110924),
  u = n(840877),
  d = n(952537),
  h = n(981631);
let m = -1;
(i = l || (l = {})).MESSAGES = "messages", i.LINKS = "links", i.MEDIA = "media", i.ALL_COUNTS = "all_counts";

function E(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    s = JSON.stringify(l);
  return i ? "guild_".concat(t, "_search_tab_").concat(n, "_for_").concat(e, "_with_additonal_").concat(s) : "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(s)
}
let p = {
    searchFetcher: null,
    searchTabFetcher: null,
    result: null,
    messageCount: m,
    lastMessage: null
  },
  g = (0, a.Z)(() => new Map),
  f = (e, t) => {
    g.setState(n => {
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
  C = e => g(t => t.get(e), r.Z);

function _(e, t, n) {
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

function I(e, t, n) {
  return function(e, t, n, l) {
    let {
      addtionalQuery: i,
      shouldDispatch: a = !1
    } = l, r = s.useMemo(() => E(e, t, n, i), [e, t, n, i]), g = C(r), I = (0, c.Z)(r), [x, T] = s.useState({});
    return s.useEffect(() => {
      if (I !== r) {
        let l = _(e, n, i),
          s = new u.ZP(t, h.aib.GUILD, l);
        f(r, {
          searchFetcher: s,
          messageCount: m,
          lastMessage: null
        }), setTimeout(() => {
          s.fetch(e => {
            let n = e.body,
              l = n.messages[0];
            if (f(r, {
                searchFetcher: s,
                result: n,
                messageCount: n.total_results,
                lastMessage: l
              }), T({}), a) {
              var i, c;
              o.Z.dispatch({
                type: "MOD_VIEW_SEARCH_FINISH",
                searchId: t,
                guildId: t,
                analyticsId: n.analytics_id,
                totalResults: n.total_results,
                channels: n.channels,
                messages: n.messages,
                threads: null !== (i = n.threads) && void 0 !== i ? i : [],
                members: (null !== (c = n.members) && void 0 !== c ? c : []).map(e => (0, d.Z)(e)),
                hasError: !1,
                doingHistoricalIndex: n.doing_deep_historical_index,
                documentsIndexed: n.documents_indexed
              })
            }
          }, e => {}, e => {
            f(r, {
              messageCount: 0,
              lastMessage: null
            }), T({})
          })
        })
      }
      return () => {}
    }, [e, t, g, r, n, i]), null != g ? g : p
  }(e, t, "messages", n)
}

function x(e, t, n, l) {
  let i = s.useMemo(() => E(e, t, n, l, !0), [e, t, n, l]),
    a = C(i),
    r = (0, c.Z)(i);
  return {
    key: i,
    previousKey: r,
    state: a
  }
}

function T(e, t, n) {
  var l, i, a;
  let {
    key: r,
    state: o
  } = x(e, t, "messages", n), {
    key: c,
    state: d
  } = x(e, t, "links", n), {
    key: E,
    state: p
  } = x(e, t, "media", n), g = s.useMemo(() => _(e, "all_counts", n), [e, n]), C = s.useMemo(() => ({
    tabs: {
      messages: _(e, "messages", g),
      links: _(e, "links", g),
      media: _(e, "media", g)
    },
    track_exact_total_hits: !0
  }), [e, g]), I = s.useCallback(e => {
    let t = e.messages,
      n = e.links,
      l = e.media;
    f(r, t), f(c, n), f(E, l)
  }, [c, E, r]), T = s.useCallback(e => {
    I({
      messages: e,
      links: e,
      media: e
    })
  }, [I]);
  s.useEffect(() => {
    let e = new u.tJ(t, h.aib.GUILD, g, C);
    T({
      searchTabFetcher: e,
      messageCount: m,
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
        var n, l, i, s, a, r;
        let e = t.tabs.messages,
          o = t.tabs.links,
          c = t.tabs.media;
        I({
          messages: {
            messageCount: null !== (n = null == e ? void 0 : e.total_results) && void 0 !== n ? n : 0,
            lastMessage: null !== (l = null == e ? void 0 : e.messages[0]) && void 0 !== l ? l : null
          },
          links: {
            messageCount: null !== (i = null == o ? void 0 : o.total_results) && void 0 !== i ? i : 0,
            lastMessage: null !== (s = null == o ? void 0 : o.messages[0]) && void 0 !== s ? s : null
          },
          media: {
            messageCount: null !== (a = null == c ? void 0 : c.total_results) && void 0 !== a ? a : 0,
            lastMessage: null !== (r = null == c ? void 0 : c.messages[0]) && void 0 !== r ? r : null
          }
        })
      }
      Z({})
    });
    return () => {
      e.cancel(), clearTimeout(n)
    }
  }, [e, t, g, C, T, I]);
  let [N, Z] = s.useState({});
  return {
    messagesCount: null !== (l = null == o ? void 0 : o.messageCount) && void 0 !== l ? l : m,
    linksCount: null !== (i = null == d ? void 0 : d.messageCount) && void 0 !== i ? i : m,
    mediaCount: null !== (a = null == p ? void 0 : p.messageCount) && void 0 !== a ? a : m
  }
}