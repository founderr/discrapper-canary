"use strict";
a.r(t), a.d(t, {
  default: function() {
    return k
  }
}), a("47120"), a("653041");
var i = a("735250"),
  s = a("470079"),
  n = a("990547"),
  l = a("442837"),
  o = a("481060"),
  r = a("493683"),
  d = a("247272"),
  c = a("904245"),
  u = a("100527"),
  f = a("906732"),
  m = a("213609"),
  p = a("43267"),
  I = a("933557"),
  g = a("430824"),
  h = a("751771"),
  T = a("699516"),
  S = a("594174"),
  N = a("441674"),
  y = a("757698"),
  v = a("626135"),
  C = a("768581"),
  A = a("572004"),
  E = a("971130"),
  x = a("624138"),
  _ = a("51144"),
  w = a("778569"),
  R = a("981631"),
  D = a("245335"),
  j = a("689938"),
  M = a("926681");

function k(e) {
  let {
    activityItem: t,
    analyticsLocations: a,
    ...p
  } = e, I = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentUser()), {
    analyticsLocations: g
  } = (0, f.default)(a);
  (0, m.default)({
    type: n.ImpressionTypes.MODAL,
    name: n.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
    properties: {
      application_id: t.application.id,
      location_stack: g
    }
  });
  let [T, N] = s.useState(""), [y, C] = s.useState([]), A = (0, w.default)({
    applicationId: t.application.id,
    size: 256
  }), x = "".concat(window.location.origin).concat(R.Routes.ACTIVITY_DETAILS(t.application.id)), _ = (0, l.useStateFromStoresArray)([h.default], () => h.default.getInviteSuggestionRows());
  s.useEffect(() => {
    (0, d.loadInviteSuggestions)({
      omitUserIds: new Set,
      applicationId: t.application.id,
      inviteTargetType: D.InviteTargetTypes.EMBEDDED_APPLICATION
    })
  }, [t.application.id]), s.useEffect(() => (0, d.searchInviteSuggestions)(T), [T]);
  let k = s.useCallback(async () => {
    let e = 0,
      a = 0,
      i = 0,
      s = h.default.getInviteSuggestionRows().filter(e => y.includes(e.item.id)).map(t => (function(t, s) {
        switch (t.type) {
          case E.RowTypes.DM:
          case E.RowTypes.FRIEND:
            e++;
            break;
          case E.RowTypes.GROUP_DM:
            a++;
            break;
          case E.RowTypes.CHANNEL:
            i++
        }
        return t.type === E.RowTypes.GROUP_DM || t.type === E.RowTypes.CHANNEL ? c.default.sendActivityBookmark(t.item.id, s, u.default.ACTIVITY_DETAIL_PAGE, null) : t.type === E.RowTypes.DM || t.type === E.RowTypes.FRIEND ? r.default.ensurePrivateChannel(t.item.id).then(e => c.default.sendActivityBookmark(e, x, u.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
      })(t, x));
    await s, v.default.track(R.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
      user_id: null == I ? void 0 : I.id,
      application_id: t.application.id,
      n_users: e,
      n_gdms: a,
      n_channels: i
    }), p.onClose()
  }, [t, y, p, x, I]);
  return (0, i.jsxs)(o.ModalRoot, {
    ...p,
    className: M.modalRoot,
    children: [(0, i.jsxs)(o.ModalHeader, {
      className: M.header,
      children: [(0, i.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: j.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
          activityName: t.application.name
        })
      }), (0, i.jsx)(o.ModalCloseButton, {
        onClick: p.onClose
      })]
    }), (0, i.jsxs)(o.ModalContent, {
      className: M.modalContent,
      children: [(0, i.jsx)(o.SearchBox, {
        className: M.searchBar,
        placeholder: j.default.Messages.SEARCH,
        label: j.default.Messages.SEARCH,
        searchTerm: T,
        onChange: e => N(e),
        onClear: () => N("")
      }), _.map((e, t) => (0, i.jsxs)(s.Fragment, {
        children: [0 === t ? null : (0, i.jsx)("div", {
          className: M.rowDivider
        }), (0, i.jsx)(O, {
          row: e,
          onClick: () => {
            let t = [...y];
            t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), C(t)
          },
          checked: y.includes(e.item.id)
        })]
      }, e.item.id))]
    }), (0, i.jsxs)(o.ModalFooter, {
      className: M.footer,
      children: [(0, i.jsx)("div", {
        className: M.activityInfoOuterContainer,
        children: (0, i.jsxs)("div", {
          className: M.activityInfoInnerContainer,
          children: [(0, i.jsx)("img", {
            src: A.url,
            className: M.activityInfoImage,
            alt: t.application.name
          }), (0, i.jsxs)("div", {
            className: M.activityInfoText,
            children: [(0, i.jsx)(o.Text, {
              variant: "text-md/semibold",
              className: M.ellipsis,
              children: t.application.name
            }), (0, i.jsx)(o.Text, {
              variant: "text-sm/medium",
              className: M.ellipsis,
              children: t.application.description
            }), (0, i.jsx)(o.Text, {
              variant: "text-xs/medium",
              className: M.ellipsis,
              children: (0, i.jsx)(o.Anchor, {
                href: x,
                children: x
              })
            })]
          })]
        })
      }), (0, i.jsx)("div", {
        className: M.footerDivider
      }), (0, i.jsxs)("div", {
        className: M.copySendBar,
        children: [(0, i.jsx)(L, {
          link: x,
          applicationId: t.application.id
        }), (0, i.jsx)(o.Button, {
          onClick: k,
          disabled: y.length <= 0,
          children: j.default.Messages.SEND
        })]
      })]
    })]
  })
}

function O(e) {
  let {
    row: t,
    onClick: a,
    checked: s
  } = e, n = null, l = null, r = null;
  switch (t.type) {
    case E.RowTypes.DM:
    case E.RowTypes.FRIEND:
      n = (0, i.jsx)(o.Avatar, {
        size: o.AvatarSizes.SIZE_40,
        src: t.item.getAvatarURL(null, 128, !1),
        "aria-label": t.item.username
      }), l = _.default.getName(t.item), r = _.default.getUserTag(t.item);
      break;
    case E.RowTypes.GROUP_DM: {
      let e = (0, p.getChannelIconURL)(t.item),
        a = (0, I.computeChannelName)(t.item, S.default, T.default);
      n = (0, i.jsx)(o.Avatar, {
        src: e,
        "aria-label": a,
        size: o.AvatarSizes.SIZE_40
      }), l = (0, I.computeChannelName)(t.item, S.default, T.default);
      break
    }
    case E.RowTypes.CHANNEL: {
      let e = t.item,
        a = g.default.getGuild(e.guild_id);
      if (null == a) return null;
      if (l = "#".concat((0, I.computeChannelName)(e, S.default, T.default)), r = a.name, null != a.icon) {
        let t = C.default.getGuildIconURL({
          id: e.guild_id,
          icon: a.icon,
          size: 40
        });
        n = (0, i.jsx)(o.Avatar, {
          src: t,
          "aria-label": l,
          size: o.AvatarSizes.SIZE_40
        })
      } else {
        let e = (0, x.getAcronym)(a.name);
        n = (0, i.jsx)("div", {
          className: M.acronym,
          "aria-hidden": !0,
          children: e
        })
      }
    }
  }
  return (0, i.jsxs)(o.Clickable, {
    onClick: a,
    className: M.rowContainer,
    children: [(0, i.jsxs)("div", {
      className: M.rowLeft,
      children: [(0, i.jsx)("div", {
        className: M.rowAvatar,
        children: n
      }), (0, i.jsxs)("div", {
        className: M.rowNameContainer,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-md/semibold",
          className: M.rowName,
          children: l
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/medium",
          className: M.rowSubName,
          children: r
        })]
      })]
    }), (0, i.jsx)(o.Checkbox, {
      value: s,
      type: o.Checkbox.Types.INVERTED,
      displayOnly: !0,
      className: M.rowRight
    })]
  })
}

function L(e) {
  let {
    applicationId: t,
    link: a
  } = e, n = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentUser()), [r, d] = s.useState(!1);
  return s.useEffect(() => {
    let e;
    return r && (e = setTimeout(() => {
      d(!1)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [r]), (0, i.jsxs)(o.Button, {
    look: o.Button.Looks.LINK,
    color: o.Button.Colors.LINK,
    onClick: function() {
      v.default.track(R.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
        user_id: null == n ? void 0 : n.id,
        application_id: t
      }), (0, A.copy)(a), d(!0)
    },
    innerClassName: M.copyButton,
    children: [r ? (0, i.jsx)(N.default, {}) : (0, i.jsx)(y.default, {}), r ? j.default.Messages.COPIED : j.default.Messages.COPY_LINK]
  })
}