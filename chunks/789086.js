t.d(r, {
  Z: function() {
    return d
  }
});
var a = t(735250),
  i = t(442837),
  n = t(481060),
  o = t(373791),
  l = t(146282),
  c = t(371991),
  s = t(206583);

function d() {
  let e = (0, i.e7)([l.Z], () => {
      var e;
      return (null === (e = l.Z.getFeed(s.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.refresh_stale_inbox_after_ms) != null
    }),
    {
      loading: r,
      nextFetchDate: t
    } = (0, i.cj)([l.Z], () => {
      var e;
      return null !== (e = l.Z.getFeedState(s.YN.GLOBAL_FEED)) && void 0 !== e ? e : {
        loading: !1
      }
    }),
    d = (0, i.e7)([l.Z], () => l.Z.getLastFeedFetchDate());
  return (0, a.jsxs)("div", {
    children: [r ? (0, a.jsx)(n.Text, {
      variant: "text-md/normal",
      children: "(fetching)"
    }) : (0, a.jsxs)(n.Text, {
      variant: "text-md/normal",
      children: ["Next fetch: ", null != t ? (0, a.jsx)(o.Z, {
        deadline: t
      }) : e ? "(awaiting push)" : "(unscheduled)"]
    }), (0, a.jsxs)(n.Text, {
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