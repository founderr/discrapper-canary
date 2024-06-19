n.d(t, {
  S: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(486458),
  s = n(113570),
  a = n(482641),
  r = n(613725);
let o = Object.freeze({
    "voice-conversations": {
      popoutPosition: "right",
      highPriority: !0,
      textAlign: i.iu.CENTER,
      media: () => (0, l.jsx)(a.Z, {})
    },
    "writing-messages": {
      popoutPosition: "top",
      highPriority: !0,
      textAlign: i.iu.CENTER,
      spacing: 10,
      media: () => (0, l.jsx)(r.Z, {})
    },
    "direct-messages": {
      popoutPosition: "right"
    },
    "create-first-server": {
      popoutPosition: "right",
      highPriority: !0
    },
    "organize-by-topic": {
      popoutPosition: "right",
      textAlign: i.iu.CENTER,
      spacing: 8,
      media: () => (0, l.jsx)(s.Z, {})
    },
    "instant-invite": {
      popoutPosition: "right",
      spacing: 24,
      highPriority: !0
    },
    "whos-online": {
      spacing: 16,
      popoutPosition: "left"
    },
    "server-settings": {
      popoutPosition: "bottom",
      spacing: 10
    },
    "friends-list": {
      spacing: 8,
      popoutPosition: "right"
    },
    "create-more-servers": {
      spacing: 8,
      popoutPosition: "right"
    }
  }),
  c = e => e in o ? o[e] : null