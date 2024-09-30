n.d(t, {
    Iq: function () {
        return E;
    },
    UR: function () {
        return h;
    },
    Ww: function () {
        return f;
    },
    c$: function () {
        return p;
    },
    g: function () {
        return _;
    },
    i2: function () {
        return T;
    },
    tR: function () {
        return I;
    },
    tV: function () {
        return m;
    }
});
var r = n(860911),
    i = n(544891),
    a = n(893776),
    o = n(592125),
    s = n(944486),
    l = n(981631);
let u = '10000',
    c = '10000';
function d() {
    var e, t, n;
    let r = s.Z.getChannelId(),
        i = o.Z.getBasicChannel(r);
    return {
        guild_id: null !== (e = null == i ? void 0 : i.guild_id) && void 0 !== e ? e : u,
        channel_id: null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : c,
        channel_type: null !== (n = null == i ? void 0 : i.type) && void 0 !== n ? n : l.d4z.UNKNOWN
    };
}
function _(e) {
    return i.tn.post({
        url: l.ANM.OAUTH2_WHITELIST_ACCEPT,
        query: { token: e },
        oldFormErrors: !0
    });
}
async function E(e) {
    let { authorize: t, clientId: n, scopes: r, responseType: a, redirectUri: o, codeChallenge: s, codeChallengeMethod: u, state: c, permissions: _, guildId: E, channelId: f, integrationType: h, nonce: p } = e;
    return (
        await i.tn.post({
            url: l.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: n,
                response_type: a,
                redirect_uri: o,
                code_challenge: s,
                code_challenge_method: u,
                scope: r.join(' '),
                state: c,
                nonce: p
            },
            body: {
                guild_id: E,
                webhook_channel_id: null != E && null != f ? f : void 0,
                channel_id: null == E && null != f ? f : void 0,
                permissions: _,
                authorize: t,
                integration_type: h,
                location_context: d()
            },
            oldFormErrors: !0
        })
    ).body;
}
async function f(e) {
    let { clientId: t, scopes: n, responseType: r, redirectUri: a, codeChallenge: o, codeChallengeMethod: s, state: u, integrationType: c, nonce: d, signal: _ } = e;
    return (
        await i.tn.get({
            url: l.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: r,
                redirect_uri: a,
                code_challenge: o,
                code_challenge_method: s,
                scope: n.join(' '),
                state: u,
                integration_type: c,
                nonce: d
            },
            signal: _,
            retries: 3,
            oldFormErrors: !0
        })
    ).body;
}
async function h(e) {
    let { body: t } = await i.tn.get({
        url: l.ANM.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: { guild_id: e },
        oldFormErrors: !0
    });
    return t;
}
function p(e) {
    a.Z.logout((0, r.Ui)(e.pathname + e.search, !1));
}
async function m(e) {
    return await i.tn.post({
        url: l.ANM.OAUTH2_DEVICE_VERIFY,
        body: { user_code: e }
    });
}
async function I(e, t) {
    return await i.tn.post({
        url: l.ANM.OAUTH2_DEVICE_FINISH,
        body: {
            user_code: e,
            result: t
        }
    });
}
async function T(e, t, n) {
    return await i.tn.post({
        url: l.ANM.OAUTH2_DEVICE_FINISH,
        body: {
            user_code: e,
            result: 'two_way_link_error',
            error_code: t,
            error_source: n
        }
    });
}
