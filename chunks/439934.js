n.d(t, {
  Z: function() {
    return O
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(239091),
  d = n(434650),
  u = n(213459),
  g = n(695346),
  p = n(594174),
  v = n(695103),
  m = n(880448),
  x = n(602623),
  I = n(810090),
  h = n(823379),
  _ = n(5192),
  f = n(624138),
  T = n(115130),
  C = n(147865),
  E = n(542094),
  S = n(665811),
  j = n(182906),
  N = n(556505),
  M = n(513202),
  A = n(823531),
  Z = n(689938),
  b = n(398831),
  y = n(969728);

function D(e) {
  let {
    value: t,
    icon: n
  } = e;
  return (0, i.jsxs)(o.Text, {
    className: b.activityTag,
    color: "interactive-normal",
    variant: "text-xs/semibold",
    children: [(0, h.lm)(n) ? (0, i.jsx)(n, {
      className: b.icon
    }) : null, t]
  })
}

function L(e) {
  let {
    activity: t,
    application: n,
    channel: a,
    guildId: l,
    large: s = !1
  } = e, c = (0, r.Wu)([p.default], () => {
    var e;
    return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : []).map(e => {
      let [t] = e;
      return p.default.getUser(t)
    }).filter(h.lm)
  }), d = _.ZP.getName(l, null == a ? void 0 : a.id, null == c ? void 0 : c[0]);
  if (d = (0, f.aF)(d, 15), null == t || 0 === c.length) {
    var u, g;
    let e = "".concat((0, C.Z)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0));
    return s && (e = null !== (g = n.description) && void 0 !== g ? g : ""), (0, i.jsx)(o.Text, {
      className: b.activitySubtitleText,
      variant: "text-xs/normal",
      color: "interactive-normal",
      children: e
    })
  }
  return (0, i.jsxs)("div", {
    className: b.activitySubtitleText,
    children: [(0, i.jsx)(o.Text, {
      className: b.usersArePlayingText,
      variant: "text-xs/normal",
      children: c.length > 1 ? Z.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: d,
        count: c.length - 1
      }) : Z.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: d
      })
    }), (0, i.jsx)(x.Z, {
      size: s ? x.u.SIZE_24 : x.u.SIZE_16,
      guildId: l,
      users: c,
      max: 6
    })]
  })
}

function O(e) {
  var t;
  let {
    activityItem: n,
    channel: l,
    guildId: p,
    locationObject: x,
    onActivityItemVisible: h,
    onActivityItemSelected: _,
    large: f = !1
  } = e, {
    imageBackground: O,
    videoUrl: B,
    activityAction: V,
    joinableEmbeddedApp: R,
    onActivityItemSelected: k,
    labelType: H,
    staffReleasePhase: F
  } = (0, E.ZP)({
    activityItem: n,
    channel: l,
    guildId: p,
    locationObject: x,
    onActivityItemVisible: h,
    onActivityItemSelected: _,
    embeddedActivitiesManager: M.Z
  }), P = (0, r.e7)([T.Z, v.Z], () => T.Z.inDevModeForApplication(n.application.id) || v.Z.inTestModeForApplication(n.application.id), [n.application.id]), {
    application: U
  } = n, Y = a.useCallback(e => e && (null == h ? void 0 : h({
    applicationId: n.application.id
  })), [n.application.id, h]), w = (0, d.O)(Y, .8, !0), [G, W] = a.useState(!1), [z, q] = a.useState(G);
  a.useEffect(() => {
    G && q(!0)
  }, [G]);
  let J = () => W(!0),
    K = () => W(!1),
    X = g.Sb.useSetting(),
    $ = a.useCallback(() => {
      null == k || k(), u.ZP.maybeQueryForInstallLessApps(U.id, null == l ? void 0 : l.id)
    }, [U.id, null == l ? void 0 : l.id, k]);
  return (0, i.jsxs)(o.Clickable, {
    onClick: V === E.JS.START ? $ : void 0,
    onContextMenu: X ? e => {
      (0, c.vq)(e, e => (0, i.jsx)(A.Z, {
        application: U,
        ...e
      }))
    } : void 0,
    className: s()(b.activityItem, {
      [b.large]: !0 === f,
      [b.disabled]: V !== E.JS.START
    }),
    children: [(0, i.jsxs)("div", {
      ref: w,
      className: s()(b.activityImageContainer, {
        [b.large]: !0 === f
      }),
      onMouseEnter: J,
      onFocus: J,
      onMouseLeave: K,
      onBlur: K,
      children: [(0, i.jsx)(j.Z, {
        imageBackground: O,
        applicationName: U.name,
        imageClassName: s()(b.activityImage, {
          [b.large]: !0 === f
        }),
        imageNotFoundClassName: b.brokenImageIconWrapper
      }), null != B && z && V === E.JS.START ? (0, i.jsx)("div", {
        className: s()(b.activityVideo, {
          [b.videoFadeOut]: !G
        }),
        onAnimationEnd: () => G ? null : q(!1),
        children: (0, i.jsx)(I.Z, {
          className: b.activityVideo,
          src: B,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null, V !== E.JS.START ? (0, i.jsx)(S.U, {
        action: V,
        onClick: $
      }) : null, (0, i.jsx)("div", {
        className: b.overlayBadge,
        children: (0, i.jsx)("div", {
          className: b.badgeContainer,
          children: (0, i.jsx)(N.Z, {
            name: U.name,
            labelType: H
          })
        })
      }), P ? (0, i.jsx)(o.Tooltip, {
        text: Z.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: e => (0, i.jsx)("div", {
          className: b.devShelfBadge,
          ...e,
          children: (0, i.jsx)(m.Z, {
            className: b.devShelfIcon
          })
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: s()(b.activityTextContainer, {
        [b.large]: f
      }),
      children: [f ? (0, i.jsx)(o.Text, {
        className: b.activityMaxParticipantsLarge,
        variant: "text-xs/normal",
        color: "interactive-normal",
        children: (0, C.Z)(null !== (t = U.maxParticipants) && void 0 !== t ? t : 0)
      }) : null, (0, i.jsxs)("div", {
        className: b.activityName,
        children: [(0, i.jsx)(o.Heading, {
          className: b.activityTitleText,
          variant: "heading-md/semibold",
          color: "interactive-active",
          children: U.name
        }), null != F ? (0, i.jsx)(o.Tooltip, {
          text: F,
          children: e => (0, i.jsx)("img", {
            className: b.staffBadge,
            alt: F,
            src: y,
            ...e
          })
        }) : null]
      }), (0, i.jsx)(L, {
        activity: null == R ? void 0 : R.embeddedActivity,
        application: U,
        channel: l,
        guildId: p,
        large: f
      }), (0, i.jsx)("div", {
        className: b.activityTagsContainer,
        children: U.tags.slice(0, 3).map(e => (0, i.jsx)(D, {
          value: e
        }, "activity-tag-".concat(U.id, "-").concat(e)))
      })]
    })]
  })
}