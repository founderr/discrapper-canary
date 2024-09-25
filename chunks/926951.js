var r = n(47120);
var i = n(818083),
    a = n(65154);
let o = 'bandwidth_estimation',
    s = (0, i.B)({
        kind: 'user',
        id: '2024-06_rtc_pacer__simulcast',
        label: 'RTC Pacer & Golive Simulcast',
        defaultConfig: {
            enabled: !0,
            fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/',
            simulcastEnabled: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Golive Simulcast without prober 480p@500k',
                config: {
                    enabled: !0,
                    fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/',
                    simulcastEnabled: !0,
                    simulcastFlag: a.V8.GOLIVE_SIMULCAST_480P_500K
                }
            },
            {
                id: 2,
                label: 'Golive Simulcast 480p@500k',
                config: {
                    enabled: !0,
                    fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe',
                    simulcastEnabled: !0,
                    simulcastFlag: a.V8.GOLIVE_SIMULCAST_480P_500K
                }
            },
            {
                id: 3,
                label: 'Golive with pacing',
                config: {
                    enabled: !0,
                    fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer',
                    simulcastEnabled: !1
                }
            },
            {
                id: 4,
                label: 'Golive with pacing and probing',
                config: {
                    enabled: !0,
                    fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe',
                    simulcastEnabled: !1
                }
            },
            {
                id: 5,
                label: 'Golive Simulcast 480p@750k',
                config: {
                    enabled: !0,
                    fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-750k',
                    simulcastEnabled: !0,
                    simulcastFlag: a.V8.GOLIVE_SIMULCAST_480P_750K
                }
            },
            {
                id: 6,
                label: 'Golive Simulcast 480p@1000k',
                config: {
                    enabled: !0,
                    fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-1000k',
                    simulcastEnabled: !0,
                    simulcastFlag: a.V8.GOLIVE_SIMULCAST_480P_1000K
                }
            }
        ]
    });
t.Z = {
    getConfig(e, t) {
        let n = s.getCurrentConfig({ location: 'e1c55b_1' }, { autoTrackExposure: e });
        return !this.supportsBandwidthEstimationExperimentFullname(n.fullname, t) && (n.enabled = !1), n;
    },
    supportsBandwidthEstimationExperimentFullname(e, t) {
        let n = this.getMediaEngineExperiments(e);
        if (null === n) return !1;
        for (let e of n) if (!t.includes(e)) return !1;
        return !0;
    },
    getMediaEngineExperiments(e) {
        let t = e.split('/');
        return 3 !== t.length || t[0] !== o ? null : t[1].split(',').filter((e) => 0 !== e.length);
    },
    supportsSimulcast: () => s.getCurrentConfig({ location: 'e1c55b_2' }, { autoTrackExposure: !1 }).simulcastEnabled,
    goliveSimulcastFlag: () => s.getCurrentConfig({ location: 'e1c55b_2' }, { autoTrackExposure: !1 }).simulcastFlag
};
