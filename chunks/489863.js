n.d(t, {
    Iq: function () {
        return c;
    },
    UR: function () {
        return f;
    },
    Ww: function () {
        return d;
    },
    c$: function () {
        return _;
    },
    g: function () {
        return u;
    },
    i2: function () {
        return m;
    },
    tR: function () {
        return h;
    },
    tV: function () {
        return p;
    }
});
var r = n(860911),
    i = n(544891),
    a = n(893776),
    s = n(592125),
    o = n(944486),
    l = n(981631);
function u(e) {
    return i.tn.post({
        url: l.ANM.OAUTH2_WHITELIST_ACCEPT,
        query: { token: e },
        oldFormErrors: !0
    });
}
async function c(e) {
    let { authorize: t, clientId: n, scopes: r, responseType: a, redirectUri: u, codeChallenge: c, codeChallengeMethod: d, state: f, permissions: _, guildId: p, channelId: h, integrationType: m, nonce: g } = e;
    return (
        await i.tn.post({
            url: l.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: n,
                response_type: a,
                redirect_uri: u,
                code_challenge: c,
                code_challenge_method: d,
                scope: r.join(' '),
                state: f,
                nonce: g
            },
            body: {
                guild_id: p,
                webhook_channel_id: null != p && null != h ? h : void 0,
                channel_id: null == p && null != h ? h : void 0,
                permissions: _,
                authorize: t,
                integration_type: m,
                location_context: (function () {
                    var e, t, n;
                    let r = o.Z.getChannelId(),
                        i = s.Z.getBasicChannel(r);
                    return {
                        guild_id: null !== (e = null == i ? void 0 : i.guild_id) && void 0 !== e ? e : '10000',
                        channel_id: null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : '10000',
                        channel_type: null !== (n = null == i ? void 0 : i.type) && void 0 !== n ? n : l.d4z.UNKNOWN
                    };
                })()
            },
            oldFormErrors: !0
        })
    ).body;
}
async function d(e) {
    let { clientId: t, scopes: n, responseType: r, redirectUri: a, codeChallenge: s, codeChallengeMethod: o, state: u, integrationType: c, nonce: d, signal: f } = e;
    return (
        await i.tn.get({
            url: l.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: r,
                redirect_uri: a,
                code_challenge: s,
                code_challenge_method: o,
                scope: n.join(' '),
                state: u,
                integration_type: c,
                nonce: d
            },
            signal: f,
            retries: 3,
            oldFormErrors: !0
        })
    ).body;
}
async function f(e) {
    let { body: t } = await i.tn.get({
        url: l.ANM.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: { guild_id: e },
        oldFormErrors: !0
    });
    return t;
}
function _(e) {
    a.Z.logout((0, r.Ui)(e.pathname + e.search, !1));
}
async function p(e) {
    return await i.tn.post({
        url: l.ANM.OAUTH2_DEVICE_VERIFY,
        body: { user_code: e }
    });
}
async function h(e, t) {
    return await i.tn.post({
        url: l.ANM.OAUTH2_DEVICE_FINISH,
        body: {
            user_code: e,
            result: t
        }
    });
}
async function m(e, t, n) {
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
