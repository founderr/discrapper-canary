n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(481060),
    c = n(239091),
    d = n(751688),
    f = n(51144),
    _ = n(351342);
function p(e) {
    let { users: t, maxUsers: a, guildId: o, channelId: p, className: h, avatarClassName: m, onClick: g, onFocus: E, size: v = u.AvatarSizes.SIZE_24, overflowCountVariant: b = 'text-xs/medium', overflowCountColor: I = 'interactive-normal', hideOverflowCount: T = !1, disableUsernameTooltip: S = !1, disableUserPopout: y = !1, onUserPopoutClosed: A } = e,
        [N, C] = i.useState(!1);
    function R() {
        return (0, r.jsx)(u.Dialog, {
            className: _.popoutWrapper,
            children: (0, r.jsx)(u.Scroller, {
                className: _.scroller,
                children: t.map((e) =>
                    (0, r.jsx)(
                        d.Z,
                        {
                            user: e,
                            guildId: o,
                            channelId: p,
                            nick: f.ZP.getName(e),
                            disablePopout: 'function' == typeof y ? y(e.id) : y,
                            ignoreModalClicks: !0,
                            onPopoutClose: () => {
                                C(!1), null == A || A();
                            },
                            onContextMenu: (t) =>
                                (0, c.jW)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([n.e('79695'), n.e('69220'), n.e('44378')]).then(n.bind(n, 881351));
                                        return (n) =>
                                            (0, r.jsx)(t, {
                                                ...n,
                                                user: e,
                                                guildId: o,
                                                channelId: p
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
    return t.length <= 0
        ? null
        : (0, r.jsx)('div', {
              className: s()(h, _.avatars),
              children: (function () {
                  let e = l()(t)
                          .take(a)
                          .map((e) => {
                              let t = f.ZP.getName(e);
                              return S
                                  ? (0, r.jsx)(
                                        'div',
                                        {
                                            className: s()(_.avatar, m),
                                            children: (0, r.jsx)(u.Avatar, {
                                                src: e.getAvatarURL(o, 24),
                                                'aria-label': t,
                                                size: v
                                            })
                                        },
                                        e.id
                                    )
                                  : (0, r.jsx)(
                                        u.TooltipContainer,
                                        {
                                            text: t,
                                            className: s()(_.avatar, m),
                                            children: (0, r.jsx)(u.Avatar, {
                                                src: e.getAvatarURL(o, 24),
                                                'aria-label': t,
                                                size: v
                                            })
                                        },
                                        e.id
                                    );
                          })
                          .value(),
                      n = t.length - a;
                  return (
                      n > 0 &&
                          !T &&
                          (e[e.length - 1] = (0, r.jsx)(
                              u.Popout,
                              {
                                  renderPopout: R,
                                  shouldShow: N,
                                  position: 'bottom',
                                  onRequestClose: () => C(!1),
                                  children: () =>
                                      (0, r.jsx)(u.Button, {
                                          className: s()(_.avatar, _.overflow),
                                          onFocus: E,
                                          onClick: (e) => {
                                              null == g || g(e), C(!0);
                                          },
                                          look: u.Button.Looks.BLANK,
                                          size: u.Button.Sizes.NONE,
                                          children: (0, r.jsxs)(u.Text, {
                                              variant: b,
                                              color: I,
                                              children: ['+', n + 1]
                                          })
                                      })
                              },
                              'overflow'
                          )),
                      e
                  );
              })()
          });
}
