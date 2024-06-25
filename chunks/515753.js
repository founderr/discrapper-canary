n.d(t, {
  PZ: function() {
    return K
  },
  Qj: function() {
    return Q
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(512722),
  o = n.n(a),
  u = n(613828),
  c = n(91192),
  d = n(873546),
  h = n(442837),
  p = n(481060),
  g = n(493683),
  m = n(239091),
  C = n(420660),
  E = n(702321),
  f = n(201895),
  _ = n(43267),
  I = n(933557),
  N = n(979264),
  Z = n(853856),
  S = n(93687),
  x = n(785232),
  L = n(280234),
  T = n(509275),
  v = n(878857),
  A = n(204197),
  M = n(199902),
  R = n(158776),
  O = n(306680),
  P = n(111583),
  b = n(9156),
  j = n(594174),
  y = n(467679),
  D = n(514342),
  U = n(28718),
  G = n(733880),
  w = n(709054),
  k = n(998502),
  B = n(788307),
  V = n(960670),
  H = n(981631),
  F = n(689938),
  W = n(608418);
let Y = k.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  z = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  K = e => (0, l.jsx)(p.Clickable, {
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
    children: (0, l.jsx)(p.CloseSmallIcon, {
      size: "md",
      color: "currentColor",
      className: W.closeIcon
    })
  }),
  q = () => (0, l.jsx)(p.StarIcon, {
    size: "xs",
    color: "currentColor",
    className: W.favoriteIcon
  });
class Q extends i.Component {
  render() {
    let {
      route: e,
      selected: t,
      icon: n,
      iconClassName: i,
      interactiveClassName: s,
      text: a,
      children: o,
      locationState: c,
      onClick: h,
      className: g,
      role: m,
      "aria-posinset": C,
      "aria-setsize": E,
      ...f
    } = this.props;
    return (0, l.jsx)(G.Z, {
      className: r()(W.channel, {
        [W.fullWidth]: d.tq
      }, g),
      onClick: h,
      role: m,
      focusProps: {
        within: !0,
        ...z
      },
      "aria-posinset": C,
      "aria-setsize": E,
      children: (0, l.jsx)(p.Interactive, {
        as: "div",
        selected: t,
        className: r()(s, W.interactive, W.linkButton, {
          [W.interactiveSelected]: t
        }),
        children: (0, l.jsxs)(u.rU, {
          to: {
            pathname: e,
            state: c
          },
          className: W.link,
          ...f,
          children: [(0, l.jsx)(U.Z, {
            selected: t,
            muted: !1,
            avatar: (0, l.jsx)(n, {
              className: r()(W.linkButtonIcon, i),
              color: "currentColor"
            }),
            name: a,
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
    selected: a = !1,
    user: d,
    activities: S,
    applicationStream: M,
    isTyping: R,
    status: P,
    isMobile: j,
    lastOnlineTimestamp: w,
    "aria-posinset": k,
    "aria-setsize": Q
  } = e, [J, X] = i.useState(!1), $ = i.useRef(null), ee = i.useRef(null), {
    avatarSrc: et,
    avatarDecorationSrc: en,
    eventHandlers: el
  } = (0, A.Z)({
    user: d,
    size: p.AvatarSizes.SIZE_32,
    animateOnHover: !(a || J)
  }), ei = (0, h.e7)([b.ZP], () => b.ZP.isChannelMuted(t.getGuildId(), t.id)), es = (0, h.e7)([O.ZP], () => O.ZP.getMentionCount(t.id) > 0), er = (0, I.ZP)(t), ea = (0, h.e7)([Z.Z], () => Z.Z.isFavorite(t.id)), eo = null != S && S.length > 0, {
    isRecentlyOnlineShowable: eu,
    isRecentlyOnlineTrackable: ec
  } = (0, L.$)(w), ed = !eo && P === H.Skl.OFFLINE && null != w;
  i.useEffect(() => {
    ec && ed && L.Z.trackExposure({
      location: "private_channel"
    })
  }, [ec, ed]);
  let eh = () => {
      X(!0)
    },
    ep = () => {
      X(!1)
    },
    eg = function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      null != e && (e.preventDefault(), e.stopPropagation()), g.Z.closePrivateChannel(t.id, a, n)
    },
    em = () => {
      g.Z.preload(H.ME, t.id)
    },
    eC = e => {
      e.stopPropagation()
    },
    eE = e => {
      if (e.target === e.currentTarget) {
        var t;
        null === (t = $.current) || void 0 === t || t.click()
      }
    },
    ef = e => {
      t.isMultiUserDM() ? (0, m.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          selected: a
        })
      }, {
        noBlurEvent: !0
      }) : (0, m.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("56826")]).then(n.bind(n, 131404));
        return n => (0, l.jsx)(e, {
          ...n,
          user: d,
          channel: t,
          channelSelected: a
        })
      })
    },
    e_ = e => {
      e.preventDefault(), e.stopPropagation();
      let n = F.Z.Messages.LEAVE_GROUP_DM_TITLE.format({
          name
        }),
        i = F.Z.Messages.LEAVE_GROUP_DM_BODY.format({
          name
        });
      t.isManaged() && (n = F.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
        name
      }), i = F.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
        name
      })), (0, p.openModal)(e => (0, l.jsx)(V.Z, {
        header: n,
        body: i,
        onSubmit: eg,
        ...e
      }))
    },
    eI = () => {
      let e = {
        className: W.activity,
        textClassName: W.activityText,
        emojiClassName: W.activityEmoji
      };
      if (t.isSystemDM()) return (0, l.jsx)("div", {
        className: W.subtext,
        children: (0, E.Z)(t.id) ? F.Z.Messages.SYSTEM_DM_CHANGELOG_STATUS : F.Z.Messages.SYSTEM_DM_ACTIVITY_TEXT
      });
      if (t.isMultiUserDM()) return (0, l.jsx)("div", {
        className: W.subtext,
        children: F.Z.Messages.MEMBERS_HEADER.format({
          members: t.recipients.length + 1
        })
      });
      if (eo) return (0, l.jsx)(B.Z, {
        ...e,
        activities: S,
        applicationStream: M,
        animate: J,
        hideTooltip: !0,
        user: d
      });
      if (ed && eu) {
        let e = (0, T.H)(w);
        return (0, l.jsx)("div", {
          className: W.subtext,
          children: e
        })
      }
      return null
    },
    eN = () => {
      let e = p.AvatarSizes.SIZE_32;
      if (t.isMultiUserDM()) return t.recipients.length >= 2 && s && null == t.icon ? (0, l.jsx)(x.Z, {
        "aria-hidden": !0,
        recipients: t.recipients,
        size: e,
        isTyping: R,
        status: P
      }) : (0, l.jsx)(Y, {
        ...el,
        src: (0, _.x)(t),
        "aria-hidden": !0,
        size: e,
        status: R ? H.Skl.ONLINE : P,
        isTyping: R
      });
      o()(null != d, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
      let n = null;
      return !d.isSystemUser() && (n = (0, C.Z)(S) ? H.Skl.STREAMING : P), (0, l.jsx)(Y, {
        ...el,
        size: p.AvatarSizes.SIZE_32,
        src: et,
        avatarDecoration: en,
        status: n,
        isMobile: j,
        isTyping: R,
        "aria-label": d.username,
        statusTooltip: !0
      })
    },
    eZ = t.isMultiUserDM(),
    eS = t.isSystemDM(),
    ex = (0, v.Q)(),
    eL = eZ || eS || t.type !== H.d4z.DM || (null == d ? void 0 : d.clan) == null ? er : (0, l.jsxs)(l.Fragment, {
      children: [er, (0, l.jsx)(N.ZP, {
        clan: null == d ? void 0 : d.clan,
        userId: null == d ? void 0 : d.id,
        inline: !0,
        disableGuildProfile: !0,
        className: W.clanTag
      })]
    });
  return (0, l.jsx)(c.mh, {
    id: t.id,
    children: e => {
      let {
        role: n,
        ...i
      } = e;
      return (0, l.jsx)(G.Z, {
        className: W.channel,
        role: n,
        focusProps: {
          ...z,
          focusTarget: $,
          ringTarget: ee
        },
        ref: ee,
        onMouseEnter: eh,
        onMouseLeave: ep,
        onMouseDown: em,
        onContextMenu: ef,
        "aria-setsize": Q,
        "aria-posinset": k,
        children: (0, l.jsxs)(p.Interactive, {
          className: r()(W.interactive, {
            [W.interactiveSystemDM]: ex && eS,
            [W.interactiveSelected]: a
          }),
          as: "div",
          onClick: eE,
          muted: ei,
          selected: a,
          children: [(0, l.jsx)(u.rU, {
            innerRef: $,
            to: H.Z5c.CHANNEL(H.ME, t.id),
            className: W.link,
            "aria-label": (0, f.ZP)({
              channel: t,
              unread: es
            }),
            ...i,
            children: (0, l.jsx)(U.Z, {
              avatar: eN(),
              selected: a,
              highlighted: es,
              muted: null != ei && ei,
              subText: eI(),
              name: (0, l.jsx)(D.Z, {
                tooltipClassName: W.overflowTooltip,
                children: eL
              }),
              decorators: t.isSystemDM() ? (0, l.jsx)(y.Z, {
                className: W.decorator,
                type: y.Z.Types.SYSTEM_DM,
                verified: !0
              }) : null
            })
          }), ea ? (0, l.jsx)(q, {}) : null, (0, l.jsx)(K, {
            "aria-label": eZ ? F.Z.Messages.LEAVE_GROUP_DM : F.Z.Messages.CLOSE_DM,
            onClick: eZ ? e_ : eg,
            onMouseDown: eC
          })]
        })
      })
    }
  })
}
t.ZP = e => {
  let {
    channel: t,
    selected: n,
    ...i
  } = e, s = (0, h.e7)([j.default], () => j.default.getUser(t.getRecipientId())), {
    isStatusIndicatorEnabled: r,
    isTypingIndicatorEnabled: a,
    isFacepileEnabled: o
  } = S.Z.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: !0
  }), {
    isRecentlyOnlineEnabled: u
  } = L.Z.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: !1
  }), c = null == s ? void 0 : s.id, d = (0, h.cj)([R.Z, M.Z], () => {
    let e, n;
    if (t.isMultiUserDM()) {
      if (r) {
        let n = R.Z.getState().statuses;
        t.recipients.some(e => n[e] === H.Skl.ONLINE) && (e = H.Skl.ONLINE)
      }
    } else null != c && (e = R.Z.getStatus(c), n = R.Z.getLastOnlineTimestamp(c));
    return {
      status: e,
      lastOnlineTimestamp: n,
      activities: null != c ? R.Z.getActivities(c) : null,
      applicationStream: null != c ? M.Z.getAnyStreamForUser(c) : null,
      isMobile: null != c && R.Z.isMobileOnline(c),
      isRecentlyOnlineEnabled: u
    }
  }, [t, c, r, u]), p = (0, h.e7)([j.default, P.Z], () => {
    if (t.isMultiUserDM()) return !!a && w.default.keys(P.Z.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null === (t = j.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
    });
    if (null != s) return P.Z.isTyping(t.id, t.getRecipientId());
    return !1
  }, [t, s, a]);
  return t.isMultiUserDM() ? (0, l.jsx)(J, {
    channel: t,
    selected: n,
    isTyping: p,
    status: d.status === H.Skl.ONLINE ? H.Skl.ONLINE : void 0,
    isGDMFacepileEnabled: o,
    ...i
  }) : (0, l.jsx)(J, {
    channel: t,
    selected: n,
    user: s,
    isTyping: p,
    ...i,
    ...d
  })
}