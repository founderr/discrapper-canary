n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(668781),
    f = n(141795),
    _ = n(596956),
    p = n(703558),
    h = n(981631),
    m = n(388032);
let g = new Map(),
    E = [];
function v(e, t) {
    var n, r;
    return null !== (r = null === (n = b(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : E;
}
function b(e) {
    var t;
    return null !== (t = g.get(e)) && void 0 !== t ? t : new Map();
}
function I(e, t, n) {
    let r = b(e);
    r.set(t, n), g.set(e, r);
}
class S extends (r = u.ZP.Store) {
    getFirstUpload(e, t) {
        let n = v(e, t);
        return n.length > 0 ? n[0] : null;
    }
    hasAdditionalUploads(e, t) {
        var n;
        return (null !== (n = v(e, t).length) && void 0 !== n ? n : 0) > 1;
    }
    getUploads(e, t) {
        return v(e, t);
    }
    getUploadCount(e, t) {
        var n;
        return null !== (n = v(e, t).length) && void 0 !== n ? n : 0;
    }
    getUpload(e, t, n) {
        return v(e, n).find((e) => e.id === t);
    }
    findUpload(e, t, n) {
        return v(e, t).find(n);
    }
}
(s = 'UploadAttachmentStore'),
    (a = 'displayName') in (i = S)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new S(c.Z, {
        UPLOAD_ATTACHMENT_POP_FILE: function (e) {
            let { channelId: t } = e,
                n = [...v(t, p.d.ChannelMessage)];
            n.shift(), I(t, p.d.ChannelMessage, n);
        },
        UPLOAD_ATTACHMENT_ADD_FILES: (e) => {
            let { files: t, channelId: n, showLargeMessageDialog: r, draftType: i } = e,
                a = [...v(n, i)];
            if (a.length + t.length > h.dN1 && i !== p.d.SlashCommand && i !== p.d.ApplicationLauncherCommand) {
                d.Z.show({
                    title: m.intl.string(m.t.wOr6hI),
                    body: m.intl.formatToPlainString(m.t['qqyp/f'], { limit: h.dN1 })
                });
                return;
            }
            l().forEach(t, (e) => {
                let t = new f.n(e, n, r, a.length);
                t.upload(), a.push(t);
            }),
                I(n, i, a);
        },
        UPLOAD_ATTACHMENT_UPDATE_FILE: function (e) {
            let { channelId: t, id: n, filename: r, description: i, spoiler: a, thumbnail: s, draftType: o } = e,
                l = [...v(t, o)].map((e) => (e.id === n && (void 0 !== r && (e.filename = r), void 0 !== a && (e.spoiler = a), void 0 !== i && (e.description = i), void 0 !== s && (e.isThumbnail = s)), e));
            I(t, o, l);
        },
        UPLOAD_ATTACHMENT_REMOVE_FILE: function (e) {
            let { channelId: t, id: n, draftType: r } = e,
                i = [...v(t, r)],
                a = i.findIndex((e) =>
                    (0, _.T)(
                        {
                            uri: n,
                            filename: n
                        },
                        e
                    )
                );
            a > -1 && (i.splice(a, 1)[0].cancel(), I(t, r, i));
        },
        UPLOAD_ATTACHMENT_REMOVE_FILES: function (e) {
            let { channelId: t, attachmentIds: n, draftType: r } = e,
                i = [...v(t, r)];
            n.forEach((e) => {
                let t = i.findIndex((t) => e === t.id);
                t > -1 && i.splice(t, 1)[0].cancel();
            }),
                I(t, r, i);
        },
        UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function (e) {
            let { channelId: t, draftType: n } = e;
            I(t, n, []);
        },
        UPLOAD_ATTACHMENT_SET_UPLOADS: function (e) {
            let { channelId: t, uploads: n, draftType: r } = e;
            I(t, r, n);
        },
        UPLOAD_ATTACHMENT_SET_FILE: function (e) {
            let { channelId: t, id: n, file: r, draftType: i } = e,
                a = [...v(t, i)].filter((e) => e.id !== n),
                s = new f.n(r, t);
            s.upload(), a.push(s), I(t, i, a);
        },
        SIDEBAR_CLOSE: function (e) {
            let { baseChannelId: t } = e;
            I(t, p.d.FirstThreadMessage, []);
        }
    }));
