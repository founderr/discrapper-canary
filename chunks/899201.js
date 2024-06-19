a.r(t), a.d(t, {
  default: function() {
    return V
  }
}), a(47120), a(653041);
var s = a(735250),
  i = a(470079),
  n = a(120356),
  l = a.n(n),
  r = a(218887),
  o = a.n(r),
  d = a(990547),
  c = a(442837),
  u = a(481060),
  m = a(493683),
  E = a(247272),
  I = a(166459),
  f = a(966390),
  g = a(476326),
  h = a(213609),
  S = a(835473),
  p = a(43267),
  C = a(933557),
  T = a(957730),
  _ = a(592125),
  N = a(703558),
  M = a(430824),
  Z = a(751771),
  x = a(496675),
  A = a(699516),
  y = a(117530),
  v = a(594174),
  D = a(626135),
  b = a(768581),
  w = a(971130),
  R = a(358085),
  j = a(624138),
  P = a(591759),
  O = a(51144),
  k = a(998502),
  U = a(317381),
  L = a(964517),
  B = a(981631),
  G = a(245335),
  F = a(689938),
  H = a(245917);
async function z(e) {
  return e.type === w.bm.DM || e.type === w.bm.FRIEND ? await m.Z.ensurePrivateChannel(e.item.id) : e.item.id
}

function V(e) {
  let {
    applicationId: t,
    mediaUrl: a,
    channelId: n,
    onClose: l,
    transitionState: r,
    ...m
  } = e, p = (0, c.e7)([U.ZP], () => U.ZP.getSelfEmbeddedActivityForChannel(n));
  (0, h.Z)({
    type: d.ImpressionTypes.MODAL,
    name: d.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
    properties: {
      application_id: t,
      activity_session_id: (0, L.Z)(p)
    }
  });
  let [C] = (0, S.Z)([t]), M = (0, c.e7)([v.default], () => v.default.getCurrentUser()), [A, b] = i.useState(""), [R, j] = i.useState([]), [O, k] = i.useState(null), [V, Y] = i.useState(null);
  i.useEffect(() => {
    (async () => {
      let e = P.Z.toURLSafe(a);
      if (null == e) return;
      let t = o().basename(e.pathname),
        s = await fetch(a),
        i = new File([await s.arrayBuffer()], t);
      k(i);
      let n = new FileReader;
      n.onload = () => {
        var e;
        return Y(null == n ? void 0 : null === (e = n.result) || void 0 === e ? void 0 : e.toString())
      }, n.readAsDataURL(i)
    })()
  }, [a, k]);
  let K = (0, c.Wu)([Z.Z, x.Z], () => Z.Z.getInviteSuggestionRows().filter(e => e.type === w.bm.FRIEND || e.type === w.bm.DM || x.Z.can(B.Plq.ATTACH_FILES, e.item)));
  i.useEffect(() => {
    (0, E.x)({
      omitUserIds: new Set,
      applicationId: t,
      inviteTargetType: G.Iq.EMBEDDED_APPLICATION
    })
  }, [t]), i.useEffect(() => (0, E.C)(A), [A]);
  let X = i.useCallback(async () => {
    await Promise.all(R.map(async e => {
      let t = K.find(t => t.item.id === e);
      if (null != t) {
        let e = await z(t);
        I.Z.clearAll(e, N.d.ChannelMessage)
      }
    }))
  }, [R, K]);
  i.useEffect(() => {
    r === u.ModalTransitionState.EXITING && X()
  }, [X, r]);
  let Q = i.useCallback(async () => {
      await X(), l()
    }, [l, X]),
    J = i.useCallback(async () => {
      let e = 0,
        a = 0,
        s = 0;
      async function i(i) {
        switch (i.type) {
          case w.bm.DM:
          case w.bm.FRIEND:
            e++;
            break;
          case w.bm.GROUP_DM:
            a++;
            break;
          case w.bm.CHANNEL:
            s++
        }
        let n = await z(i),
          l = y.Z.getUploads(n, N.d.ChannelMessage),
          r = _.Z.getChannel(n);
        f.Z.uploadFiles({
          channelId: n,
          uploads: l,
          parsedMessage: null != C ? T.ZP.parse(r, F.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
            applicationName: "**".concat(C.name, "**")
          })) : void 0,
          draftType: N.d.ChannelMessage,
          options: {
            applicationId: t
          }
        }), I.Z.clearAll(n, N.d.ChannelMessage)
      }
      let n = Z.Z.getInviteSuggestionRows().filter(e => R.includes(e.item.id)).map(e => i(e));
      D.default.track(B.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
        user_id: null == M ? void 0 : M.id,
        application_id: t,
        activity_session_id: (0, L.Z)(p),
        n_users: e,
        n_gdms: a,
        n_channels: s
      });
      try {
        await Promise.all(n), null != C && (0, u.showToast)((0, u.createToast)(F.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
          applicationName: C.name
        }), u.ToastType.SUCCESS))
      } catch (e) {
        throw (0, u.showToast)((0, u.createToast)(F.Z.Messages.UPLOAD_ERROR_TITLE, u.ToastType.FAILURE)), e
      }
      Q()
    }, [p, C, t, R, Q, M]),
    $ = e => {
      let t = async () => {
        let t = await z(e),
          a = [...R];
        if (a.includes(e.item.id)) I.Z.clearAll(t, N.d.ChannelMessage), a = a.filter(t => t !== e.item.id);
        else {
          if (a.length >= 10) return;
          null != O && (I.Z.addFile({
            file: {
              file: O,
              platform: g.ow.WEB
            },
            channelId: t,
            draftType: N.d.ChannelMessage
          }), a.push(e.item.id))
        }
        j(a)
      };
      return () => t()
    };
  return null == V ? (0, s.jsx)(u.Spinner, {}) : (0, s.jsxs)(u.ModalRoot, {
    transitionState: r,
    ...m,
    className: H.modalRoot,
    children: [(0, s.jsxs)(u.ModalHeader, {
      className: H.header,
      children: [(0, s.jsxs)("div", {
        className: H.headerTitle,
        children: [(0, s.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          children: F.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_HEADING
        }), (0, s.jsx)(u.ModalCloseButton, {
          onClick: Q
        })]
      }), (0, s.jsx)("div", {
        children: (0, s.jsx)("img", {
          alt: a,
          className: H.img,
          src: V
        })
      })]
    }), (0, s.jsxs)(u.ModalContent, {
      className: H.modalContent,
      children: [(0, s.jsx)(u.SearchBox, {
        className: H.searchBar,
        placeholder: F.Z.Messages.SEARCH,
        label: F.Z.Messages.SEARCH,
        searchTerm: A,
        onChange: e => b(e),
        onClear: () => b("")
      }), K.map((e, t) => (0, s.jsxs)(i.Fragment, {
        children: [0 === t ? null : (0, s.jsx)("div", {
          className: H.rowDivider
        }), (0, s.jsx)(q, {
          row: e,
          onClick: $(e),
          checked: R.includes(e.item.id),
          disabled: !R.includes(e.item.id) && R.length >= 10
        })]
      }, e.item.id))]
    }), (0, s.jsx)(u.ModalFooter, {
      className: H.footer,
      children: (0, s.jsxs)("div", {
        className: H.copySendBar,
        children: [(0, s.jsx)(W, {
          applicationId: t,
          activitySessionId: (0, L.Z)(p),
          mediaUrl: a
        }), R.length >= 10 ? (0, s.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: F.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_LIMIT_WARNING.format({
            maxShares: 10
          })
        }) : null, (0, s.jsx)(u.Button, {
          onClick: J,
          disabled: R.length <= 0,
          children: F.Z.Messages.SEND
        })]
      })
    })]
  })
}

function q(e) {
  let {
    row: t,
    onClick: a,
    checked: i,
    disabled: n
  } = e, r = null, o = null, d = null;
  switch (t.type) {
    case w.bm.DM:
    case w.bm.FRIEND:
      r = (0, s.jsx)(u.Avatar, {
        size: u.AvatarSizes.SIZE_40,
        src: t.item.getAvatarURL(null, 128, !1),
        "aria-label": t.item.username
      }), o = O.ZP.getName(t.item), d = O.ZP.getUserTag(t.item);
      break;
    case w.bm.GROUP_DM: {
      let e = (0, p.x)(t.item),
        a = (0, C.F6)(t.item, v.default, A.Z);
      r = (0, s.jsx)(u.Avatar, {
        src: e,
        "aria-label": a,
        size: u.AvatarSizes.SIZE_40
      }), o = (0, C.F6)(t.item, v.default, A.Z);
      break
    }
    case w.bm.CHANNEL: {
      let e = t.item,
        a = M.Z.getGuild(e.guild_id);
      if (null == a) return null;
      if (o = "#".concat((0, C.F6)(e, v.default, A.Z)), d = a.name, null != a.icon) {
        let t = b.ZP.getGuildIconURL({
          id: e.guild_id,
          icon: a.icon,
          size: 40
        });
        r = (0, s.jsx)(u.Avatar, {
          src: t,
          "aria-label": o,
          size: u.AvatarSizes.SIZE_40
        })
      } else {
        let e = (0, j.Zg)(a.name);
        r = (0, s.jsx)("div", {
          className: H.acronym,
          "aria-hidden": !0,
          children: (0, s.jsx)(u.Text, {
            variant: "text-md/semibold",
            children: e
          })
        })
      }
    }
  }
  return (0, s.jsxs)(u.Clickable, {
    onClick: a,
    className: l()(H.rowContainer, {
      [H.disabled]: n
    }),
    children: [(0, s.jsxs)("div", {
      className: H.rowLeft,
      children: [(0, s.jsx)("div", {
        className: H.rowAvatar,
        children: r
      }), (0, s.jsxs)("div", {
        className: H.rowNameContainer,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-md/semibold",
          className: l()(H.rowName, {
            [H.disabled]: n
          }),
          children: o
        }), (0, s.jsx)(u.Text, {
          variant: "text-xs/medium",
          className: l()(H.rowSubName, {
            [H.disabled]: n
          }),
          children: d
        })]
      })]
    }), (0, s.jsx)(u.Checkbox, {
      disabled: n,
      value: i,
      type: u.Checkbox.Types.INVERTED,
      displayOnly: !0,
      className: H.rowRight
    })]
  })
}

function W(e) {
  let {
    applicationId: t,
    mediaUrl: a,
    activitySessionId: n
  } = e, [l, r] = i.useState(!1), o = (0, c.e7)([v.default], () => v.default.getCurrentUser());
  async function d() {
    D.default.track(B.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
      user_id: null == o ? void 0 : o.id,
      application_id: t,
      activity_session_id: n
    }), await k.ZP.copyImage(a), r(!0)
  }
  return (i.useEffect(() => {
    let e;
    return l && (e = setTimeout(() => {
      r(!1)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [l]), R.isPlatformEmbedded && k.ZP.canCopyImage(a)) ? (0, s.jsxs)(u.Button, {
    look: u.Button.Looks.LINK,
    color: u.Button.Colors.LINK,
    onClick: d,
    innerClassName: H.copyButton,
    children: [l ? (0, s.jsx)(u.CircleCheckIcon, {
      size: "md",
      color: "currentColor"
    }) : (0, s.jsx)(u.CopyIcon, {
      size: "xs",
      color: "currentColor"
    }), l ? F.Z.Messages.COPIED : F.Z.Messages.COPY_IMAGE_MENU_ITEM]
  }) : (0, s.jsx)("div", {})
}