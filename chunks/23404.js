n(47120);
var s = n(735250),
  i = n(470079),
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
  T = n(918701),
  g = n(566078),
  p = n(602667),
  N = n(611855),
  S = n(670638),
  C = n(667105),
  A = n(860151),
  f = n(46140),
  Z = n(981631),
  L = n(689938),
  O = n(199519);

function v(e) {
  var t;
  let {
    quest: n
  } = e, i = (0, _.B6)(n.config.expiresAt), l = (0, _.B6)(g.r.build(n.config).rewardsExpireAt), a = (0, r.e7)([d.Z], () => d.Z.getState().theme), u = (0, o.w)(a) ? Z.BRd.DARK : Z.BRd.LIGHT, E = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, s.jsxs)("div", {
    className: O.heading,
    children: [(0, s.jsx)("img", {
      className: O.headingGameTile,
      alt: "",
      src: (0, T.uo)(n, u)
    }), (0, s.jsxs)("div", {
      className: O.headingCopy,
      children: [(0, s.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: E ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : L.Z.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, s.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: E ? L.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
          expirationDate: l
        }) : L.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
          expirationDate: i
        })
      })]
    })]
  })
}
t.Z = function(e) {
  var t, n, l;
  let {
    quest: o
  } = e, d = (0, r.e7)([I.Z], () => I.Z.isEnrolling(o.id), [o]), [g, R] = i.useState(!1), P = i.useCallback(() => R(!0), []), x = i.useCallback(() => R(!1), []), M = i.useCallback(e => {
    e.stopPropagation()
  }, []), D = i.useCallback(() => {
    (0, h.AH)(o.id, {
      questContent: m.jn.ACTIVITY_PANEL,
      questContentCTA: E.jZ.ACCEPT_QUEST
    })
  }, [o]), b = i.useCallback(() => {
    null != o && ((0, E._3)({
      questId: o.id,
      questContent: m.jn.ACTIVITY_PANEL,
      questContentCTA: E.jZ.TRACK_PROGRESS
    }), u.Z.open(Z.oAB.INVENTORY))
  }, [o]), y = i.useCallback(() => {
    (0, E._3)({
      questId: o.id,
      questContent: m.jn.ACTIVITY_PANEL,
      questContentCTA: E.jZ.LEARN_MORE
    }), u.Z.open(Z.oAB.INVENTORY)
  }, [o]), j = (0, C.hf)({
    quest: o,
    location: m.jn.ACTIVITY_PANEL
  }), U = (0, _.tP)(o), G = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, w = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, k = (null === (l = o.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
  return (null == o ? void 0 : o.userStatus) == null || (0, T.zE)(o.userStatus, m.jn.ACTIVITY_PANEL) || U || k || !(0, T.dl)(o) ? null : (0, s.jsx)(p.A, {
    questOrQuests: o,
    questContent: m.jn.ACTIVITY_PANEL,
    children: e => {
      var t;
      return (0, s.jsxs)("div", {
        ref: t => {
          e.current = t
        },
        className: a()(O.wrapper, {
          [O.wrapperQuestAccepted]: G
        }),
        onClick: M,
        onKeyPress: M,
        onFocus: P,
        onMouseEnter: P,
        onBlur: x,
        onMouseLeave: x,
        children: [(0, s.jsxs)("div", {
          className: O.utils,
          children: [G ? (0, s.jsx)(v, {
            quest: o
          }) : (0, s.jsx)(N.Z, {
            textOpacity: .5
          }), (0, s.jsx)(S.r, {
            quest: o,
            questContent: m.jn.ACTIVITY_PANEL,
            shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
            showShareLink: !0,
            children: e => (0, s.jsx)(c.Clickable, {
              ...e,
              "aria-label": L.Z.Messages.ACTIONS,
              children: (0, s.jsx)(c.MoreHorizontalIcon, {
                size: "md",
                color: "currentColor",
                className: O.submenuIcon
              })
            })
          })]
        }), !G && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(v, {
            quest: o
          }), (0, s.jsx)(c.Text, {
            className: O.instructions,
            variant: "text-sm/normal",
            color: "text-normal",
            children: (0, T.pG)({
              quest: o,
              location: f.dr.ACTIVITY_PANEL
            })
          })]
        }), G && !w && (0, s.jsx)(A.Z, {
          autoplay: g,
          className: O.rewardTileWithInstructions,
          quest: o,
          questContent: m.jn.ACTIVITY_PANEL,
          questExperimentLocation: f.dr.ACTIVITY_PANEL
        }), (0, s.jsxs)("div", {
          className: O.ctas,
          children: [!G && (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(c.Button, {
              className: O.cta,
              color: c.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: c.Button.Sizes.SMALL,
              onClick: y,
              children: L.Z.Messages.QUESTS_LEARN_MORE_V2
            }), (0, s.jsx)(c.Button, {
              className: O.cta,
              color: c.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: D,
              size: c.Button.Sizes.SMALL,
              submitting: d,
              children: L.Z.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), G && !w && (0, s.jsx)(c.Button, {
            className: O.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: b,
            size: c.Button.Sizes.SMALL,
            children: L.Z.Messages.QUESTS_CHECK_PROGRESS
          }), w && (0, s.jsx)(c.Button, {
            className: O.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: j,
            size: c.Button.Sizes.SMALL,
            children: L.Z.Messages.QUESTS_CLAIM_REWARD
          })]
        })]
      })
    }
  })
}