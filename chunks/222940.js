n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(399606),
    s = n(846519),
    l = n(481060),
    u = n(317632),
    c = n(174767),
    d = n(594174),
    _ = n(689938),
    E = n(695987);
let f = 5000,
    h = 24;
function p(e) {
    let { inboxIconRef: t, recentsPopoutShown: n } = e,
        [r, p] = a.useState(!1),
        m = (0, o.e7)([u.Z], () => u.Z.getLastUnseenInvite()),
        I = (0, o.e7)([d.default], () => (null != m ? d.default.getUser(m.inviter_id) : null));
    return (a.useEffect(() => {
        n && p(!1);
    }, [n]),
    a.useEffect(() => {
        if (null == m) {
            p(!1);
            return;
        }
        (0, c.Br)(m), p(!0);
        let e = new s.V7();
        return (
            e.start(f, () => {
                p(!1);
            }),
            () => {
                e.stop();
            }
        );
    }, [m]),
    r && null != m && null != I)
        ? (0, i.jsxs)(l.TooltipLayer, {
              tooltipClassName: E.tooltip,
              tooltipContentClassName: E.tooltipContent,
              targetElementRef: t,
              position: 'bottom',
              color: l.TooltipColors.BLACK,
              children: [
                  (0, i.jsxs)('div', {
                      className: E.iconContainer,
                      children: [
                          (0, i.jsx)('img', {
                              className: E.inviteImage,
                              src: m.application_asset,
                              alt: 'Game Invite'
                          }),
                          (0, i.jsx)('div', {
                              className: E.offsetAvatarContainer,
                              children: (0, i.jsx)(l.Avatar, {
                                  'aria-label': 'Inviter',
                                  className: E.inviterImage,
                                  src: I.getAvatarURL(null, h),
                                  size: l.AvatarSizes.SIZE_24
                              })
                          })
                      ]
                  }),
                  (0, i.jsxs)('div', {
                      className: E.titleContainer,
                      children: [
                          (0, i.jsx)(l.Text, {
                              className: E.__invalid_title,
                              variant: 'text-xs/semibold',
                              children: _.Z.Messages.GAME_INVITES_INVITE_FROM.format({ username: I.username })
                          }),
                          (0, i.jsx)(l.Text, {
                              className: E.__invalid_subtitle,
                              variant: 'text-xxs/medium',
                              children: m.application_name
                          })
                      ]
                  })
              ]
          })
        : null;
}
