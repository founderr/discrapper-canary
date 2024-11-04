n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    s = n(665149),
    a = n(171368),
    o = n(650774),
    c = n(430824),
    u = n(496675),
    d = n(709054),
    h = n(826581),
    m = n(246364),
    p = n(360328),
    f = n(981631),
    g = n(388032),
    C = n(905071);
function x(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: x = !1 } = e,
        v = d.default.cast(t),
        {
            joinRequest: _,
            isModmin: I,
            guildId: E,
            maxMembers: b
        } = (0, l.cj)([h.Z, c.Z, u.Z], () => {
            let e = h.Z.getRequest(v),
                t = c.Z.getGuild(null == e ? void 0 : e.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && u.Z.can(f.Plq.KICK_MEMBERS, t),
                guildId: null == t ? void 0 : t.id,
                maxMembers: null == t ? void 0 : t.maxMembers
            };
        }),
        S = (0, l.e7)([o.Z], () => (null != E ? o.Z.getMemberCount(E) : 0)),
        Z = null != b && (null != S ? S : 0) >= b,
        { approveRequest: T, rejectRequest: N, submitting: j } = (0, p.s)(null == _ ? void 0 : _.guildId, null == _ ? void 0 : _.userId, null == _ ? void 0 : _.joinRequestId);
    return null != _ && _.applicationStatus === m.wB.SUBMITTED && I
        ? (0, i.jsxs)('div', {
              className: C.buttons,
              children: [
                  (0, i.jsx)(r.Tooltip, {
                      text: g.intl.string(g.t.RbIXi4),
                      shouldShow: Z,
                      children: (e) =>
                          (0, i.jsx)(r.Button, {
                              ...e,
                              color: r.Button.Colors.GREEN,
                              submitting: j,
                              onClick: T,
                              size: r.ButtonSizes.SMALL,
                              disabled: Z,
                              children: g.intl.string(g.t.BzjDQE)
                          })
                  }),
                  (0, i.jsx)(r.Button, {
                      color: r.Button.Colors.RED,
                      onClick: N,
                      size: r.ButtonSizes.SMALL,
                      disabled: j || _.applicationStatus !== m.wB.SUBMITTED,
                      children: g.intl.string(g.t.hDtbs7)
                  }),
                  n &&
                      (0, i.jsx)(r.Button, {
                          color: r.Button.Colors.TRANSPARENT,
                          onClick: () => {
                              (0, a.openUserProfileModal)({
                                  userId: _.userId,
                                  guildId: _.guildId,
                                  analyticsLocation: {
                                      section: f.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                      object: f.qAy.JOIN_REQUEST
                                  }
                              });
                          },
                          size: r.ButtonSizes.SMALL,
                          children: g.intl.string(g.t.iXAna2)
                      }),
                  x && (0, i.jsx)(s.ZP.Divider, {})
              ]
          })
        : null;
}
