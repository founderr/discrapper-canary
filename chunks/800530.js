t.d(n, {
    Cg: function () {
        return R;
    },
    Cs: function () {
        return A;
    },
    EY: function () {
        return M;
    },
    I5: function () {
        return D;
    },
    JQ: function () {
        return P;
    },
    RY: function () {
        return d;
    },
    SU: function () {
        return c;
    },
    Sv: function () {
        return m;
    },
    ZW: function () {
        return G;
    },
    bK: function () {
        return u;
    },
    n0: function () {
        return N;
    },
    oE: function () {
        return L;
    },
    qS: function () {
        return T;
    },
    s: function () {
        return l;
    },
    sQ: function () {
        return p;
    },
    wo: function () {
        return S;
    }
});
var i,
    E,
    r,
    I,
    s,
    _,
    a,
    o,
    c,
    S,
    N,
    l,
    u,
    A,
    T,
    L,
    C = t(990547),
    f = t(981631);
function O(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
((i = c || (c = {})).SETTINGS = 'SETTINGS'), (i.ACCOUNT_STANDING = 'ACCOUNT_STANDING'), (i.GUILD_SETTINGS = 'GUILD_SETTINGS'), (i.ENCRYPTION = 'ENCRYPTION'), (i.CONTENT_AND_SOCIAL = 'CONTENT_AND_SOCIAL'), (i.DATA_PRIVACY = 'DATA_PRIVACY');
class p {}
O(p, 'TOS_LINK', 'https://discord.com/terms'), O(p, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), O(p, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), O(p, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), O(p, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), O(p, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__');
class R {}
O(R, 'CLASSIFICATION_ID', 'classification_id'), O(R, 'INCIDENT_TIMESTAMP', 'incident_time'), ((E = S || (S = {})).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (E.LEARN_MORE_LINK = 'learn_more_link');
class D {}
O(D, 'ICON_TYPE', 'icon_type'),
    O(D, 'HEADER', 'header'),
    O(D, 'BODY', 'body'),
    O(D, 'CTAS', 'ctas'),
    O(D, 'TIMESTAMP', 'timestamp'),
    O(D, 'THEME', 'theme'),
    O(D, 'CLIENT_VERSION_MESSAGE', 'client_version_message'),
    O(D, 'LEARN_MORE_LINK', 'learn_more_link'),
    O(D, 'CLASSIFICATION_ID', 'classification_id'),
    ((r = N || (N = {}))[(r.ViewViolationDetail = 0)] = 'ViewViolationDetail'),
    (r[(r.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'),
    (r[(r.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'),
    (r[(r.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'),
    (r[(r.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'),
    (r[(r.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'),
    (r[(r.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'),
    (r[(r.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'),
    ((I = l || (l = {}))[(I.SystemDM = 0)] = 'SystemDM'),
    (I[(I.StandingTab = 1)] = 'StandingTab'),
    (I[(I.AppealIngestion = 2)] = 'AppealIngestion'),
    Object.freeze({
        SPEED_BUMP: f.jXE.APPEAL_INGESTION_SPEED_BUMP,
        COLLECT_SIGNAL: f.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
        CONFIRM_SUBMISSION: f.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        REQUEST_SENT: f.jXE.APPEAL_INGESTION_REQUEST_SENT,
        THANKS: f.jXE.APPEAL_INGESTION_THANKS,
        SPAM: f.jXE.APPEAL_INGESTION_SPAM
    }),
    ((s = u || (u = {}))[(s.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'),
    (s[(s.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'),
    (s[(s.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'),
    (s[(s.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE');
let d = [0, 1, 2, 3],
    m = 372,
    M = 279,
    G = { impression_group: C.ImpressionGroups.APPEAL_INGESTION };
((_ = A || (A = {})).SPEED_BUMP = 'speed-bump'), (_.COLLECT_SIGNAL = 'collect-signal'), (_.CONFIRM_SUBMISSION = 'confirm-submission'), (_.REQUEST_SENT = 'request-sent'), (_.THANKS = 'thanks');
let P = {
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
((a = T || (T = {}))[(a.USER = 1)] = 'USER'), (a[(a.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (a[(a.GUILD_MEMBER = 3)] = 'GUILD_MEMBER'), ((o = L || (L = {})).PENDING = 'pending'), (o.LOADING = 'loading'), (o.ERROR = 'error'), (o.SUCCESS = 'success'), (o.FAILURE = 'failure'), (o.NONE = 'none');
