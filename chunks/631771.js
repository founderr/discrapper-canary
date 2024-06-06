"use strict";
n.r(t), n.d(t, {
  DesktopFileUploadUpsellExperiment: function() {
    return i
  }
});
let i = (0, n("818083").createExperiment)({
  id: "2024-05_file_upload_desktop_upsell",
  label: "File Upload Desktop Upsell",
  kind: "user",
  defaultConfig: {
    enabled: !1,
    addSocialProof: !1
  },
  treatments: [{
    id: 1,
    label: "Enable new roadblock modal",
    config: {
      enabled: !0,
      addSocialProof: !1
    }
  }, {
    id: 2,
    label: "Enable new roadblock modal with social proof",
    config: {
      enabled: !0,
      addSocialProof: !0
    }
  }]
})