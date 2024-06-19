l.d(n, {
  Z: function() {
    return V
  }
}), l(47120);
var t = l(735250),
  i = l(470079),
  a = l(120356),
  s = l.n(a),
  r = l(442837),
  o = l(481060),
  c = l(239091),
  d = l(434650),
  u = l(213459),
  g = l(695346),
  p = l(594174),
  m = l(695103),
  v = l(880448),
  I = l(602623),
  x = l(810090),
  E = l(823379),
  T = l(5192),
  h = l(624138),
  f = l(115130),
  C = l(147865),
  _ = l(542094),
  S = l(665811),
  j = l(182906),
  Z = l(556505),
  N = l(513202),
  M = l(823531),
  A = l(689938),
  D = l(398831),
  y = l(969728);

function b(e) {
  let {
    value: n,
    icon: l
  } = e;
  return (0, t.jsxs)(o.Text, {
    className: D.activityTag,
    color: "interactive-normal",
    variant: "text-xs/semibold",
    children: [(0, E.lm)(l) ? (0, t.jsx)(l, {
      className: D.icon
    }) : null, n]
  })
}

function L(e) {
  let {
    activity: n,
    application: l,
    channel: i,
    guildId: a,
    large: s = !1
  } = e, c = (0, r.Wu)([p.default], () => {
    var e;
    return Array.from(null !== (e = null == n ? void 0 : n.userIds) && void 0 !== e ? e : []).map(e => {
      let [n] = e;
      return p.default.getUser(n)
    }).filter(E.lm)
  }), d = T.ZP.getName(a, null == i ? void 0 : i.id, null == c ? void 0 : c[0]);
  if (d = (0, h.aF)(d, 15), null == n || 0 === c.length) {
    var u, g;
    let e = "".concat((0, C.Z)(null !== (u = l.maxParticipants) && void 0 !== u ? u : 0));
    return s && (e = null !== (g = l.description) && void 0 !== g ? g : ""), (0, t.jsx)(o.Text, {
      className: D.activitySubtitleText,
      variant: "text-xs/normal",
      color: "interactive-normal",
      children: e
    })
  }
  return (0, t.jsxs)("div", {
    className: D.activitySubtitleText,
    children: [(0, t.jsx)(o.Text, {
      className: D.usersArePlayingText,
      variant: "text-xs/normal",
      children: c.length > 1 ? A.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: d,
        count: c.length - 1
      }) : A.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: d
      })
    }), (0, t.jsx)(I.Z, {
      size: s ? I.u.SIZE_24 : I.u.SIZE_16,
      guildId: a,
      users: c,
      max: 6
    })]
  })
}

function V(e) {
  var n;
  let {
    activityItem: l,
    channel: a,
    guildId: p,
    locationObject: I,
    onActivityItemVisible: E,
    onActivityItemSelected: T,
    large: h = !1
  } = e, {
    imageBackground: V,
    videoUrl: R,
    activityAction: O,
    joinableEmbeddedApp: B,
    onActivityItemSelected: H,
    labelType: P,
    staffReleasePhase: F
  } = (0, _.ZP)({
    activityItem: l,
    channel: a,
    guildId: p,
    locationObject: I,
    onActivityItemVisible: E,
    onActivityItemSelected: T,
    embeddedActivitiesManager: N.Z
  }), k = (0, r.e7)([f.Z, m.Z], () => f.Z.inDevModeForApplication(l.application.id) || m.Z.inTestModeForApplication(l.application.id), [l.application.id]), {
    application: Y
  } = l, U = i.useCallback(e => e && (null == E ? void 0 : E({
    applicationId: l.application.id
  })), [l.application.id, E]), w = (0, d.O)(U, .8, !0), [G, W] = i.useState(!1), [z, J] = i.useState(G);
  i.useEffect(() => {
    G && J(!0)
  }, [G]);
  let q = () => W(!0),
    K = () => W(!1),
    X = g.Sb.useSetting(),
    $ = i.useCallback(() => {
      null == H || H(), u.ZP.maybeQueryForInstallLessApps(Y.id, null == a ? void 0 : a.id)
    }, [Y.id, null == a ? void 0 : a.id, H]);
  return (0, t.jsxs)(o.Clickable, {
    onClick: O === _.JS.START ? $ : void 0,
    onContextMenu: X ? e => {
      (0, c.vq)(e, e => (0, t.jsx)(M.Z, {
        application: Y,
        ...e
      }))
    } : void 0,
    className: s()(D.activityItem, {
      [D.large]: !0 === h,
      [D.disabled]: O !== _.JS.START
    }),
    children: [(0, t.jsxs)("div", {
      ref: w,
      className: s()(D.activityImageContainer, {
        [D.large]: !0 === h
      }),
      onMouseEnter: q,
      onFocus: q,
      onMouseLeave: K,
      onBlur: K,
      children: [(0, t.jsx)(j.Z, {
        imageBackground: V,
        applicationName: Y.name,
        imageClassName: s()(D.activityImage, {
          [D.large]: !0 === h
        }),
        imageNotFoundClassName: D.brokenImageIconWrapper
      }), null != R && z && O === _.JS.START ? (0, t.jsx)("div", {
        className: s()(D.activityVideo, {
          [D.videoFadeOut]: !G
        }),
        onAnimationEnd: () => G ? null : J(!1),
        children: (0, t.jsx)(x.Z, {
          className: D.activityVideo,
          src: R,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null, O !== _.JS.START ? (0, t.jsx)(S.U, {
        action: O,
        onClick: $
      }) : null, (0, t.jsx)("div", {
        className: D.overlayBadge,
        children: (0, t.jsx)("div", {
          className: D.badgeContainer,
          children: (0, t.jsx)(Z.Z, {
            name: Y.name,
            labelType: P
          })
        })
      }), k ? (0, t.jsx)(o.Tooltip, {
        text: A.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: e => (0, t.jsx)("div", {
          className: D.devShelfBadge,
          ...e,
          children: (0, t.jsx)(v.Z, {
            className: D.devShelfIcon
          })
        })
      }) : null]
    }), (0, t.jsxs)("div", {
      className: s()(D.activityTextContainer, {
        [D.large]: h
      }),
      children: [h ? (0, t.jsx)(o.Text, {
        className: D.activityMaxParticipantsLarge,
        variant: "text-xs/normal",
        color: "interactive-normal",
        children: (0, C.Z)(null !== (n = Y.maxParticipants) && void 0 !== n ? n : 0)
      }) : null, (0, t.jsxs)("div", {
        className: D.activityName,
        children: [(0, t.jsx)(o.Heading, {
          className: D.activityTitleText,
          variant: "heading-md/semibold",
          color: "interactive-active",
          children: Y.name
        }), null != F ? (0, t.jsx)(o.Tooltip, {
          text: F,
          children: e => (0, t.jsx)("img", {
            className: D.staffBadge,
            alt: F,
            src: y,
            ...e
          })
        }) : null]
      }), (0, t.jsx)(L, {
        activity: null == B ? void 0 : B.embeddedActivity,
        application: Y,
        channel: a,
        guildId: p,
        large: h
      }), (0, t.jsx)("div", {
        className: D.activityTagsContainer,
        children: Y.tags.slice(0, 3).map(e => (0, t.jsx)(b, {
          value: e
        }, "activity-tag-".concat(Y.id, "-").concat(e)))
      })]
    })]
  })
}