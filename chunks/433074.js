"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("873546"),
  i = n("399606"),
  r = n("481060"),
  o = n("434650"),
  u = n("706454"),
  d = n("973616"),
  c = n("914010"),
  E = n("594174"),
  f = n("197409"),
  _ = n("104259"),
  T = n("626135"),
  I = n("135431"),
  m = n("674588"),
  N = n("264043"),
  p = n("132871"),
  S = n("147890"),
  C = n("981631"),
  A = n("689938"),
  h = n("761111");

function g(e) {
  var t, n;
  let {
    code: g,
    message: M
  } = e, [O, R, v] = (0, i.useStateFromStoresArray)([N.default], () => [N.default.getApplication(g), N.default.isInvalidApplication(g), N.default.getApplicationFetchState(g)], [g]), L = (0, i.useStateFromStores)([u.default], () => u.default.locale), P = (0, i.useStateFromStores)([c.default], () => {
    var e;
    return null !== (e = c.default.getGuildId()) && void 0 !== e ? e : void 0
  }), D = (0, i.useStateFromStores)([E.default], () => E.default.getCurrentUser()), [x, y] = a.useState(!1), U = a.useCallback(e => {
    e && y(!0)
  }, []), j = (0, o.useIsVisible)(U);
  a.useEffect(() => {
    (0, m.getEmbedApplication)(g)
  }, [g]), a.useEffect(() => {
    x && v === N.FetchState.FETCHED && T.default.track(C.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
      application_id: g,
      device_platform: l.isMobile ? "mobile_web" : "desktop_web",
      sender_user_id: M.author.id,
      guild_id: P,
      channel_id: M.channel_id
    })
  }, [x, g, null == D ? void 0 : D.id, M.channel_id, P, M.author.id, v]), a.useEffect(() => {
    x && R && T.default.track(C.AnalyticEvents.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
      device_platform: l.isMobile ? "mobile_web" : "desktop_web",
      sender_user_id: M.author.id,
      guild_id: P,
      channel_id: M.channel_id
    })
  }, [x, P, R, M.author.id, M.channel_id]);
  let b = e => {
    T.default.track(C.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
      application_id: g,
      device_platform: l.isMobile ? "mobile_web" : "desktop_web",
      clicked_section: e,
      guild_id: P,
      channel_id: M.channel_id
    }), (0, S.goToAppDirectory)({
      view: p.ApplicationDirectoryViews.APPLICATION,
      guildId: P,
      applicationId: g,
      entrypoint: {
        name: p.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED
      }
    })
  };
  if (R) return (0, s.jsxs)(f.default, {
    containerRef: j,
    children: [(0, s.jsx)(f.default.Header, {
      text: A.default.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_HEADER
    }), (0, s.jsx)(f.default.Body, {
      children: (0, s.jsxs)("div", {
        className: h.invalidBody,
        children: [(0, s.jsx)(f.default.Icon, {
          expired: !0
        }), (0, s.jsx)(f.default.Info, {
          expired: !0,
          title: A.default.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_TITLE,
          children: A.default.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_BODY
        })]
      })
    })]
  });
  if (null == O || v === N.FetchState.FETCHING) return (0, s.jsxs)(f.default, {
    containerRef: j,
    children: [(0, s.jsx)(f.default.Header, {
      text: A.default.Messages.APP_DIRECTORY_PROFILE_EMBED_RESOLVING_HEADER
    }), (0, s.jsx)(f.default.Body, {
      resolving: !0
    })]
  });
  let G = new Intl.NumberFormat(L, {
    notation: "compact",
    compactDisplay: "short"
  }).format(null !== (n = null === (t = O.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0);
  return (0, s.jsxs)(f.default, {
    containerRef: j,
    children: [(0, s.jsx)(f.default.Header, {
      text: A.default.Messages.APP_DIRECTORY_PROFILE_EMBED_HEADER
    }), (0, s.jsxs)(f.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: h.applicationInfoContainer,
        children: [(0, s.jsx)(f.default.Icon, {
          application: d.default.createFromServer(O),
          className: h.applicationIcon,
          onClick: () => b("application_icon")
        }), (0, s.jsx)(f.default.Info, {
          title: (0, s.jsx)(r.Clickable, {
            onClick: () => b("application_name"),
            children: O.name
          }),
          children: (0, s.jsxs)(r.Clickable, {
            className: h.guildCountContainer,
            onClick: () => b("application_guild_count"),
            children: [(0, s.jsx)(_.default, {
              width: 16,
              height: 16,
              className: h.guildCountIcon
            }), A.default.Messages.APP_DIRECTORY_PROFILE_EMBED_GUILD_COUNT.format({
              guildCount: G
            })]
          })
        })]
      }), (0, s.jsx)(f.default.Button, {
        onClick: () => {
          null != O && (0, I.installApplication)({
            applicationId: g,
            customInstallUrl: O.custom_install_url,
            installParams: O.install_params,
            integrationTypesConfig: O.integration_types_config,
            guildId: P,
            source: "app_directory_profile_embed"
          })
        },
        color: f.default.Button.Colors.GREEN,
        children: A.default.Messages.APPLICATION_ADD_BUTTON
      })]
    })]
  })
}