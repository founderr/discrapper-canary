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
  h = a(810568),
  g = a(981631),
  x = a(689938),
  I = a(997844);
let E = [r.p.OFFICIAL, r.p.TWITTER, r.p.YOUTUBE],
  _ = e => {
    let {
      invite: l,
      trackClick: a
    } = e, {
      approximate_member_count: s,
      guild: t
    } = l;
    if (null == t) return null;
    let r = u.Z.isMember(t.id);
    if (!(null == t ? void 0 : t.features.includes("VERIFIED")) && !(null == t ? void 0 : t.features.includes("PARTNER"))) return null;
    let d = m.ZP.getGuildIconURL({
      id: t.id,
      icon: t.icon,
      size: 32
    });
    return (0, n.jsxs)("div", {
      className: i()(I.column),
      children: [(0, n.jsx)(o.Text, {
        variant: "text-xs/semibold",
        children: x.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
      }), (0, n.jsxs)("div", {
        className: i()(I.row, I.gapMd),
        children: [(0, n.jsx)("img", {
          className: I.icon,
          src: d,
          alt: x.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
            guildName: t.name
          })
        }), (0, n.jsxs)("div", {
          className: i()(I.gapNone),
          children: [(0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: t.name
          }), null != s && (0, n.jsx)(o.Text, {
            variant: "text-xxs/normal",
            children: x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: s
            })
          })]
        })]
      }), (0, n.jsx)(o.Button, {
        color: o.ButtonColors.PRIMARY,
        onClick: () => {
          a(h.a.JoinOfficialServer), c.Z.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: l,
            code: l.code,
            context: g.IlC.APP
          })
        },
        children: r ? x.Z.Messages.JOINED_GUILD : x.Z.Messages.JOIN_GUILD
      })]
    })
  };
l.Z = e => {
  let {
    websites: l,
    trackClick: a
  } = e, t = null == l ? void 0 : l.find(e => {
    let {
      category: l
    } = e;
    return l === r.p.DISCORD
  }), [c, u] = s.useState();
  if (s.useEffect(() => {
      let e = async e => {
        let l = e.split("/").pop();
        if (null != l) {
          let e = await (0, d.Z)(l);
          !0 !== e.banned && u(e.invite)
        }
      };
      null != t && e(t.url)
    }, [t]), null == l || 0 === l.length) return null;
  let m = l.filter(e => {
    let {
      category: l
    } = e;
    return E.includes(l)
  }).sort((e, l) => e.category - l.category);
  return (0, n.jsxs)("div", {
    className: i()(I.column),
    children: [null != c && (0, n.jsx)(_, {
      invite: c,
      trackClick: a
    }), (0, n.jsxs)("div", {
      className: i()(I.column, I.gapSm),
      children: [(0, n.jsx)(o.Text, {
        variant: "text-xs/semibold",
        children: x.Z.Messages.GAME_PROFILE_LINKS
      }), (0, n.jsx)("div", {
        className: I.row,
        children: m.map(e => {
          let l, {
              category: s,
              url: t
            } = e,
            i = null;
          switch (s) {
            case r.p.OFFICIAL:
              i = (0, n.jsx)(o.GlobeEarthIcon, {}), l = h.a.WebsiteLink;
              break;
            case r.p.TWITTER:
              i = (0, n.jsx)(o.XNeutralIcon, {}), l = h.a.XLink;
              break;
            case r.p.YOUTUBE:
              l = h.a.YouTubeLink, i = (0, n.jsx)(o.YouTubeIcon, {})
          }
          return null != i ? (0, n.jsx)(o.Anchor, {
            href: t,
            onClick: () => {
              a(l)
            },
            target: "_blank",
            children: i
          }, t) : null
        })
      })]
    })]
  })
}