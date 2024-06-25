n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(593473),
  o = n(442837),
  c = n(481060),
  u = n(749210),
  d = n(558381),
  E = n(666743),
  h = n(41776),
  _ = n(703656),
  I = n(769654),
  m = n(601964),
  T = n(430824),
  g = n(378720),
  p = n(285952),
  N = n(346656),
  S = n(843445),
  C = n(981631),
  A = n(689938),
  f = n(654075);

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class L extends i.PureComponent {
  renderMemberInfo() {
    let {
      approximateMemberCount: e,
      approximatePresenceCount: t
    } = this.props.guild;
    return null == e || null == t ? null : (0, s.jsxs)(p.Z, {
      className: f.memberInfo,
      align: p.Z.Align.CENTER,
      children: [(0, s.jsx)("div", {
        className: f.dotOnline
      }), (0, s.jsx)("span", {
        className: f.memberText,
        children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: t
        })
      }), (0, s.jsx)("div", {
        className: f.dotOffline
      }), (0, s.jsx)("span", {
        className: f.memberText,
        children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
          count: e
        })
      })]
    })
  }
  render() {
    let {
      guild: e,
      inChannel: t,
      isInGuild: n,
      isLurking: i,
      isAuthenticated: l,
      className: r,
      pageSize: o
    } = this.props;
    if (t && n) return null;
    let u = new m.ZP(e),
      d = A.Z.Messages.LURKER_MODE_VIEW_GUILD,
      E = this.handleJoinOrView,
      h = c.Button.Looks.FILLED,
      _ = c.Button.Colors.PRIMARY;
    return l ? n ? (h = c.Button.Looks.OUTLINED, _ = f.buttonColorInGuild, d = (0, s.jsxs)(p.Z, {
      align: p.Z.Align.CENTER,
      children: [(0, s.jsx)("div", {
        children: A.Z.Messages.JOINED_GUILD
      }), (0, s.jsx)(c.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: f.joinedCheckmark
      })]
    })) : i && t && (d = A.Z.Messages.JOIN_GUILD) : (d = A.Z.Messages._LOGIN, E = this.handleLogin), (0, s.jsxs)("div", {
      className: a()(r, o === S.b.SMALL ? f.inviteSmall : f.inviteLarge),
      children: [(0, s.jsx)(g.Z, {
        children: A.Z.Messages.APPLICATION_STORE_SECTION_TITLE_VERIFIED_GUILD
      }), (0, s.jsxs)("div", {
        className: f.content,
        children: [(0, s.jsxs)("div", {
          className: f.info,
          children: [(0, s.jsx)(N.Z, {
            guild: u,
            active: !0,
            size: N.Z.Sizes.LARGE,
            className: f.guildIcon
          }), (0, s.jsxs)("div", {
            className: f.infoText,
            children: [(0, s.jsx)("div", {
              className: f.name,
              children: e.name
            }), this.renderMemberInfo()]
          })]
        }), (0, s.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          className: f.actionButton,
          fullWidth: !0,
          color: _,
          look: h,
          onClick: E,
          children: d
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), Z(this, "handleJoinOrView", async () => {
      let {
        guild: e,
        skuId: t,
        isInGuild: n,
        isLurking: s
      } = this.props, i = () => (0, I.X)(e.id);
      if (s)(0, d.Oj)(t).then(i);
      else if (n) i();
      else try {
        await u.Z.joinGuild(e.id, {
          lurker: !0,
          source: C.vtS.APPLICATION_STORE
        }), i()
      } catch {}
    }), Z(this, "handleLogin", () => {
      let e = {
        redirect_to: C.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
      };
      (0, _.uL)(C.Z5c.LOGIN, {
        search: (0, r.stringify)(e)
      })
    })
  }
}
t.Z = (0, E.Z)(o.ZP.connectStores([T.Z, h.Z], e => {
  let {
    guild: t
  } = e, n = h.Z.isLurking(t.id);
  return {
    isInGuild: null != T.Z.getGuild(t.id) && !n,
    isLurking: n
  }
})(L))