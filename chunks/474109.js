n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(256916),
    s = n(664915),
    o = n(888369),
    c = n(358652),
    u = n(771845),
    d = n(613060),
    h = n(451478),
    p = n(251625),
    f = n(981631),
    _ = n(689938);
let m = 'app-download-item',
    g = 'add-server-item';
function C() {
    return !1;
}
function I(e) {
    var t;
    let n = o.default.getMutableGuildStates();
    return (e === f.x8Z.SERVER_DISCOVERY_BADGE && !d.Z.hasViewed(f.x8Z.SERVER_DISCOVERY_BADGE)) || (e !== m && e !== g && (null === (t = n[null != e ? e : 'null']) || void 0 === t ? void 0 : t.mentionCount) > 0);
}
let E = (0, p.oH)((e, t, n) => ['null', ...t, ...e, g, f.x8Z.E3_SERVER_DISCOVERY_BADGE, m]);
t.Z = l.forwardRef(function (e, t) {
    let n = (0, r.Wu)([u.ZP, c.Z, o.default], () => E(u.ZP.getGuildFolders(), c.Z.getUnreadPrivateChannelIds(), o.default.getStoreChangeSentinel())),
        l = (0, r.e7)([h.Z], () => h.Z.isFocused()),
        d = (0, r.e7)([s.Z], () => s.Z.getExpandedFolders());
    return (0, i.jsx)(a.Z, {
        ...e,
        ref: t,
        items: n,
        isUnread: C,
        textUnread: _.Z.Messages.NEW,
        textMention: _.Z.Messages.NEW,
        isMentioned: I,
        animate: l,
        expandedFolders: d
    });
});
