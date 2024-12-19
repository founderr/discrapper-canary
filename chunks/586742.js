n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(239091),
    c = n(765250),
    u = n(393238),
    d = n(358221),
    h = n(933557),
    f = n(352978),
    m = n(27457),
    v = n(796638),
    p = n(592125),
    x = n(131951),
    g = n(944486),
    C = n(906037),
    Z = n(501787),
    I = n(65154),
    _ = n(827202);
function j(e) {
    var t;
    let { participant: n, channel: r, context: l } = e,
        o = null === (t = n.user) || void 0 === t ? void 0 : t.id;
    return (0, a.e7)([x.Z], () => null != n.user && null != l && null != r && x.Z.isLocalVideoDisabled(o, l), [o, n.user, l, r]) ? null : (0, i.jsx)(m.ZP, { ...e });
}
function E(e) {
    let { context: t = I.Yn.DEFAULT, participants: l, locked: a, widget: c, channel: u, width: d, height: h, containerRef: m } = e,
        v = (e, r) => {
            (0, s.jW)(r, async () => {
                let { default: r } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(r, {
                        ...n,
                        user: e.user,
                        showMediaItems: !0,
                        mediaEngineContext: t
                    });
            });
        },
        p = l.length > 0 && null != t && null != u && (!a || c.pinned);
    r.useEffect(() => {
        (0, C.m3)(
            {
                locked: a,
                pinned: c.pinned,
                widget: c.type,
                isPreviewingInGame: !1
            },
            p
        );
    }, [a, c, p]);
    let x = 'boolean' != typeof c.meta.horizontal || c.meta.horizontal;
    return p
        ? (0, i.jsx)('div', {
              ref: m,
              className: o()({
                  [_.videoList]: !0,
                  [_.vertical]: !x
              }),
              style: { opacity: c.opacity },
              children: l.map((e) =>
                  (0, i.jsx)(
                      j,
                      {
                          participant: e,
                          width: d,
                          className: _.tile,
                          containerStyle: {
                              width: d,
                              height: h
                          },
                          fit: f.L.COVER,
                          channel: u,
                          inPopout: !0,
                          inCall: !0,
                          noBorder: !0,
                          onContextMenu: a ? void 0 : v,
                          forceIdle: a,
                          context: t
                      },
                      e.id
                  )
              )
          })
        : null;
}
function b(e) {
    let t = (0, a.e7)([g.Z, p.Z], () => p.Z.getChannel(g.Z.getVoiceChannelId())),
        n = (0, h.ZP)(t),
        l = (0, a.Wu)([d.Z], () => (null != t ? d.Z.getVideoParticipants(t.id) : [])),
        o = (0, a.e7)([d.Z], () => (null != t ? d.Z.getParticipantsVersion(t.id) : 0)),
        s = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: f, height: m, ref: x } = (0, u.Z)(),
        { visibleParticipants: C, participantTileWidth: I } = (0, v.ZB)(s ? (null != f ? f : e.width) : null != m ? m : e.height, l, {
            tileWidth: Z.OVERLAY_TILE_WIDTH,
            tileMinWidth: Z.OVERLAY_TILE_MIN_WIDTH,
            tileMargin: Z.OVERLAY_TILE_MARGIN,
            limit: 8,
            cropSelfVideo: !0,
            version: o
        }),
        _ = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        j = r.useRef(_);
    return (
        r.useLayoutEffect(() => void (j.current = _)),
        r.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = j.current;
            ((s && e.height > e.width) || (!s && e.width > e.height)) &&
                (0, c.nv)({
                    widgetId: t,
                    size: {
                        fixed: !0,
                        width: i,
                        height: n
                    }
                });
        }, [s]),
        (0, i.jsx)(E, {
            ...e,
            channel: t,
            title: null != n ? n : '',
            participants: C,
            participantsVersion: o,
            width: s ? I : null != f ? f : e.width,
            height: s ? (null != m ? m : e.height) : I,
            containerRef: x
        })
    );
}
