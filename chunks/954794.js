t.d(s, {
  Z: function() {
    return u
  }
});
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(692547),
  r = t(481060),
  o = t(996753),
  c = t(823379),
  E = t(882029),
  d = t(955204),
  _ = t(248998),
  T = t(689938),
  S = t(189542);

function u(e) {
  let {
    onBackClick: s
  } = e, t = (0, a.e7)([E.Z], () => E.Z.getAllUnlockedAchievements()), u = i.useMemo(() => Object.values(t).sort((e, s) => s.dateUnlocked - e.dateUnlocked), [t]), I = i.useMemo(() => Object.values(d.LG).filter(c.lm).filter(e => null == t[e.id]).sort((e, s) => e.rarity - s.rarity), [t]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.FormSection, {
      children: (0, n.jsxs)(r.Clickable, {
        onClick: s,
        className: S.backContainer,
        children: [(0, n.jsx)(o.Z, {
          direction: o.Z.Directions.LEFT,
          className: S.icon
        }), (0, n.jsx)(r.Text, {
          variant: "text-lg/normal",
          color: "text-normal",
          children: T.Z.Messages.BACK
        })]
      })
    }), (0, n.jsxs)("div", {
      className: S.headerContainer,
      children: [(0, n.jsxs)("div", {
        className: S.headerTextContainer,
        children: [(0, n.jsx)(r.Heading, {
          variant: "heading-lg/extrabold",
          color: "header-primary",
          children: T.Z.Messages.POGGERMODE_ACHIEVEMENT_TITLE
        }), (0, n.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: T.Z.Messages.POGGERMODE_ACHIEVEMENT_DESCRIPTION
        })]
      }), (0, n.jsx)("div", {
        className: S.headerIcon,
        children: (0, n.jsx)(r.TrophyIcon, {
          size: "custom",
          color: l.Z.unsafe_rawColors.ORANGE_345.css,
          width: 40,
          height: 40
        })
      })]
    }), u.length > 0 && (0, n.jsx)(r.FormSection, {
      className: S.divider,
      children: (0, n.jsx)("div", {
        className: S.achievementGrid,
        children: u.map(e => {
          let {
            achievementId: s,
            dateUnlocked: t
          } = e;
          return (0, n.jsx)(_.Z, {
            achievementId: s,
            dateUnlocked: t
          }, s)
        })
      })
    }), I.length > 0 && (0, n.jsxs)(r.FormSection, {
      className: S.divider,
      children: [(0, n.jsx)("div", {
        className: S.headerTextContainer,
        children: (0, n.jsx)(r.Text, {
          variant: "text-md/bold",
          color: "header-secondary",
          children: T.Z.Messages.POGGERMODE_ACHIEVEMENT_LOCKED_TITLE
        })
      }), (0, n.jsx)("div", {
        className: S.achievementGrid,
        children: I.map(e => (0, n.jsx)(_.Z, {
          achievementId: e.id
        }, e.id))
      })]
    }), (0, n.jsx)(r.FormSection, {
      className: S.divider,
      children: (0, n.jsx)("div", {
        className: S.bottomPadding
      })
    })]
  })
}