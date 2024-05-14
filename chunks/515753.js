"use strict";
n.r(t), n.d(t, {
  CloseButton: function() {
    return z
  },
  LinkButton: function() {
    return X
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
  p = n("493683"),
  m = n("239091"),
  C = n("420660"),
  g = n("702321"),
  E = n("201895"),
  _ = n("43267"),
  I = n("933557"),
  S = n("853856"),
  N = n("93687"),
  T = n("785232"),
  A = n("878857"),
  L = n("204197"),
  v = n("199902"),
  x = n("158776"),
  R = n("306680"),
  M = n("111583"),
  y = n("9156"),
  O = n("594174"),
  D = n("467679"),
  b = n("514342"),
  j = n("28718"),
  P = n("733880"),
  G = n("465670"),
  U = n("887208"),
  w = n("709054"),
  F = n("998502"),
  B = n("788307"),
  H = n("960670"),
  V = n("981631"),
  k = n("689938"),
  Y = n("577245");
let K = F.default.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
  W = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  z = e => (0, l.jsx)(h.Clickable, {
    className: Y.closeButton,
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
      className: Y.closeIcon
    })
  }),
  Z = () => (0, l.jsx)(U.default, {
    className: Y.favoriteIcon
  });
class X extends a.Component {
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
    return (0, l.jsx)(P.default, {
      className: i()(Y.channel, {
        [Y.fullWidth]: c.isMobile
      }, p),
      onClick: f,
      role: m,
      focusProps: {
        within: !0,
        ...W
      },
      "aria-posinset": C,
      "aria-setsize": g,
      children: (0, l.jsx)(h.Interactive, {
        as: "div",
        selected: t,
        className: i()(s, Y.interactive, Y.linkButton, {
          [Y.interactiveSelected]: t
        }),
        children: (0, l.jsxs)(u.Link, {
          to: {
            pathname: e,
            state: d
          },
          className: Y.link,
          ...E,
          children: [(0, l.jsx)(j.default, {
            selected: t,
            muted: !1,
            avatar: (0, l.jsx)(n, {
              className: i()(Y.linkButtonIcon, a)
            }),
            name: r,
            innerClassName: Y.avatarWithText
          }), o]
        })
      })
    })
  }
}

function Q(e) {
  let {
    channel: t,
    isGDMFacepileEnabled: s,
    selected: r = !1,
    user: c,
    activities: N,
    applicationStream: v,
    isTyping: x,
    status: M,
    isMobile: O,
    "aria-posinset": G,
    "aria-setsize": U
  } = e, [w, F] = a.useState(!1), X = a.useRef(null), Q = a.useRef(null), {
    avatarSrc: q,
    avatarDecorationSrc: J,
    eventHandlers: $
  } = (0, L.default)({
    user: c,
    size: h.AvatarSizes.SIZE_32,
    animateOnHover: !(r || w)
  }), ee = (0, f.useStateFromStores)([y.default], () => y.default.isChannelMuted(t.getGuildId(), t.id)), et = (0, f.useStateFromStores)([R.default], () => R.default.getMentionCount(t.id) > 0), en = (0, I.default)(t), el = (0, f.useStateFromStores)([S.default], () => S.default.isFavorite(t.id)), ea = () => {
    F(!0)
  }, es = () => {
    F(!1)
  }, ei = function(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), p.default.closePrivateChannel(t.id, r, n)
  }, er = () => {
    p.default.preload(V.ME, t.id)
  }, eo = e => {
    e.stopPropagation()
  }, eu = e => {
    if (e.target === e.currentTarget) {
      var t;
      null === (t = X.current) || void 0 === t || t.click()
    }
  }, ed = e => {
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
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("56826")]).then(n.bind(n, "131404"));
      return n => (0, l.jsx)(e, {
        ...n,
        user: c,
        channel: t,
        channelSelected: r
      })
    })
  }, ec = e => {
    e.preventDefault(), e.stopPropagation();
    let n = k.default.Messages.LEAVE_GROUP_DM_TITLE.format({
        name
      }),
      a = k.default.Messages.LEAVE_GROUP_DM_BODY.format({
        name
      });
    t.isManaged() && (n = k.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
      name
    }), a = k.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
      name
    })), (0, h.openModal)(e => (0, l.jsx)(H.default, {
      header: n,
      body: a,
      onSubmit: ei,
      ...e
    }))
  }, ef = () => {
    let e = {
      className: Y.activity,
      textClassName: Y.activityText,
      emojiClassName: Y.activityEmoji
    };
    return t.isSystemDM() ? (0, l.jsx)("div", {
      className: Y.subtext,
      children: (0, g.default)(t.id) ? k.default.Messages.SYSTEM_DM_CHANGELOG_STATUS : k.default.Messages.SYSTEM_DM_ACTIVITY_TEXT
    }) : t.isMultiUserDM() ? (0, l.jsx)("div", {
      className: Y.subtext,
      children: k.default.Messages.MEMBERS_HEADER.format({
        members: t.recipients.length + 1
      })
    }) : null != N ? (0, l.jsx)(B.default, {
      ...e,
      activities: N,
      applicationStream: v,
      animate: w,
      hideTooltip: !0,
      user: c
    }) : null
  }, eh = () => {
    if (t.isMultiUserDM()) return t.recipients.length >= 2 && s && null == t.icon ? (0, l.jsx)(T.default, {
      "aria-hidden": !0,
      recipients: t.recipients,
      size: (0, h.getAvatarSize)(h.AvatarSizes.SIZE_32),
      isTyping: x,
      status: M
    }) : (0, l.jsx)(K, {
      ...$,
      src: (0, _.getChannelIconURL)(t),
      "aria-hidden": !0,
      className: Y.__invalid_avatar,
      size: h.AvatarSizes.SIZE_32,
      status: x ? V.StatusTypes.ONLINE : M,
      isTyping: x
    });
    o()(null != c, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
    let e = null;
    return !c.isSystemUser() && (e = (0, C.default)(N) ? V.StatusTypes.STREAMING : M), (0, l.jsx)(K, {
      ...$,
      size: h.AvatarSizes.SIZE_32,
      src: q,
      avatarDecoration: J,
      status: e,
      isMobile: O,
      isTyping: x,
      className: Y.__invalid_avatar,
      "aria-label": c.username,
      statusTooltip: !0
    })
  }, ep = t.isMultiUserDM(), em = t.isSystemDM(), eC = (0, A.systemDMRedesignEnabled)();
  return (0, l.jsx)(d.ListNavigatorItem, {
    id: t.id,
    children: e => {
      let {
        role: n,
        ...a
      } = e;
      return (0, l.jsx)(P.default, {
        className: Y.channel,
        role: n,
        focusProps: {
          ...W,
          focusTarget: X,
          ringTarget: Q
        },
        ref: Q,
        onMouseEnter: ea,
        onMouseLeave: es,
        onMouseDown: er,
        onContextMenu: ed,
        "aria-setsize": U,
        "aria-posinset": G,
        children: (0, l.jsxs)(h.Interactive, {
          className: i()(Y.interactive, {
            [Y.interactiveSystemDM]: eC && em,
            [Y.interactiveSelected]: r
          }),
          as: "div",
          onClick: eu,
          muted: ee,
          selected: r,
          children: [(0, l.jsx)(u.Link, {
            innerRef: X,
            to: V.Routes.CHANNEL(V.ME, t.id),
            className: Y.link,
            "aria-label": (0, E.default)({
              channel: t,
              unread: et
            }),
            ...a,
            children: (0, l.jsx)(j.default, {
              avatar: eh(),
              selected: r,
              highlighted: et,
              muted: null != ee && ee,
              subText: ef(),
              name: (0, l.jsx)(b.default, {
                children: en
              }),
              decorators: t.isSystemDM() ? (0, l.jsx)(D.default, {
                className: Y.decorator,
                type: D.default.Types.SYSTEM_DM,
                verified: !0
              }) : null
            })
          }), el ? (0, l.jsx)(Z, {}) : null, !em && (0, l.jsx)(z, {
            "aria-label": ep ? k.default.Messages.LEAVE_GROUP_DM : k.default.Messages.CLOSE_DM,
            onClick: ep ? ec : ei,
            onMouseDown: eo
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
  } = e, s = (0, f.useStateFromStores)([O.default], () => O.default.getUser(t.getRecipientId())), {
    isStatusIndicatorEnabled: i,
    isTypingIndicatorEnabled: r,
    isFacepileEnabled: o
  } = N.default.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: !0
  }), u = null == s ? void 0 : s.id, d = (0, f.useStateFromStoresObject)([x.default, v.default], () => {
    let e;
    if (t.isMultiUserDM()) {
      if (i) {
        let n = x.default.getState().statuses;
        t.recipients.some(e => n[e] === V.StatusTypes.ONLINE) && (e = V.StatusTypes.ONLINE)
      }
    } else null != u && (e = x.default.getStatus(u));
    return {
      status: e,
      activities: null != u ? x.default.getActivities(u) : null,
      applicationStream: null != u ? v.default.getAnyStreamForUser(u) : null,
      isMobile: null != u && x.default.isMobileOnline(u)
    }
  }, [u, t, i]), c = (0, f.useStateFromStores)([O.default, M.default], () => {
    if (t.isMultiUserDM()) return !!r && w.default.keys(M.default.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null === (t = O.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
    });
    if (null != s) return M.default.isTyping(t.id, t.getRecipientId());
    return !1
  }, [t, s, r]);
  return t.isMultiUserDM() ? (0, l.jsx)(Q, {
    channel: t,
    selected: n,
    isTyping: c,
    status: d.status === V.StatusTypes.ONLINE ? V.StatusTypes.ONLINE : void 0,
    isGDMFacepileEnabled: o,
    ...a
  }) : (0, l.jsx)(Q, {
    channel: t,
    selected: n,
    user: s,
    isTyping: c,
    ...a,
    ...d
  })
}