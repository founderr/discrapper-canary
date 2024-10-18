n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    l = n(665149),
    r = n(171368),
    o = n(650774),
    c = n(430824),
    u = n(496675),
    d = n(709054),
    h = n(826581),
    p = n(246364),
    m = n(360328),
    _ = n(981631),
    f = n(689938),
    E = n(905071);
function g(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: g = !1 } = e,
        C = d.default.cast(t),
        {
            joinRequest: I,
            isModmin: T,
            guildId: x,
            maxMembers: v
        } = (0, s.cj)([h.Z, c.Z, u.Z], () => {
            let e = h.Z.getRequest(C),
                t = c.Z.getGuild(null == e ? void 0 : e.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && u.Z.can(_.Plq.KICK_MEMBERS, t),
                guildId: null == t ? void 0 : t.id,
                maxMembers: null == t ? void 0 : t.maxMembers
            };
        }),
        S = (0, s.e7)([o.Z], () => (null != x ? o.Z.getMemberCount(x) : 0)),
        N = null != v && (null != S ? S : 0) >= v,
        { approveRequest: A, rejectRequest: Z, submitting: M } = (0, m.s)(null == I ? void 0 : I.guildId, null == I ? void 0 : I.userId, null == I ? void 0 : I.joinRequestId);
    return null != I && I.applicationStatus === p.wB.SUBMITTED && T
        ? (0, i.jsxs)('div', {
              className: E.buttons,
              children: [
                  (0, i.jsx)(a.Tooltip, {
                      text: f.Z.Messages.CLAN_APPLICATION_MAX_MEMBER_LIMIT_TOOLTIP,
                      shouldShow: N,
                      children: (e) =>
                          (0, i.jsx)(a.Button, {
                              ...e,
                              color: a.Button.Colors.GREEN,
                              submitting: M,
                              onClick: A,
                              size: a.ButtonSizes.SMALL,
                              disabled: N,
                              children: f.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
                          })
                  }),
                  (0, i.jsx)(a.Button, {
                      color: a.Button.Colors.RED,
                      onClick: Z,
                      size: a.ButtonSizes.SMALL,
                      disabled: M || I.applicationStatus !== p.wB.SUBMITTED,
                      children: f.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
                  }),
                  n &&
                      (0, i.jsx)(a.Button, {
                          color: a.Button.Colors.TRANSPARENT,
                          onClick: () => {
                              (0, r.openUserProfileModal)({
                                  userId: I.userId,
                                  guildId: I.guildId,
                                  analyticsLocation: {
                                      section: _.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                      object: _.qAy.JOIN_REQUEST
                                  }
                              });
                          },
                          size: a.ButtonSizes.SMALL,
                          children: f.Z.Messages.VIEW_PROFILE
                      }),
                  g && (0, i.jsx)(l.ZP.Divider, {})
              ]
          })
        : null;
}
