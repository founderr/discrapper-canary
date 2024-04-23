"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("593473"),
  o = s("442837"),
  u = s("481060"),
  d = s("749210"),
  c = s("558381"),
  _ = s("666743"),
  E = s("41776"),
  T = s("703656"),
  I = s("769654"),
  R = s("601964"),
  f = s("430824"),
  S = s("378720"),
  m = s("285952"),
  A = s("346656"),
  N = s("263704"),
  p = s("843445"),
  g = s("981631"),
  C = s("689938"),
  P = s("526549");

function O(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class M extends r.PureComponent {
  renderMemberInfo() {
    let {
      approximateMemberCount: e,
      approximatePresenceCount: t
    } = this.props.guild;
    return null == e || null == t ? null : (0, a.jsxs)(m.default, {
      className: P.memberInfo,
      align: m.default.Align.CENTER,
      children: [(0, a.jsx)("div", {
        className: P.dotOnline
      }), (0, a.jsx)("span", {
        className: P.memberText,
        children: C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: t
        })
      }), (0, a.jsx)("div", {
        className: P.dotOffline
      }), (0, a.jsx)("span", {
        className: P.memberText,
        children: C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
          count: e
        })
      })]
    })
  }
  render() {
    let {
      guild: e,
      inChannel: t,
      isInGuild: s,
      isLurking: r,
      isAuthenticated: i,
      className: l,
      pageSize: o
    } = this.props;
    if (t && s) return null;
    let d = new R.default(e),
      c = C.default.Messages.LURKER_MODE_VIEW_GUILD,
      _ = this.handleJoinOrView,
      E = u.Button.Looks.FILLED,
      T = u.Button.Colors.PRIMARY;
    return i ? s ? (E = u.Button.Looks.OUTLINED, T = P.buttonColorInGuild, c = (0, a.jsxs)(m.default, {
      align: m.default.Align.CENTER,
      children: [(0, a.jsx)("div", {
        children: C.default.Messages.JOINED_GUILD
      }), (0, a.jsx)(N.default, {
        className: P.joinedCheckmark
      })]
    })) : r && t && (c = C.default.Messages.JOIN_GUILD) : (c = C.default.Messages._LOGIN, _ = this.handleLogin), (0, a.jsxs)("div", {
      className: n()(l, o === p.PageSizes.SMALL ? P.inviteSmall : P.inviteLarge),
      children: [(0, a.jsx)(S.default, {
        children: C.default.Messages.APPLICATION_STORE_SECTION_TITLE_VERIFIED_GUILD
      }), (0, a.jsxs)("div", {
        className: P.content,
        children: [(0, a.jsxs)("div", {
          className: P.info,
          children: [(0, a.jsx)(A.default, {
            guild: d,
            active: !0,
            size: A.default.Sizes.LARGE,
            className: P.guildIcon
          }), (0, a.jsxs)("div", {
            className: P.infoText,
            children: [(0, a.jsx)("div", {
              className: P.name,
              children: e.name
            }), this.renderMemberInfo()]
          })]
        }), (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          className: P.actionButton,
          fullWidth: !0,
          color: T,
          look: E,
          onClick: _,
          children: c
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), O(this, "handleJoinOrView", async () => {
      let {
        guild: e,
        skuId: t,
        isInGuild: s,
        isLurking: a
      } = this.props, r = () => (0, I.transitionToGuild)(e.id);
      if (a)(0, c.joinPublishedStoreListingSkuGuild)(t).then(r);
      else if (s) r();
      else try {
        await d.default.joinGuild(e.id, {
          lurker: !0,
          source: g.JoinGuildSources.APPLICATION_STORE
        }), r()
      } catch {}
    }), O(this, "handleLogin", () => {
      let e = {
        redirect_to: g.Routes.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
      };
      (0, T.transitionTo)(g.Routes.LOGIN, {
        search: (0, l.stringify)(e)
      })
    })
  }
}
t.default = (0, _.default)(o.default.connectStores([f.default, E.default], e => {
  let {
    guild: t
  } = e, s = E.default.isLurking(t.id);
  return {
    isInGuild: null != f.default.getGuild(t.id) && !s,
    isLurking: s
  }
})(M))