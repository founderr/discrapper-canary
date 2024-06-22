n.d(t, {
  Z: function() {
    return O
  },
  i: function() {
    return L
  }
}), n(47120), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(77866),
  o = n(748780),
  c = n(442837),
  u = n(704215),
  d = n(481060),
  h = n(699682),
  m = n(367907),
  p = n(812206),
  E = n(644914),
  g = n(434404),
  f = n(330010),
  C = n(314897),
  _ = n(430824),
  I = n(594174),
  x = n(259580),
  T = n(585483),
  N = n(63063),
  Z = n(358085),
  S = n(709054),
  v = n(967128),
  A = n(981631),
  M = n(231873),
  R = n(689938),
  j = n(715287);

function L(e) {
  let {
    className: t,
    iconUrl: n,
    icon: s,
    header: r,
    completed: o,
    onClick: c
  } = e, [u, m] = i.useState(!1), p = (0, h.Z)(o);
  return i.useEffect(() => {
    null != p && o !== p && (m(!0), setTimeout(() => m(!1), 1e3))
  }, [o, p]), (0, l.jsxs)(d.Clickable, {
    className: a()(t, j.card, {
      [j.completed]: o
    }),
    onClick: c,
    children: [null != s ? s : (0, l.jsx)("div", {
      className: j.icon,
      style: {
        backgroundImage: "url('".concat(n, "')")
      }
    }), (0, l.jsx)(d.Text, {
      color: "header-primary",
      className: a()(j.cardTextContainer, j.cardHeader),
      variant: "text-sm/normal",
      children: r
    }), o ? (0, l.jsx)(d.CheckmarkLargeIcon, {
      size: "md",
      color: "currentColor",
      className: a()(j.checkmark, {
        [j.animate]: u
      })
    }) : (0, l.jsx)(x.Z, {
      className: j.arrow,
      direction: x.Z.Directions.RIGHT
    })]
  })
}

function O(e) {
  let {
    channel: t
  } = e, s = (0, c.e7)([_.Z], () => null != t ? _.Z.getGuild(t.getGuildId()) : null, [t]), h = null != s && S.default.extractTimestamp(s.id) < Date.now() - A._8R, x = (0, c.e7)([C.default], () => (null == s ? void 0 : s.ownerId) === C.default.getId(), [s]), {
    canInvite: O,
    canManageGuild: P,
    canMessage: b
  } = (0, E.TE)(t, s), y = (0, c.e7)([I.default], () => {
    var e, t;
    return (null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0
  }), {
    guildPopulated: D,
    guildMessaged: U,
    guildPersonalized: k
  } = (0, E.h_)(s), {
    handleInvite: w,
    handleMessage: H,
    handlePersonalize: B,
    handleDownload: G,
    handleAddApplication: V
  } = function(e) {
    let t = i.useCallback(() => {
        m.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: M.Ft.CHANNEL_WELCOME,
          action: M.j7.INVITE
        }), null != e && (0, d.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("7654"), n.e("9785")]).then(n.bind(n, 560114));
          return n => (0, l.jsx)(t, {
            ...n,
            guild: e,
            source: A.t4x.CHANNEL_WELCOME,
            analyticsLocation: {
              section: A.jXE.CHANNEL_WELCOME_CTA
            }
          })
        })
      }, [e]),
      s = i.useCallback(() => {
        m.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: M.Ft.CHANNEL_WELCOME,
          action: M.j7.SEND_MESSAGE
        }), T.S.dispatch(A.CkL.TEXTAREA_FOCUS, {
          highlight: !0,
          channelId: A.lds
        })
      }, []),
      a = i.useCallback(() => {
        m.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: M.Ft.CHANNEL_WELCOME,
          action: M.j7.PERSONALIZE_SERVER
        }), null != e && g.Z.open(e.id, A.pNK.OVERVIEW, {
          section: A.jXE.CHANNEL_WELCOME_CTA
        })
      }, [e]),
      r = i.useCallback(() => {
        m.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: M.Ft.CHANNEL_WELCOME,
          action: M.j7.DOWNLOAD
        }), (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, 431583));
          return t => (0, l.jsx)(e, {
            source: A.jXE.CHANNEL_WELCOME_CTA,
            ...t
          })
        })
      }, []);
    return {
      handleInvite: t,
      handleMessage: s,
      handlePersonalize: a,
      handleDownload: r,
      handleAddApplication: i.useCallback(() => {
        null != e && (m.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: M.Ft.CHANNEL_WELCOME,
          action: M.j7.ADD_APP
        }), (0, d.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("77875")]).then(n.bind(n, 657300));
          return n => {
            var i;
            return (0, l.jsx)(t, {
              guildId: null !== (i = e.id) && void 0 !== i ? i : "",
              ...n,
              analyticsType: u.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
            })
          }
        }))
      }, [e])
    }
  }(s), F = !(y || D || U || k), {
    titleAnimatedStyle: z,
    opacities: W
  } = function(e) {
    let t = (0, r.Z)(() => new o.Z.Value(0)),
      n = (0, r.Z)(() => new o.Z.Value(0)),
      l = [];
    return l.push((0, r.Z)(() => new o.Z.Value(0))), l.push((0, r.Z)(() => new o.Z.Value(0))), l.push((0, r.Z)(() => new o.Z.Value(0))), l.push((0, r.Z)(() => new o.Z.Value(0))), i.useEffect(() => {
      o.Z.stagger(300, [o.Z.parallel([o.Z.timing(n, {
        toValue: 1,
        duration: 450
      }), o.Z.timing(t, {
        toValue: 1,
        duration: 450
      })]), o.Z.stagger(100, [o.Z.timing(l[0], {
        toValue: 1,
        duration: 300
      }), o.Z.timing(l[1], {
        toValue: 1,
        duration: 300
      }), o.Z.timing(l[2], {
        toValue: 1,
        duration: 300
      }), o.Z.timing(l[3], {
        toValue: 1,
        duration: 300
      })])]).start()
    }, [n, t, l]), {
      titleAnimatedStyle: e ? {
        transform: [{
          translateY: t.interpolate({
            inputRange: [0, 1],
            outputRange: ["-20px", "0px"]
          })
        }],
        opacity: n
      } : {},
      opacities: l
    }
  }(F), Y = (0, c.e7)([p.Z], () => p.Z.getGuildApplicationIds(null == s ? void 0 : s.id)).length > 0;
  if (i.useEffect(() => {
      var e;
      (0, f.i)(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : A.lds)
    }, [s]), null == s) return null;
  let K = [];
  !h && (O && K.push((0, l.jsx)(o.Z.div, {
    className: j.cardWrapper,
    style: F ? {
      opacity: W[K.length]
    } : {},
    children: (0, l.jsx)(L, {
      iconUrl: n(538548),
      header: R.Z.Messages.WELCOME_CTA_INVITE_TITLE,
      completed: D,
      onClick: w
    })
  }, "invite")), P && K.push((0, l.jsx)(o.Z.div, {
    className: j.cardWrapper,
    style: F ? {
      opacity: W[K.length]
    } : {},
    children: (0, l.jsx)(L, {
      iconUrl: n(753033),
      header: R.Z.Messages.WELCOME_CTA_PERSONALIZE_TITLE,
      completed: k,
      onClick: B
    })
  }, "customize")), b && K.push((0, l.jsx)(o.Z.div, {
    className: j.cardWrapper,
    style: F ? {
      opacity: W[K.length]
    } : {},
    children: (0, l.jsx)(L, {
      iconUrl: n(15717),
      header: R.Z.Messages.WELCOME_CTA_MESSAGE_TITLE,
      completed: U,
      onClick: H
    })
  }, "message")), (0, Z.isWeb)() && K.push((0, l.jsx)(o.Z.div, {
    className: j.cardWrapper,
    style: F ? {
      opacity: W[K.length]
    } : {},
    children: (0, l.jsx)(L, {
      iconUrl: n(435921),
      header: R.Z.Messages.WELCOME_CTA_DOWNLOAD_TITLE,
      completed: y,
      onClick: G
    })
  }, "download")), K.push((0, l.jsx)(o.Z.div, {
    className: j.cardWrapper,
    style: F ? {
      opacity: W[K.length]
    } : {},
    children: (0, l.jsx)(L, {
      iconUrl: n(881454),
      header: R.Z.Messages.WELCOME_CTA_APPS_RECOMMENDATION_TITLE,
      completed: Y,
      onClick: V
    })
  }, "addapp")));
  let q = x ? R.Z.Messages.WELCOME_CTA_SUBTITLE_OWNER : R.Z.Messages.WELCOME_CTA_SUBTITLE_MEMBER;
  h && (q = R.Z.Messages.WELCOME_CTA_SUBTITLE_EXISTING_SERVER);
  let X = "".concat(N.Z.getArticleURL(A.BhN.GUILD_GETTING_STARTED), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm");
  return (0, l.jsx)(v.ZP, {
    channelId: t.id,
    children: (0, l.jsx)("div", {
      className: j.container,
      children: (0, l.jsxs)("div", {
        className: j.inner,
        children: [(0, l.jsxs)(o.Z.div, {
          style: z,
          children: [(0, l.jsx)(d.Heading, {
            className: j.titleName,
            variant: "heading-xxl/semibold",
            children: R.Z.Messages.WELCOME_CTA_TITLE.format({
              guildName: s.name
            })
          }), (0, l.jsxs)(d.Text, {
            color: "header-secondary",
            className: a()({
              [j.subtitle]: !0,
              [j.noChildren]: 0 === K.length
            }),
            variant: "text-sm/normal",
            children: [q, " ", K.length > 0 ? R.Z.Messages.WELCOME_CTA_SUBTITLE_ACTION_WITH_GUIDE.format({
              guideURL: X
            }) : null]
          })]
        }), K]
      })
    })
  })
}