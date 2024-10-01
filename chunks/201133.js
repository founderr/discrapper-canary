n.d(t, {
    B: function () {
        return v;
    },
    a: function () {
        return x;
    }
}),
    n(411104);
var a = n(570140),
    l = n(493683),
    i = n(957730),
    r = n(222677),
    s = n(995774),
    o = n(314897),
    u = n(592125),
    c = n(703558),
    d = n(62817);
let h = (e) => {
        let t = d.Z.getFiles(e)[0];
        return null == d.Z.getMessageForFile(t.id)
            ? Promise.reject()
            : new Promise((e, n) => {
                  let l = (i) => {
                      i.file.id === t.id && (a.Z.unsubscribe('UPLOAD_COMPLETE', l), a.Z.unsubscribe('UPLOAD_FAIL', l), 'UPLOAD_COMPLETE' === i.type ? e(i.messageRecord) : n(Error('Upload failed')));
                  };
                  a.Z.subscribe('UPLOAD_COMPLETE', l), a.Z.subscribe('UPLOAD_FAIL', l);
              });
    },
    m = async function (e, t) {
        var a;
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0,
            d = u.Z.getChannel(t);
        if (((a = o.default.getToken()), i.ZP.parse(d, ''), l));
        else {
            if (null == u.Z.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
            {
                let a = n(966390).Z;
                (e.description = r),
                    await a.uploadFiles({
                        channelId: t,
                        uploads: [e],
                        draftType: c.d.ChannelMessage,
                        parsedMessage: s
                    });
            }
        }
    },
    x = async (e) => {
        let { file: t, reaction: n, user: a, altText: i, requireConfirmation: o = !1 } = e,
            u = await l.Z.openPrivateChannel(a.id, !1, !1);
        m(t, u, o, i);
        let c = await h(u);
        if (null != c) {
            let e = (0, s.g1)(n);
            await (0, r.rU)(u, c.id, e);
        }
    },
    v = (e) => {
        let { file: t, reply: n, channel: a, altText: l, requireConfirmation: r = !1 } = e,
            s = i.ZP.parse(a, n);
        return m(t, a.id, r, l, s);
    };
