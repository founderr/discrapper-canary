t.d(r, {
  Z: function() {
    return d
  }
});
var a = t(735250),
  n = t(442837),
  i = t(481060),
  l = t(373791),
  o = t(146282),
  c = t(371991),
  s = t(206583);

function d() {
  let e = (0, n.e7)([o.Z], () => {
      var e;
      return (null === (e = o.Z.getFeed(s.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.refresh_stale_inbox_after_ms) != null
    }),
    {
      loading: r,
      nextFetchDate: t
    } = (0, n.cj)([o.Z], () => {
      var e;
      return null !== (e = o.Z.getFeedState(s.YN.GLOBAL_FEED)) && void 0 !== e ? e : {
        loading: !1
      }
    }),
    d = (0, n.e7)([o.Z], () => o.Z.getLastFeedFetchDate(s.YN.GLOBAL_FEED));
  return (0, a.jsxs)("div", {
    children: [r ? (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      children: "(fetching)"
    }) : (0, a.jsxs)(i.Text, {
      variant: "text-md/normal",
      children: ["Next fetch: ", null != t ? (0, a.jsx)(l.Z, {
        deadline: t
      }) : e ? "(awaiting push)" : "(unscheduled)"]
    }), (0, a.jsxs)(i.Text, {
      variant: "text-md/normal",
      children: ["Last fetch:", " ", null != d ? (0, a.jsx)(c.x3, {
        inline: !0,
        entry: {
          start: d.getTime()
        }
      }) : "(never)"]
    })]
  })
}