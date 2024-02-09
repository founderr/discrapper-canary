"use strict";
n.r(t), n.d(t, {
  UploadTypes: function() {
    return a
  },
  EDITING_CONTAINER_WIDTH: function() {
    return o
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
    return E
  },
  SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
    return _
  },
  SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
    return f
  },
  HOME_HEADER_MAX_WIDTH: function() {
    return T
  },
  HOME_HEADER_MAX_HEIGHT: function() {
    return A
  },
  BANNER_ASPECT_RATIO: function() {
    return S
  },
  GUILD_BANNER_ASPECT_RATIO: function() {
    return R
  },
  SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
    return I
  },
  HOME_HEADER_ASPECT_RATIO: function() {
    return N
  },
  MAX_BANNER_OVERLAY_HEIGHT: function() {
    return p
  },
  MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
    return C
  },
  MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
    return P
  },
  MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
    return U
  },
  VIDEO_BACKGROUND_ASPECT_RATIO: function() {
    return O
  },
  MAX_VIDEO_OVERLAY_HEIGHT: function() {
    return h
  },
  MessageTypes: function() {
    return u
  }
});
var r, i, a, u, l = n("917219");
(r = a || (a = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
let o = 568,
  s = 2400,
  c = 848,
  d = 2400,
  E = 1350,
  _ = 2400,
  f = 960,
  T = 2400,
  A = 600,
  S = 17 / 6,
  R = 16 / 9,
  I = 2.5,
  N = 4,
  p = o / S,
  C = o / R,
  P = o / I,
  U = o / N,
  O = l.BACKGROUND_REPLACEMENT_SIZE.width / l.BACKGROUND_REPLACEMENT_SIZE.height,
  h = o / O;
(i = u || (u = {}))[i.CROP_GIF_START = 0] = "CROP_GIF_START", i[i.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", i[i.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"