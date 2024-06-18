"use strict";
t.d(s, {
  Z: function() {
    return Z
  },
  j: function() {
    return U
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(852860),
  d = t(977258),
  u = t(45966),
  E = t(473403),
  _ = t(454585),
  I = t(323502),
  T = t(958832),
  N = t(324067),
  m = t(984933),
  S = t(514342),
  h = t(259580),
  g = t(999382),
  C = t(743475),
  x = t(889369),
  R = t(570961),
  L = t(208665),
  O = t(868814),
  A = t(974513),
  p = t(2348),
  M = t(353890),
  f = t(716130),
  D = t(689938),
  v = t(924337);

function j(e) {
  let {
    guild: s
  } = e, l = (0, r.e7)([u.Z], () => u.Z.getEnabled(s.id)), a = (0, r.e7)([T.Z], () => T.Z.hasFetched(s.id)), c = (0, O.Z)(s), N = (0, r.e7)([x.Z], () => x.Z.editedDefaultChannelIds), m = c.filter(e => !N.has(e.id)), [h, g] = i.useState(!1);
  i.useEffect(() => {
    !a && !l && (0, I.S)(s.id)
  }, [s.id, a, l]);
  let R = e => {
    (0, o.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("99387"), t.e("35641")]).then(t.bind(t, 89216));
      return t => (0, n.jsx)(i, {
        ...t,
        guildId: s.id,
        startingChannelId: e
      })
    })
  };
  return h || 0 === m.length ? null : (0, n.jsxs)("div", {
    className: v.recommendations,
    children: [(0, n.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      children: D.Z.Messages.CHANNEL_RECOMMENDED
    }), (0, n.jsxs)("div", {
      className: v.recsSubheader,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: D.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RECOMMENDED_DESCRIPTION
      }), (0, n.jsxs)(o.Clickable, {
        className: v.dismissAll,
        onClick: () => g(!0),
        children: [(0, n.jsx)(o.CheckmarkLargeIcon, {
          size: "xxs",
          color: "currentColor",
          className: v.checkmark
        }), (0, n.jsx)(o.Text, {
          className: v.dismissAllText,
          variant: "text-xs/medium",
          color: "text-brand",
          children: D.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RECOMMENDED_DISMISS_ALL
        })]
      })]
    }), (0, n.jsx)("div", {
      className: v.recommendedChannels,
      children: m.map((e, t) => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)("div", {
          className: v.channelRow,
          children: [(0, n.jsxs)("div", {
            className: v.channelInfo,
            children: [(0, n.jsxs)("div", {
              className: v.channelName,
              children: [(0, n.jsx)(E._, {
                channel: e,
                guild: s
              }), (0, n.jsx)(S.Z, {
                className: v.__invalid_name,
                children: (0, n.jsx)(o.Text, {
                  className: v.__invalid_channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: "text-normal",
                  children: e.name
                })
              })]
            }), null != e.topic && e.topic.length > 0 ? (0, n.jsx)(S.Z, {
              children: (0, n.jsx)(o.Text, {
                className: v.topic,
                variant: "text-xs/normal",
                children: _.Z.parseTopic(e.topic, !0, {
                  channelId: e.id
                })
              })
            }, "topic") : null]
          }), (0, d.s)(s.id, e.id) ? (0, n.jsx)(o.Button, {
            color: o.Button.Colors.BRAND,
            size: o.Button.Sizes.SMALL,
            className: v.addChannelCTA,
            onClick: () => (0, C.pt)(e.id),
            children: D.Z.Messages.ADD
          }) : (0, n.jsxs)(o.Button, {
            look: o.Button.Looks.OUTLINED,
            color: o.Button.Colors.PRIMARY,
            className: v.lockedPill,
            innerClassName: v.lockedPillInner,
            onClick: () => R(e.id),
            children: [(0, n.jsx)(o.LockIcon, {
              size: "xs",
              color: "currentColor"
            }), (0, n.jsx)(o.Text, {
              variant: "text-sm/medium",
              children: D.Z.Messages.UNLOCK
            })]
          })]
        }), t < m.length - 1 ? (0, n.jsx)("div", {
          className: v.separator
        }) : null]
      }))
    }), (0, n.jsx)("div", {
      className: v.largeSeparator
    })]
  })
}

function Z(e) {
  let {
    saveOnClose: s = !1
  } = e, t = (0, r.e7)([g.Z], () => g.Z.getGuild()), l = (0, r.e7)([u.Z], () => u.Z.isLoading()), c = (0, r.e7)([m.ZP], () => m.ZP.getChannels(null == t ? void 0 : t.id)), d = (0, r.e7)([N.Z], () => N.Z.getCategories(null == t ? void 0 : t.id)), E = (0, r.e7)([L.Z], () => L.Z.advancedMode), _ = i.useRef(null), [I, T] = i.useState(!1);
  return (i.useEffect(() => {
    if (s) return () => {
      null != t && (0, C.DO)(t).then(() => {
        E && (0, R.rS)(t, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }).catch(() => {})
    }
  }, [s, E]), null == t) ? null : l ? (0, n.jsx)(o.Spinner, {}) : (0, n.jsxs)("div", {
    className: v.columns,
    children: [(0, n.jsxs)("div", {
      className: v.channelBrowser,
      children: [(0, n.jsx)(o.Clickable, {
        className: v.collapseButton,
        onClick: () => T(e => !e),
        children: (0, n.jsx)(h.Z, {
          direction: I ? h.Z.Directions.DOWN : h.Z.Directions.UP,
          height: 16,
          width: 16
        })
      }), (0, n.jsx)(o.Heading, {
        className: v.header,
        variant: "heading-lg/extrabold",
        children: D.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: D.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS_SUBHEADER
      }), (0, n.jsx)(A.Wu, {
        className: v.advancedModeToggle,
        guildId: t.id
      }), I ? null : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(j, {
          guild: t
        }), (0, n.jsx)(p.Z, {
          className: a()(v.channelBrowserOuter),
          guild: t,
          categories: d,
          channels: c,
          hasSidebar: !1
        })]
      }), E && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: v.largeSeparator
        }), (0, n.jsx)(o.Heading, {
          className: v.prejoinHeader,
          variant: "heading-lg/extrabold",
          children: D.Z.Messages.GUILD_SETTINGS_PRE_JOIN_QUESTIONS_HEADER
        }), (0, n.jsx)(o.Text, {
          className: v.prejoinSubHeader,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: D.Z.Messages.GUILD_SETTINGS_PRE_JOIN_QUESTIONS_SUBHEADER
        }), (0, n.jsx)("div", {
          ref: _,
          className: v.advancedModeQuestions,
          children: (0, n.jsx)(f.Z, {
            guildId: t.id,
            prejoinOnly: !0,
            includeCount: !0,
            singleColumn: !0
          })
        })]
      })]
    }), (0, n.jsx)(M.Z, {
      guild: t,
      scrollToQuestions: () => {
        null != _.current && _.current.scrollIntoView({
          behavior: "smooth"
        })
      }
    })]
  })
}

function U() {
  let e = (0, r.e7)([g.Z], () => g.Z.getProps().guild),
    s = (0, r.e7)([x.Z], () => x.Z.submitting),
    t = (0, r.e7)([L.Z], () => L.Z.advancedMode);
  return null == e ? null : (0, n.jsx)(c.Z, {
    onSave: () => {
      (0, C.DO)(e).then(() => {
        t && (0, R.rS)(e, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }).catch(() => {})
    },
    onReset: C.BG,
    submitting: s,
    onSaveText: D.Z.Messages.SAVE
  })
}