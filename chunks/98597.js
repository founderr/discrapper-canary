n.d(t, {
  CN: function() {
    return A
  },
  ZP: function() {
    return j
  },
  eP: function() {
    return O
  },
  hR: function() {
    return R
  },
  jo: function() {
    return M
  }
});
var l, i, s, r, a = n(735250),
  o = n(470079),
  u = n(120356),
  c = n.n(u),
  d = n(442837),
  h = n(481060),
  p = n(787014),
  g = n(924301),
  m = n(159300),
  C = n(152376),
  E = n(427679),
  f = n(155409),
  _ = n(131704),
  I = n(199902),
  N = n(430824),
  Z = n(496675),
  S = n(914010),
  x = n(281029),
  L = n(981631),
  T = n(689938),
  v = n(47705);

function A(e, t, n) {
  return null != t && !!t && !(0, x.ig)(n, e.type)
}

function M(e, t) {
  return null == t ? v.containerDefault : e > t ? v.containerDragAfter : v.containerDragBefore
}

function R(e) {
  let {
    channel: t,
    disableManageChannels: n,
    tabIndex: l,
    forceShowButtons: i,
    hasChannelInfo: s = !1
  } = e;
  if ((0, d.e7)([Z.Z, S.Z], () => n || S.Z.getGuildId() === L.I_8 || !Z.Z.can(L.Plq.MANAGE_CHANNELS, t) && !Z.Z.can(L.Plq.MANAGE_ROLES, t) && !Z.Z.can(L.Plq.MANAGE_WEBHOOKS, t) || (0, _.r8)(t.type) && !Z.Z.can(L.Plq.VIEW_CHANNEL, t) || t.isGuildVocal() && !Z.Z.can(L.Plq.CONNECT, t) || !_.dF.has(t.type))) return null;

  function r() {
    p.ZP.open(t.id)
  }
  return (0, a.jsx)(h.Tooltip, {
    text: T.Z.Messages.EDIT_CHANNEL,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: o,
        onBlur: u
      } = e;
      return (0, a.jsx)(h.Clickable, {
        className: c()(v.iconItem, i ? v.alwaysShown : void 0, s ? v.iconWithChannelInfo : v.iconNoChannelInfo),
        onClick: r,
        tabIndex: l,
        "aria-label": T.Z.Messages.EDIT_CHANNEL,
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: o,
        onBlur: u,
        children: (0, a.jsx)(h.SettingsIcon, {
          size: "xs",
          color: "currentColor",
          className: v.actionIcon
        })
      })
    }
  })
}

function O(e) {
  let {
    channel: t,
    isDefaultChannel: l = !1,
    locked: i,
    tabIndex: s,
    forceShowButtons: r,
    hasChannelInfo: o = !1
  } = e, u = (0, d.e7)([N.Z], () => N.Z.getGuild(t.getGuildId())), p = (0, d.e7)([E.Z], () => E.Z.getStageInstanceByChannel(t.id), [t.id]), C = (0, d.e7)([g.ZP], () => g.ZP.getActiveEventByChannel(t.id), [t.id]), _ = (0, d.e7)([Z.Z], () => (0, m.b)(Z.Z, u, t, p)), S = (0, d.e7)([Z.Z], () => Z.Z.can(L.Plq.CREATE_INSTANT_INVITE, t) ? T.Z.Messages.CREATE_INSTANT_INVITE : T.Z.Messages.INVITE_TO_SERVER);
  if (i || !_) return null;

  function x() {
    if (null != u) {
      let e = I.Z.getAllActiveStreams().filter(e => e.state !== L.jm8.ENDED && e.channelId === t.id);
      (0, h.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([n.e("99387"), n.e("7654"), n.e("9785")]).then(n.bind(n, 560114));
        return n => (0, a.jsx)(l, {
          ...n,
          guild: u,
          channel: t,
          streamUserId: 1 === e.length ? e[0].ownerId : null,
          source: L.t4x.GUILD_CHANNELS,
          guildScheduledEvent: C
        })
      })
    }
  }
  let A = (0, a.jsx)(h.GroupPlusIcon, {
    size: "xs",
    className: v.actionIcon,
    "aria-hidden": !0
  });
  return l && (A = (0, a.jsx)(f.Z, {
    tutorialId: "instant-invite",
    position: "left",
    children: (0, a.jsx)("div", {
      children: A
    })
  })), (0, a.jsx)(h.Tooltip, {
    text: S,
    children: e => (0, a.jsx)(h.Clickable, {
      className: c()(v.iconItem, r ? v.alwaysShown : void 0, o ? v.iconWithChannelInfo : v.iconNoChannelInfo),
      ...e,
      onClick: x,
      tabIndex: s,
      "aria-label": S,
      children: A
    })
  })
}

function P(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, C._U)(t.guild_id, t.id)
  };
  return (0, a.jsx)(h.Tooltip, {
    text: T.Z.Messages.REMOVE_FAVORITE_SUGGESTION,
    children: e => (0, a.jsx)(h.Clickable, {
      className: v.iconItem,
      ...e,
      onClick: n,
      "aria-label": T.Z.Messages.REMOVE_FAVORITE_SUGGESTION,
      children: (0, a.jsx)(h.CloseSmallIcon, {
        size: "xs",
        color: "currentColor",
        className: v.actionIcon
      })
    })
  })
}

function b(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, C.dM)(t.guild_id, t.id, !0, {
      section: L.jXE.CHANNEL_LIST
    })
  };
  return (0, a.jsx)(h.Tooltip, {
    text: T.Z.Messages.ADD_FAVORITE,
    children: e => (0, a.jsx)(h.Clickable, {
      className: v.iconItem,
      ...e,
      onClick: n,
      "aria-label": T.Z.Messages.ADD_FAVORITE,
      children: (0, a.jsx)(h.CheckmarkLargeIcon, {
        size: "xs",
        color: "currentColor",
        className: v.actionIcon
      })
    })
  })
}
class j extends(r = o.PureComponent) {
  renderEditButton() {
    return (0, a.jsx)(R, {
      ...this.props
    })
  }
  renderInviteButton() {
    return (0, a.jsx)(O, {
      ...this.props
    })
  }
  renderRemoveSuggestionButton() {
    return (0, a.jsx)(P, {
      ...this.props
    })
  }
  renderAcceptSuggestionButton() {
    return (0, a.jsx)(b, {
      ...this.props
    })
  }
  getClassName() {
    let {
      position: e,
      sortingPosition: t
    } = this.props;
    return M(e, t)
  }
  isDisabled() {
    let {
      channel: e,
      sorting: t,
      sortingType: n
    } = this.props;
    return A(e, t, n)
  }
}
s = {
  isDefaultChannel: !1
}, (i = "defaultProps") in(l = j) ? Object.defineProperty(l, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = s