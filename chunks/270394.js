t.d(n, {
  Z: function() {
    return k
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  s = t(120356),
  a = t.n(s),
  r = t(512722),
  o = t.n(r),
  c = t(392711),
  d = t.n(c),
  u = t(399606),
  I = t(692547),
  N = t(481060),
  E = t(447543),
  T = t(225433),
  m = t(129861),
  _ = t(493544),
  h = t(700582),
  g = t(410030),
  O = t(933557),
  A = t(154285),
  x = t(666657),
  C = t(487419),
  S = t(664452),
  p = t(560114),
  R = t(699516),
  Z = t(594174),
  f = t(373791),
  M = t(285952),
  L = t(965638),
  v = t(302434),
  j = t(981631),
  b = t(689938),
  P = t(735916),
  D = t(5973),
  B = t(331651);
let G = {
  INVITER: 3,
  INVITE_CODE: 3,
  USES: 1,
  EXPIRES: 2
};

function y(e) {
  var n, t;
  let {
    invite: l,
    showChannel: s = !1,
    inviteDisabled: r = !1,
    hide: o = !1
  } = e, c = l.uses;
  return l.maxUses > 0 && (c = "".concat(l.uses, "/").concat(l.maxUses)), (0, i.jsxs)(M.Z, {
    className: a()(P.inviteSettingsInviteRow, D.card, {
      [P.inviteDisabledRow]: r
    }),
    children: [(0, i.jsx)(M.Z, {
      grow: G.INVITER,
      basis: 0,
      align: M.Z.Align.CENTER,
      className: a()(P.text),
      children: (0, i.jsxs)(M.Z.Child, {
        children: [null == (n = l.inviter) ? null : (0, i.jsxs)("div", {
          className: P.user,
          children: [(0, i.jsx)(h.Z, {
            user: n,
            size: N.AvatarSizes.SIZE_20,
            className: P.avatar
          }), (0, i.jsx)(m.Z, {
            className: P.username,
            discriminatorClass: P.discriminator,
            user: n
          })]
        }), (t = l.channel, s ? (0, i.jsx)(N.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: (0, O.F6)(t, Z.default, R.Z, !0)
        }) : null)]
      })
    }), (0, i.jsx)(M.Z, {
      grow: G.INVITE_CODE,
      shrink: 1,
      basis: 0,
      align: M.Z.Align.CENTER,
      className: P.text,
      children: (0, i.jsx)(N.Text, {
        className: P.inviteCode,
        variant: "text-sm/normal",
        children: o ? "..." : l.code
      })
    }), (0, i.jsx)(M.Z, {
      grow: G.USES,
      basis: 0,
      justify: M.Z.Justify.END,
      align: M.Z.Align.CENTER,
      className: a()(P.text),
      children: (0, i.jsx)(N.Text, {
        className: P.uses,
        variant: "text-sm/normal",
        children: c
      })
    }), (0, i.jsx)(M.Z, {
      grow: G.EXPIRES,
      basis: 0,
      align: M.Z.Align.CENTER,
      justify: M.Z.Justify.END,
      className: a()(P.text, P.countdownColumn),
      children: (0, i.jsx)(N.Text, {
        className: P.countdown,
        variant: "text-sm/normal",
        children: (0, i.jsx)(f.Z, {
          deadline: l.getExpiresAt()
        })
      })
    }), (0, i.jsx)(T.Z, {
      className: P.revokeInvite,
      onClick: () => {
        E.Z.revokeInvite(l)
      }
    })]
  })
}

function k(e) {
  let {
    invites: n,
    guild: s,
    hide: a,
    channel: r = null,
    showChannel: c = !1,
    loading: E = !1,
    canCreateInvites: T = !1
  } = e;
  o()(null != s, "guild is required");
  let m = (0, L.MQ)(s),
    {
      enableInvitesDisabled: h
    } = (0, L.FR)(s),
    {
      showAlertMode: O
    } = (0, A.sw)(s.id),
    R = (0, u.e7)([C.Z], () => C.Z.getGuildIncident(s.id)),
    Z = s.hasFeature(j.oNc.INVITES_DISABLED) || O && (null == R ? void 0 : R.invitesDisabledUntil) != null && new Date(R.invitesDisabledUntil) > new Date,
    [f, D] = l.useState(!1);
  l.useEffect(() => {
    m && L.WC.trackExposure({
      guildId: s.id,
      location: "5c23b0_1"
    })
  }, [m, h, s.id]);
  let k = (0, g.ZP)(),
    U = l.useMemo(() => null == n || E ? [] : d()(n).sortBy(e => {
      var n, t;
      return (null !== (t = null === (n = e.inviter) || void 0 === n ? void 0 : n.username) && void 0 !== t ? t : "").toLowerCase()
    }).value(), [n, E]),
    H = () => {
      (0, N.openModalLazy)(async () => e => (0, i.jsx)(p.default, {
        ...e,
        channel: r,
        guild: s,
        source: j.t4x.SETTINGS_INVITE
      }))
    },
    W = async e => {
      if (!f) {
        D(!0);
        try {
          await (0, L.AG)(s, e)
        } catch (e) {} finally {
          D(!1)
        }
      }
    }, w = () => {
      if (O) {
        let e = {
          source: x.Zu.GUILD_SETTINGS
        };
        (0, N.openModalLazy)(async () => n => (0, i.jsx)(S.default, {
          ...n,
          guildId: s.id,
          analyticsData: e
        }))
      } else Z ? W(!1) : (0, N.openModalLazy)(async () => function(e) {
        return (0, i.jsx)(v.Z, {
          ...e,
          onConfirm: () => W(!0)
        })
      })
    };
  return (0, i.jsx)(_.Xi, {
    sections: [Math.max(1, U.length)],
    renderSection: () => {
      let e;
      return e = 0 !== U.length || E ? (0, i.jsxs)(M.Z, {
        children: [(0, i.jsx)(M.Z.Child, {
          grow: G.INVITER,
          basis: 0,
          className: B.marginReset,
          children: (0, i.jsx)(N.FormTitle, {
            children: b.Z.Messages.INSTANT_INVITE_INVITER
          })
        }), (0, i.jsx)(M.Z.Child, {
          basis: 0,
          grow: G.INVITE_CODE,
          className: B.marginReset,
          children: (0, i.jsx)(N.FormTitle, {
            children: b.Z.Messages.INSTANT_INVITE_INVITE_CODE
          })
        }), (0, i.jsx)(M.Z.Child, {
          grow: G.USES,
          basis: 0,
          className: P.textAlignRight,
          children: (0, i.jsx)(N.FormTitle, {
            children: b.Z.Messages.INSTANT_INVITE_USES
          })
        }), (0, i.jsx)(M.Z.Child, {
          grow: G.EXPIRES,
          basis: 0,
          className: P.textAlignRight,
          children: (0, i.jsx)(N.FormTitle, {
            children: b.Z.Messages.INSTANT_INVITE_EXPIRES
          })
        })]
      }) : (0, i.jsxs)(N.EmptyState, {
        theme: k,
        children: [(0, i.jsx)(N.EmptyStateImage, {
          darkSrc: t(914814),
          lightSrc: t(370392),
          width: 256,
          height: 130
        }), (0, i.jsx)(N.EmptyStateText, {
          note: b.Z.Messages.NO_INVITES_BODY,
          children: b.Z.Messages.NO_INVITES_LABEL
        })]
      }), (0, i.jsx)(N.FormSection, {
        className: P.headerSection,
        children: (0, i.jsxs)(N.HeadingLevel, {
          component: (0, i.jsx)(N.FormTitle, {
            tag: N.FormTitleTags.H1,
            children: b.Z.Messages.INVITES
          }),
          children: [(0, i.jsx)(N.FormText, {
            className: B.marginBottom20,
            type: N.FormTextTypes.DESCRIPTION,
            children: T ? b.Z.Messages.SETTINGS_INVITE_TIP.format({
              onCreateInvite: H
            }) : b.Z.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
          }), (h || O || Z) && (0, i.jsxs)("div", {
            className: P.inviteDisabledContainer,
            children: [(0, i.jsx)(N.Button, {
              size: N.Button.Sizes.SMALL,
              color: Z ? N.Button.Colors.BRAND : N.Button.Colors.RED,
              disabled: !m,
              submitting: f,
              onClick: w,
              children: Z ? b.Z.Messages.ENABLE_INVITES : b.Z.Messages.DISABLE_INVITES
            }), Z && (0, i.jsxs)("div", {
              className: P.inviteDisabledTip,
              children: [(0, i.jsx)(N.CircleExclamationPointIcon, {
                size: "custom",
                width: 20,
                height: 20,
                color: I.Z.unsafe_rawColors.YELLOW_300.css
              }), (0, i.jsx)(N.Text, {
                variant: "text-sm/normal",
                children: b.Z.Messages.INVITES_DISABLED_TIP
              })]
            })]
          }), (0, i.jsx)(N.FormDivider, {
            className: P.headerDivider
          }), e]
        })
      }, "header")
    },
    renderRow: e => {
      let {
        section: n,
        row: t
      } = e;
      if (0 === U.length && 0 === t && E) return (0, i.jsx)(N.Spinner, {
        className: B.marginTop20,
        type: N.Spinner.Type.SPINNING_CIRCLE
      }, "spinner");
      if (n > 0) return null;
      let l = U[t];
      return null == l ? null : (0, i.jsx)(y, {
        hide: a,
        invite: l,
        showChannel: c,
        inviteDisabled: Z
      }, l.code)
    },
    rowHeight: (e, n) => e > 0 ? 0 : 0 === U.length && 0 === n && E ? 62 : null != U[n] ? 62 : 0,
    sectionHeight: () => 0 !== U.length || E ? 120 : 344
  })
}