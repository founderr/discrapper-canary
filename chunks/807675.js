r.d(n, {
    K: function () {
        return f;
    },
    y: function () {
        return _;
    }
});
var i = r(653041);
var a = r(593473),
    s = r(243814),
    o = r(149765),
    l = r(592125),
    u = r(914010),
    c = r(700785),
    d = r(713938);
function f(e) {
    let n = e.filter((e) => !d.up.includes(e));
    return n.includes(s.x.BOT) && !n.includes(s.x.APPLICATIONS_COMMANDS) && n.push(s.x.APPLICATIONS_COMMANDS), n;
}
function _(e) {
    var n, r, i, s, d, f;
    let _ = (0, a.parse)(e, { arrayFormat: 'bracket' }),
        h = c.Hn;
    try {
        h = o.vB(null != _.permissions && '' !== _.permissions ? _.permissions : '0');
    } catch (e) {}
    let p = _.channel_id,
        m = null !== (s = null !== (i = null !== (r = _.guild_id) && void 0 !== r ? r : null === (n = l.Z.getChannel(p)) || void 0 === n ? void 0 : n.guild_id) && void 0 !== i ? i : u.Z.getGuildId()) && void 0 !== s ? s : void 0;
    return {
        clientId: null !== (d = _.client_id) && void 0 !== d ? d : '',
        scopes: (null !== (f = _.scope) && void 0 !== f ? f : '').split(' ').filter((e) => e.length > 0),
        responseType: _.response_type,
        redirectUri: _.redirect_uri,
        codeChallenge: _.code_challenge,
        codeChallengeMethod: _.code_challenge_method,
        state: _.state,
        permissions: h,
        channelId: p,
        guildId: m,
        prompt: _.prompt,
        disableGuildSelect: 'true' === _.disable_guild_select,
        integrationType: null == _.integration_type ? void 0 : Number(_.integration_type),
        nonce: _.nonce
    };
}
