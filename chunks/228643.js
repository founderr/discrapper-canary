t.d(n, {
  L_: function() {
    return o
  },
  nj: function() {
    return c
  },
  sE: function() {
    return r
  }
});
var i = t(544891),
  l = t(570140),
  s = t(480608),
  a = t(981631);

function r(e, n) {
  i.tn.get({
    url: a.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n)
  }).then(e => {
    let t = [];
    e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
      connectionType: e.connection_type,
      connectionMetadataField: e.connection_metadata_field,
      applicationId: e.application_id,
      operator: e.operator,
      value: e.value
    })))), l.Z.dispatch({
      type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
      roleId: n,
      roleConnectionConfigurations: t
    })
  }).catch(() => {})
}
async function o(e, n, t) {
  let r = t.map(e => e.map(e => ({
      connection_type: e.connectionType,
      connection_metadata_field: e.connectionMetadataField,
      application_id: e.applicationId,
      operator: e.operator,
      value: e.value
    }))),
    o = await i.tn.put({
      url: a.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
      body: 0 === r.length ? [] : r,
      oldFormErrors: !0
    }).then(e => {
      let n = [];
      return e.body.length > 0 && (n = e.body.map(e => e.map(e => ({
        connectionType: e.connection_type,
        connectionMetadataField: e.connection_metadata_field,
        applicationId: e.application_id,
        operator: e.operator,
        value: e.value
      })))), n
    }),
    c = await (0, s.H)(e, n, !1);
  null != c && l.Z.dispatch({
    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
    guildId: e,
    roleId: n,
    count: c
  }), l.Z.dispatch({
    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
    roleId: n,
    roleConnectionConfigurations: o
  })
}
async function c() {
  return (await i.tn.get({
    url: a.ANM.APPLICATION_USER_ROLE_CONNECTIONS
  })).body
}