t.d(n, {
    Z: function () {
        return B;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(512722),
    s = t.n(o),
    d = t(392711),
    c = t.n(d),
    u = t(399606),
    m = t(692547),
    h = t(481060),
    p = t(447543),
    g = t(225433),
    f = t(129861),
    x = t(493544),
    b = t(700582),
    v = t(410030),
    C = t(933557),
    I = t(346486),
    N = t(600164),
    T = t(666657),
    _ = t(487419),
    j = t(664452),
    S = t(560114),
    E = t(699516),
    Z = t(594174),
    A = t(965638),
    y = t(981631),
    R = t(388032),
    O = t(690873),
    L = t(869042),
    k = t(113207);
let w = {
    INVITER: 3,
    INVITE_CODE: 3,
    USES: 1,
    EXPIRES: 2
};
function M(e) {
    var n, t;
    let { invite: l, showChannel: r = !1, inviteDisabled: o = !1, hide: s = !1 } = e,
        d = l.uses;
    return (
        l.maxUses > 0 && (d = ''.concat(l.uses, '/').concat(l.maxUses)),
        (0, i.jsxs)(N.Z, {
            className: a()(O.inviteSettingsInviteRow, L.card, { [O.inviteDisabledRow]: o }),
            children: [
                (0, i.jsx)(N.Z, {
                    grow: w.INVITER,
                    basis: 0,
                    align: N.Z.Align.CENTER,
                    className: a()(O.text),
                    children: (0, i.jsxs)(N.Z.Child, {
                        children: [
                            null == (n = l.inviter)
                                ? null
                                : (0, i.jsxs)('div', {
                                      className: O.user,
                                      children: [
                                          (0, i.jsx)(b.Z, {
                                              user: n,
                                              size: h.AvatarSizes.SIZE_20,
                                              className: O.avatar
                                          }),
                                          (0, i.jsx)(f.Z, {
                                              className: O.username,
                                              discriminatorClass: O.discriminator,
                                              user: n
                                          })
                                      ]
                                  }),
                            ((t = l.channel),
                            r
                                ? (0, i.jsx)(h.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: (0, C.F6)(t, Z.default, E.Z, !0)
                                  })
                                : null)
                        ]
                    })
                }),
                (0, i.jsx)(N.Z, {
                    grow: w.INVITE_CODE,
                    shrink: 1,
                    basis: 0,
                    align: N.Z.Align.CENTER,
                    className: O.text,
                    children: (0, i.jsx)(h.Text, {
                        className: O.inviteCode,
                        variant: 'text-sm/normal',
                        children: s ? '...' : l.code
                    })
                }),
                (0, i.jsx)(N.Z, {
                    grow: w.USES,
                    basis: 0,
                    justify: N.Z.Justify.END,
                    align: N.Z.Align.CENTER,
                    className: a()(O.text),
                    children: (0, i.jsx)(h.Text, {
                        className: O.uses,
                        variant: 'text-sm/normal',
                        children: d
                    })
                }),
                (0, i.jsx)(N.Z, {
                    grow: w.EXPIRES,
                    basis: 0,
                    align: N.Z.Align.CENTER,
                    justify: N.Z.Justify.END,
                    className: a()(O.text, O.countdownColumn),
                    children: (0, i.jsx)(h.Text, {
                        className: O.countdown,
                        variant: 'text-sm/normal',
                        children: (0, i.jsx)(I.Z, { deadline: l.getExpiresAt() })
                    })
                }),
                (0, i.jsx)(g.Z, {
                    className: O.revokeInvite,
                    onClick: () => {
                        p.Z.revokeInvite(l);
                    }
                })
            ]
        })
    );
}
function B(e) {
    let { invites: n, guild: r, hide: a, channel: o = null, showChannel: d = !1, loading: p = !1, canCreateInvites: g = !1 } = e;
    s()(null != r, 'guild is required');
    let f = (0, A.M)(r),
        b = (0, u.e7)([_.Z], () => _.Z.getGuildIncident(r.id)),
        C = r.hasFeature(y.oNc.INVITES_DISABLED) || ((null == b ? void 0 : b.invitesDisabledUntil) != null && new Date(b.invitesDisabledUntil) > new Date()),
        I = (0, v.ZP)(),
        E = l.useMemo(
            () =>
                null == n || p
                    ? []
                    : c()(n)
                          .sortBy((e) => {
                              var n, t;
                              return (null !== (t = null === (n = e.inviter) || void 0 === n ? void 0 : n.username) && void 0 !== t ? t : '').toLowerCase();
                          })
                          .value(),
            [n, p]
        ),
        Z = () => {
            (0, h.openModalLazy)(
                async () => (e) =>
                    (0, i.jsx)(S.default, {
                        ...e,
                        channel: o,
                        guild: r,
                        source: y.t4x.SETTINGS_INVITE
                    })
            );
        },
        L = () => {
            let e = { source: T.Zu.GUILD_SETTINGS };
            (0, h.openModalLazy)(
                async () => (n) =>
                    (0, i.jsx)(j.default, {
                        ...n,
                        guildId: r.id,
                        analyticsData: e
                    })
            );
        };
    return (0, i.jsx)(x.Xi, {
        sections: [Math.max(1, E.length)],
        renderSection: () => {
            let e;
            return (
                (e =
                    0 !== E.length || p
                        ? (0, i.jsxs)(N.Z, {
                              children: [
                                  (0, i.jsx)(N.Z.Child, {
                                      grow: w.INVITER,
                                      basis: 0,
                                      className: k.marginReset,
                                      children: (0, i.jsx)(h.FormTitle, { children: R.intl.string(R.t.EgHyKy) })
                                  }),
                                  (0, i.jsx)(N.Z.Child, {
                                      basis: 0,
                                      grow: w.INVITE_CODE,
                                      className: k.marginReset,
                                      children: (0, i.jsx)(h.FormTitle, { children: R.intl.string(R.t.LBlFEB) })
                                  }),
                                  (0, i.jsx)(N.Z.Child, {
                                      grow: w.USES,
                                      basis: 0,
                                      className: O.textAlignRight,
                                      children: (0, i.jsx)(h.FormTitle, { children: R.intl.string(R.t.erWrmJ) })
                                  }),
                                  (0, i.jsx)(N.Z.Child, {
                                      grow: w.EXPIRES,
                                      basis: 0,
                                      className: O.textAlignRight,
                                      children: (0, i.jsx)(h.FormTitle, { children: R.intl.string(R.t['1aM27e']) })
                                  })
                              ]
                          })
                        : (0, i.jsxs)(h.EmptyState, {
                              theme: I,
                              children: [
                                  (0, i.jsx)(h.EmptyStateImage, {
                                      darkSrc: t(914814),
                                      lightSrc: t(370392),
                                      width: 256,
                                      height: 130
                                  }),
                                  (0, i.jsx)(h.EmptyStateText, {
                                      note: R.intl.string(R.t.F53CAQ),
                                      children: R.intl.string(R.t['+nLJkZ'])
                                  })
                              ]
                          })),
                (0, i.jsx)(
                    h.FormSection,
                    {
                        className: O.headerSection,
                        children: (0, i.jsxs)(h.HeadingLevel, {
                            component: (0, i.jsx)(h.FormTitle, {
                                tag: h.FormTitleTags.H1,
                                children: R.intl.string(R.t['9F90iY'])
                            }),
                            children: [
                                (0, i.jsx)(h.FormText, {
                                    className: k.marginBottom20,
                                    type: h.FormTextTypes.DESCRIPTION,
                                    children: g ? R.intl.format(R.t['97VdNj'], { onCreateInvite: Z }) : R.intl.string(R.t.WDw38P)
                                }),
                                (0, i.jsxs)('div', {
                                    className: O.inviteDisabledContainer,
                                    children: [
                                        (0, i.jsx)(h.Button, {
                                            size: h.Button.Sizes.SMALL,
                                            color: C ? h.Button.Colors.BRAND : h.Button.Colors.RED,
                                            disabled: !f,
                                            onClick: L,
                                            children: C ? R.intl.string(R.t['/dbw3N']) : R.intl.string(R.t.Uwsjn5)
                                        }),
                                        C &&
                                            (0, i.jsxs)('div', {
                                                className: O.inviteDisabledTip,
                                                children: [
                                                    (0, i.jsx)(h.CircleWarningIcon, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20,
                                                        color: m.Z.unsafe_rawColors.YELLOW_300.css
                                                    }),
                                                    (0, i.jsx)(h.Text, {
                                                        variant: 'text-sm/normal',
                                                        children: R.intl.string(R.t['2LLbj4'])
                                                    })
                                                ]
                                            })
                                    ]
                                }),
                                (0, i.jsx)(h.FormDivider, { className: O.headerDivider }),
                                e
                            ]
                        })
                    },
                    'header'
                )
            );
        },
        renderRow: (e) => {
            let { section: n, row: t } = e;
            if (0 === E.length && 0 === t && p)
                return (0, i.jsx)(
                    h.Spinner,
                    {
                        className: k.marginTop20,
                        type: h.Spinner.Type.SPINNING_CIRCLE
                    },
                    'spinner'
                );
            if (n > 0) return null;
            let l = E[t];
            return null == l
                ? null
                : (0, i.jsx)(
                      M,
                      {
                          hide: a,
                          invite: l,
                          showChannel: d,
                          inviteDisabled: C
                      },
                      l.code
                  );
        },
        rowHeight: (e, n) => (e > 0 ? 0 : 0 === E.length && 0 === n && p ? 62 : null != E[n] ? 62 : 0),
        sectionHeight: () => (0 !== E.length || p ? 120 : 344)
    });
}
