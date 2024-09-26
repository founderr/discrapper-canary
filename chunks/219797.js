n.d(t, {
    L9: function () {
        return y;
    },
    ZK: function () {
        return C;
    },
    d4: function () {
        return R;
    },
    dS: function () {
        return A;
    },
    jY: function () {
        return O;
    },
    q7: function () {
        return N;
    },
    vZ: function () {
        return v;
    }
});
var r = n(789020);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(993365),
    l = n(981729),
    u = n(481060),
    c = n(543651),
    d = n(394779),
    _ = n(519320),
    E = n(592125),
    f = n(52824),
    h = n(630388),
    p = n(591759),
    m = n(850908),
    I = n(524444),
    T = n(981631),
    g = n(689938),
    S = n(120131);
function A(e) {
    let t = e.item.originalItem;
    return (0, I.Yi)({
        ...e,
        alt: t.description,
        src: (0, f.q)({
            proxyURL: t.proxy_url,
            url: t.url
        }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        renderForwardComponent: (0, d.s)(e.message, {
            type: 'attachment',
            attachmentId: t.id
        })
    });
}
function v(e) {
    let t = e.item.originalItem,
        n = a.useCallback(() => {
            var e;
            return (0, h.yE)(null !== (e = t.flags) && void 0 !== e ? e : 0, T.J0y.IS_CLIP)
                ? (0, i.jsxs)(l.DY, {
                      text: g.Z.Messages.CLIPS_BETA_TAG_HOVER,
                      className: S.clipPill,
                      children: [
                          (0, i.jsx)(u.ClipsIcon, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, i.jsx)(s.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: g.Z.Messages.CLIP_TAG
                          })
                      ]
                  })
                : null;
        }, [t]),
        r = p.Z.toURLSafe(t.proxy_url);
    return null == r
        ? null
        : (r.searchParams.append('format', 'webp'),
          (0, I.lV)({
              ...e,
              alt: t.description,
              poster: r.toString(),
              fileSize: t.size,
              fileName: (0, m.Z)(t),
              src: t.url,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholder_version,
              renderOverlayContent: n,
              renderForwardComponent: (0, d.s)(e.message, {
                  type: 'attachment',
                  attachmentId: t.id
              })
          }));
}
function N(e) {
    let t = e.item.originalItem;
    return (0, I.hX)({
        ...e,
        fileSize: t.size,
        fileName: (0, m.Z)(t),
        src: t.url
    });
}
function O(e) {
    let { message: t, item: n } = e,
        r = n.originalItem,
        i = a.useCallback(
            (e, n, i) => {
                var a;
                (0, _.tb)(t.id, null !== (a = r.duration_secs) && void 0 !== a ? a : null, n, t.author.id);
            },
            [t, r.duration_secs]
        ),
        o = a.useCallback(
            (e, n) => {
                var i;
                (0, _.EW)(t.id, null !== (i = r.duration_secs) && void 0 !== i ? i : null, e, t.author.id, n);
            },
            [t, r.duration_secs]
        ),
        s = a.useCallback(
            (e) => {
                var n;
                (0, _.Np)(t.id, null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : null);
            },
            [t]
        );
    return (0, I.wj)({
        ...e,
        fileSize: r.size,
        fileName: (0, m.Z)(r),
        src: r.url,
        durationSecs: r.duration_secs,
        waveform: r.waveform,
        onPlay: i,
        onPause: o,
        onError: s
    });
}
function R(e) {
    let t = e.item.originalItem;
    return (0, I.xi)({
        ...e,
        url: t.url,
        fileName: (0, m.Z)(t),
        fileSize: t.size,
        contentType: t.content_type
    });
}
function C(e) {
    let t = e.item.originalItem;
    return (0, I.ur)({
        ...e,
        url: t.url,
        fileName: (0, m.Z)(t),
        fileSize: t.size
    });
}
function y(e) {
    if ('CLIP' === e.item.type)
        return (0, i.jsx)(L, {
            attachment: e.item.originalItem,
            message: e.message
        });
    return null;
}
function L(e) {
    var t;
    let { attachment: n, message: r } = e,
        a = r.channel_id,
        s = (0, o.e7)([E.Z], () => {
            var e;
            return null === (e = E.Z.getBasicChannel(a)) || void 0 === e ? void 0 : e.guild_id;
        }),
        { clip_created_at: l, clip_participants: u, title: d, application: _ } = n;
    return (0, i.jsx)(c.Z, {
        createdAt: null != l ? Date.parse(l) : void 0,
        participantIds:
            null !==
                (t =
                    null == u
                        ? void 0
                        : u.map((e) => {
                              let { id: t } = e;
                              return t;
                          })) && void 0 !== t
                ? t
                : [],
        applicationId: null == _ ? void 0 : _.id,
        title: d,
        guildId: s
    });
}
