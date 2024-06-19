a.r(s), a.d(s, {
  default: function() {
    return _
  }
}), a(47120);
var t = a(735250),
  i = a(470079),
  l = a(481060),
  n = a(626135),
  r = a(115345),
  c = a(57927),
  o = a(273236),
  d = a(931839),
  I = a(905987),
  N = a(789662),
  x = a(981631),
  T = a(689938),
  m = a(288429);

function _(e) {
  let {
    onClose: s,
    transitionState: a,
    dismissable: c,
    guildPain: _,
    myUsage: h
  } = e, [O, j] = i.useState(d.O.Intro), {
    submitted: g,
    submitting: M,
    saveSettings: v
  } = (0, r.vo)(s), {
    guildPlans: C,
    overrideGuild: A,
    getDebug: R
  } = (0, r.F6)(_, h), Z = i.useRef(null);
  return i.useEffect(() => {
    n.default.track(x.rMx.OPEN_MODAL, {
      type: "notification_migration_modal"
    })
  }, []), (0, t.jsxs)(l.ModalRoot, {
    className: m.__invalid_modal,
    transitionState: a,
    "aria-label": T.Z.Messages.NOTIFICATIONS,
    size: l.ModalSize.DYNAMIC,
    children: [(0, t.jsx)(d.Z, {
      selectedTab: O,
      onClick: j,
      submitted: g
    }), O === d.O.Intro ? (0, t.jsx)(o.Z, {
      ref: Z
    }) : O === d.O.Customize ? (0, t.jsx)(u, {
      guildPlans: C,
      overrideGuild: A,
      getDebug: R
    }) : (0, t.jsx)(I.Z, {
      count: Object.values(C).filter(e => {
        var s;
        return (null !== (s = e.overrideMode) && void 0 !== s ? s : e.mode) === N.AR.UseGreyDot
      }).length
    }), (0, t.jsxs)(l.ModalFooter, {
      className: m.buttons,
      children: [(0, t.jsxs)("div", {
        className: m.__invalid_left,
        children: [c || O !== d.O.Tips && O !== d.O.Customize ? null : (0, t.jsx)(l.Anchor, {
          className: m.dismiss,
          href: "https://dis.gd/better-muting",
          children: (0, t.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: T.Z.Messages.LEARN_MORE
          })
        }), c && O === d.O.Intro ? (0, t.jsx)(l.Clickable, {
          className: m.dismiss,
          onClick: s,
          children: (0, t.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: T.Z.Messages.DISMISS
          })
        }) : null, c && O === d.O.Customize ? (0, t.jsx)(l.Clickable, {
          className: m.dismiss,
          onClick: s,
          children: (0, t.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: T.Z.Messages.CANCEL
          })
        }) : null]
      }), (0, t.jsxs)("div", {
        className: m.right,
        children: [O === d.O.Customize ? (0, t.jsx)(l.Text, {
          className: m.warning,
          variant: "text-xs/medium",
          color: "text-muted",
          children: T.Z.Messages.NOTIF_MIGRATION_BACKUP
        }) : null, O !== d.O.Customize || g ? null : (0, t.jsxs)(l.Button, {
          onClick: () => j(d.O.Intro),
          color: l.Button.Colors.TRANSPARENT,
          children: [(0, t.jsx)(l.ArrowSmallLeftIcon, {
            size: "xs",
            color: "currentColor"
          }), " ", T.Z.Messages.BACK]
        }), O === d.O.Intro ? (0, t.jsxs)(l.Button, {
          onClick: () => {
            var e;
            (null === (e = Z.current) || void 0 === e ? void 0 : e.maybeChangeToAfterTab()) && j(d.O.Customize)
          },
          children: [T.Z.Messages.TRY_IT_OUT, " ", (0, t.jsx)(l.ArrowSmallRightIcon, {
            size: "xs",
            color: "currentColor"
          })]
        }) : O === d.O.Customize ? (0, t.jsxs)(l.Button, {
          onClick: () => {
            j(d.O.Tips), v(C)
          },
          children: [T.Z.Messages.APPLY, " ", (0, t.jsx)(l.CheckmarkLargeIcon, {
            size: "xs",
            color: "currentColor"
          })]
        }) : (0, t.jsx)(l.Button, {
          submitting: M,
          onClick: s,
          children: T.Z.Messages.CLOSE
        })]
      })]
    })]
  })
}

function u(e) {
  let {
    guildPlans: s,
    overrideGuild: a
  } = e;
  return (0, t.jsxs)(l.Scroller, {
    className: m.content,
    children: [(0, t.jsxs)("div", {
      className: m.header,
      children: [(0, t.jsx)(l.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: T.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
      }), (0, t.jsx)(l.Text, {
        className: m.__invalid_subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: T.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SUB_TITLE
      })]
    }), (0, t.jsx)(c.Z, {
      guildPlans: s,
      overrideGuild: a
    })]
  })
}