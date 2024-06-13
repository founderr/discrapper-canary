"use strict";
n.r(t), n.d(t, {
  storefrontMessageEmbedExperiment: function() {
    return s
  }
});
let s = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-06_app_storefront_message_embeds",
  label: "Storefront Message Embed",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable",
    config: {
      enabled: !0
    }
  }]
})