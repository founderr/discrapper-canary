var l = n(735250),
  i = n(470079),
  s = n(873546),
  a = n(442837),
  r = n(481060),
  o = n(194359),
  c = n(333984),
  u = n(486622),
  d = n(922409),
  h = n(86203),
  m = n(6025),
  E = n(621853),
  p = n(171368),
  g = n(433355),
  f = n(699516),
  C = n(594174),
  _ = n(806519),
  I = n(768581),
  x = n(525541),
  T = n(981631),
  N = n(377668),
  Z = n(228168),
  S = n(689938),
  v = n(713049);
let A = e => {
    let {
      userId: t,
      channelId: n
    } = e, s = (0, a.e7)([E.Z], () => E.Z.getMutualGuilds(t), [t]), o = i.useMemo(() => null != s ? s.slice(0, 3).map((e, t) => {
      let {
        guild: n
      } = e, i = null != n ? I.ZP.getGuildIconURL({
        id: n.id,
        icon: n.icon,
        size: 24
      }) : null;
      if (null == i) return null;
      let a = t === (s.length > 3 ? 3 : s.length) - 1,
        r = (0, l.jsx)("img", {
          src: i,
          alt: "",
          className: v.avatar
        }, t);
      return a ? r : (0, l.jsx)(_.ZP, {
        className: v.avatarMask,
        mask: _.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
        width: 24,
        height: 24,
        children: r
      }, t)
    }).filter(e => null != e) : [], [s]);
    return null == s || 0 === s.length ? (0, l.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: S.Z.Messages.NO_MUTUAL_GUILDS
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: v.avatarContainer,
        children: o
      }), (0, l.jsx)(r.Clickable, {
        onClick: () => {
          (0, p.openUserProfileModal)({
            userId: t,
            channelId: n,
            section: Z.oh.MUTUAL_GUILDS,
            analyticsLocation: {
              section: T.jXE.DIRECT_MESSAGE
            }
          })
        },
        children: (0, l.jsx)(r.Text, {
          className: v.mutualGuilds,
          variant: "text-sm/normal",
          children: S.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
            count: s.length
          })
        })
      })]
    })
  },
  M = e => {
    var t;
    let {
      relationshipType: n,
      userId: i,
      showingBanner: s
    } = e, a = null === (t = C.default.getUser(i)) || void 0 === t ? void 0 : t.bot, c = () => {
      o.Z.addRelationship({
        userId: i,
        context: {
          location: T.ZY5.DM_CHANNEL
        }
      })
    }, u = (0, l.jsx)(r.Button, {
      className: v.action,
      size: r.Button.Sizes.TINY,
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        o.Z.addRelationship({
          userId: i,
          context: {
            location: T.ZY5.DM_CHANNEL
          },
          type: T.OGo.BLOCKED
        })
      },
      children: S.Z.Messages.BLOCK
    });
    switch (n) {
      case T.OGo.NONE:
        return (0, l.jsxs)(l.Fragment, {
          children: [!a && !s && (0, l.jsx)(r.Button, {
            className: v.action,
            size: r.Button.Sizes.TINY,
            onClick: c,
            children: S.Z.Messages.ADD_FRIEND
          }), u]
        });
      case T.OGo.FRIEND:
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(r.Button, {
            className: v.action,
            size: r.Button.Sizes.TINY,
            onClick: () => {
              o.Z.removeFriend(i, {
                location: T.ZY5.DM_CHANNEL
              })
            },
            color: r.Button.Colors.PRIMARY,
            children: S.Z.Messages.REMOVE_FRIEND
          }), u]
        });
      case T.OGo.BLOCKED:
        return (0, l.jsx)(r.Button, {
          className: v.action,
          size: r.Button.Sizes.TINY,
          onClick: () => {
            o.Z.unblockUser(i, {
              location: T.ZY5.DM_CHANNEL
            })
          },
          color: r.Button.Colors.PRIMARY,
          children: S.Z.Messages.UNBLOCK
        });
      case T.OGo.PENDING_INCOMING:
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(r.Text, {
            className: v.action,
            color: "header-secondary",
            variant: "text-sm/normal",
            children: S.Z.Messages.FRIEND_REQUEST_RECEIVED
          }), (0, l.jsx)(r.Button, {
            className: v.action,
            size: r.Button.Sizes.TINY,
            onClick: c,
            children: S.Z.Messages.FRIEND_REQUEST_ACCEPT
          }), (0, l.jsx)(r.Button, {
            className: v.action,
            size: r.Button.Sizes.TINY,
            color: r.Button.Colors.PRIMARY,
            onClick: () => {
              o.Z.cancelFriendRequest(i, {
                location: T.ZY5.DM_CHANNEL
              })
            },
            children: S.Z.Messages.FRIEND_REQUEST_IGNORE
          }), u]
        });
      case T.OGo.PENDING_OUTGOING:
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(r.Button, {
            className: v.action,
            size: r.Button.Sizes.TINY,
            disabled: !0,
            children: S.Z.Messages.ADD_FRIEND_BUTTON_AFTER
          }), u]
        });
      default:
        return null
    }
  },
  R = e => {
    let {
      channelId: t,
      otherUserId: n
    } = e, s = i.useCallback(() => {
      (0, r.showToast)((0, r.createToast)(S.Z.Messages.MESSAGE_REQUESTS_SPAM_REQUEST_ERROR_ALERT_TITLE, r.ToastType.FAILURE))
    }, []), a = i.useCallback(() => {
      m.Z.closeChannelSidebar(g.uZ)
    }, []), o = i.useCallback(() => {
      m.Z.closeChannelSidebar(g.uZ)
    }, []), {
      acceptMessageRequest: c,
      rejectMessageRequest: d,
      isAcceptLoading: h,
      isRejectLoading: E,
      isOptimisticAccepted: p,
      isOptimisticRejected: f
    } = (0, u.m)({
      user: C.default.getUser(n),
      onError: s,
      onAcceptSuccess: o,
      onRejectSuccess: a
    }), _ = h || E || p || f;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(r.Button, {
        className: v.action,
        size: r.Button.Sizes.TINY,
        onClick: () => c(t),
        disabled: _,
        submitting: h,
        children: S.Z.Messages.MESSAGE_REQUEST_ACCEPT
      }), (0, l.jsx)(r.Button, {
        className: v.action,
        size: r.Button.Sizes.TINY,
        onClick: () => d(t),
        color: r.Button.Colors.PRIMARY,
        disabled: _,
        submitting: E,
        children: S.Z.Messages.MESSAGE_REQUEST_IGNORE
      })]
    })
  };
t.Z = e => {
  let {
    userId: t,
    channel: n,
    showingBanner: i
  } = e, {
    channelId: r
  } = (0, d._)(), o = (0, a.e7)([c.Z], () => null != r && c.Z.isSpam(r), [r]), u = (0, a.e7)([f.Z], () => f.Z.getRelationshipType(t), [t]), m = n.id === r;
  return t === N.fL ? null : o || m ? (0, l.jsxs)("div", {
    className: v.mobileContainer,
    children: [(0, l.jsx)("div", {
      className: v.mobileMutualGuilds,
      children: (0, l.jsx)(A, {
        userId: t,
        channelId: n.id
      })
    }), (0, l.jsxs)("div", {
      className: v.mobileButtons,
      children: [(0, l.jsx)(R, {
        channelId: n.id,
        otherUserId: t
      }), (0, l.jsx)(h.Z, {
        channel: n
      })]
    })]
  }) : !0 === s.tq || m ? (0, l.jsxs)("div", {
    className: v.mobileContainer,
    children: [(0, l.jsx)("div", {
      className: v.mobileMutualGuilds,
      children: (0, l.jsx)(A, {
        userId: t,
        channelId: n.id
      })
    }), (0, l.jsxs)("div", {
      className: v.mobileButtons,
      children: [(0, l.jsx)(M, {
        relationshipType: u,
        userId: t,
        showingBanner: i
      }), !i && (0, l.jsx)(x.Z, {
        otherUserId: t,
        channel: n,
        navigateAwayOnReportSuccess: !1
      })]
    })]
  }) : (0, l.jsxs)("div", {
    className: v.container,
    children: [(0, l.jsx)(A, {
      userId: t,
      channelId: n.id
    }), (0, l.jsx)("div", {
      className: v.divider
    }), (0, l.jsx)(M, {
      relationshipType: u,
      userId: t,
      showingBanner: i
    }), !i && (0, l.jsx)(x.Z, {
      otherUserId: t,
      channel: n
    })]
  })
}