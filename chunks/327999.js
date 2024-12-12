r.d(n, {
    MS: function () {
        return S;
    },
    Ph: function () {
        return A;
    },
    _2: function () {
        return C;
    },
    bE: function () {
        return y;
    },
    gq: function () {
        return a;
    },
    nf: function () {
        return b;
    }
});
var i,
    a,
    s,
    o = r(653041);
var l = r(544891),
    u = r(780384),
    c = r(410030),
    d = r(726542),
    f = r(122021),
    _ = r(981631),
    h = r(388032);
let p = {};
function m(e, n) {
    return e + n;
}
function g(e, n) {
    return n.map((n) => m(e, n));
}
function E(e) {
    return e.split('-')[1];
}
function v(e) {
    return e.filter((e) => p[e] <= 1).map(E);
}
function I(e, n) {
    e.forEach((e) => {
        p[e] = n;
    });
}
function T(e, n, r) {
    p[m(e, n)] = r;
}
function b(e, n) {
    n.forEach((n) => T(e, n, 3));
}
!(function (e) {
    (e[(e.FAILED = 0)] = 'FAILED'), (e[(e.UNFETCHED = 1)] = 'UNFETCHED'), (e[(e.PENDING = 2)] = 'PENDING'), (e[(e.SUCCEEDED = 3)] = 'SUCCEEDED'), (e[(e.FAILED_NO_RETRY = 4)] = 'FAILED_NO_RETRY');
})(i || (i = {})),
    !(function (e) {
        (e[(e.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (e[(e.BOT = 1)] = 'BOT'), (e[(e.INTEGRATION = 2)] = 'INTEGRATION'), (e[(e.DISCOVERY = 3)] = 'DISCOVERY'), (e[(e.HUB = 4)] = 'HUB'), (e[(e.INVITE = 5)] = 'INVITE'), (e[(e.VANITY_URL = 6)] = 'VANITY_URL'), (e[(e.MANUAL_MEMBER_VERIFICATION = 7)] = 'MANUAL_MEMBER_VERIFICATION');
    })(a || (a = {}));
let y = function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
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
            if (null != n && !r) return h.intl.formatToPlainString(h.t.EIUjR0, { vanityUrl: n });
            return h.intl.string(h.t.dGiD1N);
        case 7:
            return h.intl.string(h.t.vdu7oa);
        default:
            return h.intl.string(h.t.DvMBkZ);
    }
};
!(function (e) {
    (e.DISCORD = 'discord'), (e.TWITCH = 'twitch'), (e.YOUTUBE = 'youtube'), (e.GUILD_SUBSCRIPTION = 'guild_subscription');
})(s || (s = {}));
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
    A = (e) => {
        let n = d.Z.get((0, f.rR)(e)),
            r = (0, c.ZP)();
        return null != n && ['twitch', 'youtube'].includes(e) ? "url('".concat((0, u.wj)(r) ? n.icon.darkSVG : n.icon.lightSVG, "')") : null;
    };
function N(e) {
    return {
        userId: e.user_id,
        sourceInviteCode: e.source_invite_code,
        joinSourceType: e.join_source_type,
        inviterId: e.inviter_id,
        integrationType: e.integration_type
    };
}
async function C(e, n) {
    let r = g(e, n),
        i = v(r);
    if (0 === i.length) return [];
    I(r, 2);
    try {
        let n = await l.tn.post({
            url: _.ANM.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: i },
            rejectWithError: !0
        });
        if (!Array.isArray(n.body)) return I(r, 0), [];
        let a = n.body.map(N),
            s = [];
        a.forEach((e) => {
            let { userId: n } = e;
            return s.push(n);
        });
        let o = g(e, s),
            u = i.filter((e) => !s.includes(e)),
            c = g(e, u);
        return I(o, 3), I(c, 0), a;
    } catch (e) {
        I(r, 0);
    }
    return [];
}
