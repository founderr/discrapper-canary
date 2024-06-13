"use strict";
n.r(t), n.d(t, {
  getMyContentInventory: function() {
    return a
  },
  postTrackToContentInventory: function() {
    return o
  }
});
var i = n("544891"),
  r = n("881052"),
  s = n("981631");
let a = async e => {
  let {
    token: t
  } = e;
  try {
    let e = (await i.HTTP.get({
        url: s.Endpoints.MY_CONTENT_INVENTORY(t)
      })).body,
      n = e.wait_ms_until_next_fetch;
    if (null != n) {
      let t = new Date(Date.now() + n);
      e.expired_at = t.toISOString()
    }
    return e
  } catch (e) {
    throw new r.APIError(e)
  }
};
async function o(e, t) {
  try {
    await i.HTTP.post({
      url: s.Endpoints.MY_SPOTIFY_CONTENT_INVENTORY,
      body: {
        connection_id: e,
        tracks: [t]
      }
    })
  } catch (e) {
    throw new r.APIError(e)
  }
}