(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64602"], {
        896630: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                Q4DropExperiment: function() {
                    return i
                },
                default: function() {
                    return o
                }
            });
            var r = t("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-10_q4_drop",
                label: "Q4 Drop",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var o = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return i.useExperiment({
                    location: "experiment_hook"
                }, {
                    autoTrackExposure: e,
                    disable: n
                })
            }
        }
    }
]);