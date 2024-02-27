"use strict";
a.r(t), a.d(t, {
  useTrackPollCreationEvents: function() {
    return r
  }
}), a("424973");
var l = a("884691"),
  s = a("716241"),
  n = a("49111");

function r(e, t, a, r) {
  let i = l.useCallback(() => {
    let l = [],
      i = 0,
      o = 0,
      u = 0;
    t.forEach(e => {
      null != e.text && l.push(e.text);
      let t = e.image;
      null != t && (null != t.emoji ? o += 1 : null != t.stickerId ? u += 1 : null != t.mediaAttachmentState && (i += 1))
    }), s.default.trackWithMetadata(n.AnalyticEvents.POLL_CREATION_CANCELLED, {
      question_text: e,
      answers_text: l,
      answers_count: t.length,
      attachments_count: i,
      emojis_count: o,
      stickers_count: u,
      allow_multiselect: a,
      layout_type: r
    })
  }, [t, a, e, r]);
  return {
    trackPollCreationCancelled: i
  }
}