n(47120);
var s = n(735250),
  t = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(643872),
  o = n(481060),
  c = n(570140),
  d = n(652898),
  u = n(93093),
  m = n(768581),
  h = n(981631),
  x = n(689938),
  I = n(997844);
let g = [r.p.OFFICIAL, r.p.TWITTER, r.p.YOUTUBE],
  E = e => {
    let {
      invite: l
    } = e, {
      approximate_member_count: n,
      guild: t
    } = l;
    if (null == t) return null;
    let a = u.Z.isMember(t.id);
    if (!(null == t ? void 0 : t.features.includes("VERIFIED")) && !(null == t ? void 0 : t.features.includes("PARTNER"))) return null;
    let r = m.ZP.getGuildIconURL({
      id: t.id,
      icon: t.icon,
      size: 32
    });
    return (0, s.jsxs)("div", {
      className: i()(I.column),
      children: [(0, s.jsx)(o.Text, {
        variant: "text-xs/semibold",
        children: x.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
      }), (0, s.jsxs)("div", {
        className: i()(I.row, I.gapMd),
        children: [(0, s.jsx)("img", {
          className: I.icon,
          src: r,
          alt: x.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
            guildName: t.name
          })
        }), (0, s.jsxs)("div", {
          className: i()(I.gapNone),
          children: [(0, s.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: t.name
          }), null != n && (0, s.jsx)(o.Text, {
            variant: "text-xxs/normal",
            children: x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: n
            })
          })]
        })]
      }), (0, s.jsx)(o.Button, {
        color: o.ButtonColors.PRIMARY,
        onClick: () => {
          c.Z.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: l,
            code: l.code,
            context: h.IlC.APP
          })
        },
        children: a ? x.Z.Messages.JOINED_GUILD : x.Z.Messages.JOIN_GUILD
      })]
    })
  };
l.Z = e => {
  let {
    websites: l
  } = e, n = null == l ? void 0 : l.find(e => {
    let {
      category: l
    } = e;
    return l === r.p.DISCORD
  }), [a, c] = t.useState();
  if (t.useEffect(() => {
      let e = async e => {
        let l = e.split("/").pop();
        if (null != l) {
          let e = await (0, d.Z)(l);
          !0 !== e.banned && c(e.invite)
        }
      };
      null != n && e(n.url)
    }, [n]), null == l || 0 === l.length) return null;
  let u = l.filter(e => {
    let {
      category: l
    } = e;
    return g.includes(l)
  }).sort((e, l) => e.category - l.category);
  return (0, s.jsxs)("div", {
    className: i()(I.column),
    children: [null != a && (0, s.jsx)(E, {
      invite: a
    }), (0, s.jsxs)("div", {
      className: i()(I.column, I.gapSm),
      children: [(0, s.jsx)(o.Text, {
        variant: "text-xs/semibold",
        children: x.Z.Messages.GAME_PROFILE_LINKS
      }), (0, s.jsx)("div", {
        className: I.row,
        children: u.map(e => {
          let {
            category: l,
            url: n
          } = e, t = null;
          switch (l) {
            case r.p.OFFICIAL:
              t = (0, s.jsx)(o.GlobeEarthIcon, {});
              break;
            case r.p.TWITTER:
              t = (0, s.jsx)(o.XNeutralIcon, {});
              break;
            case r.p.YOUTUBE:
              t = (0, s.jsx)(o.YouTubeIcon, {})
          }
          return null != t ? (0, s.jsx)(o.Anchor, {
            href: n,
            target: "_blank",
            children: t
          }, n) : null
        })
      })]
    })]
  })
}