n.d(t, {
    Cg: function () {
        return O;
    },
    Cs: function () {
        return A;
    },
    EY: function () {
        return d;
    },
    I5: function () {
        return D;
    },
    JQ: function () {
        return m;
    },
    RY: function () {
        return R;
    },
    SU: function () {
        return S;
    },
    Sv: function () {
        return p;
    },
    ZW: function () {
        return G;
    },
    bK: function () {
        return s;
    },
    n0: function () {
        return c;
    },
    qS: function () {
        return L;
    },
    s: function () {
        return u;
    },
    sQ: function () {
        return f;
    },
    wo: function () {
        return N;
    }
});
var i,
    E,
    r,
    _,
    I,
    o,
    a,
    S,
    N,
    c,
    u,
    s,
    A,
    L,
    T = n(990547),
    l = n(981631);
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
((i = S || (S = {})).SETTINGS = 'SETTINGS'), (i.ACCOUNT_STANDING = 'ACCOUNT_STANDING'), (i.GUILD_SETTINGS = 'GUILD_SETTINGS'), (i.ENCRYPTION = 'ENCRYPTION'), (i.CONTENT_AND_SOCIAL = 'CONTENT_AND_SOCIAL'), (i.DATA_PRIVACY = 'DATA_PRIVACY');
class f {}
C(f, 'TOS_LINK', 'https://discord.com/terms'), C(f, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), C(f, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), C(f, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), C(f, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), C(f, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__');
class O {}
C(O, 'CLASSIFICATION_ID', 'classification_id'), C(O, 'INCIDENT_TIMESTAMP', 'incident_time'), ((E = N || (N = {})).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (E.LEARN_MORE_LINK = 'learn_more_link');
class D {}
C(D, 'ICON_TYPE', 'icon_type'),
    C(D, 'HEADER', 'header'),
    C(D, 'BODY', 'body'),
    C(D, 'CTAS', 'ctas'),
    C(D, 'TIMESTAMP', 'timestamp'),
    C(D, 'THEME', 'theme'),
    C(D, 'CLIENT_VERSION_MESSAGE', 'client_version_message'),
    C(D, 'LEARN_MORE_LINK', 'learn_more_link'),
    C(D, 'CLASSIFICATION_ID', 'classification_id'),
    ((r = c || (c = {}))[(r.ViewViolationDetail = 0)] = 'ViewViolationDetail'),
    (r[(r.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'),
    (r[(r.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'),
    (r[(r.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'),
    (r[(r.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'),
    (r[(r.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'),
    (r[(r.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'),
    (r[(r.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'),
    ((_ = u || (u = {}))[(_.SystemDM = 0)] = 'SystemDM'),
    (_[(_.StandingTab = 1)] = 'StandingTab'),
    (_[(_.AppealIngestion = 2)] = 'AppealIngestion'),
    Object.freeze({
        SPEED_BUMP: l.jXE.APPEAL_INGESTION_SPEED_BUMP,
        COLLECT_SIGNAL: l.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
        CONFIRM_SUBMISSION: l.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        REQUEST_SENT: l.jXE.APPEAL_INGESTION_REQUEST_SENT,
        THANKS: l.jXE.APPEAL_INGESTION_THANKS,
        SPAM: l.jXE.APPEAL_INGESTION_SPAM
    }),
    ((I = s || (s = {}))[(I.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'),
    (I[(I.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'),
    (I[(I.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'),
    (I[(I.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE');
let R = [0, 1, 2, 3],
    p = 372,
    d = 279,
    G = { impression_group: T.ImpressionGroups.APPEAL_INGESTION };
((o = A || (A = {})).SPEED_BUMP = 'speed-bump'), (o.COLLECT_SIGNAL = 'collect-signal'), (o.CONFIRM_SUBMISSION = 'confirm-submission'), (o.REQUEST_SENT = 'request-sent'), (o.THANKS = 'thanks');
let m = {
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
((a = L || (L = {}))[(a.USER = 1)] = 'USER'), (a[(a.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (a[(a.GUILD_MEMBER = 3)] = 'GUILD_MEMBER');
