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
  c = l("239091"),
  o = l("434650"),
  u = l("213459"),
  v = l("695346"),
  f = l("594174"),
  h = l("695103"),
  I = l("880448"),
  m = l("602623"),
  E = l("810090"),
  T = l("823379"),
  x = l("5192"),
  C = l("624138"),
  S = l("115130"),
  p = l("147865"),
  A = l("542094"),
  _ = l("665811"),
  g = l("182906"),
  N = l("556505"),
  j = l("513202"),
  D = l("823531"),
  y = l("689938"),
  L = l("640608"),
  M = l("969728");

function V(e) {
  let {
    value: t,
    icon: l
  } = e;
  return (0, i.jsxs)(d.Text, {
    className: L.activityTag,
    color: "interactive-normal",
    variant: "text-xs/semibold",
    children: [(0, T.isNotNullish)(l) ? (0, i.jsx)(l, {
      className: L.icon,
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
  } = e, c = (0, r.useStateFromStoresArray)([f.default], () => {
    var e;
    return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : []).map(e => {
      let [t] = e;
      return f.default.getUser(t)
    }).filter(T.isNotNullish)
  }), o = x.default.getName(n, null == a ? void 0 : a.id, null == c ? void 0 : c[0]);
  if (o = (0, C.truncateText)(o, 15), null == t || 0 === c.length) {
    var u, v;
    let e = "".concat((0, p.default)(null !== (u = l.maxParticipants) && void 0 !== u ? u : 0));
    return s && (e = null !== (v = l.description) && void 0 !== v ? v : ""), (0, i.jsx)(d.Text, {
      className: L.activitySubtitleText,
      variant: "text-xs/normal",
      color: "interactive-normal",
      children: e
    })
  }
  return (0, i.jsxs)("div", {
    className: L.activitySubtitleText,
    children: [(0, i.jsx)(d.Text, {
      className: L.usersArePlayingText,
      variant: "text-xs/normal",
      children: c.length > 1 ? y.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: o,
        count: c.length - 1
      }) : y.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: o
      })
    }), (0, i.jsx)(m.default, {
      size: s ? m.Sizes.SIZE_24 : m.Sizes.SIZE_16,
      guildId: n,
      users: c,
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
    locationObject: m,
    onActivityItemVisible: T,
    onActivityItemSelected: x,
    large: C = !1
  } = e, {
    imageBackground: R,
    videoUrl: O,
    activityAction: F,
    joinableEmbeddedApp: B,
    onActivityItemSelected: H,
    labelType: Y,
    staffReleasePhase: k
  } = (0, A.default)({
    activityItem: l,
    channel: n,
    guildId: f,
    locationObject: m,
    onActivityItemVisible: T,
    onActivityItemSelected: x,
    embeddedActivitiesManager: j.default
  }), w = (0, r.useStateFromStores)([S.default, h.default], () => S.default.inDevModeForApplication(l.application.id) || h.default.inTestModeForApplication(l.application.id), [l.application.id]), {
    application: P
  } = l, G = a.useCallback(e => e && (null == T ? void 0 : T({
    applicationId: l.application.id
  })), [l.application.id, T]), U = (0, o.useIsVisible)(G, .8, !0), [W, z] = a.useState(!1), [Z, q] = a.useState(W);
  a.useEffect(() => {
    W && q(!0)
  }, [W]);
  let J = () => z(!0),
    K = () => z(!1),
    X = v.DeveloperMode.useSetting(),
    Q = a.useCallback(() => {
      null == H || H(), u.default.maybeQueryForInstallLessApps(P.id, null == n ? void 0 : n.id)
    }, [P.id, null == n ? void 0 : n.id, H]);
  return (0, i.jsxs)(d.Clickable, {
    onClick: F === A.ActivityAction.START ? Q : void 0,
    onContextMenu: X ? e => {
      (0, c.openContextMenu)(e, e => (0, i.jsx)(D.default, {
        application: P,
        ...e
      }))
    } : void 0,
    className: s()(L.activityItem, {
      [L.large]: !0 === C,
      [L.disabled]: F !== A.ActivityAction.START
    }),
    children: [(0, i.jsxs)("div", {
      ref: U,
      className: s()(L.activityImageContainer, {
        [L.large]: !0 === C
      }),
      onMouseEnter: J,
      onFocus: J,
      onMouseLeave: K,
      onBlur: K,
      children: [(0, i.jsx)(g.default, {
        imageBackground: R,
        applicationName: P.name,
        imageClassName: s()(L.activityImage, {
          [L.large]: !0 === C
        }),
        imageNotFoundClassName: L.brokenImageIconWrapper
      }), null != O && Z && F === A.ActivityAction.START ? (0, i.jsx)("div", {
        className: s()(L.activityVideo, {
          [L.videoFadeOut]: !W
        }),
        onAnimationEnd: () => W ? null : q(!1),
        children: (0, i.jsx)(E.default, {
          className: L.activityVideo,
          src: O,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null, F !== A.ActivityAction.START ? (0, i.jsx)(_.ActivityActionOverlayButton, {
        action: F,
        onClick: Q
      }) : null, (0, i.jsx)("div", {
        className: L.overlayBadge,
        children: (0, i.jsx)("div", {
          className: L.badgeContainer,
          children: (0, i.jsx)(N.default, {
            name: P.name,
            labelType: Y
          })
        })
      }), w ? (0, i.jsx)(d.Tooltip, {
        text: y.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: e => (0, i.jsx)("div", {
          className: L.devShelfBadge,
          ...e,
          children: (0, i.jsx)(I.default, {
            className: L.devShelfIcon
          })
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: s()(L.activityTextContainer, {
        [L.large]: C
      }),
      children: [C ? (0, i.jsx)(d.Text, {
        className: L.activityMaxParticipantsLarge,
        variant: "text-xs/normal",
        color: "interactive-normal",
        children: (0, p.default)(null !== (t = P.maxParticipants) && void 0 !== t ? t : 0)
      }) : null, (0, i.jsxs)("div", {
        className: L.activityName,
        children: [(0, i.jsx)(d.Heading, {
          className: L.activityTitleText,
          variant: "heading-md/semibold",
          color: "interactive-active",
          children: P.name
        }), null != k ? (0, i.jsx)(d.Tooltip, {
          text: k,
          children: e => (0, i.jsx)("img", {
            className: L.staffBadge,
            alt: k,
            src: M,
            ...e
          })
        }) : null]
      }), (0, i.jsx)(b, {
        activity: null == B ? void 0 : B.embeddedActivity,
        application: P,
        channel: n,
        guildId: f,
        large: C
      }), (0, i.jsx)("div", {
        className: L.activityTagsContainer,
        children: P.tags.slice(0, 3).map(e => (0, i.jsx)(V, {
          value: e
        }, "activity-tag-".concat(P.id, "-").concat(e)))
      })]
    })]
  })
}