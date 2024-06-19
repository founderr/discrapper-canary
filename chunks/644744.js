t.d(s, {
  Z: function() {
    return N
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(481060),
  o = t(285952),
  c = t(490529),
  E = t(981631),
  d = t(689938),
  _ = t(5998);
let T = {
    [E.gkr.HOUSE_1]: _.membershipDialogHouse1,
    [E.gkr.HOUSE_2]: _.membershipDialogHouse2,
    [E.gkr.HOUSE_3]: _.membershipDialogHouse3
  },
  S = {
    [E.gkr.HOUSE_1]: _.houseLogoHouse1,
    [E.gkr.HOUSE_2]: _.__invalid_houseLogoHouse2,
    [E.gkr.HOUSE_3]: _.__invalid_houseLogoHouse3
  },
  u = {
    [E.gkr.HOUSE_1]: t(246300),
    [E.gkr.HOUSE_2]: t(797148),
    [E.gkr.HOUSE_3]: t(374347)
  },
  I = e => ({
    [E.gkr.HOUSE_1]: d.Z.Messages.HYPESQUAD_DESCRIPTION_HOUSE_1,
    [E.gkr.HOUSE_2]: d.Z.Messages.HYPESQUAD_DESCRIPTION_HOUSE_2,
    [E.gkr.HOUSE_3]: d.Z.Messages.HYPESQUAD_DESCRIPTION_HOUSE_3
  })[e];
class N extends i.Component {
  render() {
    let {
      houseMembership: e,
      isClaimed: s,
      isVerified: t
    } = this.props;
    if (!s || !t) return null;
    if (null != e) {
      let s = d.Z.Messages.HYPESQUAD_MEMBERSHIP_HEADING.format({
        houseName: (0, c.X8)(e)
      });
      return (0, n.jsx)("div", {
        className: l()(_.membershipDialog, T[e]),
        children: (0, n.jsxs)("div", {
          className: _.membershipDialogContent,
          children: [(0, n.jsxs)(o.Z, {
            children: [(0, n.jsxs)(o.Z.Child, {
              grow: 1,
              shrink: 1,
              children: [(0, n.jsx)(r.Text, {
                className: _.membershipDialogHeading,
                variant: "text-xs/bold",
                children: d.Z.Messages.HYPESQUAD_YOUR_HOUSE
              }), (0, n.jsx)(r.Heading, {
                className: _.membershipDialogHouseName,
                variant: "heading-sm/semibold",
                children: s
              }), (0, n.jsx)(r.Text, {
                className: _.membershipDialogHouseDescription,
                variant: "text-md/normal",
                children: I(e)
              })]
            }), (0, n.jsx)(o.Z.Child, {
              className: _.houseLogoWrapper,
              grow: 0,
              shrink: 0,
              wrap: !0,
              children: (0, n.jsx)("img", {
                className: l()(_.houseLogo, S[e]),
                src: u[e],
                alt: s
              })
            })]
          }), (0, n.jsxs)(r.Text, {
            className: _.membershipDialogSwitchHouses,
            variant: "text-md/normal",
            children: [d.Z.Messages.HYPESQUAD_SWITCH_HOUSES_PROMPT, (0, n.jsx)(r.Clickable, {
              className: _.membershipDialogSwitchHousesAction,
              onClick: this.handleJoinHypeSquadClick,
              tag: "span",
              children: d.Z.Messages.HYPESQUAD_SWITCH_HOUSES_ACTION
            })]
          })]
        })
      })
    }
    return (0, n.jsxs)("div", {
      className: _.joinCTAWrapper,
      children: [(0, n.jsxs)(o.Z, {
        className: _.joinCTA,
        align: o.Z.Align.CENTER,
        justify: o.Z.Justify.CENTER,
        direction: o.Z.Direction.HORIZONTAL,
        children: [(0, n.jsx)(o.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, n.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: d.Z.Messages.HYPESQUAD_READY_TO_REP
          })
        }), (0, n.jsx)(o.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, n.jsx)(r.Button, {
            onClick: this.handleJoinHypeSquadClick,
            children: d.Z.Messages.HYPESQUAD_JOIN
          })
        })]
      }), (0, n.jsx)(r.Text, {
        className: _.newsletterWarning,
        variant: "text-sm/normal",
        children: d.Z.Messages.HYPESQUAD_NEWSLETTER_WARNING
      })]
    })
  }
  constructor(...e) {
    var s, i, a;
    super(...e), s = this, i = "handleJoinHypeSquadClick", a = () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("83264")]).then(t.bind(t, 711184));
        return s => (0, n.jsx)(e, {
          ...s
        })
      })
    }, i in s ? Object.defineProperty(s, i, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : s[i] = a
  }
}