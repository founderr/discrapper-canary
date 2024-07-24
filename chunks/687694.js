t.d(n, {
  C: function() {
return l;
  }
});
let a = (0, t(818083).B)({
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
  l = e => {
let {
  location: n,
  autoTrackExposure: t = !0
} = e, {
  showReplyIcon: l,
  openOnHover: r
} = a.useExperiment({
  location: n
}, {
  autoTrackExposure: t
});
return {
  showReplyIcon: l,
  openOnHover: r
};
  };