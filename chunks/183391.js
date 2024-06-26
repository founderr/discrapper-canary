a(47120);
var n = a(735250),
  s = a(470079),
  t = a(120356),
  i = a.n(t),
  r = a(643872),
  o = a(481060),
  c = a(570140),
  d = a(652898),
  u = a(93093),
  m = a(768581),
  h = a(981631),
  x = a(689938),
  g = a(997844);
let E = [r.p.OFFICIAL, r.p.TWITTER, r.p.YOUTUBE],
  I = e => {
    let {
      invite: l
    } = e, {
      approximate_member_count: a,
      guild: s
    } = l;
    if (null == s) return null;
    let t = u.Z.isMember(s.id);
    if (!(null == s ? void 0 : s.features.includes("VERIFIED")) && !(null == s ? void 0 : s.features.includes("PARTNER"))) return null;
    let r = m.ZP.getGuildIconURL({
      id: s.id,
      icon: s.icon,
      size: 32
    });
    return (0, n.jsxs)("div", {
      className: i()(g.column),
      children: [(0, n.jsx)(o.Text, {
        variant: "text-xs/semibold",
        children: x.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
      }), (0, n.jsxs)("div", {
        className: i()(g.row, g.gapMd),
        children: [(0, n.jsx)("img", {
          className: g.icon,
          src: r,
          alt: x.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
            guildName: s.name
          })
        }), (0, n.jsxs)("div", {
          className: i()(g.gapNone),
          children: [(0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: s.name
          }), null != a && (0, n.jsx)(o.Text, {
            variant: "text-xxs/normal",
            children: x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: a
            })
          })]
        })]
      }), (0, n.jsx)(o.Button, {
        color: o.ButtonColors.PRIMARY,
        onClick: () => {
          c.Z.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: l,
            code: l.code,
            context: h.IlC.APP
          })
        },
        children: t ? x.Z.Messages.JOINED_GUILD : x.Z.Messages.JOIN_GUILD
      })]
    })
  };
l.Z = e => {
  let {
    websites: l
  } = e, a = null == l ? void 0 : l.find(e => {
    let {
      category: l
    } = e;
    return l === r.p.DISCORD
  }), [t, c] = s.useState();
  if (s.useEffect(() => {
      let e = async e => {
        let l = e.split("/").pop();
        if (null != l) {
          let e = await (0, d.Z)(l);
          !0 !== e.banned && c(e.invite)
        }
      };
      null != a && e(a.url)
    }, [a]), null == l || 0 === l.length) return null;
  let u = l.filter(e => {
    let {
      category: l
    } = e;
    return E.includes(l)
  }).sort((e, l) => e.category - l.category);
  return (0, n.jsxs)("div", {
    className: i()(g.column),
    children: [null != t && (0, n.jsx)(I, {
      invite: t
    }), (0, n.jsxs)("div", {
      className: i()(g.column, g.gapSm),
      children: [(0, n.jsx)(o.Text, {
        variant: "text-xs/semibold",
        children: x.Z.Messages.GAME_PROFILE_LINKS
      }), (0, n.jsx)("div", {
        className: g.row,
        children: u.map(e => {
          let {
            category: l,
            url: a
          } = e, s = null;
          switch (l) {
            case r.p.OFFICIAL:
              s = (0, n.jsx)(o.GlobeEarthIcon, {});
              break;
            case r.p.TWITTER:
              s = (0, n.jsx)(o.XNeutralIcon, {});
              break;
            case r.p.YOUTUBE:
              s = (0, n.jsx)(o.YouTubeIcon, {})
          }
          return null != s ? (0, n.jsx)(o.Anchor, {
            href: a,
            target: "_blank",
            children: s
          }, a) : null
        })
      })]
    })]
  })
}