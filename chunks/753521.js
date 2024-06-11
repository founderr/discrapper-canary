"use strict";
a.r(s), a.d(s, {
  default: function() {
    return _
  }
}), a("47120");
var t = a("735250"),
  l = a("470079"),
  i = a("481060"),
  n = a("824717"),
  d = a("877453"),
  r = a("263704"),
  c = a("626135"),
  o = a("115345"),
  u = a("57927"),
  h = a("273236"),
  N = a("931839"),
  x = a("905987"),
  I = a("789662"),
  T = a("981631"),
  m = a("689938"),
  f = a("351109");

function _(e) {
  let {
    onClose: s,
    transitionState: a,
    dismissable: u,
    guildPain: _,
    myUsage: j
  } = e, [g, M] = l.useState(N.Tab.Intro), {
    submitted: O,
    submitting: A,
    saveSettings: C
  } = (0, o.useSaveSettings)(s), {
    guildPlans: R,
    overrideGuild: E,
    getDebug: p
  } = (0, o.useGuildMigrationSteps)(_, j), b = l.useRef(null);
  return l.useEffect(() => {
    c.default.track(T.AnalyticEvents.OPEN_MODAL, {
      type: "notification_migration_modal"
    })
  }, []), (0, t.jsxs)(i.ModalRoot, {
    className: f.__invalid_modal,
    transitionState: a,
    "aria-label": m.default.Messages.NOTIFICATIONS,
    size: i.ModalSize.DYNAMIC,
    children: [(0, t.jsx)(N.default, {
      selectedTab: g,
      onClick: M,
      submitted: O
    }), g === N.Tab.Intro ? (0, t.jsx)(h.default, {
      ref: b
    }) : g === N.Tab.Customize ? (0, t.jsx)(v, {
      guildPlans: R,
      overrideGuild: E,
      getDebug: p
    }) : (0, t.jsx)(x.default, {
      count: Object.values(R).filter(e => {
        var s;
        return (null !== (s = e.overrideMode) && void 0 !== s ? s : e.mode) === I.Mode.UseGreyDot
      }).length
    }), (0, t.jsxs)(i.ModalFooter, {
      className: f.buttons,
      children: [(0, t.jsxs)("div", {
        className: f.__invalid_left,
        children: [u || g !== N.Tab.Tips && g !== N.Tab.Customize ? null : (0, t.jsx)(i.Anchor, {
          className: f.dismiss,
          href: "https://dis.gd/better-muting",
          children: (0, t.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: m.default.Messages.LEARN_MORE
          })
        }), u && g === N.Tab.Intro ? (0, t.jsx)(i.Clickable, {
          className: f.dismiss,
          onClick: s,
          children: (0, t.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: m.default.Messages.DISMISS
          })
        }) : null, u && g === N.Tab.Customize ? (0, t.jsx)(i.Clickable, {
          className: f.dismiss,
          onClick: s,
          children: (0, t.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: m.default.Messages.CANCEL
          })
        }) : null]
      }), (0, t.jsxs)("div", {
        className: f.right,
        children: [g === N.Tab.Customize ? (0, t.jsx)(i.Text, {
          className: f.warning,
          variant: "text-xs/medium",
          color: "text-muted",
          children: m.default.Messages.NOTIF_MIGRATION_BACKUP
        }) : null, g !== N.Tab.Customize || O ? null : (0, t.jsxs)(i.Button, {
          onClick: () => M(N.Tab.Intro),
          color: i.Button.Colors.TRANSPARENT,
          children: [(0, t.jsx)(n.default, {
            width: 16,
            height: 16
          }), " ", m.default.Messages.BACK]
        }), g === N.Tab.Intro ? (0, t.jsxs)(i.Button, {
          onClick: () => {
            var e;
            (null === (e = b.current) || void 0 === e ? void 0 : e.maybeChangeToAfterTab()) && M(N.Tab.Customize)
          },
          children: [m.default.Messages.TRY_IT_OUT, " ", (0, t.jsx)(d.default, {
            width: 16,
            height: 16
          })]
        }) : g === N.Tab.Customize ? (0, t.jsxs)(i.Button, {
          onClick: () => {
            M(N.Tab.Tips), C(R)
          },
          children: [m.default.Messages.APPLY, " ", (0, t.jsx)(r.default, {
            width: 16,
            height: 16
          })]
        }) : (0, t.jsx)(i.Button, {
          submitting: A,
          onClick: s,
          children: m.default.Messages.CLOSE
        })]
      })]
    })]
  })
}

function v(e) {
  let {
    guildPlans: s,
    overrideGuild: a
  } = e;
  return (0, t.jsxs)(i.Scroller, {
    className: f.content,
    children: [(0, t.jsxs)("div", {
      className: f.header,
      children: [(0, t.jsx)(i.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: m.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
      }), (0, t.jsx)(i.Text, {
        className: f.__invalid_subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: m.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SUB_TITLE
      })]
    }), (0, t.jsx)(u.default, {
      guildPlans: s,
      overrideGuild: a
    })]
  })
}