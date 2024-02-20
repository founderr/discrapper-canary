"use strict";
n.r(t), n.d(t, {
  fetchRoleConnectionsConfiguration: function() {
    return i
  },
  putRoleConnectionsConfigurations: function() {
    return c
  },
  fetchUserApplicationRoleConnections: function() {
    return r
  }
});
var l = n("872717"),
  a = n("913144"),
  o = n("895026"),
  s = n("49111");

function i(e, t) {
  l.default.get({
    url: s.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
  }).then(e => {
    let n = [];
    e.body.length > 0 && (n = e.body.map(e => e.map(e => ({
      connectionType: e.connection_type,
      connectionMetadataField: e.connection_metadata_field,
      applicationId: e.application_id,
      operator: e.operator,
      value: e.value
    })))), a.default.dispatch({
      type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
      roleId: t,
      roleConnectionConfigurations: n
    })
  }).catch(() => {})
}
async function c(e, t, n) {
  let i = n.map(e => e.map(e => ({
      connection_type: e.connectionType,
      connection_metadata_field: e.connectionMetadataField,
      application_id: e.applicationId,
      operator: e.operator,
      value: e.value
    }))),
    c = await l.default.put({
      url: s.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
      body: 0 === i.length ? [] : i,
      oldFormErrors: !0
    }).then(e => {
      let t = [];
      return e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
        connectionType: e.connection_type,
        connectionMetadataField: e.connection_metadata_field,
        applicationId: e.application_id,
        operator: e.operator,
        value: e.value
      })))), t
    }),
    r = await (0, o.requestMembersForRole)(e, t, !1);
  null != r && a.default.dispatch({
    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
    guildId: e,
    roleId: t,
    count: r
  }), a.default.dispatch({
    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
    roleId: t,
    roleConnectionConfigurations: c
  })
}
async function r() {
  let e = await l.default.get({
    url: s.Endpoints.APPLICATION_USER_ROLE_CONNECTIONS
  });
  return e.body
}