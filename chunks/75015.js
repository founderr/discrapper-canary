"use strict";
n.r(t), n.d(t, {
  UploadTypes: function() {
    return i
  },
  EDITING_CONTAINER_WIDTH: function() {
    return o
  },
  USER_BANNER_MAX_WIDTH: function() {
    return u
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
    return f
  },
  SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
    return E
  },
  HOME_HEADER_MAX_WIDTH: function() {
    return C
  },
  HOME_HEADER_MAX_HEIGHT: function() {
    return I
  },
  BANNER_ASPECT_RATIO: function() {
    return h
  },
  GUILD_BANNER_ASPECT_RATIO: function() {
    return p
  },
  SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
    return A
  },
  HOME_HEADER_ASPECT_RATIO: function() {
    return R
  },
  MAX_BANNER_OVERLAY_HEIGHT: function() {
    return N
  },
  MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
    return T
  },
  MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
    return m
  },
  MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
    return S
  },
  VIDEO_BACKGROUND_ASPECT_RATIO: function() {
    return L
  },
  MAX_VIDEO_OVERLAY_HEIGHT: function() {
    return P
  },
  MessageTypes: function() {
    return a
  }
});
var r, s, i, a, l = n("917219");
(r = i || (i = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
let o = 568,
  u = 2400,
  c = 848,
  d = 2400,
  _ = 1350,
  f = 2400,
  E = 960,
  C = 2400,
  I = 600,
  h = 17 / 6,
  p = 16 / 9,
  A = 2.5,
  R = 4,
  N = o / h,
  T = o / p,
  m = o / A,
  S = o / R,
  L = l.BACKGROUND_REPLACEMENT_SIZE.width / l.BACKGROUND_REPLACEMENT_SIZE.height,
  P = o / L;
(s = a || (a = {}))[s.CROP_GIF_START = 0] = "CROP_GIF_START", s[s.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", s[s.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"