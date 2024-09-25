n.d(t, {
    MS: function () {
        return v;
    },
    Ph: function () {
        return N;
    },
    _2: function () {
        return R;
    },
    bE: function () {
        return A;
    },
    gq: function () {
        return i;
    },
    nf: function () {
        return S;
    }
});
var r,
    i,
    a,
    o = n(653041);
var s = n(544891),
    l = n(780384),
    u = n(410030),
    c = n(726542),
    d = n(122021),
    _ = n(981631),
    E = n(689938);
let f = {};
function h(e, t) {
    return e + t;
}
function p(e, t) {
    return t.map((t) => h(e, t));
}
function m(e) {
    return e.split('-')[1];
}
function I(e) {
    return e.filter((e) => f[e] <= 1).map(m);
}
function T(e, t) {
    e.forEach((e) => {
        f[e] = t;
    });
}
function g(e, t, n) {
    f[h(e, t)] = n;
}
function S(e, t) {
    t.forEach((t) => g(e, t, 3));
}
!(function (e) {
    (e[(e.FAILED = 0)] = 'FAILED'), (e[(e.UNFETCHED = 1)] = 'UNFETCHED'), (e[(e.PENDING = 2)] = 'PENDING'), (e[(e.SUCCEEDED = 3)] = 'SUCCEEDED'), (e[(e.FAILED_NO_RETRY = 4)] = 'FAILED_NO_RETRY');
})(r || (r = {})),
    !(function (e) {
        (e[(e.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (e[(e.BOT = 1)] = 'BOT'), (e[(e.INTEGRATION = 2)] = 'INTEGRATION'), (e[(e.DISCOVERY = 3)] = 'DISCOVERY'), (e[(e.HUB = 4)] = 'HUB'), (e[(e.INVITE = 5)] = 'INVITE'), (e[(e.VANITY_URL = 6)] = 'VANITY_URL'), (e[(e.MANUAL_MEMBER_VERIFICATION = 7)] = 'MANUAL_MEMBER_VERIFICATION');
    })(i || (i = {}));
let A = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    switch (e) {
        case 1:
            return E.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
        case 2:
            return E.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
        case 3:
            return E.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
        case 4:
            return E.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
        case 5:
            return E.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
        case 6:
            if (null != t && !n) return E.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({ vanityUrl: t });
            return E.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
        case 7:
            return E.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION;
        default:
            return E.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN;
    }
};
!(function (e) {
    (e.DISCORD = 'discord'), (e.TWITCH = 'twitch'), (e.YOUTUBE = 'youtube'), (e.GUILD_SUBSCRIPTION = 'guild_subscription');
})(a || (a = {}));
let v = (e) => {
        switch (e) {
            case 'twitch':
                return E.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
            case 'youtube':
                return E.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
            default:
                return E.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
        }
    },
    N = (e) => {
        let t = c.Z.get((0, d.rR)(e)),
            n = (0, u.ZP)();
        return null != t && ['twitch', 'youtube'].includes(e) ? "url('".concat((0, l.wj)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null;
    };
function O(e) {
    return {
        userId: e.user_id,
        sourceInviteCode: e.source_invite_code,
        joinSourceType: e.join_source_type,
        inviterId: e.inviter_id,
        integrationType: e.integration_type
    };
}
async function R(e, t) {
    let n = p(e, t),
        r = I(n);
    if (0 === r.length) return [];
    T(n, 2);
    try {
        let t = await s.tn.post({
            url: _.ANM.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: r }
        });
        if (!Array.isArray(t.body)) return T(n, 0), [];
        let i = t.body.map(O),
            a = [];
        i.forEach((e) => {
            let { userId: t } = e;
            return a.push(t);
        });
        let o = p(e, a),
            l = r.filter((e) => !a.includes(e)),
            u = p(e, l);
        return T(o, 3), T(u, 0), i;
    } catch (e) {
        T(n, 0);
    }
    return [];
}
