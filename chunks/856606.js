t.d(s, {
  Z: function() {
    return Q
  },
  n: function() {
    return G
  }
}), t(724458), t(653041), t(411104);
var l = t(735250),
  n = t(470079),
  i = t(392711),
  a = t.n(i),
  r = t(149765),
  o = t(442837),
  d = t(780384),
  c = t(481060),
  u = t(668781),
  h = t(493683),
  m = t(741361),
  g = t(668390),
  E = t(144991),
  T = t(852860),
  N = t(911969),
  S = t(410030),
  p = t(607070),
  x = t(146085),
  M = t(598077),
  C = t(277053),
  _ = t(388610),
  R = t(271383),
  I = t(430824),
  Z = t(496675),
  f = t(594174),
  O = t(568987),
  v = t(442313),
  A = t(823379),
  j = t(892880),
  L = t(63063),
  b = t(5192),
  D = t(233608),
  y = t(700785),
  P = t(51144),
  F = t(257017),
  w = t(188857),
  B = t(981631),
  U = t(689938),
  H = t(438254);
let G = o.ZP.connectStores([C.Z, _.Z], () => {
  let e = _.Z.getChannel();
  return {
    submitting: C.Z.formState === B.QZA.SUBMITTING,
    onReset() {
      (0, m.S1)()
    },
    onSave() {
      if (null == e) return;
      let s = C.Z.editedPermissionIds.reduce((e, s) => {
        let t = C.Z.getPermissionOverwrite(s);
        return null != t && e.push(t), e
      }, []);
      (0, m.hw)(e.id, s)
    }
  }
})(T.Z);

function k(e) {
  let {
    overwrite: s
  } = e, t = (0, o.e7)([C.Z], () => C.Z.channel), n = (0, o.e7)([I.Z], () => null != t ? I.Z.getGuild(t.getGuildId()) : null), i = (0, o.e7)([I.Z], () => null != n ? I.Z.getRoles(n.id) : void 0);
  if (null == t || null == n || null == s) return null;
  let {
    guild_id: a,
    id: d
  } = t, {
    id: g
  } = s, T = () => {
    var e;
    if (null == I.Z.getGuild(a) || null == i) return "";
    let s = i[g],
      t = f.default.getUser(g),
      l = null !== (e = null == t ? void 0 : t.username) && void 0 !== e ? e : "";
    return null != s ? s.name : l
  }, S = (e, l) => {
    if ("boolean" == typeof l) throw Error("Unexpected boolean action");
    let {
      allow: n,
      deny: i
    } = s;
    switch (i = r.Od(i, e), n = r.Od(n, e), l) {
      case "ALLOW":
        n = r.IH(n, e);
        break;
      case "DENY":
        i = r.IH(i, e)
    }
    if (Z.Z.can(e, t, {
        [g]: {
          ...s,
          allow: n,
          deny: i
        }
      }))(0, m.kY)(t, g, n, i);
    else {
      let e;
      if (s.type === N.BN.MEMBER) {
        let t = f.default.getUser(s.id);
        null != t && (e = P.ZP.getName(t))
      } else if (s.type === N.BN.ROLE) {
        let l = I.Z.getGuild(t.getGuildId());
        if (null != l) {
          let t = I.Z.getRole(l.id, s.id);
          null != t && (e = t.name)
        }
      }
      F.X(e)
    }
  }, p = () => {
    let e = T();
    u.Z.show({
      title: U.Z.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
      body: U.Z.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
        name: e
      }),
      cancelText: U.Z.Messages.CANCEL,
      onConfirm: () => h.Z.clearPermissionOverwrite(d, g)
    })
  }, M = e => {
    let s = Z.Z.can(B.Plq.ADMINISTRATOR, n) || Z.Z.can(B.Plq.MANAGE_ROLES, t, void 0, void 0, !0);
    return t.isGuildStageVoice() && x.xS.has(e) ? U.Z.Messages.STAGE_CHANNEL_CANNOT_OVERWRITE_PERMISSION : !((!r.fS(e, B.Plq.MANAGE_ROLES) || s) && (null == e || Z.Z.can(e, n) || s)) && U.Z.Messages.HELP_MISSING_PERMISSION
  }, _ = g === a, R = t.isForumLikeChannel() && r.e$(s.deny, B.Plq.SEND_MESSAGES), O = r.e$(s.deny, B.Plq.SEND_MESSAGES), A = r.e$(s.deny, B.Plq.READ_MESSAGE_HISTORY), j = D.Z.generateChannelPermissionSpec(a, t, _, {
    createPostsDisabled: R,
    sendMessagesDisabled: O,
    readMessageHistoryDisabled: A
  });
  return (0, l.jsxs)(v.ZP.Content, {
    className: H.layoutStyle,
    children: [j.map((e, t) => (0, l.jsx)(E.Z, {
      spec: e,
      allow: s.allow,
      deny: s.deny,
      onChange: S,
      permissionRender: M,
      className: H.permissionsForm
    }, t)), a === g ? null : (0, l.jsx)(c.Button, {
      look: c.Button.Looks.OUTLINED,
      color: c.Button.Colors.RED,
      onClick: p,
      children: U.Z.Messages.REMOVE_ROLE_OR_USER.format({
        name: T()
      })
    })]
  })
}

function V(e) {
  let {
    guildId: s,
    channelId: t,
    user: n
  } = e, i = n.getAvatarURL(s, 32), a = b.ZP.getNickname(s, t, n), r = P.ZP.useUserTag(n), o = null, d = null;
  return o = null != a ? a : n.hasAvatarForGuild(s) ? n.username : r, (null != a || n.hasAvatarForGuild(s)) && (d = (0, l.jsxs)("div", {
    className: H.userRowSubText,
    children: [n.hasAvatarForGuild(s) ? (0, l.jsx)(c.Avatar, {
      className: H.userRowSubAvatar,
      size: c.AvatarSizes.SIZE_16,
      src: n.getAvatarURL(void 0, 16),
      "aria-label": n.username
    }) : null, (0, l.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: r
    })]
  })), (0, l.jsxs)("div", {
    className: H.inline,
    children: [(0, l.jsx)(c.Avatar, {
      size: c.AvatarSizes.SIZE_32,
      src: i,
      "aria-label": n.username,
      className: H.userRowAvatar
    }), (0, l.jsxs)("div", {
      className: H.userRowText,
      children: [(0, l.jsx)(c.Text, {
        className: H.userRowText,
        variant: "text-md/normal",
        children: o
      }), d]
    })]
  })
}

function W(e) {
  return "object" == typeof e && null != e && "colorString" in e && "name" in e
}

function z(e) {
  let {
    guild: s,
    channel: t,
    permissionOverwrites: n,
    onClose: i,
    onSelect: r,
    position: d
  } = e, c = (0, o.e7)([I.Z], () => I.Z.getRoles(s.id)), u = (0, o.Wu)([R.ZP], () => R.ZP.getMemberIds(s.id));
  return (0, l.jsx)(O.Z, {
    label: U.Z.Messages.OVERWRITE_AUTOCOMPLETE_LABEL,
    placeholder: U.Z.Messages.OVERWRITE_AUTOCOMPLETE_PLACEHOLDER,
    "aria-label": U.Z.Messages.OVERWRITE_AUTOCOMPLETE_A11Y_LABEL,
    sections: [U.Z.Messages.ROLES, U.Z.Messages.MEMBERS],
    onRenderResult: e => {
      if (W(e)) {
        let s;
        return null != e.colorString && (s = {
          color: e.colorString
        }), (0, l.jsx)("span", {
          style: s,
          children: e.name
        })
      }
      if (e instanceof M.Z) return (0, l.jsx)(V, {
        guildId: s.id,
        channelId: t.id,
        user: e
      })
    },
    onFilterResults: (e, s) => 0 === s ? a()(c).filter(s => null == n[s.id] && e(s.name)).sortBy(e => -e.position).value() : a()(u).map(f.default.getUser).filter(A.lm).filter(e => !e.isClyde()).filter(s => null == n[s.id] && e(s.username.toLowerCase())).sortBy(e => e.username.toLowerCase()).value(),
    onQueryChange: e => {
      j.Z.requestMembers(s.id, e, 20)
    },
    onSelect: e => {
      if (null != e) W(e) ? r(e.id, N.BN.ROLE) : e instanceof M.Z && r(e.id, N.BN.MEMBER)
    },
    onClose: i,
    position: d
  })
}

function Y() {
  let {
    channel: e,
    permissionOverwrites: s,
    selectedOverwriteId: i
  } = (0, o.cj)([C.Z], () => C.Z), r = null == e ? void 0 : e.getGuildId(), {
    guild: u,
    guildRoles: E
  } = (0, o.cj)([I.Z], () => {
    let e = null != r ? I.Z.getGuild(r) : void 0,
      s = null != e ? I.Z.getRoles(e.id) : void 0;
    return {
      guild: e,
      guildRoles: s
    }
  }, [r]), T = (0, w.Z)(r, s), x = (0, S.ZP)(), M = (0, o.e7)([p.Z], () => p.Z.roleStyle);
  if (null == u || null == E || null == e || null == s) return null;
  let _ = t => {
      let {
        position: n,
        closePopout: i
      } = t;
      return (0, l.jsx)(z, {
        guild: u,
        channel: e,
        permissionOverwrites: s,
        position: null != n ? n : "bottom",
        onSelect: R,
        onClose: i
      })
    },
    R = (s, t) => {
      h.Z.updatePermissionOverwrite(e.id, {
        id: s,
        type: t,
        allow: y.Hn,
        deny: y.Hn
      }).then(() => (0, m.Aj)(s))
    };
  null != s && null == s[u.id] && (s[u.id] = y.we(u.id));
  let Z = a()(s).filter(e => e.type === N.BN.ROLE).map(e => E[e.id]).filter(A.lm).sortBy(e => -e.position).map(e => (0, l.jsx)(g.Z, {
      theme: x,
      roleStyle: M,
      id: e.id,
      role: e,
      guild: u,
      color: e.colorString,
      "aria-label": e.name,
      children: e.name
    }, "".concat(i, "-").concat(e.id))).value(),
    f = a()(T).sortBy(e => e.username.toLowerCase()).map(e => {
      let s = e.getAvatarURL(u.id, 24);
      return (0, l.jsx)(g.Z, {
        id: e.id,
        guild: u,
        theme: x,
        roleStyle: M,
        "aria-label": P.ZP.getUserTag(e, {
          decoration: "never"
        }),
        children: (0, l.jsxs)("div", {
          className: H.inline,
          children: [(0, l.jsx)(c.Avatar, {
            size: c.AvatarSizes.SIZE_20,
            src: s,
            "aria-label": e.username,
            className: H.xsmallAvatar
          }), (0, l.jsx)("span", {
            className: H.username,
            children: P.ZP.getUserTag(e)
          })]
        })
      }, "".concat(i, "-").concat(e.id))
    }).value();
  return (0, l.jsx)(v.ZP.Sidebar, {
    className: H.layoutStyle,
    scrollable: !0,
    children: (0, l.jsxs)(c.TabBar, {
      onItemSelect: m.Aj,
      selectedItem: i,
      orientation: "vertical",
      children: [(() => {
        let e = (0, d.wj)(x) ? t(521715) : t(299603);
        return (0, l.jsx)(c.Popout, {
          renderPopout: _,
          position: "bottom",
          autoInvert: !1,
          children: s => (0, l.jsx)(c.TabBar.Header, {
            ...s,
            children: (0, l.jsxs)("div", {
              className: H.sidebarHeaderDefault,
              children: [(0, l.jsxs)("span", {
                children: [U.Z.Messages.ROLES, "/", U.Z.Messages.MEMBERS]
              }), (0, l.jsx)("img", {
                alt: "",
                className: H.sidebarHeader,
                src: e
              })]
            })
          })
        })
      })(), Z, f, (0, l.jsxs)(n.Fragment, {
        children: [(0, l.jsx)(c.TabBar.Separator, {
          style: {
            marginTop: 20,
            marginBottom: 14
          }
        }), (0, l.jsx)(c.FormText, {
          type: c.FormTextTypes.DESCRIPTION,
          children: (0, l.jsx)(c.Anchor, {
            href: L.Z.getArticleURL(B.BhN.PERMISSIONS_TUTORIAL),
            target: "_blank",
            children: U.Z.Messages.PERMISSION_HELPDESK
          })
        })]
      })]
    })
  })
}

function Q() {
  let {
    channel: e,
    permissionOverwrites: s,
    selectedOverwriteId: t
  } = (0, o.cj)([C.Z], () => C.Z);
  if (null == (0, o.e7)([I.Z], () => null != e ? I.Z.getGuild(e.getGuildId()) : null) || null == e || null == s || null == t) return null;
  let n = s[t];
  return (0, l.jsxs)(v.ZP, {
    className: H.container,
    children: [(0, l.jsx)(Y, {}), (0, l.jsx)(k, {
      overwrite: n
    })]
  })
}