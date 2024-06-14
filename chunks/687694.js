"use strict";
a.r(t), a.d(t, {
  useMemberListHoverInteractions: function() {
    return r
  }
});
let n = (0, a("818083").createExperiment)({
    id: "2024-04_memberlist_hover_interactions",
    kind: "user",
    label: "Memberlist Hover Interactions",
    defaultConfig: {
      showReplyIcon: !1,
      openOnHover: !1
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        showReplyIcon: !1,
        openOnHover: !1
      }
    }, {
      id: 1,
      label: "Show Reply Icon",
      config: {
        showReplyIcon: !0,
        openOnHover: !1
      }
    }, {
      id: 2,
      label: "Open on Hover",
      config: {
        showReplyIcon: !1,
        openOnHover: !0
      }
    }]
  }),
  r = e => {
    let {
      location: t,
      autoTrackExposure: a = !0
    } = e, {
      showReplyIcon: r,
      openOnHover: l
    } = n.useExperiment({
      location: t
    }, {
      autoTrackExposure: a
    });
    return {
      showReplyIcon: r,
      openOnHover: l
    }
  }