"use strict";
l.r(t), l.d(t, {
  default: function() {
    return F
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("512722"),
  o = l.n(r),
  d = l("392711"),
  u = l.n(d),
  c = l("399606"),
  f = l("692547"),
  I = l("481060"),
  m = l("447543"),
  T = l("225433"),
  E = l("129861"),
  N = l("493544"),
  _ = l("700582"),
  S = l("410030"),
  h = l("933557"),
  g = l("154285"),
  p = l("666657"),
  O = l("487419"),
  A = l("664452"),
  C = l("560114"),
  x = l("699516"),
  R = l("594174"),
  M = l("373791"),
  L = l("186095"),
  v = l("285952"),
  j = l("759231"),
  P = l("965638"),
  b = l("302434"),
  D = l("981631"),
  y = l("689938"),
  G = l("877602"),
  B = l("164149"),
  k = l("611273");
let U = {
  INVITER: 3,
  INVITE_CODE: 3,
  USES: 1,
  EXPIRES: 2
};

function H(e) {
  var t, l;
  let {
    invite: a,
    showChannel: s = !1,
    inviteDisabled: r = !1,
    hide: o = !1
  } = e, d = a.uses;
  return a.maxUses > 0 && (d = "".concat(a.uses, "/").concat(a.maxUses)), (0, n.jsxs)(v.default, {
    className: i()(G.inviteSettingsInviteRow, B.card, {
      [G.inviteDisabledRow]: r
    }),
    children: [(0, n.jsx)(v.default, {
      grow: U.INVITER,
      basis: 0,
      align: v.default.Align.CENTER,
      className: i()(G.text),
      children: (0, n.jsxs)(v.default.Child, {
        children: [null == (t = a.inviter) ? null : (0, n.jsxs)("div", {
          className: G.user,
          children: [(0, n.jsx)(_.default, {
            user: t,
            size: I.AvatarSizes.SIZE_20,
            className: G.avatar
          }), (0, n.jsx)(E.default, {
            className: G.username,
            discriminatorClass: G.discriminator,
            user: t
          })]
        }), (l = a.channel, s ? (0, n.jsx)(I.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: (0, h.computeChannelName)(l, R.default, x.default, !0)
        }) : null)]
      })
    }), (0, n.jsx)(v.default, {
      grow: U.INVITE_CODE,
      shrink: 1,
      basis: 0,
      align: v.default.Align.CENTER,
      className: G.text,
      children: (0, n.jsx)(I.Text, {
        className: G.inviteCode,
        variant: "text-sm/normal",
        children: o ? "..." : a.code
      })
    }), (0, n.jsx)(v.default, {
      grow: U.USES,
      basis: 0,
      justify: v.default.Justify.END,
      align: v.default.Align.CENTER,
      className: i()(G.text),
      children: (0, n.jsx)(I.Text, {
        className: G.uses,
        variant: "text-sm/normal",
        children: d
      })
    }), (0, n.jsx)(v.default, {
      grow: U.EXPIRES,
      basis: 0,
      align: v.default.Align.CENTER,
      justify: v.default.Justify.END,
      className: i()(G.text, G.countdownColumn),
      children: (0, n.jsx)(I.Text, {
        className: G.countdown,
        variant: "text-sm/normal",
        children: (0, n.jsx)(M.default, {
          deadline: a.getExpiresAt()
        })
      })
    }), (0, n.jsx)(T.default, {
      className: G.revokeInvite,
      onClick: () => {
        m.default.revokeInvite(a)
      }
    })]
  })
}

function F(e) {
  let {
    invites: t,
    guild: s,
    hide: i,
    channel: r = null,
    showChannel: d = !1,
    loading: m = !1,
    canCreateInvites: T = !1
  } = e;
  o()(null != s, "guild is required");
  let E = (0, P.useInvitesDisabledPermission)(s),
    {
      enableInvitesDisabled: _
    } = (0, P.useInvitesDisabledExperiment)(s),
    {
      showAlertMode: h
    } = (0, g.useGuildAlertModeEnabled)(s.id),
    x = (0, c.useStateFromStores)([O.default], () => O.default.getGuildIncident(s.id)),
    R = s.hasFeature(D.GuildFeatures.INVITES_DISABLED) || h && (null == x ? void 0 : x.invitesDisabledUntil) != null && new Date(x.invitesDisabledUntil) > new Date,
    [M, B] = a.useState(!1);
  a.useEffect(() => {
    E && P.InvitesDisabledExperiment.trackExposure({
      guildId: s.id,
      location: "5c23b0_1"
    })
  }, [E, _, s.id]);
  let F = (0, S.default)(),
    w = a.useMemo(() => null == t || m ? [] : u()(t).sortBy(e => {
      var t, l;
      return (null !== (l = null === (t = e.inviter) || void 0 === t ? void 0 : t.username) && void 0 !== l ? l : "").toLowerCase()
    }).value(), [t, m]),
    W = () => {
      (0, I.openModalLazy)(async () => e => (0, n.jsx)(C.default, {
        ...e,
        channel: r,
        guild: s,
        source: D.InstantInviteSources.SETTINGS_INVITE
      }))
    },
    V = async e => {
      if (!M) {
        B(!0);
        try {
          await (0, P.setInvitesDisabled)(s, e)
        } catch (e) {} finally {
          B(!1)
        }
      }
    }, K = () => {
      if (h) {
        let e = {
          source: p.GuildIncidentActionSources.GUILD_SETTINGS
        };
        (0, I.openModalLazy)(async () => t => (0, n.jsx)(A.default, {
          ...t,
          guildId: s.id,
          analyticsData: e
        }))
      } else R ? V(!1) : (0, I.openModalLazy)(async () => function(e) {
        return (0, n.jsx)(b.default, {
          ...e,
          onConfirm: () => V(!0)
        })
      })
    };
  return (0, n.jsx)(N.ListContentScroller, {
    sections: [Math.max(1, w.length)],
    renderSection: () => {
      let e;
      return e = 0 !== w.length || m ? (0, n.jsxs)(v.default, {
        children: [(0, n.jsx)(v.default.Child, {
          grow: U.INVITER,
          basis: 0,
          className: k.marginReset,
          children: (0, n.jsx)(I.FormTitle, {
            children: y.default.Messages.INSTANT_INVITE_INVITER
          })
        }), (0, n.jsx)(v.default.Child, {
          basis: 0,
          grow: U.INVITE_CODE,
          className: k.marginReset,
          children: (0, n.jsx)(I.FormTitle, {
            children: y.default.Messages.INSTANT_INVITE_INVITE_CODE
          })
        }), (0, n.jsx)(v.default.Child, {
          grow: U.USES,
          basis: 0,
          className: G.textAlignRight,
          children: (0, n.jsx)(I.FormTitle, {
            children: y.default.Messages.INSTANT_INVITE_USES
          })
        }), (0, n.jsx)(v.default.Child, {
          grow: U.EXPIRES,
          basis: 0,
          className: G.textAlignRight,
          children: (0, n.jsx)(I.FormTitle, {
            children: y.default.Messages.INSTANT_INVITE_EXPIRES
          })
        })]
      }) : (0, n.jsxs)(L.default, {
        theme: F,
        children: [(0, n.jsx)(L.EmptyStateImage, {
          darkSrc: l("914814"),
          lightSrc: l("370392"),
          width: 256,
          height: 130
        }), (0, n.jsx)(L.EmptyStateText, {
          note: y.default.Messages.NO_INVITES_BODY,
          children: y.default.Messages.NO_INVITES_LABEL
        })]
      }), (0, n.jsx)(I.FormSection, {
        className: G.headerSection,
        children: (0, n.jsxs)(I.HeadingLevel, {
          component: (0, n.jsx)(I.FormTitle, {
            tag: I.FormTitleTags.H1,
            children: y.default.Messages.INVITES
          }),
          children: [(0, n.jsx)(I.FormText, {
            className: k.marginBottom20,
            type: I.FormTextTypes.DESCRIPTION,
            children: T ? y.default.Messages.SETTINGS_INVITE_TIP.format({
              onCreateInvite: W
            }) : y.default.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
          }), (_ || h || R) && (0, n.jsxs)("div", {
            className: G.inviteDisabledContainer,
            children: [(0, n.jsx)(I.Button, {
              size: I.Button.Sizes.SMALL,
              color: R ? I.Button.Colors.BRAND : I.Button.Colors.RED,
              disabled: !E,
              submitting: M,
              onClick: K,
              children: R ? y.default.Messages.ENABLE_INVITES : y.default.Messages.DISABLE_INVITES
            }), R && (0, n.jsxs)("div", {
              className: G.inviteDisabledTip,
              children: [(0, n.jsx)(j.default, {
                color: f.default.unsafe_rawColors.YELLOW_300.css
              }), (0, n.jsx)(I.Text, {
                variant: "text-sm/normal",
                children: y.default.Messages.INVITES_DISABLED_TIP
              })]
            })]
          }), (0, n.jsx)(I.FormDivider, {
            className: G.headerDivider
          }), e]
        })
      }, "header")
    },
    renderRow: e => {
      let {
        section: t,
        row: l
      } = e;
      if (0 === w.length && 0 === l && m) return (0, n.jsx)(I.Spinner, {
        className: k.marginTop20,
        type: I.Spinner.Type.SPINNING_CIRCLE
      }, "spinner");
      if (t > 0) return null;
      let a = w[l];
      return null == a ? null : (0, n.jsx)(H, {
        hide: i,
        invite: a,
        showChannel: d,
        inviteDisabled: R
      }, a.code)
    },
    rowHeight: (e, t) => e > 0 ? 0 : 0 === w.length && 0 === t && m ? 62 : null != w[t] ? 62 : 0,
    sectionHeight: () => 0 !== w.length || m ? 120 : 344
  })
}