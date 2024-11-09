n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(782568),
    o = n(223892),
    c = n(203498),
    d = n(641806),
    u = n(690221),
    m = n(30624),
    h = n(577275),
    g = n(594174),
    x = n(451478),
    p = n(626135),
    f = n(584825),
    C = n(723047),
    I = n(416867),
    _ = n(903773),
    N = n(215124),
    v = n(326578),
    T = n(981631),
    j = n(674563),
    S = n(829857),
    b = n(388032),
    E = n(383470);
function R(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, i.jsx)('div', {
        className: E.selectTeamContainer,
        children: (0, i.jsx)(s.Button, {
            disabled: !n,
            onClick: t,
            className: E.enableTicketingButton,
            fullWidth: !0,
            children: b.intl.string(b.t['5k6FfX'])
        })
    });
}
function Z(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: l } = e,
        [a, o] = r.useState(),
        { enableGuildMonetizationForTeam: d, submitting: u, error: m } = (0, c.Z)(),
        { fetchSubscriptionsSettings: h } = (0, f.JH)(),
        g = (0, C.mY)(),
        x = r.useMemo(
            () =>
                n.map((e) => ({
                    label: e.name,
                    value: e.id
                })),
            [n]
        ),
        p = async () => {
            (await d(t, a, j.wW.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (h(t.id),
                (0, I.B)({
                    Icon: v.Z,
                    title: b.intl.string(b.t['AP/2qa']),
                    body: b.intl.string(b.t.kHMgaG)
                }));
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: E.selectTeamContainer,
                children: [
                    (0, i.jsx)(s.SingleSelect, {
                        className: E.teamSelect,
                        options: x,
                        placeholder: b.intl.string(b.t.QXf93N),
                        value: a,
                        isDisabled: 0 === x.length || g || !l,
                        onChange: (e) => o(e),
                        'aria-label': b.intl.string(b.t.QXf93N)
                    }),
                    (0, i.jsx)(s.Button, {
                        onClick: p,
                        className: E.enableTicketingButton,
                        submitting: u,
                        disabled: null == a || g || !l,
                        children: b.intl.string(b.t['9HU3ZW'])
                    })
                ]
            }),
            null != m &&
                (0, i.jsx)(s.Text, {
                    className: E.error,
                    variant: 'text-sm/normal',
                    children: m.getAnyErrorMessage()
                })
        ]
    });
}
t.Z = (e) => {
    let { guild: t } = e,
        n = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        c = t.isOwner(n),
        f = (0, o.Ob)(t),
        C = (0, l.e7)([x.Z], () => x.Z.isFocused()),
        { teams: I, loading: v } = (0, h.Z)({ refreshOnDepChange: C }),
        j = r.useMemo(
            () =>
                I.filter((e) => {
                    var t;
                    return e.payout_account_status !== S.C.BLOCKED && (0, m.Z)(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : T.lds, e);
                }),
            [I, n]
        ),
        A = j.length > 0,
        L = r.useCallback(async () => {
            p.default.track(T.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: f,
                has_eligible_team: A,
                guild_id: t.id,
                is_owner: c
            });
            let e = await (0, d.$)(T.E07.DEVELOPER_PORTAL_TEAMS);
            (0, a.Z)(e);
        }, [t, c, f, A]),
        y = r.useCallback(
            (e) =>
                c
                    ? (0, i.jsx)(u.Z, {
                          onClick: L,
                          children: e
                      })
                    : e,
            [L, c]
        );
    return v
        ? (0, i.jsx)(s.Spinner, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !c &&
                      (0, i.jsx)(_.Z, {
                          className: E.nonOwnerNotice,
                          children: b.intl.string(b.t.t56qWF)
                      }),
                  (0, i.jsxs)(s.FormSection, {
                      title: b.intl.string(b.t.sYLCY2),
                      disabled: !c,
                      children: [
                          (0, i.jsx)(s.FormText, {
                              type: s.FormText.Types.DESCRIPTION,
                              className: E.description,
                              disabled: !c,
                              children: b.intl.format(b.t['5mfqpa'], { onCreateTeamHook: y })
                          }),
                          A
                              ? (0, i.jsx)(Z, {
                                    guild: t,
                                    eligibleTeams: j,
                                    isGuildOwner: c
                                })
                              : (0, i.jsx)(R, {
                                    onCreateTeamClick: L,
                                    isGuildOwner: c
                                })
                      ]
                  }),
                  (0, i.jsx)(s.FormSection, {
                      title: b.intl.string(b.t['0n7R2d']),
                      className: E.selfDemonetization,
                      children: (0, i.jsx)(N.Z, {
                          guildId: t.id,
                          allPeriods: []
                      })
                  })
              ]
          });
};
