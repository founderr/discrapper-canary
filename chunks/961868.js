"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var a, n, s = l("37983"),
  i = l("884691"),
  o = l("733724"),
  d = l("77078"),
  r = l("812204"),
  u = l("712125"),
  C = l("311161"),
  c = l("928098"),
  f = l("619259"),
  E = l("181114"),
  m = l("45029"),
  M = l("561359"),
  h = l("782340"),
  _ = l("355851");

function T(e) {
  var t;
  let l = null !== (t = e.dmsDisabledUntil) && void 0 !== t ? t : e.invitesDisabledUntil;
  if (null == l) return "";
  let a = null != e.dmsDisabledUntil,
    n = null != e.invitesDisabledUntil;
  switch (!0) {
    case a && n:
      return h.default.Messages.MEMBER_SAFETY_DM_AND_INVITES_PAUSED_HEADER;
    case a:
      return h.default.Messages.MEMBER_SAFETY_DM_PAUSED_HEADER;
    case n:
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
    incidentData: n
  } = e, i = null !== (t = n.raidDetectedAt) && void 0 !== t ? t : n.dmSpamDetectedAt;
  return (0, s.jsxs)("div", {
    className: _.subheaderContainer,
    children: [(0, s.jsxs)("div", {
      className: _.subHeaderTextContainer,
      children: [(0, s.jsx)(M.default, {
        className: _.shieldIcon,
        color: o.default.RED_345,
        width: 24,
        height: 24
      }), (0, s.jsxs)("div", {
        className: _.subHeaderText,
        children: [(0, s.jsx)(d.Heading, {
          className: _.heading,
          variant: "heading-lg/semibold",
          color: "text-danger",
          children: (0, C.hasDetectedDMRaid)(n) ? h.default.Messages.MEMBER_SAFETY_DM_RAID_ALERT_HEADER : h.default.Messages.MEMBER_SAFETY_JOIN_RAID_ALERT_HEADER
        }), (0, s.jsx)(d.Text, {
          className: _.tagLine,
          variant: "text-sm/medium",
          children: h.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({
            dateTime: new Date(null != i ? i : "").toLocaleString(h.default.getLocale(), C.DATE_CONFIG)
          })
        })]
      })]
    }), (0, s.jsxs)("div", {
      className: _.buttonContainer,
      children: [(0, s.jsx)(d.Button, {
        className: _.reportButton,
        color: d.Button.Colors.TRANSPARENT,
        onClick: a,
        children: (0, s.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: h.default.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
        })
      }), (0, s.jsx)(E.default, {
        className: _.lockdownButton,
        color: d.Button.Colors.RED,
        onClick: l,
        children: (0, s.jsxs)("div", {
          className: _.lockdownButtonInnerRaidDetected,
          children: [(0, s.jsx)(m.default, {
            className: _.lockIcon,
            width: 16,
            height: 16
          }), (0, s.jsx)(d.Text, {
            className: _.lockdownButtonText,
            variant: "text-sm/semibold",
            children: h.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
          })]
        })
      })]
    })]
  })
}

function S(e) {
  let {
    onHandleEnableLockdown: t,
    incidentData: l,
    guildName: a
  } = e;
  return (0, s.jsxs)("div", {
    className: _.subheaderContainer,
    children: [(0, s.jsxs)("div", {
      className: _.subHeaderTextContainer,
      children: [(0, s.jsx)(M.default, {
        className: _.shieldIcon,
        color: o.default.BRAND_360,
        width: 24,
        height: 24
      }), (0, s.jsxs)("div", {
        className: _.subHeaderText,
        children: [(0, s.jsx)(d.Heading, {
          className: _.heading,
          variant: "heading-lg/semibold",
          color: "text-brand",
          children: T(l)
        }), (0, s.jsx)(d.Text, {
          className: _.tagLine,
          variant: "text-sm/medium",
          children: (0, C.getSecurityActionDetailsString)(l, a)
        })]
      })]
    }), (0, s.jsx)(d.Button, {
      className: _.lockdownNoticeButton,
      color: d.Button.Colors.BRAND,
      onClick: t,
      children: (0, s.jsxs)("div", {
        className: _.lockdownButtonInner,
        children: [(0, s.jsx)(m.default, {
          className: _.lockIcon,
          width: 16,
          height: 16
        }), (0, s.jsx)(d.Text, {
          className: _.lockdownButtonText,
          variant: "text-sm/semibold",
          children: h.default.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
        })]
      })
    })]
  })
}

function A(e) {
  let {
    onHandleEnableLockdown: t,
    onHandleReportFalseAlarm: l,
    incidentData: a,
    guildName: n
  } = e;
  return (0, s.jsxs)("div", {
    className: _.subheaderContainer,
    children: [(0, s.jsxs)("div", {
      className: _.subHeaderTextContainer,
      children: [(0, s.jsx)(M.default, {
        className: _.shieldIcon,
        color: o.default.BRAND_360,
        width: 24,
        height: 24
      }), (0, s.jsxs)("div", {
        className: _.subHeaderText,
        children: [(0, s.jsx)(d.Heading, {
          className: _.heading,
          variant: "heading-lg/semibold",
          color: "text-brand",
          children: T(a)
        }), (0, s.jsx)(d.Text, {
          className: _.tagLine,
          variant: "text-sm/medium",
          children: (0, C.getSecurityActionDetailsString)(a, n)
        })]
      })]
    }), (0, s.jsxs)("div", {
      className: _.buttonContainer,
      children: [(0, s.jsx)(d.Button, {
        className: _.reportButton,
        color: d.Button.Colors.TRANSPARENT,
        onClick: l,
        children: (0, s.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: h.default.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
        })
      }), (0, s.jsx)(d.Button, {
        className: _.lockdownButton,
        color: d.Button.Colors.BRAND,
        onClick: t,
        children: (0, s.jsxs)("div", {
          className: _.lockdownButtonInnerRaidDetected,
          children: [(0, s.jsx)(m.default, {
            className: _.lockIcon,
            width: 16,
            height: 16
          }), (0, s.jsx)(d.Text, {
            className: _.lockdownButtonText,
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
    incidentData: a,
    isUnderLockdown: n,
    isRaidDetected: o
  } = e, E = i.useCallback(() => {
    (0, d.openModalLazy)(async () => {
      let e = {
          source: u.GuildIncidentActionSources.MEMBER_SAFETY_PAGE,
          location: r.default.MEMBER_SAFETY_PAGE,
          alertType: (0, C.getIncidentAlertType)(a)
        },
        {
          default: n
        } = await l.el("186638").then(l.bind(l, "186638"));
      return l => (0, s.jsx)(n, {
        ...l,
        guildId: t.id,
        analyticsData: e
      })
    })
  }, [t.id, a]), m = i.useCallback(() => {
    let e = f.default.getLastIncidentAlertMessage(t.id);
    (0, c.openRaidResolveModal)(e, t.id)
  }, [t.id]), M = (() => {
    switch (!0) {
      case o && n:
        return 3;
      case o:
        return 1;
      case n:
        return 2;
      default:
        return 0
    }
  })();
  if (null == t || null == a) return null;
  switch (M) {
    case 1:
      return (0, s.jsx)(x, {
        onHandleEnableLockdown: E,
        onHandleReportFalseAlarm: m,
        incidentData: a
      });
    case 2:
      return (0, s.jsx)(S, {
        onHandleEnableLockdown: E,
        incidentData: a,
        guildName: t.name
      });
    case 3:
      return (0, s.jsx)(A, {
        onHandleEnableLockdown: E,
        onHandleReportFalseAlarm: m,
        incidentData: a,
        guildName: t.name
      });
    default:
      return null
  }
}(a = n || (n = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.RAID_DETECTED = 1] = "RAID_DETECTED", a[a.LOCKDOWN_ENABLED = 2] = "LOCKDOWN_ENABLED", a[a.RAID_DETECTED_LOCKDOWN_ENABLED = 3] = "RAID_DETECTED_LOCKDOWN_ENABLED"