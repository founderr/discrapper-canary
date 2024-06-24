"use strict";
n.d(t, {
  m: function() {
    return a
  },
  y: function() {
    return l
  }
});
var i = n(544891),
  r = n(881052),
  s = n(206583),
  o = n(981631);
let a = async e => {
  let {
    token: t,
    feedId: n
  } = e;
  try {
    let e = (await i.tn.get({
        url: o.ANM.MY_CONTENT_INVENTORY(t),
        ...n === s.YN.GAME_PROFILE_FEED && {
          query: {
            for_game_profile: !0
          }
        }
      })).body,
      r = e.wait_ms_until_next_fetch;
    if (null != r) {
      let t = new Date(Date.now() + r);
      e.expired_at = t.toISOString()
    }
    return e
  } catch (e) {
    throw new r.Hx(e)
  }
};
async function l(e, t) {
  try {
    await i.tn.post({
      url: o.ANM.MY_SPOTIFY_CONTENT_INVENTORY,
      body: {
        connection_id: e,
        tracks: [t]
      }
    })
  } catch (e) {
    throw new r.Hx(e)
  }
}