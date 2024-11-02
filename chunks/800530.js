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
        return p;
    },
    JQ: function () {
        return G;
    },
    RY: function () {
        return D;
    },
    SU: function () {
        return S;
    },
    Sv: function () {
        return R;
    },
    ZW: function () {
        return m;
    },
    bK: function () {
        return s;
    },
    n0: function () {
        return N;
    },
    qS: function () {
        return T;
    },
    s: function () {
        return u;
    },
    sQ: function () {
        return f;
    },
    wo: function () {
        return c;
    }
});
var i,
    r,
    E,
    _,
    I,
    o,
    a,
    S,
    c,
    N,
    u,
    s,
    A,
    T,
    l = n(990547),
    L = n(981631);
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
C(O, 'CLASSIFICATION_ID', 'classification_id'), C(O, 'INCIDENT_TIMESTAMP', 'incident_time'), ((r = c || (c = {})).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (r.LEARN_MORE_LINK = 'learn_more_link');
class p {}
C(p, 'ICON_TYPE', 'icon_type'),
    C(p, 'HEADER', 'header'),
    C(p, 'BODY', 'body'),
    C(p, 'CTAS', 'ctas'),
    C(p, 'TIMESTAMP', 'timestamp'),
    C(p, 'THEME', 'theme'),
    C(p, 'CLIENT_VERSION_MESSAGE', 'client_version_message'),
    C(p, 'LEARN_MORE_LINK', 'learn_more_link'),
    C(p, 'CLASSIFICATION_ID', 'classification_id'),
    ((E = N || (N = {}))[(E.ViewViolationDetail = 0)] = 'ViewViolationDetail'),
    (E[(E.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'),
    (E[(E.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'),
    (E[(E.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'),
    (E[(E.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'),
    (E[(E.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'),
    (E[(E.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'),
    (E[(E.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'),
    ((_ = u || (u = {}))[(_.SystemDM = 0)] = 'SystemDM'),
    (_[(_.StandingTab = 1)] = 'StandingTab'),
    (_[(_.AppealIngestion = 2)] = 'AppealIngestion'),
    Object.freeze({
        SPEED_BUMP: L.jXE.APPEAL_INGESTION_SPEED_BUMP,
        COLLECT_SIGNAL: L.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
        CONFIRM_SUBMISSION: L.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        REQUEST_SENT: L.jXE.APPEAL_INGESTION_REQUEST_SENT,
        THANKS: L.jXE.APPEAL_INGESTION_THANKS,
        SPAM: L.jXE.APPEAL_INGESTION_SPAM
    }),
    ((I = s || (s = {}))[(I.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'),
    (I[(I.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'),
    (I[(I.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'),
    (I[(I.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE');
let D = [0, 1, 2, 3],
    R = 372,
    d = 279,
    m = { impression_group: l.ImpressionGroups.APPEAL_INGESTION };
((o = A || (A = {})).SPEED_BUMP = 'speed-bump'), (o.COLLECT_SIGNAL = 'collect-signal'), (o.CONFIRM_SUBMISSION = 'confirm-submission'), (o.REQUEST_SENT = 'request-sent'), (o.THANKS = 'thanks');
let G = {
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
((a = T || (T = {}))[(a.USER = 1)] = 'USER'), (a[(a.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (a[(a.GUILD_MEMBER = 3)] = 'GUILD_MEMBER');
