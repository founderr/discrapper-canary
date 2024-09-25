var r,
    i = n(47120);
var a = n(653041);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(570140),
    c = n(668781),
    d = n(141795),
    _ = n(596956),
    E = n(703558),
    f = n(981631),
    h = n(689938);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = new Map(),
    I = [];
function T(e, t) {
    var n, r;
    return null !== (r = null === (n = g(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : I;
}
function g(e) {
    var t;
    return null !== (t = m.get(e)) && void 0 !== t ? t : new Map();
}
function S(e, t, n) {
    let r = g(e);
    r.set(t, n), m.set(e, r);
}
function A(e) {
    let { channelId: t } = e,
        n = [...T(t, E.d.ChannelMessage)];
    n.shift(), S(t, E.d.ChannelMessage, n);
}
let v = (e) => {
    let { files: t, channelId: n, showLargeMessageDialog: r, draftType: i } = e,
        a = [...T(n, i)];
    if (a.length + t.length > f.dN1 && i !== E.d.SlashCommand && i !== E.d.ApplicationLauncherCommand) {
        c.Z.show({
            title: h.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            body: h.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({ limit: f.dN1 })
        });
        return;
    }
    s().forEach(t, (e) => {
        let t = new d.n(e, n, r, a.length);
        t.upload(), a.push(t);
    }),
        S(n, i, a);
};
function N(e) {
    let { channelId: t, id: n, draftType: r } = e,
        i = [...T(t, r)],
        a = i.findIndex((e) =>
            (0, _.T)(
                {
                    uri: n,
                    filename: n
                },
                e
            )
        );
    a > -1 && (i.splice(a, 1)[0].cancel(), S(t, r, i));
}
function O(e) {
    let { channelId: t, attachmentIds: n, draftType: r } = e,
        i = [...T(t, r)];
    n.forEach((e) => {
        let t = i.findIndex((t) => e === t.id);
        t > -1 && i.splice(t, 1)[0].cancel();
    }),
        S(t, r, i);
}
function R(e) {
    let { channelId: t, id: n, filename: r, description: i, spoiler: a, thumbnail: o, draftType: s } = e,
        l = [...T(t, s)].map((e) => (e.id === n && (void 0 !== r && (e.filename = r), void 0 !== a && (e.spoiler = a), void 0 !== i && (e.description = i), void 0 !== o && (e.isThumbnail = o)), e));
    S(t, s, l);
}
function C(e) {
    let { channelId: t, id: n, file: r, draftType: i } = e,
        a = [...T(t, i)].filter((e) => e.id !== n),
        o = new d.n(r, t);
    o.upload(), a.push(o), S(t, i, a);
}
function y(e) {
    let { channelId: t, uploads: n, draftType: r } = e;
    S(t, r, n);
}
function b(e) {
    let { channelId: t, draftType: n } = e;
    S(t, n, []);
}
function L(e) {
    let { baseChannelId: t } = e;
    S(t, E.d.FirstThreadMessage, []);
}
class D extends (r = l.ZP.Store) {
    getFirstUpload(e, t) {
        let n = T(e, t);
        return n.length > 0 ? n[0] : null;
    }
    hasAdditionalUploads(e, t) {
        var n;
        return (null !== (n = T(e, t).length) && void 0 !== n ? n : 0) > 1;
    }
    getUploads(e, t) {
        return T(e, t);
    }
    getUploadCount(e, t) {
        var n;
        return null !== (n = T(e, t).length) && void 0 !== n ? n : 0;
    }
    getUpload(e, t, n) {
        return T(e, n).find((e) => e.id === t);
    }
    findUpload(e, t, n) {
        return T(e, t).find(n);
    }
}
p(D, 'displayName', 'UploadAttachmentStore'),
    (t.Z = new D(u.Z, {
        UPLOAD_ATTACHMENT_POP_FILE: A,
        UPLOAD_ATTACHMENT_ADD_FILES: v,
        UPLOAD_ATTACHMENT_UPDATE_FILE: R,
        UPLOAD_ATTACHMENT_REMOVE_FILE: N,
        UPLOAD_ATTACHMENT_REMOVE_FILES: O,
        UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: b,
        UPLOAD_ATTACHMENT_SET_UPLOADS: y,
        UPLOAD_ATTACHMENT_SET_FILE: C,
        SIDEBAR_CLOSE: L
    }));
