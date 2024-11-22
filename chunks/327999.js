n.d(t, {
    MS: function () {
        return S;
    },
    Ph: function () {
        return y;
    },
    _2: function () {
        return N;
    },
    bE: function () {
        return T;
    },
    gq: function () {
        return i;
    },
    nf: function () {
        return b;
    }
}),
    n(653041);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(544891),
    c = n(780384),
    d = n(410030),
    f = n(726542),
    _ = n(122021),
    p = n(981631),
    h = n(388032);
let m = {};
function g(e, t) {
    return e + t;
}
function E(e, t) {
    return t.map((t) => e + t);
}
function v(e) {
    return e.split('-')[1];
}
((s = r || (r = {}))[(s.FAILED = 0)] = 'FAILED'), (s[(s.UNFETCHED = 1)] = 'UNFETCHED'), (s[(s.PENDING = 2)] = 'PENDING'), (s[(s.SUCCEEDED = 3)] = 'SUCCEEDED'), (s[(s.FAILED_NO_RETRY = 4)] = 'FAILED_NO_RETRY');
function I(e, t) {
    e.forEach((e) => {
        m[e] = t;
    });
}
function b(e, t) {
    t.forEach((t) =>
        (function (e, t, n) {
            m[e + t] = 3;
        })(e, t, 3)
    );
}
((o = i || (i = {}))[(o.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (o[(o.BOT = 1)] = 'BOT'), (o[(o.INTEGRATION = 2)] = 'INTEGRATION'), (o[(o.DISCOVERY = 3)] = 'DISCOVERY'), (o[(o.HUB = 4)] = 'HUB'), (o[(o.INVITE = 5)] = 'INVITE'), (o[(o.VANITY_URL = 6)] = 'VANITY_URL'), (o[(o.MANUAL_MEMBER_VERIFICATION = 7)] = 'MANUAL_MEMBER_VERIFICATION');
let T = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    switch (e) {
        case 1:
            return h.intl.string(h.t.HumZAg);
        case 2:
            return h.intl.string(h.t.gmCUFx);
        case 3:
            return h.intl.string(h.t['Ql/e9f']);
        case 4:
            return h.intl.string(h.t.Op8B3N);
        case 5:
            return h.intl.string(h.t['/3vIRU']);
        case 6:
            if (null != t && !n) return h.intl.formatToPlainString(h.t.EIUjR0, { vanityUrl: t });
            return h.intl.string(h.t.dGiD1N);
        case 7:
            return h.intl.string(h.t.vdu7oa);
        default:
            return h.intl.string(h.t.DvMBkZ);
    }
};
((l = a || (a = {})).DISCORD = 'discord'), (l.TWITCH = 'twitch'), (l.YOUTUBE = 'youtube'), (l.GUILD_SUBSCRIPTION = 'guild_subscription');
let S = (e) => {
        switch (e) {
            case 'twitch':
                return h.intl.string(h.t.AVGAk5);
            case 'youtube':
                return h.intl.string(h.t.PHSAsr);
            default:
                return h.intl.string(h.t.gmCUFx);
        }
    },
    y = (e) => {
        let t = f.Z.get((0, _.rR)(e)),
            n = (0, d.ZP)();
        return null != t && ['twitch', 'youtube'].includes(e) ? "url('".concat((0, c.wj)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null;
    };
function A(e) {
    return {
        userId: e.user_id,
        sourceInviteCode: e.source_invite_code,
        joinSourceType: e.join_source_type,
        inviterId: e.inviter_id,
        integrationType: e.integration_type
    };
}
async function N(e, t) {
    let n = E(e, t),
        r = n.filter((e) => m[e] <= 1).map(v);
    if (0 === r.length) return [];
    I(n, 2);
    try {
        let t = await u.tn.post({
            url: p.ANM.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: r },
            rejectWithError: !0
        });
        if (!Array.isArray(t.body)) return I(n, 0), [];
        let i = t.body.map(A),
            a = [];
        i.forEach((e) => {
            let { userId: t } = e;
            return a.push(t);
        });
        let s = E(e, a),
            o = r.filter((e) => !a.includes(e)),
            l = E(e, o);
        return I(s, 3), I(l, 0), i;
    } catch (e) {
        I(n, 0);
    }
    return [];
}
