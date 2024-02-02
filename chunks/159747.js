"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
}), a("222007"), a("424973");
var n = a("37983"),
  i = a("884691"),
  l = a("759843"),
  s = a("446674"),
  r = a("77078"),
  u = a("450911"),
  o = a("685073"),
  d = a("819689"),
  c = a("812204"),
  f = a("685665"),
  p = a("428958"),
  m = a("843962"),
  h = a("679653"),
  I = a("305961"),
  E = a("705955"),
  v = a("27618"),
  C = a("697218"),
  A = a("466857"),
  g = a("578706"),
  T = a("83900"),
  R = a("599110"),
  y = a("315102"),
  x = a("306160"),
  N = a("354023"),
  _ = a("159885"),
  S = a("158998"),
  L = a("969380"),
  w = a("49111"),
  D = a("91366"),
  j = a("782340"),
  O = a("764786");

function M(e) {
  let {
    activityItem: t,
    analyticsLocations: a,
    ...m
  } = e, h = (0, s.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
    analyticsLocations: I
  } = (0, f.default)(a);
  (0, p.default)({
    type: l.ImpressionTypes.MODAL,
    name: l.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
    properties: {
      application_id: t.application.id,
      location_stack: I
    }
  });
  let [v, g] = i.useState(""), [T, y] = i.useState([]), x = (0, L.default)({
    applicationId: t.application.id,
    size: 256
  }), _ = "".concat(window.location.origin).concat(w.Routes.ACTIVITY_DETAILS(t.application.id)), S = (0, s.useStateFromStoresArray)([E.default], () => E.default.getInviteSuggestionRows());
  i.useEffect(() => {
    (0, o.loadInviteSuggestions)({
      omitUserIds: new Set,
      applicationId: t.application.id,
      inviteTargetType: D.InviteTargetTypes.EMBEDDED_APPLICATION
    })
  }, [t.application.id]), i.useEffect(() => (0, o.searchInviteSuggestions)(v), [v]);
  let M = i.useCallback(async () => {
    let e = 0,
      a = 0,
      n = 0,
      i = E.default.getInviteSuggestionRows().filter(e => T.includes(e.item.id)).map(t => (function(t, i) {
        switch (t.type) {
          case N.RowTypes.DM:
          case N.RowTypes.FRIEND:
            e++;
            break;
          case N.RowTypes.GROUP_DM:
            a++;
            break;
          case N.RowTypes.CHANNEL:
            n++
        }
        return t.type === N.RowTypes.GROUP_DM || t.type === N.RowTypes.CHANNEL ? d.default.sendActivityBookmark(t.item.id, i, c.default.ACTIVITY_DETAIL_PAGE, null) : t.type === N.RowTypes.DM || t.type === N.RowTypes.FRIEND ? u.default.ensurePrivateChannel(t.item.id).then(e => d.default.sendActivityBookmark(e, _, c.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
      })(t, _));
    await i, R.default.track(w.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
      user_id: null == h ? void 0 : h.id,
      application_id: t.application.id,
      n_users: e,
      n_gdms: a,
      n_channels: n
    }), m.onClose()
  }, [t, T, m, _, h]);
  return (0, n.jsxs)(r.ModalRoot, {
    ...m,
    className: O.modalRoot,
    children: [(0, n.jsxs)(r.ModalHeader, {
      className: O.header,
      children: [(0, n.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: j.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
          activityName: t.application.name
        })
      }), (0, n.jsx)(r.ModalCloseButton, {
        onClick: m.onClose
      })]
    }), (0, n.jsxs)(r.ModalContent, {
      className: O.modalContent,
      children: [(0, n.jsx)(A.default, {
        className: O.searchBar,
        placeholder: j.default.Messages.SEARCH,
        label: j.default.Messages.SEARCH,
        searchTerm: v,
        onChange: e => g(e),
        onClear: () => g("")
      }), S.map((e, t) => (0, n.jsxs)(i.Fragment, {
        children: [0 === t ? null : (0, n.jsx)("div", {
          className: O.rowDivider
        }), (0, n.jsx)(F, {
          row: e,
          onClick: () => {
            let t = [...T];
            t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), y(t)
          },
          checked: T.includes(e.item.id)
        })]
      }, e.item.id))]
    }), (0, n.jsxs)(r.ModalFooter, {
      className: O.footer,
      children: [(0, n.jsx)("div", {
        className: O.activityInfoOuterContainer,
        children: (0, n.jsxs)("div", {
          className: O.activityInfoInnerContainer,
          children: [(0, n.jsx)("img", {
            src: x.url,
            className: O.activityInfoImage,
            alt: t.application.name
          }), (0, n.jsxs)("div", {
            className: O.activityInfoText,
            children: [(0, n.jsx)(r.Text, {
              variant: "text-md/semibold",
              className: O.ellipsis,
              children: t.application.name
            }), (0, n.jsx)(r.Text, {
              variant: "text-sm/medium",
              className: O.ellipsis,
              children: t.application.description
            }), (0, n.jsx)(r.Text, {
              variant: "text-xs/medium",
              className: O.ellipsis,
              children: (0, n.jsx)(r.Anchor, {
                href: _,
                children: _
              })
            })]
          })]
        })
      }), (0, n.jsx)("div", {
        className: O.footerDivider
      }), (0, n.jsxs)("div", {
        className: O.copySendBar,
        children: [(0, n.jsx)(U, {
          link: _,
          applicationId: t.application.id
        }), (0, n.jsx)(r.Button, {
          onClick: M,
          disabled: T.length <= 0,
          children: j.default.Messages.SEND
        })]
      })]
    })]
  })
}

function F(e) {
  let {
    row: t,
    onClick: a,
    checked: i
  } = e, l = null, s = null, u = null;
  switch (t.type) {
    case N.RowTypes.DM:
    case N.RowTypes.FRIEND:
      l = (0, n.jsx)(r.Avatar, {
        size: r.AvatarSizes.SIZE_40,
        src: t.item.getAvatarURL(null, 128, !1),
        "aria-label": t.item.username
      }), s = S.default.getName(t.item), u = S.default.getUserTag(t.item);
      break;
    case N.RowTypes.GROUP_DM: {
      let e = (0, m.getChannelIconURL)(t.item),
        a = (0, h.computeChannelName)(t.item, C.default, v.default);
      l = (0, n.jsx)(r.Avatar, {
        src: e,
        "aria-label": a,
        size: r.AvatarSizes.SIZE_40
      }), s = (0, h.computeChannelName)(t.item, C.default, v.default);
      break
    }
    case N.RowTypes.CHANNEL: {
      let e = t.item,
        a = I.default.getGuild(e.guild_id);
      if (null == a) return null;
      if (s = "#".concat((0, h.computeChannelName)(e, C.default, v.default)), u = a.name, null != a.icon) {
        let t = y.default.getGuildIconURL({
          id: e.guild_id,
          icon: a.icon,
          size: 40
        });
        l = (0, n.jsx)(r.Avatar, {
          src: t,
          "aria-label": s,
          size: r.AvatarSizes.SIZE_40
        })
      } else {
        let e = (0, _.getAcronym)(a.name);
        l = (0, n.jsx)("div", {
          className: O.acronym,
          "aria-hidden": !0,
          children: e
        })
      }
    }
  }
  return (0, n.jsxs)(r.Clickable, {
    onClick: a,
    className: O.rowContainer,
    children: [(0, n.jsxs)("div", {
      className: O.rowLeft,
      children: [(0, n.jsx)("div", {
        className: O.rowAvatar,
        children: l
      }), (0, n.jsxs)("div", {
        className: O.rowNameContainer,
        children: [(0, n.jsx)(r.Text, {
          variant: "text-md/semibold",
          className: O.rowName,
          children: s
        }), (0, n.jsx)(r.Text, {
          variant: "text-xs/medium",
          className: O.rowSubName,
          children: u
        })]
      })]
    }), (0, n.jsx)(r.Checkbox, {
      value: i,
      type: r.Checkbox.Types.INVERTED,
      displayOnly: !0,
      className: O.rowRight
    })]
  })
}

function U(e) {
  let {
    applicationId: t,
    link: a
  } = e, l = (0, s.useStateFromStores)([C.default], () => C.default.getCurrentUser()), [u, o] = i.useState(!1);
  return i.useEffect(() => {
    let e;
    return u && (e = setTimeout(() => {
      o(!1)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [u]), (0, n.jsxs)(r.Button, {
    look: r.Button.Looks.LINK,
    color: r.Button.Colors.LINK,
    onClick: function() {
      R.default.track(w.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
        user_id: null == l ? void 0 : l.id,
        application_id: t
      }), (0, x.copy)(a), o(!0)
    },
    innerClassName: O.copyButton,
    children: [u ? (0, n.jsx)(g.default, {}) : (0, n.jsx)(T.default, {}), u ? j.default.Messages.COPIED : j.default.Messages.COPY_LINK]
  })
}