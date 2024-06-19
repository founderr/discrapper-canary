n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(663002),
  c = n(481060),
  u = n(230711),
  d = n(210887),
  E = n(617136),
  h = n(272008),
  _ = n(113434),
  I = n(569984),
  m = n(497505),
  g = n(918701),
  p = n(566078),
  T = n(602667),
  N = n(611855),
  S = n(670638),
  C = n(667105),
  A = n(860151),
  f = n(46140),
  Z = n(981631),
  v = n(689938),
  L = n(199519);

function O(e) {
  var t;
  let {
    quest: n
  } = e, s = (0, _.B6)(n.config.expiresAt), l = (0, _.B6)(p.r.build(n.config).rewardsExpireAt), a = (0, r.e7)([d.Z], () => d.Z.getState().theme), u = (0, o.w)(a) ? Z.BRd.DARK : Z.BRd.LIGHT, E = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, i.jsxs)("div", {
    className: L.heading,
    children: [(0, i.jsx)("img", {
      className: L.headingGameTile,
      alt: "",
      src: (0, g.uo)(n, u)
    }), (0, i.jsxs)("div", {
      className: L.headingCopy,
      children: [(0, i.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: E ? v.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : v.Z.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, i.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: E ? v.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
          expirationDate: l
        }) : v.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
          expirationDate: s
        })
      })]
    })]
  })
}
t.Z = function(e) {
  var t, n, l;
  let {
    quest: o
  } = e, d = (0, r.e7)([I.Z], () => I.Z.isEnrolling(o.id), [o]), [p, R] = s.useState(!1), x = s.useCallback(() => R(!0), []), M = s.useCallback(() => R(!1), []), P = s.useCallback(e => {
    e.stopPropagation()
  }, []), D = s.useCallback(() => {
    (0, h.AH)(o.id, {
      questContent: m.jn.ACTIVITY_PANEL,
      questContentCTA: E.jZ.ACCEPT_QUEST
    })
  }, [o]), b = s.useCallback(() => {
    null != o && ((0, E._3)({
      questId: o.id,
      questContent: m.jn.ACTIVITY_PANEL,
      questContentCTA: E.jZ.TRACK_PROGRESS
    }), u.Z.open(Z.oAB.INVENTORY))
  }, [o]), y = s.useCallback(() => {
    (0, E._3)({
      questId: o.id,
      questContent: m.jn.ACTIVITY_PANEL,
      questContentCTA: E.jZ.LEARN_MORE
    }), u.Z.open(Z.oAB.INVENTORY)
  }, [o]), j = (0, C.hf)({
    quest: o,
    location: m.jn.ACTIVITY_PANEL
  }), U = (0, _.tP)(o), G = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, w = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, k = (null === (l = o.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
  return (null == o ? void 0 : o.userStatus) == null || (0, g.zE)(o.userStatus, m.jn.ACTIVITY_PANEL) || U || k || !(0, g.dl)(o) ? null : (0, i.jsx)(T.A, {
    questOrQuests: o,
    questContent: m.jn.ACTIVITY_PANEL,
    children: e => {
      var t;
      return (0, i.jsxs)("div", {
        ref: t => {
          e.current = t
        },
        className: a()(L.wrapper, {
          [L.wrapperQuestAccepted]: G
        }),
        onClick: P,
        onKeyPress: P,
        onFocus: x,
        onMouseEnter: x,
        onBlur: M,
        onMouseLeave: M,
        children: [(0, i.jsxs)("div", {
          className: L.utils,
          children: [G ? (0, i.jsx)(O, {
            quest: o
          }) : (0, i.jsx)(N.Z, {
            textOpacity: .5
          }), (0, i.jsx)(S.r, {
            quest: o,
            questContent: m.jn.ACTIVITY_PANEL,
            shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
            showShareLink: !0,
            children: e => (0, i.jsx)(c.Clickable, {
              ...e,
              "aria-label": v.Z.Messages.ACTIONS,
              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                size: "md",
                color: "currentColor",
                className: L.submenuIcon
              })
            })
          })]
        }), !G && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(O, {
            quest: o
          }), (0, i.jsx)(c.Text, {
            className: L.instructions,
            variant: "text-sm/normal",
            color: "text-normal",
            children: (0, g.pG)({
              quest: o,
              location: f.dr.ACTIVITY_PANEL
            })
          })]
        }), G && !w && (0, i.jsx)(A.Z, {
          autoplay: p,
          className: L.rewardTileWithInstructions,
          quest: o,
          questContent: m.jn.ACTIVITY_PANEL,
          questExperimentLocation: f.dr.ACTIVITY_PANEL
        }), (0, i.jsxs)("div", {
          className: L.ctas,
          children: [!G && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(c.Button, {
              className: L.cta,
              color: c.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: c.Button.Sizes.SMALL,
              onClick: y,
              children: v.Z.Messages.QUESTS_LEARN_MORE_V2
            }), (0, i.jsx)(c.Button, {
              className: L.cta,
              color: c.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: D,
              size: c.Button.Sizes.SMALL,
              submitting: d,
              children: v.Z.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), G && !w && (0, i.jsx)(c.Button, {
            className: L.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: b,
            size: c.Button.Sizes.SMALL,
            children: v.Z.Messages.QUESTS_CHECK_PROGRESS
          }), w && (0, i.jsx)(c.Button, {
            className: L.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: j,
            size: c.Button.Sizes.SMALL,
            children: v.Z.Messages.QUESTS_CLAIM_REWARD
          })]
        })]
      })
    }
  })
}