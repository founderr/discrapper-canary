n.d(t, {
    Cg: function () {
        return p;
    },
    Cs: function () {
        return m;
    },
    EY: function () {
        return R;
    },
    I5: function () {
        return g;
    },
    JQ: function () {
        return x;
    },
    RY: function () {
        return S;
    },
    SU: function () {
        return u;
    },
    Sv: function () {
        return A;
    },
    ZW: function () {
        return O;
    },
    bK: function () {
        return I;
    },
    n0: function () {
        return _;
    },
    qS: function () {
        return T;
    },
    s: function () {
        return E;
    },
    sQ: function () {
        return C;
    },
    wo: function () {
        return d;
    }
});
var i,
    s,
    a,
    r,
    l,
    o,
    c,
    u,
    d,
    _,
    E,
    I,
    m,
    T,
    h = n(990547),
    N = n(981631);
function f(e, t, n) {
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
((i = u || (u = {})).SETTINGS = 'SETTINGS'), (i.ACCOUNT_STANDING = 'ACCOUNT_STANDING'), (i.GUILD_SETTINGS = 'GUILD_SETTINGS'), (i.ENCRYPTION = 'ENCRYPTION'), (i.CONTENT_AND_SOCIAL = 'CONTENT_AND_SOCIAL'), (i.DATA_PRIVACY = 'DATA_PRIVACY');
class C {}
f(C, 'TOS_LINK', 'https://discord.com/terms'), f(C, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), f(C, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), f(C, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), f(C, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), f(C, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__');
class p {}
f(p, 'CLASSIFICATION_ID', 'classification_id'), f(p, 'INCIDENT_TIMESTAMP', 'incident_time'), ((s = d || (d = {})).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (s.LEARN_MORE_LINK = 'learn_more_link');
class g {}
f(g, 'ICON_TYPE', 'icon_type'),
    f(g, 'HEADER', 'header'),
    f(g, 'BODY', 'body'),
    f(g, 'CTAS', 'ctas'),
    f(g, 'TIMESTAMP', 'timestamp'),
    f(g, 'THEME', 'theme'),
    f(g, 'CLIENT_VERSION_MESSAGE', 'client_version_message'),
    f(g, 'LEARN_MORE_LINK', 'learn_more_link'),
    f(g, 'CLASSIFICATION_ID', 'classification_id'),
    ((a = _ || (_ = {}))[(a.ViewViolationDetail = 0)] = 'ViewViolationDetail'),
    (a[(a.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'),
    (a[(a.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'),
    (a[(a.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'),
    (a[(a.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'),
    (a[(a.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'),
    (a[(a.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'),
    (a[(a.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'),
    ((r = E || (E = {}))[(r.SystemDM = 0)] = 'SystemDM'),
    (r[(r.StandingTab = 1)] = 'StandingTab'),
    (r[(r.AppealIngestion = 2)] = 'AppealIngestion'),
    Object.freeze({
        SPEED_BUMP: N.jXE.APPEAL_INGESTION_SPEED_BUMP,
        COLLECT_SIGNAL: N.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
        CONFIRM_SUBMISSION: N.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        REQUEST_SENT: N.jXE.APPEAL_INGESTION_REQUEST_SENT,
        THANKS: N.jXE.APPEAL_INGESTION_THANKS,
        SPAM: N.jXE.APPEAL_INGESTION_SPAM
    }),
    ((l = I || (I = {}))[(l.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'),
    (l[(l.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'),
    (l[(l.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'),
    (l[(l.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE');
let S = [0, 1, 2, 3],
    A = 372,
    R = 279,
    O = { impression_group: h.ImpressionGroups.APPEAL_INGESTION };
((o = m || (m = {})).SPEED_BUMP = 'speed-bump'), (o.COLLECT_SIGNAL = 'collect-signal'), (o.CONFIRM_SUBMISSION = 'confirm-submission'), (o.REQUEST_SENT = 'request-sent'), (o.THANKS = 'thanks');
let x = {
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
((c = T || (T = {}))[(c.USER = 1)] = 'USER'), (c[(c.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (c[(c.GUILD_MEMBER = 3)] = 'GUILD_MEMBER');
