n.d(s, {
    Xd: function () {
        return h;
    },
    mv: function () {
        return x;
    }
});
var c = n(735250);
n(470079);
var t = n(442837),
    o = n(692547),
    a = n(481060),
    r = n(239091),
    i = n(584511),
    l = n(112831),
    d = n(51144),
    u = n(88751),
    _ = n(930180),
    I = n(689938),
    m = n(578814);
let x = (e) => {
        let { channelId: s } = e,
            n = (0, _._d)(s);
        return 0 === n
            ? null
            : (0, c.jsxs)('div', {
                  className: m.blockedNotice,
                  children: [
                      (0, c.jsx)(a.DenyIcon, {
                          size: 'lg',
                          className: m.__invalid_blockedIcon,
                          color: o.Z.unsafe_rawColors.RED_400.css
                      }),
                      (0, c.jsx)(a.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: I.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({ number: n })
                      }),
                      (0, c.jsx)(a.Clickable, {
                          className: m.blockedButton,
                          onClick: (e) => {
                              (0, r.vq)(
                                  e,
                                  (e) =>
                                      (0, c.jsx)(E, {
                                          ...e,
                                          channelId: s
                                      }),
                                  {
                                      position: 'left',
                                      align: 'bottom'
                                  }
                              );
                          },
                          children: I.Z.Messages.VIEW_ALL
                      })
                  ]
              });
    },
    h = (e) => {
        let { user: s, showStatus: n, speaker: o, channelId: r } = e,
            _ = (0, t.e7)([u.ZP], () => u.ZP.isModerator(s.id, r)),
            x = null;
        return (
            n && (x = o ? I.Z.Messages.STAGE_SPEAKER : _ ? I.Z.Messages.STAGE_MODERATOR_TOOLTIP : I.Z.Messages.STAGE_AUDIENCE),
            (0, c.jsxs)('div', {
                className: m.user,
                children: [
                    (0, c.jsx)(
                        i.Z,
                        {
                            src: s.getAvatarURL(null, 32),
                            size: a.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: o
                                ? () =>
                                      (0, c.jsx)(a.MicrophoneIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: m.icon
                                      })
                                : null
                        },
                        s.id
                    ),
                    (0, c.jsxs)('div', {
                        className: m.userInfo,
                        children: [
                            (0, c.jsxs)('div', {
                                className: m.username,
                                children: [
                                    (0, c.jsx)(l.Z, {
                                        size: n ? l.Z.Sizes.SIZE_16 : l.Z.Sizes.SIZE_14,
                                        children: d.ZP.getName(s)
                                    }),
                                    (0, c.jsx)(l.Z, {
                                        size: n ? l.Z.Sizes.SIZE_16 : l.Z.Sizes.SIZE_14,
                                        color: l.Z.Colors.HEADER_SECONDARY,
                                        children: '#'.concat(s.discriminator)
                                    })
                                ]
                            }),
                            (0, c.jsxs)('div', {
                                className: m.username,
                                children: [
                                    (0, c.jsx)(a.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-danger',
                                        children: I.Z.Messages.BLOCKED
                                    }),
                                    (0, c.jsxs)(a.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: [' ', '| ', x]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    },
    E = (e) => {
        let { channelId: s } = e,
            n = (0, _.z)(s);
        return (0, c.jsx)(a.Scroller, {
            className: m.container,
            children: n.map((e) => {
                let { user: n } = e;
                return (0, c.jsx)(
                    h,
                    {
                        user: n,
                        channelId: s
                    },
                    n.id
                );
            })
        });
    };
