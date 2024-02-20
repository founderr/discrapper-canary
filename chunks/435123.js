"use strict";
n.r(t), n.d(t, {
  shouldFetchGuildFeed: function() {
    return r
  },
  default: function() {
    return o
  }
});
var i = n("884691"),
  a = n("446674"),
  l = n("713810"),
  s = n("185014");

function r(e, t) {
  let n = s.default.getLastFetchedMillis(e);
  if (!t && null != n && Date.now() - n < 72e5) return !1;
  let {
    loading: i
  } = s.default.getFetchStatus(e);
  return i === s.LoadingStatus.NONE && !0
}

function o(e) {
  let {
    guildId: t,
    highlightedItemData: n
  } = e, {
    loading: o,
    error: u
  } = (0, a.useStateFromStores)([s.default], () => s.default.getFetchStatus(t), [t]), d = i.useCallback(e => {
    let {
      force: i,
      flushSeenItems: a
    } = e;
    async function s() {
      try {
        await (0, l.fetchGuildFeed)({
          guildId: t,
          flushSeenItems: a,
          refresh: !0,
          highlightedItemData: n
        })
      } catch (e) {
        console.error(e)
      }
    }
    r(t, null != i && i) && s()
  }, [t, n]), c = i.useCallback(() => {
    r(t, !0) && e();
    async function e() {
      try {
        await (0, l.fetchGuildFeed)({
          guildId: t,
          refresh: !1
        })
      } catch (e) {
        console.error(e)
      }
    }
  }, [t]);
  return i.useEffect(() => {
    d({
      force: null != n
    })
  }, [d, n]), {
    fetchFresh: d,
    fetchPage: c,
    loading: o,
    error: u
  }
}