i.d(n, {
    L9: function () {
        return L;
    },
    ZK: function () {
        return M;
    },
    d4: function () {
        return A;
    },
    dS: function () {
        return y;
    },
    jY: function () {
        return g;
    },
    q7: function () {
        return v;
    },
    vZ: function () {
        return S;
    }
}), i(789020);
var t = i(735250), o = i(470079), a = i(442837), r = i(993365), l = i(981729), c = i(481060), s = i(543651), d = i(394779), u = i(519320), f = i(592125), _ = i(52824), m = i(630388), I = i(591759), b = i(850908), h = i(524444), p = i(981631), C = i(689938), E = i(736984);
function y(e) {
    let n = e.item.originalItem;
    return (0, h.Yi)({
        ...e,
        alt: n.description,
        src: (0, _.q)({
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
function S(e) {
    let n = e.item.originalItem, i = o.useCallback(() => {
            var e;
            return (0, m.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, p.J0y.IS_CLIP) ? (0, t.jsxs)(l.DY, {
                text: C.Z.Messages.CLIPS_BETA_TAG_HOVER,
                className: E.clipPill,
                children: [
                    (0, t.jsx)(c.ClipsIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    (0, t.jsx)(r.x, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: C.Z.Messages.CLIP_TAG
                    })
                ]
            }) : null;
        }, [n]), a = I.Z.toURLSafe(n.proxy_url);
    return null == a ? null : (a.searchParams.append('format', 'jpeg'), (0, h.lV)({
        ...e,
        alt: n.description,
        poster: a.toString(),
        fileSize: n.size,
        fileName: (0, b.Z)(n),
        src: n.url,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholder_version,
        renderOverlayContent: i,
        renderForwardComponent: (0, d.s)(e.message, {
            type: 'attachment',
            attachmentId: n.id
        })
    }));
}
function v(e) {
    let n = e.item.originalItem;
    return (0, h.hX)({
        ...e,
        fileSize: n.size,
        fileName: (0, b.Z)(n),
        src: n.url
    });
}
function g(e) {
    let {
            message: n,
            item: i
        } = e, t = i.originalItem, a = o.useCallback((e, i, o) => {
            var a;
            (0, u.tb)(n.id, null !== (a = t.duration_secs) && void 0 !== a ? a : null, i, n.author.id);
        }, [
            n,
            t.duration_secs
        ]), r = o.useCallback((e, i) => {
            var o;
            (0, u.EW)(n.id, null !== (o = t.duration_secs) && void 0 !== o ? o : null, e, n.author.id, i);
        }, [
            n,
            t.duration_secs
        ]), l = o.useCallback(e => {
            var i;
            (0, u.Np)(n.id, null !== (i = null == e ? void 0 : e.message) && void 0 !== i ? i : null);
        }, [n]);
    return (0, h.wj)({
        ...e,
        fileSize: t.size,
        fileName: (0, b.Z)(t),
        src: t.url,
        durationSecs: t.duration_secs,
        waveform: t.waveform,
        onPlay: a,
        onPause: r,
        onError: l
    });
}
function A(e) {
    let n = e.item.originalItem;
    return (0, h.xi)({
        ...e,
        url: n.url,
        fileName: (0, b.Z)(n),
        fileSize: n.size,
        contentType: n.content_type
    });
}
function M(e) {
    let n = e.item.originalItem;
    return (0, h.ur)({
        ...e,
        url: n.url,
        fileName: (0, b.Z)(n),
        fileSize: n.size
    });
}
function L(e) {
    if ('CLIP' === e.item.type)
        return (0, t.jsx)(x, {
            attachment: e.item.originalItem,
            message: e.message
        });
    return null;
}
function x(e) {
    var n;
    let {
            attachment: i,
            message: o
        } = e, r = o.channel_id, l = (0, a.e7)([f.Z], () => {
            var e;
            return null === (e = f.Z.getBasicChannel(r)) || void 0 === e ? void 0 : e.guild_id;
        }), {
            clip_created_at: c,
            clip_participants: d,
            title: u,
            application: _
        } = i;
    return (0, t.jsx)(s.Z, {
        createdAt: null != c ? Date.parse(c) : void 0,
        participantIds: null !== (n = null == d ? void 0 : d.map(e => {
            let {id: n} = e;
            return n;
        })) && void 0 !== n ? n : [],
        applicationId: null == _ ? void 0 : _.id,
        title: u,
        guildId: l
    });
}
