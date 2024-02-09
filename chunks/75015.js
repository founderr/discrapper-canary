"use strict";
n.r(t), n.d(t, {
  UploadTypes: function() {
    return a
  },
  EDITING_CONTAINER_WIDTH: function() {
    return u
  },
  USER_BANNER_MAX_WIDTH: function() {
    return o
  },
  USER_BANNER_MAX_HEIGHT: function() {
    return c
  },
  GUILD_BANNER_MAX_WIDTH: function() {
    return d
  },
  GUILD_BANNER_MAX_HEIGHT: function() {
    return _
  },
  SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
    return E
  },
  SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
    return f
  },
  HOME_HEADER_MAX_WIDTH: function() {
    return h
  },
  HOME_HEADER_MAX_HEIGHT: function() {
    return A
  },
  BANNER_ASPECT_RATIO: function() {
    return T
  },
  GUILD_BANNER_ASPECT_RATIO: function() {
    return I
  },
  SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
    return R
  },
  HOME_HEADER_ASPECT_RATIO: function() {
    return p
  },
  MAX_BANNER_OVERLAY_HEIGHT: function() {
    return m
  },
  MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
    return N
  },
  MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
    return C
  },
  MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
    return g
  },
  VIDEO_BACKGROUND_ASPECT_RATIO: function() {
    return M
  },
  MAX_VIDEO_OVERLAY_HEIGHT: function() {
    return S
  },
  MessageTypes: function() {
    return l
  }
});
var i, r, a, l, s = n("917219");
(i = a || (a = {}))[i.AVATAR = 0] = "AVATAR", i[i.BANNER = 1] = "BANNER", i[i.GUILD_BANNER = 2] = "GUILD_BANNER", i[i.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", i[i.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", i[i.HOME_HEADER = 5] = "HOME_HEADER", i[i.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
let u = 568,
  o = 2400,
  c = 848,
  d = 2400,
  _ = 1350,
  E = 2400,
  f = 960,
  h = 2400,
  A = 600,
  T = 17 / 6,
  I = 16 / 9,
  R = 2.5,
  p = 4,
  m = u / T,
  N = u / I,
  C = u / R,
  g = u / p,
  M = s.BACKGROUND_REPLACEMENT_SIZE.width / s.BACKGROUND_REPLACEMENT_SIZE.height,
  S = u / M;
(r = l || (l = {}))[r.CROP_GIF_START = 0] = "CROP_GIF_START", r[r.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", r[r.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"