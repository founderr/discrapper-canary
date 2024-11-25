n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    s = n(442837),
    a = n(239091),
    u = n(765250),
    d = n(393238),
    c = n(358221),
    h = n(933557),
    f = n(352978),
    p = n(27457),
    m = n(796638),
    g = n(592125),
    v = n(944486),
    E = n(906037),
    Z = n(501787),
    C = n(65154),
    x = n(253653);
function S(e) {
    let { context: t = C.Yn.DEFAULT, participants: o, locked: s, widget: u, channel: d, width: c, height: h, containerRef: m } = e,
        g = (e, l) => {
            (0, a.jW)(l, async () => {
                let { default: l } = await Promise.all([n.e('79695'), n.e('69220'), n.e('50261')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(l, {
                        ...n,
                        user: e.user,
                        showMediaItems: !0,
                        mediaEngineContext: t
                    });
            });
        },
        v = o.length > 0 && null != t && null != d && (!s || u.pinned);
    l.useEffect(() => {
        (0, E.m3)(
            {
                locked: s,
                pinned: u.pinned,
                widget: u.type,
                isPreviewingInGame: !1
            },
            v
        );
    }, [s, u, v]);
    let Z = 'boolean' != typeof u.meta.horizontal || u.meta.horizontal;
    return v
        ? (0, i.jsx)('div', {
              ref: m,
              className: r()({
                  [x.videoList]: !0,
                  [x.vertical]: !Z
              }),
              style: { opacity: u.opacity },
              children: o.map((e) => {
                  let { user: n } = e;
                  return null == n || null == d || null == t
                      ? null
                      : (0, i.jsx)(
                            p.ZP,
                            {
                                participant: e,
                                width: c,
                                className: x.tile,
                                containerStyle: {
                                    width: c,
                                    height: h
                                },
                                fit: f.L.COVER,
                                channel: d,
                                inPopout: !0,
                                inCall: !0,
                                noBorder: !0,
                                onContextMenu: s ? void 0 : g,
                                forceIdle: s
                            },
                            n.id
                        );
              })
          })
        : null;
}
function I(e) {
    let t = (0, s.e7)([v.Z, g.Z], () => g.Z.getChannel(v.Z.getVoiceChannelId())),
        n = (0, h.ZP)(t),
        o = (0, s.Wu)([c.Z], () => (null != t ? c.Z.getVideoParticipants(t.id) : [])),
        r = (0, s.e7)([c.Z], () => (null != t ? c.Z.getParticipantsVersion(t.id) : 0)),
        a = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: f, height: p, ref: E } = (0, d.Z)(),
        { visibleParticipants: C, participantTileWidth: x } = (0, m.ZB)(a ? (null != f ? f : e.width) : null != p ? p : e.height, o, {
            tileWidth: Z.OVERLAY_TILE_WIDTH,
            tileMinWidth: Z.OVERLAY_TILE_MIN_WIDTH,
            tileMargin: Z.OVERLAY_TILE_MARGIN,
            limit: 8,
            cropSelfVideo: !0,
            version: r
        }),
        I = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        _ = l.useRef(I);
    return (
        l.useLayoutEffect(() => void (_.current = I)),
        l.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = _.current;
            ((a && e.height > e.width) || (!a && e.width > e.height)) &&
                (0, u.nv)({
                    widgetId: t,
                    size: {
                        fixed: !0,
                        width: i,
                        height: n
                    }
                });
        }, [a]),
        (0, i.jsx)(S, {
            ...e,
            channel: t,
            title: null != n ? n : '',
            participants: C,
            participantsVersion: r,
            width: a ? x : null != f ? f : e.width,
            height: a ? (null != p ? p : e.height) : x,
            containerRef: E
        })
    );
}
