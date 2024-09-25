n.d(t, {
    K: function () {
        return d;
    },
    y: function () {
        return _;
    }
});
var r = n(653041);
var i = n(593473),
    a = n(243814),
    o = n(149765),
    s = n(592125),
    l = n(914010),
    u = n(700785),
    c = n(713938);
function d(e) {
    let t = e.filter((e) => !c.up.includes(e));
    return t.includes(a.x.BOT) && !t.includes(a.x.APPLICATIONS_COMMANDS) && t.push(a.x.APPLICATIONS_COMMANDS), t;
}
function _(e) {
    var t, n, r, a, c, d;
    let _ = (0, i.parse)(e, { arrayFormat: 'bracket' }),
        E = u.Hn;
    try {
        E = o.vB(null != _.permissions && '' !== _.permissions ? _.permissions : '0');
    } catch (e) {}
    let f = _.channel_id,
        h = null !== (a = null !== (r = null !== (n = _.guild_id) && void 0 !== n ? n : null === (t = s.Z.getChannel(f)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : l.Z.getGuildId()) && void 0 !== a ? a : void 0;
    return {
        clientId: null !== (c = _.client_id) && void 0 !== c ? c : '',
        scopes: (null !== (d = _.scope) && void 0 !== d ? d : '').split(' ').filter((e) => e.length > 0),
        responseType: _.response_type,
        redirectUri: _.redirect_uri,
        codeChallenge: _.code_challenge,
        codeChallengeMethod: _.code_challenge_method,
        state: _.state,
        permissions: E,
        channelId: f,
        guildId: h,
        prompt: _.prompt,
        disableGuildSelect: 'true' === _.disable_guild_select,
        integrationType: null == _.integration_type ? void 0 : Number(_.integration_type),
        nonce: _.nonce
    };
}
