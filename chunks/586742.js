n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(239091),
    u = n(765250),
    c = n(393238),
    d = n(358221),
    h = n(933557),
    f = n(352978),
    p = n(27457),
    m = n(796638),
    v = n(592125),
    g = n(944486),
    E = n(906037),
    _ = n(501787),
    C = n(65154),
    S = n(227002);
function Z(e) {
    let { context: t = C.Yn.DEFAULT, participants: r, locked: a, widget: u, channel: c, width: d, height: h, containerRef: m } = e,
        v = (e, l) => {
            (0, s.jW)(l, async () => {
                let { default: l } = await Promise.all([n.e('79695'), n.e('69220'), n.e('44378')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(l, {
                        ...n,
                        user: e.user,
                        showMediaItems: !0,
                        mediaEngineContext: t
                    });
            });
        },
        g = r.length > 0 && null != t && null != c && (!a || u.pinned);
    l.useEffect(() => {
        (0, E.m3)(
            {
                locked: a,
                pinned: u.pinned,
                widget: u.type,
                isPreviewingInGame: !1
            },
            g
        );
    }, [a, u, g]);
    let _ = 'boolean' != typeof u.meta.horizontal || u.meta.horizontal;
    return g
        ? (0, i.jsx)('div', {
              ref: m,
              className: o()({
                  [S.videoList]: !0,
                  [S.vertical]: !_
              }),
              style: { opacity: u.opacity },
              children: r.map((e) => {
                  let { user: n } = e;
                  return null == n || null == c || null == t
                      ? null
                      : (0, i.jsx)(
                            p.ZP,
                            {
                                participant: e,
                                width: d,
                                className: S.tile,
                                containerStyle: {
                                    width: d,
                                    height: h
                                },
                                fit: f.L.COVER,
                                channel: c,
                                inPopout: !0,
                                inCall: !0,
                                noBorder: !0,
                                onContextMenu: a ? void 0 : v,
                                forceIdle: a
                            },
                            n.id
                        );
              })
          })
        : null;
}
function I(e) {
    let t = (0, a.e7)([g.Z, v.Z], () => v.Z.getChannel(g.Z.getVoiceChannelId())),
        n = (0, h.ZP)(t),
        r = (0, a.Wu)([d.Z], () => (null != t ? d.Z.getVideoParticipants(t.id) : [])),
        o = (0, a.e7)([d.Z], () => (null != t ? d.Z.getParticipantsVersion(t.id) : 0)),
        s = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: f, height: p, ref: E } = (0, c.Z)(),
        { visibleParticipants: C, participantTileWidth: S } = (0, m.ZB)(s ? (null != f ? f : e.width) : null != p ? p : e.height, r, {
            tileWidth: _.vZ,
            tileMinWidth: _.mo,
            tileMargin: _.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: o
        }),
        I = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        x = l.useRef(I);
    return (
        l.useLayoutEffect(() => void (x.current = I)),
        l.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = x.current;
            ((s && e.height > e.width) || (!s && e.width > e.height)) &&
                (0, u.nv)({
                    widgetId: t,
                    size: {
                        fixed: !0,
                        width: i,
                        height: n
                    }
                });
        }, [s]),
        (0, i.jsx)(Z, {
            ...e,
            channel: t,
            title: null != n ? n : '',
            participants: C,
            participantsVersion: o,
            width: s ? S : null != f ? f : e.width,
            height: s ? (null != p ? p : e.height) : S,
            containerRef: E
        })
    );
}
