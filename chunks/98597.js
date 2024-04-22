"use strict";
n.r(t), n.d(t, {
  ChannelItemEditButton: function() {
    return j
  },
  ChannelItemInviteButton: function() {
    return P
  },
  default: function() {
    return w
  },
  getChannelItemClassName: function() {
    return D
  },
  isChannelItemDisabled: function() {
    return b
  }
});
var l, a, s, i, r = n("735250"),
  o = n("470079"),
  u = n("120356"),
  d = n.n(u),
  c = n("442837"),
  f = n("481060"),
  h = n("787014"),
  p = n("924301"),
  m = n("159300"),
  C = n("152376"),
  g = n("427679"),
  E = n("155409"),
  _ = n("131704"),
  S = n("199902"),
  I = n("430824"),
  N = n("496675"),
  T = n("914010"),
  A = n("263704"),
  L = n("465670"),
  v = n("937482"),
  x = n("782089"),
  R = n("281029"),
  M = n("981631"),
  y = n("689938"),
  O = n("294639");

function b(e, t, n) {
  return null != t && !!t && !(0, R.areTypesInSameSection)(n, e.type)
}

function D(e, t) {
  return null == t ? O.containerDefault : e > t ? O.containerDragAfter : O.containerDragBefore
}

function j(e) {
  let {
    channel: t,
    disableManageChannels: n,
    tabIndex: l,
    forceShowButtons: a,
    hasChannelInfo: s = !1
  } = e;
  if ((0, c.useStateFromStores)([N.default, T.default], () => n || T.default.getGuildId() === M.FAVORITES || !N.default.can(M.Permissions.MANAGE_CHANNELS, t) && !N.default.can(M.Permissions.MANAGE_ROLES, t) && !N.default.can(M.Permissions.MANAGE_WEBHOOKS, t) || (0, _.isGuildSelectableChannelType)(t.type) && !N.default.can(M.Permissions.VIEW_CHANNEL, t) || t.isGuildVocal() && !N.default.can(M.Permissions.CONNECT, t) || !_.EDITABLE_CHANNEL_TYPES.has(t.type))) return null;

  function i() {
    h.default.open(t.id)
  }
  return (0, r.jsx)(f.Tooltip, {
    text: y.default.Messages.EDIT_CHANNEL,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: o,
        onBlur: u
      } = e;
      return (0, r.jsx)(f.Clickable, {
        className: d()(O.iconItem, a ? O.alwaysShown : void 0, s ? O.iconWithChannelInfo : O.iconNoChannelInfo),
        onClick: i,
        tabIndex: l,
        "aria-label": y.default.Messages.EDIT_CHANNEL,
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: o,
        onBlur: u,
        children: (0, r.jsx)(v.default, {
          width: 16,
          height: 16,
          className: O.actionIcon
        })
      })
    }
  })
}

function P(e) {
  let {
    channel: t,
    isDefaultChannel: l = !1,
    locked: a,
    tabIndex: s,
    forceShowButtons: i,
    hasChannelInfo: o = !1
  } = e, u = (0, c.useStateFromStores)([I.default], () => I.default.getGuild(t.getGuildId())), h = (0, c.useStateFromStores)([g.default], () => g.default.getStageInstanceByChannel(t.id), [t.id]), C = (0, c.useStateFromStores)([p.default], () => p.default.getActiveEventByChannel(t.id), [t.id]), _ = (0, c.useStateFromStores)([N.default], () => (0, m.canViewInviteModal)(N.default, u, t, h)), T = (0, c.useStateFromStores)([N.default], () => N.default.can(M.Permissions.CREATE_INSTANT_INVITE, t) ? y.default.Messages.CREATE_INSTANT_INVITE : y.default.Messages.INVITE_TO_SERVER);
  if (a || !_) return null;

  function A() {
    if (null != u) {
      let e = S.default.getAllActiveStreams().filter(e => e.state !== M.ApplicationStreamStates.ENDED && e.channelId === t.id);
      (0, f.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([n.e("99387"), n.e("7654"), n.e("92893")]).then(n.bind(n, "560114"));
        return n => (0, r.jsx)(l, {
          ...n,
          guild: u,
          channel: t,
          streamUserId: 1 === e.length ? e[0].ownerId : null,
          source: M.InstantInviteSources.GUILD_CHANNELS,
          guildScheduledEvent: C
        })
      })
    }
  }
  let L = (0, r.jsx)(x.default, {
    width: 16,
    height: 16,
    className: O.actionIcon,
    "aria-hidden": !0
  });
  return l && (L = (0, r.jsx)(E.default, {
    tutorialId: "instant-invite",
    position: "left",
    children: (0, r.jsx)("div", {
      children: L
    })
  })), (0, r.jsx)(f.Tooltip, {
    text: T,
    children: e => (0, r.jsx)(f.Clickable, {
      className: d()(O.iconItem, i ? O.alwaysShown : void 0, o ? O.iconWithChannelInfo : O.iconNoChannelInfo),
      ...e,
      onClick: A,
      tabIndex: s,
      "aria-label": T,
      children: L
    })
  })
}

function G(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, C.dimissFavoriteSuggestion)(t.guild_id, t.id)
  };
  return (0, r.jsx)(f.Tooltip, {
    text: y.default.Messages.REMOVE_FAVORITE_SUGGESTION,
    children: e => (0, r.jsx)(f.Clickable, {
      className: O.iconItem,
      ...e,
      onClick: n,
      "aria-label": y.default.Messages.REMOVE_FAVORITE_SUGGESTION,
      children: (0, r.jsx)(L.default, {
        width: 16,
        height: 16,
        className: O.actionIcon
      })
    })
  })
}

function U(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, C.setIsFavorite)(t.guild_id, t.id, !0, {
      section: M.AnalyticsSections.CHANNEL_LIST
    })
  };
  return (0, r.jsx)(f.Tooltip, {
    text: y.default.Messages.ADD_FAVORITE,
    children: e => (0, r.jsx)(f.Clickable, {
      className: O.iconItem,
      ...e,
      onClick: n,
      "aria-label": y.default.Messages.ADD_FAVORITE,
      children: (0, r.jsx)(A.default, {
        width: 16,
        height: 16,
        className: O.actionIcon
      })
    })
  })
}
class w extends(i = o.PureComponent) {
  renderEditButton() {
    return (0, r.jsx)(j, {
      ...this.props
    })
  }
  renderInviteButton() {
    return (0, r.jsx)(P, {
      ...this.props
    })
  }
  renderRemoveSuggestionButton() {
    return (0, r.jsx)(G, {
      ...this.props
    })
  }
  renderAcceptSuggestionButton() {
    return (0, r.jsx)(U, {
      ...this.props
    })
  }
  getClassName() {
    let {
      position: e,
      sortingPosition: t
    } = this.props;
    return D(e, t)
  }
  isDisabled() {
    let {
      channel: e,
      sorting: t,
      sortingType: n
    } = this.props;
    return b(e, t, n)
  }
}
s = {
  isDefaultChannel: !1
}, (a = "defaultProps") in(l = w) ? Object.defineProperty(l, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[a] = s