"use strict";
n.r(e), n.d(e, {
  UploadTypes: function() {
    return u
  },
  EDITING_CONTAINER_WIDTH: function() {
    return l
  },
  USER_BANNER_MAX_WIDTH: function() {
    return s
  },
  USER_BANNER_MAX_HEIGHT: function() {
    return c
  },
  GUILD_BANNER_MAX_WIDTH: function() {
    return d
  },
  GUILD_BANNER_MAX_HEIGHT: function() {
    return f
  },
  SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
    return E
  },
  SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
    return _
  },
  HOME_HEADER_MAX_WIDTH: function() {
    return h
  },
  HOME_HEADER_MAX_HEIGHT: function() {
    return S
  },
  BANNER_ASPECT_RATIO: function() {
    return p
  },
  GUILD_BANNER_ASPECT_RATIO: function() {
    return T
  },
  SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
    return I
  },
  HOME_HEADER_ASPECT_RATIO: function() {
    return A
  },
  MAX_BANNER_OVERLAY_HEIGHT: function() {
    return m
  },
  MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
    return C
  },
  MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
    return N
  },
  MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
    return g
  },
  VIDEO_BACKGROUND_ASPECT_RATIO: function() {
    return R
  },
  MAX_VIDEO_OVERLAY_HEIGHT: function() {
    return v
  },
  MessageTypes: function() {
    return o
  }
});
var r, i, u, o, a = n("917219");
(r = u || (u = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
let l = 568,
  s = 2400,
  c = 848,
  d = 2400,
  f = 1350,
  E = 2400,
  _ = 960,
  h = 2400,
  S = 600,
  p = 17 / 6,
  T = 16 / 9,
  I = 2.5,
  A = 4,
  m = l / p,
  C = l / T,
  N = l / I,
  g = l / A,
  R = a.BACKGROUND_REPLACEMENT_SIZE.width / a.BACKGROUND_REPLACEMENT_SIZE.height,
  v = l / R;
(i = o || (o = {}))[i.CROP_GIF_START = 0] = "CROP_GIF_START", i[i.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", i[i.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"