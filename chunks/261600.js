n.d(t, {
  U: function() {
    return g
  }
});
var l = n(735250),
  i = n(470079),
  s = n(399606),
  r = n(481060),
  a = n(592125),
  o = n(922482),
  u = n(750154),
  c = n(427679),
  d = n(689938);

function h(e) {
  var t, n;
  let {
    activity: h
  } = e, {
    channelId: g
  } = null !== (t = (0, u.rq)(h)) && void 0 !== t ? t : {}, p = (0, s.e7)([c.Z], () => c.Z.getStageInstanceByChannel(g), [g]), m = i.useRef(null), C = i.useCallback(() => {
    let e = a.Z.getChannel(g);
    null != e && o.Cq(e)
  }, [g]), E = null !== (n = null == p ? void 0 : p.topic) && void 0 !== n ? n : h.name, f = d.Z.Messages.STAGE_CHANNEL_ACTIVITY_FEED_JOIN.format({
    channel: E
  });
  return (0, l.jsx)("div", {
    ref: m,
    children: (0, l.jsx)(r.Clickable, {
      onClick: C,
      focusProps: {
        ringTarget: m
      },
      children: (0, l.jsx)(r.Heading, {
        variant: "heading-sm/semibold",
        children: f
      })
    })
  })
}
class g {
  shouldShow(e) {
    return (0, u.JE)(e)
  }
  createHeader(e) {
    return {
      subtitle: d.Z.Messages.STAGE_CHANNEL_ACTIVITY_FEED_DEFAULT,
      icon: null
    }
  }
  constructor() {
    var e, t, n;
    e = this, t = "body", n = h, t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n
  }
}