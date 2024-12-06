n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120),
    n(390547),
    n(653041);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(317381),
    d = n(884338),
    h = n(540059),
    p = n(565799),
    m = n(501655),
    f = n(199902),
    g = n(592125),
    C = n(594174),
    _ = n(938475),
    v = n(823379),
    x = n(709054),
    I = n(853856),
    b = n(981631),
    S = n(388032),
    E = n(782451),
    Z = n(572488);
function N(e, t) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)('div', {
              className: E.row,
              children: [
                  (0, i.jsx)(e, {
                      className: E.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, i.jsx)(d.Z, {
                      guildId: void 0,
                      users: t,
                      max: 6
                  })
              ]
          });
}
function y() {
    var e, t;
    let n = (0, s.Wu)([I.Z, g.Z], () =>
            x.default
                .keys(I.Z.getFavoriteChannels())
                .map((e) => g.Z.getChannel(e))
                .filter(v.lm)
        ),
        l = n.map((e) => e.id),
        r = n.filter((e) => e.type === b.d4z.GUILD_VOICE),
        a = n.filter((e) => e.type === b.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
        h = (0, s.Wu)(
            [_.ZP],
            () =>
                o().flatMap(r, (e) =>
                    _.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    })
                ),
            [r]
        ),
        S = (0, s.Wu)([p.Z], () =>
            o().flatMap(a, (e) =>
                p.Z.getMutableParticipants(e, m.pV.SPEAKER)
                    .filter((e) => e.type === m.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    })
            )
        ),
        Z = (0, s.e7)([p.Z], () => {
            let e = 0;
            for (let t of a) e += p.Z.getParticipantCount(t, m.pV.AUDIENCE);
            return e;
        }),
        y = (0, s.Wu)(
            [f.Z],
            () =>
                f.Z.getAllApplicationStreams()
                    .filter((e) => l.includes(e.channelId))
                    .map((e) => e.ownerId),
            [l]
        ),
        T = (0, s.Wu)(
            [u.ZP],
            () => {
                let e = u.ZP.getEmbeddedActivitiesByChannel(),
                    t = [];
                for (let r of l) {
                    var n, i;
                    t.push(...(null !== (i = null === (n = e.get(r)) || void 0 === n ? void 0 : n.flatMap((e) => Array.from(e.userIds))) && void 0 !== i ? i : []));
                }
                return t;
            },
            [l]
        ),
        A = (0, s.Wu)([C.default], () => T.map((e) => C.default.getUser(e)), [T]),
        j = (0, s.Wu)([C.default], () => y.map((e) => C.default.getUser(e)), [y]),
        P = N(
            c.VoiceNormalIcon,
            h.filter((e) => !y.includes(e.id) && !T.includes(e.id))
        );
    let R =
            ((e = S),
            (t = Z),
            0 === e.length
                ? null
                : (0, i.jsxs)('div', {
                      className: E.row,
                      children: [
                          (0, i.jsx)(c.StageIcon, {
                              size: 'lg',
                              color: 'currentColor',
                              className: E.activityIcon
                          }),
                          (0, i.jsx)(d.Z, {
                              guildId: void 0,
                              users: e,
                              max: 3
                          }),
                          (0, i.jsxs)('div', {
                              className: E.stageListenerPill,
                              children: [
                                  (0, i.jsx)(c.HeadphonesIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      className: E.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/medium',
                                      children: t
                                  })
                              ]
                          })
                      ]
                  })),
        M = N(
            c.ScreenArrowIcon,
            j.filter((e) => null != e && !T.includes(e.id))
        ),
        L = N(c.ActivitiesIcon, A);
    return (0, i.jsxs)(i.Fragment, {
        children: [R, P, M, L]
    });
}
function T() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: r()(E.row, E.rowGuildName),
                children: (0, i.jsx)('span', {
                    className: r()(E.guildNameText, E.guildNameTextLimitedSize),
                    children: S.intl.string(S.t.wMWycn)
                })
            }),
            (0, i.jsx)(y, {})
        ]
    });
}
function A(e) {
    let { 'aria-label': t = !1, onShow: n, children: l } = e,
        r = (0, h.Q)('FavoritesTooltip');
    return (0, i.jsx)(c.Tooltip, {
        hideOnClick: !0,
        spacing: r ? 12 : 20,
        position: 'right',
        text: (0, i.jsx)(T, {}),
        'aria-label': t,
        tooltipClassName: Z.listItemTooltip,
        onTooltipShow: n,
        children: (e) =>
            (0, i.jsx)('div', {
                ...e,
                children: l
            })
    });
}
