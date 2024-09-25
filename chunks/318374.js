n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(481060),
    d = n(239091),
    _ = n(751688),
    E = n(51144),
    f = n(711258);
function h(e) {
    let { users: t, maxUsers: r, guildId: o, channelId: l, className: h, avatarClassName: p, onClick: m, onFocus: I, size: T = c.AvatarSizes.SIZE_24, overflowCountVariant: g = 'text-xs/medium', overflowCountColor: S = 'interactive-normal', hideOverflowCount: A = !1, disableUsernameTooltip: v = !1, disableUserPopout: N = !1, onUserPopoutClosed: O } = e,
        [R, C] = a.useState(!1);
    function y() {
        return (0, i.jsx)(c.Dialog, {
            className: f.popoutWrapper,
            children: (0, i.jsx)(c.Scroller, {
                className: f.scroller,
                children: t.map((e) =>
                    (0, i.jsx)(
                        _.Z,
                        {
                            user: e,
                            guildId: o,
                            channelId: l,
                            nick: E.ZP.getName(e),
                            disablePopout: 'function' == typeof N ? N(e.id) : N,
                            ignoreModalClicks: !0,
                            onPopoutClose: () => {
                                C(!1), null == O || O();
                            },
                            onContextMenu: (t) =>
                                (0, d.jW)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([n.e('79695'), n.e('69220')]).then(n.bind(n, 881351));
                                        return (n) =>
                                            (0, i.jsx)(t, {
                                                ...n,
                                                user: e,
                                                guildId: o,
                                                channelId: l
                                            });
                                    },
                                    { onClose: () => C(!1) }
                                )
                        },
                        e.id
                    )
                )
            })
        });
    }
    function b() {
        let e = u()(t)
                .take(r)
                .map((e) => {
                    let t = E.ZP.getName(e);
                    return v
                        ? (0, i.jsx)(
                              'div',
                              {
                                  className: s()(f.avatar, p),
                                  children: (0, i.jsx)(c.Avatar, {
                                      src: e.getAvatarURL(o, 24),
                                      'aria-label': t,
                                      size: T
                                  })
                              },
                              e.id
                          )
                        : (0, i.jsx)(
                              c.TooltipContainer,
                              {
                                  text: t,
                                  className: s()(f.avatar, p),
                                  children: (0, i.jsx)(c.Avatar, {
                                      src: e.getAvatarURL(o, 24),
                                      'aria-label': t,
                                      size: T
                                  })
                              },
                              e.id
                          );
                })
                .value(),
            n = t.length - r;
        return (
            n > 0 &&
                !A &&
                (e[e.length - 1] = (0, i.jsx)(
                    c.Popout,
                    {
                        renderPopout: y,
                        shouldShow: R,
                        position: 'bottom',
                        onRequestClose: () => C(!1),
                        children: () =>
                            (0, i.jsx)(c.Button, {
                                className: s()(f.avatar, f.overflow),
                                onFocus: I,
                                onClick: (e) => {
                                    null == m || m(e), C(!0);
                                },
                                look: c.Button.Looks.BLANK,
                                size: c.Button.Sizes.NONE,
                                children: (0, i.jsxs)(c.Text, {
                                    variant: g,
                                    color: S,
                                    children: ['+', n + 1]
                                })
                            })
                    },
                    'overflow'
                )),
            e
        );
    }
    return t.length <= 0
        ? null
        : (0, i.jsx)('div', {
              className: s()(h, f.avatars),
              children: b()
          });
}
