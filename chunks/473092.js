n.d(t, {
    KQ: function () {
        return u;
    },
    Lm: function () {
        return d;
    },
    MC: function () {
        return l;
    },
    NM: function () {
        return i;
    },
    pb: function () {
        return r;
    },
    qc: function () {
        return c;
    }
});
var r,
    i,
    a = n(594174),
    o = n(626135),
    s = n(981631);
function l(e, t) {
    let { channelId: n, warningId: r, senderId: i, warningType: a } = t;
    o.default.track(e, {
        channel_id: n,
        warning_id: null != r ? parseInt(r) : void 0,
        warning_type: a,
        other_user_id: i
    });
}
function u(e) {
    let { channelId: t, warningId: n, senderId: r, warningType: i, viewName: a, isNudgeWarning: l } = e;
    o.default.track(s.rMx.SAFETY_WARNING_VIEWED, {
        channel_id: t,
        warning_id: null != n ? parseInt(n) : void 0,
        warning_type: i,
        other_user_id: r,
        view_name: a,
        is_nudge_warning: l
    });
}
function c(e) {
    let { channelId: t, warningId: n, senderId: r, warningType: i, cta: a, isNudgeWarning: l } = e;
    o.default.track(s.rMx.SAFETY_WARNING_CTA_CLICKED, {
        channel_id: t,
        warning_id: null != n ? parseInt(n) : void 0,
        warning_type: i,
        other_user_id: r,
        cta: a,
        is_nudge_warning: l
    });
}
function d() {
    var e;
    return !1 === (null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed);
}
!(function (e) {
    (e.SAFETY_WARNING_BANNER = 'safety_warning_banner'), (e.SAFETY_TAKEOVER_MODAL = 'safety_takeover_modal'), (e.SAFETY_TOOLS_NUDGE_TOOLTIP = 'safety_tools_nudge_tooltip'), (e.SAFETY_TOOLS_BUTTON = 'safety_tools_button');
})(r || (r = {})),
    !(function (e) {
        (e.OPEN_MORE_TIPS = 'open_more_tips'), (e.USER_BANNER_DISMISS = 'user_banner_dismiss'), (e.USER_BANNER_BLOCK_CONFIRM = 'user_banner_block_confirm'), (e.USER_BANNER_BLOCK_AND_REPORT_CONFIRM = 'user_banner_block_and_report_confirm'), (e.USER_BANNER_BLOCK_CANCEL = 'user_banner_block_cancel'), (e.USER_BANNER_OPEN_SAFETY_TOOLS = 'user_banner_open_safety_tools'), (e.USER_MODAL_BLOCK_CONFIRM = 'user_modal_block_confirm'), (e.USER_MODAL_BLOCK_CANCEL = 'user_modal_block_cancel'), (e.USER_TAKEOVER_MODAL_DISMISS = 'user_takeover_modal_dismiss'), (e.USER_TAKEOVER_MODAL_TAKE_ACTION = 'user_takeover_modal_take_action'), (e.USER_TAKEOVER_MODAL_SAFETY_TIPS = 'user_takeover_modal_safety_tips'), (e.USER_TAKEOVER_MODAL_BLOCK = 'user_takeover_modal_block'), (e.USER_TAKEOVER_MODAL_UNBLOCK = 'user_takeover_modal_unblock'), (e.USER_TAKEOVER_MODAL_REPORT = 'user_takeover_modal_report'), (e.USER_TAKEOVER_MODAL_NO_FILTR = 'user_takeover_modal_no_filtr'), (e.USER_TAKEOVER_MODAL_THROUGHLINE = 'user_takeover_modal_throughline'), (e.USER_TAKEOVER_MODAL_CTL = 'user_takeover_modal_ctl'), (e.USER_TAKEOVER_MODAL_CTL_SMS = 'user_takeover_modal_ctl_sms'), (e.USER_TAKEOVER_MODAL_CTL_WEB = 'user_takeover_modal_ctl_web'), (e.USER_SAFETY_TOOLS_BUTTON_CLICK = 'user_safety_tools_button_click'), (e.USER_SAFETY_TOOLS_BLOCK_CONFIRM = 'user_safety_tools_block_confirm'), (e.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM = 'user_safety_tools_block_and_report_confirm'), (e.USER_SAFETY_TOOLS_BLOCK_CANCEL = 'user_safety_tools_block_cancel'), (e.USER_SAFETY_TOOLS_UNBLOCK = 'user_safety_tools_unblock'), (e.USER_SAFETY_TOOLS_REPORT = 'user_safety_tools_report'), (e.USER_SAFETY_TOOLS_NO_FILTR = 'user_safety_tools_no_filtr'), (e.USER_SAFETY_TOOLS_THROUGHLINE = 'user_safety_tools_throughline'), (e.USER_SAFETY_TOOLS_CTL = 'user_safety_tools_ctl'), (e.USER_SAFETY_TOOLS_CTL_SMS = 'user_safety_tools_ctl_sms'), (e.USER_SAFETY_TOOLS_CTL_WEB = 'user_safety_tools_ctl_web'), (e.USER_SAFETY_TOOLS_VIBING_WUMPUS = 'user_safety_tools_vibing_wumpus'), (e.USER_SAFETY_TOOLS_SAFETY_TIPS = 'user_safety_tools_safety_tips'), (e.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS = 'user_safety_tools_about_safety_alerts'), (e.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS = 'user_safety_tools_about_safety_alerts_dismiss'), (e.USER_SAFETY_TOOLS_DISMISS = 'user_safety_tools_dismiss'), (e.USER_MODAL_MUTE = 'user_modal_mute'), (e.USER_MODAL_UNMUTE = 'user_modal_unmute'), (e.FEEDBACK_UPVOTE = 'feedback_upvote'), (e.FEEDBACK_DOWNVOTE = 'feedback_downvote');
    })(i || (i = {}));
