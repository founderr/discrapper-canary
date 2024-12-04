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
    _ = n(357498);
function p(e) {
    let { users: t, maxUsers: a, guildId: o, channelId: p, className: h, avatarClassName: m, onClick: g, onFocus: E, size: v = u.AvatarSizes.SIZE_24, overflowCountVariant: I = 'text-xs/medium', overflowCountColor: T = 'interactive-normal', overflowCountClassName: b, hideOverflowCount: S = !1, disableUsernameTooltip: y = !1, disableUserPopout: A = !1, onUserPopoutClosed: N } = e,
        [C, R] = i.useState(!1);
    function O() {
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
                            disablePopout: 'function' == typeof A ? A(e.id) : A,
                            ignoreModalClicks: !0,
                            onPopoutClose: () => {
                                R(!1), null == N || N();
                            },
                            onContextMenu: (t) =>
                                (0, c.jW)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                                        return (n) =>
                                            (0, r.jsx)(t, {
                                                ...n,
                                                user: e,
                                                guildId: o,
                                                channelId: p
                                            });
                                    },
                                    { onClose: () => R(!1) }
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
                              return y
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
                          !S &&
                          (e[e.length - 1] = (0, r.jsx)(
                              u.Popout,
                              {
                                  renderPopout: O,
                                  shouldShow: C,
                                  position: 'bottom',
                                  onRequestClose: () => R(!1),
                                  children: () =>
                                      (0, r.jsx)(u.Button, {
                                          className: s()(_.avatar, _.overflow, b),
                                          onFocus: E,
                                          onClick: (e) => {
                                              null == g || g(e), R(!0);
                                          },
                                          look: u.Button.Looks.BLANK,
                                          size: u.Button.Sizes.NONE,
                                          children: (0, r.jsxs)(u.Text, {
                                              variant: I,
                                              color: T,
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
