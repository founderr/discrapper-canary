n.d(t, {
    CN: function () {
        return l;
    },
    N7: function () {
        return f;
    },
    OR: function () {
        return a;
    },
    Qy: function () {
        return o;
    },
    ZW: function () {
        return E;
    },
    fj: function () {
        return u;
    },
    xG: function () {
        return c;
    }
}),
    n(653041),
    n(47120);
var r = n(774863);
function i(e) {
    return (null != e.attachments && e.attachments.length > 0) || (null != e.embeds && e.embeds.length > 0);
}
function a(e) {
    if (null == e) return !1;
    let t = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    return i(e) || (null != t && (null == t ? void 0 : t.some((e) => i(e.message))));
}
function s(e) {
    return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion ? e.contentScanVersion : null;
}
function o() {
    var e;
    return null !== (e = r.Z.validContentScanVersion) && void 0 !== e ? e : 1;
}
function l(e, t) {
    return null == e.content_scan_version || e.content_scan_version < (null != t ? t : 1);
}
function u(e, t) {
    var n, r, i, a, o, l, u;
    if (((null === (n = e.video) || void 0 === n ? void 0 : n.width) === 0 && (null === (r = e.video) || void 0 === r ? void 0 : r.height) === 0) || ((null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (a = e.thumbnail) || void 0 === a ? void 0 : a.height) === 0) || ((null === (o = e.image) || void 0 === o ? void 0 : o.width) === 0 && (null === (l = e.image) || void 0 === l ? void 0 : l.height) === 0) || ('images' in e && (null === (u = e.images) || void 0 === u ? void 0 : u.some((e) => 0 === e.width && 0 === e.height)))) return !1;
    let c = s(e);
    return null == c || c < (null != t ? t : 1);
}
function c(e) {
    var t, n, r, i;
    let a = null !== (t = e.attachments) && void 0 !== t ? t : [],
        s = null !== (n = e.embeds) && void 0 !== n ? n : [],
        o = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    if (null != o && o.length > 0)
        for (let e of o) {
            let t = null !== (r = e.message.attachments) && void 0 !== r ? r : [],
                n = null !== (i = e.message.embeds) && void 0 !== i ? i : [];
            a.push(...t), s.push(...n);
        }
    return a.some(l) || s.some(u);
}
function d(e) {
    return null == e.content_scan_version;
}
function _(e) {
    var t, n, r, i, a, o, l;
    let u = s(e);
    return !(((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0) || ((null === (r = e.thumbnail) || void 0 === r ? void 0 : r.width) === 0 && (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.height) === 0) || ((null === (a = e.image) || void 0 === a ? void 0 : a.width) === 0 && (null === (o = e.image) || void 0 === o ? void 0 : o.height) === 0) || ('images' in e && (null === (l = e.images) || void 0 === l ? void 0 : l.some((e) => 0 === e.width && 0 === e.height)))) && null == u;
}
function E(e) {
    var t, n, r, i, a, s, o, l;
    let u = null !== (a = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0,
        c = null !== (s = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== s ? s : 0;
    if (0 === u && 0 === c)
        return {
            attachmentIds: [],
            embedIds: []
        };
    let E = null !== (o = null == e ? void 0 : null === (r = e.attachments) || void 0 === r ? void 0 : r.filter(d)) && void 0 !== o ? o : [],
        f = null !== (l = null == e ? void 0 : null === (i = e.embeds) || void 0 === i ? void 0 : i.filter(_)) && void 0 !== l ? l : [];
    return {
        attachmentIds: E.map((e) => e.id).filter(Boolean),
        embedIds: f.map((e, t) => 'embed_'.concat(t)).filter(Boolean)
    };
}
function f(e) {
    let { attachmentIds: t, embedIds: n } = E(e);
    return t.length > 0 || n.length > 0;
}
