"use strict";
n.r(t), n.d(t, {
  useOmnibuttonFileUploadSubtextEnabled: function() {
    return l
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2024-01_omnibutton_file_upload_subtext",
  label: "Omnibutton File Upload Subtext",
  defaultConfig: {
    enabled: !0
  },
  treatments: [{
    id: 1,
    label: "Show Omnibutton File Upload Subtext",
    config: {
      enabled: !1
    }
  }]
});

function l(e) {
  let t = s.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t.enabled
}