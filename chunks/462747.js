t.d(n, {
    Z: function () {
        return L;
    }
});
var l = t(735250);
t(470079);
var i = t(120356),
    r = t.n(i),
    a = t(442837),
    o = t(481060),
    c = t(239091),
    s = t(129861),
    d = t(939863),
    u = t(184301),
    _ = t(347475),
    h = t(314897),
    v = t(158776),
    f = t(885110),
    E = t(594174),
    g = t(315416),
    m = t(765305),
    x = t(689938),
    I = t(513994);
function Z(e) {
    let { children: n } = e;
    return (0, l.jsxs)('div', {
        className: I.emptyContainer,
        children: [
            (0, l.jsx)(d.Z, {
                children: (0, l.jsx)('div', {
                    className: I.circle,
                    children: (0, l.jsx)(o.GroupIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 40,
                        width: 40,
                        className: I.icon
                    })
                })
            }),
            n
        ]
    });
}
function b() {
    return (0, l.jsx)(Z, {
        children: (0, l.jsx)(o.Heading, {
            color: 'header-primary',
            variant: 'heading-xl/semibold',
            className: I.title,
            children: x.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
        })
    });
}
function N() {
    return (0, l.jsx)(Z, {
        children: (0, l.jsx)(o.Heading, {
            color: 'header-secondary',
            variant: 'heading-md/semibold',
            className: I.errorTitle,
            children: x.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
        })
    });
}
function T(e) {
    let { count: n } = e;
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)('div', {
            className: I.listRow,
            children: [
                (0, l.jsx)('div', {
                    className: r()(I.listRowCircle, I.listAvatar),
                    children: (0, l.jsx)(o.GroupIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 14,
                        width: 14,
                        className: I.icon
                    })
                }),
                (0, l.jsx)(o.Text, {
                    color: 'text-normal',
                    variant: 'text-md/normal',
                    children: x.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({ userRemainCount: n })
                })
            ]
        })
    });
}
function C(e) {
    let { eventUser: n, guildId: t, onContextMenu: i } = e,
        c = (0, a.e7)([E.default], () => E.default.getUser(n.user_id)),
        d = (0, a.e7)([f.Z, v.Z, h.default], () => (n.user_id === h.default.getId() ? f.Z.getStatus() : v.Z.getStatus(n.user_id, t)), [n.user_id, t]);
    return null == c
        ? null
        : (0, l.jsx)(o.Popout, {
              preload: () => (0, u.Z)(c.id, c.getAvatarURL(t, 80), { guildId: t }),
              renderPopout: (e) =>
                  (0, l.jsx)(_.Z, {
                      ...e,
                      userId: n.user_id,
                      guildId: t
                  }),
              position: 'left',
              spacing: 16,
              children: (e, a) => {
                  var u;
                  let { isShown: _ } = a;
                  return (0, l.jsxs)(o.Clickable, {
                      className: r()(I.listRow, I.interactiveRow, { [I.selected]: _ }),
                      onContextMenu: (e) => i(e, c),
                      ...e,
                      children: [
                          (0, l.jsx)(o.Avatar, {
                              src: c.getAvatarURL(t, 24),
                              'aria-label': c.username,
                              size: o.AvatarSizes.SIZE_24,
                              className: I.listAvatar,
                              status: d
                          }),
                          (0, l.jsx)(s.Z, {
                              user: c,
                              className: I.listName,
                              discriminatorClass: I.listDiscriminator,
                              nick: null === (u = n.member) || void 0 === u ? void 0 : u.nick
                          })
                      ]
                  });
              }
          });
}
function p(e) {
    let { eventUsers: n, guildId: t, usersNotShownCount: i = 0, onContextMenu: r } = e;
    return (0, l.jsxs)(o.ScrollerThin, {
        className: I.listScroller,
        children: [
            n.map((e) =>
                (0, l.jsx)(
                    C,
                    {
                        guildId: t,
                        eventUser: e,
                        onContextMenu: r
                    },
                    e.user_id
                )
            ),
            i > 0 && (0, l.jsx)(T, { count: i })
        ]
    });
}
function j(e) {
    let { children: n, style: t } = e;
    return (0, l.jsx)('div', {
        className: I.container,
        style: null != t ? t : {},
        children: n
    });
}
function S(e) {
    let { children: n, height: t } = e;
    return (0, l.jsx)(j, {
        style: { height: t },
        children: n
    });
}
function L(e) {
    let { guildEvent: n, recurrenceId: i, eventUsers: r, loading: a, error: s, containerHeight: d } = e,
        u = (0, g.Z)(n.guild_id, n.id, i);
    if (a && 0 === r.length)
        return (0, l.jsx)(S, {
            height: d,
            children: (0, l.jsx)(o.Spinner, {
                type: o.Spinner.Type.SPINNING_CIRCLE,
                className: I.spinner
            })
        });
    if (null != s && 0 === r.length)
        return (0, l.jsx)(S, {
            height: d,
            children: (0, l.jsx)(N, {})
        });
    let _ = 0;
    return (
        r.length >= m.rC && u > m.rC && (_ = Math.max(u - r.length, 0)),
        0 === r.length
            ? (0, l.jsx)(S, {
                  height: d,
                  children: (0, l.jsx)(b, {})
              })
            : (0, l.jsx)(j, {
                  children: (0, l.jsx)(p, {
                      eventUsers: r,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, c.jW)(e, async () => {
                              let { default: e } = await Promise.all([t.e('79695'), t.e('69220')]).then(t.bind(t, 881351));
                              return (t) =>
                                  (0, l.jsx)(e, {
                                      ...t,
                                      user: n
                                  });
                          });
                      },
                      usersNotShownCount: _
                  })
              })
    );
}
