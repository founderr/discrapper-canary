t.d(n, {
    L9: function () {
        return R;
    },
    ZK: function () {
        return N;
    },
    d4: function () {
        return L;
    },
    dS: function () {
        return g;
    },
    jY: function () {
        return v;
    },
    q7: function () {
        return D;
    },
    vZ: function () {
        return C;
    }
}),
    t(789020);
var i = t(735250),
    r = t(470079),
    a = t(442837),
    l = t(993365),
    u = t(981729),
    o = t(481060),
    s = t(543651),
    c = t(394779),
    d = t(519320),
    _ = t(592125),
    f = t(52824),
    m = t(630388),
    E = t(591759),
    h = t(850908),
    S = t(524444),
    I = t(981631),
    A = t(689938),
    p = t(120131);
function g(e) {
    var n;
    let t = e.item.originalItem;
    return (0, S.Yi)({
        ...e,
        alt: t.description,
        src: (0, f.q)({
            proxyURL: t.proxy_url,
            url: t.url
        }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        srcIsAnimated: (0, m.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, I.J0y.IS_ANIMATED),
        renderForwardComponent: (0, c.s)(e.message, {
            type: 'attachment',
            attachmentId: t.id
        })
    });
}
function C(e) {
    var n;
    let t = e.item.originalItem,
        a = r.useCallback(() => {
            var e;
            return (0, m.yE)(null !== (e = t.flags) && void 0 !== e ? e : 0, I.J0y.IS_CLIP)
                ? (0, i.jsxs)(u.DY, {
                      text: A.Z.Messages.CLIPS_BETA_TAG_HOVER,
                      className: p.clipPill,
                      children: [
                          (0, i.jsx)(o.ClipsIcon, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, i.jsx)(l.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: A.Z.Messages.CLIP_TAG
                          })
                      ]
                  })
                : null;
        }, [t]),
        s = E.Z.toURLSafe(t.proxy_url);
    return null == s
        ? null
        : (s.searchParams.append('format', 'webp'),
          (0, S.lV)({
              ...e,
              alt: t.description,
              poster: s.toString(),
              fileSize: t.size,
              fileName: (0, h.Z)(t),
              src: t.url,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholder_version,
              srcIsAnimated: (0, m.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, I.J0y.IS_ANIMATED),
              renderOverlayContent: a,
              renderForwardComponent: (0, c.s)(e.message, {
                  type: 'attachment',
                  attachmentId: t.id
              })
          }));
}
function D(e) {
    let n = e.item.originalItem;
    return (0, S.hX)({
        ...e,
        fileSize: n.size,
        fileName: (0, h.Z)(n),
        src: n.url
    });
}
function v(e) {
    let { message: n, item: t } = e,
        i = t.originalItem,
        a = r.useCallback(
            (e, t, r) => {
                var a;
                (0, d.tb)(n.id, null !== (a = i.duration_secs) && void 0 !== a ? a : null, t, n.author.id);
            },
            [n, i.duration_secs]
        ),
        l = r.useCallback(
            (e, t) => {
                var r;
                (0, d.EW)(n.id, null !== (r = i.duration_secs) && void 0 !== r ? r : null, e, n.author.id, t);
            },
            [n, i.duration_secs]
        ),
        u = r.useCallback(
            (e) => {
                var t;
                (0, d.Np)(n.id, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : null);
            },
            [n]
        );
    return (0, S.wj)({
        ...e,
        fileSize: i.size,
        fileName: (0, h.Z)(i),
        src: i.url,
        durationSecs: i.duration_secs,
        waveform: i.waveform,
        onPlay: a,
        onPause: l,
        onError: u
    });
}
function L(e) {
    let n = e.item.originalItem;
    return (0, S.xi)({
        ...e,
        url: n.url,
        fileName: (0, h.Z)(n),
        fileSize: n.size,
        contentType: n.content_type
    });
}
function N(e) {
    let n = e.item.originalItem;
    return (0, S.ur)({
        ...e,
        url: n.url,
        fileName: (0, h.Z)(n),
        fileSize: n.size
    });
}
function R(e) {
    if ('CLIP' === e.item.type)
        return (0, i.jsx)(y, {
            attachment: e.item.originalItem,
            message: e.message
        });
    return null;
}
function y(e) {
    var n;
    let { attachment: t, message: r } = e,
        l = r.channel_id,
        u = (0, a.e7)([_.Z], () => {
            var e;
            return null === (e = _.Z.getBasicChannel(l)) || void 0 === e ? void 0 : e.guild_id;
        }),
        { clip_created_at: o, clip_participants: c, title: d, application: f } = t;
    return (0, i.jsx)(s.Z, {
        createdAt: null != o ? Date.parse(o) : void 0,
        participantIds:
            null !==
                (n =
                    null == c
                        ? void 0
                        : c.map((e) => {
                              let { id: n } = e;
                              return n;
                          })) && void 0 !== n
                ? n
                : [],
        applicationId: null == f ? void 0 : f.id,
        title: d,
        guildId: u
    });
}
