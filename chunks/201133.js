n.d(t, {
    B: function () {
        return f;
    },
    a: function () {
        return v;
    }
}),
    n(411104);
var i = n(570140),
    l = n(493683),
    a = n(957730),
    r = n(222677),
    o = n(995774),
    s = n(314897),
    u = n(592125),
    c = n(703558),
    d = n(62817),
    h = n(960048);
let m = (e) => {
        let t = d.Z.getFiles(e)[0];
        return null == d.Z.getMessageForFile(t.id)
            ? (h.Z.addBreadcrumb({ message: 'No message found for upload' }), Promise.reject())
            : new Promise((e, n) => {
                  let l = (a) => {
                      a.file.id === t.id && (i.Z.unsubscribe('UPLOAD_COMPLETE', l), i.Z.unsubscribe('UPLOAD_FAIL', l), 'UPLOAD_COMPLETE' === a.type ? e(a.messageRecord) : n(Error('Upload failed')));
                  };
                  i.Z.subscribe('UPLOAD_COMPLETE', l), i.Z.subscribe('UPLOAD_FAIL', l);
              });
    },
    x = async function (e, t) {
        var i;
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            o = arguments.length > 4 ? arguments[4] : void 0,
            d = u.Z.getChannel(t);
        if (((i = s.default.getToken()), a.ZP.parse(d, ''), l));
        else {
            if (null == u.Z.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
            {
                let i = n(966390).Z;
                (e.description = r),
                    await i.uploadFiles({
                        channelId: t,
                        uploads: [e],
                        draftType: c.d.ChannelMessage,
                        parsedMessage: o
                    });
            }
        }
    },
    v = async (e) => {
        let { file: t, reaction: n, user: i, altText: a, requireConfirmation: s = !1 } = e,
            u = await l.Z.openPrivateChannel(i.id, !1, !1);
        x(t, u, s, a);
        let c = await m(u);
        if (null != c) {
            let e = (0, o.g1)(n);
            await (0, r.rU)(u, c.id, e);
        }
    },
    f = (e) => {
        let { file: t, reply: n, channel: i, altText: l, requireConfirmation: r = !1 } = e,
            o = a.ZP.parse(i, n);
        return x(t, i.id, r, l, o);
    };
