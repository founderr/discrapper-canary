n(47120), n(724458);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(981631),
    c = n(65154);
let d = null,
    f = null,
    _ = {};
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = _[e];
    if (null == r) return;
    let i = r[null != t ? t : u.kod];
    if (null != i) {
        for (let e of Object.values(c.Yn)) (n === e || null == n) && delete i[e];
        _[e][null != t ? t : u.kod] = i;
    }
}
class h extends (r = o.ZP.Store) {
    getStreamId(e, t) {
        var n, r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Yn.DEFAULT;
        return null === (i = _[e]) || void 0 === i ? void 0 : null === (r = i[null != t ? t : u.kod]) || void 0 === r ? void 0 : null === (n = r[a]) || void 0 === n ? void 0 : n.streamId;
    }
    getUserStreamData(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Yn.DEFAULT;
        return null === (r = _[e]) || void 0 === r ? void 0 : null === (n = r[null != t ? t : u.kod]) || void 0 === n ? void 0 : n[i];
    }
}
(s = 'VideoStreamStore'),
    (a = 'displayName') in (i = h)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new h(l.Z, {
        CONNECTION_OPEN: function (e) {
            let { user: t, sessionId: n } = e;
            (d = t.id), (f = n);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { user: t, sessionId: n } = e;
            (d = t.id), (f = n);
        },
        RTC_CONNECTION_VIDEO: function (e) {
            let { userId: t, guildId: n, streamId: r, context: i } = e;
            null != r
                ? !(function (e, t, n, r) {
                      var i;
                      !(e in _) && (_[e] = {});
                      let a = null !== (i = _[e][null != t ? t : u.kod]) && void 0 !== i ? i : {};
                      _[e][null != t ? t : u.kod] = {
                          ...a,
                          [r]: { streamId: n }
                      };
                  })(t, n, r, i)
                : p(t, n, i);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                var n;
                let { userId: r, sessionId: i, channelId: a, guildId: s } = t;
                if (null == a && r === d) {
                    if (i !== f) return e;
                    _ = {};
                } else {
                    if (null != a || (null === (n = _[r]) || void 0 === n ? void 0 : n[null != s ? s : u.kod]) == null) return e;
                    p(r, s);
                }
                return !0;
            }, !1);
        }
    }));
