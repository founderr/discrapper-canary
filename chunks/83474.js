"use strict";
n.r(t), n.d(t, {
  GuildDialog: function() {
    return j
  },
  GuildUnavilableDialog: function() {
    return R
  },
  default: function() {
    return b
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  d = n("442837"),
  u = n("692547"),
  r = n("780384"),
  o = n("481060"),
  c = n("410030"),
  h = n("134432"),
  f = n("703656"),
  g = n("314897"),
  m = n("271383"),
  T = n("940627"),
  _ = n("806519"),
  E = n("768581"),
  S = n("900849"),
  p = n("249842"),
  I = n("838367"),
  N = n("981631"),
  v = n("689938"),
  P = n("246551"),
  x = n("892561"),
  A = n("494536");

function O() {
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: P.splashPlaceholder
    }), (0, l.jsxs)("div", {
      className: i()(P.body, P.hasSplash),
      children: [(0, l.jsx)("div", {
        className: P.iconPlaceholder
      }), (0, l.jsx)("div", {
        className: P.__invalid_headerText,
        children: (0, l.jsx)("div", {
          className: P.namePlaceholder
        })
      }), (0, l.jsxs)("div", {
        className: P.memberInfo,
        children: [(0, l.jsx)("div", {
          className: P.memberCount,
          children: (0, l.jsx)("div", {
            className: P.memberInfoPlaceholder
          })
        }), (0, l.jsx)("div", {
          className: P.memberCount,
          children: (0, l.jsx)("div", {
            className: P.memberInfoPlaceholder
          })
        })]
      }), (0, l.jsx)("div", {
        className: P.viewButtonPlaceholder
      })]
    })]
  })
}

function R() {
  let e = (0, c.default)();
  return (0, l.jsx)(o.Dialog, {
    "aria-label": v.default.Messages.GUILD_UNAVAILABLE_HEADER,
    className: P.guildPopout,
    children: (0, l.jsxs)("div", {
      className: P.body,
      children: [(0, l.jsx)("img", {
        src: (0, r.isThemeDark)(e) ? x : A,
        className: P.unavailableIcon,
        width: 80,
        height: 80,
        alt: ""
      }), (0, l.jsx)(o.Heading, {
        className: P.unavailableHeader,
        variant: "heading-md/semibold",
        children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR
      })]
    })
  })
}

function j(e) {
  var t, n;
  let {
    guild: s,
    channelId: r,
    messageId: c
  } = e, {
    name: p,
    id: I,
    discoverySplash: x,
    icon: A,
    description: O,
    presenceCount: R,
    memberCount: j,
    emojis: b
  } = s, C = (0, d.useStateFromStores)([g.default], () => g.default.getId()), U = (0, d.useStateFromStores)([m.default], () => m.default.isMember(I, C), [I, C]), [y, D] = a.useState(!1), M = e => {
    if (e.stopPropagation(), U)(0, f.transitionToGuild)(I, r, c);
    else {
      let e = {
        page: N.AnalyticsPages.GUILD_CHANNEL,
        section: N.AnalyticsSections.GUILD_POPOUT,
        object: N.AnalyticsObjects.CARD
      };
      (0, S.startLurking)(I, e)
    }
    D(!0)
  }, L = E.default.getGuildDiscoverySplashURL({
    id: I,
    splash: x,
    size: 250 * (0, h.getDevicePixelRatio)()
  }), G = null !== (t = E.default.getGuildIconURL({
    id: I,
    icon: A,
    size: 80
  })) && void 0 !== t ? t : void 0, w = b, F = null;
  return null != w && w.length > 6 && null != b && (w = null !== (n = null == b ? void 0 : b.slice(Math.max((null == b ? void 0 : b.length) - 6, 0))) && void 0 !== n ? n : [], F = b.length - 6), (0, l.jsxs)(o.Dialog, {
    "aria-label": p,
    className: P.guildPopout,
    children: [null != L ? (0, l.jsx)("img", {
      src: L,
      alt: "",
      className: P.splashImage
    }) : null, (0, l.jsxs)("div", {
      className: i()(P.body, {
        [P.hasSplash]: null != L
      }),
      children: [(0, l.jsx)("div", {
        className: i()({
          [P.iconWithSplash]: null != L
        }),
        children: (0, l.jsx)(o.Clickable, {
          onClick: M,
          children: (0, l.jsx)(_.default, {
            mask: _.default.Masks.SQUIRCLE,
            width: 88,
            height: 88,
            children: (0, l.jsx)("div", {
              className: P.iconMask,
              children: (0, l.jsx)(_.default, {
                mask: _.default.Masks.SQUIRCLE,
                width: 80,
                height: 80,
                children: (0, l.jsx)("img", {
                  src: G,
                  alt: "",
                  className: P.avatar
                })
              })
            })
          })
        })
      }), null != p ? (0, l.jsxs)("div", {
        className: P.guildNameWrapper,
        children: [(0, l.jsx)(T.default, {
          className: P.badge,
          guild: s,
          tooltipPosition: "top",
          tooltipColor: o.Tooltip.Colors.PRIMARY,
          badgeColor: u.default.unsafe_rawColors.PRIMARY_500.css
        }), (0, l.jsx)(o.Text, {
          variant: "text-md/semibold",
          className: P.guildName,
          children: p
        })]
      }) : null, null != O ? (0, l.jsx)(o.Text, {
        color: "header-secondary",
        className: P.description,
        variant: "text-sm/normal",
        children: O
      }) : null, (0, l.jsxs)("div", {
        className: P.memberInfo,
        children: [null != R ? (0, l.jsxs)("div", {
          className: P.memberCount,
          children: [(0, l.jsx)("div", {
            className: P.dotOnline
          }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: P.memberText,
            children: v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
              membersOnline: R
            })
          })]
        }) : null, null != j ? (0, l.jsxs)("div", {
          className: P.memberCount,
          children: [(0, l.jsx)("div", {
            className: P.dotOffline
          }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: P.memberText,
            children: v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: j
            })
          })]
        }) : null]
      })]
    }), (0, l.jsxs)("div", {
      className: P.footer,
      children: [null != w && w.length > 0 ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: P.emojiHeader,
          color: "header-secondary",
          children: v.default.Messages.SERVER_EMOJI
        }), (0, l.jsxs)("div", {
          className: i()(P.emojiContainer, {
            [P.withCounter]: null != F
          }),
          children: [w.map(e => {
            let t = E.default.getEmojiURL({
              id: e.id,
              animated: !1,
              size: 24
            });
            return (0, l.jsx)(o.Tooltip, {
              text: ":".concat(e.name, ":"),
              children: e => (0, l.jsx)("img", {
                ...e,
                width: 24,
                height: 24,
                src: t,
                className: i()({
                  [P.emoji]: null == F
                }),
                alt: ""
              })
            }, e.id)
          }), null != F ? (0, l.jsx)(o.Heading, {
            variant: "heading-deprecated-12/semibold",
            className: P.emojiCounter,
            color: "header-secondary",
            children: "+".concat(F)
          }) : null]
        })]
      }) : null, (0, l.jsx)(o.Button, {
        look: o.Button.Looks.FILLED,
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.SMALL,
        onClick: M,
        submitting: y,
        autoFocus: !0,
        children: v.default.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON
      })]
    })]
  })
}

function b(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: s
  } = e, {
    loading: i,
    unavailable: u,
    guild: r
  } = (0, d.useStateFromStoresObject)([I.default], () => ({
    guild: I.default.getGuild(t),
    loading: I.default.isFetchingGuild(t),
    unavailable: I.default.hasFetchFailed(t)
  }), [t]);
  return (a.useEffect(() => {
    null == r && !i && !u && (0, p.fetchGuildForPopout)(t)
  }, [r, t, i, u]), i) ? (0, l.jsx)(o.Dialog, {
    "aria-label": v.default.Messages.LOADING,
    className: P.guildPopout,
    children: (0, l.jsx)(O, {})
  }) : null == r || u ? (0, l.jsx)(R, {}) : (0, l.jsx)(j, {
    guild: r,
    channelId: n,
    messageId: s
  })
}