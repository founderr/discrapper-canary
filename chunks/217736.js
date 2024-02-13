"use strict";
n.r(t), n.d(t, {
  trackViewedEvent: function() {
    return r
  },
  CtaEventTypes: function() {
    return a
  },
  trackCtaEvent: function() {
    return o
  }
});
var s, a, l = n("599110"),
  i = n("49111");

function r(e, t) {
  let {
    channelId: n,
    warningId: s,
    senderId: a,
    warningType: i
  } = t;
  l.default.track(e, {
    channel_id: n,
    warning_id: parseInt(s),
    warning_type: i,
    other_user_id: a
  })
}

function o(e) {
  let {
    channelId: t,
    warningId: n,
    senderId: s,
    warningType: a,
    cta: r
  } = e;
  l.default.track(i.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
    channel_id: t,
    warning_id: parseInt(n),
    warning_type: a,
    other_user_id: s,
    cta: r
  })
}(s = a || (a = {})).DISMISS = "dismiss", s.OPEN_MORE_TIPS = "open_more_tips", s.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", s.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", s.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", s.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", s.USER_MODAL_MUTE = "user_modal_mute", s.USER_MODAL_UNMUTE = "user_modal_unmute", s.FEEDBACK_UPVOTE = "feedback_upvote", s.FEEDBACK_DOWNVOTE = "feedback_downvote"