"use strict";
i.r(e), i.d(e, {
  sync: function() {
    return o
  },
  play: function() {
    return c
  },
  getMetadata: function() {
    return f
  }
}), i("70102");
var n = i("872717"),
  l = i("913144"),
  a = i("824563"),
  u = i("49111"),
  r = i("450484");

function d(t) {
  if ("string" == typeof t) return t;
  throw Error("value is not a string")
}

function s(t) {
  let e = (0, r.getSpotifyResourceType)(d(t.type));
  if (null === e) throw Error("invalid type ".concat(t.type));
  return {
    context_uri: "string" == typeof t.context_uri ? t.context_uri : void 0,
    album_id: d(t.album_id),
    artist_ids: Array.isArray(t.artist_ids) ? t.artist_ids.map(d) : [],
    type: e,
    button_urls: Array.isArray(t.button_url) ? t.button_url.map(d) : []
  }
}

function o(t, e) {
  l.default.dispatch({
    type: "ACTIVITY_SYNC",
    activity: t,
    userId: e
  })
}

function c(t, e) {
  f(t, e).then(i => l.default.dispatch({
    type: "ACTIVITY_PLAY",
    activity: t,
    userId: e,
    metadata: i
  })).catch(() => l.default.dispatch({
    type: "ACTIVITY_PLAY",
    activity: t,
    userId: e
  }))
}
async function f(t, e) {
  let i = t.metadata;
  if (null != i) return s(i);
  let r = a.default.getActivityMetadata(e);
  if (null != r) return s(r);
  if (null == t.session_id) throw Error("null/undefined session_id");
  let {
    body: d
  } = await n.default.get({
    url: u.Endpoints.USER_ACTIVITY_METADATA(e, t.session_id, t.application_id),
    oldFormErrors: !0
  });
  return l.default.dispatch({
    type: "ACTIVITY_METADATA_UPDATE",
    metadata: d,
    userId: e
  }), s(d)
}