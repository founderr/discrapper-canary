n.d(t, {
  Z: function() {
    return y
  }
}), n(47120);
var l, i, s = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(512722),
  u = n.n(c),
  d = n(442837),
  h = n(481060),
  m = n(239091),
  p = n(99690),
  E = n(58540),
  g = n(484459),
  f = n(103575),
  C = n(271383),
  _ = n(496675),
  I = n(158776),
  x = n(502568),
  T = n(471253),
  N = n(431328),
  Z = n(145834),
  S = n(590415),
  v = n(614173),
  A = n(618896),
  M = n(231338),
  R = n(689938),
  j = n(944759);
let L = a.memo(function(e) {
    let {
      toggleRequestToSpeakSidebar: t,
      chatOpen: n
    } = e, l = (0, s.jsx)(x.ZP.Icon, {
      icon: h.CloseSmallIcon,
      tooltip: R.Z.Messages.CLOSE,
      onClick: t
    });
    return (0, s.jsxs)(x.ZP, {
      toolbar: l,
      className: o()(j.headerContainer, {
        [j.chatOpen]: n
      }),
      children: [(0, s.jsx)(x.ZP.Icon, {
        icon: h.HandRequestSpeakIcon,
        disabled: !0,
        "aria-label": R.Z.Messages.REQUEST_TO_SPEAK_AREA_TITLE
      }), (0, s.jsx)(x.ZP.Title, {
        children: R.Z.Messages.REQUEST_TO_SPEAK_AREA_TITLE
      })]
    })
  }),
  O = a.memo(function(e) {
    let {
      channel: t,
      participant: l,
      tempDisableOnInit: i = !1
    } = e, [r, c] = a.useState(i);
    a.useEffect(() => {
      if (!r) return;
      let e = setTimeout(() => c(!1), 1e3);
      return () => clearTimeout(e)
    }, []);
    let _ = t.getGuildId();
    u()(null != _, "Channel cannot be guildless");
    let {
      isMobile: x,
      status: N
    } = (0, d.cj)([I.Z], () => ({
      isMobile: I.Z.isMobileOnline(l.user.id),
      status: I.Z.getStatus(l.user.id, _)
    })), v = (0, d.e7)([C.ZP], () => C.ZP.getMember(_, l.user.id)), A = a.useMemo(() => ({
      [_]: [l.user.id]
    }), [_, l.user.id]);
    (0, E.$)(A);
    let M = l.rtsState === S.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;

    function L() {
      (0, T.DT)(t, l.user.id, !1)
    }

    function O() {
      (0, T.DT)(t, l.user.id, !0)
    }
    let P = e => {
      (0, m.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("7717")]).then(n.bind(n, 757387));
        return n => (0, s.jsx)(e, {
          ...n,
          user: l.user,
          guildId: _,
          channel: t,
          showMediaItems: !0
        })
      })
    };
    return (0, s.jsxs)("div", {
      className: j.participantRowContainer,
      children: [(0, s.jsx)(h.Popout, {
        preload: () => (0, g.Z)(l.user.id, l.user.getAvatarURL(t.guild_id, 80), {
          guildId: t.guild_id,
          channelId: t.id
        }),
        renderPopout: e => (0, s.jsx)(f.Z, {
          ...e,
          location: "RequestToSpeakSidebar",
          userId: l.user.id,
          guildId: _,
          channelId: t.id
        }),
        position: "left",
        spacing: 16,
        children: e => {
          var t;
          return (0, s.jsxs)(h.Clickable, {
            className: j.participantMemberContainer,
            onContextMenu: P,
            ...e,
            children: [(0, s.jsx)(p.Z, {
              size: h.AvatarSizes.SIZE_40,
              className: j.participantAvatar,
              user: l.user,
              isMobile: x,
              status: N
            }), (0, s.jsxs)("div", {
              className: j.participantTextContainer,
              children: [(0, s.jsx)(h.NameWithRole, {
                name: l.userNick,
                color: null !== (t = null == v ? void 0 : v.colorString) && void 0 !== t ? t : void 0,
                className: j.participantName
              }), (0, s.jsx)(h.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: (0, Z.$)(l)
              })]
            })]
          })
        }
      }), (0, s.jsx)(h.Tooltip, {
        text: M ? R.Z.Messages.REQUEST_TO_SPEAK_INVITATION_SEND : R.Z.Messages.REQUEST_TO_SPEAK_ACCEPT,
        children: e => (0, s.jsx)(h.Button, {
          ...e,
          innerClassName: j.buttonContainer,
          look: h.Button.Looks.BLANK,
          size: h.Button.Sizes.NONE,
          onClick: L,
          disabled: M || r,
          children: (0, s.jsx)(h.MicrophoneArrowRightIcon, {
            size: "xs",
            color: "currentColor"
          })
        })
      }), (0, s.jsx)(h.Tooltip, {
        text: R.Z.Messages.REQUEST_TO_SPEAK_DECLINE,
        children: e => (0, s.jsx)(h.Button, {
          ...e,
          innerClassName: o()(j.buttonContainer, j.buttonMargin),
          look: h.Button.Looks.BLANK,
          size: h.Button.Sizes.NONE,
          onClick: O,
          children: (0, s.jsx)(h.CloseSmallIcon, {
            size: "xs",
            color: "currentColor"
          })
        })
      })]
    })
  }),
  P = a.memo(function(e) {
    let {
      channel: t
    } = e, [n, l] = (0, v.h)(t.id);
    return (0, s.jsx)(h.FormSwitch, {
      className: j.toggle,
      onChange: l,
      value: n,
      children: R.Z.Messages.MODERATOR_ALLOW_EVERYONE_RAISE_HAND
    })
  }),
  b = a.memo(function() {
    return (0, s.jsxs)("div", {
      className: j.emptyStateContainer,
      children: [(0, s.jsx)(A.Z, {}), (0, s.jsx)(h.Text, {
        className: j.emptyStateTitle,
        variant: "text-lg/semibold",
        color: "header-primary",
        children: R.Z.Messages.REQUEST_TO_SPEAK_EMPTY_LIST_TITLE
      }), (0, s.jsx)(h.Text, {
        className: j.emptyStateBody,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: R.Z.Messages.REQUEST_TO_SPEAK_EMPTY_LIST_BODY
      })]
    })
  });

function y(e) {
  let {
    channel: t,
    toggleRequestToSpeakSidebar: n,
    chatOpen: l
  } = e, i = (0, N.Fd)(t.id), a = [(0, d.e7)([_.Z], () => _.Z.can(M.Pl.MANAGE_CHANNELS, t) || _.Z.can(M.Pl.MANAGE_ROLES, t)) ? 1 : 0, Math.max(1, i.length)];
  return (0, s.jsxs)("div", {
    className: o()(j.container, {
      [j.chatOpen]: l
    }),
    children: [(0, s.jsx)(L, {
      toggleRequestToSpeakSidebar: n,
      chatOpen: l
    }), (0, s.jsx)(h.List, {
      className: j.contentContainer,
      sections: a,
      sectionHeight: function(e) {
        if (1 === e) return 40;
        return 0
      },
      rowHeight: function(e) {
        switch (e) {
          case 0:
            return 66;
          case 1:
            if (0 === i.length) return 178;
            return 48
        }
        return 0
      },
      renderRow: function(e) {
        let {
          section: n,
          row: l
        } = e;
        switch (n) {
          case 0:
            return (0, s.jsx)(P, {
              channel: t
            }, "rts-toggle");
          case 1: {
            if (0 === i.length) return (0, s.jsx)(b, {}, "participants-empty");
            let e = i[l];
            return (0, s.jsx)(O, {
              channel: t,
              participant: e,
              tempDisableOnInit: !0
            }, e.id)
          }
        }
        return null
      },
      renderSection: function(e) {
        let {
          section: t
        } = e;
        if (1 === t) return (0, s.jsx)(h.Text, {
          className: j.listTitle,
          variant: "text-xs/bold",
          color: "header-secondary",
          children: i.length > 0 ? R.Z.Messages.REQUEST_TO_SPEAK_LIST_TITLE.format({
            numHands: i.length
          }) : R.Z.Messages.REQUEST_TO_SPEAK_AREA_TITLE
        }, "participants-section");
        return null
      }
    })]
  })
}(i = l || (l = {}))[i.TOGGLE_REQUEST_TO_SPEAK = 0] = "TOGGLE_REQUEST_TO_SPEAK", i[i.PARTICIPANTS = 1] = "PARTICIPANTS"