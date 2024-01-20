"use strict";
n.r(t), n.d(t, {
  filterScopes: function() {
    return c
  },
  parseOAuth2AuthorizeProps: function() {
    return f
  }
}), n("424973");
var i = n("730290"),
  s = n("891189"),
  r = n("316693"),
  a = n("42203"),
  o = n("162771"),
  l = n("991170"),
  u = n("29479"),
  d = n("843455");

function c(e) {
  let t = e.filter(e => !u.RemovedScopes.includes(e));
  return t.includes(d.OAuth2Scopes.BOT) && !t.includes(d.OAuth2Scopes.APPLICATIONS_COMMANDS) && t.push(d.OAuth2Scopes.APPLICATIONS_COMMANDS), t
}

function f(e) {
  var t, n, u, d, c, f;
  let _ = (0, i.parse)(e, {
      arrayFormat: "bracket"
    }),
    h = l.default.NONE;
  try {
    h = r.default.deserialize(null != _.permissions && "" !== _.permissions ? _.permissions : "0")
  } catch (e) {}
  let g = _.channel_id,
    m = null !== (d = null !== (u = null !== (n = _.guild_id) && void 0 !== n ? n : null === (t = a.default.getChannel(g)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== u ? u : o.default.getGuildId()) && void 0 !== d ? d : void 0;
  return {
    clientId: null !== (c = _.client_id) && void 0 !== c ? c : "",
    scopes: (null !== (f = _.scope) && void 0 !== f ? f : "").split(" ").filter(e => e.length > 0),
    responseType: _.response_type,
    redirectUri: _.redirect_uri,
    codeChallenge: _.code_challenge,
    codeChallengeMethod: _.code_challenge_method,
    state: _.state,
    permissions: h,
    channelId: g,
    guildId: m,
    prompt: _.prompt,
    disableGuildSelect: "true" === _.disable_guild_select,
    userInstall: _.integration_type === s.ApplicationIntegrationType.USER_INSTALL.toString()
  }
}