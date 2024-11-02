n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(256916),
    o = n(664915),
    s = n(888369),
    c = n(358652),
    u = n(771845),
    d = n(613060),
    h = n(451478),
    p = n(251625),
    f = n(981631),
    m = n(388032);
let g = 'app-download-item',
    C = 'add-server-item';
function _() {
    return !1;
}
function x(e) {
    var t;
    let n = s.default.getMutableGuildStates();
    return (e === f.x8Z.SERVER_DISCOVERY_BADGE && !d.Z.hasViewed(f.x8Z.SERVER_DISCOVERY_BADGE)) || (e !== g && e !== C && (null === (t = n[null != e ? e : 'null']) || void 0 === t ? void 0 : t.mentionCount) > 0);
}
let v = (0, p.oH)((e, t, n) => ['null', ...t, ...e, C, f.x8Z.E3_SERVER_DISCOVERY_BADGE, g]);
t.Z = l.forwardRef(function (e, t) {
    let n = (0, r.Wu)([u.ZP, c.Z, s.default], () => v(u.ZP.getGuildFolders(), c.Z.getUnreadPrivateChannelIds(), s.default.getStoreChangeSentinel())),
        l = (0, r.e7)([h.Z], () => h.Z.isFocused()),
        d = (0, r.e7)([o.Z], () => o.Z.getExpandedFolders());
    return (0, i.jsx)(a.Z, {
        ...e,
        ref: t,
        items: n,
        isUnread: _,
        textUnread: m.intl.string(m.t.y2b7CA),
        textMention: m.intl.string(m.t.y2b7CA),
        isMentioned: x,
        animate: l,
        expandedFolders: d
    });
});
