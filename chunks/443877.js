n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(47120);
var i = n(442837),
    a = n(715903),
    o = n(71619),
    s = n(41776),
    l = n(665906),
    u = n(271383),
    c = n(607744),
    d = n(496675),
    _ = n(432376),
    E = n(981631);
function f(e) {
    let t = null == e ? void 0 : e.guild_id,
        n = (0, i.e7)([c.Z], () => null == t || c.Z.canChatInGuild(t), [t]),
        r = (0, i.e7)([s.Z], () => null != t && s.Z.isLurking(t), [t]),
        f = (0, i.e7)([u.ZP], () => null != t && u.ZP.isCurrentUserGuest(t), [t]),
        h = (0, i.e7)([d.Z], () => n && d.Z.can(E.Plq.ADD_REACTIONS, e), [n, e]),
        p = (0, a.ux)(t),
        [, m] = (0, o.AB)(t),
        I = (0, l.$R)(e);
    return null == e
        ? {
              disableReactionReads: !0,
              disableReactionCreates: !0,
              disableReactionUpdates: !0,
              isLurking: !1,
              isGuest: !1,
              isPendingMember: !1
          }
        : {
              ...(0, _.Z)({
                  channel: e,
                  canChat: n,
                  renderReactions: !0,
                  canAddNewReactions: h,
                  isLurking: r,
                  isGuest: f,
                  communicationDisabled: m,
                  isActiveChannelOrUnarchivableThread: I,
                  isAutomodQuarantined: p
              }),
              isLurking: r,
              isGuest: f,
              isPendingMember: !1
          };
}
