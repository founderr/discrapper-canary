"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var a, s, n = l("735250"),
  o = l("470079"),
  i = l("722770"),
  r = l("481060"),
  d = l("100527"),
  u = l("666657"),
  C = l("533244"),
  c = l("664452"),
  m = l("226192"),
  E = l("223606"),
  f = l("976644"),
  _ = l("630641"),
  M = l("288176"),
  h = l("689938"),
  S = l("733837");

function T(e) {
  var t;
  if (null == (null !== (t = e.dmsDisabledUntil) && void 0 !== t ? t : e.invitesDisabledUntil)) return "";
  let l = null != e.dmsDisabledUntil,
    a = null != e.invitesDisabledUntil;
  switch (!0) {
    case l && a:
      return h.default.Messages.MEMBER_SAFETY_DM_AND_INVITES_PAUSED_HEADER;
    case l:
      return h.default.Messages.MEMBER_SAFETY_DM_PAUSED_HEADER;
    case a:
      return h.default.Messages.MEMBER_SAFETY_INVITES_PAUSED_HEADER;
    default:
      return ""
  }
}

function x(e) {
  var t;
  let {
    onHandleEnableLockdown: l,
    onHandleReportFalseAlarm: a,
    incidentData: s
  } = e, o = null !== (t = s.raidDetectedAt) && void 0 !== t ? t : s.dmSpamDetectedAt;
  return (0, n.jsxs)("div", {
    className: S.subheaderContainer,
    children: [(0, n.jsxs)("div", {
      className: S.subHeaderTextContainer,
      children: [(0, n.jsx)(M.default, {
        className: S.shieldIcon,
        color: i.default.RED_345,
        width: 24,
        height: 24
      }), (0, n.jsxs)("div", {
        className: S.subHeaderText,
        children: [(0, n.jsx)(r.Heading, {
          className: S.heading,
          variant: "heading-lg/semibold",
          color: "text-danger",
          children: (0, C.hasDetectedDMRaid)(s) ? h.default.Messages.MEMBER_SAFETY_DM_RAID_ALERT_HEADER : h.default.Messages.MEMBER_SAFETY_JOIN_RAID_ALERT_HEADER
        }), (0, n.jsx)(r.Text, {
          className: S.tagLine,
          variant: "text-sm/medium",
          children: h.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({
            dateTime: new Date(null != o ? o : "").toLocaleString(h.default.getLocale(), C.DATE_CONFIG)
          })
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: S.buttonContainer,
      children: [(0, n.jsx)(r.Button, {
        className: S.reportButton,
        color: r.Button.Colors.TRANSPARENT,
        onClick: a,
        children: (0, n.jsx)(r.Text, {
          variant: "text-sm/semibold",
          children: h.default.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
        })
      }), (0, n.jsx)(f.default, {
        className: S.__invalid_lockdownButton,
        color: r.Button.Colors.RED,
        onClick: l,
        children: (0, n.jsxs)("div", {
          className: S.lockdownButtonInnerRaidDetected,
          children: [(0, n.jsx)(_.default, {
            className: S.lockIcon,
            width: 16,
            height: 16
          }), (0, n.jsx)(r.Text, {
            className: S.lockdownButtonText,
            variant: "text-sm/semibold",
            children: h.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
          })]
        })
      })]
    })]
  })
}

function A(e) {
  let {
    onHandleEnableLockdown: t,
    incidentData: l,
    guildName: a
  } = e;
  return (0, n.jsxs)("div", {
    className: S.subheaderContainer,
    children: [(0, n.jsxs)("div", {
      className: S.subHeaderTextContainer,
      children: [(0, n.jsx)(M.default, {
        className: S.shieldIcon,
        color: i.default.BRAND_360,
        width: 24,
        height: 24
      }), (0, n.jsxs)("div", {
        className: S.subHeaderText,
        children: [(0, n.jsx)(r.Heading, {
          className: S.heading,
          variant: "heading-lg/semibold",
          color: "text-brand",
          children: T(l)
        }), (0, n.jsx)(r.Text, {
          className: S.tagLine,
          variant: "text-sm/medium",
          children: (0, C.getSecurityActionDetailsString)(l, a)
        })]
      })]
    }), (0, n.jsx)(r.Button, {
      className: S.lockdownNoticeButton,
      color: r.Button.Colors.BRAND,
      onClick: t,
      children: (0, n.jsxs)("div", {
        className: S.lockdownButtonInner,
        children: [(0, n.jsx)(_.default, {
          className: S.lockIcon,
          width: 16,
          height: 16
        }), (0, n.jsx)(r.Text, {
          className: S.lockdownButtonText,
          variant: "text-sm/semibold",
          children: h.default.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
        })]
      })
    })]
  })
}

function p(e) {
  let {
    onHandleEnableLockdown: t,
    onHandleReportFalseAlarm: l,
    incidentData: a,
    guildName: s
  } = e;
  return (0, n.jsxs)("div", {
    className: S.subheaderContainer,
    children: [(0, n.jsxs)("div", {
      className: S.subHeaderTextContainer,
      children: [(0, n.jsx)(M.default, {
        className: S.shieldIcon,
        color: i.default.BRAND_360,
        width: 24,
        height: 24
      }), (0, n.jsxs)("div", {
        className: S.subHeaderText,
        children: [(0, n.jsx)(r.Heading, {
          className: S.heading,
          variant: "heading-lg/semibold",
          color: "text-brand",
          children: T(a)
        }), (0, n.jsx)(r.Text, {
          className: S.tagLine,
          variant: "text-sm/medium",
          children: (0, C.getSecurityActionDetailsString)(a, s)
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: S.buttonContainer,
      children: [(0, n.jsx)(r.Button, {
        className: S.reportButton,
        color: r.Button.Colors.TRANSPARENT,
        onClick: l,
        children: (0, n.jsx)(r.Text, {
          variant: "text-sm/semibold",
          children: h.default.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
        })
      }), (0, n.jsx)(r.Button, {
        className: S.__invalid_lockdownButton,
        color: r.Button.Colors.BRAND,
        onClick: t,
        children: (0, n.jsxs)("div", {
          className: S.lockdownButtonInnerRaidDetected,
          children: [(0, n.jsx)(_.default, {
            className: S.lockIcon,
            width: 16,
            height: 16
          }), (0, n.jsx)(r.Text, {
            className: S.lockdownButtonText,
            variant: "text-sm/semibold",
            children: h.default.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
          })]
        })
      })]
    })]
  })
}

function g(e) {
  let {
    guild: t,
    incidentData: l,
    isUnderLockdown: a,
    isRaidDetected: s
  } = e, i = o.useCallback(() => {
    (0, r.openModalLazy)(async () => {
      let e = {
        source: u.GuildIncidentActionSources.MEMBER_SAFETY_PAGE,
        location: d.default.MEMBER_SAFETY_PAGE,
        alertType: (0, C.getIncidentAlertType)(l)
      };
      return l => (0, n.jsx)(c.default, {
        ...l,
        guildId: t.id,
        analyticsData: e
      })
    })
  }, [t.id, l]), f = o.useCallback(() => {
    let e = E.default.getLastIncidentAlertMessage(t.id);
    (0, m.openRaidResolveModal)(e, t.id)
  }, [t.id]), _ = (() => {
    switch (!0) {
      case s && a:
        return 3;
      case s:
        return 1;
      case a:
        return 2;
      default:
        return 0
    }
  })();
  if (null == t || null == l) return null;
  switch (_) {
    case 1:
      return (0, n.jsx)(x, {
        onHandleEnableLockdown: i,
        onHandleReportFalseAlarm: f,
        incidentData: l
      });
    case 2:
      return (0, n.jsx)(A, {
        onHandleEnableLockdown: i,
        incidentData: l,
        guildName: t.name
      });
    case 3:
      return (0, n.jsx)(p, {
        onHandleEnableLockdown: i,
        onHandleReportFalseAlarm: f,
        incidentData: l,
        guildName: t.name
      });
    default:
      return null
  }
}(a = s || (s = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.RAID_DETECTED = 1] = "RAID_DETECTED", a[a.LOCKDOWN_ENABLED = 2] = "LOCKDOWN_ENABLED", a[a.RAID_DETECTED_LOCKDOWN_ENABLED = 3] = "RAID_DETECTED_LOCKDOWN_ENABLED"