"use strict";
n.r(t), n.d(t, {
  UploadTypes: function() {
    return u
  },
  EDITING_CONTAINER_WIDTH: function() {
    return a
  },
  USER_BANNER_MAX_WIDTH: function() {
    return l
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
    return f
  },
  SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
    return _
  },
  HOME_HEADER_MAX_WIDTH: function() {
    return h
  },
  HOME_HEADER_MAX_HEIGHT: function() {
    return I
  },
  BANNER_ASPECT_RATIO: function() {
    return R
  },
  GUILD_BANNER_ASPECT_RATIO: function() {
    return A
  },
  SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
    return C
  },
  HOME_HEADER_ASPECT_RATIO: function() {
    return p
  },
  MAX_BANNER_OVERLAY_HEIGHT: function() {
    return S
  },
  MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
    return v
  },
  MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
    return L
  },
  MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
    return T
  },
  VIDEO_BACKGROUND_ASPECT_RATIO: function() {
    return O
  },
  MAX_VIDEO_OVERLAY_HEIGHT: function() {
    return N
  },
  MessageTypes: function() {
    return o
  }
});
var r, i, u, o, s = n("917219");
(r = u || (u = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
let a = 568,
  l = 2400,
  c = 848,
  d = 2400,
  E = 1350,
  f = 2400,
  _ = 960,
  h = 2400,
  I = 600,
  R = 17 / 6,
  A = 16 / 9,
  C = 2.5,
  p = 4,
  S = a / R,
  v = a / A,
  L = a / C,
  T = a / p,
  O = s.BACKGROUND_REPLACEMENT_SIZE.width / s.BACKGROUND_REPLACEMENT_SIZE.height,
  N = a / O;
(i = o || (o = {}))[i.CROP_GIF_START = 0] = "CROP_GIF_START", i[i.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", i[i.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"