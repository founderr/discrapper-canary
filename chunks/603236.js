t.d(n, {
    I: function () {
        return y;
    },
    S: function () {
        return T;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(533800),
    o = t(442837),
    d = t(846519),
    c = t(481060),
    u = t(914010),
    m = t(246946),
    x = t(626135),
    h = t(572004),
    g = t(630388),
    v = t(971130),
    f = t(530436),
    j = t(245335),
    N = t(981631),
    I = t(388032),
    p = t(696456),
    C = t(311133),
    E = t(639944),
    S = t(971436);
let T = o.ZP.connectStores([m.Z], () => ({ hideValue: m.Z.hideInstantInvites }))((e) => {
        let { value: n, autoFocus: t, hideValue: r, onCopy: s, disabled: o } = e,
            [u, m] = i.useState(!1),
            [x, g] = i.useState(!1),
            v = i.useMemo(() => new d.sW(1000, () => g(!1)), [g]);
        return (
            i.useEffect(
                () => () => {
                    v.cancel();
                },
                [v]
            ),
            (0, l.jsxs)('div', {
                className: a()(C.input, E.__invalid_flexJustifyBetween, E.flexCenter, {
                    [C.success]: x,
                    [C.focused]: u
                }),
                children: [
                    (0, l.jsx)(c.TextInput, {
                        className: p.copyInput,
                        name: 'invite',
                        value: r ? I.intl.string(I.t['6HzNgY']) : n,
                        editable: !1,
                        inputClassName: p.input,
                        autoFocus: t,
                        onFocus: () => (t ? m(!0) : null),
                        onBlur: () => (t ? m(!1) : null),
                        spellCheck: 'false',
                        onClick: (e) => e.currentTarget.select(),
                        'aria-label': I.intl.string(I.t.qreV29),
                        disabled: o
                    }),
                    h.wS
                        ? (0, l.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              color: x ? c.Button.Colors.GREEN : c.Button.Colors.BRAND,
                              className: p.copyButton,
                              onClick: () => {
                                  g(!0), v.delay(), s(n);
                              },
                              disabled: o,
                              children: x ? I.intl.string(I.t.q30c5u) : I.intl.string(I.t.OpuAlJ)
                          })
                        : null
                ]
            })
        );
    }),
    y = (e) => {
        let { guild: n, noInvitesAvailable: t, showFriends: r, onClose: o, modalState: d, isGuestInviteCreationToggleEnabled: m, inviteFlags: C, setInviteFlags: E, showGuestInviteToggleForCurrentVoiceChannel: y, copyValue: Z, changePage: b, inviteChannel: _, source: R, code: k, guildScheduledEvent: A, disabled: L } = e,
            { maxAge: D, maxUses: z, networkError: B, showVanityURL: M } = d,
            G = i.useCallback(() => {
                (0, h.JG)(Z),
                    x.default.track(N.rMx.COPY_INSTANT_INVITE, {
                        server: u.Z.getGuildId(),
                        channel: null == _ ? void 0 : _.id,
                        channel_type: null == _ ? void 0 : _.type,
                        location: R,
                        code: k,
                        guild_scheduled_event_id: null == A ? void 0 : A.id
                    });
            }, [Z, _, R, k, A]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(T, {
                    value: Z,
                    autoFocus: r,
                    onCopy: G,
                    disabled: L
                }),
                m
                    ? (0, l.jsx)('div', {
                          className: p.temporaryMembershipContainerBackground,
                          children: (0, l.jsx)(c.FormSwitch, {
                              className: p.temporaryMembershipContainer,
                              value: (0, g.yE)(C, s.$.IS_GUEST_INVITE),
                              onChange: (e) => E((0, g.mB)(C, s.$.IS_GUEST_INVITE, e)),
                              note: I.intl.string(I.t['/FeTKy']),
                              disabled: L,
                              hideBorder: !0,
                              children: y ? I.intl.string(I.t.BPL98f) : I.intl.string(I.t['2snqsL'])
                          })
                      })
                    : null,
                t || M
                    ? null
                    : (0, l.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(S.marginTop8, p.footerText),
                          children: [
                              (0, v.Vg)(D, z),
                              ' ',
                              r
                                  ? (0, l.jsx)(c.Anchor, {
                                        onClick: () => b(j.RV.SETTINGS),
                                        children: I.intl.string(I.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !t && r && M
                    ? (0, l.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(S.marginTop8, p.footerText),
                          children: [
                              I.intl.string(I.t['0M2U9/']),
                              ' ',
                              (0, l.jsx)(c.Anchor, {
                                  onClick: () => b(j.RV.SETTINGS),
                                  children: I.intl.string(I.t.VNe8Pz)
                              })
                          ]
                      })
                    : null,
                null != B
                    ? (0, l.jsx)(f.W, {
                          guild: n,
                          error: B,
                          onClose: o
                      })
                    : null
            ]
        });
    };
