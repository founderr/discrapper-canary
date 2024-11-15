n.d(t, {
    Z: function () {
        return T;
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
    h = n(565799),
    p = n(501655),
    m = n(199902),
    f = n(592125),
    g = n(594174),
    C = n(938475),
    _ = n(823379),
    v = n(709054),
    x = n(853856),
    I = n(981631),
    b = n(388032),
    E = n(516126),
    S = n(64056);
function Z(e, t) {
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
function N() {
    var e, t;
    let n = (0, s.Wu)([x.Z, f.Z], () =>
            v.default
                .keys(x.Z.getFavoriteChannels())
                .map((e) => f.Z.getChannel(e))
                .filter(_.lm)
        ),
        l = n.map((e) => e.id),
        r = n.filter((e) => e.type === I.d4z.GUILD_VOICE),
        a = n.filter((e) => e.type === I.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
        b = (0, s.Wu)(
            [C.ZP],
            () =>
                o().flatMap(r, (e) =>
                    C.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    })
                ),
            [r]
        ),
        S = (0, s.Wu)([h.Z], () =>
            o().flatMap(a, (e) =>
                h.Z.getMutableParticipants(e, p.pV.SPEAKER)
                    .filter((e) => e.type === p.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    })
            )
        ),
        N = (0, s.e7)([h.Z], () => {
            let e = 0;
            for (let t of a) e += h.Z.getParticipantCount(t, p.pV.AUDIENCE);
            return e;
        }),
        y = (0, s.Wu)(
            [m.Z],
            () =>
                m.Z.getAllApplicationStreams()
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
        j = (0, s.Wu)([g.default], () => T.map((e) => g.default.getUser(e)), [T]),
        A = (0, s.Wu)([g.default], () => y.map((e) => g.default.getUser(e)), [y]),
        P = Z(
            c.VoiceNormalIcon,
            b.filter((e) => !y.includes(e.id) && !T.includes(e.id))
        );
    let M =
            ((e = S),
            (t = N),
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
        R = Z(
            c.ScreenArrowIcon,
            A.filter((e) => null != e && !T.includes(e.id))
        ),
        w = Z(c.ActivitiesIcon, j);
    return (0, i.jsxs)(i.Fragment, {
        children: [M, P, R, w]
    });
}
function y() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: r()(E.row, E.rowGuildName),
                children: (0, i.jsx)('span', {
                    className: r()(E.guildNameText, E.guildNameTextLimitedSize),
                    children: b.intl.string(b.t.wMWycn)
                })
            }),
            (0, i.jsx)(N, {})
        ]
    });
}
function T(e) {
    let { 'aria-label': t = !1, onShow: n, children: l } = e;
    return (0, i.jsx)(c.Tooltip, {
        hideOnClick: !0,
        spacing: 20,
        position: 'right',
        text: (0, i.jsx)(y, {}),
        'aria-label': t,
        tooltipClassName: S.listItemTooltip,
        onTooltipShow: n,
        children: (e) =>
            (0, i.jsx)('div', {
                ...e,
                children: l
            })
    });
}
