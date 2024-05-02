"use strict";
l.r(t), l.d(t, {
  useCurrentChangelog: function() {
    return d
  }
});
var a = l("470079"),
  n = l("399606"),
  r = l("661111"),
  s = l("706454"),
  o = l("802098"),
  i = l("596401");

function c(e, t) {
  let {
    changelog: l,
    loadState: s,
    defaultChangelog: c,
    defaultLoadState: d
  } = (0, n.useStateFromStoresObject)([o.default], () => {
    let l = null != e ? o.default.getChangelog(e, t) : null,
      a = null != e ? o.default.getChangelog(e, "en-US") : null,
      n = null != e && o.default.getChangelogLoadStatus(e, "en-US");
    return {
      changelog: l,
      loadState: null != e && o.default.getChangelogLoadStatus(e, t),
      defaultChangelog: a,
      defaultLoadState: n
    }
  }, [e, t]);
  return (a.useEffect(() => {
    null != e && null == l && s === i.ChangelogLoadState.NOT_LOADED && r.default.fetchChangelog(e, t)
  }, [e, l, s, t]), null == e) ? {
    id: e,
    changelog: null,
    loaded: !1
  } : null == l && s === i.ChangelogLoadState.LOADED_FAILURE ? {
    id: e,
    changelog: c,
    loaded: d !== i.ChangelogLoadState.NOT_LOADED
  } : {
    id: e,
    changelog: l,
    loaded: s !== i.ChangelogLoadState.NOT_LOADED
  }
}

function d() {
  let e = (0, n.useStateFromStores)([s.default], () => s.default.locale),
    t = (0, n.useStateFromStores)([o.default], () => o.default.latestChangelogId()),
    l = (0, n.useStateFromStores)([o.default], () => o.default.getConfig()),
    a = null != l && 0 === Object.keys(l).length,
    r = null != l && Object.keys(l).length > 0 && null == t,
    i = (0, n.useStateFromStores)([o.default], () => o.default.overrideId()),
    {
      changelog: d,
      loaded: u
    } = c(t, e),
    {
      changelog: h,
      loaded: C
    } = c(i, e);
  return null == i || null == h && C ? {
    id: t,
    changelog: d,
    loaded: !!a || u,
    clientTooOld: r
  } : {
    id: i,
    changelog: h,
    loaded: C,
    clientTooOld: !1
  }
}