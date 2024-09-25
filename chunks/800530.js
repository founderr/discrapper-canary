n.d(t, {
    Cg: function () {
        return f;
    },
    Cs: function () {
        return l;
    },
    EY: function () {
        return I;
    },
    I5: function () {
        return h;
    },
    JQ: function () {
        return g;
    },
    RY: function () {
        return p;
    },
    SU: function () {
        return r;
    },
    Sv: function () {
        return m;
    },
    ZW: function () {
        return T;
    },
    bK: function () {
        return s;
    },
    n0: function () {
        return a;
    },
    qS: function () {
        return u;
    },
    s: function () {
        return o;
    },
    sQ: function () {
        return E;
    },
    wo: function () {
        return i;
    }
});
var r,
    i,
    a,
    o,
    s,
    l,
    u,
    c = n(990547),
    d = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
!(function (e) {
    (e.SETTINGS = 'SETTINGS'), (e.ACCOUNT_STANDING = 'ACCOUNT_STANDING'), (e.GUILD_SETTINGS = 'GUILD_SETTINGS'), (e.ENCRYPTION = 'ENCRYPTION'), (e.CONTENT_AND_SOCIAL = 'CONTENT_AND_SOCIAL'), (e.DATA_PRIVACY = 'DATA_PRIVACY');
})(r || (r = {}));
class E {}
_(E, 'TOS_LINK', 'https://discord.com/terms'), _(E, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), _(E, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), _(E, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), _(E, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), _(E, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__');
class f {}
_(f, 'CLASSIFICATION_ID', 'classification_id'),
    _(f, 'INCIDENT_TIMESTAMP', 'incident_time'),
    !(function (e) {
        (e.POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (e.LEARN_MORE_LINK = 'learn_more_link');
    })(i || (i = {}));
class h {}
_(h, 'ICON_TYPE', 'icon_type'),
    _(h, 'HEADER', 'header'),
    _(h, 'BODY', 'body'),
    _(h, 'CTAS', 'ctas'),
    _(h, 'TIMESTAMP', 'timestamp'),
    _(h, 'THEME', 'theme'),
    _(h, 'CLIENT_VERSION_MESSAGE', 'client_version_message'),
    _(h, 'LEARN_MORE_LINK', 'learn_more_link'),
    _(h, 'CLASSIFICATION_ID', 'classification_id'),
    !(function (e) {
        (e[(e.ViewViolationDetail = 0)] = 'ViewViolationDetail'), (e[(e.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'), (e[(e.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'), (e[(e.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'), (e[(e.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'), (e[(e.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'), (e[(e.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'), (e[(e.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.SystemDM = 0)] = 'SystemDM'), (e[(e.StandingTab = 1)] = 'StandingTab'), (e[(e.AppealIngestion = 2)] = 'AppealIngestion');
    })(o || (o = {})),
    Object.freeze({
        SPEED_BUMP: d.jXE.APPEAL_INGESTION_SPEED_BUMP,
        COLLECT_SIGNAL: d.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
        CONFIRM_SUBMISSION: d.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        REQUEST_SENT: d.jXE.APPEAL_INGESTION_REQUEST_SENT,
        THANKS: d.jXE.APPEAL_INGESTION_THANKS,
        SPAM: d.jXE.APPEAL_INGESTION_SPAM
    }),
    !(function (e) {
        (e[(e.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'), (e[(e.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'), (e[(e.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'), (e[(e.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE');
    })(s || (s = {}));
let p = [0, 1, 2, 3],
    m = 372,
    I = 279,
    T = { impression_group: c.ImpressionGroups.APPEAL_INGESTION };
!(function (e) {
    (e.SPEED_BUMP = 'speed-bump'), (e.COLLECT_SIGNAL = 'collect-signal'), (e.CONFIRM_SUBMISSION = 'confirm-submission'), (e.REQUEST_SENT = 'request-sent'), (e.THANKS = 'thanks');
})(l || (l = {}));
let g = {
    'speed-bump': {
        next: 'collect-signal',
        prev: null
    },
    'collect-signal': {
        next: 'confirm-submission',
        prev: 'speed-bump'
    },
    'confirm-submission': {
        next: 'request-sent',
        prev: 'collect-signal'
    },
    'request-sent': {
        next: null,
        prev: null
    }
};
!(function (e) {
    (e[(e.USER = 1)] = 'USER'), (e[(e.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (e[(e.GUILD_MEMBER = 3)] = 'GUILD_MEMBER');
})(u || (u = {}));
