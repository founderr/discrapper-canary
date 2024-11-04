n.d(t, {
    Z: function () {
        return v;
    },
    r: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(782690),
    s = n(481060),
    a = n(570140),
    o = n(668781),
    c = n(966390),
    u = n(680287),
    d = n(470623),
    h = n(957730),
    m = n(48854),
    p = n(703558),
    f = n(403182),
    g = n(928477),
    C = n(981631),
    x = n(388032);
function v(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: i, privateThreadMode: r, location: s, onThreadCreated: a, useDefaultThreadName: o } = e,
        u = l.useCallback((e, t, n, i) => {
            c.Z.uploadFiles({
                channelId: e.id,
                uploads: t,
                draftType: p.d.FirstThreadMessage,
                options: { stickerIds: i },
                parsedMessage: h.ZP.parse(e, n)
            });
        }, []);
    return (0, g.JA)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: r,
        location: s,
        onThreadCreated: a,
        useDefaultThreadName: o,
        uploadHandler: u
    });
}
function _(e) {
    let { parentChannel: t } = e,
        { name: l, appliedTags: c } = (0, d.xH)((e) => {
            let { name: t, appliedTags: n } = e;
            return {
                name: t,
                appliedTags: n
            };
        }, r.Z);
    return (0, g.Wj)({
        parentChannel: t,
        name: l,
        appliedTags: c,
        upload: function (e, l, r) {
            return new Promise((c, d) => {
                let h = new u.Z(e);
                h.on('error', (e, l, r) => {
                    if (l === C.evJ.EXPLICIT_CONTENT) {
                        let e = (0, m.r)();
                        null != r &&
                            null != r.attachments &&
                            r.attachments.length > 0 &&
                            (a.Z.dispatch({
                                type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                                messageId: e,
                                channelId: t.id,
                                attachments: r.attachments
                            }),
                            (0, s.openModalLazy)(async () => {
                                let { default: l } = await n.e('57539').then(n.bind(n, 924188));
                                return (n) =>
                                    (0, i.jsx)(l, {
                                        ...n,
                                        channelId: t.id,
                                        messageId: e
                                    });
                            }));
                    } else if (l === C.evJ.ENTITY_TOO_LARGE) {
                        let e = (0, f.dg)(t.getGuildId());
                        o.Z.show({
                            title: x.intl.string(x.t['/tGlcn']),
                            body: x.intl.formatToPlainString(x.t.fxEKdX, { maxSize: (0, f.Ng)(e) })
                        });
                    } else
                        l === C.evJ.TOO_MANY_ATTACHMENTS &&
                            o.Z.show({
                                title: x.intl.string(x.t.wOr6hI),
                                body: x.intl.formatToPlainString(x.t['qqyp/f'], { limit: C.dN1 })
                            });
                    d({ body: r });
                }),
                    h.on('complete', (e, t) => {
                        c({ body: t });
                    }),
                    h.uploadFiles(r, l, { addFilesTo: 'message.attachments' });
            });
        }
    });
}
