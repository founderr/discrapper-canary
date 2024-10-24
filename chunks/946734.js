n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(392711),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(884338),
    u = n(100527),
    d = n(906732),
    h = n(111028),
    p = n(150039),
    m = n(171368),
    _ = n(271383),
    f = n(430824),
    E = n(594174),
    g = n(251625),
    C = n(823379),
    I = n(665149),
    T = n(981631),
    x = n(228168),
    S = n(689938),
    v = n(289304);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class A {
    updateData(e) {
        let { userId: t, user: n, channelId: i, analyticsLocations: s } = e;
        (this.userId = t), (this.user = n), (this.channelId = i), (this.analyticsLocations = s);
    }
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderNicknamePairs() {
        return this.getNicknameGuildPairs().map((e, t) => {
            let [n, a] = e,
                l = (0, i.jsx)(o.Clickable, {
                    tag: 'span',
                    onClick: this.handleClick,
                    children: n
                });
            return (
                a.length > 0 &&
                    (l = (0, i.jsx)(o.TooltipContainer, {
                        className: v.tooltip,
                        text: a.join(', '),
                        position: 'bottom',
                        children: l
                    })),
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [0 !== t ? ', ' : null, l]
                    },
                    t
                )
            );
        });
    }
    constructor({ userId: e, user: t, channelId: n, analyticsLocations: s }) {
        N(this, 'userId', void 0),
            N(this, 'user', void 0),
            N(this, 'channelId', void 0),
            N(this, 'analyticsLocations', void 0),
            N(
                this,
                'generateNicknameGuildPairs',
                (0, g.oH)((e) => {
                    var t;
                    return l()(_.ZP.getNicknameGuildsMapping(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : this.userId))
                        .toPairs()
                        .map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                n
                                    .map((e) => {
                                        var t;
                                        return null === (t = f.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
                                    })
                                    .filter(C.lm)
                            ];
                        })
                        .value();
                })
            ),
            N(this, 'renderMoreAvatars', () =>
                (0, i.jsx)(
                    o.TooltipContainer,
                    {
                        text: S.Z.Messages.AKA_MORE_AVATARS_OVERFLOW,
                        position: 'bottom',
                        children: (0, i.jsx)(o.Clickable, {
                            className: v.moreAvatars,
                            onClick: this.handleClick,
                            children: (0, i.jsx)(o.CirclePlusIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: v.plusIcon
                            })
                        })
                    },
                    'more-avatars'
                )
            ),
            N(this, 'handleClick', () => {
                (0, m.openUserProfileModal)({
                    userId: this.userId,
                    channelId: this.channelId,
                    sourceAnalyticsLocations: this.analyticsLocations,
                    section: x.oh.MUTUAL_GUILDS,
                    analyticsLocation: { section: T.jXE.CHANNEL_HEADER }
                });
            }),
            (this.userId = e),
            (this.user = t),
            (this.channelId = n),
            (this.analyticsLocations = s);
    }
}
function Z(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        a = (0, p.gc)(n),
        l = Array(a.length).fill(null),
        { analyticsLocations: m } = (0, d.ZP)(u.Z.AKA),
        _ = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: i } = e,
                a = (0, r.e7)([E.default], () => E.default.getUser(t), [t]),
                [l] = s.useState(
                    () =>
                        new A({
                            user: a,
                            userId: t,
                            channelId: n,
                            analyticsLocations: i
                        })
                );
            return (
                l.updateData({
                    userId: t,
                    user: a,
                    channelId: n,
                    analyticsLocations: i
                }),
                l
            );
        })({
            userId: n,
            analyticsLocations: m,
            channelId: t.id
        });
    return 0 === _.getNicknameGuildPairs().length && 0 === a.length
        ? (0, i.jsx)('div', { className: v.spacer })
        : (0, i.jsxs)(d.Gt, {
              value: m,
              children: [
                  (0, i.jsx)(I.iz, {}),
                  (0, i.jsx)(o.TextBadge, {
                      text: S.Z.Messages.AKA,
                      disableColor: !0,
                      className: v.akaBadge
                  }),
                  a.length > 0
                      ? (0, i.jsx)(c.Z, {
                            size: 16,
                            users: l,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                var s;
                                let l = _.user,
                                    r = a[n];
                                return null == r || null == l
                                    ? null
                                    : (0, i.jsx)(
                                          o.TooltipContainer,
                                          {
                                              text: null === (s = f.Z.getGuild(r)) || void 0 === s ? void 0 : s.name,
                                              position: 'bottom',
                                              children: (0, i.jsx)('img', {
                                                  alt: '',
                                                  className: v.avatar,
                                                  onClick: _.handleClick,
                                                  src: l.getAvatarURL(r, 16),
                                                  'aria-hidden': !0
                                              })
                                          },
                                          r[1]
                                      );
                            },
                            renderMoreUsers: _.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: v.avatars
                        })
                      : null,
                  _.getNicknameGuildPairs().length > 0
                      ? (0, i.jsx)(h.Z, {
                            position: 'bottom',
                            className: v.nicknames,
                            children: _.renderNicknamePairs()
                        })
                      : null
              ]
          });
}
