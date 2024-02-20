"use strict";
n.r(e), n.d(e, {
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
    return f
  },
  SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
    return _
  },
  SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
    return h
  },
  HOME_HEADER_MAX_WIDTH: function() {
    return E
  },
  HOME_HEADER_MAX_HEIGHT: function() {
    return A
  },
  BANNER_ASPECT_RATIO: function() {
    return p
  },
  GUILD_BANNER_ASPECT_RATIO: function() {
    return I
  },
  SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
    return T
  },
  HOME_HEADER_ASPECT_RATIO: function() {
    return m
  },
  MAX_BANNER_OVERLAY_HEIGHT: function() {
    return g
  },
  MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
    return R
  },
  MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
    return N
  },
  MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
    return v
  },
  VIDEO_BACKGROUND_ASPECT_RATIO: function() {
    return C
  },
  MAX_VIDEO_OVERLAY_HEIGHT: function() {
    return M
  },
  MessageTypes: function() {
    return s
  }
});
var i, r, a, s, l = n("917219");
(i = a || (a = {}))[i.AVATAR = 0] = "AVATAR", i[i.BANNER = 1] = "BANNER", i[i.GUILD_BANNER = 2] = "GUILD_BANNER", i[i.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", i[i.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", i[i.HOME_HEADER = 5] = "HOME_HEADER", i[i.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
let u = 568,
  o = 2400,
  c = 848,
  d = 2400,
  f = 1350,
  _ = 2400,
  h = 960,
  E = 2400,
  A = 600,
  p = 17 / 6,
  I = 16 / 9,
  T = 2.5,
  m = 4,
  g = u / p,
  R = u / I,
  N = u / T,
  v = u / m,
  C = l.BACKGROUND_REPLACEMENT_SIZE.width / l.BACKGROUND_REPLACEMENT_SIZE.height,
  M = u / C;
(r = s || (s = {}))[r.CROP_GIF_START = 0] = "CROP_GIF_START", r[r.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", r[r.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"