n.d(t, {
    CN: function () {
        return u;
    },
    N7: function () {
        return h;
    },
    OR: function () {
        return s;
    },
    ZW: function () {
        return f;
    },
    fj: function () {
        return c;
    },
    xG: function () {
        return d;
    }
});
var r = n(653041);
var i = n(47120);
n(774863);
let a = 1;
function o(e) {
    return (null != e.attachments && e.attachments.length > 0) || (null != e.embeds && e.embeds.length > 0);
}
function s(e) {
    if (null == e) return !1;
    let t = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    return o(e) || (null != t && (null == t ? void 0 : t.some((e) => o(e.message))));
}
function l(e) {
    return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion ? e.contentScanVersion : null;
}
function u(e, t) {
    return null == e.content_scan_version || e.content_scan_version < (null != t ? t : a);
}
function c(e, t) {
    var n, r, i, o, s, u, c;
    if (((null === (n = e.video) || void 0 === n ? void 0 : n.width) === 0 && (null === (r = e.video) || void 0 === r ? void 0 : r.height) === 0) || ((null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (o = e.thumbnail) || void 0 === o ? void 0 : o.height) === 0) || ((null === (s = e.image) || void 0 === s ? void 0 : s.width) === 0 && (null === (u = e.image) || void 0 === u ? void 0 : u.height) === 0) || ('images' in e && (null === (c = e.images) || void 0 === c ? void 0 : c.some((e) => 0 === e.width && 0 === e.height)))) return !1;
    let d = l(e);
    return null == d || d < (null != t ? t : a);
}
function d(e) {
    var t, n, r, i;
    let a = null !== (t = e.attachments) && void 0 !== t ? t : [],
        o = null !== (n = e.embeds) && void 0 !== n ? n : [],
        s = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    if (null != s && s.length > 0)
        for (let e of s) {
            let t = null !== (r = e.message.attachments) && void 0 !== r ? r : [],
                n = null !== (i = e.message.embeds) && void 0 !== i ? i : [];
            a.push(...t), o.push(...n);
        }
    return a.some(u) || o.some(c);
}
function _(e) {
    return null == e.content_scan_version;
}
function E(e) {
    var t, n, r, i, a, o, s;
    let u = l(e);
    return !(((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0) || ((null === (r = e.thumbnail) || void 0 === r ? void 0 : r.width) === 0 && (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.height) === 0) || ((null === (a = e.image) || void 0 === a ? void 0 : a.width) === 0 && (null === (o = e.image) || void 0 === o ? void 0 : o.height) === 0) || ('images' in e && (null === (s = e.images) || void 0 === s ? void 0 : s.some((e) => 0 === e.width && 0 === e.height)))) && null == u;
}
function f(e) {
    var t, n, r, i, a, o, s, l;
    let u = null !== (a = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0,
        c = null !== (o = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0;
    if (0 === u && 0 === c)
        return {
            attachmentIds: [],
            embedIds: []
        };
    let d = null !== (s = null == e ? void 0 : null === (r = e.attachments) || void 0 === r ? void 0 : r.filter(_)) && void 0 !== s ? s : [],
        f = null !== (l = null == e ? void 0 : null === (i = e.embeds) || void 0 === i ? void 0 : i.filter(E)) && void 0 !== l ? l : [];
    return {
        attachmentIds: d.map((e) => e.id).filter(Boolean),
        embedIds: f.map((e, t) => 'embed_'.concat(t)).filter(Boolean)
    };
}
function h(e) {
    let { attachmentIds: t, embedIds: n } = f(e);
    return t.length > 0 || n.length > 0;
}
