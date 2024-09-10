t.d(n, {
    L9: function () {
        return T;
    },
    ZK: function () {
        return x;
    },
    d4: function () {
        return M;
    },
    dS: function () {
        return S;
    },
    jY: function () {
        return A;
    },
    q7: function () {
        return g;
    },
    vZ: function () {
        return v;
    }
}),
    t(789020);
var i = t(735250),
    o = t(470079),
    a = t(442837),
    c = t(993365),
    r = t(981729),
    l = t(481060),
    s = t(543651),
    d = t(394779),
    u = t(519320),
    _ = t(592125),
    f = t(52824),
    m = t(630388),
    I = t(591759),
    h = t(850908),
    p = t(524444),
    E = t(981631),
    C = t(689938),
    y = t(120131);
function S(e) {
    let n = e.item.originalItem;
    return (0, p.Yi)({
        ...e,
        alt: n.description,
        src: (0, f.q)({
            proxyURL: n.proxy_url,
            url: n.url
        }),
        original: n.url,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholder_version,
        renderForwardComponent: (0, d.s)(e.message, {
            type: 'attachment',
            attachmentId: n.id
        })
    });
}
function v(e) {
    let n = e.item.originalItem,
        t = o.useCallback(() => {
            var e;
            return (0, m.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, E.J0y.IS_CLIP)
                ? (0, i.jsxs)(r.DY, {
                      text: C.Z.Messages.CLIPS_BETA_TAG_HOVER,
                      className: y.clipPill,
                      children: [
                          (0, i.jsx)(l.ClipsIcon, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, i.jsx)(c.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: C.Z.Messages.CLIP_TAG
                          })
                      ]
                  })
                : null;
        }, [n]),
        a = I.Z.toURLSafe(n.proxy_url);
    return null == a
        ? null
        : (a.searchParams.append('format', 'webp'),
          (0, p.lV)({
              ...e,
              alt: n.description,
              poster: a.toString(),
              fileSize: n.size,
              fileName: (0, h.Z)(n),
              src: n.url,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholder_version,
              renderOverlayContent: t,
              renderForwardComponent: (0, d.s)(e.message, {
                  type: 'attachment',
                  attachmentId: n.id
              })
          }));
}
function g(e) {
    let n = e.item.originalItem;
    return (0, p.hX)({
        ...e,
        fileSize: n.size,
        fileName: (0, h.Z)(n),
        src: n.url
    });
}
function A(e) {
    let { message: n, item: t } = e,
        i = t.originalItem,
        a = o.useCallback(
            (e, t, o) => {
                var a;
                (0, u.tb)(n.id, null !== (a = i.duration_secs) && void 0 !== a ? a : null, t, n.author.id);
            },
            [n, i.duration_secs]
        ),
        c = o.useCallback(
            (e, t) => {
                var o;
                (0, u.EW)(n.id, null !== (o = i.duration_secs) && void 0 !== o ? o : null, e, n.author.id, t);
            },
            [n, i.duration_secs]
        ),
        r = o.useCallback(
            (e) => {
                var t;
                (0, u.Np)(n.id, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : null);
            },
            [n]
        );
    return (0, p.wj)({
        ...e,
        fileSize: i.size,
        fileName: (0, h.Z)(i),
        src: i.url,
        durationSecs: i.duration_secs,
        waveform: i.waveform,
        onPlay: a,
        onPause: c,
        onError: r
    });
}
function M(e) {
    let n = e.item.originalItem;
    return (0, p.xi)({
        ...e,
        url: n.url,
        fileName: (0, h.Z)(n),
        fileSize: n.size,
        contentType: n.content_type
    });
}
function x(e) {
    let n = e.item.originalItem;
    return (0, p.ur)({
        ...e,
        url: n.url,
        fileName: (0, h.Z)(n),
        fileSize: n.size
    });
}
function T(e) {
    if ('CLIP' === e.item.type)
        return (0, i.jsx)(O, {
            attachment: e.item.originalItem,
            message: e.message
        });
    return null;
}
function O(e) {
    var n;
    let { attachment: t, message: o } = e,
        c = o.channel_id,
        r = (0, a.e7)([_.Z], () => {
            var e;
            return null === (e = _.Z.getBasicChannel(c)) || void 0 === e ? void 0 : e.guild_id;
        }),
        { clip_created_at: l, clip_participants: d, title: u, application: f } = t;
    return (0, i.jsx)(s.Z, {
        createdAt: null != l ? Date.parse(l) : void 0,
        participantIds:
            null !==
                (n =
                    null == d
                        ? void 0
                        : d.map((e) => {
                              let { id: n } = e;
                              return n;
                          })) && void 0 !== n
                ? n
                : [],
        applicationId: null == f ? void 0 : f.id,
        title: u,
        guildId: r
    });
}
