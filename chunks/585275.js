    "use strict";
    let d;
    t.r(a), t("242167"), t("970173"), t("520712"), t("268111"), t("941497"), t("32026"), t("480839"), t("744285"), t("492257"), t("873817"), t("411104"), t("773603");
    var n = t("512722"),
      c = t.n(n),
      i = t("392711"),
      f = t.n(i),
      o = t("544891"),
      r = t("992774"),
      l = t("649754"),
      s = t("376398"),
      u = t("846519"),
      b = t("570140"),
      p = t("710845"),
      h = t("314897"),
      m = t("358085"),
      _ = t("998502"),
      E = t("569545"),
      I = t("70722"),
      g = t("981631"),
      O = t("65154");
    let T = {},
      S = new u.Timeout,
      A = !1,
      w = window.document.createElement("canvas");
    w.width = 512, w.height = 288;
    let v = w.getContext("2d");

    function N() {
      S.stop(), null != d && (l.default.removeSink(d, T), d = null)
    }
    let R = f().debounce((e, a, t, d) => {
      D(e, (0, E.encodeStreamKey)({
        streamType: null != a ? I.StreamTypes.GUILD : I.StreamTypes.CALL,
        guildId: a,
        channelId: t,
        ownerId: d
      }))
    }, 500);
    async function D(e, a) {
      if (d !== e) return;
      let t = () => D(e, a);
      if (!A) try {
        let t = await

        function(e, a) {
          let t = 0;
          return ((0, m.isPlatformEmbedded) ? function(e, a) {
            let t = (0, r.getVoiceEngine)(),
              n = (null == t ? void 0 : t.getNextVideoOutputFrame) != null;
            return new Promise((c, i) => {
              let f = e => {
                try {
                  null != e && a(e) && c(e)
                } catch (e) {
                  i(e)
                }
              };
              n ? t.getNextVideoOutputFrame(e).then(f, a => {
                if (d === e) throw a
              }) : l.default.addSink(e, T, f)
            }).finally(() => {
              !n && l.default.removeSink(e, T)
            })
          } : function(e, a) {
            let t = (0, s.getVideoStream)(e);
            if (null == t) return Promise.resolve(new ImageData(0, 0));
            let {
              width: d,
              height: n
            } = t.getVideoTracks()[0].getSettings(), c = document.createElement("video"), i = document.createElement("canvas");
            c.width = i.width = null != d ? d : 512, c.height = i.height = null != n ? n : 288, c.srcObject = t, c.play();
            let f = i.getContext("2d");
            return new Promise((e, t) => {
              c.ontimeupdate = () => {
                null == f || f.drawImage(c, 0, 0, i.width, i.height);
                let d = null == f ? void 0 : f.getImageData(0, 0, i.width, i.height);
                try {
                  null != d && a(d) && e(d)
                } catch (e) {
                  t(e)
                }
              }
            }).finally(() => {
              c.ontimeupdate = null, c.removeAttribute("srcObject"), c.load()
            })
          })(e, e => {
            if (new Uint32Array(e.data.buffer).some(e => 0 !== e)) return !0;
            if (++t > a) throw Error("Timed out awaiting non-black frame after ".concat(a, " frames"));
            return !1
          })
        }(e, 60);
        await

        function(e) {
          let a = 512 / e.width,
            t = Math.min(a, 288 / e.height),
            d = e.width * t,
            n = e.height * t;
          w.width = d, w.height = n;
          let c = window.document.createElement("canvas"),
            i = c.getContext("2d");
          c.width = e.width, c.height = e.height;
          let f = new ImageData(e.data, e.width, e.height);
          return null == i || i.putImageData(f, 0, 0), new Promise(a => {
            null == v || v.drawImage(c, 0, 0, e.width, e.height, 0, 0, d, n), a()
          })
        }(t);
        let n = w.toDataURL("image/jpeg");
        if (b.default.dispatch({
            type: "STREAM_PREVIEW_FETCH_SUCCESS",
            streamKey: a,
            previewURL: n
          }), m.isPlatformEmbedded) {
          let e = h.default.getToken();
          c()(null != e, "Auth token was null while sending screenshot."), await _.default.makeChunkedRequest(g.Endpoints.STREAM_PREVIEW(a), {
            thumbnail: n
          }, {
            method: "POST",
            token: e
          })
        } else await o.HTTP.post({
          url: g.Endpoints.STREAM_PREVIEW(a),
          body: {
            thumbnail: n
          },
          oldFormErrors: !0
        })
      } catch (a) {
        new p.default("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", a), d === e && S.start(6e4, t);
        return
      }
      d === e && (A ? S.start(6e4, t) : S.start(3e5, t))
    }
    a.default = {
      init() {
        b.default.subscribe("CONNECTION_OPEN", N), b.default.subscribe("LOGOUT", N), b.default.subscribe("STREAM_DELETE", N), b.default.subscribe("RTC_CONNECTION_VIDEO", e => {
          let {
            guildId: a,
            channelId: t,
            userId: n,
            streamId: c,
            context: i
          } = e;
          !(null == c || i !== O.MediaEngineContextTypes.STREAM || n !== h.default.getId() || __OVERLAY__) && (N(), d = c, R(c, a, t, n))
        }), b.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
          let {
            videoState: a
          } = e;
          A = a === g.MediaEngineVideoStates.PAUSED || !1
        })
      }
    }