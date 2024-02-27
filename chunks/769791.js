"use strict";
n.r(t), n.d(t, {
  openPremiumSite: function() {
    return l
  },
  openTrack: function() {
    return a
  },
  openAlbum: function() {
    return d
  },
  openArtist: function() {
    return c
  }
}), n("70102");
var o = n("968194"),
  i = n("773336"),
  r = n("155815"),
  s = n("450484");

function u(e, t, n) {
  let u;
  !(0, i.isDesktop)() && (u = window.open("", "_blank")), (0, o.getMetadata)(e, t).then(e => n(e)).then(e => {
    let {
      resourceType: t,
      resourceId: n
    } = e, o = r.default.isProtocolRegistered() ? s.SpotifyEndpoints.PLAYER_OPEN(t, n) : s.SpotifyEndpoints.WEB_OPEN(t, n);
    null != u ? u.location.href = o : window.open(o)
  }).catch(() => {
    null != u && u.close()
  })
}

function l() {
  window.open(s.SpotifyEndpoints.PREMIUM_SITE)
}

function a(e) {
  let {
    sync_id: t,
    metadata: n
  } = e;
  if (null == t) return;
  let o = (0, s.getSpotifyResourceType)(null == n ? void 0 : n.type);
  if (null == o) return;
  let i = r.default.isProtocolRegistered() ? s.SpotifyEndpoints.PLAYER_OPEN(o, t) : s.SpotifyEndpoints.WEB_OPEN(o, t);
  window.open(i)
}

function d(e, t) {
  u(e, t, t => {
    var n;
    let {
      album_id: o
    } = t, i = (0, s.getSpotifyResourceType)(null === (n = e.metadata) || void 0 === n ? void 0 : n.type) === s.SpotifyResourceTypes.EPISODE;
    return {
      resourceType: i ? s.SpotifyResourceTypes.SHOW : s.SpotifyResourceTypes.ALBUM,
      resourceId: o
    }
  })
}

function c(e, t, n) {
  u(e, t, e => {
    let {
      artist_ids: t
    } = e;
    if (null == t) throw Error("no artist ids in metadata");
    let o = t[n];
    if (null == o) throw Error("invalid artist index");
    return {
      resourceType: s.SpotifyResourceTypes.ARTIST,
      resourceId: o
    }
  })
}