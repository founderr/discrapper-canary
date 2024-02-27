"use strict";
s.r(t), s.d(t, {
  trackViewedEvent: function() {
    return i
  },
  CtaEventTypes: function() {
    return a
  },
  trackCtaEvent: function() {
    return _
  }
});
var n, a, o = s("599110"),
  r = s("49111");

function i(e, t) {
  let {
    channelId: s,
    warningId: n,
    senderId: a,
    warningType: r
  } = t;
  o.default.track(e, {
    channel_id: s,
    warning_id: null != n ? parseInt(n) : void 0,
    warning_type: r,
    other_user_id: a
  })
}

function _(e) {
  let {
    channelId: t,
    warningId: s,
    senderId: n,
    warningType: a,
    cta: i,
    isNudgeWarning: _
  } = e;
  o.default.track(r.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
    channel_id: t,
    warning_id: null != s ? parseInt(s) : void 0,
    warning_type: a,
    other_user_id: n,
    cta: i,
    is_nudge_warning: _
  })
}(n = a || (a = {})).OPEN_MORE_TIPS = "open_more_tips", n.USER_BANNER_DISMISS = "user_banner_dismiss", n.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", n.USER_BANNER_BLOCK_AND_REPORT_CONFIRM = "user_banner_block_and_report_confirm", n.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", n.USER_BANNER_OPEN_SAFETY_TOOLS = "user_banner_open_safety_tools", n.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", n.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", n.USER_TAKEOVER_MODAL_DISMISS = "user_takeover_modal_dismiss", n.USER_TAKEOVER_MODAL_TAKE_ACTION = "user_takeover_modal_take_action", n.USER_TAKEOVER_MODAL_SAFETY_TIPS = "user_takeover_modal_safety_tips", n.USER_TAKEOVER_MODAL_BLOCK = "user_takeover_modal_block", n.USER_TAKEOVER_MODAL_UNBLOCK = "user_takeover_modal_unblock", n.USER_TAKEOVER_MODAL_REPORT = "user_takeover_modal_report", n.USER_TAKEOVER_MODAL_NO_FILTR = "user_takeover_modal_no_filtr", n.USER_TAKEOVER_MODAL_CTL = "user_takeover_modal_ctl", n.USER_SAFETY_TOOLS_BUTTON_CLICK = "user_safety_tools_button_click", n.USER_SAFETY_TOOLS_BLOCK_CONFIRM = "user_safety_tools_block_confirm", n.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM = "user_safety_tools_block_and_report_confirm", n.USER_SAFETY_TOOLS_BLOCK_CANCEL = "user_safety_tools_block_cancel", n.USER_SAFETY_TOOLS_REPORT = "user_safety_tools_report", n.USER_SAFETY_TOOLS_NO_FILTR = "user_safety_tools_no_filtr", n.USER_SAFETY_TOOLS_CTL = "user_safety_tools_ctl", n.USER_SAFETY_TOOLS_VIBING_WUMPUS = "user_safety_tools_vibing_wumpus", n.USER_SAFETY_TOOLS_SAFETY_TIPS = "user_safety_tools_safety_tips", n.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS = "user_safety_tools_about_safety_alerts", n.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS = "user_safety_tools_about_safety_alerts_dismiss", n.USER_SAFETY_TOOLS_DISMISS = "user_safety_tools_dismiss", n.USER_MODAL_MUTE = "user_modal_mute", n.USER_MODAL_UNMUTE = "user_modal_unmute", n.FEEDBACK_UPVOTE = "feedback_upvote", n.FEEDBACK_DOWNVOTE = "feedback_downvote"