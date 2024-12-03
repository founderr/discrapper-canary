n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651),
    o = n(192379),
    l = n(120356),
    r = n.n(l),
    s = n(442837),
    a = n(239091),
    u = n(765250),
    c = n(393238),
    d = n(358221),
    h = n(933557),
    f = n(352978),
    p = n(27457),
    m = n(796638),
    v = n(592125),
    g = n(131951),
    E = n(944486),
    x = n(906037),
    C = n(501787),
    Z = n(65154),
    _ = n(827202);
function I(e) {
    var t;
    let { participant: n, channel: o, context: l } = e,
        r = null === (t = n.user) || void 0 === t ? void 0 : t.id;
    return (0, s.e7)([g.Z], () => null != n.user && null != l && null != o && g.Z.isLocalVideoDisabled(r, l), [r, n.user, l, o]) ? null : (0, i.jsx)(p.ZP, { ...e });
}
function S(e) {
    let { context: t = Z.Yn.DEFAULT, participants: l, locked: s, widget: u, channel: c, width: d, height: h, containerRef: p } = e,
        m = (e, o) => {
            (0, a.jW)(o, async () => {
                let { default: o } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(o, {
                        ...n,
                        user: e.user,
                        showMediaItems: !0,
                        mediaEngineContext: t
                    });
            });
        },
        v = l.length > 0 && null != t && null != c && (!s || u.pinned);
    o.useEffect(() => {
        (0, x.m3)(
            {
                locked: s,
                pinned: u.pinned,
                widget: u.type,
                isPreviewingInGame: !1
            },
            v
        );
    }, [s, u, v]);
    let g = 'boolean' != typeof u.meta.horizontal || u.meta.horizontal;
    return v
        ? (0, i.jsx)('div', {
              ref: p,
              className: r()({
                  [_.videoList]: !0,
                  [_.vertical]: !g
              }),
              style: { opacity: u.opacity },
              children: l.map((e) =>
                  (0, i.jsx)(
                      I,
                      {
                          participant: e,
                          width: d,
                          className: _.tile,
                          containerStyle: {
                              width: d,
                              height: h
                          },
                          fit: f.L.COVER,
                          channel: c,
                          inPopout: !0,
                          inCall: !0,
                          noBorder: !0,
                          onContextMenu: s ? void 0 : m,
                          forceIdle: s,
                          context: t
                      },
                      e.id
                  )
              )
          })
        : null;
}
function b(e) {
    let t = (0, s.e7)([E.Z, v.Z], () => v.Z.getChannel(E.Z.getVoiceChannelId())),
        n = (0, h.ZP)(t),
        l = (0, s.Wu)([d.Z], () => (null != t ? d.Z.getVideoParticipants(t.id) : [])),
        r = (0, s.e7)([d.Z], () => (null != t ? d.Z.getParticipantsVersion(t.id) : 0)),
        a = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: f, height: p, ref: g } = (0, c.Z)(),
        { visibleParticipants: x, participantTileWidth: Z } = (0, m.ZB)(a ? (null != f ? f : e.width) : null != p ? p : e.height, l, {
            tileWidth: C.OVERLAY_TILE_WIDTH,
            tileMinWidth: C.OVERLAY_TILE_MIN_WIDTH,
            tileMargin: C.OVERLAY_TILE_MARGIN,
            limit: 8,
            cropSelfVideo: !0,
            version: r
        }),
        _ = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        I = o.useRef(_);
    return (
        o.useLayoutEffect(() => void (I.current = _)),
        o.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = I.current;
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
            participants: x,
            participantsVersion: r,
            width: a ? Z : null != f ? f : e.width,
            height: a ? (null != p ? p : e.height) : Z,
            containerRef: g
        })
    );
}
