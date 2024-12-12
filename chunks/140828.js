r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(379649),
    a = r(866960),
    s = r(981631);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function l(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : n;
}
class u {
    _initStats() {
        let e = {
            effectiveConnectionSpeedBuckets: {},
            connectionTypeBuckets: {}
        };
        return (
            Object.values(s.IWh).forEach((n) => {
                e.connectionTypeBuckets[n] = 0;
            }),
            Object.values(s.IyS).forEach((n) => {
                e.effectiveConnectionSpeedBuckets[n] = 0;
            }),
            e
        );
    }
    getStats() {
        let { _networkStats: e } = this;
        return {
            duration_connection_type_wifi: l(e.connectionTypeBuckets[s.IWh.WIFI]),
            duration_connection_type_cellular: l(e.connectionTypeBuckets[s.IWh.CELLULAR]),
            duration_connection_type_ethernet: l(e.connectionTypeBuckets[s.IWh.ETHERNET]),
            duration_connection_type_bluetooth: l(e.connectionTypeBuckets[s.IWh.BLUETOOTH]),
            duration_connection_type_other: l(e.connectionTypeBuckets[s.IWh.OTHER]),
            duration_connection_type_unknown: l(e.connectionTypeBuckets[s.IWh.UNKNOWN]),
            duration_connection_type_none: l(e.connectionTypeBuckets[s.IWh.NONE]),
            duration_effective_connection_speed_2g: l(e.effectiveConnectionSpeedBuckets[s.IyS.TWO_G]),
            duration_effective_connection_speed_3g: l(e.effectiveConnectionSpeedBuckets[s.IyS.THREE_G]),
            duration_effective_connection_speed_4g: l(e.effectiveConnectionSpeedBuckets[s.IyS.FOUR_G]),
            duration_effective_connection_speed_5g: l(e.effectiveConnectionSpeedBuckets[s.IyS.FIVE_G]),
            duration_effective_connection_speed_unknown: l(e.effectiveConnectionSpeedBuckets[s.IyS.UNKNOWN])
        };
    }
    incrementNetworkStats(e) {
        let n = (e - this._lastSampleTimestamp) / 1000,
            r = a.Z.getEffectiveConnectionSpeed();
        r === s.IyS.SLOW_TWO_G && (r = s.IyS.TWO_G);
        let i = a.Z.getType();
        i === s.IWh.WIMAX && (i = s.IWh.WIFI), (this._networkStats.effectiveConnectionSpeedBuckets[r] += n), (this._networkStats.connectionTypeBuckets[i] += n), (this._lastSampleTimestamp = e);
    }
    constructor() {
        o(this, '_networkStats', void 0), o(this, '_lastSampleTimestamp', void 0), (this._networkStats = this._initStats()), (this._lastSampleTimestamp = (0, i.zO)());
    }
}
