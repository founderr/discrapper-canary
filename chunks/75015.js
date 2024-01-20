"use strict";
n.r(t), n.d(t, {
  UploadTypes: function() {
    return u
  },
  EDITING_CONTAINER_WIDTH: function() {
    return a
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
    return S
  },
  HOME_HEADER_MAX_HEIGHT: function() {
    return T
  },
  BANNER_ASPECT_RATIO: function() {
    return p
  },
  GUILD_BANNER_ASPECT_RATIO: function() {
    return I
  },
  SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
    return A
  },
  HOME_HEADER_ASPECT_RATIO: function() {
    return C
  },
  MAX_BANNER_OVERLAY_HEIGHT: function() {
    return N
  },
  MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
    return h
  },
  MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
    return m
  },
  MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
    return R
  },
  VIDEO_BACKGROUND_ASPECT_RATIO: function() {
    return g
  },
  MAX_VIDEO_OVERLAY_HEIGHT: function() {
    return U
  },
  MessageTypes: function() {
    return o
  }
});
var i, r, u, o, l = n("917219");
(i = u || (u = {}))[i.AVATAR = 0] = "AVATAR", i[i.BANNER = 1] = "BANNER", i[i.GUILD_BANNER = 2] = "GUILD_BANNER", i[i.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", i[i.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", i[i.HOME_HEADER = 5] = "HOME_HEADER", i[i.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
let a = 568,
  s = 2400,
  c = 848,
  d = 2400,
  f = 1350,
  E = 2400,
  _ = 960,
  S = 2400,
  T = 600,
  p = 17 / 6,
  I = 16 / 9,
  A = 2.5,
  C = 4,
  N = a / p,
  h = a / I,
  m = a / A,
  R = a / C,
  g = l.BACKGROUND_REPLACEMENT_SIZE.width / l.BACKGROUND_REPLACEMENT_SIZE.height,
  U = a / g;
(r = o || (o = {}))[r.CROP_GIF_START = 0] = "CROP_GIF_START", r[r.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", r[r.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"