"use strict";
t.d(s, {
  Z: function() {
    return L
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(2052),
  r = t(367907),
  o = t(45966),
  c = t(734893),
  d = t(621923),
  u = t(430824),
  E = t(132338),
  _ = t(626135),
  I = t(983135),
  T = t(8426),
  N = t(969632),
  m = t(570961),
  S = t(84658),
  h = t(974513),
  g = t(677892),
  C = t(981631),
  x = t(689938),
  R = t(141179);

function L(e) {
  let {
    guildId: s,
    completed: t
  } = e, {
    homeSettingsEnabled: l
  } = (0, d.kZ)(s), c = (0, i.e7)([o.Z], () => o.Z.getEnabled(s)), {
    location: u
  } = (0, a.O)();
  u.object = t ? C.qAy.ONBOARDING_EDIT : C.qAy.ONBOARDING_REVIEW;
  let N = async function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    c ? (await (0, m.$y)(s, !1), _.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
      ...(0, r.hH)(s),
      action_taken: S.W$[S.W$.TOGGLE_DISABLED],
      location: u
    })) : (await (0, m.$y)(s, !0), e && (0, T.To)(s, !0), t ? _.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
      ...(0, r.hH)(s),
      action_taken: S.W$[S.W$.TOGGLE_ENABLED],
      location: u
    }) : _.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
      ...(0, r.hH)(s),
      step: S.PG[S.PG.REVIEW],
      back: !1,
      skip: !1,
      completed: !0
    }))
  }, h = () => {
    _.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
      ...(0, r.hH)(s),
      action_taken: S.W$[S.W$.PREVIEW],
      location: u
    }), (0, I.di)(s)
  }, x = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(g.ku, {
      guildId: s,
      onEdit: () => {
        _.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
          ...(0, r.hH)(s),
          action_taken: S.W$[S.W$.EDIT_DEFAULT_CHANNELS],
          location: u
        }), (0, I.$K)(S.PG.DEFAULT_CHANNELS)
      },
      disableGoodStatus: t
    }), (0, n.jsx)(E.Z, {
      className: R.divider
    }), (0, n.jsx)(g.ap, {
      guildId: s,
      onEdit: () => {
        _.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
          ...(0, r.hH)(s),
          action_taken: S.W$[S.W$.EDIT_CUSTOMIZATION_QUESTIONS],
          location: u
        }), (0, I.$K)(S.PG.CUSTOMIZATION_QUESTIONS)
      },
      disableGoodStatus: t
    }), l && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(E.Z, {
        className: R.divider
      }), (0, n.jsx)(g.P_, {
        guildId: s,
        onEdit: () => {
          _.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
            ...(0, r.hH)(s),
            action_taken: S.W$[S.W$.EDIT_HOME_SETTINGS],
            location: u
          }), (0, I.$K)(S.PG.HOME_SETTINGS)
        },
        disableGoodStatus: t
      })]
    })]
  });
  return t ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(O, {
      guildId: s,
      handlePreview: h
    }), (0, n.jsx)(A, {}), (0, n.jsxs)("div", {
      className: R.content,
      children: [(0, n.jsx)(p, {
        guildId: s,
        handleOnboardingToggle: N
      }), x]
    })]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: R.content,
      children: [(0, n.jsx)(M, {
        guildId: s,
        handleOnboardingToggle: N,
        handlePreview: h
      }), x]
    }), (0, n.jsx)(f, {
      guildId: s
    })]
  })
}

function O(e) {
  let {
    guildId: s,
    handlePreview: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: R.header,
      children: x.Z.Messages.GUILD_SETTINGS_ONBOARDING
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: R.subheader,
      children: x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: R.help,
      children: [(0, n.jsx)(l.Anchor, {
        target: "_blank",
        href: C.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, n.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SEE_EXAMPLES
        })
      }), (0, n.jsx)("div", {
        className: R.helpSeparator
      }), (0, n.jsx)(l.Anchor, {
        onClick: t,
        children: (0, n.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: x.Z.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
        })
      }), (0, n.jsx)("div", {
        className: R.helpSeparator
      }), (0, n.jsx)(h.Wu, {
        guildId: s
      })]
    })]
  })
}

function A() {
  let e = "• ";
  return (0, n.jsxs)("div", {
    className: R.notice,
    children: [(0, n.jsx)("img", {
      className: R.wumpus,
      src: t(33631),
      alt: "wumpus"
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        className: R.header,
        children: x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_HEADER
      }), (0, n.jsxs)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_2]
      }), (0, n.jsxs)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_3]
      })]
    })]
  })
}

function p(e) {
  let {
    guildId: s,
    handleOnboardingToggle: t
  } = e, a = (0, g.$$)(s), r = (0, i.e7)([o.Z], () => o.Z.getEnabled(s));
  return (0, n.jsxs)("div", {
    className: R.review,
    children: [(0, n.jsxs)("div", {
      className: R.reviewHeaderText,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: r ? x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_TITLE_ENABLED : x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_TITLE_DISABLED
      }), (0, n.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: r ? x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE_ENABLED : x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE_DISABLED
      })]
    }), (0, n.jsx)(l.Switch, {
      checked: r,
      onChange: () => t(!1),
      disabled: !r && !a
    })]
  })
}

function M(e) {
  let {
    guildId: s,
    handleOnboardingToggle: t,
    handlePreview: a
  } = e, r = (0, g.$$)(s), o = (0, i.e7)([N.Z], () => N.Z.getSettings()), d = (0, c.uo)(o);
  return (0, n.jsxs)("div", {
    className: R.reviewHeader,
    children: [(0, n.jsxs)("div", {
      className: R.reviewHeaderText,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: r ? x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_TITLE : x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_TITLE_INCOMPLETE
      }), (0, n.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: r ? x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_DESCRIPTION : x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_DESCRIPTION_INCOMPLETE
      })]
    }), (0, n.jsxs)("div", {
      className: R.reviewActions,
      children: [(0, n.jsx)(l.Button, {
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.OUTLINED,
        onClick: a,
        children: x.Z.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
      }), (0, n.jsx)(l.Button, {
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.BRAND,
        onClick: () => t(d),
        disabled: !r,
        children: x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_ENABLE_ONBOARDING
      })]
    })]
  })
}

function f(e) {
  let {
    guildId: s
  } = e, t = (0, i.e7)([u.Z], () => u.Z.getGuild(s));
  return null == t || t.verificationLevel < C.sFg.VERY_HIGH ? null : (0, n.jsxs)("div", {
    className: R.rolesWarning,
    children: [(0, n.jsx)(l.CircleExclamationPointIcon, {
      size: "xs",
      color: "currentColor",
      className: R.warningIcon
    }), (0, n.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: x.Z.Messages.GUILD_ONBOARDING_SETUP_PREVIEW_ROLES_WARNING
    })]
  })
}