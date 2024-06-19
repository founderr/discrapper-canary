a.r(s);
var r = a(735250);
a(470079);
var l = a(920906),
  n = a(692547),
  i = a(481060),
  t = a(153124),
  _ = a(154921),
  c = a(731455),
  d = a(689938),
  o = a(766438);
let I = e => {
  let {
    currentNumber: s,
    thresholdNumber: a,
    currentLabel: t,
    isPercent: c = !1
  } = e, I = null != a ? Math.floor(s / a * 100) : 0, T = d.Z.Messages.NUMBERS_ONLY.format({
    count: s
  }), S = null != a ? d.Z.Messages.NUMBERS_ONLY.format({
    count: a
  }) : "--", E = (0, i.useToken)(n.Z.unsafe_rawColors.RED_400).hex(), N = (0, i.useToken)(n.Z.unsafe_rawColors.YELLOW_300).hex();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o.progressWrapper,
      children: [(0, r.jsx)("div", {
        className: o.progressBackground
      }), (0, r.jsx)(l.Spring, {
        from: {
          width: 0
        },
        to: {
          width: I
        },
        config: {
          tension: 200,
          friction: 20,
          mass: 50,
          clamp: !0
        },
        children: e => {
          let {
            width: s
          } = e;
          return (0, r.jsx)(l.animated.div, {
            className: o.progressBar,
            style: {
              width: s.interpolate(e => "".concat(e, "%")),
              backgroundColor: s.interpolate(e => e < 33 ? E : N)
            }
          })
        }
      })]
    }), (0, r.jsxs)("div", {
      className: o.labelWrapper,
      children: [(0, r.jsxs)("div", {
        className: o.__invalid_current,
        children: [(0, r.jsx)(_.Z, {
          color: I < 33 ? _.Z.Colors.ERROR : _.Z.Colors.STATUS_YELLOW,
          className: o.bold,
          children: c ? "".concat(T, "%") : T
        }), (0, r.jsxs)(i.Text, {
          "aria-describedby": "health-score-details-score-explain",
          variant: "text-xs/normal",
          color: "header-secondary",
          children: [t, (0, r.jsx)("sup", {
            "aria-hidden": !0,
            children: "1"
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: o.requirement,
        children: [(0, r.jsx)(i.Text, {
          className: o.bold,
          variant: "text-sm/semibold",
          children: c ? "".concat(S, "%") : S
        }), (0, r.jsx)(i.Text, {
          "aria-describedby": "health-score-details-requirement-explain",
          variant: "text-xs/normal",
          color: "header-secondary",
          children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_PROGRESS_REQUIREMENT_LABEL
        })]
      })]
    })]
  })
};
s.default = e => {
  let s, a, l, {
      guildChecklist: n,
      transitionState: _,
      onClose: T
    } = e,
    S = (0, t.Dt)(),
    {
      retentionHealthy: E,
      engagementHealthy: N,
      healthScore: m
    } = n,
    {
      avg_nonnew_participators: C,
      avg_nonnew_communicators: h,
      perc_ret_w1_intentful: x
    } = m;
  if (!N && null != C && C < c.b0 && (a = (0, r.jsxs)("div", {
      className: o.failingBlock,
      children: [(0, r.jsx)(i.Heading, {
        className: o.marginAfter,
        variant: "heading-md/semibold",
        children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_VISITOR_FAILING_ACTION
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_VISITOR_FAILING_ACTION_DETAILS
      }), (0, r.jsx)(I, {
        currentNumber: C,
        thresholdNumber: 40,
        currentLabel: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_VISITOR_PROGRESS_LABEL
      })]
    })), !N && null != h && h < c.md && (l = (0, r.jsxs)("div", {
      className: o.failingBlock,
      children: [(0, r.jsx)(i.Heading, {
        className: o.marginAfter,
        variant: "heading-md/semibold",
        children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_COMMUNICATOR_FAILING_ACTION
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_COMMUNICATOR_FAILING_ACTION_DETAILS
      }), (0, r.jsx)(I, {
        currentNumber: h,
        thresholdNumber: 20,
        currentLabel: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_COMMUNICATOR_PROGRESS_LABEL
      })]
    })), !E && null != x) {
    let e = Math.floor(100 * x);
    s = (0, r.jsxs)("div", {
      className: o.failingBlock,
      children: [(0, r.jsx)(i.Heading, {
        className: o.marginAfter,
        variant: "heading-md/semibold",
        children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING_ACTION
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING_ACTION_DETAILS_UPDATED.format()
      }), (0, r.jsx)(I, {
        currentNumber: e,
        thresholdNumber: 10,
        currentLabel: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_PROGRESS_LABEL,
        isPercent: !0
      })]
    })
  }
  return (0, r.jsxs)(i.ModalRoot, {
    transitionState: _,
    size: i.ModalSize.MEDIUM,
    className: o.__invalid_modal,
    "aria-labelledby": S,
    children: [(0, r.jsxs)(i.ModalContent, {
      className: o.content,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        className: o.modalHeader,
        id: S,
        children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_FAILING
      }), (0, r.jsx)(i.Text, {
        className: o.marginAfter,
        variant: "text-sm/normal",
        children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTH_DEFINITIONS_INTRO
      }), (0, r.jsx)("div", {
        className: o.separator
      }), a, l, s, (0, r.jsx)("div", {
        className: o.separator
      }), (0, r.jsxs)(i.Text, {
        className: o.marginAfter,
        color: "header-secondary",
        id: "health-score-details-score-explain",
        variant: "text-sm/normal",
        children: [(0, r.jsx)("sup", {
          "aria-hidden": !0,
          children: "1 "
        }), d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SCORE_EXPLAIN]
      })]
    }), (0, r.jsx)(i.ModalCloseButton, {
      onClick: T,
      className: o.closeButton
    })]
  })
}