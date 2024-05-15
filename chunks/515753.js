"use strict";
n.r(t), n.d(t, {
  CloseButton: function() {
    return X
  },
  LinkButton: function() {
    return q
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
  S = n("933557"),
  I = n("353093"),
  N = n("979264"),
  T = n("853856"),
  A = n("93687"),
  L = n("785232"),
  v = n("878857"),
  x = n("204197"),
  R = n("199902"),
  M = n("158776"),
  y = n("306680"),
  O = n("111583"),
  D = n("9156"),
  b = n("594174"),
  j = n("467679"),
  P = n("514342"),
  G = n("28718"),
  U = n("733880"),
  w = n("465670"),
  B = n("887208"),
  F = n("709054"),
  H = n("998502"),
  V = n("788307"),
  k = n("960670"),
  Y = n("981631"),
  K = n("689938"),
  W = n("577245");
let z = H.default.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
  Z = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  X = e => (0, l.jsx)(h.Clickable, {
    className: W.closeButton,
    ...e,
    focusProps: {
      offset: {
        top: -2,
        bottom: -2,
        left: -2,
        right: 6
      }
    },
    children: (0, l.jsx)(w.default, {
      className: W.closeIcon
    })
  }),
  Q = () => (0, l.jsx)(B.default, {
    className: W.favoriteIcon
  });
class q extends a.Component {
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
    return (0, l.jsx)(U.default, {
      className: i()(W.channel, {
        [W.fullWidth]: c.isMobile
      }, p),
      onClick: f,
      role: m,
      focusProps: {
        within: !0,
        ...Z
      },
      "aria-posinset": C,
      "aria-setsize": g,
      children: (0, l.jsx)(h.Interactive, {
        as: "div",
        selected: t,
        className: i()(s, W.interactive, W.linkButton, {
          [W.interactiveSelected]: t
        }),
        children: (0, l.jsxs)(u.Link, {
          to: {
            pathname: e,
            state: d
          },
          className: W.link,
          ...E,
          children: [(0, l.jsx)(G.default, {
            selected: t,
            muted: !1,
            avatar: (0, l.jsx)(n, {
              className: i()(W.linkButtonIcon, a)
            }),
            name: r,
            innerClassName: W.avatarWithText
          }), o]
        })
      })
    })
  }
}

function J(e) {
  let {
    channel: t,
    isGDMFacepileEnabled: s,
    selected: r = !1,
    user: c,
    activities: A,
    applicationStream: R,
    isTyping: M,
    status: O,
    isMobile: b,
    "aria-posinset": w,
    "aria-setsize": B
  } = e, [F, H] = a.useState(!1), q = a.useRef(null), J = a.useRef(null), {
    avatarSrc: $,
    avatarDecorationSrc: ee,
    eventHandlers: et
  } = (0, x.default)({
    user: c,
    size: h.AvatarSizes.SIZE_32,
    animateOnHover: !(r || F)
  }), en = (0, f.useStateFromStores)([D.default], () => D.default.isChannelMuted(t.getGuildId(), t.id)), el = (0, f.useStateFromStores)([y.default], () => y.default.getMentionCount(t.id) > 0), ea = (0, S.default)(t), es = (0, f.useStateFromStores)([T.default], () => T.default.isFavorite(t.id)), ei = () => {
    H(!0)
  }, er = () => {
    H(!1)
  }, eo = function(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), p.default.closePrivateChannel(t.id, r, n)
  }, eu = () => {
    p.default.preload(Y.ME, t.id)
  }, ed = e => {
    e.stopPropagation()
  }, ec = e => {
    if (e.target === e.currentTarget) {
      var t;
      null === (t = q.current) || void 0 === t || t.click()
    }
  }, ef = e => {
    t.isMultiUserDM() ? (0, m.openContextMenuLazy)(e, async () => {
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
    }) : (0, m.openContextMenuLazy)(e, async () => {
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
  }, eh = e => {
    e.preventDefault(), e.stopPropagation();
    let n = K.default.Messages.LEAVE_GROUP_DM_TITLE.format({
        name
      }),
      a = K.default.Messages.LEAVE_GROUP_DM_BODY.format({
        name
      });
    t.isManaged() && (n = K.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
      name
    }), a = K.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
      name
    })), (0, h.openModal)(e => (0, l.jsx)(k.default, {
      header: n,
      body: a,
      onSubmit: eo,
      ...e
    }))
  }, ep = () => {
    let e = {
      className: W.activity,
      textClassName: W.activityText,
      emojiClassName: W.activityEmoji
    };
    return t.isSystemDM() ? (0, l.jsx)("div", {
      className: W.subtext,
      children: (0, g.default)(t.id) ? K.default.Messages.SYSTEM_DM_CHANGELOG_STATUS : K.default.Messages.SYSTEM_DM_ACTIVITY_TEXT
    }) : t.isMultiUserDM() ? (0, l.jsx)("div", {
      className: W.subtext,
      children: K.default.Messages.MEMBERS_HEADER.format({
        members: t.recipients.length + 1
      })
    }) : null != A ? (0, l.jsx)(V.default, {
      ...e,
      activities: A,
      applicationStream: R,
      animate: F,
      hideTooltip: !0,
      user: c
    }) : null
  }, em = () => {
    let e = h.AvatarSizes.SIZE_32;
    if (t.isMultiUserDM()) return t.recipients.length >= 2 && s && null == t.icon ? (0, l.jsx)(L.default, {
      "aria-hidden": !0,
      recipients: t.recipients,
      size: e,
      isTyping: M,
      status: O
    }) : (0, l.jsx)(z, {
      ...et,
      src: (0, _.getChannelIconURL)(t),
      "aria-hidden": !0,
      className: W.__invalid_avatar,
      size: e,
      status: M ? Y.StatusTypes.ONLINE : O,
      isTyping: M
    });
    o()(null != c, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
    let n = null;
    return !c.isSystemUser() && (n = (0, C.default)(A) ? Y.StatusTypes.STREAMING : O), (0, l.jsx)(z, {
      ...et,
      size: h.AvatarSizes.SIZE_32,
      src: $,
      avatarDecoration: ee,
      status: n,
      isMobile: b,
      isTyping: M,
      className: W.__invalid_avatar,
      "aria-label": c.username,
      statusTooltip: !0
    })
  }, eC = t.isMultiUserDM(), eg = t.isSystemDM(), eE = (0, v.systemDMRedesignEnabled)(), e_ = !eC && !eg && t.type === Y.ChannelTypes.DM, eS = null == c ? void 0 : c.clan, eI = (0, I.getClanBadgeUrlFromClan)(eS), eN = e_ && null != eS ? (0, l.jsxs)(l.Fragment, {
    children: [ea, (0, l.jsx)(N.BaseClanTagChiplet, {
      clanTag: eS.tag,
      clanBadge: eI,
      inline: !0
    })]
  }) : ea;
  return (0, l.jsx)(d.ListNavigatorItem, {
    id: t.id,
    children: e => {
      let {
        role: n,
        ...a
      } = e;
      return (0, l.jsx)(U.default, {
        className: W.channel,
        role: n,
        focusProps: {
          ...Z,
          focusTarget: q,
          ringTarget: J
        },
        ref: J,
        onMouseEnter: ei,
        onMouseLeave: er,
        onMouseDown: eu,
        onContextMenu: ef,
        "aria-setsize": B,
        "aria-posinset": w,
        children: (0, l.jsxs)(h.Interactive, {
          className: i()(W.interactive, {
            [W.interactiveSystemDM]: eE && eg,
            [W.interactiveSelected]: r
          }),
          as: "div",
          onClick: ec,
          muted: en,
          selected: r,
          children: [(0, l.jsx)(u.Link, {
            innerRef: q,
            to: Y.Routes.CHANNEL(Y.ME, t.id),
            className: W.link,
            "aria-label": (0, E.default)({
              channel: t,
              unread: el
            }),
            ...a,
            children: (0, l.jsx)(G.default, {
              avatar: em(),
              selected: r,
              highlighted: el,
              muted: null != en && en,
              subText: ep(),
              name: (0, l.jsx)(P.default, {
                tooltipClassName: W.overflowTooltip,
                children: eN
              }),
              decorators: t.isSystemDM() ? (0, l.jsx)(j.default, {
                className: W.decorator,
                type: j.default.Types.SYSTEM_DM,
                verified: !0
              }) : null
            })
          }), es ? (0, l.jsx)(Q, {}) : null, !eg && (0, l.jsx)(X, {
            "aria-label": eC ? K.default.Messages.LEAVE_GROUP_DM : K.default.Messages.CLOSE_DM,
            onClick: eC ? eh : eo,
            onMouseDown: ed
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
  } = e, s = (0, f.useStateFromStores)([b.default], () => b.default.getUser(t.getRecipientId())), {
    isStatusIndicatorEnabled: i,
    isTypingIndicatorEnabled: r,
    isFacepileEnabled: o
  } = A.default.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: !0
  }), u = null == s ? void 0 : s.id, d = (0, f.useStateFromStoresObject)([M.default, R.default], () => {
    let e;
    if (t.isMultiUserDM()) {
      if (i) {
        let n = M.default.getState().statuses;
        t.recipients.some(e => n[e] === Y.StatusTypes.ONLINE) && (e = Y.StatusTypes.ONLINE)
      }
    } else null != u && (e = M.default.getStatus(u));
    return {
      status: e,
      activities: null != u ? M.default.getActivities(u) : null,
      applicationStream: null != u ? R.default.getAnyStreamForUser(u) : null,
      isMobile: null != u && M.default.isMobileOnline(u)
    }
  }, [u, t, i]), c = (0, f.useStateFromStores)([b.default, O.default], () => {
    if (t.isMultiUserDM()) return !!r && F.default.keys(O.default.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null === (t = b.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
    });
    if (null != s) return O.default.isTyping(t.id, t.getRecipientId());
    return !1
  }, [t, s, r]);
  return t.isMultiUserDM() ? (0, l.jsx)(J, {
    channel: t,
    selected: n,
    isTyping: c,
    status: d.status === Y.StatusTypes.ONLINE ? Y.StatusTypes.ONLINE : void 0,
    isGDMFacepileEnabled: o,
    ...a
  }) : (0, l.jsx)(J, {
    channel: t,
    selected: n,
    user: s,
    isTyping: c,
    ...a,
    ...d
  })
}