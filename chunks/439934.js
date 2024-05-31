"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("442837"),
  d = l("481060"),
  o = l("239091"),
  c = l("434650"),
  u = l("213459"),
  v = l("695346"),
  f = l("594174"),
  h = l("695103"),
  m = l("880448"),
  I = l("602623"),
  E = l("810090"),
  T = l("823379"),
  x = l("5192"),
  S = l("624138"),
  C = l("115130"),
  p = l("147865"),
  A = l("542094"),
  _ = l("665811"),
  g = l("182906"),
  N = l("556505"),
  j = l("513202"),
  D = l("823531"),
  y = l("689938"),
  M = l("640608"),
  L = l("969728");

function V(e) {
  let {
    value: t,
    icon: l
  } = e;
  return (0, i.jsxs)(d.Text, {
    className: M.activityTag,
    color: "interactive-normal",
    variant: "text-xs/semibold",
    children: [(0, T.isNotNullish)(l) ? (0, i.jsx)(l, {
      className: M.icon,
      backgroundColor: "interactive-normal"
    }) : null, t]
  })
}

function b(e) {
  let {
    activity: t,
    application: l,
    channel: a,
    guildId: n,
    large: s = !1
  } = e, o = (0, r.useStateFromStoresArray)([f.default], () => {
    var e;
    return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : []).map(e => {
      let [t] = e;
      return f.default.getUser(t)
    }).filter(T.isNotNullish)
  }), c = x.default.getName(n, null == a ? void 0 : a.id, null == o ? void 0 : o[0]);
  if (c = (0, S.truncateText)(c, 15), null == t || 0 === o.length) {
    var u, v;
    let e = "".concat((0, p.default)(null !== (u = l.maxParticipants) && void 0 !== u ? u : 0));
    return s && (e = null !== (v = l.description) && void 0 !== v ? v : ""), (0, i.jsx)(d.Text, {
      className: M.activitySubtitleText,
      variant: "text-xs/normal",
      color: "interactive-normal",
      children: e
    })
  }
  return (0, i.jsxs)("div", {
    className: M.activitySubtitleText,
    children: [(0, i.jsx)(d.Text, {
      className: M.usersArePlayingText,
      variant: "text-xs/normal",
      children: o.length > 1 ? y.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: c,
        count: o.length - 1
      }) : y.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: c
      })
    }), (0, i.jsx)(I.default, {
      size: s ? I.Sizes.SIZE_24 : I.Sizes.SIZE_16,
      guildId: n,
      users: o,
      max: 6
    })]
  })
}

function R(e) {
  var t;
  let {
    activityItem: l,
    channel: n,
    guildId: f,
    locationObject: I,
    onActivityItemVisible: T,
    onActivityItemSelected: x,
    large: S = !1
  } = e, {
    imageBackground: R,
    videoUrl: O,
    activityAction: B,
    joinableEmbeddedApp: F,
    onActivityItemSelected: H,
    labelType: Y,
    staffReleasePhase: k
  } = (0, A.default)({
    activityItem: l,
    channel: n,
    guildId: f,
    locationObject: I,
    onActivityItemVisible: T,
    onActivityItemSelected: x,
    embeddedActivitiesManager: j.default
  }), P = (0, r.useStateFromStores)([C.default, h.default], () => C.default.inDevModeForApplication(l.application.id) || h.default.inTestModeForApplication(l.application.id), [l.application.id]), {
    application: w
  } = l, G = a.useCallback(e => e && (null == T ? void 0 : T({
    applicationId: l.application.id
  })), [l.application.id, T]), U = (0, c.useIsVisible)(G, .8, !0), [W, z] = a.useState(!1), [Z, q] = a.useState(W);
  a.useEffect(() => {
    W && q(!0)
  }, [W]);
  let J = () => z(!0),
    K = () => z(!1),
    X = v.DeveloperMode.useSetting(),
    Q = a.useCallback(() => {
      null == H || H(), u.default.maybeQueryForInstallLessApps(w.id, null == n ? void 0 : n.id)
    }, [w.id, null == n ? void 0 : n.id, H]);
  return (0, i.jsxs)(d.Clickable, {
    onClick: B === A.ActivityAction.START ? Q : void 0,
    onContextMenu: X ? e => {
      (0, o.openContextMenu)(e, e => (0, i.jsx)(D.default, {
        application: w,
        ...e
      }))
    } : void 0,
    className: s()(M.activityItem, {
      [M.large]: !0 === S,
      [M.disabled]: B !== A.ActivityAction.START
    }),
    children: [(0, i.jsxs)("div", {
      ref: U,
      className: s()(M.activityImageContainer, {
        [M.large]: !0 === S
      }),
      onMouseEnter: J,
      onFocus: J,
      onMouseLeave: K,
      onBlur: K,
      children: [(0, i.jsx)(g.default, {
        imageBackground: R,
        applicationName: w.name,
        imageClassName: s()(M.activityImage, {
          [M.large]: !0 === S
        }),
        imageNotFoundClassName: M.brokenImageIconWrapper
      }), null != O && Z && B === A.ActivityAction.START ? (0, i.jsx)("div", {
        className: s()(M.activityVideo, {
          [M.videoFadeOut]: !W
        }),
        onAnimationEnd: () => W ? null : q(!1),
        children: (0, i.jsx)(E.default, {
          className: M.activityVideo,
          src: O,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null, B !== A.ActivityAction.START ? (0, i.jsx)(_.ActivityActionOverlayButton, {
        action: B,
        onClick: Q
      }) : null, (0, i.jsx)("div", {
        className: M.overlayBadge,
        children: (0, i.jsx)("div", {
          className: M.badgeContainer,
          children: (0, i.jsx)(N.default, {
            name: w.name,
            labelType: Y
          })
        })
      }), P ? (0, i.jsx)(d.Tooltip, {
        text: y.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: e => (0, i.jsx)("div", {
          className: M.devShelfBadge,
          ...e,
          children: (0, i.jsx)(m.default, {
            className: M.devShelfIcon
          })
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: s()(M.activityTextContainer, {
        [M.large]: S
      }),
      children: [S ? (0, i.jsx)(d.Text, {
        className: M.activityMaxParticipantsLarge,
        variant: "text-xs/normal",
        color: "interactive-normal",
        children: (0, p.default)(null !== (t = w.maxParticipants) && void 0 !== t ? t : 0)
      }) : null, (0, i.jsxs)("div", {
        className: M.activityName,
        children: [(0, i.jsx)(d.Heading, {
          className: M.activityTitleText,
          variant: "heading-md/semibold",
          color: "interactive-active",
          children: w.name
        }), null != k ? (0, i.jsx)(d.Tooltip, {
          text: k,
          children: e => (0, i.jsx)("img", {
            className: M.staffBadge,
            alt: k,
            src: L,
            ...e
          })
        }) : null]
      }), (0, i.jsx)(b, {
        activity: null == F ? void 0 : F.embeddedActivity,
        application: w,
        channel: n,
        guildId: f,
        large: S
      }), (0, i.jsx)("div", {
        className: M.activityTagsContainer,
        children: w.tags.slice(0, 3).map(e => (0, i.jsx)(V, {
          value: e
        }, "activity-tag-".concat(w.id, "-").concat(e)))
      })]
    })]
  })
}