n.d(t, {
  I4: function() {
return E;
  },
  Sn: function() {
return c;
  },
  U3: function() {
return T;
  },
  Ui: function() {
return u;
  },
  W4: function() {
return I;
  },
  gq: function() {
return l;
  },
  kZ: function() {
return d;
  }
});
var i = n(544891),
  r = n(570140),
  a = n(555573),
  s = n(581364),
  o = n(981631);

function d() {
  r.Z.dispatch({
type: 'INTEGRATION_PERMISSION_SETTINGS_CLEAR'
  });
}

function I(e, t, n) {
  r.Z.dispatch({
applicationId: e,
commandId: t,
permissions: n,
type: 'INTEGRATION_PERMISSION_SETTINGS_EDIT'
  });
}

function c(e, t) {
  i.tn.get(o.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(n => {
r.Z.dispatch({
  type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS',
  applicationId: t,
  commands: n.body.application_commands,
  guildId: e,
  permissions: n.body.permissions
});
  }, () => {
r.Z.dispatch({
  type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE',
  applicationId: t
});
  });
}
async function l(e, t, n) {
  let a = [];
  try {
let r = await i.tn.get(o.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
r.ok && (a = r.body.permissions);
  } catch (i) {
if (404 !== i.status) {
  r.Z.dispatch({
    type: 'INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE',
    applicationId: e,
    commandId: n,
    guildId: t
  });
  return;
}
  }
  r.Z.dispatch({
type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
applicationId: e,
commandId: n,
guildId: t,
permissions: a
  });
}

function E(e) {
  r.Z.dispatch({
applicationId: e,
type: 'INTEGRATION_PERMISSION_SETTINGS_INIT'
  });
}

function u(e) {
  r.Z.dispatch({
commandId: e,
type: 'INTEGRATION_PERMISSION_SETTINGS_RESET'
  });
}
async function T(e) {
  let {
applicationId: t,
commandId: n,
defaultEveryoneValue: i,
defaultEverywhereValue: o,
guildId: d,
permissions: I
  } = e, c = n === t ? function(e, t, n, i) {
if (!n || !i)
  return t;
let r = {
  [e]: n,
  [(0, s.bD)(e)]: i
};
return t.filter(e => {
  let t = r[e.id];
  return null == t || e.permission !== t;
});
  }(d, I, i, o) : I, l = await a.dh(t, d, n, c);
  l.ok && r.Z.dispatch({
type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
applicationId: t,
commandId: n,
guildId: d,
permissions: l.body.permissions
  });
}