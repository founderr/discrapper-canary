"use strict";
n.r(t), n.d(t, {
  useTrackOpenPopout: function() {
    return c
  }
});
var l = n("884691"),
  a = n("913144"),
  s = n("716241"),
  i = n("42203"),
  r = n("18494"),
  o = n("599110"),
  u = n("958706"),
  d = n("49111");
let c = e => {
  let {
    emojiId: t,
    currentGuildId: n,
    popoutData: c,
    nonce: m,
    demoMode: f
  } = e, {
    current: h
  } = l.useRef({
    guild_id: n,
    emoji_id: t,
    ...(0, s.collectChannelAnalyticsMetadata)(i.default.getChannel(r.default.getChannelId(n)))
  });
  return l.useEffect(() => {
    var e;
    a.default.dispatch({
      type: "EMOJI_INTERACTION_INITIATED",
      interaction: u.EmojiInteractionPoint.TrackOpenPopoutUsed
    }), !f && o.default.track(d.AnalyticEvents.OPEN_POPOUT, {
      type: null !== (e = null == c ? void 0 : c.analyticsType) && void 0 !== e ? e : "Standard Emoji Popout",
      nonce: m,
      ...h
    })
  }, []), h
}