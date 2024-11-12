n.d(t, {
    Z: function () {
        return E;
    },
    h: function () {
        return g;
    }
});
var r = n(192379),
    i = n(348327),
    a = n.n(i),
    s = n(97613),
    o = n.n(s),
    l = n(990547),
    u = n(570140),
    c = n(592125),
    d = n(944486),
    f = n(914010),
    _ = n(626135),
    p = n(367907),
    h = n(565384);
let m = (0, l.trackMaker)({
    analyticEventConfigs: _.AnalyticEventConfigs,
    dispatcher: u.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function g(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { name: i, type: a, properties: s } = e;
    if (
        e.type === l.ImpressionTypes.MODAL &&
        null == e.name &&
        (0, h.Ez)().some((e) => {
            var t;
            return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide;
        })
    )
        return;
    (0, h.Ps)(e);
    let o = null !== (t = null == s ? void 0 : s.guild_id) && void 0 !== t ? t : f.Z.getGuildId(),
        u = null !== (n = null == s ? void 0 : s.channel_id) && void 0 !== n ? n : d.Z.getChannelId(o),
        g = (0, _.expandEventProperties)({
            impression_type: a,
            location: (0, h.k$)(),
            ...(0, p.hH)(o),
            ...(0, p.v_)(c.Z.getChannel(u)),
            ...s
        });
    if (r) {
        (0, h.dT)(null, null);
        return;
    }
    null != i && null != a && ((0, _.debugLogEvent)(i, g), m(i, g)), (0, h.dT)(i, g);
}
function E(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      disableTrack: !1,
                      trackOnInitialLoad: !1
                  },
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = r.useRef(),
        s = r.useRef();
    r.useEffect(
        () => {
            let r = !a()(i.current, e);
            r && (i.current = e);
            let l = !a()(s.current, n);
            if ((l && (s.current = n), !r && !l)) return;
            let u = {
                ...e,
                sequenceId: o()('impression_')
            };
            return (
                g(u, t.disableTrack),
                () => {
                    null != u && (0, h.dw)(u);
                }
            );
        },
        t.trackOnInitialLoad ? [] : void 0
    );
}
