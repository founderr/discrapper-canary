n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(256916),
    a = n(664915),
    s = n(888369),
    c = n(358652),
    u = n(771845),
    d = n(613060),
    h = n(451478),
    p = n(251625),
    m = n(981631),
    f = n(388032);
let g = 'app-download-item',
    C = 'add-server-item';
function v() {
    return !1;
}
function _(e) {
    var t;
    let n = s.default.getMutableGuildStates();
    return (e === m.x8Z.SERVER_DISCOVERY_BADGE && !d.Z.hasViewed(m.x8Z.SERVER_DISCOVERY_BADGE)) || (e !== g && e !== C && (null === (t = n[null != e ? e : 'null']) || void 0 === t ? void 0 : t.highImportanceMentionCount) > 0);
}
let x = (0, p.oH)((e, t, n) => ['null', ...t, ...e, C, m.x8Z.E3_SERVER_DISCOVERY_BADGE, g]);
t.Z = l.forwardRef(function (e, t) {
    let n = (0, r.Wu)([u.ZP, c.Z, s.default], () => x(u.ZP.getGuildFolders(), c.Z.getUnreadPrivateChannelIds(), s.default.getStoreChangeSentinel())),
        l = (0, r.e7)([h.Z], () => h.Z.isFocused()),
        d = (0, r.e7)([a.Z], () => a.Z.getExpandedFolders());
    return (0, i.jsx)(o.Z, {
        ...e,
        ref: t,
        items: n,
        isUnread: v,
        textUnread: f.intl.string(f.t.y2b7CA),
        textMention: f.intl.string(f.t.y2b7CA),
        isMentioned: _,
        animate: l,
        expandedFolders: d
    });
});
