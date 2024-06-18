"use strict";
n.d(t, {
  K: function() {
    return _
  },
  y: function() {
    return c
  }
}), n(653041);
var i = n(593473),
  r = n(243814),
  s = n(149765),
  o = n(592125),
  a = n(914010),
  l = n(700785),
  u = n(713938);

function _(e) {
  let t = e.filter(e => !u.up.includes(e));
  return t.includes(r.x.BOT) && !t.includes(r.x.APPLICATIONS_COMMANDS) && t.push(r.x.APPLICATIONS_COMMANDS), t
}

function c(e) {
  var t, n, r, u, _, c;
  let d = (0, i.parse)(e, {
      arrayFormat: "bracket"
    }),
    E = l.Hn;
  try {
    E = s.vB(null != d.permissions && "" !== d.permissions ? d.permissions : "0")
  } catch (e) {}
  let I = d.channel_id,
    T = null !== (u = null !== (r = null !== (n = d.guild_id) && void 0 !== n ? n : null === (t = o.Z.getChannel(I)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : a.Z.getGuildId()) && void 0 !== u ? u : void 0;
  return {
    clientId: null !== (_ = d.client_id) && void 0 !== _ ? _ : "",
    scopes: (null !== (c = d.scope) && void 0 !== c ? c : "").split(" ").filter(e => e.length > 0),
    responseType: d.response_type,
    redirectUri: d.redirect_uri,
    codeChallenge: d.code_challenge,
    codeChallengeMethod: d.code_challenge_method,
    state: d.state,
    permissions: E,
    channelId: I,
    guildId: T,
    prompt: d.prompt,
    disableGuildSelect: "true" === d.disable_guild_select,
    integrationType: null == d.integration_type ? void 0 : Number(d.integration_type),
    nonce: d.nonce
  }
}