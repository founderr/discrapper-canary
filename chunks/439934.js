"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("803997"),
  s = l.n(n),
  r = l("442837"),
  c = l("481060"),
  d = l("239091"),
  o = l("434650"),
  u = l("695346"),
  v = l("594174"),
  f = l("695103"),
  h = l("880448"),
  I = l("602623"),
  m = l("810090"),
  E = l("823379"),
  C = l("5192"),
  T = l("624138"),
  x = l("115130"),
  S = l("147865"),
  p = l("542094"),
  A = l("665811"),
  _ = l("182906"),
  g = l("556505"),
  N = l("513202"),
  j = l("823531"),
  D = l("689938"),
  y = l("665179"),
  M = l("969728");

function L(e) {
  let {
    value: t,
    icon: l
  } = e;
  return (0, i.jsxs)(c.Text, {
    className: y.activityTag,
    color: "interactive-normal",
    variant: "text-xs/semibold",
    children: [(0, E.isNotNullish)(l) ? (0, i.jsx)(l, {
      className: y.icon,
      backgroundColor: "interactive-normal"
    }) : null, t]
  })
}

function V(e) {
  let {
    activity: t,
    application: l,
    channel: a,
    guildId: n,
    large: s = !1
  } = e, d = (0, r.useStateFromStoresArray)([v.default], () => {
    var e;
    return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : []).map(e => {
      let [t] = e;
      return v.default.getUser(t)
    }).filter(E.isNotNullish)
  }), o = C.default.getName(n, null == a ? void 0 : a.id, null == d ? void 0 : d[0]);
  if (o = (0, T.truncateText)(o, 15), null == t || 0 === d.length) {
    var u, f;
    let e = "".concat((0, S.default)(null !== (u = l.maxParticipants) && void 0 !== u ? u : 0));
    return s && (e = null !== (f = l.description) && void 0 !== f ? f : ""), (0, i.jsx)(c.Text, {
      className: y.activitySubtitleText,
      variant: "text-xs/normal",
      color: "interactive-normal",
      children: e
    })
  }
  return (0, i.jsxs)("div", {
    className: y.activitySubtitleText,
    children: [(0, i.jsx)(c.Text, {
      className: y.usersArePlayingText,
      variant: "text-xs/normal",
      children: d.length > 1 ? D.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: o,
        count: d.length - 1
      }) : D.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: o
      })
    }), (0, i.jsx)(I.default, {
      size: s ? I.Sizes.SIZE_24 : I.Sizes.SIZE_16,
      guildId: n,
      users: d,
      max: 6
    })]
  })
}

function R(e) {
  var t;
  let {
    activityItem: l,
    channel: n,
    guildId: v,
    locationObject: I,
    onActivityItemVisible: E,
    onActivityItemSelected: C,
    large: T = !1
  } = e, {
    imageBackground: R,
    videoUrl: O,
    activityAction: b,
    joinableEmbeddedApp: H,
    onActivityItemSelected: B,
    labelType: F,
    staffReleasePhase: Y
  } = (0, p.default)({
    activityItem: l,
    channel: n,
    guildId: v,
    locationObject: I,
    onActivityItemVisible: E,
    onActivityItemSelected: C,
    embeddedActivitiesManager: N.default
  }), w = (0, r.useStateFromStores)([x.default, f.default], () => x.default.inDevModeForApplication(l.application.id) || f.default.inTestModeForApplication(l.application.id), [l.application.id]), {
    application: k
  } = l, P = a.useCallback(e => e && (null == E ? void 0 : E({
    applicationId: l.application.id
  })), [l.application.id, E]), G = (0, o.useIsVisible)(P, .8, !0), [U, W] = a.useState(!1), [Z, z] = a.useState(U);
  a.useEffect(() => {
    U && z(!0)
  }, [U]);
  let q = () => W(!0),
    J = () => W(!1),
    K = u.DeveloperMode.useSetting();
  return (0, i.jsxs)(c.Clickable, {
    onClick: b === p.ActivityAction.START ? B : void 0,
    onContextMenu: K ? e => {
      (0, d.openContextMenu)(e, e => (0, i.jsx)(j.default, {
        application: k,
        ...e
      }))
    } : void 0,
    className: s()(y.activityItem, {
      [y.large]: !0 === T,
      [y.disabled]: b !== p.ActivityAction.START
    }),
    children: [(0, i.jsxs)("div", {
      ref: G,
      className: s()(y.activityImageContainer, {
        [y.large]: !0 === T
      }),
      onMouseEnter: q,
      onFocus: q,
      onMouseLeave: J,
      onBlur: J,
      children: [(0, i.jsx)(_.default, {
        imageBackground: R,
        applicationName: k.name,
        imageClassName: s()(y.activityImage, {
          [y.large]: !0 === T
        }),
        imageNotFoundClassName: y.brokenImageIconWrapper
      }), null != O && Z && b === p.ActivityAction.START ? (0, i.jsx)("div", {
        className: s()(y.activityVideo, {
          [y.videoFadeOut]: !U
        }),
        onAnimationEnd: () => U ? null : z(!1),
        children: (0, i.jsx)(m.default, {
          className: y.activityVideo,
          src: O,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null, b !== p.ActivityAction.START ? (0, i.jsx)(A.ActivityActionOverlayButton, {
        action: b,
        onClick: B
      }) : null, (0, i.jsx)("div", {
        className: y.overlayBadge,
        children: (0, i.jsx)("div", {
          className: y.badgeContainer,
          children: (0, i.jsx)(g.default, {
            name: k.name,
            labelType: F
          })
        })
      }), w ? (0, i.jsx)(c.Tooltip, {
        text: D.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: e => (0, i.jsx)("div", {
          className: y.devShelfBadge,
          ...e,
          children: (0, i.jsx)(h.default, {
            className: y.devShelfIcon
          })
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: s()(y.activityTextContainer, {
        [y.large]: T
      }),
      children: [T ? (0, i.jsx)(c.Text, {
        className: y.activityMaxParticipantsLarge,
        variant: "text-xs/normal",
        color: "interactive-normal",
        children: (0, S.default)(null !== (t = k.maxParticipants) && void 0 !== t ? t : 0)
      }) : null, (0, i.jsxs)("div", {
        className: y.activityName,
        children: [(0, i.jsx)(c.Heading, {
          className: y.activityTitleText,
          variant: "heading-md/semibold",
          color: "interactive-active",
          children: k.name
        }), null != Y ? (0, i.jsx)(c.Tooltip, {
          text: Y,
          children: e => (0, i.jsx)("img", {
            className: y.staffBadge,
            alt: Y,
            src: M,
            ...e
          })
        }) : null]
      }), (0, i.jsx)(V, {
        activity: null == H ? void 0 : H.embeddedActivity,
        application: k,
        channel: n,
        guildId: v,
        large: T
      }), (0, i.jsx)("div", {
        className: y.activityTagsContainer,
        children: k.tags.slice(0, 3).map(e => (0, i.jsx)(L, {
          value: e
        }, "activity-tag-".concat(k.id, "-").concat(e)))
      })]
    })]
  })
}