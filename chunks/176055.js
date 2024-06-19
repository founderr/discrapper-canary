t(47120);
var n = t(735250),
  r = t(470079),
  i = t(120356),
  a = t.n(i),
  l = t(593473),
  o = t(442837),
  c = t(481060),
  u = t(749210),
  I = t(558381),
  T = t(666743),
  d = t(41776),
  _ = t(703656),
  E = t(769654),
  S = t(601964),
  O = t(430824),
  A = t(378720),
  N = t(285952),
  R = t(346656),
  h = t(843445),
  P = t(981631),
  p = t(689938),
  g = t(654075);

function C(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class L extends r.PureComponent {
  renderMemberInfo() {
    let {
      approximateMemberCount: e,
      approximatePresenceCount: s
    } = this.props.guild;
    return null == e || null == s ? null : (0, n.jsxs)(N.Z, {
      className: g.memberInfo,
      align: N.Z.Align.CENTER,
      children: [(0, n.jsx)("div", {
        className: g.dotOnline
      }), (0, n.jsx)("span", {
        className: g.memberText,
        children: p.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: s
        })
      }), (0, n.jsx)("div", {
        className: g.dotOffline
      }), (0, n.jsx)("span", {
        className: g.memberText,
        children: p.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
          count: e
        })
      })]
    })
  }
  render() {
    let {
      guild: e,
      inChannel: s,
      isInGuild: t,
      isLurking: r,
      isAuthenticated: i,
      className: l,
      pageSize: o
    } = this.props;
    if (s && t) return null;
    let u = new S.ZP(e),
      I = p.Z.Messages.LURKER_MODE_VIEW_GUILD,
      T = this.handleJoinOrView,
      d = c.Button.Looks.FILLED,
      _ = c.Button.Colors.PRIMARY;
    return i ? t ? (d = c.Button.Looks.OUTLINED, _ = g.buttonColorInGuild, I = (0, n.jsxs)(N.Z, {
      align: N.Z.Align.CENTER,
      children: [(0, n.jsx)("div", {
        children: p.Z.Messages.JOINED_GUILD
      }), (0, n.jsx)(c.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: g.joinedCheckmark
      })]
    })) : r && s && (I = p.Z.Messages.JOIN_GUILD) : (I = p.Z.Messages._LOGIN, T = this.handleLogin), (0, n.jsxs)("div", {
      className: a()(l, o === h.b.SMALL ? g.inviteSmall : g.inviteLarge),
      children: [(0, n.jsx)(A.Z, {
        children: p.Z.Messages.APPLICATION_STORE_SECTION_TITLE_VERIFIED_GUILD
      }), (0, n.jsxs)("div", {
        className: g.content,
        children: [(0, n.jsxs)("div", {
          className: g.info,
          children: [(0, n.jsx)(R.Z, {
            guild: u,
            active: !0,
            size: R.Z.Sizes.LARGE,
            className: g.guildIcon
          }), (0, n.jsxs)("div", {
            className: g.infoText,
            children: [(0, n.jsx)("div", {
              className: g.name,
              children: e.name
            }), this.renderMemberInfo()]
          })]
        }), (0, n.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          className: g.actionButton,
          fullWidth: !0,
          color: _,
          look: d,
          onClick: T,
          children: I
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), C(this, "handleJoinOrView", async () => {
      let {
        guild: e,
        skuId: s,
        isInGuild: t,
        isLurking: n
      } = this.props, r = () => (0, E.X)(e.id);
      if (n)(0, I.Oj)(s).then(r);
      else if (t) r();
      else try {
        await u.Z.joinGuild(e.id, {
          lurker: !0,
          source: P.vtS.APPLICATION_STORE
        }), r()
      } catch {}
    }), C(this, "handleLogin", () => {
      let e = {
        redirect_to: P.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
      };
      (0, _.uL)(P.Z5c.LOGIN, {
        search: (0, l.stringify)(e)
      })
    })
  }
}
s.Z = (0, T.Z)(o.ZP.connectStores([O.Z, d.Z], e => {
  let {
    guild: s
  } = e, t = d.Z.isLurking(s.id);
  return {
    isInGuild: null != O.Z.getGuild(s.id) && !t,
    isLurking: t
  }
})(L))