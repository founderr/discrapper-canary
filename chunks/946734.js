n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(884338),
    u = n(100527),
    d = n(906732),
    h = n(111028),
    m = n(150039),
    p = n(171368),
    f = n(271383),
    g = n(430824),
    C = n(594174),
    x = n(251625),
    v = n(823379),
    _ = n(665149),
    I = n(981631),
    E = n(228168),
    b = n(388032),
    S = n(289304);
function Z(e, t, n) {
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
class T {
    updateData(e) {
        let { userId: t, user: n, channelId: i, analyticsLocations: l } = e;
        (this.userId = t), (this.user = n), (this.channelId = i), (this.analyticsLocations = l);
    }
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderNicknamePairs() {
        return this.getNicknameGuildPairs().map((e, t) => {
            let [n, r] = e,
                s = (0, i.jsx)(o.Clickable, {
                    tag: 'span',
                    onClick: this.handleClick,
                    children: n
                });
            return (
                r.length > 0 &&
                    (s = (0, i.jsx)(o.TooltipContainer, {
                        className: S.tooltip,
                        text: r.join(', '),
                        position: 'bottom',
                        children: s
                    })),
                (0, i.jsxs)(
                    l.Fragment,
                    {
                        children: [0 !== t ? ', ' : null, s]
                    },
                    t
                )
            );
        });
    }
    constructor({ userId: e, user: t, channelId: n, analyticsLocations: l }) {
        Z(this, 'userId', void 0),
            Z(this, 'user', void 0),
            Z(this, 'channelId', void 0),
            Z(this, 'analyticsLocations', void 0),
            Z(
                this,
                'generateNicknameGuildPairs',
                (0, x.oH)((e) => {
                    var t;
                    return s()(f.ZP.getNicknameGuildsMapping(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : this.userId))
                        .toPairs()
                        .map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                n
                                    .map((e) => {
                                        var t;
                                        return null === (t = g.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
                                    })
                                    .filter(v.lm)
                            ];
                        })
                        .value();
                })
            ),
            Z(this, 'renderMoreAvatars', () =>
                (0, i.jsx)(
                    o.TooltipContainer,
                    {
                        text: b.intl.string(b.t.UTjREx),
                        position: 'bottom',
                        children: (0, i.jsx)(o.Clickable, {
                            className: S.moreAvatars,
                            onClick: this.handleClick,
                            children: (0, i.jsx)(o.CirclePlusIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: S.plusIcon
                            })
                        })
                    },
                    'more-avatars'
                )
            ),
            Z(this, 'handleClick', () => {
                (0, p.openUserProfileModal)({
                    userId: this.userId,
                    channelId: this.channelId,
                    sourceAnalyticsLocations: this.analyticsLocations,
                    section: E.oh.MUTUAL_GUILDS,
                    analyticsLocation: { section: I.jXE.CHANNEL_HEADER }
                });
            }),
            (this.userId = e),
            (this.user = t),
            (this.channelId = n),
            (this.analyticsLocations = l);
    }
}
function N(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        r = (0, m.gc)(n),
        s = Array(r.length).fill(null),
        { analyticsLocations: p } = (0, d.ZP)(u.Z.AKA),
        f = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: i } = e,
                r = (0, a.e7)([C.default], () => C.default.getUser(t), [t]),
                [s] = l.useState(
                    () =>
                        new T({
                            user: r,
                            userId: t,
                            channelId: n,
                            analyticsLocations: i
                        })
                );
            return (
                s.updateData({
                    userId: t,
                    user: r,
                    channelId: n,
                    analyticsLocations: i
                }),
                s
            );
        })({
            userId: n,
            analyticsLocations: p,
            channelId: t.id
        });
    return 0 === f.getNicknameGuildPairs().length && 0 === r.length
        ? (0, i.jsx)('div', { className: S.spacer })
        : (0, i.jsxs)(d.Gt, {
              value: p,
              children: [
                  (0, i.jsx)(_.iz, {}),
                  (0, i.jsx)(o.TextBadge, {
                      text: b.intl.string(b.t.l1QVfn),
                      disableColor: !0,
                      className: S.akaBadge
                  }),
                  r.length > 0
                      ? (0, i.jsx)(c.Z, {
                            size: 16,
                            users: s,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                var l;
                                let s = f.user,
                                    a = r[n];
                                return null == a || null == s
                                    ? null
                                    : (0, i.jsx)(
                                          o.TooltipContainer,
                                          {
                                              text: null === (l = g.Z.getGuild(a)) || void 0 === l ? void 0 : l.name,
                                              position: 'bottom',
                                              children: (0, i.jsx)('img', {
                                                  alt: '',
                                                  className: S.avatar,
                                                  onClick: f.handleClick,
                                                  src: s.getAvatarURL(a, 16),
                                                  'aria-hidden': !0
                                              })
                                          },
                                          a[1]
                                      );
                            },
                            renderMoreUsers: f.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: S.avatars
                        })
                      : null,
                  f.getNicknameGuildPairs().length > 0
                      ? (0, i.jsx)(h.Z, {
                            position: 'bottom',
                            className: S.nicknames,
                            children: f.renderNicknamePairs()
                        })
                      : null
              ]
          });
}
