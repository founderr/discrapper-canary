"use strict";
s.r(t), s.d(t, {
  trackViewedEvent: function() {
    return l
  },
  ViewNameTypes: function() {
    return r
  },
  trackNamedViewEvent: function() {
    return u
  },
  CtaEventTypes: function() {
    return o
  },
  trackCtaEvent: function() {
    return E
  }
});
var n, a, r, o, i = s("599110"),
  _ = s("49111");

function l(e, t) {
  let {
    channelId: s,
    warningId: n,
    senderId: a,
    warningType: r
  } = t;
  i.default.track(e, {
    channel_id: s,
    warning_id: null != n ? parseInt(n) : void 0,
    warning_type: r,
    other_user_id: a
  })
}

function u(e) {
  let {
    channelId: t,
    warningId: s,
    senderId: n,
    warningType: a,
    viewName: r,
    isNudgeWarning: o
  } = e;
  i.default.track(_.AnalyticEvents.SAFETY_WARNING_VIEWED, {
    channel_id: t,
    warning_id: null != s ? parseInt(s) : void 0,
    warning_type: a,
    other_user_id: n,
    view_name: r,
    is_nudge_warning: o
  })
}

function E(e) {
  let {
    channelId: t,
    warningId: s,
    senderId: n,
    warningType: a,
    cta: r,
    isNudgeWarning: o
  } = e;
  i.default.track(_.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
    channel_id: t,
    warning_id: null != s ? parseInt(s) : void 0,
    warning_type: a,
    other_user_id: n,
    cta: r,
    is_nudge_warning: o
  })
}(n = r || (r = {})).SAFETY_WARNING_BANNER = "safety_warning_banner", n.SAFETY_TAKEOVER_MODAL = "safety_takeover_modal", n.SAFETY_TOOLS_NUDGE_TOOLTIP = "safety_tools_nudge_tooltip", n.SAFETY_TOOLS_BUTTON = "safety_tools_button", (a = o || (o = {})).OPEN_MORE_TIPS = "open_more_tips", a.USER_BANNER_DISMISS = "user_banner_dismiss", a.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", a.USER_BANNER_BLOCK_AND_REPORT_CONFIRM = "user_banner_block_and_report_confirm", a.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", a.USER_BANNER_OPEN_SAFETY_TOOLS = "user_banner_open_safety_tools", a.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", a.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", a.USER_TAKEOVER_MODAL_DISMISS = "user_takeover_modal_dismiss", a.USER_TAKEOVER_MODAL_TAKE_ACTION = "user_takeover_modal_take_action", a.USER_TAKEOVER_MODAL_SAFETY_TIPS = "user_takeover_modal_safety_tips", a.USER_TAKEOVER_MODAL_BLOCK = "user_takeover_modal_block", a.USER_TAKEOVER_MODAL_UNBLOCK = "user_takeover_modal_unblock", a.USER_TAKEOVER_MODAL_REPORT = "user_takeover_modal_report", a.USER_TAKEOVER_MODAL_NO_FILTR = "user_takeover_modal_no_filtr", a.USER_TAKEOVER_MODAL_CTL = "user_takeover_modal_ctl", a.USER_SAFETY_TOOLS_BUTTON_CLICK = "user_safety_tools_button_click", a.USER_SAFETY_TOOLS_BLOCK_CONFIRM = "user_safety_tools_block_confirm", a.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM = "user_safety_tools_block_and_report_confirm", a.USER_SAFETY_TOOLS_BLOCK_CANCEL = "user_safety_tools_block_cancel", a.USER_SAFETY_TOOLS_REPORT = "user_safety_tools_report", a.USER_SAFETY_TOOLS_NO_FILTR = "user_safety_tools_no_filtr", a.USER_SAFETY_TOOLS_CTL = "user_safety_tools_ctl", a.USER_SAFETY_TOOLS_VIBING_WUMPUS = "user_safety_tools_vibing_wumpus", a.USER_SAFETY_TOOLS_SAFETY_TIPS = "user_safety_tools_safety_tips", a.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS = "user_safety_tools_about_safety_alerts", a.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS = "user_safety_tools_about_safety_alerts_dismiss", a.USER_SAFETY_TOOLS_DISMISS = "user_safety_tools_dismiss", a.USER_MODAL_MUTE = "user_modal_mute", a.USER_MODAL_UNMUTE = "user_modal_unmute", a.FEEDBACK_UPVOTE = "feedback_upvote", a.FEEDBACK_DOWNVOTE = "feedback_downvote"