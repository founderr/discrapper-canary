n.d(t, {
    Cg: function () {
        return x;
    },
    Cs: function () {
        return p;
    },
    EY: function () {
        return S;
    },
    I5: function () {
        return v;
    },
    JQ: function () {
        return b;
    },
    RY: function () {
        return N;
    },
    SU: function () {
        return d;
    },
    Sv: function () {
        return T;
    },
    ZW: function () {
        return A;
    },
    bK: function () {
        return f;
    },
    n0: function () {
        return m;
    },
    qS: function () {
        return _;
    },
    s: function () {
        return h;
    },
    sQ: function () {
        return I;
    },
    wo: function () {
        return u;
    }
});
var i,
    r,
    l,
    a,
    o,
    s,
    c,
    d,
    u,
    m,
    h,
    f,
    p,
    _,
    g = n(990547),
    E = n(981631);
function C(e, t, n) {
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
((i = d || (d = {})).SETTINGS = 'SETTINGS'), (i.ACCOUNT_STANDING = 'ACCOUNT_STANDING'), (i.GUILD_SETTINGS = 'GUILD_SETTINGS'), (i.ENCRYPTION = 'ENCRYPTION'), (i.CONTENT_AND_SOCIAL = 'CONTENT_AND_SOCIAL'), (i.DATA_PRIVACY = 'DATA_PRIVACY');
class I {}
C(I, 'TOS_LINK', 'https://discord.com/terms'), C(I, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), C(I, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), C(I, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), C(I, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), C(I, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__');
class x {}
C(x, 'CLASSIFICATION_ID', 'classification_id'), C(x, 'INCIDENT_TIMESTAMP', 'incident_time'), ((r = u || (u = {})).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (r.LEARN_MORE_LINK = 'learn_more_link');
class v {}
C(v, 'ICON_TYPE', 'icon_type'),
    C(v, 'HEADER', 'header'),
    C(v, 'BODY', 'body'),
    C(v, 'CTAS', 'ctas'),
    C(v, 'TIMESTAMP', 'timestamp'),
    C(v, 'THEME', 'theme'),
    C(v, 'CLIENT_VERSION_MESSAGE', 'client_version_message'),
    C(v, 'LEARN_MORE_LINK', 'learn_more_link'),
    C(v, 'CLASSIFICATION_ID', 'classification_id'),
    ((l = m || (m = {}))[(l.ViewViolationDetail = 0)] = 'ViewViolationDetail'),
    (l[(l.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'),
    (l[(l.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'),
    (l[(l.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'),
    (l[(l.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'),
    (l[(l.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'),
    (l[(l.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'),
    (l[(l.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'),
    ((a = h || (h = {}))[(a.SystemDM = 0)] = 'SystemDM'),
    (a[(a.StandingTab = 1)] = 'StandingTab'),
    (a[(a.AppealIngestion = 2)] = 'AppealIngestion'),
    Object.freeze({
        SPEED_BUMP: E.jXE.APPEAL_INGESTION_SPEED_BUMP,
        COLLECT_SIGNAL: E.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
        CONFIRM_SUBMISSION: E.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        REQUEST_SENT: E.jXE.APPEAL_INGESTION_REQUEST_SENT,
        THANKS: E.jXE.APPEAL_INGESTION_THANKS,
        SPAM: E.jXE.APPEAL_INGESTION_SPAM
    }),
    ((o = f || (f = {}))[(o.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'),
    (o[(o.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'),
    (o[(o.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'),
    (o[(o.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE');
let N = [0, 1, 2, 3],
    T = 372,
    S = 279,
    A = { impression_group: g.ImpressionGroups.APPEAL_INGESTION };
((s = p || (p = {})).SPEED_BUMP = 'speed-bump'), (s.COLLECT_SIGNAL = 'collect-signal'), (s.CONFIRM_SUBMISSION = 'confirm-submission'), (s.REQUEST_SENT = 'request-sent'), (s.THANKS = 'thanks');
let b = {
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
((c = _ || (_ = {}))[(c.USER = 1)] = 'USER'), (c[(c.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (c[(c.GUILD_MEMBER = 3)] = 'GUILD_MEMBER');
