n.d(t, {
  m: function() {
    return v
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(239091),
  u = n(749210),
  d = n(134432),
  h = n(769654),
  m = n(601964),
  p = n(430824),
  E = n(940627),
  g = n(346656),
  f = n(806519),
  C = n(404975),
  _ = n(768581),
  I = n(683818),
  x = n(16853),
  T = n(981631),
  N = n(689938),
  Z = n(699996),
  S = n(883760);
let v = e => {
  let {
    onClick: t
  } = e;
  return (0, l.jsxs)(o.Clickable, {
    onClick: t,
    className: Z.addEntryCard,
    children: [(0, l.jsx)("img", {
      alt: "",
      src: S
    }), (0, l.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      className: Z.addServerText,
      children: N.Z.Messages.HUB_ADD_SERVER_CTA
    })]
  })
};

function A(e) {
  let {
    entry: t
  } = e, [s, r] = i.useState(!1), {
    canEdit: c
  } = (0, I.Z)(t);
  return (0, l.jsx)("div", {
    className: a()(Z.actionButtonsContainer, {
      [Z.forceButtonsShow]: s
    }),
    children: (0, l.jsxs)(C.ZP, {
      children: [c ? (0, l.jsx)(o.Tooltip, {
        text: N.Z.Messages.HUB_ENTRY_UPDATE,
        hideOnClick: !0,
        children: e => {
          let {
            onClick: i,
            ...s
          } = e;
          return (0, l.jsx)(C.zx, {
            ...s,
            onClick: () => {
              null == i || i(), (0, o.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("34191")]).then(n.bind(n, 303647));
                return n => (0, l.jsx)(e, {
                  ...n,
                  entry: t
                })
              })
            },
            "aria-label": N.Z.Messages.HUB_ENTRY_UPDATE,
            children: (0, l.jsx)(o.PencilIcon, {
              size: "xs",
              color: "currentColor",
              className: Z.overflowIcon
            })
          })
        }
      }) : null, (0, l.jsx)(x.Z, {
        onRequestOpen: () => r(!0),
        onRequestClose: () => r(!1),
        entry: t,
        hideEditButton: !0,
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return (0, l.jsx)(o.Tooltip, {
            text: N.Z.Messages.MORE,
            hideOnClick: !0,
            children: e => {
              let {
                onClick: i,
                ...s
              } = e;
              return (0, l.jsx)(C.zx, {
                ...n,
                ...s,
                onClick: e => {
                  null == i || i(), t(e)
                },
                "aria-label": N.Z.Messages.MORE,
                children: (0, l.jsx)(o.MoreHorizontalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: Z.overflowIcon
                })
              })
            }
          })
        }
      })]
    })
  })
}
t.Z = e => {
  var t;
  let {
    entry: s
  } = e, [a, C] = i.useState(!1), I = null != (0, r.e7)([p.Z], () => p.Z.getGuild(s.guildId)), x = async () => {
    C(!0);
    try {
      I ? (0, h.X)(s.guildId) : await u.Z.joinGuild(s.guildId, {
        source: T.vtS.DIRECTORY_ENTRY
      })
    } finally {
      C(!1)
    }
  }, S = _.ZP.getGuildSplashURL({
    id: s.guildId,
    splash: s.splash,
    size: 300 * (0, d.x_)()
  }), v = null !== (t = _.ZP.getGuildIconURL({
    id: s.guildId,
    icon: s.icon,
    size: 40
  })) && void 0 !== t ? t : void 0, M = N.Z.Messages.JOIN;
  return I && (M = N.Z.Messages.HUB_DIRECTORY_CARD_JOINED_GUILD_BUTTON), (0, l.jsxs)("div", {
    className: Z.card,
    onContextMenu: e => {
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 643560));
        return t => (0, l.jsx)(e, {
          ...t,
          entry: s
        })
      })
    },
    children: [(0, l.jsxs)("div", {
      className: Z.cardHeader,
      children: [(0, l.jsx)("div", {
        className: Z.splash,
        children: null != S && (0, l.jsx)("img", {
          src: S,
          alt: "",
          className: Z.splashImage
        })
      }), (0, l.jsx)("div", {
        className: Z.guildIcon,
        children: (0, l.jsx)(f.ZP, {
          mask: f.ZP.Masks.SQUIRCLE,
          width: 48,
          height: 48,
          children: (0, l.jsx)("div", {
            className: Z.iconMask,
            children: (0, l.jsx)(g.Z, {
              className: Z.icon,
              iconSrc: v,
              guild: new m.ZP(s),
              size: g.Z.Sizes.MEDIUM,
              active: !0
            })
          })
        })
      })]
    }), (0, l.jsxs)("div", {
      className: Z.guildInfo,
      children: [(0, l.jsxs)("div", {
        className: Z.title,
        children: [(0, l.jsx)(E.Z, {
          className: Z.guildBadge,
          guild: s,
          tooltipColor: o.Tooltip.Colors.PRIMARY
        }), (0, l.jsx)(o.Text, {
          className: Z.guildName,
          variant: "heading-md/semibold",
          color: "header-primary",
          children: s.name
        })]
      }), (0, l.jsx)(o.Text, {
        className: Z.description,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: s.description
      }), (0, l.jsxs)("div", {
        className: Z.memberInfo,
        children: [null != s.approximatePresenceCount && (0, l.jsxs)("div", {
          className: Z.memberCount,
          children: [(0, l.jsx)("div", {
            className: Z.dotOnline
          }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
              membersOnline: s.approximatePresenceCount
            })
          })]
        }), null != s.approximateMemberCount && (0, l.jsxs)("div", {
          className: Z.memberCount,
          children: [(0, l.jsx)("div", {
            className: Z.dotOffline
          }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: s.approximateMemberCount
            })
          })]
        })]
      }), (0, l.jsx)(o.Button, {
        submitting: a,
        className: Z.joinButton,
        color: I ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
        onClick: x,
        children: M
      })]
    }), (0, l.jsx)(A, {
      entry: s
    })]
  })
}