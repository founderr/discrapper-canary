n.d(t, {
  Z: function() {
    return Y
  }
});
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(913527),
  o = n.n(r),
  c = n(722770),
  u = n(320285),
  d = n(688813),
  E = n(442837),
  _ = n(692547),
  I = n(481060),
  T = n(256638),
  N = n(528011),
  m = n(666657),
  h = n(533244),
  C = n(825829),
  S = n(226192),
  A = n(36459),
  p = n(434404),
  g = n(103575),
  f = n(204197),
  O = n(592125),
  R = n(271383),
  M = n(594174),
  x = n(467679),
  v = n(702346),
  L = n(464891),
  Z = n(348238),
  P = n(83561),
  D = n(981631),
  j = n(674563),
  U = n(689938),
  y = n(840431);

function b() {
  return (0, s.jsx)("div", {
    className: y.dot
  })
}

function B(e) {
  let {
    message: t,
    compact: n
  } = e, {
    notificationType: i
  } = (0, C.FL)(t);
  switch (i) {
    case C.nj:
    case u.p.RAID:
      return (0, s.jsx)(V, {
        message: t,
        compact: n
      });
    case u.p.MENTION_RAID:
      return (0, s.jsx)(w, {
        message: t,
        compact: n
      });
    case u.p.ACTIVITY_ALERTS_ENABLED:
      return (0, s.jsx)(F, {
        message: t,
        compact: n
      });
    case u.p.INTERACTION_BLOCKED:
      return (0, s.jsx)(G, {
        compact: n
      });
    default:
      return (0, s.jsx)(k, {
        compact: n
      })
  }
}

function k(e) {
  let {
    compact: t
  } = e;
  return (0, s.jsx)(H, {
    compact: t,
    header: (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(I.CircleExclamationPointIcon, {
        size: "xs",
        color: _.Z.colors.HEADER_SECONDARY.css
      }), (0, s.jsx)(I.Text, {
        variant: "text-md/semibold",
        color: "header-secondary",
        children: U.Z.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_TITLE
      })]
    }),
    content: (0, s.jsx)(I.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: U.Z.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_DESCRIPTION
    })
  })
}

function G(e) {
  let {
    compact: t
  } = e;
  return (0, s.jsx)(H, {
    compact: t,
    header: (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(I.CircleExclamationPointIcon, {
        size: "xs",
        color: _.Z.colors.HEADER_SECONDARY.css
      }), (0, s.jsx)(I.Text, {
        variant: "text-md/semibold",
        color: "header-secondary",
        children: U.Z.Messages.GUILD_AUTOMOD_NOTFICATION_APP_INTERACTION_BLOCKED_TITLE
      })]
    }),
    content: (0, s.jsx)(I.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: U.Z.Messages.GUILD_AUTOMOD_NOTFICATION_APP_INTERACTION_BLOCKED_DESCRIPTION
    })
  })
}

function F(e) {
  var t;
  let {
    message: n,
    compact: l
  } = e, a = M.default.getUser((0, C.Sw)(n)), r = null === (t = O.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id, c = null != r && null != a ? R.ZP.getMember(r, a.id) : null, {
    avatarSrc: u,
    avatarDecorationSrc: d,
    eventHandlers: E
  } = (0, f.Z)({
    user: a,
    guildId: r,
    size: 12
  });
  return (0, s.jsx)(H, {
    compact: l,
    header: (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(I.SettingsInfoIcon, {
        size: "xs",
        color: _.Z.colors.TEXT_POSITIVE.css
      }), (0, s.jsx)(I.Text, {
        variant: "text-md/semibold",
        color: "text-positive",
        children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_TITLE
      })]
    }),
    subheader: (0, s.jsxs)("div", {
      className: y.dotSeparatedRow,
      children: [(0, s.jsx)("div", {
        className: y.alertsEnabledSubHeader,
        children: null != c && null != a && (0, s.jsxs)(i.Fragment, {
          children: [(0, s.jsx)(I.Text, {
            variant: "text-xs/medium",
            color: "text-normal",
            children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_BY_PREFIX
          }), (0, s.jsx)(I.Popout, {
            renderPopout: function(e) {
              return null == a ? (0, s.jsx)(s.Fragment, {}) : (0, s.jsx)(g.Z, {
                ...e,
                location: "AutomodNotification",
                userId: a.id,
                user: a,
                guildId: r,
                channelId: n.channel_id,
                messageId: n.id
              })
            },
            children: e => (0, s.jsxs)(I.Clickable, {
              className: y.alertsEnabledSubHeaderAvatarUsername,
              ...e,
              children: [(0, s.jsx)("div", {
                ...E,
                children: (0, s.jsx)(I.Avatar, {
                  src: u,
                  avatarDecoration: d,
                  size: I.AvatarSizes.SIZE_16,
                  "aria-label": "TODO"
                })
              }), (0, s.jsxs)(I.Text, {
                variant: "text-xs/medium",
                style: {
                  color: null != c.colorString ? c.colorString : _.Z.colors.TEXT_NORMAL.css
                },
                children: [" ", "@", a.username]
              })]
            })
          })]
        })
      }), (0, s.jsx)(b, {}), (0, s.jsx)(I.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: o()(n.timestamp).fromNow()
      })]
    }),
    content: (0, s.jsx)(I.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_DESCRIPTION
    })
  })
}

function V(e) {
  var t;
  let {
    message: l,
    compact: a
  } = e, {
    joinAttempts: r,
    raidDatetime: u,
    dmsSent: T,
    raidType: A,
    resolvedReason: p
  } = (0, C.FL)(l), g = (0, E.e7)([O.Z], () => O.Z.getChannel(l.channel_id), [l.channel_id]), f = null !== (t = null == g ? void 0 : g.guild_id) && void 0 !== t ? t : null, {
    incidentData: R,
    shouldShowIncidentActions: M
  } = (0, N.mI)(f), x = (0, Z.sR)(l.author.id, l.channel_id), v = i.useCallback(() => {
    let e = null == g ? void 0 : g.guild_id;
    null != e && (0, S.kW)(l.id, e)
  }, [l.id, g]), L = A === d.$.DM_RAID, P = L ? I.CircleExclamationPointIcon : I.ChatAlertIcon;
  return (0, s.jsx)(H, {
    compact: a,
    header: (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(P, {
        size: "xs",
        color: _.Z.colors.TEXT_DANGER.css
      }), (0, s.jsx)(I.Text, {
        variant: "text-md/semibold",
        color: "text-danger",
        children: L ? U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_DM_RAID_TITLE : U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_TITLE
      })]
    }),
    subheader: (0, s.jsxs)("div", {
      className: y.dotSeparatedRow,
      children: [null != r && (0, s.jsx)(I.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_JOINS.format({
          joinCount: r
        })
      }), null != T && (0, s.jsx)(I.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_DMS.format({
          dmsSent: T
        })
      }), null != u && (0, s.jsxs)(i.Fragment, {
        children: [(0, s.jsx)(b, {}), (0, s.jsx)(I.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: o()(u).fromNow()
        })]
      })]
    }),
    content: null != u ? (0, s.jsx)(I.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({
        dateTime: u.toLocaleString(U.Z.getLocale(), h.pQ)
      })
    }) : null,
    footerButtons: (0, s.jsxs)("div", {
      className: y.dotSeparatedRow,
      children: [(0, s.jsx)(I.Button, {
        onClick: e => {
          if (null != f && M) {
            let e = {
              source: m.Zu.MESSAGE,
              messageId: l.id,
              alertType: (0, h.T1)(R)
            };
            (0, I.openModalLazy)(async () => {
              let {
                default: t
              } = await Promise.all([n.e("99387"), n.e("58175")]).then(n.bind(n, 664452));
              return n => (0, s.jsx)(t, {
                ...n,
                guildId: f,
                analyticsData: e
              })
            })
          } else x(e)
        },
        color: I.Button.Colors.LINK,
        look: I.Button.Looks.LINK,
        size: I.Button.Sizes.SMALL,
        className: y.buttonStyle,
        children: (0, s.jsx)("div", {
          className: y.footerAction,
          children: M ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(I.LockIcon, {
              size: "xs",
              color: c.Z.BLUE_345,
              className: y.footerIcon
            }), (0, s.jsx)(I.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: U.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
            })]
          }) : (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(I.ShieldIcon, {
              size: "xs",
              color: c.Z.BLUE_345,
              className: y.footerIcon
            }), (0, s.jsx)(I.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: U.Z.Messages.ACTIONS
            })]
          })
        })
      }), (0, s.jsx)(b, {}), (0, s.jsx)(I.Button, {
        onClick: v,
        color: I.Button.Colors.LINK,
        look: I.Button.Looks.LINK,
        size: I.Button.Sizes.SMALL,
        className: y.buttonStyle,
        children: (0, s.jsx)("div", {
          className: y.footerAction,
          children: (0, s.jsx)(I.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: (0, C.ge)(p)
          })
        })
      })]
    })
  })
}

function w(e) {
  var t;
  let {
    message: n,
    compact: l
  } = e, a = null === (t = O.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id, {
    raidDatetime: r,
    decisionId: c,
    suspiciousMentionActivityUntil: u
  } = (0, C.FL)(n);
  return (0, s.jsx)(H, {
    compact: l,
    header: (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(I.CircleExclamationPointIcon, {
        size: "xs",
        color: _.Z.colors.TEXT_DANGER.css
      }), (0, s.jsx)(I.Text, {
        variant: "text-md/semibold",
        color: "text-danger",
        children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_TITLE
      })]
    }),
    subheader: (0, s.jsx)("div", {
      className: y.dotSeparatedRow,
      children: null != r && (0, s.jsx)(I.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: o()(r).fromNow()
      })
    }),
    content: (0, s.jsx)(I.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_DESCRIPTION
    }),
    footerButtons: (0, s.jsxs)("div", {
      className: y.dotSeparatedRow,
      children: [(0, s.jsx)(I.Button, {
        onClick: function() {
          null != a && null != c && (0, A.UE)(a, c, () => {
            (0, T.c)(u), (0, A.T9)(a)
          })
        },
        color: I.Button.Colors.LINK,
        look: I.Button.Looks.LINK,
        size: I.Button.Sizes.SMALL,
        className: y.buttonStyle,
        children: (0, s.jsx)("div", {
          className: y.footerAction,
          children: (0, s.jsx)(I.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: U.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
          })
        })
      }), (0, s.jsx)(b, {}), (0, s.jsx)(I.Button, {
        onClick: function() {
          null != a && p.Z.open(a, D.pNK.GUILD_AUTOMOD, void 0, D.KsC.AUTOMOD_MENTION_SPAM)
        },
        color: I.Button.Colors.LINK,
        look: I.Button.Looks.LINK,
        size: I.Button.Sizes.SMALL,
        className: y.buttonStyle,
        children: (0, s.jsx)("div", {
          className: y.footerAction,
          children: (0, s.jsx)(I.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: U.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
          })
        })
      })]
    })
  })
}

function H(e) {
  let {
    compact: t,
    header: n,
    subheader: i,
    content: l,
    footerButtons: r
  } = e;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: a()(y.embedCard, {
        [y.compact]: t
      }),
      children: [(0, s.jsxs)("div", {
        className: y.cardContent,
        children: [(0, s.jsxs)("div", {
          className: y.cardHeaderContianer,
          children: [(0, s.jsx)("div", {
            className: y.cardHeader,
            children: n
          }), null != i && (0, s.jsx)("div", {
            className: y.subheader,
            children: i
          })]
        }), l]
      }), null != r && (0, s.jsx)("div", {
        className: a()(y.centeredRowContainer, y.cardFooter, {
          [y.compact]: t
        }),
        children: r
      })]
    })
  })
}

function Y(e) {
  let {
    id: t,
    compact: n,
    message: i,
    channel: l
  } = e, {
    avatarSrc: r,
    eventHandlers: {
      onMouseEnter: o,
      onMouseLeave: c
    }
  } = (0, P.m)(!0), {
    notificationType: d
  } = (0, C.FL)(i), E = null == d || d === u.p.RAID;
  return (0, s.jsx)("div", {
    onMouseEnter: o,
    onMouseLeave: c,
    children: (0, s.jsx)(v.Z, {
      className: a()(y.mainContainer, {
        [y.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(P.S, {
        src: r
      }),
      iconContainerClassName: y.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: a()(y.content, {
          [y.compact]: n
        }),
        children: [(0, s.jsx)(L.nD, {
          message: i,
          messageClassname: y.spanCorrection,
          className: a()(y.usernameContainer, y.spanCorrection, {
            [y.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: y.spanCorrection,
            children: [(0, s.jsx)(I.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: y.username,
              children: U.Z.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(x.Z, {
              type: j.Hb.SYSTEM_DM,
              className: y.systemTag
            }), E && (0, s.jsx)(I.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              tag: "span",
              className: y.spanCorrection,
              children: U.Z.Messages.GUILD_AUTOMOD_NOTFICATION_ALERT_TITLE
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: y.flexLineBreak
        }), (0, s.jsx)(B, {
          message: i,
          compact: n
        })]
      })
    })
  })
}