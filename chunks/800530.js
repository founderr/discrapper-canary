n.d(t, {
    Cg: function () {
        return f;
    },
    Cs: function () {
        return u;
    },
    EY: function () {
        return M;
    },
    I5: function () {
        return R;
    },
    JQ: function () {
        return P;
    },
    RY: function () {
        return D;
    },
    SU: function () {
        return a;
    },
    Sv: function () {
        return p;
    },
    ZW: function () {
        return G;
    },
    bK: function () {
        return c;
    },
    n0: function () {
        return A;
    },
    qS: function () {
        return T;
    },
    s: function () {
        return s;
    },
    sQ: function () {
        return l;
    },
    wo: function () {
        return o;
    }
});
var E,
    _,
    i,
    r,
    I,
    N,
    S,
    a,
    o,
    A,
    s,
    c,
    u,
    T,
    L = n(990547),
    O = n(981631);
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
((E = a || (a = {})).SETTINGS = 'SETTINGS'), (E.ACCOUNT_STANDING = 'ACCOUNT_STANDING'), (E.GUILD_SETTINGS = 'GUILD_SETTINGS'), (E.ENCRYPTION = 'ENCRYPTION'), (E.CONTENT_AND_SOCIAL = 'CONTENT_AND_SOCIAL'), (E.DATA_PRIVACY = 'DATA_PRIVACY');
class l {}
C(l, 'TOS_LINK', 'https://discord.com/terms'), C(l, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), C(l, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), C(l, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), C(l, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), C(l, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__');
class f {}
C(f, 'CLASSIFICATION_ID', 'classification_id'), C(f, 'INCIDENT_TIMESTAMP', 'incident_time'), ((_ = o || (o = {})).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (_.LEARN_MORE_LINK = 'learn_more_link');
class R {}
C(R, 'ICON_TYPE', 'icon_type'),
    C(R, 'HEADER', 'header'),
    C(R, 'BODY', 'body'),
    C(R, 'CTAS', 'ctas'),
    C(R, 'TIMESTAMP', 'timestamp'),
    C(R, 'THEME', 'theme'),
    C(R, 'CLIENT_VERSION_MESSAGE', 'client_version_message'),
    C(R, 'LEARN_MORE_LINK', 'learn_more_link'),
    C(R, 'CLASSIFICATION_ID', 'classification_id'),
    ((i = A || (A = {}))[(i.ViewViolationDetail = 0)] = 'ViewViolationDetail'),
    (i[(i.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'),
    (i[(i.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'),
    (i[(i.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'),
    (i[(i.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'),
    (i[(i.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'),
    (i[(i.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'),
    (i[(i.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'),
    ((r = s || (s = {}))[(r.SystemDM = 0)] = 'SystemDM'),
    (r[(r.StandingTab = 1)] = 'StandingTab'),
    (r[(r.AppealIngestion = 2)] = 'AppealIngestion'),
    Object.freeze({
        SPEED_BUMP: O.jXE.APPEAL_INGESTION_SPEED_BUMP,
        COLLECT_SIGNAL: O.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
        CONFIRM_SUBMISSION: O.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        REQUEST_SENT: O.jXE.APPEAL_INGESTION_REQUEST_SENT,
        THANKS: O.jXE.APPEAL_INGESTION_THANKS,
        SPAM: O.jXE.APPEAL_INGESTION_SPAM
    }),
    ((I = c || (c = {}))[(I.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'),
    (I[(I.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'),
    (I[(I.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'),
    (I[(I.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE');
let D = [0, 1, 2, 3],
    p = 372,
    M = 279,
    G = { impression_group: L.ImpressionGroups.APPEAL_INGESTION };
((N = u || (u = {})).SPEED_BUMP = 'speed-bump'), (N.COLLECT_SIGNAL = 'collect-signal'), (N.CONFIRM_SUBMISSION = 'confirm-submission'), (N.REQUEST_SENT = 'request-sent'), (N.THANKS = 'thanks');
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
((S = T || (T = {}))[(S.USER = 1)] = 'USER'), (S[(S.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (S[(S.GUILD_MEMBER = 3)] = 'GUILD_MEMBER');
