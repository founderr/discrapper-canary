var i,
    a = r(47120);
var s = r(653041);
var o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(570140),
    d = r(668781),
    f = r(141795),
    _ = r(596956),
    h = r(703558),
    p = r(981631),
    m = r(388032);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = new Map(),
    v = [];
function I(e, n) {
    var r, i;
    return null !== (i = null === (r = T(e)) || void 0 === r ? void 0 : r.get(n)) && void 0 !== i ? i : v;
}
function T(e) {
    var n;
    return null !== (n = E.get(e)) && void 0 !== n ? n : new Map();
}
function b(e, n, r) {
    let i = T(e);
    i.set(n, r), E.set(e, i);
}
function y(e) {
    let { channelId: n } = e,
        r = [...I(n, h.d.ChannelMessage)];
    r.shift(), b(n, h.d.ChannelMessage, r);
}
let S = (e) => {
    let { files: n, channelId: r, showLargeMessageDialog: i, draftType: a } = e,
        s = [...I(r, a)];
    if (s.length + n.length > p.dN1 && a !== h.d.SlashCommand && a !== h.d.ApplicationLauncherCommand) {
        d.Z.show({
            title: m.intl.string(m.t.wOr6hI),
            body: m.intl.formatToPlainString(m.t['qqyp/f'], { limit: p.dN1 })
        });
        return;
    }
    l().forEach(n, (e) => {
        let n = new f.n(e, r, i, s.length);
        n.upload(), s.push(n);
    }),
        b(r, a, s);
};
function A(e) {
    let { channelId: n, id: r, draftType: i } = e,
        a = [...I(n, i)],
        s = a.findIndex((e) =>
            (0, _.T)(
                {
                    uri: r,
                    filename: r
                },
                e
            )
        );
    s > -1 && (a.splice(s, 1)[0].cancel(), b(n, i, a));
}
function N(e) {
    let { channelId: n, attachmentIds: r, draftType: i } = e,
        a = [...I(n, i)];
    r.forEach((e) => {
        let n = a.findIndex((n) => e === n.id);
        n > -1 && a.splice(n, 1)[0].cancel();
    }),
        b(n, i, a);
}
function C(e) {
    let { channelId: n, id: r, filename: i, description: a, spoiler: s, thumbnail: o, draftType: l } = e,
        u = [...I(n, l)].map((e) => (e.id === r && (void 0 !== i && (e.filename = i), void 0 !== s && (e.spoiler = s), void 0 !== a && (e.description = a), void 0 !== o && (e.isThumbnail = o)), e));
    b(n, l, u);
}
function R(e) {
    let { channelId: n, id: r, file: i, draftType: a } = e,
        s = [...I(n, a)].filter((e) => e.id !== r),
        o = new f.n(i, n);
    o.upload(), s.push(o), b(n, a, s);
}
function O(e) {
    let { channelId: n, uploads: r, draftType: i } = e;
    b(n, i, r);
}
function D(e) {
    let { channelId: n, draftType: r } = e;
    b(n, r, []);
}
function L(e) {
    let { baseChannelId: n } = e;
    b(n, h.d.FirstThreadMessage, []);
}
class x extends (i = u.ZP.Store) {
    getFirstUpload(e, n) {
        let r = I(e, n);
        return r.length > 0 ? r[0] : null;
    }
    hasAdditionalUploads(e, n) {
        var r;
        return (null !== (r = I(e, n).length) && void 0 !== r ? r : 0) > 1;
    }
    getUploads(e, n) {
        return I(e, n);
    }
    getUploadCount(e, n) {
        var r;
        return null !== (r = I(e, n).length) && void 0 !== r ? r : 0;
    }
    getUpload(e, n, r) {
        return I(e, r).find((e) => e.id === n);
    }
    findUpload(e, n, r) {
        return I(e, n).find(r);
    }
}
g(x, 'displayName', 'UploadAttachmentStore'),
    (n.Z = new x(c.Z, {
        UPLOAD_ATTACHMENT_POP_FILE: y,
        UPLOAD_ATTACHMENT_ADD_FILES: S,
        UPLOAD_ATTACHMENT_UPDATE_FILE: C,
        UPLOAD_ATTACHMENT_REMOVE_FILE: A,
        UPLOAD_ATTACHMENT_REMOVE_FILES: N,
        UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: D,
        UPLOAD_ATTACHMENT_SET_UPLOADS: O,
        UPLOAD_ATTACHMENT_SET_FILE: R,
        SIDEBAR_CLOSE: L
    }));
