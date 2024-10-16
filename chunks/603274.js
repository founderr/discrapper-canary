n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120),
    n(390547),
    n(653041);
var i = n(735250);
n(470079);
var l = n(120356),
    r = n.n(l),
    a = n(392711),
    s = n.n(a),
    o = n(442837),
    c = n(481060),
    u = n(317381),
    d = n(884338),
    h = n(565799),
    p = n(501655),
    f = n(199902),
    _ = n(592125),
    m = n(594174),
    g = n(938475),
    C = n(823379),
    I = n(709054),
    E = n(853856),
    N = n(981631),
    S = n(689938),
    v = n(516126),
    x = n(64056);
function T(e, t) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)('div', {
              className: v.row,
              children: [
                  (0, i.jsx)(e, {
                      className: v.activityIcon,
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
function Z() {
    var e, t;
    let n = (0, o.Wu)([E.Z, _.Z], () =>
            I.default
                .keys(E.Z.getFavoriteChannels())
                .map((e) => _.Z.getChannel(e))
                .filter(C.lm)
        ),
        l = n.map((e) => e.id),
        r = n.filter((e) => e.type === N.d4z.GUILD_VOICE),
        a = n.filter((e) => e.type === N.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
        S = (0, o.Wu)(
            [g.ZP],
            () =>
                s().flatMap(r, (e) =>
                    g.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    })
                ),
            [r]
        ),
        x = (0, o.Wu)([h.Z], () =>
            s().flatMap(a, (e) =>
                h.Z.getMutableParticipants(e, p.pV.SPEAKER)
                    .filter((e) => e.type === p.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    })
            )
        ),
        Z = (0, o.e7)([h.Z], () => {
            let e = 0;
            for (let t of a) e += h.Z.getParticipantCount(t, p.pV.AUDIENCE);
            return e;
        }),
        b = (0, o.Wu)(
            [f.Z],
            () =>
                f.Z.getAllApplicationStreams()
                    .filter((e) => l.includes(e.channelId))
                    .map((e) => e.ownerId),
            [l]
        ),
        A = (0, o.Wu)(
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
        M = (0, o.Wu)([m.default], () => A.map((e) => m.default.getUser(e)), [A]),
        R = (0, o.Wu)([m.default], () => b.map((e) => m.default.getUser(e)), [b]),
        L = T(
            c.VoiceNormalIcon,
            S.filter((e) => !b.includes(e.id) && !A.includes(e.id))
        );
    let y =
            ((e = x),
            (t = Z),
            0 === e.length
                ? null
                : (0, i.jsxs)('div', {
                      className: v.row,
                      children: [
                          (0, i.jsx)(c.StageIcon, {
                              size: 'lg',
                              color: 'currentColor',
                              className: v.activityIcon
                          }),
                          (0, i.jsx)(d.Z, {
                              guildId: void 0,
                              users: e,
                              max: 3
                          }),
                          (0, i.jsxs)('div', {
                              className: v.stageListenerPill,
                              children: [
                                  (0, i.jsx)(c.HeadphonesIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      className: v.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/medium',
                                      children: t
                                  })
                              ]
                          })
                      ]
                  })),
        P = T(
            c.ScreenArrowIcon,
            R.filter((e) => null != e && !A.includes(e.id))
        ),
        O = T(c.ActivitiesIcon, M);
    return (0, i.jsxs)(i.Fragment, {
        children: [y, L, P, O]
    });
}
function b() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: r()(v.row, v.rowGuildName),
                children: (0, i.jsx)('span', {
                    className: r()(v.guildNameText, v.guildNameTextLimitedSize),
                    children: S.Z.Messages.FAVORITES_GUILD_NAME
                })
            }),
            (0, i.jsx)(Z, {})
        ]
    });
}
function A(e) {
    let { 'aria-label': t = !1, onShow: n, children: l } = e;
    return (0, i.jsx)(c.Tooltip, {
        hideOnClick: !0,
        spacing: 20,
        position: 'right',
        text: (0, i.jsx)(b, {}),
        'aria-label': t,
        tooltipClassName: x.listItemTooltip,
        onTooltipShow: n,
        children: (e) =>
            (0, i.jsx)('div', {
                ...e,
                children: l
            })
    });
}
