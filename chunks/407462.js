"use strict";
var l, i, a, s;
n.r(t), n.d(t, {
  canvasWidth: function() {
    return r
  },
  canvasHeight: function() {
    return o
  },
  AssetTypes: function() {
    return l
  },
  padding: function() {
    return u
  },
  imagePadding: function() {
    return d
  },
  fontPadding: function() {
    return c
  },
  lineHeight: function() {
    return f
  },
  platformSize: function() {
    return m
  },
  activitySize: function() {
    return p
  },
  titleMaxWidthNoPlatform: function() {
    return h
  },
  titleMaxWidthPlatform: function() {
    return E
  },
  ACTIVITY_IMAGE_FALLBACK_PATH: function() {
    return g
  },
  ActivityReactorInteractionTypes: function() {
    return i
  }
});
let r = 348,
  o = 88;
(a = l || (l = {})).AssetImage = "AssetImage", a.ApplicationImage = "ApplicationImage", a.Platform = "Platform", a.StreamPreview = "StreamPreview", a.HangStatus = "HangStatus";
let u = 12,
  d = 12,
  c = u + d,
  f = 16,
  m = 24,
  p = 64,
  h = 335,
  E = 310,
  g = "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.81 7c-.54 0-1 .26-1.23.61A1 1 0 0 1 8.92 8.5 3.49 3.49 0 0 1 11.82 7c1.81 0 3.43 1.38 3.43 3.25 0 1.45-.98 2.61-2.27 3.06a1 1 0 0 1-1.96.37l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S12.68 9 11.81 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z";
(s = i || (i = {})).ReactBegin = "React Begin", s.ReplyBegin = "Reply Begin", s.ReactSubmit = "React Submit", s.ReplySubmit = "Reply Submit", s.ReactSend = "React Send", s.ReplySend = "Reply Send"