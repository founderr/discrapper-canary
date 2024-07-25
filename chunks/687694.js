s.d(a, {
  C: function() {
return t;
  }
});
let n = (0, s(818083).B)({
id: '2024-04_memberlist_hover_interactions',
kind: 'user',
label: 'Memberlist Hover Interactions',
defaultConfig: {
  showReplyIcon: !1,
  openOnHover: !1
},
treatments: [{
    id: 0,
    label: 'Control',
    config: {
      showReplyIcon: !1,
      openOnHover: !1
    }
  },
  {
    id: 1,
    label: 'Show Reply Icon',
    config: {
      showReplyIcon: !0,
      openOnHover: !1
    }
  },
  {
    id: 2,
    label: 'Open on Hover',
    config: {
      showReplyIcon: !1,
      openOnHover: !0
    }
  }
]
  }),
  t = e => {
let {
  location: a,
  autoTrackExposure: s = !0
} = e, {
  showReplyIcon: t,
  openOnHover: l
} = n.useExperiment({
  location: a
}, {
  autoTrackExposure: s
});
return {
  showReplyIcon: t,
  openOnHover: l
};
  };