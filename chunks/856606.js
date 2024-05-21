"use strict";
l.r(t), l.d(t, {
  ChannelSettingsPermissionsNotice: function() {
    return V
  },
  default: function() {
    return Z
  }
}), l("724458"), l("653041"), l("411104");
var s = l("735250"),
  a = l("470079"),
  n = l("392711"),
  i = l.n(n),
  r = l("149765"),
  o = l("442837"),
  d = l("780384"),
  u = l("481060"),
  c = l("668781"),
  h = l("493683"),
  m = l("741361"),
  f = l("668390"),
  E = l("144991"),
  g = l("852860"),
  S = l("911969"),
  T = l("410030"),
  N = l("607070"),
  p = l("146085"),
  C = l("598077"),
  _ = l("277053"),
  x = l("388610"),
  M = l("271383"),
  I = l("430824"),
  R = l("496675"),
  A = l("594174"),
  O = l("568987"),
  L = l("442313"),
  v = l("823379"),
  j = l("892880"),
  y = l("63063"),
  b = l("5192"),
  D = l("233608"),
  F = l("700785"),
  P = l("51144"),
  w = l("257017"),
  U = l("188857"),
  H = l("981631"),
  B = l("689938"),
  G = l("513243");
let V = o.default.connectStores([_.default, x.default], () => {
  let e = x.default.getChannel();
  return {
    submitting: _.default.formState === H.FormStates.SUBMITTING,
    onReset() {
      (0, m.init)()
    },
    onSave() {
      if (null == e) return;
      let t = _.default.editedPermissionIds.reduce((e, t) => {
        let l = _.default.getPermissionOverwrite(t);
        return null != l && e.push(l), e
      }, []);
      (0, m.savePermissionUpdates)(e.id, t)
    }
  }
})(g.default);

function k(e) {
  let {
    overwrite: t
  } = e, l = (0, o.useStateFromStores)([_.default], () => _.default.channel), a = (0, o.useStateFromStores)([I.default], () => null != l ? I.default.getGuild(l.getGuildId()) : null), n = (0, o.useStateFromStores)([I.default], () => null != a ? I.default.getRoles(a.id) : void 0);
  if (null == l || null == a || null == t) return null;
  let {
    guild_id: i,
    id: d
  } = l, {
    id: f
  } = t, g = () => {
    var e;
    if (null == I.default.getGuild(i) || null == n) return "";
    let t = n[f],
      l = A.default.getUser(f),
      s = null !== (e = null == l ? void 0 : l.username) && void 0 !== e ? e : "";
    return null != t ? t.name : s
  }, T = (e, s) => {
    if ("boolean" == typeof s) throw Error("Unexpected boolean action");
    let {
      allow: a,
      deny: n
    } = t;
    switch (n = r.remove(n, e), a = r.remove(a, e), s) {
      case "ALLOW":
        a = r.add(a, e);
        break;
      case "DENY":
        n = r.add(n, e)
    }
    if (R.default.can(e, l, {
        [f]: {
          ...t,
          allow: a,
          deny: n
        }
      }))(0, m.updatePermission)(l, f, a, n);
    else {
      let e;
      if (t.type === S.PermissionOverwriteType.MEMBER) {
        let l = A.default.getUser(t.id);
        null != l && (e = P.default.getName(l))
      } else if (t.type === S.PermissionOverwriteType.ROLE) {
        let s = I.default.getGuild(l.getGuildId());
        if (null != s) {
          let l = I.default.getRole(s.id, t.id);
          null != l && (e = l.name)
        }
      }
      w.showPermissionLockoutModal(e)
    }
  }, N = () => {
    let e = g();
    c.default.show({
      title: B.default.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
      body: B.default.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
        name: e
      }),
      cancelText: B.default.Messages.CANCEL,
      onConfirm: () => h.default.clearPermissionOverwrite(d, f)
    })
  }, C = e => {
    let t = R.default.can(H.Permissions.ADMINISTRATOR, a) || R.default.can(H.Permissions.MANAGE_ROLES, l, void 0, void 0, !0);
    return l.isGuildStageVoice() && p.STAGE_CHANNEL_DISABLED_PERMISSIONS.has(e) ? B.default.Messages.STAGE_CHANNEL_CANNOT_OVERWRITE_PERMISSION : !((!r.equals(e, H.Permissions.MANAGE_ROLES) || t) && (null == e || R.default.can(e, a) || t)) && B.default.Messages.HELP_MISSING_PERMISSION
  }, x = f === i, M = l.isForumLikeChannel() && r.has(t.deny, H.Permissions.SEND_MESSAGES), O = r.has(t.deny, H.Permissions.SEND_MESSAGES), v = r.has(t.deny, H.Permissions.READ_MESSAGE_HISTORY), j = D.default.generateChannelPermissionSpec(i, l, x, {
    createPostsDisabled: M,
    sendMessagesDisabled: O,
    readMessageHistoryDisabled: v
  });
  return (0, s.jsxs)(L.default.Content, {
    className: G.layoutStyle,
    children: [j.map((e, l) => (0, s.jsx)(E.default, {
      spec: e,
      allow: t.allow,
      deny: t.deny,
      onChange: T,
      permissionRender: C,
      className: G.permissionsForm
    }, l)), i === f ? null : (0, s.jsx)(u.Button, {
      look: u.Button.Looks.OUTLINED,
      color: u.Button.Colors.RED,
      onClick: N,
      children: B.default.Messages.REMOVE_ROLE_OR_USER.format({
        name: g()
      })
    })]
  })
}

function W(e) {
  let {
    guildId: t,
    channelId: l,
    user: a
  } = e, n = a.getAvatarURL(t, 32), i = b.default.getNickname(t, l, a), r = P.default.useUserTag(a), o = null, d = null;
  return o = null != i ? i : a.hasAvatarForGuild(t) ? a.username : r, (null != i || a.hasAvatarForGuild(t)) && (d = (0, s.jsxs)("div", {
    className: G.userRowSubText,
    children: [a.hasAvatarForGuild(t) ? (0, s.jsx)(u.Avatar, {
      className: G.userRowSubAvatar,
      size: u.AvatarSizes.SIZE_16,
      src: a.getAvatarURL(void 0, 16),
      "aria-label": a.username
    }) : null, (0, s.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: r
    })]
  })), (0, s.jsxs)("div", {
    className: G.inline,
    children: [(0, s.jsx)(u.Avatar, {
      size: u.AvatarSizes.SIZE_32,
      src: n,
      "aria-label": a.username,
      className: G.userRowAvatar
    }), (0, s.jsxs)("div", {
      className: G.userRowText,
      children: [(0, s.jsx)(u.Text, {
        className: G.userRowText,
        variant: "text-md/normal",
        children: o
      }), d]
    })]
  })
}

function Y(e) {
  return "object" == typeof e && null != e && "colorString" in e && "name" in e
}

function z(e) {
  let {
    guild: t,
    channel: l,
    permissionOverwrites: a,
    onClose: n,
    onSelect: r,
    position: d
  } = e, u = (0, o.useStateFromStores)([I.default], () => I.default.getRoles(t.id)), c = (0, o.useStateFromStoresArray)([M.default], () => M.default.getMemberIds(t.id));
  return (0, s.jsx)(O.default, {
    label: B.default.Messages.OVERWRITE_AUTOCOMPLETE_LABEL,
    placeholder: B.default.Messages.OVERWRITE_AUTOCOMPLETE_PLACEHOLDER,
    "aria-label": B.default.Messages.OVERWRITE_AUTOCOMPLETE_A11Y_LABEL,
    sections: [B.default.Messages.ROLES, B.default.Messages.MEMBERS],
    onRenderResult: e => {
      if (Y(e)) {
        let t;
        return null != e.colorString && (t = {
          color: e.colorString
        }), (0, s.jsx)("span", {
          style: t,
          children: e.name
        })
      }
      if (e instanceof C.default) return (0, s.jsx)(W, {
        guildId: t.id,
        channelId: l.id,
        user: e
      })
    },
    onFilterResults: (e, t) => 0 === t ? i()(u).filter(t => null == a[t.id] && e(t.name)).sortBy(e => -e.position).value() : i()(c).map(A.default.getUser).filter(v.isNotNullish).filter(e => !e.isClyde()).filter(t => null == a[t.id] && e(t.username.toLowerCase())).sortBy(e => e.username.toLowerCase()).value(),
    onQueryChange: e => {
      j.default.requestMembers(t.id, e, 20)
    },
    onSelect: e => {
      null != e && (Y(e) ? r(e.id, S.PermissionOverwriteType.ROLE) : e instanceof C.default && r(e.id, S.PermissionOverwriteType.MEMBER))
    },
    onClose: n,
    position: d
  })
}

function K() {
  let {
    channel: e,
    permissionOverwrites: t,
    selectedOverwriteId: n
  } = (0, o.useStateFromStoresObject)([_.default], () => _.default), r = null == e ? void 0 : e.getGuildId(), {
    guild: c,
    guildRoles: E
  } = (0, o.useStateFromStoresObject)([I.default], () => {
    let e = null != r ? I.default.getGuild(r) : void 0,
      t = null != e ? I.default.getRoles(e.id) : void 0;
    return {
      guild: e,
      guildRoles: t
    }
  }, [r]), g = (0, U.default)(r, t), p = (0, T.default)(), C = (0, o.useStateFromStores)([N.default], () => N.default.roleStyle);
  if (null == c || null == E || null == e || null == t) return null;
  let x = l => {
      let {
        position: a,
        closePopout: n
      } = l;
      return (0, s.jsx)(z, {
        guild: c,
        channel: e,
        permissionOverwrites: t,
        position: null != a ? a : "bottom",
        onSelect: M,
        onClose: n
      })
    },
    M = (t, l) => {
      h.default.updatePermissionOverwrite(e.id, {
        id: t,
        type: l,
        allow: F.NONE,
        deny: F.NONE
      }).then(() => (0, m.selectPermission)(t))
    };
  null != t && null == t[c.id] && (t[c.id] = F.makeEveryoneOverwrite(c.id));
  let R = i()(t).filter(e => e.type === S.PermissionOverwriteType.ROLE).map(e => E[e.id]).filter(v.isNotNullish).sortBy(e => -e.position).map(e => (0, s.jsx)(f.default, {
      theme: p,
      roleStyle: C,
      id: e.id,
      role: e,
      guild: c,
      color: e.colorString,
      "aria-label": e.name,
      children: e.name
    }, "".concat(n, "-").concat(e.id))).value(),
    A = i()(g).sortBy(e => e.username.toLowerCase()).map(e => {
      let t = e.getAvatarURL(c.id, 24);
      return (0, s.jsx)(f.default, {
        id: e.id,
        guild: c,
        theme: p,
        roleStyle: C,
        "aria-label": P.default.getUserTag(e, {
          decoration: "never"
        }),
        children: (0, s.jsxs)("div", {
          className: G.inline,
          children: [(0, s.jsx)(u.Avatar, {
            size: u.AvatarSizes.SIZE_20,
            src: t,
            "aria-label": e.username,
            className: G.xsmallAvatar
          }), (0, s.jsx)("span", {
            className: G.username,
            children: P.default.getUserTag(e)
          })]
        })
      }, "".concat(n, "-").concat(e.id))
    }).value();
  return (0, s.jsx)(L.default.Sidebar, {
    className: G.layoutStyle,
    scrollable: !0,
    children: (0, s.jsxs)(u.TabBar, {
      onItemSelect: m.selectPermission,
      selectedItem: n,
      orientation: "vertical",
      children: [(() => {
        let e = (0, d.isThemeDark)(p) ? l("521715") : l("299603");
        return (0, s.jsx)(u.Popout, {
          renderPopout: x,
          position: "bottom",
          autoInvert: !1,
          children: t => (0, s.jsx)(u.TabBar.Header, {
            ...t,
            children: (0, s.jsxs)("div", {
              className: G.sidebarHeaderDefault,
              children: [(0, s.jsxs)("span", {
                children: [B.default.Messages.ROLES, "/", B.default.Messages.MEMBERS]
              }), (0, s.jsx)("img", {
                alt: "",
                className: G.sidebarHeader,
                src: e
              })]
            })
          })
        })
      })(), R, A, (0, s.jsxs)(a.Fragment, {
        children: [(0, s.jsx)(u.TabBar.Separator, {
          style: {
            marginTop: 20,
            marginBottom: 14
          }
        }), (0, s.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          children: (0, s.jsx)(u.Anchor, {
            href: y.default.getArticleURL(H.HelpdeskArticles.PERMISSIONS_TUTORIAL),
            target: "_blank",
            children: B.default.Messages.PERMISSION_HELPDESK
          })
        })]
      })]
    })
  })
}

function Z() {
  let {
    channel: e,
    permissionOverwrites: t,
    selectedOverwriteId: l
  } = (0, o.useStateFromStoresObject)([_.default], () => _.default);
  if (null == (0, o.useStateFromStores)([I.default], () => null != e ? I.default.getGuild(e.getGuildId()) : null) || null == e || null == t || null == l) return null;
  let a = t[l];
  return (0, s.jsxs)(L.default, {
    className: G.container,
    children: [(0, s.jsx)(K, {}), (0, s.jsx)(k, {
      overwrite: a
    })]
  })
}