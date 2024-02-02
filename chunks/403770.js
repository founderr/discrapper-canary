"use strict";
n.r(t), n.d(t, {
  SecureFramesUserExperiment: function() {
    return s
  },
  SecureFramesGuildExperiment: function() {
    return r
  }
});
var i = n("862205");
let s = (0, i.createExperiment)({
    kind: "user",
    id: "2023-08_secure_frames_encryption",
    label: "Allowing testing secure frames for voice/video",
    defaultConfig: {
      protocolVersionFloor: 0,
      canSupportSecureFrames: !1,
      canSupportMls: !1
    },
    treatments: [{
      id: 1,
      label: "Can support secure frames for voice/video",
      config: {
        protocolVersionFloor: 7,
        canSupportSecureFrames: !0,
        canSupportMls: !1
      }
    }, {
      id: 2,
      label: "Can support secure frames for voice/video w/ MLS negotiation",
      config: {
        protocolVersionFloor: 7,
        canSupportSecureFrames: !0,
        canSupportMls: !0
      }
    }, {
      id: 3,
      label: "Can support secure frames above protocol version 8",
      config: {
        protocolVersionFloor: 8,
        canSupportSecureFrames: !0,
        canSupportMls: !1
      }
    }, {
      id: 4,
      label: "Can support secure frames above protocol version 108 (MLS)",
      config: {
        protocolVersionFloor: 8,
        canSupportSecureFrames: !0,
        canSupportMls: !0
      }
    }]
  }),
  r = (0, i.createExperiment)({
    kind: "guild",
    id: "2023-11_secure_frames_encryption_guilds",
    label: "Allowing testing secure frames for voice/video (Guilds)",
    defaultConfig: {
      protocolVersionFloor: 0,
      canSupportSecureFrames: !1,
      canSupportMls: !1
    },
    treatments: [{
      id: 1,
      label: "Can support secure frames for voice/video",
      config: {
        protocolVersionFloor: 7,
        canSupportSecureFrames: !0,
        canSupportMls: !1
      }
    }, {
      id: 2,
      label: "Can support secure frames for voice/video w/ MLS negotiation",
      config: {
        protocolVersionFloor: 107,
        canSupportSecureFrames: !0,
        canSupportMls: !0
      }
    }, {
      id: 3,
      label: "Can support secure frames above protocol version 8",
      config: {
        protocolVersionFloor: 8,
        canSupportSecureFrames: !0,
        canSupportMls: !1
      }
    }, {
      id: 4,
      label: "Can support secure frames above protocol version 108 (MLS)",
      config: {
        protocolVersionFloor: 8,
        canSupportSecureFrames: !0,
        canSupportMls: !0
      }
    }]
  })