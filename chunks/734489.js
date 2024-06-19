t.d(l, {
  Z: function() {
    return H
  }
});
var n, s, a = t(735250),
  o = t(470079),
  i = t(722770),
  r = t(481060),
  C = t(100527),
  c = t(666657),
  d = t(533244),
  u = t(664452),
  E = t(226192),
  m = t(223606),
  _ = t(689938),
  M = t(616491);

function h(e) {
  var l;
  if (null == (null !== (l = e.dmsDisabledUntil) && void 0 !== l ? l : e.invitesDisabledUntil)) return "";
  let t = null != e.dmsDisabledUntil,
    n = null != e.invitesDisabledUntil;
  switch (!0) {
    case t && n:
      return _.Z.Messages.MEMBER_SAFETY_DM_AND_INVITES_PAUSED_HEADER;
    case t:
      return _.Z.Messages.MEMBER_SAFETY_DM_PAUSED_HEADER;
    case n:
      return _.Z.Messages.MEMBER_SAFETY_INVITES_PAUSED_HEADER;
    default:
      return ""
  }
}

function x(e) {
  var l;
  let {
    onHandleEnableLockdown: t,
    onHandleReportFalseAlarm: n,
    incidentData: s
  } = e, o = null !== (l = s.raidDetectedAt) && void 0 !== l ? l : s.dmSpamDetectedAt;
  return (0, a.jsxs)("div", {
    className: M.subheaderContainer,
    children: [(0, a.jsxs)("div", {
      className: M.subHeaderTextContainer,
      children: [(0, a.jsx)(r.ShieldIcon, {
        size: "md",
        className: M.shieldIcon,
        color: i.Z.RED_345
      }), (0, a.jsxs)("div", {
        className: M.subHeaderText,
        children: [(0, a.jsx)(r.Heading, {
          className: M.heading,
          variant: "heading-lg/semibold",
          color: "text-danger",
          children: (0, d.kk)(s) ? _.Z.Messages.MEMBER_SAFETY_DM_RAID_ALERT_HEADER : _.Z.Messages.MEMBER_SAFETY_JOIN_RAID_ALERT_HEADER
        }), (0, a.jsx)(r.Text, {
          className: M.tagLine,
          variant: "text-sm/medium",
          children: _.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({
            dateTime: new Date(null != o ? o : "").toLocaleString(_.Z.getLocale(), d.pQ)
          })
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: M.buttonContainer,
      children: [(0, a.jsx)(r.Button, {
        className: M.reportButton,
        color: r.Button.Colors.TRANSPARENT,
        onClick: n,
        children: (0, a.jsx)(r.Text, {
          variant: "text-sm/semibold",
          children: _.Z.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
        })
      }), (0, a.jsx)(r.ShinyButton, {
        className: M.__invalid_lockdownButton,
        color: r.Button.Colors.RED,
        onClick: t,
        children: (0, a.jsxs)("div", {
          className: M.lockdownButtonInnerRaidDetected,
          children: [(0, a.jsx)(r.LockIcon, {
            size: "xs",
            color: "currentColor",
            className: M.lockIcon
          }), (0, a.jsx)(r.Text, {
            className: M.lockdownButtonText,
            variant: "text-sm/semibold",
            children: _.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
          })]
        })
      })]
    })]
  })
}

function T(e) {
  let {
    onHandleEnableLockdown: l,
    incidentData: t,
    guildName: n
  } = e;
  return (0, a.jsxs)("div", {
    className: M.subheaderContainer,
    children: [(0, a.jsxs)("div", {
      className: M.subHeaderTextContainer,
      children: [(0, a.jsx)(r.ShieldIcon, {
        size: "md",
        className: M.shieldIcon,
        color: i.Z.BRAND_360
      }), (0, a.jsxs)("div", {
        className: M.subHeaderText,
        children: [(0, a.jsx)(r.Heading, {
          className: M.heading,
          variant: "heading-lg/semibold",
          color: "text-brand",
          children: h(t)
        }), (0, a.jsx)(r.Text, {
          className: M.tagLine,
          variant: "text-sm/medium",
          children: (0, d.OY)(t, n)
        })]
      })]
    }), (0, a.jsx)(r.Button, {
      className: M.lockdownNoticeButton,
      color: r.Button.Colors.BRAND,
      onClick: l,
      children: (0, a.jsxs)("div", {
        className: M.lockdownButtonInner,
        children: [(0, a.jsx)(r.LockIcon, {
          size: "xs",
          color: "currentColor",
          className: M.lockIcon
        }), (0, a.jsx)(r.Text, {
          className: M.lockdownButtonText,
          variant: "text-sm/semibold",
          children: _.Z.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
        })]
      })
    })]
  })
}

function L(e) {
  let {
    onHandleEnableLockdown: l,
    onHandleReportFalseAlarm: t,
    incidentData: n,
    guildName: s
  } = e;
  return (0, a.jsxs)("div", {
    className: M.subheaderContainer,
    children: [(0, a.jsxs)("div", {
      className: M.subHeaderTextContainer,
      children: [(0, a.jsx)(r.ShieldIcon, {
        size: "md",
        className: M.shieldIcon,
        color: i.Z.BRAND_360
      }), (0, a.jsxs)("div", {
        className: M.subHeaderText,
        children: [(0, a.jsx)(r.Heading, {
          className: M.heading,
          variant: "heading-lg/semibold",
          color: "text-brand",
          children: h(n)
        }), (0, a.jsx)(r.Text, {
          className: M.tagLine,
          variant: "text-sm/medium",
          children: (0, d.OY)(n, s)
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: M.buttonContainer,
      children: [(0, a.jsx)(r.Button, {
        className: M.reportButton,
        color: r.Button.Colors.TRANSPARENT,
        onClick: t,
        children: (0, a.jsx)(r.Text, {
          variant: "text-sm/semibold",
          children: _.Z.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
        })
      }), (0, a.jsx)(r.Button, {
        className: M.__invalid_lockdownButton,
        color: r.Button.Colors.BRAND,
        onClick: l,
        children: (0, a.jsxs)("div", {
          className: M.lockdownButtonInnerRaidDetected,
          children: [(0, a.jsx)(r.LockIcon, {
            size: "xs",
            color: "currentColor",
            className: M.lockIcon
          }), (0, a.jsx)(r.Text, {
            className: M.lockdownButtonText,
            variant: "text-sm/semibold",
            children: _.Z.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
          })]
        })
      })]
    })]
  })
}

function H(e) {
  let {
    guild: l,
    incidentData: t,
    isUnderLockdown: n,
    isRaidDetected: s
  } = e, i = o.useCallback(() => {
    (0, r.openModalLazy)(async () => {
      let e = {
        source: c.Zu.MEMBER_SAFETY_PAGE,
        location: C.Z.MEMBER_SAFETY_PAGE,
        alertType: (0, d.T1)(t)
      };
      return t => (0, a.jsx)(u.default, {
        ...t,
        guildId: l.id,
        analyticsData: e
      })
    })
  }, [l.id, t]), _ = o.useCallback(() => {
    let e = m.Z.getLastIncidentAlertMessage(l.id);
    (0, E.kW)(e, l.id)
  }, [l.id]), M = (() => {
    switch (!0) {
      case s && n:
        return 3;
      case s:
        return 1;
      case n:
        return 2;
      default:
        return 0
    }
  })();
  if (null == l || null == t) return null;
  switch (M) {
    case 1:
      return (0, a.jsx)(x, {
        onHandleEnableLockdown: i,
        onHandleReportFalseAlarm: _,
        incidentData: t
      });
    case 2:
      return (0, a.jsx)(T, {
        onHandleEnableLockdown: i,
        incidentData: t,
        guildName: l.name
      });
    case 3:
      return (0, a.jsx)(L, {
        onHandleEnableLockdown: i,
        onHandleReportFalseAlarm: _,
        incidentData: t,
        guildName: l.name
      });
    default:
      return null
  }
}(n = s || (s = {}))[n.DEFAULT = 0] = "DEFAULT", n[n.RAID_DETECTED = 1] = "RAID_DETECTED", n[n.LOCKDOWN_ENABLED = 2] = "LOCKDOWN_ENABLED", n[n.RAID_DETECTED_LOCKDOWN_ENABLED = 3] = "RAID_DETECTED_LOCKDOWN_ENABLED"