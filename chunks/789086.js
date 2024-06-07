"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
});
var a = r("735250"),
  i = r("442837"),
  n = r("481060"),
  l = r("373791"),
  o = r("146282"),
  c = r("371991"),
  s = r("206583");

function d() {
  let e = (0, i.useStateFromStores)([o.default], () => {
      var e;
      return (null === (e = o.default.getFeed(s.ContentInventoryFeedKey.GLOBAL_FEED)) || void 0 === e ? void 0 : e.refresh_stale_inbox_after_ms) != null
    }),
    {
      loading: t,
      nextFetchDate: r
    } = (0, i.useStateFromStores)([o.default], () => {
      var e;
      return null !== (e = o.default.getFeedState(s.ContentInventoryFeedKey.GLOBAL_FEED)) && void 0 !== e ? e : {
        loading: !1
      }
    }),
    d = (0, i.useStateFromStores)([o.default], () => o.default.getLastFeedFetchDate());
  return (0, a.jsxs)("div", {
    children: [t ? (0, a.jsx)(n.Text, {
      variant: "text-md/normal",
      children: "(fetching)"
    }) : (0, a.jsxs)(n.Text, {
      variant: "text-md/normal",
      children: ["Next fetch: ", null != r ? (0, a.jsx)(l.default, {
        deadline: r
      }) : e ? "(awaiting push)" : "(unscheduled)"]
    }), (0, a.jsxs)(n.Text, {
      variant: "text-md/normal",
      children: ["Last fetch:", " ", null != d ? (0, a.jsx)(c.ActiveTimestamp, {
        inline: !0,
        entry: {
          start: d.getTime()
        }
      }) : "(never)"]
    })]
  })
}