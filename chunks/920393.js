n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var r = n(192379);
function o(e) {
    let { videoRef: t, isPlaying: n, isMetadataLoaded: o, isInitialSeekComplete: i, onAnalytics: l, emitIntervalMs: s, minSegmentDurationMs: a } = e,
        [c, u] = r.useState(null),
        d = (0, r.useRef)(null),
        m = (0, r.useRef)(Date.now()),
        f = (0, r.useRef)(!1),
        p = (0, r.useCallback)(
            (e) => {
                if (!(e.segmentEndSec < e.segmentStartSec))
                    l({
                        start_time: e.startTime,
                        end_time: e.endTime,
                        duration: e.endTime - e.startTime,
                        segment_start_sec: e.segmentStartSec,
                        segment_end_sec: e.segmentEndSec,
                        segment_duration_sec: e.segmentEndSec - e.segmentStartSec
                    });
            },
            [l]
        ),
        v = (0, r.useCallback)(() => {
            if (null != t.current && o && i) {
                let e = Date.now(),
                    n = t.current.currentTime;
                u({
                    startTime: e,
                    endTime: e,
                    segmentStartSec: n,
                    segmentEndSec: n
                }),
                    (f.current = !0);
            }
        }, [t, o, i]),
        C = (0, r.useCallback)(() => {
            if (null == t.current || null == c) return;
            let e = Date.now();
            if (e - m.current < s) return;
            let n = t.current.currentTime;
            if (!(n - c.segmentStartSec < a / 1000))
                p({
                    ...c,
                    endTime: e,
                    segmentEndSec: n
                }),
                    u({
                        startTime: e,
                        endTime: e,
                        segmentStartSec: n,
                        segmentEndSec: n
                    }),
                    (m.current = e);
        }, [c, p, s, t, a]);
    return (
        (0, r.useEffect)(() => {
            (!o || !i) && (u(null), (f.current = !1));
        }, [o, i]),
        (0, r.useEffect)(() => {
            if (n && o && i)
                !f.current && v(),
                    (d.current = window.setInterval(() => {
                        C();
                    }, 200));
            else {
                if (null != c && null != t.current) {
                    let e = Date.now(),
                        n = t.current.currentTime;
                    n - c.segmentStartSec > 0.2 &&
                        p({
                            ...c,
                            endTime: e,
                            segmentEndSec: n
                        });
                }
                u(null), (f.current = !1), null != d.current && (clearInterval(d.current), (d.current = null));
            }
            return () => {
                null != d.current && (clearInterval(d.current), (d.current = null));
            };
        }, [n, o, i, c, C, p, t, v]),
        {
            forceSendCurrentSegment: (0, r.useCallback)(() => {
                if (null != c && null != t.current) {
                    let e = Date.now(),
                        n = t.current.currentTime;
                    n - c.segmentStartSec > 0.2 &&
                        p({
                            ...c,
                            endTime: e,
                            segmentEndSec: n
                        }),
                        u(null),
                        (f.current = !1);
                }
            }, [c, p, t]),
            isInitialized: f.current
        }
    );
}
