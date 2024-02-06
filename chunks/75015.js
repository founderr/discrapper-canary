"use strict";
n.r(t), n.d(t, {
  UploadTypes: function() {
    return r
  },
  EDITING_CONTAINER_WIDTH: function() {
    return s
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
    return E
  },
  SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
    return f
  },
  SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
    return A
  },
  HOME_HEADER_MAX_WIDTH: function() {
    return _
  },
  HOME_HEADER_MAX_HEIGHT: function() {
    return T
  },
  BANNER_ASPECT_RATIO: function() {
    return p
  },
  GUILD_BANNER_ASPECT_RATIO: function() {
    return h
  },
  SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
    return I
  },
  HOME_HEADER_ASPECT_RATIO: function() {
    return R
  },
  MAX_BANNER_OVERLAY_HEIGHT: function() {
    return g
  },
  MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
    return N
  },
  MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
    return C
  },
  MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
    return m
  },
  VIDEO_BACKGROUND_ASPECT_RATIO: function() {
    return S
  },
  MAX_VIDEO_OVERLAY_HEIGHT: function() {
    return v
  },
  MessageTypes: function() {
    return a
  }
});
var l, i, r, a, o = n("917219");
(l = r || (r = {}))[l.AVATAR = 0] = "AVATAR", l[l.BANNER = 1] = "BANNER", l[l.GUILD_BANNER = 2] = "GUILD_BANNER", l[l.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", l[l.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", l[l.HOME_HEADER = 5] = "HOME_HEADER", l[l.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
let s = 568,
  u = 2400,
  c = 848,
  d = 2400,
  E = 1350,
  f = 2400,
  A = 960,
  _ = 2400,
  T = 600,
  p = 17 / 6,
  h = 16 / 9,
  I = 2.5,
  R = 4,
  g = s / p,
  N = s / h,
  C = s / I,
  m = s / R,
  S = o.BACKGROUND_REPLACEMENT_SIZE.width / o.BACKGROUND_REPLACEMENT_SIZE.height,
  v = s / S;
(i = a || (a = {}))[i.CROP_GIF_START = 0] = "CROP_GIF_START", i[i.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", i[i.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"