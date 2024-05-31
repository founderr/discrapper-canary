"use strict";
n.r(t), n.d(t, {
  CloseButton: function() {
    return q
  },
  LinkButton: function() {
    return J
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
  p = n("239091"),
  C = n("420660"),
  g = n("702321"),
  E = n("201895"),
  S = n("43267"),
  _ = n("933557"),
  I = n("979264"),
  N = n("853856"),
  T = n("93687"),
  A = n("785232"),
  L = n("280234"),
  v = n("509275"),
  x = n("878857"),
  R = n("204197"),
  M = n("199902"),
  y = n("158776"),
  O = n("306680"),
  D = n("111583"),
  b = n("9156"),
  j = n("594174"),
  P = n("467679"),
  G = n("514342"),
  U = n("28718"),
  w = n("733880"),
  B = n("465670"),
  F = n("887208"),
  V = n("709054"),
  H = n("998502"),
  k = n("788307"),
  Y = n("960670"),
  K = n("981631"),
  W = n("689938"),
  z = n("577245");
let Z = H.default.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
  X = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  q = e => (0, l.jsx)(h.Clickable, {
    className: z.closeButton,
    ...e,
    focusProps: {
      offset: {
        top: -2,
        bottom: -2,
        left: -2,
        right: 6
      }
    },
    children: (0, l.jsx)(B.default, {
      className: z.closeIcon
    })
  }),
  Q = () => (0, l.jsx)(F.default, {
    className: z.favoriteIcon
  });
class J extends a.Component {
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
      role: p,
      "aria-posinset": C,
      "aria-setsize": g,
      ...E
    } = this.props;
    return (0, l.jsx)(w.default, {
      className: i()(z.channel, {
        [z.fullWidth]: c.isMobile
      }, m),
      onClick: f,
      role: p,
      focusProps: {
        within: !0,
        ...X
      },
      "aria-posinset": C,
      "aria-setsize": g,
      children: (0, l.jsx)(h.Interactive, {
        as: "div",
        selected: t,
        className: i()(s, z.interactive, z.linkButton, {
          [z.interactiveSelected]: t
        }),
        children: (0, l.jsxs)(u.Link, {
          to: {
            pathname: e,
            state: d
          },
          className: z.link,
          ...E,
          children: [(0, l.jsx)(U.default, {
            selected: t,
            muted: !1,
            avatar: (0, l.jsx)(n, {
              className: i()(z.linkButtonIcon, a)
            }),
            name: r,
            innerClassName: z.avatarWithText
          }), o]
        })
      })
    })
  }
}

function $(e) {
  let {
    channel: t,
    isGDMFacepileEnabled: s,
    selected: r = !1,
    user: c,
    activities: T,
    applicationStream: M,
    isTyping: y,
    status: D,
    isMobile: j,
    lastOnlineTimestamp: B,
    "aria-posinset": F,
    "aria-setsize": V
  } = e, [H, J] = a.useState(!1), $ = a.useRef(null), ee = a.useRef(null), {
    avatarSrc: et,
    avatarDecorationSrc: en,
    eventHandlers: el
  } = (0, R.default)({
    user: c,
    size: h.AvatarSizes.SIZE_32,
    animateOnHover: !(r || H)
  }), ea = (0, f.useStateFromStores)([b.default], () => b.default.isChannelMuted(t.getGuildId(), t.id)), es = (0, f.useStateFromStores)([O.default], () => O.default.getMentionCount(t.id) > 0), ei = (0, _.default)(t), er = (0, f.useStateFromStores)([N.default], () => N.default.isFavorite(t.id)), eo = null != T && T.length > 0, {
    isRecentlyOnlineShowable: eu,
    isRecentlyOnlineTrackable: ed
  } = (0, L.getRecentlyOnlineStrategy)(B), ec = !eo && D === K.StatusTypes.OFFLINE && null != B;
  a.useEffect(() => {
    ed && ec && L.default.trackExposure({
      location: "private_channel"
    })
  }, [ed, ec]);
  let ef = () => {
      J(!0)
    },
    eh = () => {
      J(!1)
    },
    em = function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      null != e && (e.preventDefault(), e.stopPropagation()), m.default.closePrivateChannel(t.id, r, n)
    },
    ep = () => {
      m.default.preload(K.ME, t.id)
    },
    eC = e => {
      e.stopPropagation()
    },
    eg = e => {
      if (e.target === e.currentTarget) {
        var t;
        null === (t = $.current) || void 0 === t || t.click()
      }
    },
    eE = e => {
      t.isMultiUserDM() ? (0, p.openContextMenuLazy)(e, async () => {
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
      }) : (0, p.openContextMenuLazy)(e, async () => {
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
    eS = e => {
      e.preventDefault(), e.stopPropagation();
      let n = W.default.Messages.LEAVE_GROUP_DM_TITLE.format({
          name
        }),
        a = W.default.Messages.LEAVE_GROUP_DM_BODY.format({
          name
        });
      t.isManaged() && (n = W.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
        name
      }), a = W.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
        name
      })), (0, h.openModal)(e => (0, l.jsx)(Y.default, {
        header: n,
        body: a,
        onSubmit: em,
        ...e
      }))
    },
    e_ = () => {
      let e = {
        className: z.activity,
        textClassName: z.activityText,
        emojiClassName: z.activityEmoji
      };
      if (t.isSystemDM()) return (0, l.jsx)("div", {
        className: z.subtext,
        children: (0, g.default)(t.id) ? W.default.Messages.SYSTEM_DM_CHANGELOG_STATUS : W.default.Messages.SYSTEM_DM_ACTIVITY_TEXT
      });
      if (t.isMultiUserDM()) return (0, l.jsx)("div", {
        className: z.subtext,
        children: W.default.Messages.MEMBERS_HEADER.format({
          members: t.recipients.length + 1
        })
      });
      if (eo) return (0, l.jsx)(k.default, {
        ...e,
        activities: T,
        applicationStream: M,
        animate: H,
        hideTooltip: !0,
        user: c
      });
      if (ec && eu) {
        let e = (0, v.formatRecentlyOnlineStatus)(B);
        return (0, l.jsx)("div", {
          className: z.subtext,
          children: e
        })
      }
      return null
    },
    eI = () => {
      let e = h.AvatarSizes.SIZE_32;
      if (t.isMultiUserDM()) return t.recipients.length >= 2 && s && null == t.icon ? (0, l.jsx)(A.default, {
        "aria-hidden": !0,
        recipients: t.recipients,
        size: e,
        isTyping: y,
        status: D
      }) : (0, l.jsx)(Z, {
        ...el,
        src: (0, S.getChannelIconURL)(t),
        "aria-hidden": !0,
        size: e,
        status: y ? K.StatusTypes.ONLINE : D,
        isTyping: y
      });
      o()(null != c, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
      let n = null;
      return !c.isSystemUser() && (n = (0, C.default)(T) ? K.StatusTypes.STREAMING : D), (0, l.jsx)(Z, {
        ...el,
        size: h.AvatarSizes.SIZE_32,
        src: et,
        avatarDecoration: en,
        status: n,
        isMobile: j,
        isTyping: y,
        "aria-label": c.username,
        statusTooltip: !0
      })
    },
    eN = t.isMultiUserDM(),
    eT = t.isSystemDM(),
    eA = (0, x.systemDMRedesignEnabled)(),
    eL = eN || eT || t.type !== K.ChannelTypes.DM || (null == c ? void 0 : c.clan) == null ? ei : (0, l.jsxs)(l.Fragment, {
      children: [ei, (0, l.jsx)(I.default, {
        clan: null == c ? void 0 : c.clan,
        userId: null == c ? void 0 : c.id,
        inline: !0,
        disableGuildProfile: !0,
        className: z.clanTag
      })]
    });
  return (0, l.jsx)(d.ListNavigatorItem, {
    id: t.id,
    children: e => {
      let {
        role: n,
        ...a
      } = e;
      return (0, l.jsx)(w.default, {
        className: z.channel,
        role: n,
        focusProps: {
          ...X,
          focusTarget: $,
          ringTarget: ee
        },
        ref: ee,
        onMouseEnter: ef,
        onMouseLeave: eh,
        onMouseDown: ep,
        onContextMenu: eE,
        "aria-setsize": V,
        "aria-posinset": F,
        children: (0, l.jsxs)(h.Interactive, {
          className: i()(z.interactive, {
            [z.interactiveSystemDM]: eA && eT,
            [z.interactiveSelected]: r
          }),
          as: "div",
          onClick: eg,
          muted: ea,
          selected: r,
          children: [(0, l.jsx)(u.Link, {
            innerRef: $,
            to: K.Routes.CHANNEL(K.ME, t.id),
            className: z.link,
            "aria-label": (0, E.default)({
              channel: t,
              unread: es
            }),
            ...a,
            children: (0, l.jsx)(U.default, {
              avatar: eI(),
              selected: r,
              highlighted: es,
              muted: null != ea && ea,
              subText: e_(),
              name: (0, l.jsx)(G.default, {
                tooltipClassName: z.overflowTooltip,
                children: eL
              }),
              decorators: t.isSystemDM() ? (0, l.jsx)(P.default, {
                className: z.decorator,
                type: P.default.Types.SYSTEM_DM,
                verified: !0
              }) : null
            })
          }), er ? (0, l.jsx)(Q, {}) : null, (0, l.jsx)(q, {
            "aria-label": eN ? W.default.Messages.LEAVE_GROUP_DM : W.default.Messages.CLOSE_DM,
            onClick: eN ? eS : em,
            onMouseDown: eC
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
  } = e, s = (0, f.useStateFromStores)([j.default], () => j.default.getUser(t.getRecipientId())), {
    isStatusIndicatorEnabled: i,
    isTypingIndicatorEnabled: r,
    isFacepileEnabled: o
  } = T.default.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: !0
  }), {
    isRecentlyOnlineEnabled: u
  } = L.default.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: !1
  }), d = null == s ? void 0 : s.id, c = (0, f.useStateFromStoresObject)([y.default, M.default], () => {
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
      applicationStream: null != d ? M.default.getAnyStreamForUser(d) : null,
      isMobile: null != d && y.default.isMobileOnline(d),
      isRecentlyOnlineEnabled: u
    }
  }, [t, d, i, u]), h = (0, f.useStateFromStores)([j.default, D.default], () => {
    if (t.isMultiUserDM()) return !!r && V.default.keys(D.default.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null === (t = j.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
    });
    if (null != s) return D.default.isTyping(t.id, t.getRecipientId());
    return !1
  }, [t, s, r]);
  return t.isMultiUserDM() ? (0, l.jsx)($, {
    channel: t,
    selected: n,
    isTyping: h,
    status: c.status === K.StatusTypes.ONLINE ? K.StatusTypes.ONLINE : void 0,
    isGDMFacepileEnabled: o,
    ...a
  }) : (0, l.jsx)($, {
    channel: t,
    selected: n,
    user: s,
    isTyping: h,
    ...a,
    ...c
  })
}