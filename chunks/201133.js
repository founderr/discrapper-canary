n.d(e, {
    B: function () {
        return x;
    },
    a: function () {
        return p;
    }
}),
    n(411104);
var i = n(570140),
    l = n(493683),
    o = n(957730),
    r = n(222677),
    a = n(995774),
    s = n(314897),
    u = n(592125),
    c = n(703558),
    d = n(62817),
    h = n(960048);
let f = (t) => {
        let e = d.Z.getFiles(t)[0];
        return null == d.Z.getMessageForFile(e.id)
            ? (h.Z.addBreadcrumb({ message: 'No message found for upload' }), Promise.reject())
            : new Promise((t, n) => {
                  let l = (o) => {
                      o.file.id === e.id && (i.Z.unsubscribe('UPLOAD_COMPLETE', l), i.Z.unsubscribe('UPLOAD_FAIL', l), 'UPLOAD_COMPLETE' === o.type ? t(o.messageRecord) : n(Error('Upload failed')));
                  };
                  i.Z.subscribe('UPLOAD_COMPLETE', l), i.Z.subscribe('UPLOAD_FAIL', l);
              });
    },
    v = async function (t, e) {
        var i;
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            d = u.Z.getChannel(e);
        if (((i = s.default.getToken()), o.ZP.parse(d, ''), l));
        else {
            if (null == u.Z.getChannel(e)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(e));
            {
                let i = n(966390).Z;
                (t.description = r),
                    await i.uploadFiles({
                        channelId: e,
                        uploads: [t],
                        draftType: c.d.ChannelMessage,
                        parsedMessage: a
                    });
            }
        }
    },
    p = async (t) => {
        let { file: e, reaction: n, user: i, altText: o, requireConfirmation: s = !1 } = t,
            u = await l.Z.openPrivateChannel(i.id, !1, !1);
        v(e, u, s, o);
        let c = await f(u);
        if (null != c) {
            let t = (0, a.g1)(n);
            await (0, r.rU)(u, c.id, t);
        }
    },
    x = (t) => {
        let { file: e, reply: n, channel: i, altText: l, requireConfirmation: r = !1 } = t,
            a = o.ZP.parse(i, n);
        return v(e, i.id, r, l, a);
    };
