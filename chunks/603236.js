t.d(n, {
    I: function () {
        return b;
    },
    S: function () {
        return S;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(533800),
    o = t(442837),
    c = t(846519),
    d = t(481060),
    u = t(914010),
    x = t(246946),
    m = t(626135),
    h = t(572004),
    g = t(630388),
    v = t(971130),
    j = t(530436),
    f = t(245335),
    N = t(981631),
    I = t(388032),
    p = t(755527),
    C = t(716722),
    E = t(652849),
    T = t(232186);
let S = o.ZP.connectStores([x.Z], () => ({ hideValue: x.Z.hideInstantInvites }))((e) => {
        let { value: n, autoFocus: t, hideValue: r, onCopy: s, disabled: o } = e,
            [u, x] = i.useState(!1),
            [m, g] = i.useState(!1),
            v = i.useMemo(() => new c.sW(1000, () => g(!1)), [g]);
        return (
            i.useEffect(
                () => () => {
                    v.cancel();
                },
                [v]
            ),
            (0, l.jsxs)('div', {
                className: a()(C.input, E.__invalid_flexJustifyBetween, E.flexCenter, {
                    [C.success]: m,
                    [C.focused]: u
                }),
                children: [
                    (0, l.jsx)(d.TextInput, {
                        className: p.copyInput,
                        name: 'invite',
                        value: r ? I.intl.string(I.t['6HzNgY']) : n,
                        editable: !1,
                        inputClassName: p.input,
                        autoFocus: t,
                        onFocus: () => (t ? x(!0) : null),
                        onBlur: () => (t ? x(!1) : null),
                        spellCheck: 'false',
                        onClick: (e) => e.currentTarget.select(),
                        'aria-label': I.intl.string(I.t.qreV29),
                        disabled: o
                    }),
                    h.wS
                        ? (0, l.jsx)(d.Button, {
                              size: d.Button.Sizes.SMALL,
                              color: m ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
                              className: p.copyButton,
                              onClick: () => {
                                  g(!0), v.delay(), s(n);
                              },
                              disabled: o,
                              children: m ? I.intl.string(I.t.q30c5u) : I.intl.string(I.t.OpuAlJ)
                          })
                        : null
                ]
            })
        );
    }),
    b = (e) => {
        let { guild: n, noInvitesAvailable: t, showFriends: r, onClose: o, modalState: c, isGuestInviteCreationToggleEnabled: x, inviteFlags: C, setInviteFlags: E, showGuestInviteToggleForCurrentVoiceChannel: b, copyValue: y, changePage: Z, inviteChannel: _, source: k, code: R, guildScheduledEvent: A, disabled: D } = e,
            { maxAge: L, maxUses: B, networkError: z, showVanityURL: M } = c,
            G = i.useCallback(() => {
                (0, h.JG)(y),
                    m.default.track(N.rMx.COPY_INSTANT_INVITE, {
                        server: u.Z.getGuildId(),
                        channel: null == _ ? void 0 : _.id,
                        channel_type: null == _ ? void 0 : _.type,
                        location: k,
                        code: R,
                        guild_scheduled_event_id: null == A ? void 0 : A.id
                    });
            }, [y, _, k, R, A]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(S, {
                    value: y,
                    autoFocus: r,
                    onCopy: G,
                    disabled: D
                }),
                x
                    ? (0, l.jsx)('div', {
                          className: p.temporaryMembershipContainerBackground,
                          children: (0, l.jsx)(d.FormSwitch, {
                              className: p.temporaryMembershipContainer,
                              value: (0, g.yE)(C, s.$.IS_GUEST_INVITE),
                              onChange: (e) => E((0, g.mB)(C, s.$.IS_GUEST_INVITE, e)),
                              note: I.intl.string(I.t['/FeTKy']),
                              disabled: D,
                              hideBorder: !0,
                              children: b ? I.intl.string(I.t.BPL98f) : I.intl.string(I.t['2snqsL'])
                          })
                      })
                    : null,
                t || M
                    ? null
                    : (0, l.jsxs)(d.Text, {
                          variant: 'text-xs/normal',
                          className: a()(T.marginTop8, p.footerText),
                          children: [
                              (0, v.Vg)(L, B),
                              ' ',
                              r
                                  ? (0, l.jsx)(d.Anchor, {
                                        onClick: () => Z(f.RV.SETTINGS),
                                        children: I.intl.string(I.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !t && r && M
                    ? (0, l.jsxs)(d.Text, {
                          variant: 'text-xs/normal',
                          className: a()(T.marginTop8, p.footerText),
                          children: [
                              I.intl.string(I.t['0M2U9/']),
                              ' ',
                              (0, l.jsx)(d.Anchor, {
                                  onClick: () => Z(f.RV.SETTINGS),
                                  children: I.intl.string(I.t.VNe8Pz)
                              })
                          ]
                      })
                    : null,
                null != z
                    ? (0, l.jsx)(j.W, {
                          guild: n,
                          error: z,
                          onClose: o
                      })
                    : null
            ]
        });
    };
