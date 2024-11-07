t.d(n, {
    Xd: function () {
        return f;
    },
    mv: function () {
        return g;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(692547),
    r = t(481060),
    o = t(239091),
    s = t(584511),
    c = t(118012),
    d = t(51144),
    u = t(88751),
    m = t(930180),
    h = t(388032),
    x = t(72235);
let g = (e) => {
        let { channelId: n } = e,
            t = (0, m._d)(n);
        return 0 === t
            ? null
            : (0, l.jsxs)('div', {
                  className: x.blockedNotice,
                  children: [
                      (0, l.jsx)(r.DenyIcon, {
                          size: 'lg',
                          className: x.__invalid_blockedIcon,
                          color: a.Z.unsafe_rawColors.RED_400.css
                      }),
                      (0, l.jsx)(r.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: h.intl.format(h.t['6Tcdt7'], { number: t })
                      }),
                      (0, l.jsx)(r.Clickable, {
                          className: x.blockedButton,
                          onClick: (e) => {
                              (0, o.vq)(
                                  e,
                                  (e) =>
                                      (0, l.jsx)(v, {
                                          ...e,
                                          channelId: n
                                      }),
                                  {
                                      position: 'left',
                                      align: 'bottom'
                                  }
                              );
                          },
                          children: h.intl.string(h.t.rUEjBQ)
                      })
                  ]
              });
    },
    f = (e) => {
        let { user: n, showStatus: t, speaker: a, channelId: o } = e,
            m = (0, i.e7)([u.ZP], () => u.ZP.isModerator(n.id, o)),
            g = null;
        return (
            t && (g = a ? h.intl.string(h.t.LqMmGx) : m ? h.intl.string(h.t.GMZqSk) : h.intl.string(h.t.suRAp6)),
            (0, l.jsxs)('div', {
                className: x.user,
                children: [
                    (0, l.jsx)(
                        s.Z,
                        {
                            src: n.getAvatarURL(null, 32),
                            size: r.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: a
                                ? () =>
                                      (0, l.jsx)(r.MicrophoneIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: x.icon
                                      })
                                : null
                        },
                        n.id
                    ),
                    (0, l.jsxs)('div', {
                        className: x.userInfo,
                        children: [
                            (0, l.jsxs)('div', {
                                className: x.username,
                                children: [
                                    (0, l.jsx)(c.Z, {
                                        size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                                        children: d.ZP.getName(n)
                                    }),
                                    (0, l.jsx)(c.Z, {
                                        size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                                        color: c.Z.Colors.HEADER_SECONDARY,
                                        children: '#'.concat(n.discriminator)
                                    })
                                ]
                            }),
                            (0, l.jsxs)('div', {
                                className: x.username,
                                children: [
                                    (0, l.jsx)(r.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-danger',
                                        children: h.intl.string(h.t['4bDptL'])
                                    }),
                                    (0, l.jsxs)(r.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: [' ', '| ', g]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    },
    v = (e) => {
        let { channelId: n } = e,
            t = (0, m.z)(n);
        return (0, l.jsx)(r.Scroller, {
            className: x.container,
            children: t.map((e) => {
                let { user: t } = e;
                return (0, l.jsx)(
                    f,
                    {
                        user: t,
                        channelId: n
                    },
                    t.id
                );
            })
        });
    };
