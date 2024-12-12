r.d(n, {
    Z: function () {
        return v;
    },
    h: function () {
        return E;
    }
});
var i = r(192379),
    a = r(348327),
    s = r.n(a),
    o = r(97613),
    l = r.n(o),
    u = r(990547),
    c = r(570140),
    d = r(592125),
    f = r(944486),
    _ = r(914010),
    h = r(626135),
    p = r(367907),
    m = r(565384);
let g = (0, u.trackMaker)({
    analyticEventConfigs: h.AnalyticEventConfigs,
    dispatcher: c.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function E(e) {
    var n, r;
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { name: a, type: s, properties: o } = e;
    if (
        e.type === u.ImpressionTypes.MODAL &&
        null == e.name &&
        (0, m.Ez)().some((e) => {
            var n;
            return null === (n = e._stackContext) || void 0 === n ? void 0 : n.isSlide;
        })
    )
        return;
    (0, m.Ps)(e);
    let l = null !== (n = null == o ? void 0 : o.guild_id) && void 0 !== n ? n : _.Z.getGuildId(),
        c = null !== (r = null == o ? void 0 : o.channel_id) && void 0 !== r ? r : f.Z.getChannelId(l),
        E = (0, h.expandEventProperties)({
            impression_type: s,
            location: (0, m.k$)(),
            ...(0, p.hH)(l),
            ...(0, p.v_)(d.Z.getChannel(c)),
            ...o
        });
    if (i) {
        (0, m.dT)(null, null);
        return;
    }
    null != a && null != s && ((0, h.debugLogEvent)(a, E), g(a, E)), (0, m.dT)(a, E);
}
function v(e) {
    let n =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      disableTrack: !1,
                      trackOnInitialLoad: !1
                  },
        r = arguments.length > 2 ? arguments[2] : void 0,
        a = i.useRef(),
        o = i.useRef();
    i.useEffect(
        () => {
            let i = !s()(a.current, e);
            i && (a.current = e);
            let u = !s()(o.current, r);
            if ((u && (o.current = r), !i && !u)) return;
            let c = {
                ...e,
                sequenceId: l()('impression_')
            };
            return (
                E(c, n.disableTrack),
                () => {
                    null != c && (0, m.dw)(c);
                }
            );
        },
        n.trackOnInitialLoad ? [] : void 0
    );
}
