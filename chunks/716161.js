"use strict";
n.d(t, {
  Ff: function() {
    return E
  },
  GS: function() {
    return f
  },
  KH: function() {
    return I
  },
  Nm: function() {
    return S
  },
  RI: function() {
    return h
  },
  Up: function() {
    return T
  },
  XV: function() {
    return d
  }
});
var i = n(544891),
  r = n(570140),
  s = n(675478),
  o = n(131951),
  a = n(594174),
  l = n(932724),
  u = n(647177),
  _ = n(901757),
  c = n(981631);
async function d() {
  let e = await i.tn.get(c.ANM.VIDEO_FILTER_ASSETS);
  return r.Z.dispatch({
    type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS",
    assets: e.body
  }), e
}
async function E(e, t, n) {
  try {
    let s = await i.tn.post({
      url: c.ANM.VIDEO_FILTER_ASSETS,
      body: {
        type: t,
        asset: e,
        last_used: null == n ? void 0 : n.toISOString()
      }
    });
    return r.Z.dispatch({
      type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS",
      videoFilterAsset: s.body
    }), s.body
  } catch (e) {
    throw new _.Z(e)
  }
}
async function I(e) {
  await i.tn.del(c.ANM.VIDEO_FILTER_ASSET(e.id));
  let t = (0, l.P)(a.default.getCurrentUser());
  (0, u.rD)(t) && t.id === e.id && T(null), r.Z.dispatch({
    type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS",
    videoFilterAsset: e
  })
}
async function T(e) {
  if (await s.hW.updateAsync("voiceAndVideo", t => {
      t.videoBackgroundFilterDesktop = (0, u.i7)(e)
    }, s.fy.FREQUENT_USER_ACTION), (0, u.rD)(e)) {
    let t = await i.tn.post(c.ANM.VIDEO_FILTER_ASSET_LAST_USED(e.id));
    r.Z.dispatch({
      type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
      backgroundOption: t.body
    })
  } else r.Z.dispatch({
    type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
    backgroundOption: e
  })
}

function h(e) {
  if (!!o.Z.isSupported()) r.Z.dispatch({
    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS",
    settings: e
  })
}

function f() {
  if (!!o.Z.isSupported()) r.Z.dispatch({
    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START"
  })
}

function S() {
  r.Z.dispatch({
    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR"
  })
}