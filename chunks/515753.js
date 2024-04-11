"use strict";
n.r(t), n.d(t, {
  CloseButton: function() {
    return W
  },
  LinkButton: function() {
    return z
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("613828"),
  d = n("924826"),
  c = n("873546"),
  f = n("442837"),
  h = n("481060"),
  p = n("493683"),
  m = n("239091"),
  C = n("420660"),
  g = n("201895"),
  E = n("43267"),
  S = n("933557"),
  I = n("853856"),
  _ = n("93687"),
  N = n("276423"),
  T = n("878857"),
  A = n("204197"),
  L = n("199902"),
  v = n("158776"),
  x = n("306680"),
  R = n("111583"),
  y = n("9156"),
  M = n("594174"),
  O = n("467679"),
  b = n("514342"),
  D = n("28718"),
  j = n("733880"),
  G = n("465670"),
  P = n("887208"),
  U = n("709054"),
  w = n("998502"),
  B = n("788307"),
  F = n("960670"),
  V = n("981631"),
  H = n("689938"),
  k = n("860040");
let K = w.default.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
  Y = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  W = e => (0, l.jsx)(h.Clickable, {
    className: k.closeButton,
    ...e,
    focusProps: {
      offset: {
        top: -2,
        bottom: -2,
        left: -2,
        right: 6
      }
    },
    children: (0, l.jsx)(G.default, {
      className: k.closeIcon
    })
  }),
  Z = () => (0, l.jsx)(P.default, {
    className: k.favoriteIcon
  });
class z extends a.Component {
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
      className: p,
      role: m,
      "aria-posinset": C,
      "aria-setsize": g,
      ...E
    } = this.props;
    return (0, l.jsx)(j.default, {
      className: i()(k.channel, {
        [k.fullWidth]: c.isMobile
      }, p),
      onClick: f,
      role: m,
      focusProps: {
        within: !0,
        ...Y
      },
      "aria-posinset": C,
      "aria-setsize": g,
      children: (0, l.jsx)(h.Interactive, {
        as: "div",
        selected: t,
        className: i()(s, k.interactive, k.linkButton, {
          [k.interactiveSelected]: t
        }),
        children: (0, l.jsxs)(u.Link, {
          to: {
            pathname: e,
            state: d
          },
          className: k.link,
          ...E,
          children: [(0, l.jsx)(D.default, {
            selected: t,
            muted: !1,
            avatar: (0, l.jsx)(n, {
              className: i()(k.linkButtonIcon, a)
            }),
            name: r,
            innerClassName: k.avatarWithText
          }), o]
        })
      })
    })
  }
}

function X(e) {
  let {
    channel: t,
    isGDMFacepileEnabled: s,
    selected: r = !1,
    user: c,
    activities: _,
    applicationStream: L,
    isTyping: v,
    status: R,
    isMobile: M,
    "aria-posinset": G,
    "aria-setsize": P
  } = e, [U, w] = a.useState(!1), z = a.useRef(null), X = a.useRef(null), {
    avatarSrc: q,
    avatarDecorationSrc: Q,
    eventHandlers: J
  } = (0, A.default)({
    user: c,
    size: h.AvatarSizes.SIZE_32,
    animateOnHover: !(r || U)
  }), $ = (0, f.useStateFromStores)([y.default], () => y.default.isChannelMuted(t.getGuildId(), t.id)), ee = (0, f.useStateFromStores)([x.default], () => x.default.getMentionCount(t.id) > 0), et = (0, S.default)(t), en = (0, f.useStateFromStores)([I.default], () => I.default.isFavorite(t.id)), el = () => {
    w(!0)
  }, ea = () => {
    w(!1)
  }, es = function(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), p.default.closePrivateChannel(t.id, r, n)
  }, ei = () => {
    p.default.preload(V.ME, t.id)
  }, er = e => {
    e.stopPropagation()
  }, eo = e => {
    if (e.target === e.currentTarget) {
      var t;
      null === (t = z.current) || void 0 === t || t.click()
    }
  }, eu = e => {
    t.isMultiUserDM() ? (0, m.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("25421")]).then(n.bind(n, "354741"));
      return n => (0, l.jsx)(e, {
        ...n,
        channel: t,
        selected: r
      })
    }, {
      noBlurEvent: !0
    }) : (0, m.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("56826")]).then(n.bind(n, "131404"));
      return n => (0, l.jsx)(e, {
        ...n,
        user: c,
        channel: t,
        channelSelected: r
      })
    })
  }, ed = e => {
    e.preventDefault(), e.stopPropagation();
    let n = H.default.Messages.LEAVE_GROUP_DM_TITLE.format({
        name
      }),
      a = H.default.Messages.LEAVE_GROUP_DM_BODY.format({
        name
      });
    t.isManaged() && (n = H.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
      name
    }), a = H.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
      name
    })), (0, h.openModal)(e => (0, l.jsx)(F.default, {
      header: n,
      body: a,
      onSubmit: es,
      ...e
    }))
  }, ec = () => {
    let e = {
      className: k.activity,
      textClassName: k.activityText,
      emojiClassName: k.activityEmoji
    };
    return t.isSystemDM() ? (0, l.jsx)("div", {
      className: k.subtext,
      children: H.default.Messages.SYSTEM_DM_ACTIVITY_TEXT
    }) : t.isMultiUserDM() ? (0, l.jsx)("div", {
      className: k.subtext,
      children: H.default.Messages.MEMBERS_HEADER.format({
        members: t.recipients.length + 1
      })
    }) : null != _ ? (0, l.jsx)(B.default, {
      ...e,
      activities: _,
      applicationStream: L,
      animate: U,
      hideTooltip: !0,
      user: c
    }) : null
  }, ef = () => {
    if (t.isMultiUserDM()) return t.recipients.length >= 2 && s && null == t.icon ? (0, l.jsx)(N.default, {
      "aria-hidden": !0,
      recipients: t.recipients,
      size: (0, h.getAvatarSize)(h.AvatarSizes.SIZE_32),
      isTyping: v,
      status: R
    }) : (0, l.jsx)(K, {
      ...J,
      src: (0, E.getChannelIconURL)(t),
      "aria-hidden": !0,
      className: k.__invalid_avatar,
      size: h.AvatarSizes.SIZE_32,
      status: v ? V.StatusTypes.ONLINE : R,
      isTyping: v
    });
    o()(null != c, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
    let e = null;
    return !c.isSystemUser() && (e = (0, C.default)(_) ? V.StatusTypes.STREAMING : R), (0, l.jsx)(K, {
      ...J,
      size: h.AvatarSizes.SIZE_32,
      src: q,
      avatarDecoration: Q,
      status: e,
      isMobile: M,
      isTyping: v,
      className: k.__invalid_avatar,
      "aria-label": c.username,
      statusTooltip: !0
    })
  }, eh = t.isMultiUserDM(), ep = t.isSystemDM(), em = (0, T.systemDMRedesignEnabled)();
  return (0, l.jsx)(d.ListNavigatorItem, {
    id: t.id,
    children: e => {
      let {
        role: n,
        ...a
      } = e;
      return (0, l.jsx)(j.default, {
        className: k.channel,
        role: n,
        focusProps: {
          ...Y,
          focusTarget: z,
          ringTarget: X
        },
        ref: X,
        onMouseEnter: el,
        onMouseLeave: ea,
        onMouseDown: ei,
        onContextMenu: eu,
        "aria-setsize": P,
        "aria-posinset": G,
        children: (0, l.jsxs)(h.Interactive, {
          className: i()(k.interactive, {
            [k.interactiveSystemDM]: em && ep,
            [k.interactiveSelected]: r
          }),
          as: "div",
          onClick: eo,
          muted: $,
          selected: r,
          children: [(0, l.jsx)(u.Link, {
            innerRef: z,
            to: V.Routes.CHANNEL(V.ME, t.id),
            className: k.link,
            "aria-label": (0, g.default)({
              channel: t,
              unread: ee
            }),
            ...a,
            children: (0, l.jsx)(D.default, {
              avatar: ef(),
              selected: r,
              highlighted: ee,
              muted: null != $ && $,
              subText: ec(),
              name: (0, l.jsx)(b.default, {
                children: et
              }),
              decorators: t.isSystemDM() ? (0, l.jsx)(O.default, {
                className: k.decorator,
                type: O.default.Types.SYSTEM_DM,
                verified: !0
              }) : null
            })
          }), en ? (0, l.jsx)(Z, {}) : null, !ep && (0, l.jsx)(W, {
            "aria-label": eh ? H.default.Messages.LEAVE_GROUP_DM : H.default.Messages.CLOSE_DM,
            onClick: eh ? ed : es,
            onMouseDown: er
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
  } = e, s = (0, f.useStateFromStores)([M.default], () => M.default.getUser(t.getRecipientId())), {
    isStatusIndicatorEnabled: i,
    isTypingIndicatorEnabled: r,
    isFacepileEnabled: o
  } = _.default.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: !0
  }), u = null == s ? void 0 : s.id, d = (0, f.useStateFromStoresObject)([v.default, L.default], () => {
    let e;
    if (t.isMultiUserDM()) {
      if (i) {
        let n = v.default.getState().statuses;
        t.recipients.some(e => n[e] === V.StatusTypes.ONLINE) && (e = V.StatusTypes.ONLINE)
      }
    } else null != u && (e = v.default.getStatus(u));
    return {
      status: e,
      activities: null != u ? v.default.getActivities(u) : null,
      applicationStream: null != u ? L.default.getAnyStreamForUser(u) : null,
      isMobile: null != u && v.default.isMobileOnline(u)
    }
  }, [u, t, i]), c = (0, f.useStateFromStores)([M.default, R.default], () => {
    if (t.isMultiUserDM()) return !!r && U.default.keys(R.default.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null === (t = M.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
    });
    if (null != s) return R.default.isTyping(t.id, t.getRecipientId());
    return !1
  }, [t, s, r]);
  return t.isMultiUserDM() ? (0, l.jsx)(X, {
    channel: t,
    selected: n,
    isTyping: c,
    status: d.status === V.StatusTypes.ONLINE ? V.StatusTypes.ONLINE : void 0,
    isGDMFacepileEnabled: o,
    ...a
  }) : (0, l.jsx)(X, {
    channel: t,
    selected: n,
    user: s,
    isTyping: c,
    ...a,
    ...d
  })
}