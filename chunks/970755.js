"use strict";
n.r(e), n.d(e, {
  fetchApplicationsShelf: function() {
    return o
  },
  fetchPrivateChannelIntegrations: function() {
    return d
  },
  deletePrivateChannelIntegration: function() {
    return s
  }
}), n("70102"), n("746379");
var i = n("981980"),
  u = n("872717"),
  a = n("913144");
n("253981");
var r = n("140596"),
  l = n("49111");
n("843455"), n("782340");

function o() {
  r.default.getApplicationsShelfFetchState() === r.FetchState.NOT_FETCHED && (a.default.dispatch({
    type: "APPLICATIONS_SHELF_FETCH_START"
  }), u.default.get(l.Endpoints.APPLICATIONS_SHELF).then(t => a.default.dispatch({
    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
    applications: t.body.applications
  })).catch(t => a.default.dispatch({
    type: "APPLICATIONS_SHELF_FETCH_FAIL"
  })))
}

function d(t) {
  let e = new i.default(1e3, 5e3);
  a.default.dispatch({
    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
    channelId: t
  }), u.default.get({
    url: l.Endpoints.CHANNEL_INTEGRATIONS(t),
    backoff: e,
    retries: 10
  }).then(e => {
    a.default.dispatch({
      type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
      channelId: t,
      integrations: e.body
    })
  }).catch(() => {
    a.default.dispatch({
      type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
      channelId: t
    })
  })
}

function s(t, e) {
  return u.default.delete(l.Endpoints.CHANNEL_INTEGRATION(t, e)).then(t => {
    var e;
    if (null === (e = t.body) || void 0 === e ? void 0 : e.message) throw Error(t.body.message)
  })
}