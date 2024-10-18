n.d(t, {
    B: function () {
        return _;
    },
    a: function () {
        return E;
    }
}),
    n(411104);
var l = n(570140),
    a = n(493683),
    i = n(957730),
    r = n(222677),
    s = n(995774),
    o = n(314897),
    u = n(592125),
    c = n(703558),
    d = n(62817),
    h = n(960048);
let m = (e) => {
        let t = d.Z.getFiles(e)[0];
        return null == d.Z.getMessageForFile(t.id)
            ? (h.Z.addBreadcrumb({ message: 'No message found for upload' }), Promise.reject())
            : new Promise((e, n) => {
                  let a = (i) => {
                      i.file.id === t.id && (l.Z.unsubscribe('UPLOAD_COMPLETE', a), l.Z.unsubscribe('UPLOAD_FAIL', a), 'UPLOAD_COMPLETE' === i.type ? e(i.messageRecord) : n(Error('Upload failed')));
                  };
                  l.Z.subscribe('UPLOAD_COMPLETE', a), l.Z.subscribe('UPLOAD_FAIL', a);
              });
    },
    x = async function (e, t) {
        var l;
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0,
            d = u.Z.getChannel(t);
        if (((l = o.default.getToken()), i.ZP.parse(d, ''), a));
        else {
            if (null == u.Z.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
            {
                let l = n(966390).Z;
                (e.description = r),
                    await l.uploadFiles({
                        channelId: t,
                        uploads: [e],
                        draftType: c.d.ChannelMessage,
                        parsedMessage: s
                    });
            }
        }
    },
    E = async (e) => {
        let { file: t, reaction: n, user: l, altText: i, requireConfirmation: o = !1 } = e,
            u = await a.Z.openPrivateChannel(l.id, !1, !1);
        x(t, u, o, i);
        let c = await m(u);
        if (null != c) {
            let e = (0, s.g1)(n);
            await (0, r.rU)(u, c.id, e);
        }
    },
    _ = (e) => {
        let { file: t, reply: n, channel: l, altText: a, requireConfirmation: r = !1 } = e,
            s = i.ZP.parse(l, n);
        return x(t, l.id, r, a, s);
    };
