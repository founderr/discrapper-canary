"use strict";
n.r(t), n.d(t, {
  CloseButton: function() {
    return Q
  },
  LinkButton: function() {
    return $
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("613828"),
  d = n("924826"),
  c = n("873546"),
  f = n("442837"),
  h = n("481060"),
  m = n("493683"),
  C = n("239091"),
  p = n("420660"),
  g = n("702321"),
  E = n("201895"),
  _ = n("43267"),
  S = n("933557"),
  I = n("353093"),
  N = n("979264"),
  T = n("853856"),
  A = n("93687"),
  L = n("785232"),
  v = n("280234"),
  x = n("509275"),
  R = n("878857"),
  M = n("204197"),
  O = n("199902"),
  y = n("158776"),
  D = n("306680"),
  b = n("111583"),
  j = n("9156"),
  P = n("594174"),
  G = n("467679"),
  U = n("514342"),
  w = n("28718"),
  B = n("733880"),
  F = n("465670"),
  H = n("887208"),
  V = n("709054"),
  k = n("998502"),
  Y = n("788307"),
  W = n("960670"),
  K = n("981631"),
  z = n("689938"),
  Z = n("577245");
let X = k.default.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
  q = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  Q = e => (0, l.jsx)(h.Clickable, {
    className: Z.closeButton,
    ...e,
    focusProps: {
      offset: {
        top: -2,
        bottom: -2,
        left: -2,
        right: 6
      }
    },
    children: (0, l.jsx)(F.default, {
      className: Z.closeIcon
    })
  }),
  J = () => (0, l.jsx)(H.default, {
    className: Z.favoriteIcon
  });
class $ extends a.Component {
  render() {
    let {
      route: e,
      selected: t,
      icon: n,
      iconClassName: a,
      interactiveClassName: s,
      text: r,
      children: o,
      locationState: d,
      onClick: f,
      className: m,
      role: C,
      "aria-posinset": p,
      "aria-setsize": g,
      ...E
    } = this.props;
    return (0, l.jsx)(B.default, {
      className: i()(Z.channel, {
        [Z.fullWidth]: c.isMobile
      }, m),
      onClick: f,
      role: C,
      focusProps: {
        within: !0,
        ...q
      },
      "aria-posinset": p,
      "aria-setsize": g,
      children: (0, l.jsx)(h.Interactive, {
        as: "div",
        selected: t,
        className: i()(s, Z.interactive, Z.linkButton, {
          [Z.interactiveSelected]: t
        }),
        children: (0, l.jsxs)(u.Link, {
          to: {
            pathname: e,
            state: d
          },
          className: Z.link,
          ...E,
          children: [(0, l.jsx)(w.default, {
            selected: t,
            muted: !1,
            avatar: (0, l.jsx)(n, {
              className: i()(Z.linkButtonIcon, a)
            }),
            name: r,
            innerClassName: Z.avatarWithText
          }), o]
        })
      })
    })
  }
}

function ee(e) {
  let {
    channel: t,
    isGDMFacepileEnabled: s,
    selected: r = !1,
    user: c,
    activities: A,
    applicationStream: O,
    isTyping: y,
    status: b,
    isMobile: P,
    lastOnlineTimestamp: F,
    isRecentlyOnlineEnabled: H = !1,
    "aria-posinset": V,
    "aria-setsize": k
  } = e, [$, ee] = a.useState(!1), et = a.useRef(null), en = a.useRef(null), {
    avatarSrc: el,
    avatarDecorationSrc: ea,
    eventHandlers: es
  } = (0, M.default)({
    user: c,
    size: h.AvatarSizes.SIZE_32,
    animateOnHover: !(r || $)
  }), ei = (0, f.useStateFromStores)([j.default], () => j.default.isChannelMuted(t.getGuildId(), t.id)), er = (0, f.useStateFromStores)([D.default], () => D.default.getMentionCount(t.id) > 0), eo = (0, S.default)(t), eu = (0, f.useStateFromStores)([T.default], () => T.default.isFavorite(t.id)), ed = null != A && A.length > 0, ec = !ed && null != F && b === K.StatusTypes.OFFLINE;
  a.useEffect(() => {
    ec && v.default.trackExposure({
      location: "private_channel"
    })
  }, [ec]);
  let ef = () => {
      ee(!0)
    },
    eh = () => {
      ee(!1)
    },
    em = function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      null != e && (e.preventDefault(), e.stopPropagation()), m.default.closePrivateChannel(t.id, r, n)
    },
    eC = () => {
      m.default.preload(K.ME, t.id)
    },
    ep = e => {
      e.stopPropagation()
    },
    eg = e => {
      if (e.target === e.currentTarget) {
        var t;
        null === (t = et.current) || void 0 === t || t.click()
      }
    },
    eE = e => {
      t.isMultiUserDM() ? (0, C.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("25421")]).then(n.bind(n, "354741"));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          selected: r
        })
      }, {
        noBlurEvent: !0
      }) : (0, C.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("36441"), n.e("56826")]).then(n.bind(n, "131404"));
        return n => (0, l.jsx)(e, {
          ...n,
          user: c,
          channel: t,
          channelSelected: r
        })
      })
    },
    e_ = e => {
      e.preventDefault(), e.stopPropagation();
      let n = z.default.Messages.LEAVE_GROUP_DM_TITLE.format({
          name
        }),
        a = z.default.Messages.LEAVE_GROUP_DM_BODY.format({
          name
        });
      t.isManaged() && (n = z.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
        name
      }), a = z.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
        name
      })), (0, h.openModal)(e => (0, l.jsx)(W.default, {
        header: n,
        body: a,
        onSubmit: em,
        ...e
      }))
    },
    eS = () => {
      let e = {
        className: Z.activity,
        textClassName: Z.activityText,
        emojiClassName: Z.activityEmoji
      };
      if (t.isSystemDM()) return (0, l.jsx)("div", {
        className: Z.subtext,
        children: (0, g.default)(t.id) ? z.default.Messages.SYSTEM_DM_CHANGELOG_STATUS : z.default.Messages.SYSTEM_DM_ACTIVITY_TEXT
      });
      if (t.isMultiUserDM()) return (0, l.jsx)("div", {
        className: Z.subtext,
        children: z.default.Messages.MEMBERS_HEADER.format({
          members: t.recipients.length + 1
        })
      });
      if (ed) return (0, l.jsx)(Y.default, {
        ...e,
        activities: A,
        applicationStream: O,
        animate: $,
        hideTooltip: !0,
        user: c
      });
      if (ec && H) {
        let e = (0, x.formatRecentlyOnlineStatus)(F);
        return (0, l.jsx)("div", {
          className: Z.subtext,
          children: e
        })
      }
      return null
    },
    eI = () => {
      let e = h.AvatarSizes.SIZE_32;
      if (t.isMultiUserDM()) return t.recipients.length >= 2 && s && null == t.icon ? (0, l.jsx)(L.default, {
        "aria-hidden": !0,
        recipients: t.recipients,
        size: e,
        isTyping: y,
        status: b
      }) : (0, l.jsx)(X, {
        ...es,
        src: (0, _.getChannelIconURL)(t),
        "aria-hidden": !0,
        className: Z.__invalid_avatar,
        size: e,
        status: y ? K.StatusTypes.ONLINE : b,
        isTyping: y
      });
      o()(null != c, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
      let n = null;
      return !c.isSystemUser() && (n = (0, p.default)(A) ? K.StatusTypes.STREAMING : b), (0, l.jsx)(X, {
        ...es,
        size: h.AvatarSizes.SIZE_32,
        src: el,
        avatarDecoration: ea,
        status: n,
        isMobile: P,
        isTyping: y,
        className: Z.__invalid_avatar,
        "aria-label": c.username,
        statusTooltip: !0
      })
    },
    eN = t.isMultiUserDM(),
    eT = t.isSystemDM(),
    eA = (0, R.systemDMRedesignEnabled)(),
    eL = !eN && !eT && t.type === K.ChannelTypes.DM,
    ev = null == c ? void 0 : c.clan,
    ex = (0, I.getClanBadgeUrlFromClan)(ev),
    eR = eL && null != ev ? (0, l.jsxs)(l.Fragment, {
      children: [eo, (0, l.jsx)(N.BaseClanTagChiplet, {
        clanTag: ev.tag,
        clanBadge: ex,
        inline: !0
      })]
    }) : eo;
  return (0, l.jsx)(d.ListNavigatorItem, {
    id: t.id,
    children: e => {
      let {
        role: n,
        ...a
      } = e;
      return (0, l.jsx)(B.default, {
        className: Z.channel,
        role: n,
        focusProps: {
          ...q,
          focusTarget: et,
          ringTarget: en
        },
        ref: en,
        onMouseEnter: ef,
        onMouseLeave: eh,
        onMouseDown: eC,
        onContextMenu: eE,
        "aria-setsize": k,
        "aria-posinset": V,
        children: (0, l.jsxs)(h.Interactive, {
          className: i()(Z.interactive, {
            [Z.interactiveSystemDM]: eA && eT,
            [Z.interactiveSelected]: r
          }),
          as: "div",
          onClick: eg,
          muted: ei,
          selected: r,
          children: [(0, l.jsx)(u.Link, {
            innerRef: et,
            to: K.Routes.CHANNEL(K.ME, t.id),
            className: Z.link,
            "aria-label": (0, E.default)({
              channel: t,
              unread: er
            }),
            ...a,
            children: (0, l.jsx)(w.default, {
              avatar: eI(),
              selected: r,
              highlighted: er,
              muted: null != ei && ei,
              subText: eS(),
              name: (0, l.jsx)(U.default, {
                tooltipClassName: Z.overflowTooltip,
                children: eR
              }),
              decorators: t.isSystemDM() ? (0, l.jsx)(G.default, {
                className: Z.decorator,
                type: G.default.Types.SYSTEM_DM,
                verified: !0
              }) : null
            })
          }), eu ? (0, l.jsx)(J, {}) : null, (0, l.jsx)(Q, {
            "aria-label": eN ? z.default.Messages.LEAVE_GROUP_DM : z.default.Messages.CLOSE_DM,
            onClick: eN ? e_ : em,
            onMouseDown: ep
          })]
        })
      })
    }
  })
}
t.default = e => {
  let {
    channel: t,
    selected: n,
    ...a
  } = e, s = (0, f.useStateFromStores)([P.default], () => P.default.getUser(t.getRecipientId())), {
    isStatusIndicatorEnabled: i,
    isTypingIndicatorEnabled: r,
    isFacepileEnabled: o
  } = A.default.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: !0
  }), {
    isFriendsAndDMsEnabled: u
  } = v.default.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: !1
  }), d = null == s ? void 0 : s.id, c = (0, f.useStateFromStoresObject)([y.default, O.default], () => {
    let e, n;
    if (t.isMultiUserDM()) {
      if (i) {
        let n = y.default.getState().statuses;
        t.recipients.some(e => n[e] === K.StatusTypes.ONLINE) && (e = K.StatusTypes.ONLINE)
      }
    } else null != d && (e = y.default.getStatus(d), n = y.default.getLastOnlineTimestamp(d));
    return {
      status: e,
      lastOnlineTimestamp: n,
      activities: null != d ? y.default.getActivities(d) : null,
      applicationStream: null != d ? O.default.getAnyStreamForUser(d) : null,
      isMobile: null != d && y.default.isMobileOnline(d),
      isRecentlyOnlineEnabled: u
    }
  }, [t, d, i, u]), h = (0, f.useStateFromStores)([P.default, b.default], () => {
    if (t.isMultiUserDM()) return !!r && V.default.keys(b.default.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null === (t = P.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
    });
    if (null != s) return b.default.isTyping(t.id, t.getRecipientId());
    return !1
  }, [t, s, r]);
  return t.isMultiUserDM() ? (0, l.jsx)(ee, {
    channel: t,
    selected: n,
    isTyping: h,
    status: c.status === K.StatusTypes.ONLINE ? K.StatusTypes.ONLINE : void 0,
    isGDMFacepileEnabled: o,
    ...a
  }) : (0, l.jsx)(ee, {
    channel: t,
    selected: n,
    user: s,
    isTyping: h,
    ...a,
    ...c
  })
}