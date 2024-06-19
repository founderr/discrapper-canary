a.d(s, {
  Z: function() {
    return g
  }
}), a(47120);
var t = a(735250),
  i = a(470079),
  l = a(120356),
  n = a.n(l),
  r = a(392711),
  c = a.n(r),
  o = a(442837),
  d = a(481060),
  I = a(367907),
  N = a(430824),
  x = a(771845),
  T = a(9156),
  m = a(346656),
  _ = a(626135),
  u = a(789662),
  h = a(981631),
  O = a(689938),
  j = a(159392);

function g(e) {
  let {
    guildPlans: s,
    overrideGuild: a
  } = e, l = (0, o.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()), [n, r] = i.useMemo(() => c()(s).values().sortBy(e => {
    let s = l.indexOf(e.guildId);
    return -1 === s ? l.length : s
  }).partition(e => {
    var s;
    return (null !== (s = e.overrideMode) && void 0 !== s ? s : e.mode) === u.AR.UseGreyDot
  }).value(), [s, l]), d = i.useCallback(e => {
    var t;
    return a(e, (null !== (t = s[e].overrideMode) && void 0 !== t ? t : s[e].mode) === u.AR.UseGreyDot ? u.AR.KeepAsIs : u.AR.UseGreyDot)
  }, [a, s]);
  return (0, t.jsxs)("div", {
    className: j.container,
    children: [(0, t.jsx)(M, {
      header: O.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_TITLE,
      subheader: O.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_SUBTITLE,
      guildPlans: r,
      onClick: d
    }), (0, t.jsx)(M, {
      header: O.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_TITLE,
      subheader: O.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_SUBTITLE,
      guildPlans: n,
      onClick: d
    })]
  })
}

function M(e) {
  let {
    header: s,
    subheader: a,
    guildPlans: i,
    onClick: l
  } = e;
  return (0, t.jsxs)("div", {
    className: j.column,
    children: [(0, t.jsxs)("div", {
      className: j.header,
      children: [(0, t.jsxs)(d.Text, {
        className: j.__invalid_sectionTitle,
        variant: "text-md/medium",
        color: "header-primary",
        children: [s, " (", i.length, ")"]
      }), (0, t.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: a
      })]
    }), (0, t.jsx)(d.Scroller, {
      className: j.scroller,
      children: (0, t.jsx)("div", {
        className: j.guilds,
        children: i.map(e => (0, t.jsx)(v, {
          plan: e,
          onClick: l
        }, e.guildId))
      })
    })]
  })
}

function v(e) {
  var s;
  let {
    plan: a,
    onClick: i
  } = e, l = (0, o.e7)([N.Z], () => N.Z.getGuild(a.guildId));
  if (null == l) return null;
  let r = (null !== (s = a.overrideMode) && void 0 !== s ? s : a.mode) === u.AR.UseGreyDot;

  function c() {
    _.default.track(h.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED, {
      ...(0, I.hH)(a.guildId),
      is_selected: !r,
      is_muted: T.ZP.isMuted(a.guildId),
      notification_setting: T.ZP.getMessageNotifications(a.guildId)
    }), i(a.guildId)
  }
  return (0, t.jsx)(d.Tooltip, {
    text: (0, t.jsxs)("div", {
      children: [(0, t.jsx)(d.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: l.name
      }), (0, t.jsxs)("div", {
        className: j.tooltipRow,
        children: [(0, t.jsx)(d.ChatIcon, {
          size: "xxs",
          color: "currentColor"
        }), (0, t.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: a.messagePain ? O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_BUSY : O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_QUIET
        })]
      }), (0, t.jsxs)("div", {
        className: j.tooltipRow,
        children: [(0, t.jsx)(d.FriendsIcon, {
          size: "xxs",
          color: "currentColor"
        }), (0, t.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: a.visitsALot ? O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALOT : O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALITTLE
        })]
      }), (0, t.jsxs)("div", {
        className: j.tooltipRow,
        children: [(0, t.jsx)(d.BellIcon, {
          size: "xxs",
          color: "currentColor"
        }), (0, t.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: a.muted ? O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_MUTED : O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_NOT_MUTED
        })]
      })]
    }),
    "aria-label": a.debugReason,
    tooltipClassName: j.tooltip,
    children: e => (0, t.jsxs)(d.Clickable, {
      ...e,
      className: n()(j.guild, r ? j.selected : void 0),
      onClick: c,
      children: [(0, t.jsx)(d.CircleCheckIcon, {
        size: "xs",
        color: "currentColor",
        className: j.checkmark,
        secondaryColor: "white"
      }), (0, t.jsx)(m.Z, {
        "aria-hidden": !0,
        className: j.guildIcon,
        guild: l,
        size: m.Z.Sizes.MEDIUM,
        active: !0,
        tabIndex: -1
      })]
    })
  })
}