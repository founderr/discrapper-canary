"use strict";
a.r(s), a.d(s, {
  default: function() {
    return A
  }
}), a("47120");
var t = a("735250"),
  l = a("470079"),
  i = a("120356"),
  n = a.n(i),
  d = a("392711"),
  r = a.n(d),
  c = a("442837"),
  o = a("481060"),
  u = a("367907"),
  h = a("430824"),
  N = a("771845"),
  x = a("9156"),
  I = a("346656"),
  T = a("808602"),
  m = a("974029"),
  f = a("441674"),
  _ = a("988951"),
  v = a("626135"),
  j = a("789662"),
  g = a("981631"),
  M = a("689938"),
  O = a("212887");

function A(e) {
  let {
    guildPlans: s,
    overrideGuild: a
  } = e, i = (0, c.useStateFromStores)([N.default], () => N.default.getFlattenedGuildIds()), [n, d] = l.useMemo(() => r()(s).values().sortBy(e => {
    let s = i.indexOf(e.guildId);
    return -1 === s ? i.length : s
  }).partition(e => {
    var s;
    return (null !== (s = e.overrideMode) && void 0 !== s ? s : e.mode) === j.Mode.UseGreyDot
  }).value(), [s, i]), o = l.useCallback(e => {
    var t;
    return a(e, (null !== (t = s[e].overrideMode) && void 0 !== t ? t : s[e].mode) === j.Mode.UseGreyDot ? j.Mode.KeepAsIs : j.Mode.UseGreyDot)
  }, [a, s]);
  return (0, t.jsxs)("div", {
    className: O.container,
    children: [(0, t.jsx)(C, {
      header: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_TITLE,
      subheader: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_SUBTITLE,
      guildPlans: d,
      onClick: o
    }), (0, t.jsx)(C, {
      header: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_TITLE,
      subheader: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_SUBTITLE,
      guildPlans: n,
      onClick: o
    })]
  })
}

function C(e) {
  let {
    header: s,
    subheader: a,
    guildPlans: l,
    onClick: i
  } = e;
  return (0, t.jsxs)("div", {
    className: O.column,
    children: [(0, t.jsxs)("div", {
      className: O.header,
      children: [(0, t.jsxs)(o.Text, {
        className: O.__invalid_sectionTitle,
        variant: "text-md/medium",
        color: "header-primary",
        children: [s, " (", l.length, ")"]
      }), (0, t.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: a
      })]
    }), (0, t.jsx)(o.Scroller, {
      className: O.scroller,
      children: (0, t.jsx)("div", {
        className: O.guilds,
        children: l.map(e => (0, t.jsx)(R, {
          plan: e,
          onClick: i
        }, e.guildId))
      })
    })]
  })
}

function R(e) {
  var s;
  let {
    plan: a,
    onClick: l
  } = e, i = (0, c.useStateFromStores)([h.default], () => h.default.getGuild(a.guildId));
  if (null == i) return null;
  let d = (null !== (s = a.overrideMode) && void 0 !== s ? s : a.mode) === j.Mode.UseGreyDot;

  function r() {
    v.default.track(g.AnalyticEvents.NOTIFICATION_MIGRATION_GUILD_CHANGED, {
      ...(0, u.collectGuildAnalyticsMetadata)(a.guildId),
      is_selected: !d,
      is_muted: x.default.isMuted(a.guildId),
      notification_setting: x.default.getMessageNotifications(a.guildId)
    }), l(a.guildId)
  }
  return (0, t.jsx)(o.Tooltip, {
    text: (0, t.jsxs)("div", {
      children: [(0, t.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: i.name
      }), (0, t.jsxs)("div", {
        className: O.tooltipRow,
        children: [(0, t.jsx)(m.default, {
          width: 12,
          height: 12
        }), (0, t.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: a.messagePain ? M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_BUSY : M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_QUIET
        })]
      }), (0, t.jsxs)("div", {
        className: O.tooltipRow,
        children: [(0, t.jsx)(_.default, {
          width: 12,
          height: 12
        }), (0, t.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: a.visitsALot ? M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALOT : M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALITTLE
        })]
      }), (0, t.jsxs)("div", {
        className: O.tooltipRow,
        children: [(0, t.jsx)(T.default, {
          width: 12,
          height: 12
        }), (0, t.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: a.muted ? M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_MUTED : M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_NOT_MUTED
        })]
      })]
    }),
    "aria-label": a.debugReason,
    tooltipClassName: O.tooltip,
    children: e => (0, t.jsxs)(o.Clickable, {
      ...e,
      className: n()(O.guild, d ? O.selected : void 0),
      onClick: r,
      children: [(0, t.jsx)(f.default, {
        className: O.checkmark,
        width: 16,
        height: 16,
        backgroundColor: "white"
      }), (0, t.jsx)(I.default, {
        "aria-hidden": !0,
        className: O.guildIcon,
        guild: i,
        size: I.default.Sizes.MEDIUM,
        active: !0,
        tabIndex: -1
      })]
    })
  })
}