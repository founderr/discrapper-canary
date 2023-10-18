(() => {
    "use strict";

    function r(r, t) {
        (null == t || t > r.length) && (t = r.length);
        for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
        return n
    }

    function t(t) {
        return function(t) {
            if (Array.isArray(t)) return r(t)
        }(t) || function(r) {
            if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return r(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    self.addEventListener("message", (function(r) {
        var e = r.data,
            n = e.rawBufferData,
            o = e.width,
            a = e.options,
            i = e.config,
            l = e.id,
            u = function(r, e, n, o) {
                var a, i, l = n.fineTuning,
                    u = n.fineTuningResolution,
                    f = n.duration,
                    s = r,
                    m = Math.floor(e / o.waveformBlockWidth);
                if (l >= 0) {
                    var c = l - u * l / f,
                        d = l + u * (f - l) / f,
                        h = Math.floor(s.length * c / f),
                        p = Math.floor(s.length * d / f);
                    i = s.slice(h, p)
                } else i = s;
                for (var y = Math.floor(i.length / m), g = [], v = 0; v < m; v++) {
                    for (var M = y * v, b = 0, w = 0; w < y; w++) b += Math.abs(i[M + w]);
                    g.push(b / y)
                }
                var A, z = Math.pow((a = Math).max.apply(a, t(g)), -1),
                    S = g.map((function(r) {
                        return r * z
                    })),
                    T = t(g).sort()[Math.floor(.95 * g.length)];
                return {
                    normalizedData: S,
                    normalizedVolumeMultipler: Math.min((null !== (A = o.loudnessThreshold) && void 0 !== A ? A : T) / T, 1)
                }
            }(n, o, a, i),
            f = u.normalizedData,
            s = u.normalizedVolumeMultipler;
        self.postMessage({
            waveform: f,
            id: l,
            normalizedVolumeMultipler: s
        })
    }))
})();