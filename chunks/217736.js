"use strict";
n.r(t), n.d(t, {
  trackViewedEvent: function() {
    return r
  },
  CtaEventTypes: function() {
    return s
  },
  trackCtaEvent: function() {
    return o
  }
});
var a, s, l = n("599110"),
  i = n("49111");

function r(e, t) {
  let {
    channelId: n,
    warningId: a,
    senderId: s,
    warningType: i
  } = t;
  l.default.track(e, {
    channel_id: n,
    warning_id: null != a ? parseInt(a) : void 0,
    warning_type: i,
    other_user_id: s
  })
}

function o(e) {
  let {
    channelId: t,
    warningId: n,
    senderId: a,
    warningType: s,
    cta: r
  } = e;
  l.default.track(i.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
    channel_id: t,
    warning_id: null != n ? parseInt(n) : void 0,
    warning_type: s,
    other_user_id: a,
    cta: r
  })
}(a = s || (s = {})).DISMISS = "dismiss", a.OPEN_MORE_TIPS = "open_more_tips", a.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", a.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", a.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", a.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", a.USER_SAFETY_TOOLS_BLOCK_CONFIRM = "user_safety_tools_block_confirm", a.USER_SAFETY_TOOLS_BLOCK_CANCEL = "user_safety_tools_block_cancel", a.USER_MODAL_MUTE = "user_modal_mute", a.USER_MODAL_UNMUTE = "user_modal_unmute", a.FEEDBACK_UPVOTE = "feedback_upvote", a.FEEDBACK_DOWNVOTE = "feedback_downvote"