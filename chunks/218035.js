n.d(e, {
    Z: function () {
        return S;
    },
    c: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(87051),
    a = n(729052),
    d = n(9156),
    o = n(621600),
    u = n(981631),
    c = n(388032);
function g(t) {
    var e, n, i;
    let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t.type) {
        case u.d4z.GUILD_VOICE:
            return s
                ? ((e = t),
                  [
                      {
                          setting: u.bL.NULL,
                          label: null != e.parent_id ? c.intl.string(c.t.wlrV1d) : c.intl.string(c.t['1Wn2Mz'])
                      },
                      {
                          setting: u.bL.ALL_MESSAGES,
                          label: c.intl.string(c.t['9sGJkp'])
                      },
                      {
                          setting: u.bL.ONLY_MENTIONS,
                          label: c.intl.format(c.t.cpcXvb, {})
                      },
                      {
                          setting: u.bL.NO_MESSAGES,
                          label: c.intl.string(c.t.CtVGyc)
                      }
                  ])
                : null;
        case u.d4z.GUILD_STAGE_VOICE:
            return (
                (n = t),
                [
                    {
                        setting: u.bL.NULL,
                        label: null != n.parent_id ? c.intl.string(c.t.wlrV1d) : c.intl.string(c.t['1Wn2Mz'])
                    },
                    {
                        setting: u.bL.ONLY_MENTIONS,
                        label: c.intl.string(c.t['BENn//'])
                    },
                    {
                        setting: u.bL.NO_MESSAGES,
                        label: c.intl.string(c.t.CtVGyc)
                    }
                ]
            );
        default:
            return (
                (i = t),
                [
                    {
                        setting: u.bL.NULL,
                        label: null != i.parent_id ? c.intl.string(c.t.wlrV1d) : c.intl.string(c.t['1Wn2Mz'])
                    },
                    {
                        setting: u.bL.ALL_MESSAGES,
                        label: c.intl.string(c.t['n/bTaW'])
                    },
                    {
                        setting: u.bL.ONLY_MENTIONS,
                        label: c.intl.format(c.t.L2hmY2, {})
                    },
                    {
                        setting: u.bL.NO_MESSAGES,
                        label: c.intl.string(c.t.CtVGyc)
                    }
                ]
            );
    }
}
function _(t) {
    let e = t.getGuildId(),
        n = t.id,
        _ = (0, s.e7)(
            [d.ZP],
            () => {
                let n = u.bL.NULL;
                return null != t.parent_id && (n = d.ZP.getChannelMessageNotifications(e, t.parent_id)), n !== u.bL.NULL ? n : d.ZP.getMessageNotifications(e);
            },
            [e, t.parent_id]
        ),
        S = (0, s.e7)([d.ZP], () => d.ZP.getNewForumThreadsCreated(t)),
        L = (0, s.e7)([d.ZP], () => d.ZP.getChannelOverrides(e)[n], [e, n]),
        h = null == L ? u.bL.NULL : L.message_notifications,
        E = (0, a.p2)(t),
        N = g(t, E);
    return null == N
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuCheckboxItem, {
                                    id: 'new-forum-threads-created',
                                    label: c.intl.string(c.t.Rkgjpq),
                                    checked: S,
                                    action: () => l.Z.setForumThreadsCreated(t, !S)
                                }),
                                (0, i.jsx)(r.MenuSeparator, {})
                            ]
                        })
                      : null,
                  N.map((s) => {
                      let { setting: a, label: d } = s;
                      return (0, i.jsx)(
                          r.MenuRadioItem,
                          {
                              group: 'channel-notifications',
                              id: ''.concat(a),
                              label: d,
                              subtext:
                                  a === u.bL.NULL
                                      ? (function (t, e) {
                                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                            switch (t) {
                                                case u.bL.ALL_MESSAGES:
                                                    return e.type === u.d4z.GUILD_VOICE && n ? c.intl.string(c.t['9sGJkp']) : c.intl.string(c.t['n/bTaW']);
                                                case u.bL.ONLY_MENTIONS:
                                                    return c.intl.format(c.t.L2hmY2, {});
                                                case u.bL.NO_MESSAGES:
                                                    return c.intl.string(c.t.CtVGyc);
                                                case u.bL.NULL:
                                                default:
                                                    return;
                                            }
                                        })(_, t, E)
                                      : void 0,
                              action: () => {
                                  var t;
                                  return (t = a), void (null != e && l.Z.updateChannelOverrideSettings(e, n, { message_notifications: t }, o.UE.notifications(t)));
                              },
                              checked: a === h
                          },
                          a
                      );
                  })
              ]
          });
}
function S(t) {
    var e, n;
    let l = _(t),
        o = (0, s.e7)([d.ZP], () => d.ZP.resolvedMessageNotifications(t), [t]),
        S = (0, s.e7)([d.ZP], () => d.ZP.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
        L = null == S ? u.bL.NULL : S.message_notifications,
        h = (0, a.p2)(t),
        E =
            L === u.bL.NULL && t.isGuildStageVoice()
                ? c.intl.format(c.t.L2hmY2, {})
                : null === (n = g(t, h)) || void 0 === n
                  ? void 0
                  : null ===
                          (e = n.find((t) => {
                              let { setting: e } = t;
                              return e === o;
                          })) || void 0 === e
                    ? void 0
                    : e.label;
    return null != l
        ? (0, i.jsx)(r.MenuItem, {
              id: 'channel-notifications',
              label: c.intl.string(c.t.h850Sk),
              subtext: E,
              children: l
          })
        : null;
}
