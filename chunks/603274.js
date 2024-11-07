n.d(t, {
    Z: function () {
        return j;
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
    f = n(199902),
    m = n(592125),
    g = n(594174),
    C = n(938475),
    _ = n(823379),
    x = n(709054),
    v = n(853856),
    I = n(981631),
    b = n(388032),
    S = n(479315),
    Z = n(455491);
function N(e, t) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)('div', {
              className: S.row,
              children: [
                  (0, i.jsx)(e, {
                      className: S.activityIcon,
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
function E() {
    var e, t;
    let n = (0, s.Wu)([v.Z, m.Z], () =>
            x.default
                .keys(v.Z.getFavoriteChannels())
                .map((e) => m.Z.getChannel(e))
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
        Z = (0, s.Wu)([h.Z], () =>
            o().flatMap(a, (e) =>
                h.Z.getMutableParticipants(e, p.pV.SPEAKER)
                    .filter((e) => e.type === p.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    })
            )
        ),
        E = (0, s.e7)([h.Z], () => {
            let e = 0;
            for (let t of a) e += h.Z.getParticipantCount(t, p.pV.AUDIENCE);
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
        j = (0, s.Wu)(
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
        T = (0, s.Wu)([g.default], () => j.map((e) => g.default.getUser(e)), [j]),
        P = (0, s.Wu)([g.default], () => y.map((e) => g.default.getUser(e)), [y]),
        A = N(
            c.VoiceNormalIcon,
            b.filter((e) => !y.includes(e.id) && !j.includes(e.id))
        );
    let M =
            ((e = Z),
            (t = E),
            0 === e.length
                ? null
                : (0, i.jsxs)('div', {
                      className: S.row,
                      children: [
                          (0, i.jsx)(c.StageIcon, {
                              size: 'lg',
                              color: 'currentColor',
                              className: S.activityIcon
                          }),
                          (0, i.jsx)(d.Z, {
                              guildId: void 0,
                              users: e,
                              max: 3
                          }),
                          (0, i.jsxs)('div', {
                              className: S.stageListenerPill,
                              children: [
                                  (0, i.jsx)(c.HeadphonesIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      className: S.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/medium',
                                      children: t
                                  })
                              ]
                          })
                      ]
                  })),
        w = N(
            c.ScreenArrowIcon,
            P.filter((e) => null != e && !j.includes(e.id))
        ),
        L = N(c.ActivitiesIcon, T);
    return (0, i.jsxs)(i.Fragment, {
        children: [M, A, w, L]
    });
}
function y() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: r()(S.row, S.rowGuildName),
                children: (0, i.jsx)('span', {
                    className: r()(S.guildNameText, S.guildNameTextLimitedSize),
                    children: b.intl.string(b.t.wMWycn)
                })
            }),
            (0, i.jsx)(E, {})
        ]
    });
}
function j(e) {
    let { 'aria-label': t = !1, onShow: n, children: l } = e;
    return (0, i.jsx)(c.Tooltip, {
        hideOnClick: !0,
        spacing: 20,
        position: 'right',
        text: (0, i.jsx)(y, {}),
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
